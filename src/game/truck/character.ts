/**
 * Customers and the Manager (GAME_DESIGN.md §7). Three kinds of figure, all our own designs:
 *
 * - **Low-poly people** (most customers): a big, round, faceted head with no mouth or nose, eyes
 *   or glasses, many hair styles and hats, a jacket, hoodie, tee or sweater, trousers, shorts or a
 *   skirt, chunky hands and shoes, and extras (backpack, scarf, headphones, beard…). Each one is
 *   put together at random from their order (looks.ts), so no two look the same.
 * - **2D cartoons** (now and then): a flat, hand-drawn-style figure with thick outlines on a card
 *   that always turns to face the player, with two walking frames.
 * - **Brick toys** (now and then): a plastic toy figure — a round head with a stud, a printed face,
 *   a tapered torso, block legs and C-shaped hands — in costumes (astronaut, knight, chef,
 *   pirate, a masked hero of our own, a robot).
 *
 * Figures face −z (towards the truck once they turn round). Arms swing from the shoulders and
 * legs from the hips while walking (TruckGame). ⚠ Placeholder characters (docs/ASSETS.md).
 */
import * as THREE from 'three';
import type { Ink } from '../art/riso';
import type { CustomerLook } from '../../sql-core/truck/orders';
import { block, mat } from './build';
import { hexColour } from './colour';
import { kindFor, lookFor, type Look } from './looks';
import { seededRandom } from './weather';
import { GROUND_Y } from './world';

export type CustomerModel = {
  root: THREE.Group;
  legs: [THREE.Object3D, THREE.Object3D];
  arms: [THREE.Object3D, THREE.Object3D];
  /** A flat cartoon: the card that turns to face the player, and its two walking frames. */
  card?: { mesh: THREE.Mesh; frames: [THREE.Texture, THREE.Texture] };
  /** How high the hips are (m, after scaling): figures with real legs can sit down (dineIn.ts).
   * A flat cartoon has none and takes its order away. */
  hipY?: number;
};

/** A mesh at (x, y, z) in a parent. */
function part(parent: THREE.Object3D, geometry: THREE.BufferGeometry, ink: Ink | THREE.Material, x: number, y: number, z: number): THREE.Mesh {
  const mesh = new THREE.Mesh(geometry, typeof ink === 'string' ? mat(ink) : ink);
  mesh.position.set(x, y, z);
  parent.add(mesh);
  return mesh;
}

/** A tapered, six-sided tube hanging down from its top (sleeves, trouser legs). */
function tube(top: number, bottom: number, length: number, sides = 6): THREE.BufferGeometry {
  return new THREE.CylinderGeometry(top, bottom, length, sides).translate(0, -length / 2, 0);
}

const pair = (a: THREE.Object3D[]) => a as unknown as [THREE.Object3D, THREE.Object3D];

// ── Low-poly people ─────────────────────────────────────────────────────────────────

const HEAD_Y = 1.6;
const HEAD_R = 0.21;

/**
 * A point on the front of the head (which faces −z): how far forward the head's surface is at
 * (x, y), so eyes, glasses and cheeks sit on the face instead of floating in front of it.
 */
function faceZ(x: number, y: number, lift = 0): number {
  const dy = (y - HEAD_Y) / 1.07;
  return -Math.sqrt(Math.max(0, HEAD_R * HEAD_R - x * x - dy * dy)) * 0.98 - lift;
}

/** Turn something that faces −z so it lies flat on the face at x (follows the head's curve). */
const alongFace = (mesh: THREE.Object3D, x: number, y: number) => {
  mesh.rotation.order = 'YXZ';
  mesh.rotation.y = Math.atan2(-x, -faceZ(x, y));
  return mesh;
};

function head(root: THREE.Group, look: Pick<Look, 'skin' | 'hair' | 'hairStyle' | 'hat' | 'eyes' | 'extras'>): void {
  part(root, new THREE.CylinderGeometry(0.06, 0.07, 0.1, 6), look.skin, 0, 1.4, 0);
  part(root, new THREE.SphereGeometry(HEAD_R, 10, 8), look.skin, 0, HEAD_Y, 0).scale.set(1, 1.07, 0.98);
  const eyeY = HEAD_Y + 0.02;
  const eyeX = 0.072;
  const has = (e: Look['extras'][number]) => look.extras.includes(e);
  const brow = look.hair === 'white' ? 'paperShade' : look.hair;

  for (const side of [-1, 1]) {
    const x = side * eyeX;
    if (look.eyes === 'sunglasses') {
      const lens = part(root, new THREE.CylinderGeometry(0.06, 0.06, 0.016, 8), 'ink', x, eyeY, faceZ(x, eyeY, 0.012));
      alongFace(lens, x, eyeY).rotation.x = Math.PI / 2;
      lens.scale.set(1.15, 1, 0.85);
    } else if (look.eyes === 'sleepy') {
      const lid = part(root, new THREE.BoxGeometry(0.05, 0.01, 0.01), 'ink', x, eyeY, faceZ(x, eyeY, 0.002));
      alongFace(lid, x, eyeY);
    } else {
      const size = look.eyes === 'wide' ? 0.027 : 0.02;
      const eye = part(root, new THREE.SphereGeometry(size, 6, 5), 'ink', x, eyeY, faceZ(x, eyeY, -0.004));
      eye.scale.set(1, 1.35, 0.5);
      if (look.eyes === 'wide') part(root, new THREE.SphereGeometry(0.008, 4, 3), 'white', x + 0.008, eyeY + 0.012, faceZ(x + 0.008, eyeY + 0.012, 0.006));
      if (look.eyes === 'glasses') {
        const frame = part(root, new THREE.TorusGeometry(0.045, 0.007, 4, 10), 'ink', x, eyeY, faceZ(x, eyeY, 0.012));
        alongFace(frame, x, eyeY);
      }
    }
    if (has('brows') && look.eyes !== 'sunglasses') {
      const by = eyeY + 0.055;
      const b = part(root, new THREE.BoxGeometry(0.055, 0.012, 0.012), brow, x, by, faceZ(x, by, 0.001));
      alongFace(b, x, by).rotation.z = side * -0.12;
    }
    if (has('blush')) {
      const cx = side * 0.11;
      const cy = eyeY - 0.055;
      const cheek = part(root, new THREE.CircleGeometry(0.022, 8), 'pink', cx, cy, faceZ(cx, cy, 0.002));
      alongFace(cheek, cx, cy).rotation.y += Math.PI;
    }
  }
  // The bridge between the lenses.
  if (look.eyes === 'sunglasses' || look.eyes === 'glasses') {
    part(root, new THREE.BoxGeometry(0.04, 0.008, 0.008), 'ink', 0, eyeY + 0.01, faceZ(0, eyeY, 0.012));
  }
  if (has('moustache')) {
    const my = HEAD_Y - 0.065;
    part(root, new THREE.BoxGeometry(0.1, 0.022, 0.02), look.hair, 0, my, faceZ(0, my, 0.004));
  }
  if (has('beard')) part(root, new THREE.IcosahedronGeometry(0.13, 0), look.hair, 0, HEAD_Y - 0.12, -0.07).scale.set(1.15, 0.75, 0.85);

  // Hair and hats.
  const dome = (ink: Ink, scale = 1.06, lift = 0.025) => {
    const d = part(root, new THREE.SphereGeometry(HEAD_R, 9, 4, 0, Math.PI * 2, 0, Math.PI / 2), ink, 0, HEAD_Y + lift, 0.012);
    d.scale.set(scale, scale * 1.05, scale);
    return d;
  };
  const fringe = () => part(root, new THREE.IcosahedronGeometry(0.09, 0), look.hair, 0, HEAD_Y + 0.155, -0.12).scale.set(1.75, 0.5, 0.8);
  switch (look.hairStyle) {
    case 'cap': {
      dome(look.hat, 1.1);
      const brim = block(root, look.hat, [-0.14, -0.012, -0.16, 0.14, 0.012, 0]);
      brim.position.set(0, HEAD_Y + 0.07, -HEAD_R - 0.05);
      brim.rotation.x = -0.12;
      part(root, new THREE.SphereGeometry(0.02, 4, 3), look.hat, 0, HEAD_Y + HEAD_R * 1.15, 0.01);
      break;
    }
    case 'beanie':
      dome(look.hat, 1.12, 0.04).scale.y = 1.35;
      part(root, new THREE.CylinderGeometry(0.235, 0.235, 0.07, 9), look.hat, 0, HEAD_Y + 0.07, 0.01);
      part(root, new THREE.IcosahedronGeometry(0.05, 0), 'white', 0, HEAD_Y + 0.33, 0.01);
      break;
    case 'sides':
      for (const side of [-1, 1]) part(root, new THREE.IcosahedronGeometry(0.075, 0), look.hair, side * 0.19, HEAD_Y + 0.01, 0.03).scale.set(0.6, 1, 1.3);
      part(root, new THREE.IcosahedronGeometry(0.09, 0), look.hair, 0, HEAD_Y, 0.17).scale.set(1.8, 0.8, 0.6);
      break;
    case 'bald':
      break;
    case 'spiky':
      dome(look.hair, 1.04);
      for (let i = 0; i < 7; i++) {
        const a = (i / 7) * Math.PI * 2;
        const spike = part(root, new THREE.ConeGeometry(0.05, 0.14, 4), look.hair, Math.sin(a) * 0.1, HEAD_Y + 0.2, Math.cos(a) * 0.1 + 0.02);
        spike.rotation.set(Math.cos(a) * 0.5, 0, -Math.sin(a) * 0.5);
      }
      break;
    case 'curly':
      for (let i = 0; i < 11; i++) {
        const a = (i / 11) * Math.PI * 2;
        part(root, new THREE.IcosahedronGeometry(0.09, 0), look.hair, Math.sin(a) * 0.17, HEAD_Y + 0.1 + (i % 2) * 0.06, Math.cos(a) * 0.15 + 0.03);
      }
      part(root, new THREE.IcosahedronGeometry(0.15, 0), look.hair, 0, HEAD_Y + 0.18, 0.02);
      break;
    case 'ponytail':
      dome(look.hair);
      fringe();
      part(root, new THREE.ConeGeometry(0.07, 0.35, 5), look.hair, 0, HEAD_Y - 0.02, 0.26).rotation.x = -0.5;
      break;
    case 'long':
      dome(look.hair);
      fringe();
      part(root, new THREE.BoxGeometry(0.36, 0.42, 0.12), look.hair, 0, HEAD_Y - 0.12, 0.15);
      break;
    case 'bun':
      dome(look.hair);
      fringe();
      part(root, new THREE.IcosahedronGeometry(0.08, 0), look.hair, 0, HEAD_Y + 0.17, 0.15);
      break;
    default:
      dome(look.hair);
      fringe();
  }
  if (has('headphones')) {
    const band = part(root, new THREE.TorusGeometry(0.22, 0.015, 4, 10, Math.PI), 'ink', 0, HEAD_Y + 0.02, 0.01);
    band.rotation.y = Math.PI / 2;
    for (const side of [-1, 1]) part(root, new THREE.CylinderGeometry(0.06, 0.06, 0.05, 8), 'red', side * 0.22, HEAD_Y, 0.01).rotation.z = Math.PI / 2;
  }
}

/** Legs, a torso and arms for a look; returns the hip and shoulder pivots. */
function body(root: THREE.Group, look: Look) {
  const bare = look.lower !== 'trousers';
  const legs = pair(
    [-0.1, 0.1].map((x) => {
      const hip = new THREE.Group();
      hip.position.set(x, 0.86, 0);
      root.add(hip);
      if (look.lower === 'shorts') {
        part(hip, tube(0.095, 0.085, 0.3), look.legs, 0, 0, 0);
        part(hip, tube(0.06, 0.055, 0.5), look.skin, 0, -0.29, 0);
      } else if (bare) part(hip, tube(0.06, 0.055, 0.78), look.skin, 0, 0, 0);
      else part(hip, tube(0.085, 0.07, 0.78), look.legs, 0, 0, 0);
      block(hip, look.shoes, [-0.07, -0.86, -0.17, 0.07, -0.76, 0.07]);
      return hip;
    }),
  );
  if (look.lower === 'skirt') part(root, new THREE.CylinderGeometry(0.18, 0.3, 0.42, 7), look.legs, 0, 0.7, 0).scale.set(1, 1, 0.8);

  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.21, 0.56, 7), mat(look.outer));
  torso.position.set(0, 1.1, 0);
  torso.scale.set(look.width, 1, 0.68);
  torso.rotation.y = Math.PI / 7;
  root.add(torso);
  const w = look.width;
  if (look.top === 'jacket') {
    // An open jacket: the shirt shows down the front, with lapels and a collar.
    block(root, look.inner, [-0.075, 0.86, -0.155, 0.075, 1.36, -0.13]);
    for (const side of [-1, 1]) {
      const lapel = block(root, look.outer, [-0.035, -0.17, -0.012, 0.035, 0.17, 0.012]);
      lapel.position.set(side * 0.1, 1.2, -0.155);
      lapel.rotation.z = side * 0.25;
    }
  } else if (look.top === 'hoodie') {
    // A hood bunched up behind the neck, a pocket and two strings.
    part(root, new THREE.TorusGeometry(0.13, 0.06, 5, 8), look.outer, 0, 1.38, 0.04).rotation.x = Math.PI / 2 - 0.3;
    block(root, look.outer, [-0.13, 0.92, -0.165, 0.13, 1.06, -0.15]);
    for (const side of [-1, 1]) block(root, look.inner, [side * 0.05 - 0.008, 1.16, -0.168, side * 0.05 + 0.008, 1.34, -0.16]);
  } else if (look.top === 'sweater') {
    // A knitted look: a band at the hem and a stripe across the chest.
    part(root, new THREE.CylinderGeometry(0.215 * w, 0.215 * w, 0.07, 7), look.inner, 0, 0.86, 0).scale.set(1, 1, 0.72);
    block(root, look.inner, [-0.22 * w, 1.16, -0.16, 0.22 * w, 1.21, -0.14]);
  } else {
    // A tee: a neckband in the second colour.
    part(root, new THREE.CylinderGeometry(0.1, 0.12, 0.04, 8), look.inner, 0, 1.37, 0).scale.set(1, 1, 0.8);
  }
  part(root, new THREE.CylinderGeometry(0.2 * w, 0.21 * w, 0.06, 7), look.legs, 0, 0.86, 0).scale.set(1, 1, 0.7);

  const short = look.top === 'tee';
  const arms = pair(
    [-1, 1].map((side) => {
      const shoulder = new THREE.Group();
      shoulder.position.set(side * (0.27 * w + 0.03), 1.32, 0);
      root.add(shoulder);
      part(shoulder, new THREE.IcosahedronGeometry(0.1, 0), look.outer, 0, 0, 0);
      if (short) {
        part(shoulder, tube(0.095, 0.09, 0.2), look.outer, 0, 0, 0);
        part(shoulder, tube(0.06, 0.055, 0.34), look.skin, 0, -0.18, 0);
      } else part(shoulder, tube(0.092, 0.075, 0.5), look.outer, 0, 0, 0).rotation.z = side * 0.06;
      part(shoulder, new THREE.DodecahedronGeometry(0.062, 0), look.skin, side * 0.03, -0.56, 0).scale.set(0.9, 1.1, 0.9);
      return shoulder;
    }),
  );
  return { legs, arms };
}

function extras(root: THREE.Group, look: Look, arms: [THREE.Object3D, THREE.Object3D]): void {
  for (const extra of look.extras) {
    if (extra === 'lanyard') {
      block(root, 'red', [-0.07, 1.0, -0.17, 0.07, 1.1, -0.16]);
      block(root, 'white', [-0.05, 0.96, -0.175, 0.05, 1.04, -0.17]);
    } else if (extra === 'necklace') {
      for (const side of [-1, 1]) {
        const chain = block(root, 'white', [-0.006, -0.08, -0.004, 0.006, 0.08, 0.004]);
        chain.position.set(side * 0.035, 1.28, -0.16);
        chain.rotation.z = side * 0.35;
      }
      part(root, new THREE.OctahedronGeometry(0.02, 0), 'mustard', 0, 1.2, -0.17);
    } else if (extra === 'backpack') {
      const colour: Ink = look.outer === 'red' ? 'teal' : 'red';
      block(root, colour, [-0.17, 0.9, 0.13, 0.17, 1.32, 0.32]);
      block(root, colour === 'red' ? 'redDark' : 'tealDark', [-0.12, 0.95, 0.32, 0.12, 1.12, 0.36]);
      for (const side of [-1, 1]) block(root, colour, [side * 0.13 - 0.025, 0.95, -0.17, side * 0.13 + 0.025, 1.34, -0.15]);
    } else if (extra === 'scarf') {
      part(root, new THREE.TorusGeometry(0.11, 0.05, 5, 8), 'red', 0, 1.37, 0).rotation.x = Math.PI / 2;
      block(root, 'red', [0.04, 1.05, -0.2, 0.12, 1.36, -0.15]);
    } else if (extra === 'bag') {
      block(arms[1], 'woodDark', [-0.09, -0.85, -0.12, 0.09, -0.6, 0.12]);
      block(arms[1], 'ink', [-0.01, -0.6, -0.06, 0.01, -0.52, 0.06]);
    } else if (extra === 'paint') {
      for (const [x, y, ink] of [
        [0.12, 1.1, 'red'],
        [-0.14, 0.95, 'mustard'],
        [0.05, 0.9, 'teal'],
      ] as const) {
        block(root, ink, [x, y, -0.175, x + 0.05, y + 0.04, -0.17]);
      }
    }
  }
}

function buildPerson(look: Look): CustomerModel {
  const root = new THREE.Group();
  const { legs, arms } = body(root, look);
  head(root, look);
  extras(root, look, arms);
  root.scale.setScalar(look.height);
  root.position.y = GROUND_Y;
  return { root, legs, arms };
}

// ── 2D cartoons ─────────────────────────────────────────────────────────────────────

const OUTLINE = '#1b1f33';

type Cartoon = { draw: (ctx: CanvasRenderingContext2D, step: number) => void; colours: string[] };

/** Round blob with stubby legs, a sprout on top. */
function drawBlob(ctx: CanvasRenderingContext2D, step: number, c: string[]): void {
  const legY = step ? [440, 430] : [430, 440];
  ctx.fillStyle = OUTLINE;
  ctx.fillRect(98, 360, 22, legY[0] - 360);
  ctx.fillRect(140, 360, 22, legY[1] - 360);
  ctx.beginPath();
  ctx.ellipse(130, 270, 95, 110, 0, 0, Math.PI * 2);
  ctx.fillStyle = c[0];
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(130, 162);
  ctx.quadraticCurveTo(150, 110, 185, 115);
  ctx.quadraticCurveTo(160, 150, 130, 162);
  ctx.fillStyle = c[1];
  ctx.fill();
  ctx.stroke();
  face(ctx, 130, 250, 1.1);
}

/** A tall noodle-limbed kid with a big round hat. */
function drawNoodle(ctx: CanvasRenderingContext2D, step: number, c: string[]): void {
  const swing = step ? 18 : -18;
  ctx.lineCap = 'round';
  ctx.lineWidth = 14;
  ctx.strokeStyle = OUTLINE;
  for (const [x, dir] of [
    [112, 1],
    [148, -1],
  ] as const) {
    ctx.beginPath();
    ctx.moveTo(x, 330);
    ctx.quadraticCurveTo(x + swing * dir, 390, x - swing * dir * 0.5, 450);
    ctx.stroke();
  }
  ctx.lineWidth = 12;
  for (const side of [-1, 1]) {
    ctx.beginPath();
    ctx.moveTo(130 + side * 55, 230);
    ctx.quadraticCurveTo(130 + side * 95, 270 + swing * side, 130 + side * 80, 320);
    ctx.stroke();
  }
  ctx.lineWidth = 6;
  roundRect(ctx, 70, 210, 120, 130, 30, c[0]);
  ctx.beginPath();
  ctx.arc(130, 150, 62, 0, Math.PI * 2);
  ctx.fillStyle = c[2];
  ctx.fill();
  ctx.stroke();
  face(ctx, 130, 155, 1);
  // The hat: a wide brim and a round top.
  ctx.beginPath();
  ctx.ellipse(130, 100, 90, 18, 0, 0, Math.PI * 2);
  ctx.fillStyle = c[1];
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(130, 98, 48, Math.PI, 0);
  ctx.fill();
  ctx.stroke();
}

/** A friendly ghost under a sheet, in sneakers. */
function drawGhost(ctx: CanvasRenderingContext2D, step: number, c: string[]): void {
  ctx.beginPath();
  ctx.moveTo(45, 400);
  ctx.lineTo(45, 200);
  ctx.bezierCurveTo(45, 60, 215, 60, 215, 200);
  ctx.lineTo(215, 400);
  for (let i = 0; i < 5; i++) ctx.quadraticCurveTo(215 - i * 34 - 17, 380 + (i % 2 ? 0 : 30), 215 - (i + 1) * 34, 400);
  ctx.closePath();
  ctx.fillStyle = c[2];
  ctx.fill();
  ctx.stroke();
  for (const [x, up] of [
    [90, step],
    [170, 1 - step],
  ] as const) {
    roundRect(ctx, x - 30, 410 - up * 10, 60, 32, 14, c[0]);
  }
  face(ctx, 130, 200, 1.2);
}

/** A boxy cartoon robot with an antenna. */
function drawRobot(ctx: CanvasRenderingContext2D, step: number, c: string[]): void {
  ctx.fillStyle = OUTLINE;
  ctx.fillRect(95, 360, 24, step ? 85 : 75);
  ctx.fillRect(141, 360, 24, step ? 75 : 85);
  roundRect(ctx, 60, 220, 140, 150, 14, c[0]);
  roundRect(ctx, 90, 260, 80, 50, 8, c[1]);
  roundRect(ctx, 70, 100, 120, 110, 20, c[2]);
  ctx.beginPath();
  ctx.moveTo(130, 100);
  ctx.lineTo(130, 60);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(130, 55, 12, 0, Math.PI * 2);
  ctx.fillStyle = c[1];
  ctx.fill();
  ctx.stroke();
  face(ctx, 130, 155, 1);
}

/** A cat in a hoodie, standing on two legs. */
function drawCat(ctx: CanvasRenderingContext2D, step: number, c: string[]): void {
  ctx.fillStyle = OUTLINE;
  ctx.fillRect(100, 350, 22, step ? 95 : 85);
  ctx.fillRect(138, 350, 22, step ? 85 : 95);
  roundRect(ctx, 65, 210, 130, 150, 40, c[0]);
  for (const side of [-1, 1]) {
    ctx.beginPath();
    ctx.moveTo(130 + side * 30, 110);
    ctx.lineTo(130 + side * 62, 55);
    ctx.lineTo(130 + side * 70, 125);
    ctx.closePath();
    ctx.fillStyle = c[2];
    ctx.fill();
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.ellipse(130, 160, 75, 65, 0, 0, Math.PI * 2);
  ctx.fillStyle = c[2];
  ctx.fill();
  ctx.stroke();
  face(ctx, 130, 160, 1);
  ctx.lineWidth = 3;
  for (const side of [-1, 1]) {
    for (const dy of [-6, 6]) {
      ctx.beginPath();
      ctx.moveTo(130 + side * 30, 180 + dy);
      ctx.lineTo(130 + side * 70, 176 + dy * 2);
      ctx.stroke();
    }
  }
  ctx.lineWidth = 6;
}

/** Two dot eyes with a shine and a wide, happy mouth. */
function face(ctx: CanvasRenderingContext2D, x: number, y: number, s: number): void {
  for (const side of [-1, 1]) {
    ctx.beginPath();
    ctx.ellipse(x + side * 24 * s, y - 8 * s, 9 * s, 12 * s, 0, 0, Math.PI * 2);
    ctx.fillStyle = OUTLINE;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + side * 24 * s + 3 * s, y - 12 * s, 3 * s, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
  }
  ctx.beginPath();
  ctx.arc(x, y + 12 * s, 16 * s, 0.15 * Math.PI, 0.85 * Math.PI);
  ctx.stroke();
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number, fill: string): void {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.stroke();
}

const CARTOONS: ((random: () => number) => Cartoon)[] = [
  (r) => ({ draw: (ctx, s) => drawBlob(ctx, s, cartoonColours(r)), colours: [] }),
  (r) => ({ draw: (ctx, s) => drawNoodle(ctx, s, cartoonColours(r)), colours: [] }),
  (r) => ({ draw: (ctx, s) => drawGhost(ctx, s, cartoonColours(r)), colours: [] }),
  (r) => ({ draw: (ctx, s) => drawRobot(ctx, s, cartoonColours(r)), colours: [] }),
  (r) => ({ draw: (ctx, s) => drawCat(ctx, s, cartoonColours(r)), colours: [] }),
];

/** Three bright colours for a cartoon (fixed per customer: drawn once per frame texture). */
function cartoonColours(random: () => number): string[] {
  const pool = ['#ff8a5b', '#7ed6c4', '#ffd25a', '#f59ac1', '#9fb7ff', '#b4e07a', '#c7a6ff', '#ffffff', '#fbe2c8'];
  const state = random();
  const at = (k: number) => pool[Math.floor(((state * 997 + k * 131) % 1) * pool.length) % pool.length];
  return [at(1), at(2), at(3)];
}

function buildCartoon(seed: number): CustomerModel {
  const random = seededRandom(seed);
  const which = CARTOONS[Math.floor(random() * CARTOONS.length)];
  const colourSeed = random();
  const frames = [0, 1].map((step) => {
    const canvas = document.createElement('canvas');
    canvas.width = 260;
    canvas.height = 460;
    const ctx = canvas.getContext('2d')!;
    ctx.lineWidth = 6;
    ctx.lineJoin = 'round';
    ctx.strokeStyle = OUTLINE;
    // The same colours on both frames.
    which(() => colourSeed).draw(ctx, step);
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }) as unknown as [THREE.Texture, THREE.Texture];
  const material = new THREE.MeshBasicMaterial({ map: frames[0], transparent: true, alphaTest: 0.5, side: THREE.DoubleSide });
  const height = 1.75;
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry((height * 260) / 460, height), material);
  mesh.position.y = height / 2 - 0.02;
  const root = new THREE.Group();
  root.add(mesh);
  root.position.y = GROUND_Y;
  const dummy = () => new THREE.Object3D();
  return { root, legs: [dummy(), dummy()], arms: [dummy(), dummy()], card: { mesh, frames } };
}

// ── Brick toys ──────────────────────────────────────────────────────────────────────

const toyMaterials = new Map<string, THREE.MeshPhongMaterial>();
/** Shiny plastic. */
function plastic(colour: string): THREE.MeshPhongMaterial {
  let m = toyMaterials.get(colour);
  if (!m) toyMaterials.set(colour, (m = new THREE.MeshPhongMaterial({ color: hexColour(colour), shininess: 70, specular: 0x333333, flatShading: false })));
  return m;
}

type Costume = {
  torso: string;
  legs: string;
  arms: string;
  hands?: string;
  head?: string;
  mask?: string;
  hat?: 'helmet' | 'knight' | 'chef' | 'pirate' | 'antenna' | 'cap' | 'hair';
  hairColour?: string;
  cape?: string;
  emblem?: string;
};

const COSTUMES: Costume[] = [
  { torso: '#f2f2f2', legs: '#f2f2f2', arms: '#f2f2f2', hands: '#dddddd', hat: 'helmet', emblem: '#e4573d' },
  { torso: '#9aa3ad', legs: '#5b6470', arms: '#9aa3ad', hat: 'knight', emblem: '#f2b234' },
  { torso: '#ffffff', legs: '#30364a', arms: '#ffffff', hat: 'chef' },
  { torso: '#7a3b2e', legs: '#2b2f45', arms: '#f4ead5', hat: 'pirate', emblem: '#f2b234' },
  // A masked hero of our own: teal and mustard, with a cape and a { } badge.
  { torso: '#2b9c8e', legs: '#1c6b63', arms: '#2b9c8e', hands: '#f2b234', mask: '#f2b234', cape: '#e4573d', emblem: '#f2b234' },
  { torso: '#b9c2cf', legs: '#7b8594', arms: '#b9c2cf', head: '#b9c2cf', hat: 'antenna', emblem: '#2b9c8e' },
  { torso: '#e4573d', legs: '#25304f', arms: '#e4573d', hat: 'hair', hairColour: '#3b2416' },
  { torso: '#4f8a49', legs: '#c27b4b', arms: '#4f8a49', hat: 'cap' },
  { torso: '#2f6fd1', legs: '#25304f', arms: '#2f6fd1', hat: 'hair', hairColour: '#f2b234' },
];

/** The printed face: two eyes and a smile (or eyes through a mask), drawn on a curved decal. */
function toyFace(mask?: string, grin = false): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d')!;
  if (mask) {
    ctx.fillStyle = mask;
    ctx.beginPath();
    ctx.roundRect(6, 30, 116, 34, 16);
    ctx.fill();
  }
  ctx.fillStyle = mask ? '#ffffff' : '#1b1f33';
  for (const x of [44, 84]) {
    ctx.beginPath();
    ctx.ellipse(x, 47, mask ? 9 : 6, mask ? 6 : 9, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.strokeStyle = '#1b1f33';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  if (grin) {
    ctx.arc(64, 72, 20, 0.1 * Math.PI, 0.9 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = '#1b1f33';
    ctx.fill();
  } else ctx.arc(64, 70, 18, 0.18 * Math.PI, 0.82 * Math.PI);
  ctx.stroke();
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

/** A box whose top is narrower than its bottom (the toy's torso). */
function taperedBox(w: number, h: number, d: number, topScale: number): THREE.BufferGeometry {
  const g = new THREE.BoxGeometry(w, h, d);
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) if (pos.getY(i) > 0) pos.setX(i, pos.getX(i) * topScale);
  g.computeVertexNormals();
  return g;
}

/**
 * A brick toy figure, scaled up to a person's height: a rounded cylinder head with a stud and
 * a printed face, a neck, a torso narrower at the shoulders, arms that hang out a little and bend
 * forward at the elbow, C-shaped hands on round wrists, a hip block, and two square legs with
 * feet. Shiny plastic, in costumes of our own.
 */
function buildBrick(seed: number): CustomerModel {
  const random = seededRandom(seed);
  const c = COSTUMES[Math.floor(random() * COSTUMES.length)];
  const skin = c.head ?? '#ffd23f';
  const root = new THREE.Group();
  const add = (parent: THREE.Object3D, geometry: THREE.BufferGeometry, colour: string, x: number, y: number, z: number) => {
    const m = new THREE.Mesh(geometry, plastic(colour));
    m.position.set(x, y, z);
    parent.add(m);
    return m;
  };

  // Legs (each swings from the hip) with feet that stick out at the front.
  const legs = pair(
    [-0.105, 0.105].map((x) => {
      const hip = new THREE.Group();
      hip.position.set(x, 0.62, 0);
      root.add(hip);
      add(hip, new THREE.BoxGeometry(0.2, 0.52, 0.22), c.legs, 0, -0.3, 0.01);
      add(hip, new THREE.BoxGeometry(0.2, 0.1, 0.3), c.legs, 0, -0.57, -0.03);
      return hip;
    }),
  );
  // The hip block.
  add(root, new THREE.BoxGeometry(0.44, 0.1, 0.22), c.legs, 0, 0.66, 0.01);

  // Torso: narrower at the shoulders.
  const torsoH = 0.5;
  add(root, taperedBox(0.46, torsoH, 0.22, 0.72), c.torso, 0, 0.71 + torsoH / 2, 0.01);
  if (c.emblem) {
    const badge = add(root, new THREE.CircleGeometry(0.065, 16), c.emblem, 0, 1.0, -0.101);
    badge.rotation.y = Math.PI;
  }
  if (c.cape) {
    const cape = add(root, new THREE.PlaneGeometry(0.42, 0.85), c.cape, 0, 0.82, 0.135);
    (cape.material as THREE.Material) = plastic(c.cape).clone();
    (cape.material as THREE.Material).side = THREE.DoubleSide;
    cape.rotation.x = 0.1;
  }

  // Arms: from the top corners of the torso, out a little, bending forward at the elbow.
  const arms = pair(
    [-1, 1].map((side) => {
      const shoulder = new THREE.Group();
      shoulder.position.set(side * 0.215, 1.14, 0.01);
      root.add(shoulder);
      add(shoulder, new THREE.SphereGeometry(0.07, 12, 8), c.arms, 0, 0, 0);
      add(shoulder, new THREE.CylinderGeometry(0.065, 0.06, 0.26, 12), c.arms, 0, -0.13, 0);
      const elbow = new THREE.Group();
      elbow.position.set(0, -0.25, 0);
      elbow.rotation.x = -0.55;
      shoulder.add(elbow);
      add(elbow, new THREE.SphereGeometry(0.06, 10, 8), c.arms, 0, 0, 0);
      add(elbow, new THREE.CylinderGeometry(0.06, 0.058, 0.2, 12), c.arms, 0, -0.1, 0);
      add(elbow, new THREE.CylinderGeometry(0.03, 0.03, 0.05, 10), c.hands ?? skin, 0, -0.22, 0);
      // The C-shaped hand: a thick ring with its opening forward.
      const hand = add(elbow, new THREE.TorusGeometry(0.05, 0.026, 10, 16, Math.PI * 1.45), c.hands ?? skin, 0, -0.28, 0);
      hand.rotation.set(0, Math.PI / 2, Math.PI * 0.27 + Math.PI / 2);
      shoulder.rotation.z = side * 0.26;
      return shoulder;
    }),
  );
  // Unbend the hanging arms a little at the shoulder, so they reach forward like the toy's.
  arms.forEach((arm) => (arm.rotation.x = -0.15));

  // Neck, head (a cylinder with rounded top and bottom edges) and the stud on top.
  add(root, new THREE.CylinderGeometry(0.075, 0.075, 0.05, 14), skin, 0, 1.24, 0.01);
  const profile = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0.125, 0),
    new THREE.Vector2(0.148, 0.025),
    new THREE.Vector2(0.15, 0.06),
    new THREE.Vector2(0.15, 0.2),
    new THREE.Vector2(0.148, 0.235),
    new THREE.Vector2(0.125, 0.26),
    new THREE.Vector2(0, 0.26),
  ];
  add(root, new THREE.LatheGeometry(profile, 24), skin, 0, 1.265, 0.01);
  add(root, new THREE.CylinderGeometry(0.075, 0.075, 0.06, 16), skin, 0, 1.555, 0.01);
  // The face, printed on a curved strip just in front of the head's surface.
  const face = new THREE.Mesh(
    new THREE.CylinderGeometry(0.152, 0.152, 0.2, 16, 1, true, Math.PI - 0.95, 1.9),
    new THREE.MeshBasicMaterial({ map: toyFace(c.mask, random() < 0.4), transparent: true }),
  );
  face.position.set(0, 1.395, 0.01);
  root.add(face);

  // Headgear.
  if (c.hat === 'helmet') {
    const glass = new THREE.Mesh(
      new THREE.SphereGeometry(0.23, 20, 14),
      new THREE.MeshPhongMaterial({ color: 0xcfeeff, transparent: true, opacity: 0.22, shininess: 140, depthWrite: false }),
    );
    glass.position.set(0, 1.4, 0.01);
    root.add(glass);
    const ring = add(root, new THREE.TorusGeometry(0.2, 0.035, 10, 24), '#f2f2f2', 0, 1.24, 0.01);
    ring.rotation.x = Math.PI / 2;
    add(root, new THREE.BoxGeometry(0.3, 0.32, 0.12), '#f2f2f2', 0, 0.98, 0.17);
  } else if (c.hat === 'knight') {
    const helm = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.3, 20, 1, true, Math.PI * 0.75, Math.PI * 1.5), plastic('#9aa3ad').clone());
    (helm.material as THREE.Material).side = THREE.DoubleSide;
    helm.position.set(0, 1.4, 0.01);
    root.add(helm);
    const top = add(root, new THREE.SphereGeometry(0.17, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), '#9aa3ad', 0, 1.55, 0.01);
    top.scale.y = 0.6;
    add(root, new THREE.BoxGeometry(0.03, 0.16, 0.26), '#e4573d', 0, 1.7, 0.03);
  } else if (c.hat === 'chef') {
    add(root, new THREE.CylinderGeometry(0.16, 0.16, 0.08, 20), '#ffffff', 0, 1.56, 0.01);
    const puff = add(root, new THREE.SphereGeometry(0.2, 16, 10), '#ffffff', 0, 1.7, 0.01);
    puff.scale.y = 0.75;
  } else if (c.hat === 'pirate') {
    const hat = add(root, new THREE.CylinderGeometry(0.1, 0.24, 0.13, 3), '#25304f', 0, 1.6, 0.01);
    hat.rotation.y = Math.PI / 2;
  } else if (c.hat === 'antenna') {
    add(root, new THREE.CylinderGeometry(0.012, 0.012, 0.18, 6), '#7b8594', 0.08, 1.66, 0.01);
    add(root, new THREE.SphereGeometry(0.03, 10, 8), '#e4573d', 0.08, 1.76, 0.01);
  } else if (c.hat === 'cap') {
    const cap = add(root, new THREE.SphereGeometry(0.16, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), c.torso, 0, 1.5, 0.01);
    cap.scale.y = 0.7;
    add(root, new THREE.BoxGeometry(0.22, 0.02, 0.14), c.torso, 0, 1.52, -0.15);
  } else if (c.hat === 'hair') {
    const hair = add(root, new THREE.SphereGeometry(0.162, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.62), c.hairColour ?? '#6f3820', 0, 1.47, 0.02);
    hair.scale.y = 0.85;
  }
  root.position.y = GROUND_Y;
  return { root, legs, arms };
}

// ── Customers ───────────────────────────────────────────────────────────────────────

/**
 * A customer for an order: the seed (from the order id) decides whether they are a low-poly
 * person, a 2D cartoon or a brick toy, and how they look. The same seed always gives the same one.
 */
export function buildCustomer(kind: CustomerLook, seed = 1): CustomerModel {
  const figure = kindFor(seed);
  if (figure === 'cartoon' && typeof document !== 'undefined') return buildCartoon(seed);
  const model = figure === 'brick' ? buildBrick(seed) : buildPerson(lookFor(kind, seed));
  model.hipY = model.legs[0].position.y * model.root.scale.y;
  return model;
}

/**
 * The Manager (GAME_DESIGN.md §3): a low-poly person in a dark suit with a white shirt and a red
 * tie, glasses and neat hair, holding a report tablet. Faces −z like the customers.
 */
export function buildManager(): THREE.Group {
  const look: Look = {
    height: 1.02,
    width: 1.05,
    skin: 'skin2',
    hair: 'inkSoft',
    hairStyle: 'short',
    hat: 'ink',
    eyes: 'glasses',
    top: 'jacket',
    outer: 'ink',
    inner: 'white',
    lower: 'trousers',
    legs: 'ink',
    shoes: 'inkSoft',
    extras: ['brows'],
  };
  const { root, arms } = buildPerson(look);
  root.position.y = 0;
  // The tie.
  block(root, 'red', [-0.025, 0.98, -0.165, 0.025, 1.34, -0.158]);
  block(root, 'redDark', [-0.035, 1.3, -0.168, 0.035, 1.36, -0.16]);
  // The right arm bent forward, holding the report tablet.
  arms[1].rotation.x = -1.1;
  const tablet = block(arms[1], 'tealDark', [-0.13, -0.02, -0.2, 0.13, 0.0, 0.0]);
  tablet.position.set(-0.1, -0.52, -0.05);
  tablet.rotation.x = 1.1;
  return root;
}
