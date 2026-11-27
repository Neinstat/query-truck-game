/**
 * Low-poly models for the food truck, built from boxes, cylinders and spheres in the palette
 * (art/riso.ts), flat-shaded. ⚠ PLACEHOLDER models (docs/ASSETS.md): to be replaced by CC0 3D
 * packs later.
 */
import * as THREE from 'three';
import type { Ink } from '../art/riso';
import { inkColour } from './colour';
import { truckLook } from './look';
import { CLOCK3D, LAYOUT, TRUCK, type Box3 } from './world';

const materials = new Map<Ink, THREE.MeshLambertMaterial>();
export function mat(ink: Ink): THREE.MeshLambertMaterial {
  let m = materials.get(ink);
  if (!m) materials.set(ink, (m = new THREE.MeshLambertMaterial({ color: inkColour(ink), flatShading: true })));
  return m;
}

/** A box from min/max corners. */
export function block(parent: THREE.Object3D, ink: Ink, b: Box3 | [number, number, number, number, number, number]): THREE.Mesh {
  const [x1, y1, z1, x2, y2, z2] = Array.isArray(b) ? b : [b.min.x, b.min.y, b.min.z, b.max.x, b.max.y, b.max.z];
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(Math.abs(x2 - x1), Math.abs(y2 - y1), Math.abs(z2 - z1)), mat(ink));
  mesh.position.set((x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2);
  parent.add(mesh);
  return mesh;
}

const HX = TRUCK.length / 2;
const HZ = TRUCK.depth / 2;
const H = TRUCK.height;
const T = 0.08; // wall thickness

// ── The truck ─────────────────────────────────────────────────────────────────────────

/**
 * The espresso machine on the back counter, by upgrade tier (7.2): 0 an old dented one, 1 the
 * red one with its pressure gauge, 2 a modern chrome one with two group heads and a display.
 */
function espressoMachine(g: THREE.Group, c: Box3): void {
  const tier = truckLook().machine;
  const body = tier === 0 ? 'woodDark' : tier === 1 ? 'red' : 'white';
  block(g, body, [c.min.x, c.min.y, c.min.z, c.max.x, c.max.y - 0.08, c.max.z]);
  block(g, tier === 2 ? 'tealLight' : 'paperShade', [c.min.x + 0.04, c.max.y - 0.08, c.min.z + 0.04, c.max.x - 0.04, c.max.y, c.max.z - 0.04]);
  if (tier === 0) {
    // A dent in the side and a patch of rust-coloured tape.
    block(g, 'redDark', [c.min.x + 0.05, c.min.y + 0.3, c.min.z - 0.012, c.min.x + 0.2, c.min.y + 0.4, c.min.z]);
    block(g, 'inkSoft', [c.max.x - 0.2, c.max.y - 0.3, c.min.z - 0.01, c.max.x - 0.05, c.max.y - 0.2, c.min.z]);
  } else {
    const gauge = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.02, 12), mat(tier === 2 ? 'mustard' : 'white'));
    gauge.rotation.x = Math.PI / 2;
    gauge.position.set((c.min.x + c.max.x) / 2, c.max.y - 0.2, c.min.z - 0.005);
    g.add(gauge);
  }
  if (tier === 2) {
    // A glowing display strip and a steam wand.
    block(g, 'tealLight', [c.min.x + 0.12, c.max.y - 0.3, c.min.z - 0.012, c.max.x - 0.12, c.max.y - 0.26, c.min.z]);
    block(g, 'inkSoft', [c.max.x - 0.03, c.min.y + 0.1, c.min.z + 0.1, c.max.x + 0.02, c.max.y - 0.2, c.min.z + 0.14]);
  }
  for (const x of [c.min.x + 0.15, c.max.x - 0.15]) {
    block(g, 'ink', [x - 0.05, c.min.y + 0.16, c.min.z - 0.06, x + 0.05, c.min.y + 0.22, c.min.z]);
    block(g, 'white', [x - 0.04, c.min.y, c.min.z - 0.05, x + 0.04, c.min.y + 0.08, c.min.z + 0.03]);
  }
}

/** Herb pots on the back counter (7.2b): one at the first tier, two at the second. */
function plants(g: THREE.Group): void {
  const tier = truckLook().plants;
  if (tier === 0) return;
  const pots: [number, number][] = tier === 1 ? [[0.9, HZ - 0.25]] : [[0.9, HZ - 0.25], [1.5, HZ - 0.25]];
  for (const [x, z] of pots) {
    block(g, 'redDark', [x - 0.09, 0.95, z - 0.09, x + 0.09, 1.1, z + 0.09]);
    block(g, 'grass', [x - 0.07, 1.1, z - 0.07, x + 0.07, 1.2, z + 0.07]);
    block(g, 'grassDark', [x - 0.04, 1.2, z - 0.04, x + 0.04, 1.26, z + 0.04]);
    block(g, 'grass', [x - 0.12, 1.12, z - 0.02, x - 0.07, 1.16, z + 0.02]);
    block(g, 'grass', [x + 0.07, 1.12, z - 0.02, x + 0.12, 1.16, z + 0.02]);
  }
}

/**
 * The till on the front counter by upgrade tier (9.7): 0 a pad of paper notes, 1 the tablet on its
 * stand, 2 a computer with a monitor and a keyboard. It is always the "tablet" object.
 */
function till(g: THREE.Group): void {
  const tier = truckLook().till;
  const t = LAYOUT.tablet;
  const cx = (t.min.x + t.max.x) / 2;
  const cz = (t.min.z + t.max.z) / 2;
  if (tier === 0) {
    // A clipboard and a few loose, curling sheets.
    const pad = new THREE.Group();
    block(pad, 'woodDark', [-0.16, -0.12, -0.01, 0.16, 0.12, 0.01]);
    block(pad, 'paper', [-0.14, -0.1, 0.01, 0.14, 0.1, 0.018]);
    for (let i = 0; i < 4; i++) block(pad, 'inkSoft', [-0.11, 0.06 - i * 0.045, 0.018, 0.02 + (i % 2) * 0.07, 0.068 - i * 0.045, 0.021]);
    block(pad, 'red', [0.06, -0.09, 0.018, 0.12, -0.07, 0.021]);
    pad.position.set(cx, t.min.y + 0.1, cz);
    pad.rotation.x = -1.0;
    g.add(pad);
    block(g, 'paperShade', [cx + 0.18, t.min.y, cz - 0.1, cx + 0.3, t.min.y + 0.012, cz + 0.02]);
    return;
  }
  if (tier === 2) {
    // A monitor on a neck, and a keyboard lying in front of it.
    block(g, 'ink', [cx - 0.12, t.min.y, cz - 0.05, cx + 0.12, t.min.y + 0.03, cz + 0.07]);
    block(g, 'inkSoft', [cx - 0.03, t.min.y + 0.03, cz - 0.01, cx + 0.03, t.min.y + 0.2, cz + 0.02]);
    const screen = new THREE.Group();
    block(screen, 'ink', [-0.27, -0.16, -0.015, 0.27, 0.16, 0.015]);
    block(screen, 'tealDark', [-0.25, -0.14, 0.015, 0.25, 0.14, 0.02]);
    block(screen, 'mustard', [-0.22, 0.07, 0.02, -0.04, 0.095, 0.022]);
    for (let i = 0; i < 3; i++) block(screen, 'tealLight', [-0.22, 0.03 - i * 0.045, 0.02, 0.12 - i * 0.05, 0.048 - i * 0.045, 0.022]);
    block(screen, 'pink', [0.14, -0.12, 0.02, 0.22, 0.04, 0.022]);
    screen.position.set(cx, t.min.y + 0.36, cz + 0.02);
    screen.rotation.x = -0.12;
    g.add(screen);
    block(g, 'inkSoft', [cx - 0.2, t.min.y, cz + 0.14, cx + 0.2, t.min.y + 0.025, cz + 0.24]);
    block(g, 'paperShade', [cx - 0.18, t.min.y + 0.025, cz + 0.15, cx + 0.18, t.min.y + 0.03, cz + 0.23]);
    return;
  }
  // Tablet (POS) on a stand, tilted towards the player.
  block(g, 'ink', [t.min.x + 0.15, t.min.y, t.min.z + 0.06, t.max.x - 0.15, t.min.y + 0.08, t.max.z - 0.06]);
  const tablet = new THREE.Group();
  block(tablet, 'ink', [-0.18, -0.12, -0.012, 0.18, 0.12, 0.012]);
  block(tablet, 'tealDark', [-0.16, -0.1, 0.012, 0.16, 0.1, 0.016]);
  block(tablet, 'mustard', [-0.13, 0.05, 0.016, -0.02, 0.065, 0.018]);
  block(tablet, 'tealLight', [-0.13, 0.02, 0.016, 0.1, 0.03, 0.018]);
  block(tablet, 'tealLight', [-0.13, -0.01, 0.016, 0.06, 0.0, 0.018]);
  tablet.position.set(cx, t.min.y + 0.14, cz);
  tablet.rotation.x = -0.5;
  g.add(tablet);
}

/**
 * The menu board by state (9.7): 0 worn (faded, scribbled, a curling corner), 1 clean (black
 * board, plain lines), 2 good (coloured heading and prices), 3 modern (a glowing screen menu).
 */
function menuBoard(g: THREE.Group): void {
  const tier = truckLook().board;
  const m = LAYOUT.menuBoard;
  const frame = tier === 3 ? 'white' : 'woodDark';
  block(g, frame, [m.min.x - 0.04, m.min.y - 0.04, m.min.z - 0.01, m.max.x + 0.04, m.max.y + 0.04, m.max.z]);
  const face = tier === 0 ? 'paperShade' : tier === 3 ? 'inkSoft' : 'ink';
  block(g, face, [m.min.x, m.min.y, m.min.z - 0.02, m.max.x, m.max.y, m.max.z - 0.005]);
  const z0 = m.min.z - 0.03;
  const z1 = m.min.z - 0.02;
  if (tier === 0) {
    // Faint scribbles, a stain and a torn-off corner.
    for (let i = 0; i < 4; i++) block(g, 'inkSoft', [m.min.x + 0.08, m.max.y - 0.2 - i * 0.13, z0, m.min.x + 0.3 + (i % 3) * 0.14, m.max.y - 0.17 - i * 0.13, z1]);
    block(g, 'wood', [m.min.x + 0.45, m.min.y + 0.15, z0, m.min.x + 0.7, m.min.y + 0.3, z1]);
    block(g, 'woodDark', [m.max.x - 0.12, m.max.y - 0.12, z0, m.max.x, m.max.y, z1]);
    return;
  }
  if (tier === 1) {
    for (let i = 0; i < 5; i++) block(g, 'paper', [m.min.x + 0.08, m.max.y - 0.2 - i * 0.12, z0, m.min.x + 0.45 + (i % 3) * 0.12, m.max.y - 0.17 - i * 0.12, z1]);
    return;
  }
  block(g, tier === 3 ? 'tealLight' : 'mustard', [m.min.x + 0.2, m.max.y - 0.14, z0, m.max.x - 0.2, m.max.y - 0.1, z1]);
  for (let i = 0; i < 5; i++) {
    const y = m.max.y - 0.24 - i * 0.1;
    block(g, tier === 3 ? 'tealLight' : 'paper', [m.min.x + 0.08, y, z0, m.min.x + 0.45 + (i % 3) * 0.12, y + 0.03, z1]);
    block(g, i % 2 ? 'pink' : tier === 3 ? 'mustard' : 'tealLight', [m.max.x - 0.22, y, z0, m.max.x - 0.08, y + 0.03, z1]);
  }
  if (tier === 3) block(g, 'tealLight', [m.min.x + 0.02, m.min.y + 0.02, z0, m.max.x - 0.02, m.min.y + 0.05, z1]);
}

/**
 * The driver's cab, seen through the opening in the left end wall (9.8): a dashboard with
 * gauges, a steering wheel, two seats, a gear lever and a hanging air freshener. You can look at
 * it but not walk in. The cab shell and the windscreen are built in exterior.ts.
 */
function cockpit(g: THREE.Group): void {
  const front = -HX - T - 1.15; // the cab's front (exterior.ts)
  // The cab floor and a mat under the pedals.
  block(g, 'woodDark', [front + 0.04, -0.09, -HZ + 0.02, -HX, 0, HZ - 0.02]);
  block(g, 'inkSoft', [front + 0.2, 0, 0.0, front + 0.6, 0.012, 0.6]);
  // The dashboard, low and long, under the windscreen, with a glovebox and gauges.
  block(g, 'inkSoft', [front + 0.04, 0.78, -HZ + 0.04, front + 0.3, 1.02, HZ - 0.04]);
  block(g, 'ink', [front + 0.3, 0.98, -HZ + 0.04, front + 0.34, 1.02, HZ - 0.04]);
  block(g, 'woodDark', [front + 0.3, 0.8, -0.9, front + 0.32, 0.95, -0.2]);
  block(g, 'tealLight', [front + 0.3, 0.88, 0.1, front + 0.32, 0.96, 0.3]);
  for (const z of [0.56, 0.68]) block(g, 'mustard', [front + 0.3, 0.88, z - 0.05, front + 0.32, 0.93, z + 0.05]);
  block(g, 'red', [front + 0.3, 0.86, 0.75, front + 0.32, 0.92, 0.8]);
  // The steering wheel on its column, tilted towards the driver.
  const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.022, 6, 18), mat('ink'));
  wheel.position.set(front + 0.5, 0.98, 0.4);
  wheel.rotation.y = Math.PI / 2;
  wheel.rotation.x = 0.35;
  g.add(wheel);
  block(g, 'inkSoft', [front + 0.34, 0.9, 0.38, front + 0.5, 0.94, 0.42]);
  block(g, 'mustard', [front + 0.495, 0.95, 0.37, front + 0.51, 1.01, 0.43]);
  // Two seats (the driver's and a passenger's), facing the windscreen.
  for (const z of [0.4, -0.4]) {
    block(g, 'redDark', [front + 0.72, 0.38, z - 0.22, front + 1.05, 0.5, z + 0.22]);
    block(g, 'red', [front + 1.02, 0.5, z - 0.22, front + 1.09, 1.2, z + 0.22]);
    block(g, 'redDark', [front + 0.99, 1.0, z - 0.12, front + 1.07, 1.3, z + 0.12]);
    block(g, 'inkSoft', [front + 0.8, 0, z - 0.04, front + 0.95, 0.38, z + 0.04]);
  }
  // A gear lever and the handbrake between the seats.
  block(g, 'ink', [front + 0.55, 0.0, -0.02, front + 0.65, 0.4, 0.02]);
  block(g, 'mustard', [front + 0.54, 0.4, -0.04, front + 0.66, 0.46, 0.04]);
  // The rear-view mirror and a pink air freshener swinging from it (an easter egg: a tiny dice).
  block(g, 'ink', [front + 0.12, 1.88, -0.1, front + 0.16, 1.94, 0.1]);
  block(g, 'pink', [front + 0.12, 1.66, 0.0, front + 0.17, 1.8, 0.06]);
  // A paper cup left on the passenger seat.
  block(g, 'white', [front + 0.85, 0.5, -0.45, front + 0.93, 0.62, -0.37]);
  // A glow from inside the cab, so it never reads as a black hole.
  const lamp = new THREE.PointLight(0xfff0d0, 0.9, 3.2);
  lamp.position.set(front + 0.7, 1.9, 0);
  g.add(lamp);
}

/**
 * The little things that make the truck feel lived in (9.8): a rug at the window, ceiling lamps,
 * a rail of utensils, a fire extinguisher, a mop and bucket and crates under the back counter.
 */
function details(g: THREE.Group): void {
  block(g, 'teal', [-1.1, 0.002, -0.55, 1.1, 0.008, 0.55]);
  block(g, 'paper', [-1.0, 0.008, -0.45, 1.0, 0.012, 0.45]);
  for (const x of [-1.2, 1.2]) {
    block(g, 'inkSoft', [x - 0.02, H - 0.2, -0.02, x + 0.02, H, 0.02]);
    const shade = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.17, 0.12, 10), mat('mustard'));
    shade.position.set(x, H - 0.24, 0);
    g.add(shade);
    block(g, 'paper', [x - 0.07, H - 0.31, -0.07, x + 0.07, H - 0.29, 0.07]);
  }
  // A rail of utensils on the back wall, left of the clock.
  block(g, 'inkSoft', [-2.0, 1.72, HZ - 0.05, -1.4, 1.74, HZ - 0.03]);
  const utensils: [number, Ink, number][] = [[-1.92, 'wood', 0.3], [-1.78, 'inkSoft', 0.34], [-1.64, 'redDark', 0.26], [-1.5, 'teal', 0.3]];
  for (const [x, ink, len] of utensils) block(g, ink, [x - 0.02, 1.72 - len, HZ - 0.06, x + 0.02, 1.72, HZ - 0.04]);
  // Fire extinguisher by the door, and a mop and bucket.
  const ext = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.4, 10), mat('red'));
  ext.position.set(HX - 0.12, 0.75, 0.8);
  g.add(ext);
  block(g, 'ink', [HX - 0.16, 0.95, 0.77, HX - 0.08, 1.0, 0.83]);
  block(g, 'tealLight', [HX - 0.3, 0, -0.95, HX - 0.1, 0.25, -0.75]);
  block(g, 'wood', [HX - 0.21, 0.25, -0.86, HX - 0.19, 1.3, -0.84]);
  block(g, 'paperShade', [HX - 0.27, 1.2, -0.9, HX - 0.13, 1.3, -0.8]);
  // Crates under the back counter.
  const bc = LAYOUT.backCounter;
  for (const [x, ink] of [[-0.9, 'wood'], [0.2, 'woodDark'], [1.3, 'wood']] as const) {
    block(g, ink, [x, 0, bc.min.z - 0.02, x + 0.5, 0.32, bc.min.z + 0.38]);
    block(g, 'mustard', [x + 0.05, 0.32, bc.min.z + 0.05, x + 0.45, 0.4, bc.min.z + 0.35]);
  }
}

export function buildTruck(): THREE.Group {
  const g = new THREE.Group();
  const w = LAYOUT.window;

  // Floor and ceiling.
  block(g, 'wood', [-HX, -0.1, -HZ, HX, 0, HZ]);
  // Floor boards' gaps, off the counters' edges (shared planes flicker).
  for (let x = -HX + 0.413; x < HX - 0.1; x += 0.4) block(g, 'woodDark', [x, 0, -HZ, x + 0.02, 0.003, HZ]);
  block(g, 'inkSoft', [-HX, H, -HZ, HX, H + 0.1, HZ]);
  for (let x = -2; x <= 2; x += 2) block(g, 'mustard', [x - 0.3, H - 0.04, -0.1, x + 0.3, H, 0.1]);

  // Front wall with the serving window cut out.
  block(g, 'paper', [-HX, 0, -HZ - T, w.min.x, H, -HZ]);
  block(g, 'paper', [w.max.x, 0, -HZ - T, HX, H, -HZ]);
  block(g, 'paper', [w.min.x, w.max.y, -HZ - T, w.max.x, H, -HZ]);
  block(g, 'teal', [w.min.x, 0, -HZ - T, w.max.x, w.min.y, -HZ]);
  // Window frame and rolled-up shutter. Each piece sticks 1 cm out into the opening, so its
  // inner face never lies in the same plane as the wall's cut edge (that flickered: z-fighting).
  block(g, 'ink', [w.min.x - 0.05, w.max.y - 0.01, -HZ - 0.02, w.max.x + 0.05, w.max.y + 0.12, -HZ + 0.02]);
  block(g, 'ink', [w.min.x - 0.05, w.min.y, -HZ - 0.02, w.min.x + 0.01, w.max.y, -HZ + 0.02]);
  block(g, 'ink', [w.max.x - 0.01, w.min.y, -HZ - 0.02, w.max.x + 0.05, w.max.y, -HZ + 0.02]);

  // Back and end walls: paper above, a teal band below. The right end wall has the back door's
  // opening cut out, so the park shows when the door swings open.
  const dr = LAYOUT.door;
  for (const [x1, z1, x2, z2] of [
    [-HX, HZ, HX, HZ + T],
    [-HX - T, -HZ, -HX, LAYOUT.cabOpening.min.z],
    [-HX - T, LAYOUT.cabOpening.max.z, -HX, HZ],
    [HX, -HZ, HX + T, dr.min.z],
    [HX, dr.max.z, HX + T, HZ],
  ] as const) {
    block(g, 'paper', [x1, 0.9, z1, x2, H, z2]);
    block(g, 'teal', [x1, 0, z1, x2, 0.9, z2]);
  }
  block(g, 'paper', [HX, dr.max.y, dr.min.z, HX + T, H, dr.max.z]);
  // The cab opening on the left end: wall above it, and the cockpit beyond (9.8).
  const co = LAYOUT.cabOpening;
  block(g, 'paper', [-HX - T, co.max.y, co.min.z, -HX, H, co.max.z]);
  block(g, 'woodDark', [-HX - T - 0.02, co.max.y - 0.06, co.min.z - 0.04, -HX + 0.02, co.max.y, co.max.z + 0.04]);
  cockpit(g);
  details(g);
  // A metal step outside the door, where the Manager stands.
  block(g, 'inkSoft', [HX + T, -0.08, -0.55, HX + 0.75, 0, 0.55]);

  // Front counter (under the window) with a white top.
  const fc = LAYOUT.frontCounter;
  block(g, 'wood', [fc.min.x, 0, fc.min.z, fc.max.x, fc.max.y - 0.04, fc.max.z]);
  block(g, 'white', [fc.min.x - 0.02, fc.max.y - 0.04, fc.min.z - 0.05, fc.max.x + 0.02, fc.max.y, fc.max.z + 0.03]);
  for (let x = fc.min.x + 0.1; x < fc.max.x - 0.5; x += 0.6) block(g, 'woodDark', [x, 0.12, fc.max.z, x + 0.5, 0.8, fc.max.z + 0.01]);

  till(g);

  // Tip jar and a potted plant.
  const j = LAYOUT.tipJar;
  const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.2, 10), mat('tealLight'));
  jar.position.set((j.min.x + j.max.x) / 2, 1.1, (j.min.z + j.max.z) / 2);
  g.add(jar);
  block(g, 'mustard', [jar.position.x - 0.06, 1.0, jar.position.z - 0.06, jar.position.x + 0.06, 1.08, jar.position.z + 0.06]);
  block(g, 'red', [-0.55, 1.0, -HZ + 0.15, -0.4, 1.12, -HZ + 0.3]);
  const leaves = new THREE.Mesh(new THREE.IcosahedronGeometry(0.11, 0), mat('grassDark'));
  leaves.position.set(-0.475, 1.2, -HZ + 0.225);
  g.add(leaves);

  // Fridge full of bottles.
  const f = LAYOUT.fridge;
  block(g, 'tealLight', f);
  block(g, 'white', [f.max.x, 0.15, f.min.z + 0.05, f.max.x + 0.01, 1.85, f.max.z - 0.05]);
  const inks: Ink[] = ['white', 'mustard', 'pink', 'red', 'teal', 'white'];
  for (let shelf = 0; shelf < 4; shelf++) {
    const y = 0.3 + shelf * 0.4;
    block(g, 'inkSoft', [f.max.x + 0.01, y - 0.02, f.min.z + 0.08, f.max.x + 0.05, y, f.max.z - 0.08]);
    for (let i = 0; i < 3; i++) {
      const z = f.min.z + 0.12 + i * 0.1;
      block(g, inks[(i + shelf) % inks.length], [f.max.x + 0.01, y, z, f.max.x + 0.07, y + 0.22 + (i % 2) * 0.04, z + 0.07]);
    }
  }
  block(g, 'mustard', [f.max.x + 0.01, 1.0, f.max.z - 0.06, f.max.x + 0.05, 1.5, f.max.z - 0.03]);

  // Stock shelves with boxes and coffee sacks.
  const s = LAYOUT.stockShelves;
  for (let shelf = 0; shelf < 3; shelf++) {
    const y = 0.35 + shelf * 0.6;
    block(g, 'woodDark', [s.min.x, y - 0.04, s.min.z, s.max.x, y, s.max.z]);
    for (let i = 0; i < 2; i++) {
      const z = s.min.z + 0.08 + i * 0.36;
      if ((i + shelf) % 3 === 2) {
        const sack = new THREE.Mesh(new THREE.DodecahedronGeometry(0.16, 0), mat('wood'));
        sack.scale.set(1.1, 1.3, 1);
        sack.position.set(s.min.x + 0.28, y + 0.18, z + 0.15);
        g.add(sack);
      } else {
        block(g, 'mustard', [s.min.x + 0.08, y, z, s.max.x - 0.04, y + 0.3 + (i % 2) * 0.08, z + 0.3]);
      }
    }
  }

  // Back counter, red espresso machine, menu board, recipe binders.
  const bc = LAYOUT.backCounter;
  block(g, 'wood', [bc.min.x, 0, bc.min.z, bc.max.x, bc.max.y - 0.04, bc.max.z]);
  block(g, 'white', [bc.min.x - 0.02, bc.max.y - 0.04, bc.min.z - 0.03, bc.max.x + 0.02, bc.max.y, bc.max.z]);
  const c = LAYOUT.coffeeMachine;
  espressoMachine(g, c);
  plants(g);
  menuBoard(g);
  const r = LAYOUT.recipeShelf;
  block(g, 'woodDark', [r.min.x - 0.05, r.min.y - 0.04, r.min.z, r.max.x + 0.05, r.min.y, r.max.z]);
  const binders: Ink[] = ['red', 'teal', 'mustard', 'red', 'inkSoft', 'teal'];
  for (let i = 0; i < 6; i++) {
    const x = r.min.x + 0.02 + i * 0.095;
    block(g, binders[i], [x, r.min.y, r.min.z + 0.04, x + 0.08, r.max.y - (i % 3) * 0.03, r.max.z - 0.02]);
  }

  // Wall clock.
  const clock = new THREE.Mesh(new THREE.CylinderGeometry(CLOCK3D.r, CLOCK3D.r, 0.03, 16), mat('white'));
  clock.rotation.x = Math.PI / 2;
  clock.position.set(CLOCK3D.x, CLOCK3D.y, CLOCK3D.z - 0.02);
  g.add(clock);
  const hand = (len: number, ink: Ink) => {
    // Pivots at the centre of the clock.
    const geometry = new THREE.BoxGeometry(0.016, len, 0.01).translate(0, len / 2, 0);
    const h = new THREE.Mesh(geometry, mat(ink));
    h.position.set(CLOCK3D.x, CLOCK3D.y, CLOCK3D.z - 0.045);
    g.add(h);
    return h;
  };
  // A dark rim, a dot for every hour (bigger at 12, 3, 6 and 9) and a cap over the hands.
  const rim = new THREE.Mesh(new THREE.TorusGeometry(CLOCK3D.r, 0.014, 4, 24), mat('ink'));
  rim.position.set(CLOCK3D.x, CLOCK3D.y, CLOCK3D.z - 0.036);
  g.add(rim);
  for (let h = 0; h < 12; h++) {
    const a = (h / 12) * Math.PI * 2;
    const big = h % 3 === 0;
    const dot = new THREE.Mesh(new THREE.CylinderGeometry(big ? 0.014 : 0.008, big ? 0.014 : 0.008, 0.006, 8), mat(big ? 'red' : 'ink'));
    dot.rotation.x = Math.PI / 2;
    dot.position.set(CLOCK3D.x - Math.sin(a) * CLOCK3D.r * 0.8, CLOCK3D.y + Math.cos(a) * CLOCK3D.r * 0.8, CLOCK3D.z - 0.038);
    g.add(dot);
  }
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.01, 8), mat('ink'));
  cap.rotation.x = Math.PI / 2;
  cap.position.set(CLOCK3D.x, CLOCK3D.y, CLOCK3D.z - 0.052);
  g.add(cap);
  const hourHand = hand(0.08, 'ink');
  const minuteHand = hand(0.12, 'red');
  // The clock faces −z: seen from the front, +rotation.z turns clockwise.
  g.userData.setClock = (minutes: number) => {
    hourHand.rotation.z = (((minutes / 60) % 12) / 12) * Math.PI * 2;
    minuteHand.rotation.z = ((minutes % 60) / 60) * Math.PI * 2;
  };
  g.userData.setClock(10 * 60);

  // Back door with a little window and a handle. It hangs on a hinge at its −z edge and swings
  // outwards; `setDoor(0…1)` opens it, `setDoor(0, t)` with a time gives the knocking rattle.
  const d = LAYOUT.door;
  const hinge = new THREE.Group();
  hinge.position.set(d.min.x, 0, d.min.z);
  const local = (b: [number, number, number, number, number, number]) =>
    [b[0] - d.min.x, b[1], b[2] - d.min.z, b[3] - d.min.x, b[4], b[5] - d.min.z] as [number, number, number, number, number, number];
  block(hinge, 'inkSoft', local([d.min.x - 0.02, d.min.y, d.min.z, d.max.x, d.max.y, d.max.z]));
  block(hinge, 'peach', local([d.min.x - 0.03, 1.3, -0.25, d.min.x - 0.02, 1.8, 0.25]));
  block(hinge, 'mustard', local([d.min.x - 0.03, 1.05, -0.3, d.min.x - 0.02, 1.15, 0.3]));
  block(hinge, 'mustard', local([d.min.x - 0.08, 0.95, 0.32, d.min.x - 0.02, 1.0, 0.42]));
  g.add(hinge);
  g.userData.setDoor = (open: number, knockTime?: number) => {
    // Knocking: two quick rattles, then a pause.
    const rattle =
      knockTime === undefined ? 0 : (Math.sin(knockTime * 40) * 0.025 * (knockTime % 1.6 < 0.45 ? 1 : 0));
    // +y rotation swings the free (+z) edge towards +x: outwards, away from the player.
    hinge.rotation.y = open * 1.35 + rattle;
  };

  // The how-to-play book, open on the back counter, with a sign so players notice it.
  const gb = LAYOUT.guideBook;
  const bx = (gb.min.x + gb.max.x) / 2;
  const bz = gb.min.z + 0.17;
  const book = new THREE.Group();
  book.position.set(bx, gb.min.y, bz);
  book.rotation.y = 0.15;
  block(book, 'red', [-0.17, 0, -0.12, 0.17, 0.02, 0.12]);
  for (const side of [-1, 1]) {
    const page = block(book, 'white', [-0.15, 0, -0.11, 0, 0.012, 0.11]);
    page.position.set(side * 0.078, 0.026, 0);
    page.rotation.z = side * -0.12;
    for (let k = 0; k < 4; k++) {
      const line = block(book, 'inkSoft', [-0.11, 0, -0.002, -0.03, 0.004, 0.006]);
      line.position.set(side * 0.078, 0.036, -0.07 + k * 0.04);
      line.rotation.z = side * -0.12;
    }
  }
  g.add(book);
  g.add(guideSign(bx, gb.max.y - 0.06, gb.max.z - 0.02));

  // The desk phone: a red body, a handset on top and a keypad.
  const ph = LAYOUT.phone;
  const phone = new THREE.Group();
  phone.position.set((ph.min.x + ph.max.x) / 2, ph.min.y, (ph.min.z + ph.max.z) / 2);
  phone.rotation.y = -0.2;
  block(phone, 'red', [-0.15, 0, -0.11, 0.15, 0.06, 0.11]);
  block(phone, 'ink', [-0.17, 0.06, -0.04, 0.17, 0.095, 0.04]);
  for (const x of [-0.17, 0.17]) block(phone, 'ink', [x - 0.03, 0.06, -0.05, x + 0.03, 0.12, 0.05]);
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) block(phone, 'paper', [-0.07 + c * 0.05, 0.06, -0.09 + r * 0.045, -0.04 + c * 0.05, 0.068, -0.056 + r * 0.045]);
  g.add(phone);

  // The wall calendar: a white sheet with a red header and a grid of days.
  const cl = LAYOUT.calendar;
  const calendar = new THREE.Group();
  calendar.position.set((cl.min.x + cl.max.x) / 2, (cl.min.y + cl.max.y) / 2, cl.min.z - 0.01);
  block(calendar, 'white', [-0.26, -0.34, -0.012, 0.26, 0.34, 0.004]);
  block(calendar, 'red', [-0.25, 0.2, -0.016, 0.25, 0.33, 0.002]);
  for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) block(calendar, 'inkSoft', [-0.2 + c * 0.082, -0.27 + r * 0.1, -0.016, -0.14 + c * 0.082, -0.2 + r * 0.1, -0.012]);
  g.add(calendar);

  // The pinboard: cork with a wooden frame and a few pinned badges.
  const bb = LAYOUT.badgeBoard;
  const board = new THREE.Group();
  board.position.set((bb.min.x + bb.max.x) / 2, (bb.min.y + bb.max.y) / 2, bb.max.z + 0.01);
  block(board, 'woodDark', [-0.45, -0.35, -0.02, 0.45, 0.35, 0.02]);
  block(board, 'wood', [-0.41, -0.31, 0.015, 0.41, 0.31, 0.03]);
  const pins: [number, number, Ink][] = [[-0.25, 0.1, 'red'], [0, 0.12, 'teal'], [0.25, 0.08, 'red'], [-0.12, -0.12, 'teal'], [0.15, -0.14, 'white']];
  for (const [x, y, ink] of pins) block(board, ink, [x - 0.08, y - 0.08, 0.03, x + 0.08, y + 0.08, 0.045]);
  g.add(board);

  // A little retro radio: a teal body, a speaker grille, a tuning dial, a handle and an aerial.
  const rd = LAYOUT.radio;
  const radio = new THREE.Group();
  radio.position.set((rd.min.x + rd.max.x) / 2, rd.min.y, (rd.min.z + rd.max.z) / 2);
  radio.rotation.y = 0.12;
  block(radio, 'teal', [-0.19, 0.025, -0.08, 0.19, 0.2, 0.08]);
  block(radio, 'tealDark', [-0.2, 0, -0.09, 0.2, 0.025, 0.09]);
  const grille = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.01, 10), mat('inkSoft'));
  grille.rotation.x = Math.PI / 2;
  grille.position.set(-0.08, 0.1, -0.082);
  radio.add(grille);
  for (let k = -2; k <= 2; k++) block(radio, 'ink', [-0.13, 0.1 + k * 0.02 - 0.004, -0.09, -0.03, 0.1 + k * 0.02 + 0.004, -0.086]);
  block(radio, 'paper', [0.02, 0.11, -0.085, 0.16, 0.16, -0.08]);
  block(radio, 'red', [0.07, 0.11, -0.087, 0.08, 0.16, -0.084]);
  const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.02, 8), mat('mustard'));
  knob.rotation.x = Math.PI / 2;
  knob.position.set(0.09, 0.06, -0.085);
  radio.add(knob);
  for (const x of [-0.14, 0.14]) block(radio, 'ink', [x - 0.01, 0.2, -0.01, x + 0.01, 0.26, 0.01]);
  block(radio, 'ink', [-0.14, 0.25, -0.01, 0.14, 0.27, 0.01]);
  const aerial = block(radio, 'inkSoft', [-0.004, 0, -0.004, 0.004, 0.32, 0.004]);
  aerial.position.set(0.16, 0.2, 0.04);
  aerial.rotation.z = -0.5;
  g.add(radio);

  // A spare apron on a hook near the door.
  block(g, 'teal', [HX - 0.02, 0.9, -0.95, HX - 0.01, 1.6, -0.65]);
  return g;
}

/** A small standing sign with "GUIDE ?" written on it (text drawn into a canvas once). */
function guideSign(x: number, y: number, z: number): THREE.Group {
  const sign = new THREE.Group();
  sign.position.set(x, y, z);
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 96;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#f2b234';
    ctx.fillRect(0, 0, 256, 96);
    ctx.fillStyle = '#25304f';
    ctx.font = 'bold 44px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('GUIDE ?', 128, 50);
  }
  const texture = new THREE.CanvasTexture(canvas);
  const face = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.1), new THREE.MeshBasicMaterial({ map: texture }));
  // Faces into the truck (−z), leaning back a little.
  face.rotation.set(-0.25, Math.PI, 0);
  sign.add(face);
  block(sign, 'woodDark', [-0.01, -0.12, 0.01, 0.01, -0.04, 0.03]);
  return sign;
}

// ── People ────────────────────────────────────────────────────────────────────────────
// Customers and the Manager are built in character.ts.
export { buildCustomer, buildManager, type CustomerModel } from './character';
