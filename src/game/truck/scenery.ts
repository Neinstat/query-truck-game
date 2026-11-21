/**
 * The places the truck parks (GAME_DESIGN.md §7; which place on which day: sql-core/truck/places.ts).
 * Each place has its own ground, its own things near the truck (world.ts PLACE_PROPS, kept off the
 * customers' path), a far backdrop, and a little life (cars on the overpass, a skater, a bouncing
 * basketball, bobbing boats and gulls, a fountain). Built from boxes, cylinders and spheres in the
 * palette, flat-shaded. ⚠ PLACEHOLDER models (docs/ASSETS.md).
 */
import * as THREE from 'three';
import type { Ink } from '../art/riso';
import type { PlaceId } from '../../sql-core/truck/places';
import { block, buildCustomer, mat } from './build';
import { inkColour } from './colour';
import type { Sky } from './sky';
import { GROUND_Y, LAYOUT, PLACE_PROPS, QUEUE_PATH_3D, TRUCK, type Prop } from './world';

type Animate = (time: number, rain: number) => void;

/** A shape placed at (x, y, z). */
function shape(g: THREE.Object3D, geometry: THREE.BufferGeometry, ink: Ink | THREE.Material, x: number, y: number, z: number): THREE.Mesh {
  const mesh = new THREE.Mesh(geometry, typeof ink === 'string' ? mat(ink) : ink);
  mesh.position.set(x, y, z);
  g.add(mesh);
  return mesh;
}

/** A small seeded random generator, so a place looks the same every visit. */
function seeded(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), a | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ── Lamps (shared, so they all light up together at dusk) ─────────────────────────────

const LAMP_ON = { mustard: inkColour('mustard'), red: inkColour('red') };
const LAMP_OFF = new THREE.Color('#e9e2cf');
const lampMaterials = {
  mustard: new THREE.MeshBasicMaterial({ color: LAMP_OFF.clone() }),
  red: new THREE.MeshBasicMaterial({ color: LAMP_OFF.clone() }),
};

// ── Things near the truck ───────────────────────────────────────────────────────────

function tree(g: THREE.Group, size: number): void {
  shape(g, new THREE.CylinderGeometry(0.12 * size, 0.16 * size, 1.4 * size, 6), 'woodDark', 0, 0.7 * size, 0);
  shape(g, new THREE.IcosahedronGeometry(1.1 * size, 0), size > 1 ? 'tealDark' : 'teal', 0, 2.0 * size, 0);
}

function bush(g: THREE.Group, size: number): void {
  shape(g, new THREE.IcosahedronGeometry(0.6 * size, 0), 'grassDark', 0, 0.45 * size, 0).scale.set(1.1, 0.75, 1);
}

function bench(g: THREE.Group): void {
  block(g, 'wood', [-0.8, 0.42, -0.22, 0.8, 0.48, 0.22]);
  block(g, 'wood', [-0.8, 0.55, 0.18, 0.8, 0.85, 0.24]);
  block(g, 'ink', [-0.7, 0, -0.2, -0.64, 0.42, 0.2]);
  block(g, 'ink', [0.64, 0, -0.2, 0.7, 0.42, 0.2]);
}

function picnicTable(g: THREE.Group): void {
  block(g, 'wood', [-0.9, 0.72, -0.4, 0.9, 0.78, 0.4]);
  block(g, 'woodDark', [-0.9, 0.42, -0.85, 0.9, 0.46, -0.6]);
  block(g, 'woodDark', [-0.9, 0.42, 0.6, 0.9, 0.46, 0.85]);
  // Legs under the table and both seats, tied together low down (the seats never float).
  block(g, 'ink', [-0.7, 0, -0.06, -0.62, 0.72, 0.06]);
  block(g, 'ink', [0.62, 0, -0.06, 0.7, 0.72, 0.06]);
  for (const x of [-0.7, 0.62]) {
    for (const z of [-0.77, 0.69]) block(g, 'ink', [x, 0, z, x + 0.08, 0.42, z + 0.08]);
    block(g, 'inkSoft', [x, 0.16, -0.77, x + 0.08, 0.22, 0.77]);
  }
  block(g, 'ink', [-0.02, 0.78, -0.02, 0.02, 2.1, 0.02]);
  shape(g, new THREE.ConeGeometry(1.2, 0.5, 8), 'red', 0, 2.1, 0);
  shape(g, new THREE.ConeGeometry(0.5, 0.22, 8), 'white', 0, 2.28, 0);
}

function lamp(g: THREE.Group): void {
  block(g, 'ink', [-0.05, 0, -0.05, 0.05, 3.2, 0.05]);
  shape(g, new THREE.SphereGeometry(0.2, 8, 6), lampMaterials.mustard, 0, 3.3, 0);
}

function bin(g: THREE.Group): void {
  shape(g, new THREE.CylinderGeometry(0.25, 0.22, 0.8, 8), 'teal', 0, 0.4, 0);
  shape(g, new THREE.CylinderGeometry(0.27, 0.27, 0.06, 8), 'tealDark', 0, 0.82, 0);
}

/** A skate ramp: a curved face rising away from the truck (−z) to a deck with a metal coping. */
function quarterPipe(g: THREE.Group): void {
  const width = 3.2;
  const steps = 7;
  const R = 1.4;
  for (let i = 0; i < steps; i++) {
    const a0 = (i / steps) * (Math.PI / 2);
    const a1 = ((i + 1) / steps) * (Math.PI / 2);
    // A point on the curve: flat at the front (z = 0), vertical at the back (z = −R).
    const z0 = -Math.sin(a0) * R;
    const y0 = R - Math.cos(a0) * R;
    const z1 = -Math.sin(a1) * R;
    const y1 = R - Math.cos(a1) * R;
    const len = Math.hypot(z1 - z0, y1 - y0) + 0.02;
    const slab = new THREE.Mesh(new THREE.BoxGeometry(width, 0.08, len), mat(i % 2 ? 'concrete' : 'paperShade'));
    slab.position.set(0, (y0 + y1) / 2, (z0 + z1) / 2);
    slab.rotation.x = -Math.atan2(y1 - y0, z0 - z1);
    g.add(slab);
  }
  // Side walls under the curve, the deck on top, and its coping.
  for (const x of [-width / 2, width / 2 - 0.08]) {
    for (let i = 0; i < 4; i++) block(g, 'concrete', [x, 0, -R + i * 0.25, x + 0.08, R - i * 0.38, -R + (i + 1) * 0.25]);
  }
  block(g, 'concrete', [-width / 2, 0, -R - 1.4, width / 2, R, -R]);
  block(g, 'red', [-width / 2 - 0.01, 0.3, -R - 1.2, -width / 2, 1.0, -R - 0.3]);
  shape(g, new THREE.CylinderGeometry(0.045, 0.045, width, 6), 'inkSoft', 0, R + 0.03, -R).rotation.z = Math.PI / 2;
  // A railing along the back of the deck.
  for (const x of [-width / 2 + 0.05, width / 2 - 0.05]) block(g, 'ink', [x - 0.03, R, -R - 1.4, x + 0.03, R + 1, -R - 1.34]);
  block(g, 'ink', [-width / 2, R + 0.95, -R - 1.4, width / 2, R + 1, -R - 1.34]);
}

function funBox(g: THREE.Group): void {
  block(g, 'concrete', [-1.0, 0, -0.6, 1.0, 0.5, 0.6]);
  for (const side of [-1, 1]) {
    const ramp = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.06, 1.2), mat('paperShade'));
    ramp.position.set(side * 1.45, 0.25, 0);
    ramp.rotation.z = side * -0.47;
    g.add(ramp);
  }
  block(g, 'mustard', [-1.0, 0.5, -0.62, 1.0, 0.52, -0.58]);
  shape(g, new THREE.CylinderGeometry(0.03, 0.03, 2, 6), 'inkSoft', 0, 0.54, 0).rotation.z = Math.PI / 2;
}

function rail(g: THREE.Group): void {
  for (const x of [-1.1, 1.1]) block(g, 'ink', [x - 0.04, 0, -0.04, x + 0.04, 0.45, 0.04]);
  shape(g, new THREE.CylinderGeometry(0.035, 0.035, 2.6, 8), 'mustard', 0, 0.47, 0).rotation.z = Math.PI / 2;
}

/** An overpass pillar, painted with graffiti stripes. */
function pillar(g: THREE.Group, rand: () => number): void {
  shape(g, new THREE.CylinderGeometry(0.55, 0.6, 7, 10), 'concrete', 0, 3.5, 0);
  const inks: Ink[] = ['red', 'mustard', 'teal', 'pink', 'lilac'];
  for (let i = 0; i < 3; i++) {
    const band = shape(g, new THREE.CylinderGeometry(0.62, 0.62, 0.25 + rand() * 0.4, 10, 1, true, rand() * 6, 1.5 + rand() * 2), inks[Math.floor(rand() * inks.length)], 0, 0.6 + i * 0.7 + rand() * 0.3, 0);
    (band.material as THREE.Material).side = THREE.DoubleSide;
  }
}

function hoop(g: THREE.Group): void {
  block(g, 'inkSoft', [-0.07, 0, 0.55, 0.07, 3.0, 0.69]);
  block(g, 'inkSoft', [-0.05, 2.9, 0.1, 0.05, 3.0, 0.6]);
  block(g, 'white', [-0.9, 2.6, 0.06, 0.9, 3.6, 0.12]);
  block(g, 'red', [-0.3, 2.75, 0.05, 0.3, 3.15, 0.06]);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.23, 0.025, 4, 12), mat('red'));
  ring.rotation.x = Math.PI / 2;
  ring.position.set(0, 3.05, -0.2);
  g.add(ring);
}

function bike(g: THREE.Group, x: number, ink: Ink): void {
  for (const z of [-0.5, 0.5]) {
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.035, 4, 12), mat('ink'));
    wheel.rotation.y = Math.PI / 2;
    wheel.position.set(x, 0.34, z);
    g.add(wheel);
  }
  const frame = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 1.0), mat(ink));
  frame.position.set(x, 0.62, 0);
  g.add(frame);
  block(g, ink, [x - 0.025, 0.34, 0.1, x + 0.025, 0.65, 0.15]);
  block(g, 'ink', [x - 0.06, 0.66, 0.08, x + 0.06, 0.7, 0.28]);
  block(g, 'inkSoft', [x - 0.25, 0.82, -0.45, x + 0.25, 0.85, -0.42]);
  block(g, ink, [x - 0.02, 0.6, -0.45, x + 0.02, 0.84, -0.42]);
}

function bikeRack(g: THREE.Group): void {
  for (const x of [-0.6, 0, 0.6]) {
    const loop = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.03, 4, 10, Math.PI), mat('inkSoft'));
    loop.rotation.y = Math.PI / 2;
    loop.position.set(x, 0, 0);
    g.add(loop);
  }
  bike(g, -0.3, 'red');
  bike(g, 0.3, 'teal');
}

function flagPole(g: THREE.Group): void {
  shape(g, new THREE.CylinderGeometry(0.05, 0.06, 7, 6), 'white', 0, 3.5, 0);
  block(g, 'red', [0.05, 6.1, -0.01, 1.35, 6.5, 0.01]);
  block(g, 'white', [0.05, 5.7, -0.01, 1.35, 6.1, 0.01]);
}

function bollard(g: THREE.Group): void {
  shape(g, new THREE.CylinderGeometry(0.18, 0.22, 0.55, 8), 'ink', 0, 0.28, 0);
  shape(g, new THREE.CylinderGeometry(0.26, 0.26, 0.08, 8), 'ink', 0, 0.58, 0);
}

function crates(g: THREE.Group): void {
  block(g, 'wood', [-0.75, 0, -0.4, 0.05, 0.8, 0.4]);
  block(g, 'woodDark', [0.1, 0, -0.35, 0.8, 0.7, 0.35]);
  block(g, 'wood', [-0.5, 0.8, -0.3, 0.2, 1.4, 0.3]);
  for (const y of [0.25, 0.55]) block(g, 'woodDark', [-0.76, y, -0.41, 0.06, y + 0.05, 0.41]);
}

function barrel(g: THREE.Group, ink: Ink): void {
  shape(g, new THREE.CylinderGeometry(0.32, 0.32, 0.9, 10), ink, 0, 0.45, 0);
  for (const y of [0.15, 0.75]) shape(g, new THREE.CylinderGeometry(0.335, 0.335, 0.06, 10), 'ink', 0, y, 0);
}

/** A market stall: a counter with goods, four posts and a striped awning. */
function stall(g: THREE.Group, stripe: Ink, rand: () => number): void {
  block(g, 'wood', [-1.2, 0, -0.5, 1.2, 0.9, 0.5]);
  const goods: Ink[] = ['red', 'mustard', 'grass', 'pink', 'peach'];
  for (let i = 0; i < 8; i++) {
    shape(g, new THREE.IcosahedronGeometry(0.12, 0), goods[Math.floor(rand() * goods.length)], -1.0 + (i % 4) * 0.6 + rand() * 0.1, 1.0, -0.25 + Math.floor(i / 4) * 0.45);
  }
  for (const x of [-1.2, 1.15]) for (const z of [-0.55, 0.5]) block(g, 'ink', [x, 0, z, x + 0.05, 2.1, z + 0.05]);
  for (let i = 0; i < 6; i++) {
    const s = block(g, i % 2 ? 'white' : stripe, [-1.35 + i * 0.45, 0, -0.75, -0.9 + i * 0.45, 0.04, 0.75]);
    s.position.y = 2.15;
    s.rotation.x = -0.15;
  }
}

function fountain(g: THREE.Group): Animate {
  shape(g, new THREE.CylinderGeometry(2.1, 2.2, 0.5, 16), 'concrete', 0, 0.25, 0);
  shape(g, new THREE.CylinderGeometry(1.9, 1.9, 0.05, 16), 'tealLight', 0, 0.46, 0);
  shape(g, new THREE.CylinderGeometry(0.3, 0.4, 1.4, 8), 'concrete', 0, 0.9, 0);
  shape(g, new THREE.CylinderGeometry(0.9, 0.6, 0.25, 12), 'concrete', 0, 1.6, 0);
  shape(g, new THREE.CylinderGeometry(0.75, 0.75, 0.04, 12), 'tealLight', 0, 1.72, 0);
  const jet = shape(g, new THREE.ConeGeometry(0.22, 1, 6), 'white', 0, 2.2, 0);
  return (time) => {
    jet.scale.y = 0.85 + Math.sin(time * 3) * 0.15;
  };
}

function planter(g: THREE.Group): void {
  block(g, 'woodDark', [-0.5, 0, -0.5, 0.5, 0.5, 0.5]);
  shape(g, new THREE.IcosahedronGeometry(0.5, 0), 'grass', 0, 0.75, 0).scale.set(1, 0.8, 1);
  for (const [x, z, ink] of [
    [-0.2, -0.3, 'red'],
    [0.25, -0.25, 'mustard'],
    [0, -0.4, 'pink'],
  ] as const) {
    shape(g, new THREE.IcosahedronGeometry(0.09, 0), ink, x, 0.98, z);
  }
}

/** Builds one prop at its place; some props come back with an animation. */
function buildProp(parent: THREE.Group, p: Prop, rand: () => number): Animate | null {
  const g = new THREE.Group();
  g.position.set(p.x, GROUND_Y, p.z);
  g.rotation.y = p.yaw ?? 0;
  parent.add(g);
  const size = p.size ?? 1;
  switch (p.kind) {
    case 'tree':
      tree(g, size);
      break;
    case 'bush':
      bush(g, size);
      break;
    case 'bench':
      bench(g);
      break;
    case 'picnicTable':
      picnicTable(g);
      break;
    case 'lamp':
      lamp(g);
      break;
    case 'bin':
      bin(g);
      break;
    case 'quarterPipe':
      quarterPipe(g);
      break;
    case 'funBox':
      funBox(g);
      break;
    case 'rail':
      rail(g);
      break;
    case 'pillar':
      pillar(g, rand);
      break;
    case 'hoop':
      hoop(g);
      break;
    case 'bikeRack':
      bikeRack(g);
      break;
    case 'flagPole':
      flagPole(g);
      break;
    case 'bollard':
      bollard(g);
      break;
    case 'crates':
      crates(g);
      break;
    case 'barrel':
      barrel(g, rand() < 0.5 ? 'red' : 'teal');
      break;
    case 'stall':
      stall(g, (['red', 'teal', 'mustard'] as const)[Math.floor(rand() * 3)], rand);
      break;
    case 'fountain':
      return fountain(g);
    case 'planter':
      planter(g);
      break;
  }
  return null;
}

// ── Ground and backdrops ──────────────────────────────────────────────────────────────

function ground(g: THREE.Group, ink: Ink, z = -40, size = 160): THREE.Mesh {
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat(ink));
  plane.rotation.x = -Math.PI / 2;
  plane.position.set(0, GROUND_Y, z);
  g.add(plane);
  return plane;
}

/** A flat patch on the ground (painted lines, a court, a shadow). */
function patch(g: THREE.Group, ink: Ink, x1: number, z1: number, x2: number, z2: number, lift = 0.006): void {
  block(g, ink, [x1, GROUND_Y + lift - 0.003, z1, x2, GROUND_Y + lift, z2]);
}

/** The path customers walk along. */
function queuePath(g: THREE.Group, ink: Ink): void {
  for (let i = 1; i < QUEUE_PATH_3D.length - 1; i++) {
    const a = QUEUE_PATH_3D[i - 1];
    const b = QUEUE_PATH_3D[i];
    const length = Math.hypot(b.x - a.x, b.z - a.z) + 1.2;
    const piece = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.02, length), mat(ink));
    piece.position.set((a.x + b.x) / 2, GROUND_Y + 0.012, (a.z + b.z) / 2);
    piece.rotation.y = Math.atan2(b.x - a.x, b.z - a.z);
    g.add(piece);
  }
}

/** A far-away city skyline. */
function skyline(g: THREE.Group, z = -58, inks: [Ink, Ink] = ['lilac', 'inkSoft']): void {
  for (let i = 0, x = -70; x < 70; i++) {
    const w = 3 + ((i * 7) % 5);
    const h = 6 + ((i * 11) % 14);
    block(g, i % 2 ? inks[0] : inks[1], [x, GROUND_Y, z - (i % 3) * 3, x + w, GROUND_Y + h, z + 3 - (i % 3) * 3]);
    x += w + 0.6;
  }
}

/** A row of low buildings with windows, facing the truck (+z). */
function buildings(g: THREE.Group, z: number, from: number, to: number, rand: () => number, inks: Ink[]): void {
  for (let x = from; x < to; ) {
    const w = 5 + Math.floor(rand() * 4);
    const floors = 2 + Math.floor(rand() * 3);
    const h = floors * 3;
    const ink = inks[Math.floor(rand() * inks.length)];
    block(g, ink, [x, GROUND_Y, z - 6, x + w - 0.2, GROUND_Y + h, z]);
    block(g, 'inkSoft', [x - 0.1, GROUND_Y + h, z - 6.1, x + w - 0.1, GROUND_Y + h + 0.25, z + 0.1]);
    for (let f = 0; f < floors; f++) {
      for (let wx = x + 0.8; wx < x + w - 1; wx += 1.5) {
        block(g, f === 0 && wx < x + 2 ? 'woodDark' : 'tealLight', [wx, GROUND_Y + f * 3 + (f === 0 && wx < x + 2 ? 0 : 1), z, wx + 0.8, GROUND_Y + f * 3 + 2.2, z + 0.05]);
      }
    }
    x += w;
  }
}

// ── The places ──────────────────────────────────────────────────────────────────────

function park(g: THREE.Group, animations: Animate[]): void {
  void animations;
  ground(g, 'grass');
  queuePath(g, 'paperShade');
  // Mowing stripes.
  for (let z = -6; z > -40; z -= 4) {
    const stripe = new THREE.Mesh(new THREE.PlaneGeometry(140, 2), mat('grassDark'));
    stripe.rotation.x = -Math.PI / 2;
    stripe.position.set(0, GROUND_Y + 0.005, z);
    g.add(stripe);
  }
  // String lights between the lamps.
  const lamps = PLACE_PROPS.park.filter((p) => p.kind === 'lamp').map((l) => new THREE.Vector3(l.x, GROUND_Y + 3.3, l.z));
  stringLights(g, lamps);
  // A row of trees further back, and the city far away.
  for (let x = -40; x <= 40; x += 5) {
    const t = new THREE.Group();
    t.position.set(x + ((x * 7) % 3), GROUND_Y, -24 - ((x * 13) % 4));
    tree(t, 1.5);
    g.add(t);
  }
  skyline(g);
}

function stringLights(g: THREE.Group, points: THREE.Vector3[]): void {
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1];
    const b = points[i];
    for (let k = 1; k < 12; k++) {
      const t = k / 12;
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 4), k % 2 ? lampMaterials.mustard : lampMaterials.red);
      bulb.position.lerpVectors(a, b, t);
      bulb.position.y -= Math.sin(t * Math.PI) * 0.6;
      g.add(bulb);
    }
  }
}

function skatepark(g: THREE.Group, animations: Animate[], rand: () => number): void {
  ground(g, 'grassDark');
  // The concrete yard, a darker strip in the overpass's shadow, and painted lines.
  patch(g, 'concrete', -30, -26, 30, 6, 0.004);
  patch(g, 'paperShade', -30, -22, 30, -14, 0.008);
  queuePath(g, 'paperShade');
  for (const z of [-5.5, -9.5]) patch(g, 'white', 8, z - 0.05, 14, z + 0.05, 0.012);
  // The overpass: a deck across the sky with a railing, held by the pillars (props) and more
  // further out; cars drive across it.
  const deckY = GROUND_Y + 7;
  block(g, 'concrete', [-90, deckY, -22, 90, deckY + 0.9, -12]);
  block(g, 'paperShade', [-90, deckY - 0.3, -21.5, 90, deckY, -12.5]);
  block(g, 'inkSoft', [-90, deckY + 0.9, -12.2, 90, deckY + 1.6, -12]);
  block(g, 'mustard', [-90, deckY + 0.5, -12.02, 90, deckY + 0.6, -11.98]);
  for (const x of [-30, -20, 20, 30]) {
    const p = new THREE.Group();
    p.position.set(x, GROUND_Y, -13);
    pillar(p, rand);
    g.add(p);
  }
  const cars: { root: THREE.Group; speed: number; lane: number; offset: number }[] = [];
  const carInks: Ink[] = ['red', 'mustard', 'teal', 'white', 'lilac'];
  for (let i = 0; i < 6; i++) {
    const root = new THREE.Group();
    const ink = carInks[i % carInks.length];
    block(root, ink, [-1.1, 0, -0.5, 1.1, 0.6, 0.5]);
    block(root, 'tealLight', [-0.6, 0.6, -0.45, 0.5, 1.0, 0.45]);
    block(root, ink, [-0.55, 0.98, -0.45, 0.45, 1.05, 0.45]);
    root.position.y = deckY + 0.9;
    g.add(root);
    const lane = i % 2;
    cars.push({ root, speed: (lane ? -1 : 1) * (11 + rand() * 6), lane, offset: rand() * 180 });
  }
  animations.push((time) => {
    for (const c of cars) {
      const x = ((((c.offset + time * c.speed) % 180) + 180) % 180) - 90;
      c.root.position.set(x, deckY + 0.9, c.lane ? -15 : -18.5);
      c.root.rotation.y = c.speed > 0 ? 0 : Math.PI;
    }
  });
  // A chain-link fence at the back and a graffiti wall.
  for (let x = -24; x <= 24; x += 2.5) block(g, 'inkSoft', [x - 0.04, GROUND_Y, -25.6, x + 0.04, GROUND_Y + 2.2, -25.5]);
  for (const y of [0.1, 1.1, 2.15]) block(g, 'inkSoft', [-24, GROUND_Y + y, -25.6, 24, GROUND_Y + y + 0.05, -25.55]);
  block(g, 'concrete', [-18, GROUND_Y, -27, 18, GROUND_Y + 3.2, -26.6]);
  const inks: Ink[] = ['red', 'mustard', 'teal', 'pink', 'lilac', 'tealDark'];
  for (let i = 0; i < 14; i++) {
    const x = -17 + i * 2.5 + rand();
    const y = 0.3 + rand() * 1.6;
    block(g, inks[Math.floor(rand() * inks.length)], [x, GROUND_Y + y, -26.61, x + 1 + rand() * 1.5, GROUND_Y + y + 0.4 + rand() * 0.8, -26.58]);
  }
  skyline(g, -60);
  // A skater rolling back and forth behind the ramps.
  const skater = buildCustomer('runner');
  const board = new THREE.Group();
  block(board, 'red', [-0.12, 0.08, -0.45, 0.12, 0.11, 0.45]);
  for (const z of [-0.3, 0.3]) block(board, 'ink', [-0.13, 0, z - 0.05, 0.13, 0.08, z + 0.05]);
  skater.root.add(board);
  skater.root.children.forEach((c) => c !== board && (c.position.y += 0.11));
  g.add(skater.root);
  animations.push((time) => {
    const t = (Math.sin(time * 0.35) + 1) / 2;
    skater.root.position.set(-2 + t * 12, GROUND_Y, -18.6);
    skater.root.rotation.y = Math.cos(time * 0.35) > 0 ? -Math.PI / 2 : Math.PI / 2;
    skater.arms[0].rotation.z = 0.9;
    skater.arms[1].rotation.z = -0.9;
  });
}

function school(g: THREE.Group, animations: Animate[], rand: () => number): void {
  ground(g, 'grass');
  // The yard: asphalt with a basketball court painted on it.
  patch(g, 'inkSoft', -14, -20, 16, 2, 0.004);
  queuePath(g, 'paperShade');
  patch(g, 'teal', 0, -16, 8, -6.5, 0.008);
  for (const [x1, z1, x2, z2] of [
    [0, -16, 8, -15.9],
    [0, -6.6, 8, -6.5],
    [0, -16, 0.1, -6.5],
    [7.9, -16, 8, -6.5],
    [0, -11.3, 8, -11.2],
  ] as const) {
    patch(g, 'white', x1, z1, x2, z2, 0.012);
  }
  // A basketball bouncing under the far hoop.
  const ball = shape(g, new THREE.IcosahedronGeometry(0.13, 1), 'mustardDark', 4, GROUND_Y + 0.13, -12.8);
  animations.push((time) => {
    ball.position.y = GROUND_Y + 0.13 + Math.abs(Math.sin(time * 3.2)) * 1.1;
  });
  // The fence and the school: two floors of classrooms, a red roof, a clock and a door.
  for (let x = -14; x <= 16; x += 2) block(g, 'tealDark', [x - 0.04, GROUND_Y, -20.1, x + 0.04, GROUND_Y + 1.8, -20]);
  block(g, 'tealDark', [-14, GROUND_Y + 1.75, -20.1, 16, GROUND_Y + 1.82, -20]);
  block(g, 'peach', [-26, GROUND_Y, -32, 26, GROUND_Y + 8, -24]);
  block(g, 'red', [-26.5, GROUND_Y + 8, -32.5, 26.5, GROUND_Y + 8.6, -23.5]);
  block(g, 'white', [-26, GROUND_Y + 3.9, -24.02, 26, GROUND_Y + 4.1, -23.95]);
  for (let f = 0; f < 2; f++) {
    for (let x = -24; x < 24; x += 3) {
      if (f === 0 && Math.abs(x) < 2) continue;
      block(g, 'white', [x - 0.1, GROUND_Y + 1.1 + f * 4 - 0.1, -24.02, x + 1.9, GROUND_Y + 3 + f * 4 + 0.1, -23.98]);
      block(g, 'tealLight', [x, GROUND_Y + 1.1 + f * 4, -24.04, x + 1.8, GROUND_Y + 3 + f * 4, -23.97]);
    }
  }
  block(g, 'woodDark', [-1.4, GROUND_Y, -24.05, 1.4, GROUND_Y + 2.6, -23.96]);
  block(g, 'peach', [-3, GROUND_Y + 8, -25, 3, GROUND_Y + 11, -24]);
  block(g, 'red', [-3.3, GROUND_Y + 11, -25.3, 3.3, GROUND_Y + 11.4, -23.7]);
  const clock = shape(g, new THREE.CylinderGeometry(1, 1, 0.1, 16), 'white', 0, GROUND_Y + 9.5, -23.95);
  clock.rotation.x = Math.PI / 2;
  block(g, 'ink', [-0.04, GROUND_Y + 9.5, -23.88, 0.04, GROUND_Y + 10.2, -23.86]);
  block(g, 'ink', [-0.04, GROUND_Y + 9.46, -23.88, 0.5, GROUND_Y + 9.54, -23.86]);
  // A row of trees down each side and the city behind.
  for (const x of [-20, -16, 20, 24]) {
    const t = new THREE.Group();
    t.position.set(x, GROUND_Y, -21 + rand());
    tree(t, 1.4);
    g.add(t);
  }
  skyline(g, -62);
}

function harbour(g: THREE.Group, animations: Animate[], rand: () => number): void {
  // The sea all around, the pier's boards where the truck stands, and its edge.
  const SEA = GROUND_Y - 0.6;
  ground(g, 'teal', -40, 260).position.y = SEA;
  block(g, 'wood', [-30, SEA, -14.2, 30, GROUND_Y, 8]);
  queuePath(g, 'woodDark');
  for (let x = -30; x < 30; x += 0.9) block(g, 'woodDark', [x, GROUND_Y, -14.2, x + 0.04, GROUND_Y + 0.004, 8]);
  block(g, 'woodDark', [-30, GROUND_Y - 1.2, -14.5, 30, GROUND_Y + 0.12, -14.2]);
  for (let x = -29; x < 30; x += 3) shape(g, new THREE.CylinderGeometry(0.2, 0.2, 2.5, 6), 'woodDark', x, GROUND_Y - 1.2, -14.5);
  // Waves: pale stripes that drift.
  const waves: THREE.Mesh[] = [];
  for (let i = 0; i < 14; i++) {
    const wave = block(g, 'tealLight', [-1.5, GROUND_Y + 0.01, -0.05, 1.5, GROUND_Y + 0.02, 0.05]);
    wave.position.set(-40 + rand() * 80, SEA + 0.01, -18 - rand() * 30);
    waves.push(wave);
  }
  // Boats bobbing: two fishing boats and a sailboat.
  const boats: { root: THREE.Group; phase: number }[] = [];
  const boat = (x: number, z: number, hull: Ink, sail: boolean) => {
    const root = new THREE.Group();
    block(root, hull, [-2, -0.4, -0.8, 2, 0.5, 0.8]);
    block(root, 'white', [-2.05, 0.35, -0.82, 2.05, 0.5, 0.82]);
    const bow = new THREE.Mesh(new THREE.ConeGeometry(0.8, 1.2, 4), mat(hull));
    bow.rotation.z = -Math.PI / 2;
    bow.rotation.x = Math.PI / 4;
    bow.position.set(2.55, 0.05, 0);
    root.add(bow);
    if (sail) {
      block(root, 'ink', [-0.05, 0.5, -0.05, 0.05, 5, 0.05]);
      const sailShape = new THREE.Shape([new THREE.Vector2(0, 0), new THREE.Vector2(0, 4.2), new THREE.Vector2(2.4, 0)]);
      const s = new THREE.Mesh(new THREE.ShapeGeometry(sailShape), mat('white'));
      (s.material as THREE.Material).side = THREE.DoubleSide;
      s.position.set(0.1, 0.7, 0);
      root.add(s);
    } else {
      block(root, 'white', [-1.2, 0.5, -0.6, 0.2, 1.5, 0.6]);
      block(root, 'tealLight', [-1.21, 1.0, -0.5, 0.21, 1.3, 0.5]);
      block(root, 'red', [-1.3, 1.5, -0.7, 0.3, 1.6, 0.7]);
    }
    root.position.set(x, SEA, z);
    root.rotation.y = rand() * 0.6 - 0.3;
    g.add(root);
    boats.push({ root, phase: rand() * 6 });
  };
  boat(-7, -19, 'red', false);
  boat(8, -22, 'teal', true);
  boat(-18, -30, 'mustard', false);
  // A lighthouse, cranes and containers far away, green hills on the horizon.
  shape(g, new THREE.CylinderGeometry(1.2, 1.8, 2, 8), 'concrete', -32, GROUND_Y + 1, -52);
  for (let i = 0; i < 5; i++) shape(g, new THREE.CylinderGeometry(1.2 - i * 0.08, 1.28 - i * 0.08, 2.4, 10), i % 2 ? 'red' : 'white', -32, GROUND_Y + 3.2 + i * 2.4, -52);
  const beacon = shape(g, new THREE.CylinderGeometry(0.7, 0.7, 1.2, 8), lampMaterials.mustard, -32, GROUND_Y + 15.6, -52);
  shape(g, new THREE.ConeGeometry(1, 1, 8), 'red', -32, GROUND_Y + 16.7, -52);
  void beacon;
  const containerInks: Ink[] = ['red', 'teal', 'mustard', 'tealDark', 'redDark'];
  for (let i = 0; i < 18; i++) {
    const x = 24 + (i % 6) * 3.2;
    const y = Math.floor(i / 6) * 1.3;
    block(g, containerInks[Math.floor(rand() * containerInks.length)], [x, GROUND_Y + y, -48, x + 3, GROUND_Y + y + 1.25, -45]);
  }
  for (const x of [30, 40]) {
    block(g, 'mustard', [x, GROUND_Y, -44, x + 0.5, GROUND_Y + 14, -43.5]);
    block(g, 'mustard', [x - 6, GROUND_Y + 13.5, -44, x + 4, GROUND_Y + 14.2, -43.5]);
    block(g, 'ink', [x - 4.5, GROUND_Y + 9, -43.85, x - 4.45, GROUND_Y + 13.5, -43.8]);
  }
  for (const [x, r, h] of [
    [-60, 22, 10],
    [-20, 16, 7],
    [60, 26, 12],
  ] as const) {
    shape(g, new THREE.ConeGeometry(r, h, 7), 'grassDark', x, GROUND_Y + h / 2, -95);
  }
  // Gulls circling.
  const gulls: THREE.Group[] = [];
  for (let i = 0; i < 5; i++) {
    const gull = new THREE.Group();
    for (const side of [-1, 1]) {
      const wing = block(gull, 'white', [0, -0.02, -0.12, 0.45, 0.02, 0.12]);
      wing.rotation.y = side < 0 ? Math.PI : 0;
      wing.rotation.z = side * 0.35;
    }
    g.add(gull);
    gulls.push(gull);
  }
  animations.push((time) => {
    for (const b of boats) {
      b.root.position.y = SEA + Math.sin(time * 1.2 + b.phase) * 0.12;
      b.root.rotation.z = Math.sin(time * 0.9 + b.phase) * 0.04;
    }
    waves.forEach((w, i) => {
      w.position.x += Math.sin(time * 0.4 + i) * 0.004;
    });
    gulls.forEach((gull, i) => {
      const a = time * (0.25 + i * 0.04) + i * 1.3;
      gull.position.set(Math.cos(a) * (8 + i * 2) - 2, GROUND_Y + 8 + i * 0.8 + Math.sin(time * 2 + i) * 0.3, -22 + Math.sin(a) * 6);
      gull.rotation.y = -a;
      gull.children.forEach((w, k) => (w.rotation.z = (k ? 1 : -1) * (0.2 + Math.sin(time * 6 + i) * 0.35)));
    });
  });
}

function square(g: THREE.Group, animations: Animate[], rand: () => number): void {
  void animations;
  ground(g, 'paperShade');
  queuePath(g, 'concrete');
  // Paving lines.
  for (let x = -30; x <= 30; x += 3) patch(g, 'concrete', x, -26, x + 0.06, 6, 0.008);
  for (let z = -26; z <= 6; z += 3) patch(g, 'concrete', -30, z, 30, z + 0.06, 0.008);
  // Bunting between the lamps.
  const lamps = PLACE_PROPS.square.filter((p) => p.kind === 'lamp').map((l) => new THREE.Vector3(l.x, GROUND_Y + 3.2, l.z));
  const flags: Ink[] = ['red', 'mustard', 'teal', 'pink', 'white'];
  for (let i = 1; i < lamps.length; i++) {
    for (let k = 1; k < 14; k++) {
      const t = k / 14;
      const flag = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.3, 3), mat(flags[k % flags.length]));
      flag.position.lerpVectors(lamps[i - 1], lamps[i], t);
      flag.position.y -= Math.sin(t * Math.PI) * 0.7 + 0.15;
      flag.rotation.x = Math.PI;
      g.add(flag);
    }
  }
  // Colourful shophouses around the square and a clock tower in the middle of them.
  buildings(g, -24, -40, -5, rand, ['peach', 'mustard', 'pink', 'lilac', 'tealLight']);
  buildings(g, -24, 6, 42, rand, ['peach', 'mustard', 'pink', 'lilac', 'tealLight']);
  block(g, 'wood', [-4, GROUND_Y, -30, 4, GROUND_Y + 16, -24]);
  block(g, 'redDark', [-4.4, GROUND_Y + 16, -30.4, 4.4, GROUND_Y + 16.6, -23.6]);
  shape(g, new THREE.ConeGeometry(4.2, 4, 4), 'red', 0, GROUND_Y + 18.6, -27).rotation.y = Math.PI / 4;
  const face = shape(g, new THREE.CylinderGeometry(1.8, 1.8, 0.1, 20), 'white', 0, GROUND_Y + 12.5, -23.95);
  face.rotation.x = Math.PI / 2;
  block(g, 'ink', [-0.06, GROUND_Y + 12.5, -23.88, 0.06, GROUND_Y + 13.8, -23.86]);
  block(g, 'ink', [-0.06, GROUND_Y + 12.44, -23.88, 1.0, GROUND_Y + 12.56, -23.86]);
  block(g, 'woodDark', [-1.5, GROUND_Y, -24.05, 1.5, GROUND_Y + 3.5, -23.96]);
  skyline(g, -64);
}

/**
 * The place around the truck. Returns a group with `setSky(sky)` (the sun or moon, and the
 * lamps) and `update(time, rain)` (the place's moving things) in its userData.
 */
export function buildPlace(id: PlaceId): THREE.Group {
  const g = new THREE.Group();
  const rand = seeded(id.length * 7919 + id.charCodeAt(0));
  const animations: Animate[] = [];
  if (id === 'park') park(g, animations);
  else if (id === 'skatepark') skatepark(g, animations, rand);
  else if (id === 'school') school(g, animations, rand);
  else if (id === 'harbour') harbour(g, animations, rand);
  else square(g, animations, rand);
  for (const p of PLACE_PROPS[id]) {
    const animate = buildProp(g, p, rand);
    if (animate) animations.push(animate);
  }

  // The truck's own striped awning over the window, seen from inside.
  const w = LAYOUT.window;
  const HZ = TRUCK.depth / 2;
  for (let i = 0; i < 8; i++) {
    const x = w.min.x - 0.2 + i * ((w.max.x - w.min.x + 0.4) / 8);
    const stripe = block(g, i % 2 ? 'white' : 'red', [x, 0, 0, x + (w.max.x - w.min.x + 0.4) / 8, 0.04, 0.9]);
    stripe.position.y = w.max.y + 0.25;
    stripe.position.z = -HZ - 0.5;
    stripe.rotation.x = -0.35;
  }

  // The sun, which crosses the sky over the day, and the moon at night.
  const sunMaterial = new THREE.MeshBasicMaterial({ color: inkColour('mustard'), fog: false });
  const sun = new THREE.Mesh(new THREE.CircleGeometry(6, 24), sunMaterial);
  g.add(sun);
  g.userData.setSky = (sky: Sky) => {
    const distance = 90;
    const up = (sky.elevation * Math.PI) / 180;
    sun.position.set(sky.across * 70, GROUND_Y + Math.sin(up) * distance, -distance * Math.cos(up));
    sun.lookAt(0, GROUND_Y + 1, 0);
    sun.visible = sky.elevation > -6 || sky.lamps > 0.95;
    if (sky.lamps > 0.95) sun.position.set(-30, GROUND_Y + 35, -80); // the moon
    sunMaterial.color.set(sky.disc);
    lampMaterials.mustard.color.copy(LAMP_OFF).lerp(LAMP_ON.mustard, sky.lamps);
    lampMaterials.red.color.copy(LAMP_OFF).lerp(LAMP_ON.red, sky.lamps);
  };
  g.userData.update = (time: number, rain: number) => {
    for (const a of animations) a(time, rain);
  };
  return g;
}
