/**
 * Low-poly models for the food truck, built from boxes, cylinders and spheres in the palette
 * (art/riso.ts), flat-shaded. ⚠ PLACEHOLDER models (docs/ASSETS.md): to be replaced by CC0 3D
 * packs later.
 */
import * as THREE from 'three';
import type { Ink } from '../art/riso';
import { inkColour } from './colour';
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

export function buildTruck(): THREE.Group {
  const g = new THREE.Group();
  const w = LAYOUT.window;

  // Floor and ceiling.
  block(g, 'wood', [-HX, -0.1, -HZ, HX, 0, HZ]);
  for (let x = -HX + 0.4; x < HX; x += 0.4) block(g, 'woodDark', [x, 0, -HZ, x + 0.02, 0.003, HZ]);
  block(g, 'inkSoft', [-HX, H, -HZ, HX, H + 0.1, HZ]);
  for (let x = -2; x <= 2; x += 2) block(g, 'mustard', [x - 0.3, H - 0.04, -0.1, x + 0.3, H, 0.1]);

  // Front wall with the serving window cut out.
  block(g, 'paper', [-HX, 0, -HZ - T, w.min.x, H, -HZ]);
  block(g, 'paper', [w.max.x, 0, -HZ - T, HX, H, -HZ]);
  block(g, 'paper', [w.min.x, w.max.y, -HZ - T, w.max.x, H, -HZ]);
  block(g, 'teal', [w.min.x, 0, -HZ - T, w.max.x, w.min.y, -HZ]);
  // Window frame and rolled-up shutter.
  block(g, 'ink', [w.min.x - 0.05, w.max.y, -HZ - 0.02, w.max.x + 0.05, w.max.y + 0.12, -HZ + 0.02]);
  block(g, 'ink', [w.min.x - 0.05, w.min.y, -HZ - 0.02, w.min.x, w.max.y, -HZ + 0.02]);
  block(g, 'ink', [w.max.x, w.min.y, -HZ - 0.02, w.max.x + 0.05, w.max.y, -HZ + 0.02]);

  // Back and end walls: paper above, a teal band below. The right end wall has the back door's
  // opening cut out, so the park shows when the door swings open.
  const dr = LAYOUT.door;
  for (const [x1, z1, x2, z2] of [
    [-HX, HZ, HX, HZ + T],
    [-HX - T, -HZ, -HX, HZ],
    [HX, -HZ, HX + T, dr.min.z],
    [HX, dr.max.z, HX + T, HZ],
  ] as const) {
    block(g, 'paper', [x1, 0.9, z1, x2, H, z2]);
    block(g, 'teal', [x1, 0, z1, x2, 0.9, z2]);
  }
  block(g, 'paper', [HX, dr.max.y, dr.min.z, HX + T, H, dr.max.z]);
  // A metal step outside the door, where the Manager stands.
  block(g, 'inkSoft', [HX + T, -0.08, -0.55, HX + 0.75, 0, 0.55]);

  // Front counter (under the window) with a white top.
  const fc = LAYOUT.frontCounter;
  block(g, 'wood', [fc.min.x, 0, fc.min.z, fc.max.x, fc.max.y - 0.04, fc.max.z]);
  block(g, 'white', [fc.min.x - 0.02, fc.max.y - 0.04, fc.min.z - 0.05, fc.max.x + 0.02, fc.max.y, fc.max.z + 0.03]);
  for (let x = fc.min.x + 0.1; x < fc.max.x - 0.5; x += 0.6) block(g, 'woodDark', [x, 0.12, fc.max.z, x + 0.5, 0.8, fc.max.z + 0.01]);

  // Tablet (POS) on a stand, tilted towards the player.
  const t = LAYOUT.tablet;
  block(g, 'ink', [t.min.x + 0.15, t.min.y, t.min.z + 0.06, t.max.x - 0.15, t.min.y + 0.08, t.max.z - 0.06]);
  const tablet = new THREE.Group();
  block(tablet, 'ink', [-0.18, -0.12, -0.012, 0.18, 0.12, 0.012]);
  block(tablet, 'tealDark', [-0.16, -0.1, 0.012, 0.16, 0.1, 0.016]);
  block(tablet, 'mustard', [-0.13, 0.05, 0.016, -0.02, 0.065, 0.018]);
  block(tablet, 'tealLight', [-0.13, 0.02, 0.016, 0.1, 0.03, 0.018]);
  block(tablet, 'tealLight', [-0.13, -0.01, 0.016, 0.06, 0.0, 0.018]);
  tablet.position.set((t.min.x + t.max.x) / 2, t.min.y + 0.14, (t.min.z + t.max.z) / 2);
  tablet.rotation.x = -0.5;
  g.add(tablet);

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
    for (let i = 0; i < 6; i++) {
      const z = f.min.z + 0.14 + i * 0.1;
      block(g, inks[(i + shelf) % inks.length], [f.max.x + 0.01, y, z, f.max.x + 0.07, y + 0.22 + (i % 2) * 0.04, z + 0.07]);
    }
  }
  block(g, 'mustard', [f.max.x + 0.01, 1.0, f.max.z - 0.06, f.max.x + 0.05, 1.5, f.max.z - 0.03]);

  // Stock shelves with boxes and coffee sacks.
  const s = LAYOUT.stockShelves;
  for (let shelf = 0; shelf < 3; shelf++) {
    const y = 0.35 + shelf * 0.6;
    block(g, 'woodDark', [s.min.x, y - 0.04, s.min.z, s.max.x, y, s.max.z]);
    for (let i = 0; i < 3; i++) {
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
  block(g, 'red', [c.min.x, c.min.y, c.min.z, c.max.x, c.max.y - 0.08, c.max.z]);
  block(g, 'paperShade', [c.min.x + 0.04, c.max.y - 0.08, c.min.z + 0.04, c.max.x - 0.04, c.max.y, c.max.z - 0.04]);
  const gauge = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.02, 12), mat('white'));
  gauge.rotation.x = Math.PI / 2;
  gauge.position.set((c.min.x + c.max.x) / 2, c.max.y - 0.2, c.min.z - 0.005);
  g.add(gauge);
  for (const x of [c.min.x + 0.15, c.max.x - 0.15]) {
    block(g, 'ink', [x - 0.05, c.min.y + 0.16, c.min.z - 0.06, x + 0.05, c.min.y + 0.22, c.min.z]);
    block(g, 'white', [x - 0.04, c.min.y, c.min.z - 0.05, x + 0.04, c.min.y + 0.08, c.min.z + 0.03]);
  }
  const m = LAYOUT.menuBoard;
  block(g, 'woodDark', [m.min.x - 0.04, m.min.y - 0.04, m.min.z - 0.01, m.max.x + 0.04, m.max.y + 0.04, m.max.z]);
  block(g, 'ink', [m.min.x, m.min.y, m.min.z - 0.02, m.max.x, m.max.y, m.max.z]);
  block(g, 'mustard', [m.min.x + 0.2, m.max.y - 0.14, m.min.z - 0.03, m.max.x - 0.2, m.max.y - 0.1, m.min.z - 0.02]);
  for (let i = 0; i < 5; i++) {
    const y = m.max.y - 0.24 - i * 0.1;
    block(g, 'paper', [m.min.x + 0.08, y, m.min.z - 0.03, m.min.x + 0.45 + (i % 3) * 0.12, y + 0.03, m.min.z - 0.02]);
    block(g, i % 2 ? 'pink' : 'tealLight', [m.max.x - 0.22, y, m.min.z - 0.03, m.max.x - 0.08, y + 0.03, m.min.z - 0.02]);
  }
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

  // A little retro radio: a teal body, a speaker grille, a tuning dial, a handle and an aerial.
  const rd = LAYOUT.radio;
  const radio = new THREE.Group();
  radio.position.set((rd.min.x + rd.max.x) / 2, rd.min.y, (rd.min.z + rd.max.z) / 2);
  radio.rotation.y = 0.12;
  block(radio, 'teal', [-0.19, 0, -0.08, 0.19, 0.2, 0.08]);
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
