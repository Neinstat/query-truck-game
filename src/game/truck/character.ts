/**
 * Low-poly people (GAME_DESIGN.md §7): a big, round, faceted head with no mouth or nose (just
 * eyes, glasses or sunglasses), hair or a cap, an open jacket over a shirt, tapered sleeves and
 * trouser legs, chunky hands and shoes. Everything is flat-shaded in the palette, so the facets
 * catch the light. Our own design. ⚠ Placeholder characters (docs/ASSETS.md).
 *
 * People face −z (towards the truck once they turn round). Arms swing from the shoulders and
 * legs from the hips while walking (TruckGame).
 */
import * as THREE from 'three';
import type { Ink } from '../art/riso';
import type { CustomerLook } from '../../sql-core/truck/orders';
import { block, mat } from './build';
import { LOOKS, type Look } from './looks';
import { GROUND_Y } from './world';

export type CustomerModel = {
  root: THREE.Group;
  legs: [THREE.Object3D, THREE.Object3D];
  arms: [THREE.Object3D, THREE.Object3D];
};

/** A mesh at (x, y, z) in a parent. */
function part(parent: THREE.Object3D, geometry: THREE.BufferGeometry, ink: Ink, x: number, y: number, z: number): THREE.Mesh {
  const mesh = new THREE.Mesh(geometry, mat(ink));
  mesh.position.set(x, y, z);
  parent.add(mesh);
  return mesh;
}

/** A tapered, six-sided tube hanging down from its top (sleeves, trouser legs). */
function tube(top: number, bottom: number, length: number): THREE.BufferGeometry {
  return new THREE.CylinderGeometry(top, bottom, length, 6).translate(0, -length / 2, 0);
}

const HEAD_Y = 1.6;
const HEAD_R = 0.21;

/** The head: a faceted ball with eyes or glasses, and hair or a cap. */
function head(root: THREE.Group, look: Pick<Look, 'skin' | 'hair' | 'hairStyle' | 'hat' | 'eyes'>): void {
  part(root, new THREE.CylinderGeometry(0.06, 0.07, 0.1, 6), look.skin, 0, 1.4, 0);
  part(root, new THREE.SphereGeometry(HEAD_R, 9, 7), look.skin, 0, HEAD_Y, 0).scale.set(1, 1.07, 0.98);
  const front = -HEAD_R * 0.92;
  const eyeY = HEAD_Y + 0.02;
  if (look.eyes === 'sunglasses') {
    // Two dark, eight-sided lenses and a bridge, wrapping a little round the head.
    for (const side of [-1, 1]) {
      const lens = part(root, new THREE.CylinderGeometry(0.068, 0.068, 0.02, 8), 'ink', side * 0.075, eyeY, front - 0.02);
      lens.rotation.x = Math.PI / 2;
      lens.rotation.y = side * 0.25;
      lens.scale.set(1.15, 1, 0.8);
      // The arm of the glasses, back towards the ear.
      block(root, 'ink', [side * 0.13, eyeY + 0.02, front + 0.02, side * 0.2, eyeY + 0.035, front + 0.1]);
    }
    block(root, 'ink', [-0.02, eyeY + 0.015, front - 0.035, 0.02, eyeY + 0.03, front - 0.02]);
  } else {
    for (const side of [-1, 1]) {
      const eye = part(root, new THREE.SphereGeometry(0.022, 5, 4), 'ink', side * 0.075, eyeY, front - 0.005);
      eye.scale.set(1, 1.4, 0.6);
      if (look.eyes === 'glasses') {
        const frame = part(root, new THREE.TorusGeometry(0.05, 0.008, 3, 8), 'ink', side * 0.075, eyeY, front - 0.025);
        frame.rotation.y = side * 0.2;
      }
    }
    if (look.eyes === 'glasses') block(root, 'ink', [-0.025, eyeY - 0.004, front - 0.03, 0.025, eyeY + 0.004, front - 0.02]);
  }
  // Hair: a faceted cap of hair over the top and back of the head.
  const dome = (ink: Ink, scale = 1.06) => {
    const d = part(root, new THREE.SphereGeometry(HEAD_R, 9, 4, 0, Math.PI * 2, 0, Math.PI / 2), ink, 0, HEAD_Y + 0.025, 0.012);
    d.scale.set(scale, scale * 1.05, scale);
    return d;
  };
  if (look.hairStyle === 'cap') {
    dome(look.hat ?? 'red', 1.1);
    // The brim, sticking out at the front.
    const brim = block(root, look.hat ?? 'red', [-0.14, -0.012, -0.16, 0.14, 0.012, 0]);
    brim.position.set(0, HEAD_Y + 0.07, -HEAD_R - 0.05);
    brim.rotation.x = -0.12;
    part(root, new THREE.SphereGeometry(0.02, 4, 3), look.hat ?? 'red', 0, HEAD_Y + HEAD_R * 1.15, 0.01);
  } else if (look.hairStyle === 'sides') {
    // Bald on top, a ring of hair round the sides and back.
    for (const side of [-1, 1]) {
      part(root, new THREE.IcosahedronGeometry(0.075, 0), look.hair, side * 0.19, HEAD_Y + 0.01, 0.03).scale.set(0.6, 1, 1.3);
    }
    part(root, new THREE.IcosahedronGeometry(0.09, 0), look.hair, 0, HEAD_Y, 0.17).scale.set(1.8, 0.8, 0.6);
  } else {
    dome(look.hair);
    // A fringe and the back of the head.
    part(root, new THREE.IcosahedronGeometry(0.09, 0), look.hair, 0.04, HEAD_Y + 0.14, -0.13).scale.set(1.7, 0.6, 0.9);
    if (look.hairStyle === 'long') part(root, new THREE.BoxGeometry(0.36, 0.4, 0.12), look.hair, 0, HEAD_Y - 0.12, 0.15);
    if (look.hairStyle === 'bun') part(root, new THREE.IcosahedronGeometry(0.08, 0), look.hair, 0, HEAD_Y + 0.17, 0.15);
  }
}

/**
 * A body: legs and shoes, a torso in an open jacket over a shirt, and arms with hands.
 * Returns the hip and shoulder pivots for walking.
 */
function body(root: THREE.Group, look: Pick<Look, 'skin' | 'jacket' | 'shirt' | 'legs' | 'shoes'>) {
  const legs = [-0.1, 0.1].map((x) => {
    const hip = new THREE.Group();
    hip.position.set(x, 0.86, 0);
    root.add(hip);
    part(hip, tube(0.085, 0.07, 0.78), look.legs, 0, 0, 0);
    block(hip, look.shoes, [-0.07, -0.86, -0.17, 0.07, -0.76, 0.07]);
    return hip;
  }) as unknown as [THREE.Object3D, THREE.Object3D];

  // Torso: a tapered, seven-sided jacket, wider at the shoulders, with the shirt showing down
  // the front, lapels, and a hem.
  const torso = part(root, new THREE.CylinderGeometry(0.26, 0.21, 0.56, 7), look.jacket, 0, 1.1, 0);
  torso.scale.set(1, 1, 0.68);
  torso.rotation.y = Math.PI / 7;
  block(root, look.shirt, [-0.075, 0.86, -0.155, 0.075, 1.36, -0.13]);
  for (const side of [-1, 1]) {
    const lapel = block(root, look.jacket, [-0.035, -0.17, -0.012, 0.035, 0.17, 0.012]);
    lapel.position.set(side * 0.1, 1.2, -0.155);
    lapel.rotation.z = side * 0.25;
  }
  // A collar standing up at the back of the neck.
  part(root, new THREE.CylinderGeometry(0.11, 0.13, 0.08, 7, 1, true, Math.PI * 0.6, Math.PI * 1.8), look.jacket, 0, 1.38, 0.01).material = (() => {
    const m = mat(look.jacket).clone();
    m.side = THREE.DoubleSide;
    return m;
  })();
  part(root, new THREE.CylinderGeometry(0.2, 0.21, 0.06, 7), look.legs, 0, 0.86, 0).scale.set(1, 1, 0.7);

  const arms = [-1, 1].map((side) => {
    const shoulder = new THREE.Group();
    shoulder.position.set(side * 0.3, 1.32, 0);
    root.add(shoulder);
    part(shoulder, new THREE.IcosahedronGeometry(0.1, 0), look.jacket, 0, 0, 0);
    const sleeve = part(shoulder, tube(0.092, 0.075, 0.5), look.jacket, 0, 0, 0);
    sleeve.rotation.z = side * 0.06;
    // A chunky, faceted hand.
    part(shoulder, new THREE.DodecahedronGeometry(0.062, 0), look.skin, side * 0.03, -0.56, 0).scale.set(0.9, 1.1, 0.9);
    return shoulder;
  }) as unknown as [THREE.Object3D, THREE.Object3D];
  return { legs, arms };
}

/** A customer, 1.8 m tall, facing −z. */
export function buildCustomer(lookId: CustomerLook): CustomerModel {
  const look = LOOKS[lookId];
  const root = new THREE.Group();
  const { legs, arms } = body(root, look);
  head(root, look);
  if (look.extra === 'lanyard') {
    block(root, 'red', [-0.07, 1.0, -0.16, 0.07, 1.1, -0.15]);
    block(root, 'white', [-0.05, 0.96, -0.165, 0.05, 1.04, -0.16]);
  }
  if (look.extra === 'necklace') {
    for (const side of [-1, 1]) {
      const chain = block(root, 'white', [-0.006, -0.08, -0.004, 0.006, 0.08, 0.004]);
      chain.position.set(side * 0.035, 1.28, -0.16);
      chain.rotation.z = side * 0.35;
    }
    part(root, new THREE.OctahedronGeometry(0.02, 0), 'ink', 0, 1.2, -0.165);
  }
  if (look.extra === 'backpack') {
    block(root, 'red', [-0.17, 0.9, 0.13, 0.17, 1.32, 0.3]);
    for (const side of [-1, 1]) block(root, 'red', [side * 0.13 - 0.025, 0.95, -0.16, side * 0.13 + 0.025, 1.34, -0.14]);
  }
  if (look.extra === 'paint') {
    for (const [x, y, ink] of [
      [0.12, 1.1, 'red'],
      [-0.14, 0.95, 'mustard'],
      [0.05, 0.9, 'teal'],
    ] as const) {
      block(root, ink, [x, y, -0.165, x + 0.05, y + 0.04, -0.16]);
    }
  }
  root.position.y = GROUND_Y;
  return { root, legs, arms };
}

/**
 * The Manager (GAME_DESIGN.md §3): the same build in a dark suit with a white shirt and a red tie,
 * glasses and neat hair, holding a report tablet. Faces −z like the customers.
 */
export function buildManager(): THREE.Group {
  const root = new THREE.Group();
  const look = { skin: 'skin2', hair: 'inkSoft', hairStyle: 'short', jacket: 'ink', shirt: 'white', legs: 'ink', shoes: 'inkSoft', eyes: 'glasses' } as const;
  const { arms } = body(root, look);
  head(root, look);
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
