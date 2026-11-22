/**
 * The truck from the outside (GAME_DESIGN.md §7): a mustard-yellow food truck with a cab at the
 * left end (bonnet, windscreen, side windows, headlights, grille, bumper), white roof and skirt,
 * a teal stripe, four wheels in their arches, the name board over the serving window, a giant
 * coffee cup on the roof, and "SELECT * FROM coffee;" painted on the side. Our own design.
 * Built around the inside (build.ts) without touching it: everything here is outside the walls.
 * ⚠ Placeholder model (docs/ASSETS.md).
 */
import * as THREE from 'three';
import { block, mat } from './build';
import { GROUND_Y, LAYOUT, TRUCK } from './world';

const HX = TRUCK.length / 2;
const HZ = TRUCK.depth / 2;
const H = TRUCK.height;
/** The walls' thickness (build.ts) and the paint's thickness over them. */
const T = 0.08;
const P = 0.03;

/** A canvas texture with text, for the name board and the painted side. */
function textTexture(
  width: number,
  height: number,
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  draw(ctx, width, height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 4;
  return texture;
}

function decal(g: THREE.Group, texture: THREE.Texture, w: number, h: number, x: number, y: number, z: number, yaw: number): void {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: texture, transparent: true }));
  m.position.set(x, y, z);
  m.rotation.y = yaw;
  g.add(m);
}

function wheel(g: THREE.Group, x: number, z: number): void {
  const r = 0.4;
  const y = GROUND_Y + r;
  const side = Math.sign(z);
  const tyre = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.26, 16), mat('ink'));
  tyre.rotation.x = Math.PI / 2;
  tyre.position.set(x, y, z);
  g.add(tyre);
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.02, 12), mat('white'));
  hub.rotation.x = Math.PI / 2;
  hub.position.set(x, y, z + side * 0.135);
  g.add(hub);
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.03, 8), mat('inkSoft'));
  cap.rotation.x = Math.PI / 2;
  cap.position.set(x, y, z + side * 0.15);
  g.add(cap);
  // The arch above it: a dark half-ring on the body.
  const arch = new THREE.Mesh(new THREE.TorusGeometry(r + 0.06, 0.05, 4, 12, Math.PI), mat('inkSoft'));
  arch.position.set(x, y, z + side * 0.02);
  g.add(arch);
}

export function buildExterior(): THREE.Group {
  const g = new THREE.Group();
  const w = LAYOUT.window;
  const d = LAYOUT.door;
  const front = -HZ - T; // outside of the front (serving) wall
  const back = HZ + T;

  // Paint over the walls: mustard, with the window and the back door left open.
  block(g, 'mustard', [-HX - T, 0, front - P, w.min.x - 0.05, H, front]);
  block(g, 'mustard', [w.max.x + 0.05, 0, front - P, HX + T, H, front]);
  block(g, 'mustard', [w.min.x - 0.05, w.max.y + 0.12, front - P, w.max.x + 0.05, H, front]);
  block(g, 'mustard', [w.min.x - 0.05, 0, front - P, w.max.x + 0.05, w.min.y - 0.04, front]);
  block(g, 'mustard', [-HX - T, 0, back, HX + T, H, back + P]);
  block(g, 'mustard', [HX + T, 0, -HZ - T, HX + T + P, H, d.min.z]);
  block(g, 'mustard', [HX + T, 0, d.max.z, HX + T + P, H, HZ + T]);
  block(g, 'mustard', [HX + T, d.max.y, d.min.z, HX + T + P, H, d.max.z]);
  // A teal stripe round the body and a white skirt under it, down to the wheels.
  for (const [z1, z2] of [
    [front - P - 0.005, front - P],
    [back + P, back + P + 0.005],
  ] as const) {
    block(g, 'teal', [-HX - T, 0.55, z1, w.min.x - 0.05, 0.72, z2]);
    block(g, 'teal', [w.max.x + 0.05, 0.55, z1, HX + T, 0.72, z2]);
    if (z1 > 0) block(g, 'teal', [w.min.x - 0.05, 0.55, z1, w.max.x + 0.05, 0.72, z2]);
  }
  block(g, 'white', [-HX - T, GROUND_Y + 0.3, front - P, HX + T + P, 0, back + P]);
  // The serving window's frame and a fold-down shelf outside it.
  block(g, 'white', [w.min.x - 0.12, w.min.y - 0.1, front - P - 0.25, w.max.x + 0.12, w.min.y - 0.04, front - P]);
  for (const x of [w.min.x - 0.12, w.max.x + 0.08]) block(g, 'white', [x, w.min.y, front - P - 0.03, x + 0.04, w.max.y + 0.12, front - P]);
  // The roof: white, a little wider than the body, with a vent.
  block(g, 'white', [-HX - T - 0.06, H + 0.1, front - P - 0.06, HX + T + P + 0.06, H + 0.2, back + P + 0.06]);
  block(g, 'inkSoft', [0.9, H + 0.2, -0.3, 1.5, H + 0.32, 0.3]);

  // The cab at the left end: the bonnet, the cabin with windows, lights, grille and bumper.
  const cab = -HX - T;
  block(g, 'mustard', [cab - 1.7, GROUND_Y + 0.3, -HZ - 0.02, cab, 0.95, HZ + 0.02]);
  block(g, 'mustard', [cab - 0.9, 0.95, -HZ - 0.02, cab, 2.15, HZ + 0.02]);
  block(g, 'white', [cab - 0.95, 2.15, -HZ - 0.06, cab + 0.02, 2.25, HZ + 0.06]);
  // The windscreen leans back over the bonnet.
  const screen = block(g, 'tealLight', [-0.04, -0.55, -HZ + 0.08, 0.04, 0.55, HZ - 0.08]);
  screen.position.set(cab - 0.98, 1.55, 0);
  screen.rotation.z = -0.28;
  block(g, 'mustard', [cab - 1.12, 0.95, -HZ - 0.02, cab - 0.85, 1.0, HZ + 0.02]);
  for (const z of [-HZ - 0.03, HZ + 0.03]) {
    // Side window and door line.
    block(g, 'tealLight', [cab - 0.8, 1.2, z - 0.005, cab - 0.12, 1.95, z + 0.005]);
    block(g, 'inkSoft', [cab - 0.85, 0.25, z - 0.006, cab - 0.82, 1.98, z + 0.006]);
    block(g, 'ink', [cab - 0.3, 0.95, z - 0.01, cab - 0.18, 0.99, z + 0.01]);
    block(g, 'white', [cab - 1.7, 0.55, z - 0.005, cab, 0.72, z + 0.005]);
  }
  block(g, 'ink', [cab - 1.72, 0.3, -0.55, cab - 1.69, 0.75, 0.55]);
  for (let y = 0.36; y < 0.72; y += 0.09) block(g, 'inkSoft', [cab - 1.74, y, -0.5, cab - 1.71, y + 0.03, 0.5]);
  for (const z of [-0.85, 0.85]) {
    const light = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.05, 12), mat('white'));
    light.rotation.z = Math.PI / 2;
    light.position.set(cab - 1.72, 0.62, z);
    g.add(light);
    const glow = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.06, 12), mat('mustard'));
    glow.rotation.z = Math.PI / 2;
    glow.position.set(cab - 1.73, 0.62, z);
    g.add(glow);
  }
  block(g, 'white', [cab - 1.85, GROUND_Y + 0.25, -HZ, cab - 1.65, GROUND_Y + 0.45, HZ]);
  // Mirrors.
  for (const z of [-HZ - 0.15, HZ + 0.15]) block(g, 'ink', [cab - 0.95, 1.6, z - 0.04, cab - 0.85, 1.82, z + 0.04]);
  // Rear bumper and lights.
  block(g, 'white', [HX + T + P, GROUND_Y + 0.25, -HZ, HX + T + 0.2, GROUND_Y + 0.42, -0.6]);
  block(g, 'white', [HX + T + P, GROUND_Y + 0.25, 0.6, HX + T + 0.2, GROUND_Y + 0.42, HZ]);
  for (const z of [-HZ + 0.15, HZ - 0.25]) block(g, 'red', [HX + T + P, 0.5, z, HX + T + P + 0.02, 0.8, z + 0.1]);

  // Four wheels: two under the cab, two near the back.
  for (const z of [-HZ - T - 0.14, HZ + T + 0.14]) {
    wheel(g, cab - 1.0, z);
    wheel(g, HX - 0.9, z);
  }

  // The name board over the serving window, facing the customers.
  const name = textTexture(1024, 200, (ctx, cw, ch) => {
    ctx.fillStyle = '#25304f';
    ctx.beginPath();
    ctx.roundRect(6, 6, cw - 12, ch - 12, 40);
    ctx.fill();
    ctx.strokeStyle = '#f2b234';
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.fillStyle = '#fffaf0';
    ctx.font = 'bold 118px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('QUERY TRUCK', cw / 2, ch / 2 - 4);
  });
  decal(g, name, 3.2, 0.62, 0, H + 0.55, front - 0.25, Math.PI);
  block(g, 'ink', [-1.5, H + 0.2, front - 0.22, -1.44, H + 0.3, front - 0.16]);
  block(g, 'ink', [1.44, H + 0.2, front - 0.22, 1.5, H + 0.3, front - 0.16]);
  // The same name on the back.
  decal(g, name, 3.2, 0.62, 0, H + 0.55, back + 0.25, 0);

  // SQL painted on the side, under the window, on both long sides.
  const side = textTexture(1024, 160, (ctx, _w, ch) => {
    ctx.fillStyle = '#25304f';
    ctx.font = 'bold 84px ui-monospace, Menlo, monospace';
    ctx.textBaseline = 'middle';
    ctx.fillText('SELECT * FROM coffee;', 20, ch / 2);
  });
  decal(g, side, 2.4, 0.38, -1.9 + 0.1, 0.32, front - P - 0.01, Math.PI);
  decal(g, side, 2.4, 0.38, 0.6, 1.4, back + P + 0.01, 0);

  // A giant coffee cup on the roof, with a sleeve, a lid and a wisp of steam.
  const cupX = -1.4;
  const cupY = H + 0.2;
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.42, 1.0, 16), mat('white'));
  cup.position.set(cupX, cupY + 0.5, 0);
  g.add(cup);
  const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.515, 0.47, 0.36, 16), mat('woodDark'));
  sleeve.position.set(cupX, cupY + 0.45, 0);
  g.add(sleeve);
  const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.58, 0.1, 16), mat('red'));
  lid.position.set(cupX, cupY + 1.04, 0);
  g.add(lid);
  const lidTop = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.55, 0.1, 16), mat('red'));
  lidTop.position.set(cupX, cupY + 1.13, 0);
  g.add(lidTop);
  for (let i = 0; i < 3; i++) {
    const puff = new THREE.Mesh(new THREE.IcosahedronGeometry(0.16 - i * 0.03, 0), mat('white'));
    puff.position.set(cupX + Math.sin(i * 1.7) * 0.15, cupY + 1.4 + i * 0.28, Math.cos(i * 1.7) * 0.1);
    g.add(puff);
  }
  g.userData.steam = g.children.slice(-3);
  return g;
}
