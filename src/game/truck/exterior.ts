/**
 * The truck from the outside (GAME_DESIGN.md §7): a white step-van food truck. A tall, flat-
 * fronted cab at the left end (two-pane windscreen, a red grille panel with round headlights, a
 * grey bumper, big door windows), a body with rounded roof edges, a coral-red band round the
 * bottom, a mustard pinstripe, wheels with red hubs, a striped awning
 * over the serving window and a wooden counter under it, and the game's logo on a
 * framed sign board on the roof.
 * Our own design (inspired by classic step vans; no third-party art). Built around the inside
 * (build.ts) without touching it: everything here is outside the walls.
 * ⚠ Placeholder model (docs/ASSETS.md).
 */
import * as THREE from 'three';
import { block, mat } from './build';
import { GROUND_Y, LAYOUT, TRUCK } from './world';
import { truckLook } from './look';
import type { Ink } from '../art/riso';
import logoUrl from '../../assets/query-truck-logo.webp';

/** Where the artwork sits in the logo picture (the rest is empty space), in pixels. */
export const LOGO_CROP = { x: 140, y: 51, w: 1492, h: 784 } as const;

const HX = TRUCK.length / 2;
const HZ = TRUCK.depth / 2;
const H = TRUCK.height;
/** The walls' thickness (build.ts) and the paint's thickness over them. */
const T = 0.08;
const P = 0.03;
/** The coral band round the bottom, and the pinstripe over it. */
const BAND = { bottom: GROUND_Y + 0.32, top: 0.62 };
const STRIPE = { bottom: 0.66, top: 0.71 };

/** A canvas texture, for the name board, the flowers and the painted side. */
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

/**
 * The official logo as a texture (cropped to the artwork). It loads after the truck is built,
 * so the sign stays clear until then; without a browser (tests) it stays empty.
 */
function logoTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = Math.round((1024 * LOGO_CROP.h) / LOGO_CROP.w);
  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 8;
  texture.colorSpace = THREE.SRGBColorSpace;
  if (typeof Image === 'undefined') return texture;
  const image = new Image();
  image.onload = () => {
    canvas.getContext('2d')?.drawImage(image, LOGO_CROP.x, LOGO_CROP.y, LOGO_CROP.w, LOGO_CROP.h, 0, 0, canvas.width, canvas.height);
    texture.needsUpdate = true;
  };
  image.src = logoUrl;
  return texture;
}

function wheel(g: THREE.Group, x: number, z: number): void {
  const r = 0.4;
  const y = GROUND_Y + r;
  const side = Math.sign(z);
  const spin = (geometry: THREE.BufferGeometry, ink: Parameters<typeof mat>[0], dz: number) => {
    const m = new THREE.Mesh(geometry, mat(ink));
    m.rotation.x = Math.PI / 2;
    m.position.set(x, y, z + side * dz);
    g.add(m);
  };
  spin(new THREE.CylinderGeometry(r, r, 0.26, 16), 'ink', 0);
  spin(new THREE.CylinderGeometry(0.24, 0.24, 0.02, 14), 'white', 0.135);
  spin(new THREE.CylinderGeometry(0.17, 0.17, 0.025, 12), 'red', 0.145);
  spin(new THREE.CylinderGeometry(0.06, 0.06, 0.03, 8), 'white', 0.16);
  // The arch above it, round the wheel: a dark half-ring on the body.
  const arch = new THREE.Mesh(new THREE.TorusGeometry(r + 0.06, 0.05, 4, 12, Math.PI), mat('inkSoft'));
  arch.position.set(x, y, z + side * 0.02);
  g.add(arch);
}

/** A rounded edge: a long, low-poly cylinder along x or z. */
function edge(g: THREE.Group, axis: 'x' | 'z', length: number, r: number, x: number, y: number, z: number): void {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, length, 8), mat('white'));
  if (axis === 'x') m.rotation.z = Math.PI / 2;
  else m.rotation.x = Math.PI / 2;
  m.position.set(x, y, z);
  g.add(m);
}

export function buildExterior(): THREE.Group {
  const g = new THREE.Group();
  const w = LAYOUT.window;
  const d = LAYOUT.door;
  const front = -HZ - T; // outside of the front (serving) wall
  const back = HZ + T;
  const end = HX + T; // outside of the back end (with the back door)

  // ── The body ────────────────────────────────────────────────────────────────────────
  // White paint over the walls, with the window and the back door left open.
  block(g, 'white', [-HX - T, 0, front - P, w.min.x - 0.05, H, front]);
  block(g, 'white', [w.max.x + 0.05, 0, front - P, end, H, front]);
  block(g, 'white', [w.min.x - 0.05, w.max.y + 0.12, front - P, w.max.x + 0.05, H, front]);
  block(g, 'white', [w.min.x - 0.05, 0, front - P, w.max.x + 0.05, w.min.y - 0.04, front]);
  block(g, 'white', [-HX - T, 0, back, end, H, back + P]);
  block(g, 'white', [end, 0, -HZ - T, end + P, H, d.min.z]);
  block(g, 'white', [end, 0, d.max.z, end + P, H, HZ + T]);
  block(g, 'white', [end, d.max.y, d.min.z, end + P, H, d.max.z]);
  // The skirt under the floor, down towards the wheels (only round the outside: a solid slab
  // would fight with the floor inside).
  const proud = 0.006;
  block(g, 'white', [-HX - T - proud, BAND.bottom, front - P - proud, end + P + proud, 0.02, front - 0.002]);
  block(g, 'white', [-HX - T - proud, BAND.bottom, back + 0.002, end + P + proud, 0.02, back + P + proud]);
  block(g, 'white', [end + 0.002, BAND.bottom, front - 0.002, end + P + proud, 0.02, back + 0.002]);

  // The coral band and the mustard pinstripe, just proud of the paint, all the way round.
  const band = (ink: Ink, y1: number, y2: number, out: number) => {
    block(g, ink, [-HX - T - out, y1, front - P - out, end + P + out, y2, front - P - out + 0.004]);
    block(g, ink, [-HX - T - out, y1, back + P + out - 0.004, end + P + out, y2, back + P + out]);
    block(g, ink, [end + P + out - 0.004, y1, front - P - out + 0.004, end + P + out, y2, d.min.z]);
    block(g, ink, [end + P + out - 0.004, y1, d.max.z, end + P + out, y2, back + P + out - 0.004]);
  };
  band(truckLook().paint, BAND.bottom, BAND.top, 0.01);
  band('mustard', STRIPE.bottom, STRIPE.top, 0.01);
  // The roof: a little wider than the body, with rounded edges and a vent.
  block(g, 'white', [-HX - T - 0.04, H + 0.1, front - P - 0.04, end + P + 0.04, H + 0.2, back + P + 0.04]);
  edge(g, 'x', 2 * HX + 2 * T + P + 0.08, 0.1, (end + P - HX - T) / 2, H + 0.15, front - P - 0.05);
  edge(g, 'x', 2 * HX + 2 * T + P + 0.08, 0.1, (end + P - HX - T) / 2, H + 0.15, back + P + 0.05);
  edge(g, 'z', back - front + 2 * P + 0.1, 0.1, end + P + 0.05, H + 0.15, 0);
  block(g, 'paperShade', [1.9, H + 0.2, -0.3, 2.5, H + 0.32, 0.3]);

  // The serving window: a white frame, a wooden counter outside it, and the awning above.
  block(g, 'wood', [w.min.x - 0.14, w.min.y - 0.1, front - P - 0.3, w.max.x + 0.14, w.min.y - 0.03, front - P]);
  for (const x of [w.min.x - 0.12, w.max.x + 0.08]) block(g, 'inkSoft', [x, w.min.y, front - P - 0.03, x + 0.04, w.max.y + 0.12, front - P]);
  block(g, 'inkSoft', [w.min.x - 0.12, w.max.y + 0.08, front - P - 0.03, w.max.x + 0.12, w.max.y + 0.12, front - P]);
  awning(g, w.min.x - 0.25, w.max.x + 0.25, w.max.y + 0.22, front - P);
  if (truckLook().plants === 2) {
    // A flower box on the window ledge (7.2b).
    const y = w.min.y - 0.03;
    block(g, 'woodDark', [w.min.x + 0.05, y, front - P - 0.26, w.min.x + 0.65, y + 0.12, front - P - 0.06]);
    block(g, 'grass', [w.min.x + 0.07, y + 0.12, front - P - 0.24, w.min.x + 0.63, y + 0.17, front - P - 0.08]);
    [['red', 0.15], ['mustard', 0.3], ['pink', 0.45], ['white', 0.57]].forEach(([ink, dx], i) =>
      block(g, ink as Ink, [w.min.x + (dx as number) - 0.035, y + 0.17, front - P - 0.19 - (i % 2) * 0.02, w.min.x + (dx as number) + 0.035, y + 0.25, front - P - 0.13 - (i % 2) * 0.02]),
    );
  }

  // ── The cab ─────────────────────────────────────────────────────────────────────────
  // A tall step-van cab, almost as high as the body, with a short nose under the windscreen.
  const cab = -HX - T;
  const cabFront = cab - 1.15;
  const cabTop = H - 0.12;
  // A hollow shell, so the cockpit shows through the opening in the truck's left end wall (9.8):
  // the two sides, a low front under the windscreen, a strip over it, the roof and the underside.
  block(g, 'white', [cabFront, BAND.bottom, -HZ - 0.02, cab, cabTop, -HZ + 0.04]);
  block(g, 'white', [cabFront, BAND.bottom, HZ - 0.04, cab, cabTop, HZ + 0.02]);
  block(g, 'white', [cabFront, BAND.bottom, -HZ - 0.02, cabFront + 0.04, 1.03, HZ + 0.02]);
  block(g, 'white', [cabFront, 2.07, -HZ - 0.02, cabFront + 0.04, cabTop, HZ + 0.02]);
  block(g, 'white', [cabFront, cabTop - 0.06, -HZ - 0.02, cab, cabTop, HZ + 0.02]);
  block(g, 'white', [cabFront, BAND.bottom, -HZ - 0.02, cab, -0.1, HZ + 0.02]);
  block(g, 'white', [cabFront - 0.04, cabTop, -HZ - 0.06, cab + 0.02, cabTop + 0.1, HZ + 0.06]);
  edge(g, 'z', 2 * HZ + 0.12, 0.09, cabFront - 0.02, cabTop + 0.06, 0);
  // The nose: a low step out in front, carrying the grille panel and the lights.
  const nose = cabFront - 0.3;
  block(g, 'white', [nose, BAND.bottom, -HZ + 0.06, cabFront + 0.02, 0.95, HZ - 0.06]);
  edge(g, 'z', 2 * HZ - 0.12, 0.06, nose + 0.04, 0.93, 0);
  // The windscreen: two tall panes with a pillar between, leaning back a little.
  for (const z of [-0.5, 0.5]) {
    const pane = block(g, 'tealLight', [-0.02, -0.5, -0.43, 0.02, 0.5, 0.43]);
    pane.position.set(cabFront - 0.04, 1.55, z);
    pane.rotation.z = -0.08;
  }
  block(g, 'inkSoft', [cabFront - 0.07, 1.03, -0.05, cabFront - 0.01, 2.07, 0.05]);
  // The grille panel: coral, with dark slats, round headlights and amber indicators.
  block(g, 'red', [nose - 0.02, BAND.bottom + 0.05, -HZ + 0.1, nose, 0.88, HZ - 0.1]);
  for (let y = 0.4; y < 0.74; y += 0.08) block(g, 'redDark', [nose - 0.035, y, -0.45, nose - 0.02, y + 0.035, 0.45]);
  for (const z of [-0.82, 0.82]) {
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.05, 14), mat('white'));
    ring.rotation.z = Math.PI / 2;
    ring.position.set(nose - 0.035, 0.6, z);
    g.add(ring);
    const lamp = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.06, 14), mat('paper'));
    lamp.rotation.z = Math.PI / 2;
    lamp.position.set(nose - 0.045, 0.6, z);
    g.add(lamp);
    block(g, 'mustard', [nose - 0.04, 0.32, z - 0.08, nose - 0.02, 0.38, z + 0.08]);
  }
  // Bumper, step and number plate.
  block(g, 'inkSoft', [nose - 0.14, GROUND_Y + 0.22, -HZ, nose + 0.02, GROUND_Y + 0.4, HZ]);
  block(g, 'white', [nose - 0.155, GROUND_Y + 0.25, -0.25, nose - 0.14, GROUND_Y + 0.37, 0.25]);
  // The coral band and stripe carry on round the cab (just proud of its paint).
  for (const s of [-1, 1]) {
    const zIn = s * (HZ + 0.02);
    const zOut = s * (HZ + 0.03);
    const [z1, z2] = s < 0 ? [zOut, zIn] : [zIn, zOut];
    block(g, 'red', [cabFront, BAND.bottom, z1, cab, BAND.top, z2]);
    block(g, 'mustard', [cabFront, STRIPE.bottom, z1, cab, STRIPE.top, z2]);
    // Door: a big window, the door line, a handle, and a mirror on an arm.
    block(g, 'tealLight', [cabFront + 0.12, 1.2, s < 0 ? zOut - 0.002 : zIn, cab - 0.1, 2.05, s < 0 ? zIn : zOut + 0.002]);
    block(g, 'inkSoft', [cab - 0.06, STRIPE.top, s < 0 ? zOut - 0.004 : zIn, cab - 0.03, 2.1, s < 0 ? zIn : zOut + 0.004]);
    block(g, 'ink', [cab - 0.3, 1.05, s < 0 ? zOut - 0.012 : zIn, cab - 0.16, 1.09, s < 0 ? zIn : zOut + 0.012]);
    block(g, 'ink', [cabFront - 0.08, 1.45, s * (HZ + 0.08), cabFront - 0.02, 1.5, s * (HZ + 0.2)]);
    block(g, 'ink', [cabFront - 0.1, 1.5, s * (HZ + 0.16) - 0.05, cabFront - 0.02, 1.78, s * (HZ + 0.16) + 0.05]);
    // A small amber marker light on the roof corner.
    block(g, 'mustard', [cabFront + 0.05, cabTop + 0.1, s * (HZ - 0.12) - 0.04, cabFront + 0.15, cabTop + 0.14, s * (HZ - 0.12) + 0.04]);
  }
  block(g, 'red', [nose - 0.004, BAND.bottom, -HZ + 0.06, nose + 0.0, BAND.bottom + 0.05, HZ - 0.06]);

  // Rear bumper and lights.
  block(g, 'inkSoft', [end + P + 0.01, GROUND_Y + 0.22, -HZ, end + 0.2, GROUND_Y + 0.4, -0.6]);
  block(g, 'inkSoft', [end + P + 0.01, GROUND_Y + 0.22, 0.6, end + 0.2, GROUND_Y + 0.4, HZ]);
  for (const z of [-HZ + 0.15, HZ - 0.25]) block(g, 'red', [end + P, 0.8, z, end + P + 0.02, 1.1, z + 0.1]);

  // Four wheels: two under the cab, two near the back.
  for (const z of [-HZ - T - 0.14, HZ + T + 0.14]) {
    wheel(g, cab - 0.6, z);
    wheel(g, HX - 0.9, z);
  }

  // An OPEN / CLOSED sign hanging beside the window; the game turns it at closing time.
  const openSign = (text: string, colour: string) =>
    textTexture(256, 112, (ctx, cw, ch) => {
      ctx.fillStyle = colour;
      ctx.beginPath();
      ctx.roundRect(4, 4, cw - 8, ch - 8, 20);
      ctx.fill();
      ctx.fillStyle = '#fffaf0';
      ctx.font = 'bold 60px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, cw / 2, ch / 2 + 2);
    });
  const open = openSign('OPEN', '#2b9c8e');
  const closed = openSign('CLOSED', '#e4573d');
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.22), new THREE.MeshBasicMaterial({ map: open, transparent: true }));
  sign.position.set(w.max.x + 0.5, w.max.y - 0.3, front - P - 0.012);
  sign.rotation.y = Math.PI;
  g.add(sign);
  for (const dx of [-0.18, 0.18]) block(g, 'ink', [w.max.x + 0.5 + dx - 0.005, w.max.y - 0.19, front - P - 0.015, w.max.x + 0.5 + dx + 0.005, w.max.y + 0.0, front - P - 0.01]);
  g.userData.setOpen = (isOpen: boolean) => {
    (sign.material as THREE.MeshBasicMaterial).map = isOpen ? open : closed;
  };

  logoSign(g);
  g.userData.steam = [];
  return g;
}

/**
 * The logo on a 3D sign board on the roof (owner's feedback, 23 Nov 2026: the logo floated in
 * the air). A cream board with a coral frame stands on two posts set in a base on the roof;
 * the artwork sits on the board's front and back, a hair in front of it.
 */
function logoSign(g: THREE.Group): void {
  const logoW = 3.1;
  const logoH = (logoW * LOGO_CROP.h) / LOGO_CROP.w;
  const margin = 0.14;
  const W = logoW + 2 * margin;
  const Hb = logoH + 2 * margin;
  const x0 = -0.4;
  const bottom = H + 0.85;
  const top = bottom + Hb;
  const yMid = (bottom + top) / 2;
  // The board, and its frame (a little thicker than the board, so their faces never meet).
  block(g, 'white', [x0 - W / 2, bottom, -0.05, x0 + W / 2, top, 0.05]);
  const f = 0.07;
  block(g, 'red', [x0 - W / 2 - f, top - f, -0.075, x0 + W / 2 + f, top + f, 0.075]);
  block(g, 'red', [x0 - W / 2 - f, bottom - f, -0.075, x0 + W / 2 + f, bottom + f, 0.075]);
  block(g, 'red', [x0 - W / 2 - f, bottom - f, -0.075, x0 - W / 2 + f, top + f, 0.075]);
  block(g, 'red', [x0 + W / 2 - f, bottom - f, -0.075, x0 + W / 2 + f, top + f, 0.075]);
  // The artwork on both faces.
  const logo = logoTexture();
  const plane = new THREE.PlaneGeometry(logoW, logoH);
  for (const side of [-1, 1]) {
    const art = new THREE.Mesh(plane, new THREE.MeshBasicMaterial({ map: logo, transparent: true, alphaTest: 0.5 }));
    art.position.set(x0, yMid, side * 0.058);
    art.rotation.y = side < 0 ? Math.PI : 0;
    g.add(art);
  }
  // Two posts running up into the board, each in a foot on a base plate on the roof.
  for (const x of [x0 - W * 0.3, x0 + W * 0.3]) {
    block(g, 'ink', [x - 0.06, H + 0.26, -0.04, x + 0.06, bottom + 0.4, 0.04]);
    block(g, 'inkSoft', [x - 0.14, H + 0.26, -0.12, x + 0.14, H + 0.36, 0.12]);
    // A diagonal brace from the foot to the post, front and back.
    for (const z of [-1, 1]) {
      const brace = block(g, 'ink', [-0.025, -0.35, -0.025, 0.025, 0.35, 0.025]);
      brace.position.set(x, H + 0.55, z * 0.2);
      brace.rotation.x = z * 0.55;
    }
  }
  block(g, 'inkSoft', [x0 - W / 2 + 0.2, H + 0.2, -0.28, x0 + W / 2 - 0.2, H + 0.26, 0.28]);
}

/**
 * The striped awning over the window, sloping out and down, with a scalloped valance.
 */
function awning(g: THREE.Group, x1: number, x2: number, y: number, z: number): void {
  const stripes = 9;
  const width = (x2 - x1) / stripes;
  const depth = 0.95;
  const tilt = 0.32;
  const frontY = y - Math.sin(tilt) * depth;
  const frontZ = z - Math.cos(tilt) * depth;
  // The stripes hang from a hinge on the wall, turned down by `tilt` as they reach out (−z).
  const hinge = new THREE.Group();
  hinge.position.set(0, y, z);
  hinge.rotation.x = -tilt;
  g.add(hinge);
  for (let i = 0; i < stripes; i++) {
    const x = x1 + i * width;
    const ink = i % 2 ? 'white' : truckLook().awning;
    block(hinge, ink, [x, 0, -depth, x + width, 0.04, 0]);
    // A scallop hanging from the front edge, one per stripe.
    const flap = new THREE.Mesh(new THREE.CircleGeometry(width / 2, 8, Math.PI, Math.PI), mat(ink));
    flap.material.side = THREE.DoubleSide;
    flap.position.set(x + width / 2, frontY + 0.005, frontZ - 0.004 - 0.002 * (i % 2));
    g.add(flap);
  }
}
