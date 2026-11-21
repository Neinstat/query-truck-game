/**
 * The neon street outside the truck (GAME_DESIGN.md §7, ORDER BY 2077): wet asphalt, a sidewalk
 * where customers queue, street furniture, a raised walkway, shop fronts and towers with lit
 * windows, neon signs (SQL puns, our own), flying cars, and fake neon reflections on the ground
 * that grow stronger when it rains. Everything is built from boxes and canvas textures.
 * ⚠ PLACEHOLDER models (docs/ASSETS.md).
 */
import * as THREE from 'three';
import { RISO } from '../art/riso';
import { mat } from './build';
import { hexColour, inkColour } from './colour';
import type { Sky } from './sky';
import { seededRandom } from './weather';
import { GROUND_Y, LAYOUT, PARK, QUEUE_PATH_3D, TRUCK } from './world';

type Six = [number, number, number, number, number, number];

function block(parent: THREE.Object3D, material: THREE.Material, b: Six): THREE.Mesh {
  const [x1, y1, z1, x2, y2, z2] = b;
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(Math.abs(x2 - x1), Math.abs(y2 - y1), Math.abs(z2 - z1)), material);
  mesh.position.set((x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2);
  parent.add(mesh);
  return mesh;
}

/** Neon tubes: unlit, always at full colour (the look pass makes them glow). */
const neonMaterials = new Map<string, THREE.MeshBasicMaterial>();
function neon(colour: string): THREE.MeshBasicMaterial {
  let m = neonMaterials.get(colour);
  if (!m) neonMaterials.set(colour, (m = new THREE.MeshBasicMaterial({ color: hexColour(colour) })));
  return m;
}

const NEON = [RISO.red, RISO.tealLight, RISO.mustard, RISO.pink, '#9d7bff', '#4dff9a'] as const;

// ── Signs ─────────────────────────────────────────────────────────────────────────────

type SignSpec = { text: string; colour: string; vertical?: boolean; boxed?: boolean };

/** A neon sign drawn into a canvas: glowing letters, and a thin tube frame. */
function signTexture(spec: SignSpec): { texture: THREE.CanvasTexture; aspect: number } {
  const letters = spec.vertical ? [...spec.text] : [spec.text];
  const cell = 96;
  const canvas = document.createElement('canvas');
  const font = `bold ${cell * 0.72}px "Arial Narrow", "Helvetica Neue", Arial, sans-serif`;
  const ctx = canvas.getContext('2d')!;
  ctx.font = font;
  const textWidth = spec.vertical ? cell : Math.ceil(ctx.measureText(spec.text).width) + cell * 0.6;
  canvas.width = Math.max(cell, textWidth);
  canvas.height = spec.vertical ? cell * letters.length + cell * 0.4 : cell * 1.3;
  ctx.fillStyle = 'rgba(8, 8, 20, 0.92)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = font;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = spec.colour;
  ctx.strokeStyle = spec.colour;
  if (spec.boxed !== false) {
    ctx.shadowBlur = 10;
    ctx.lineWidth = 5;
    ctx.strokeRect(7, 7, canvas.width - 14, canvas.height - 14);
  }
  for (const pass of [24, 8, 0]) {
    ctx.shadowBlur = pass;
    ctx.fillStyle = pass === 0 ? '#ffffff' : spec.colour;
    letters.forEach((ch, i) => {
      const y = spec.vertical ? cell * 0.7 + i * cell : canvas.height / 2 + 2;
      ctx.fillText(ch, canvas.width / 2, y);
    });
  }
  // A coloured core over the white, so letters read as tubes of colour, not white.
  ctx.globalCompositeOperation = 'multiply';
  ctx.shadowBlur = 0;
  ctx.fillStyle = spec.colour;
  ctx.globalAlpha = 0.45;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 4;
  return { texture, aspect: canvas.width / canvas.height };
}

type Flicker = { material: THREE.MeshBasicMaterial; base: THREE.Color; phase: number; rate: number };
type Reflection = { material: THREE.MeshBasicMaterial; strength: number };

class Street {
  readonly group = new THREE.Group();
  readonly flickers: Flicker[] = [];
  readonly reflections: Reflection[] = [];
  readonly random = seededRandom(2077);

  /**
   * A sign of a given height (m), facing +z unless turned, with a fake reflection on the wet
   * ground below it when it is near enough to be seen.
   */
  sign(spec: SignSpec, x: number, y: number, z: number, height: number, yaw = 0, flicker = false): THREE.Mesh {
    const { texture, aspect } = signTexture(spec);
    const width = height * aspect;
    const material = new THREE.MeshBasicMaterial({ map: texture, color: 0xffffff, fog: true });
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(width, height), material);
    plane.position.set(x, y, z);
    plane.rotation.y = yaw;
    this.group.add(plane);
    // The sign's box behind the face.
    const back = new THREE.Mesh(new THREE.BoxGeometry(width + 0.08, height + 0.08, 0.12), mat('ink'));
    back.position.set(0, 0, -0.07);
    plane.add(back);
    if (flicker) this.flickers.push({ material, base: new THREE.Color(1, 1, 1), phase: this.random() * 10, rate: 0.6 + this.random() });
    if (Math.abs(z) < 32) this.reflection(spec.colour, x, z, width, yaw);
    return plane;
  }

  /** A soft streak of colour on the ground in front of a light, like neon on wet asphalt. */
  reflection(colour: string, x: number, z: number, width: number, yaw = 0, length = 7, strength = 1): void {
    const material = new THREE.MeshBasicMaterial({
      color: hexColour(colour),
      map: STREAK,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(width * 0.8, length), material);
    plane.rotation.x = -Math.PI / 2;
    plane.rotation.z = yaw;
    // From the foot of the light towards the viewer (its facing direction).
    plane.position.set(x + Math.sin(yaw) * (length / 2), GROUND_Y + 0.02, z + Math.cos(yaw) * (length / 2));
    this.group.add(plane);
    this.reflections.push({ material, strength });
  }
}

/** A gradient: strong at the top (the light's foot), fading out, with a few ripples. */
const STREAK = (() => {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 128;
  const ctx = canvas.getContext('2d')!;
  for (let y = 0; y < 128; y++) {
    const t = y / 127;
    // Top of the texture is the far end (the light's foot): rows are flipped by the plane.
    const fade = Math.pow(t, 1.6) * (0.75 + 0.25 * Math.sin(y * 0.9));
    for (let x = 0; x < 32; x++) {
      const edge = Math.sin((x / 31) * Math.PI);
      const a = fade * Math.pow(edge, 1.5);
      ctx.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }
  return new THREE.CanvasTexture(canvas);
})() as THREE.CanvasTexture;

// ── Buildings ─────────────────────────────────────────────────────────────────────────

/** A window grid for a building face: dark glass, some windows lit in warm or neon colours. */
function windowTexture(cols: number, rows: number, random: () => number): THREE.CanvasTexture {
  const cw = 8;
  const ch = 10;
  const canvas = document.createElement('canvas');
  canvas.width = cols * cw;
  canvas.height = rows * ch;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const lit = ['#ffcf7a', '#ffe9b8', '#7af4ff', '#ff7ac0', '#b9a2ff', '#ffd27a'];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const on = random() < 0.3;
      ctx.fillStyle = on ? lit[Math.floor(random() * lit.length)] : '#0c1020';
      ctx.globalAlpha = on ? 0.3 + random() * 0.5 : 1;
      ctx.fillRect(c * cw + 2, r * ch + 2, cw - 3, ch - 4);
    }
  }
  ctx.globalAlpha = 1;
  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

/** A tower with lit windows on the side that faces `face` (+z by default). */
function tower(s: Street, x1: number, z1: number, x2: number, z2: number, height: number, face: 'z' | 'x+' | 'x-' = 'z'): void {
  const w = Math.abs(x2 - x1);
  const d = Math.abs(z2 - z1);
  const across = face === 'z' ? w : d;
  const cols = Math.max(2, Math.round(across / 1.4));
  const rows = Math.max(3, Math.round(height / 2.2));
  const windows = windowTexture(cols, rows, s.random);
  const wall = mat(s.random() < 0.5 ? 'inkSoft' : 'paperShade');
  const lit = new THREE.MeshLambertMaterial({ color: wall.color, emissive: 0xffffff, emissiveMap: windows, flatShading: true });
  // BoxGeometry faces: +x, −x, +y, −y, +z, −z.
  const faces: THREE.Material[] = [wall, wall, mat('ink'), wall, wall, wall];
  faces[face === 'z' ? 4 : face === 'x+' ? 0 : 1] = lit;
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, height, d), faces);
  mesh.position.set((x1 + x2) / 2, GROUND_Y + height / 2, (z1 + z2) / 2);
  s.group.add(mesh);
  // Rooftop: an antenna or a water tank, and a red warning light.
  if (s.random() < 0.5) {
    block(s.group, mat('ink'), [mesh.position.x - 0.05, GROUND_Y + height, mesh.position.z - 0.05, mesh.position.x + 0.05, GROUND_Y + height + 3, mesh.position.z + 0.05]);
    block(s.group, neon('#ff3355'), [mesh.position.x - 0.12, GROUND_Y + height + 3, mesh.position.z - 0.12, mesh.position.x + 0.12, GROUND_Y + height + 3.24, mesh.position.z + 0.12]);
  }
}

/** A shop front at street level: a lit glass front, a neon strip and a sign above. */
function shopFront(s: Street, x: number, z: number, width: number, sign: SignSpec): void {
  const glass = ['#ffb35c', '#4fd8ff', '#ff6ab0', '#9d7bff'][Math.floor(s.random() * 4)];
  const glassMaterial = new THREE.MeshBasicMaterial({ color: hexColour(glass) });
  glassMaterial.color.multiplyScalar(0.42);
  block(s.group, glassMaterial, [x - width / 2 + 0.4, GROUND_Y, z, x + width / 2 - 0.4, GROUND_Y + 2.6, z + 0.05]);
  // Shelves seen through the glass.
  for (let k = 0; k < 3; k++) {
    block(s.group, mat('inkSoft'), [x - width / 2 + 0.6, GROUND_Y + 0.6 + k * 0.7, z + 0.06, x + width / 2 - 0.6, GROUND_Y + 0.66 + k * 0.7, z + 0.08]);
  }
  block(s.group, neon(sign.colour), [x - width / 2 + 0.3, GROUND_Y + 2.7, z + 0.05, x + width / 2 - 0.3, GROUND_Y + 2.78, z + 0.12]);
  s.reflection(glass, x, z + 0.1, width, 0, 6, 0.8);
  s.sign({ ...sign, boxed: true }, x, GROUND_Y + 3.45, z + 0.18, 0.95, 0, s.random() < 0.25);
}

// ── Street furniture ─────────────────────────────────────────────────────────────────

function bench(g: THREE.Group, x: number, z: number, yaw: number): void {
  const b = new THREE.Group();
  block(b, mat('inkSoft'), [-0.8, 0.42, -0.22, 0.8, 0.48, 0.22]);
  block(b, mat('inkSoft'), [-0.8, 0.55, 0.18, 0.8, 0.85, 0.24]);
  block(b, neon(RISO.tealLight), [-0.78, 0.4, -0.23, 0.78, 0.42, -0.2]);
  block(b, mat('ink'), [-0.7, 0, -0.2, -0.64, 0.42, 0.2]);
  block(b, mat('ink'), [0.64, 0, -0.2, 0.7, 0.42, 0.2]);
  b.position.set(x, GROUND_Y, z);
  b.rotation.y = yaw;
  g.add(b);
}

/** A standing table under a dark umbrella with a neon rim (the old picnic tables' places). */
function streetTable(s: Street, x: number, z: number, colour: string): void {
  const p = new THREE.Group();
  block(p, mat('inkSoft'), [-0.7, 1.0, -0.4, 0.7, 1.06, 0.4]);
  block(p, mat('ink'), [-0.05, 0, -0.05, 0.05, 1.0, 0.05]);
  block(p, mat('ink'), [-0.4, 0, -0.3, 0.4, 0.06, 0.3]);
  block(p, mat('ink'), [-0.02, 1.06, -0.02, 0.02, 2.3, 0.02]);
  const umbrella = new THREE.Mesh(new THREE.ConeGeometry(1.2, 0.45, 8, 1, true), mat('woodDark'));
  umbrella.material = umbrella.material.clone();
  (umbrella.material as THREE.MeshLambertMaterial).side = THREE.DoubleSide;
  umbrella.position.set(0, 2.3, 0);
  p.add(umbrella);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.025, 4, 8), neon(colour));
  rim.rotation.x = Math.PI / 2;
  rim.rotation.z = Math.PI / 8;
  rim.position.set(0, 2.08, 0);
  p.add(rim);
  p.position.set(x, GROUND_Y, z);
  s.group.add(p);
}

/** Street lamps share materials, so the neon brightens together as night falls (`setSky`). */
const lampTube = new THREE.MeshBasicMaterial({ color: hexColour(RISO.tealLight) });
const stringBulbs = {
  a: new THREE.MeshBasicMaterial({ color: hexColour(RISO.mustard) }),
  b: new THREE.MeshBasicMaterial({ color: hexColour(RISO.red) }),
};

function lampPost(s: Street, x: number, z: number): THREE.Vector3 {
  block(s.group, mat('ink'), [x - 0.06, GROUND_Y, z - 0.06, x + 0.06, GROUND_Y + 3.6, z + 0.06]);
  block(s.group, mat('ink'), [x - 0.06, GROUND_Y + 3.5, z - 0.06, x + 0.06, GROUND_Y + 3.6, z + 0.7]);
  block(s.group, lampTube, [x - 0.05, GROUND_Y + 3.42, z + 0.05, x + 0.05, GROUND_Y + 3.5, z + 0.66]);
  block(s.group, neon(RISO.red), [x - 0.07, GROUND_Y + 1.2, z - 0.07, x + 0.07, GROUND_Y + 2.4, z + 0.07]).scale.set(1.05, 1, 1.05);
  s.reflection(RISO.tealLight, x, z + 0.3, 1.2, 0, 4, 0.9);
  return new THREE.Vector3(x, GROUND_Y + 3.55, z);
}

/** A holographic ad pylon (where the park once had trees): a slim pole with a glowing panel. */
function holoPylon(s: Street, x: number, z: number, text: string, colour: string): void {
  block(s.group, mat('ink'), [x - 0.08, GROUND_Y, z - 0.08, x + 0.08, GROUND_Y + 1.2, z + 0.08]);
  const sign = s.sign({ text, colour, vertical: true }, x, GROUND_Y + 2.9, z, 3.2, Math.atan2(-x, -z), true);
  sign.material = (sign.material as THREE.MeshBasicMaterial).clone();
  (sign.material as THREE.MeshBasicMaterial).transparent = true;
  (sign.material as THREE.MeshBasicMaterial).opacity = 0.9;
}

// ── Flying cars ──────────────────────────────────────────────────────────────────────

type Car = { root: THREE.Group; y: number; z: number; speed: number; span: number; offset: number };

function flyingCar(s: Street, y: number, z: number, speed: number, offset: number): Car {
  const root = new THREE.Group();
  block(root, mat('inkSoft'), [-1.1, -0.25, -0.5, 1.1, 0.25, 0.5]);
  block(root, mat('ink'), [-0.5, 0.25, -0.4, 0.6, 0.5, 0.4]);
  const front = speed > 0 ? 1 : -1;
  block(root, neon('#f4f8ff'), [front * 1.1 - 0.04, -0.1, -0.4, front * 1.1 + 0.04, 0.05, 0.4]);
  block(root, neon('#ff2a3a'), [-front * 1.1 - 0.04, -0.1, -0.4, -front * 1.1 + 0.04, 0.05, 0.4]);
  block(root, neon(NEON[Math.floor(s.random() * NEON.length)]), [-1.0, -0.28, -0.5, 1.0, -0.24, 0.5]);
  s.group.add(root);
  return { root, y, z, speed, span: 160, offset };
}

// ── The street ───────────────────────────────────────────────────────────────────────

const SHOPS: SignSpec[] = [
  { text: 'NOODLE JOIN', colour: RISO.tealLight },
  { text: '24/7 SELECT', colour: RISO.mustard },
  { text: 'NULL BAR', colour: RISO.red },
  { text: 'CHROME DOC', colour: '#4dff9a' },
  { text: 'PIXEL PAWN', colour: '#9d7bff' },
  { text: 'DIM SUM()', colour: RISO.pink },
  { text: 'RAMEN 404', colour: RISO.mustard },
];

const VERTICAL: SignSpec[] = [
  { text: 'HOTEL', colour: RISO.red, vertical: true },
  { text: 'GROUP BY', colour: RISO.tealLight, vertical: true },
  { text: 'TATTOO', colour: '#9d7bff', vertical: true },
  { text: 'LIMIT 1', colour: RISO.mustard, vertical: true },
  { text: 'ARCADE', colour: RISO.pink, vertical: true },
  { text: 'CLINIC', colour: '#4dff9a', vertical: true },
];

export function buildStreet(): THREE.Group {
  const s = new Street();
  const g = s.group;

  // Wet asphalt everywhere; a darker, wetter look while it rains (`update`).
  const groundMaterial = new THREE.MeshLambertMaterial({ color: inkColour('grass'), flatShading: true });
  const dryGround = inkColour('grass');
  const wetGround = hexColour('#0b0d18');
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(220, 220), groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, GROUND_Y, -40);
  g.add(ground);

  // The sidewalk in front of the truck, with tiles, and the curb with a cyan safety strip.
  block(g, mat('paperShade'), [-30, GROUND_Y - 0.05, -12.5, 30, GROUND_Y + 0.02, 6]);
  for (let x = -30; x < 30; x += 2) block(g, mat('inkSoft'), [x, GROUND_Y + 0.02, -12.5, x + 0.03, GROUND_Y + 0.025, 6]);
  for (let z = -12; z < 6; z += 2) block(g, mat('inkSoft'), [-30, GROUND_Y + 0.02, z, 30, GROUND_Y + 0.025, z + 0.03]);
  block(g, neon(RISO.teal), [-30, GROUND_Y + 0.02, -12.56, 30, GROUND_Y + 0.05, -12.5]);
  // The path customers walk along: darker tiles with amber guide lights.
  for (let i = 1; i < QUEUE_PATH_3D.length - 1; i++) {
    const a = QUEUE_PATH_3D[i - 1];
    const b = QUEUE_PATH_3D[i];
    const length = Math.hypot(b.x - a.x, b.z - a.z) + 1.2;
    const piece = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.02, length), mat('inkSoft'));
    piece.position.set((a.x + b.x) / 2, GROUND_Y + 0.03, (a.z + b.z) / 2);
    piece.rotation.y = Math.atan2(b.x - a.x, b.z - a.z);
    g.add(piece);
    for (let k = 0; k < length; k += 1.2) {
      for (const side of [-0.72, 0.72]) {
        const dot = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.03, 0.18), neon(RISO.mustard));
        const t = k / length;
        const nx = Math.cos(piece.rotation.y) * side;
        const nz = -Math.sin(piece.rotation.y) * side;
        dot.position.set(a.x + (b.x - a.x) * t + nx, GROUND_Y + 0.04, a.z + (b.z - a.z) * t + nz);
        dot.rotation.y = piece.rotation.y;
        g.add(dot);
      }
    }
  }
  // The road beyond the curb, with dashed amber lane lines.
  for (let x = -60; x < 60; x += 4) block(g, mat('mustardDark'), [x, GROUND_Y + 0.005, -16.1, x + 2, GROUND_Y + 0.012, -15.9]);

  // Street furniture on the old park's spots (world.ts keeps them off the customers' path).
  for (const b of PARK.benches) bench(g, b.x, b.z, b.yaw);
  PARK.picnicTables.forEach((p, i) => streetTable(s, p.x, p.z, [RISO.red, RISO.tealLight, RISO.mustard][i % 3]));
  const lamps = PARK.lamps.map((l) => lampPost(s, l.x, l.z));
  for (let i = 1; i < lamps.length; i++) {
    const a = lamps[i - 1];
    const b = lamps[i];
    for (let k = 1; k < 12; k++) {
      const t = k / 12;
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 4), k % 2 ? stringBulbs.a : stringBulbs.b);
      bulb.position.lerpVectors(a, b, t);
      bulb.position.y -= Math.sin(t * Math.PI) * 0.6;
      g.add(bulb);
    }
  }
  const pylons: [string, string][] = [
    ['SQL', RISO.tealLight],
    ['ラーメン', RISO.red],
    ['2077', RISO.mustard],
  ];
  PARK.trees.forEach((t, i) => holoPylon(s, t.x, t.z, pylons[i % pylons.length][0], pylons[i % pylons.length][1]));

  // The raised walkway across the street, with a railing and a light strip underneath.
  const walkY = GROUND_Y + 4.6;
  block(g, mat('inkSoft'), [-60, walkY - 0.35, -21, 60, walkY, -18.6]);
  block(g, neon(RISO.tealLight), [-60, walkY - 0.38, -18.7, 60, walkY - 0.33, -18.6]);
  block(g, mat('ink'), [-60, walkY + 1.0, -18.7, 60, walkY + 1.06, -18.6]);
  for (let x = -60; x <= 60; x += 2.2) {
    block(g, mat('ink'), [x - 0.04, walkY, -18.7, x + 0.04, walkY + 1.0, -18.6]);
  }
  for (let x = -54; x <= 54; x += 12) {
    block(g, mat('ink'), [x - 0.25, GROUND_Y, -20.2, x + 0.25, walkY - 0.35, -19.7]);
  }
  // Shop fronts under the walkway, and the façade of towers rising behind it.
  for (let i = 0, x = -36; x < 36; i++) {
    const width = 6 + Math.floor(s.random() * 4);
    shopFront(s, x + width / 2, -21.6, width, SHOPS[i % SHOPS.length]);
    const height = 14 + Math.floor(s.random() * 26);
    tower(s, x, -30, x + width - 0.3, -21.6, height);
    if (i % 2 === 0) {
      const v = VERTICAL[(i / 2) % VERTICAL.length];
      s.sign(v, x + width - 0.6, walkY + 4.5 + s.random() * 4, -20.6, 4.2 + s.random() * 1.5, 0, s.random() < 0.3);
    }
    x += width;
  }
  // Buildings down both sides of the street, facing in, with signs sticking out.
  for (const side of [-1, 1] as const) {
    for (let i = 0, z = 6; z > -20; i++) {
      const depth = 5 + Math.floor(s.random() * 4);
      const x = side * 17;
      tower(s, x, z - depth + 0.3, x + side * 10, z, 10 + Math.floor(s.random() * 22), side < 0 ? 'x+' : 'x-');
      const v = VERTICAL[(i + (side > 0 ? 3 : 0)) % VERTICAL.length];
      s.sign(v, x - side * 0.6, GROUND_Y + 6 + s.random() * 4, z - depth / 2, 3.6, side < 0 ? Math.PI / 2 : -Math.PI / 2, s.random() < 0.3);
      z -= depth;
    }
  }
  // Far towers and a giant billboard with the game's name.
  for (let i = 0, x = -110; x < 110; i++) {
    const w = 6 + Math.floor(s.random() * 10);
    const h = 30 + Math.floor(s.random() * 60);
    const z = -55 - (i % 3) * 8;
    tower(s, x, z - 10, x + w, z, h);
    x += w + 2 + s.random() * 4;
  }
  s.sign({ text: 'ORDER BY 2077', colour: RISO.red }, 6, GROUND_Y + 34, -46, 6, 0, true);
  s.sign({ text: 'SELECT * FROM DREAMS', colour: RISO.tealLight }, -30, GROUND_Y + 26, -52, 3.4, 0.15);
  s.sign({ text: 'NEO VALLEY', colour: RISO.mustard }, 34, GROUND_Y + 40, -60, 4, -0.2, true);

  // Flying cars on two sky lanes.
  const cars: Car[] = [];
  for (let i = 0; i < 7; i++) {
    const lane = i % 3;
    const y = GROUND_Y + 16 + lane * 7 + s.random() * 3;
    const z = -34 - lane * 9;
    const speed = (lane % 2 ? -1 : 1) * (9 + s.random() * 8);
    cars.push(flyingCar(s, y, z, speed, s.random() * 160));
  }

  // The sun (or moon) behind the smog.
  const sunMaterial = new THREE.MeshBasicMaterial({ color: inkColour('mustard'), fog: false, transparent: true, opacity: 0.75 });
  const sun = new THREE.Mesh(new THREE.CircleGeometry(6, 24), sunMaterial);
  g.add(sun);

  // The truck's own awning over the window, seen from inside: dark with a pink neon edge.
  const w = LAYOUT.window;
  const HZ = TRUCK.depth / 2;
  const awning = new THREE.Group();
  block(awning, mat('inkSoft'), [w.min.x - 0.2, 0, 0, w.max.x + 0.2, 0.04, 0.9]);
  block(awning, neon(RISO.red), [w.min.x - 0.2, -0.02, 0.86, w.max.x + 0.2, 0.03, 0.92]);
  awning.position.set(0, w.max.y + 0.25, -HZ - 0.5);
  awning.rotation.x = -0.35;
  g.add(awning);

  const nightMaterials = [lampTube, stringBulbs.a, stringBulbs.b];
  const nightBase = nightMaterials.map((m) => m.color.clone());
  let neonLevel = 1;
  /** The time of day (sky.ts): moves the sun or moon and sets how bright the neon is. */
  g.userData.setSky = (sky: Sky) => {
    const distance = 90;
    const up = (sky.elevation * Math.PI) / 180;
    sun.position.set(sky.across * 70, GROUND_Y + Math.sin(up) * distance, -distance * Math.cos(up));
    sun.lookAt(0, GROUND_Y + 1, 0);
    sun.visible = sky.elevation > -6 || sky.lamps > 0.97;
    if (sky.lamps > 0.97) sun.position.set(-30, GROUND_Y + 48, -88); // the moon
    sunMaterial.color.set(sky.disc);
    neonLevel = sky.lamps;
    nightMaterials.forEach((m, i) => m.color.copy(nightBase[i]).multiplyScalar(0.55 + 0.45 * sky.lamps));
  };

  /** Every frame: flying cars, flickering signs, and how wet the ground looks. */
  g.userData.update = (time: number, rain: number) => {
    for (const car of cars) {
      const x = (((car.offset + time * car.speed) % car.span) + car.span) % car.span - car.span / 2;
      car.root.position.set(x, car.y + Math.sin(time * 0.7 + car.offset) * 0.3, car.z);
    }
    for (const f of s.flickers) {
      // Mostly on, with short stutters now and then.
      const t = time * f.rate + f.phase;
      const off = Math.sin(t * 1.3) > 0.96 && Math.sin(t * 37) > 0;
      f.material.color.copy(f.base).multiplyScalar(off ? 0.25 : 1);
    }
    const wet = Math.min(1, rain * 1.4);
    groundMaterial.color.copy(dryGround).lerp(wetGround, wet);
    for (const r of s.reflections) r.material.opacity = (0.12 + 0.5 * wet) * r.strength * (0.6 + 0.4 * neonLevel);
  };
  return g;
}
