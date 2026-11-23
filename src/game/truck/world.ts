/**
 * The food truck world (GAME_DESIGN.md §14.8): sizes in metres, where the
 * player may walk, the things they can use, aiming at them, and the queue path in the park.
 * Pure logic (no Three.js), tested on its own.
 *
 * Axes: x along the truck (left −, right +), y up (truck floor = 0), z towards the back wall (+).
 * The serving window is in the front wall (z = −DEPTH/2) and looks out over the park.
 */
import type { TruckObjectId } from '../../sql-core/truck/objects';
import { QUEUE } from './queue';
import type { PlaceId } from '../../sql-core/truck/places';

/** Things in the truck the player can use (which tables each one sees: sql-core/truck/objects.ts). */
export type InteractableId = TruckObjectId;

export type Vec3 = { x: number; y: number; z: number };
export type Box3 = { min: Vec3; max: Vec3 };

const box = (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): Box3 => ({
  min: { x: Math.min(x1, x2), y: Math.min(y1, y2), z: Math.min(z1, z2) },
  max: { x: Math.max(x1, x2), y: Math.max(y1, y2), z: Math.max(z1, z2) },
});

/** The inside of the truck. */
export const TRUCK = { length: 6, depth: 2.4, height: 2.4 } as const;
const HX = TRUCK.length / 2;
const HZ = TRUCK.depth / 2;

/** Eye height of the player. */
export const EYE_Y = 1.6;
/** Walking speed (m/s) and how far the player can reach to use something (m). */
export const WALK_SPEED = 2.2;
export const REACH = 1.7;

/** The park ground is lower than the truck floor; customers' heads show in the window. */
export const GROUND_Y = -0.35;

export const LAYOUT = {
  window: box(-1.5, 1.05, -HZ - 0.05, 1.5, 2.05, -HZ + 0.05),
  frontCounter: box(-1.8, 0, -HZ, 1.8, 1.0, -HZ + 0.45),
  tablet: box(0.7, 1.0, -HZ + 0.12, 1.06, 1.26, -HZ + 0.3),
  tipJar: box(-1.3, 1.0, -HZ + 0.15, -1.12, 1.22, -HZ + 0.33),
  fridge: box(-HX, 0, -HZ + 0.05, -HX + 0.75, 2.0, -0.2),
  stockShelves: box(-HX, 0, 0.05, -HX + 0.55, 2.0, HZ),
  backCounter: box(-1.6, 0, HZ - 0.45, 1.8, 0.95, HZ),
  coffeeMachine: box(-1.25, 0.95, HZ - 0.4, -0.6, 1.5, HZ - 0.05),
  menuBoard: box(-0.1, 1.35, HZ - 0.05, 1.0, 2.1, HZ),
  recipeShelf: box(1.15, 1.42, HZ - 0.3, 1.75, 1.78, HZ),
  door: box(HX - 0.05, 0, -0.5, HX, 2.1, 0.5),
  /** The how-to-play book, open on the back counter, with a little "GUIDE" sign. */
  guideBook: box(0.2, 0.95, HZ - 0.4, 0.62, 1.22, HZ - 0.06),
  /** The radio on the back counter, between the coffee machine and the guide book. */
  radio: box(-0.5, 0.95, HZ - 0.3, -0.1, 1.2, HZ - 0.08),
} as const;

/** Clock on the back wall, above the coffee machine. */
export const CLOCK3D = { x: -0.92, y: 1.9, z: HZ - 0.02, r: 0.16 } as const;

/** Where the player's eye may go (keeps them off counters and out of walls). */
export const WALK = { minX: -HX + 0.95, maxX: HX - 0.4, minZ: -HZ + 0.7, maxZ: HZ - 0.7 } as const;
/** The player starts in the middle, facing the window. */
export const START = { x: 0, z: 0.1, yaw: 0 } as const;

export const INTERACTABLE_BOXES: readonly { id: InteractableId; box: Box3 }[] = [
  { id: 'tablet', box: LAYOUT.tablet },
  { id: 'fridge', box: LAYOUT.fridge },
  { id: 'fridge', box: LAYOUT.stockShelves },
  { id: 'menu-board', box: LAYOUT.menuBoard },
  { id: 'recipe-shelf', box: LAYOUT.recipeShelf },
  { id: 'back-door', box: LAYOUT.door },
  { id: 'guide-book', box: LAYOUT.guideBook },
  { id: 'radio', box: LAYOUT.radio },
];

/**
 * The Data Lens (GAME_DESIGN.md §7): where the cards float in the truck, and the tables on each.
 * A card sits above the object that holds its tables (the fridge and its shelves split stock and
 * suppliers). The tablet's card also lists the menu, because menu orders are answered there.
 * The `customers` card follows the customer at the window instead (see TruckGame).
 */
export const LENS_SPOTS: readonly { id: string; tables: string[]; object: InteractableId; box: Box3 }[] = [
  { id: 'tablet', tables: ['sales', 'menu_items'], object: 'tablet', box: LAYOUT.tablet },
  { id: 'fridge', tables: ['inventory'], object: 'fridge', box: LAYOUT.fridge },
  { id: 'shelves', tables: ['suppliers'], object: 'fridge', box: LAYOUT.stockShelves },
  { id: 'menu-board', tables: ['menu_items'], object: 'menu-board', box: LAYOUT.menuBoard },
  { id: 'recipes', tables: ['recipes', 'menu_items'], object: 'recipe-shelf', box: LAYOUT.recipeShelf },
];

/** Where a card is pinned: just above the middle of its object. */
export function lensPoint(box: Box3): Vec3 {
  return { x: (box.min.x + box.max.x) / 2, y: Math.min(box.max.y + 0.15, TRUCK.height - 0.1), z: (box.min.z + box.max.z) / 2 };
}

export function clampWalk(x: number, z: number): { x: number; z: number } {
  return {
    x: Math.min(WALK.maxX, Math.max(WALK.minX, x)),
    z: Math.min(WALK.maxZ, Math.max(WALK.minZ, z)),
  };
}

/** The direction the eye looks in, from yaw (turning; 0 = towards the window) and pitch (up +). */
export function lookDirection(yaw: number, pitch: number): Vec3 {
  const c = Math.cos(pitch);
  return { x: -Math.sin(yaw) * c, y: Math.sin(pitch), z: -Math.cos(yaw) * c };
}

/**
 * One step of WASD walking: forward/back along the view (ignoring pitch), strafe sideways.
 * Diagonals are not faster.
 */
export function walkStep(
  at: { x: number; z: number },
  yaw: number,
  keys: { forward: boolean; back: boolean; left: boolean; right: boolean },
  seconds: number,
  /** Developer mode: walk anywhere (through the walls), twice as fast. */
  free = false,
): { x: number; z: number } {
  const f = (keys.forward ? 1 : 0) - (keys.back ? 1 : 0);
  const s = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
  const length = Math.hypot(f, s);
  if (length === 0) return at;
  const step = (WALK_SPEED * (free ? 2 : 1) * seconds) / length;
  const fx = -Math.sin(yaw);
  const fz = -Math.cos(yaw);
  // Right is the forward direction turned a quarter to the right.
  const rx = Math.cos(yaw);
  const rz = -Math.sin(yaw);
  const x = at.x + (fx * f + rx * s) * step;
  const z = at.z + (fz * f + rz * s) * step;
  return free ? { x, z } : clampWalk(x, z);
}

/** Distance along a ray to a box (slab method), or null when it misses. */
export function rayBox(origin: Vec3, dir: Vec3, b: Box3): number | null {
  let tMin = 0;
  let tMax = Infinity;
  for (const axis of ['x', 'y', 'z'] as const) {
    const o = origin[axis];
    const d = dir[axis];
    if (Math.abs(d) < 1e-9) {
      if (o < b.min[axis] || o > b.max[axis]) return null;
      continue;
    }
    let t1 = (b.min[axis] - o) / d;
    let t2 = (b.max[axis] - o) / d;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tMin = Math.max(tMin, t1);
    tMax = Math.min(tMax, t2);
    if (tMin > tMax) return null;
  }
  return tMin;
}

/** The thing under the crosshair, within reach. */
export function aimedInteractable(eye: Vec3, dir: Vec3): InteractableId | null {
  let best: { id: InteractableId; t: number } | null = null;
  for (const { id, box: b } of INTERACTABLE_BOXES) {
    const t = rayBox(eye, dir, b);
    if (t !== null && t <= REACH && (!best || t < best.t)) best = { id, t };
  }
  return best?.id ?? null;
}

/** The yaw and pitch that look from `eye` straight at `target` (inverse of lookDirection). */
export function lookAtAngles(eye: Vec3, target: Vec3): { yaw: number; pitch: number } {
  const dx = target.x - eye.x;
  const dy = target.y - eye.y;
  const dz = target.z - eye.z;
  return { yaw: Math.atan2(-dx, -dz), pitch: Math.atan2(dy, Math.hypot(dx, dz)) };
}

const centre = (b: Box3): Vec3 => ({ x: (b.min.x + b.max.x) / 2, y: (b.min.y + b.max.y) / 2, z: (b.min.z + b.max.z) / 2 });

/**
 * The truck tour (GAME_DESIGN.md §7): where the camera stands to show each object, looking
 * straight at it (a step back where that frames it better, so not always within reach). Also used for the pictures in the how-to-play guide. In tour order.
 */
export const TOUR_STOPS: readonly { object: InteractableId; eye: Vec3; target: Vec3 }[] = [
  { object: 'tablet', eye: { x: 0.2, y: EYE_Y, z: 0.15 }, target: centre(LAYOUT.tablet) },
  // Far back across the truck, so the fridge and the stock shelves beside it both show (owner's
  // feedback: the close-up showed only the fridge).
  { object: 'fridge', eye: { x: 0.9, y: EYE_Y, z: 0.3 }, target: { x: -2.5, y: 1.05, z: -0.45 } },
  { object: 'recipe-shelf', eye: { x: 1.2, y: EYE_Y, z: -0.25 }, target: centre(LAYOUT.recipeShelf) },
  { object: 'menu-board', eye: { x: 0.45, y: EYE_Y, z: -0.35 }, target: centre(LAYOUT.menuBoard) },
  { object: 'back-door', eye: { x: 0.4, y: EYE_Y, z: 0 }, target: centre(LAYOUT.door) },
  { object: 'guide-book', eye: { x: 0.4, y: EYE_Y, z: -0.05 }, target: centre(LAYOUT.guideBook) },
  { object: 'radio', eye: { x: -0.25, y: EYE_Y, z: -0.1 }, target: centre(LAYOUT.radio) },
];

// ── The queue in the park ───────────────────────────────────────────────────────────

/**
 * The line at the window, the same everywhere: straight out from the serving window, as people
 * queue at a real food truck. Spot 0 is at the window.
 */
const LINE = [
  { x: 0.3, z: -HZ - 0.6 },
  { x: 0.5, z: -HZ - 1.65 },
  { x: 0.7, z: -HZ - 2.7 },
] as const;

/**
 * Each place's route (queue progress units, queue.ts): where people come from, the line, and
 * where they walk off to — different at every place, so they don't always come the same way.
 * No path is painted on the ground.
 */
const route = (from: { x: number; z: number }[], to: { x: number; z: number }[]) => {
  const inSteps = from.length;
  const outSteps = to.length;
  return [
    ...from.map((p, i) => ({ at: QUEUE.enterX + (i / inSteps) * (QUEUE.frontX - 2 * QUEUE.gap - QUEUE.enterX), ...p })),
    { at: QUEUE.frontX - 2 * QUEUE.gap, ...LINE[2] },
    { at: QUEUE.frontX - QUEUE.gap, ...LINE[1] },
    { at: QUEUE.frontX, ...LINE[0] },
    ...to.map((p, i) => ({ at: QUEUE.frontX + ((i + 1) / outSteps) * (QUEUE.exitX - QUEUE.frontX), ...p })),
  ];
};

export const PLACE_ROUTES: Record<PlaceId, readonly { at: number; x: number; z: number }[]> = {
  // Across the lawn from the left, off to the right.
  park: route([{ x: -11, z: -8 }], [{ x: 4, z: -2.6 }, { x: 9, z: -3.5 }]),
  // From the right, past the fun box; off to the left under the overpass.
  skatepark: route([{ x: 13, z: -6.5 }], [{ x: -3, z: -2.7 }, { x: -9, z: -4.5 }]),
  // Out of the school gate straight ahead; off to the right.
  school: route([{ x: -0.8, z: -23.5 }, { x: 0.6, z: -9 }], [{ x: 4, z: -2.6 }, { x: 8, z: -3.2 }]),
  // Along the pier from the left; off along it to the right.
  harbour: route([{ x: -13, z: -7 }], [{ x: 4.5, z: -2.6 }, { x: 11, z: -3 }]),
  // Across the square from the right; off to the left.
  square: route([{ x: 13, z: -5.2 }], [{ x: -3, z: -2.4 }, { x: -9, z: -2.6 }]),
};

/** The park's route (the first place), kept for tests and older code. */
export const QUEUE_PATH_3D = PLACE_ROUTES.park;

/** Where a customer stands, and which way they face (yaw; 0 = looking towards −z). */
export function queuePosition(progress: number, place: PlaceId = 'park'): { x: number; z: number; yaw: number } {
  const path = PLACE_ROUTES[place];
  const p = Math.min(path[path.length - 1].at, Math.max(path[0].at, progress));
  for (let i = 1; i < path.length; i++) {
    const a = path[i - 1];
    const b = path[i];
    if (p <= b.at) {
      const t = (p - a.at) / (b.at - a.at);
      // Face the direction of walking (atan2 of the step; 0 = −z).
      const yaw = Math.atan2(-(b.x - a.x), -(b.z - a.z));
      return { x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t, yaw };
    }
  }
  const last = path[path.length - 1];
  return { x: last.x, z: last.z, yaw: 0 };
}

/** Customers waiting face the truck (towards +z, i.e. yaw π). */
export const FACING_TRUCK = Math.PI;

// ── The place around the truck ────────────────────────────────────────────────────────

/** The kinds of things that stand around the truck (scenery.ts draws each one). */
export type PropKind =
  | 'bench'
  | 'picnicTable'
  | 'lamp'
  | 'tree'
  | 'bush'
  | 'bin'
  | 'quarterPipe'
  | 'funBox'
  | 'rail'
  | 'pillar'
  | 'hoop'
  | 'bikeRack'
  | 'flagPole'
  | 'bollard'
  | 'crates'
  | 'barrel'
  | 'stall'
  | 'fountain'
  | 'planter'
  /** The truck's own folding chalkboard sign with the menu and OPEN on it. */
  | 'aFrame'
  /** The truck's own folding table with two stools, for customers who eat in (dineIn.ts). */
  | 'bistroSet';

/** A thing near the truck: where it stands, which way it faces (yaw), and how big it is. */
export type Prop = { kind: PropKind; x: number; z: number; yaw?: number; size?: number };

/** Room each kind of thing needs around its centre (m), at size 1. */
export const PROP_RADIUS: Record<PropKind, number> = {
  bench: 1.0,
  picnicTable: 1.3,
  lamp: 0.3,
  tree: 1.3,
  bush: 0.7,
  bin: 0.35,
  quarterPipe: 2.0,
  funBox: 1.7,
  rail: 1.5,
  pillar: 0.8,
  hoop: 0.8,
  bikeRack: 1.1,
  flagPole: 0.3,
  bollard: 0.3,
  crates: 1.0,
  barrel: 0.45,
  stall: 1.7,
  fountain: 2.4,
  planter: 0.7,
  aFrame: 0.5,
  bistroSet: 1.0,
};

/**
 * Where things stand at each place the truck parks (sql-core/truck/places.ts), near the truck.
 * Nothing may stand on the path customers walk, and nothing overlaps: tested against
 * QUEUE_PATH_3D. Customers who eat in sit on the benches, picnic tables and the truck's bistro sets (dineIn.ts). The far
 * backdrop of each place (buildings, the overpass, the sea) is drawn in scenery.ts.
 */
export const PLACE_PROPS: Record<PlaceId, readonly Prop[]> = {
  park: [
    { kind: 'bench', x: -5.2, z: -3.2, yaw: 0.4 },
    { kind: 'bench', x: 5.6, z: -8.8, yaw: -0.5 },
    { kind: 'bench', x: 8.5, z: -14, yaw: -0.2 },
    { kind: 'picnicTable', x: 3.9, z: -6.2 },
    { kind: 'picnicTable', x: -5.5, z: -12 },
    { kind: 'picnicTable', x: 7, z: -11 },
    { kind: 'lamp', x: -3.6, z: -3.6 },
    { kind: 'lamp', x: 2.4, z: -4.4 },
    { kind: 'lamp', x: 6.5, z: -7 },
    { kind: 'tree', x: -8.5, z: -1.5, size: 1.2 },
    { kind: 'tree', x: 9.5, z: -7.5, size: 1.1 },
    { kind: 'tree', x: -2, z: -16, size: 1.3 },
    { kind: 'aFrame', x: -1.6, z: -3.2, yaw: 0.4 },
    { kind: 'bistroSet', x: 7, z: -5.5, yaw: -0.5 },
    { kind: 'bistroSet', x: 1, z: -6, yaw: 0.5 },
  ],
  skatepark: [
    { kind: 'quarterPipe', x: 1.5, z: -12, yaw: 0 },
    { kind: 'quarterPipe', x: -6, z: -16, yaw: 0.3 },
    { kind: 'funBox', x: 6.5, z: -10 },
    { kind: 'rail', x: 3.2, z: -7.2, yaw: 0.2 },
    { kind: 'pillar', x: -11, z: -13 },
    { kind: 'pillar', x: 11, z: -13 },
    { kind: 'pillar', x: -4, z: -21 },
    { kind: 'pillar', x: 5, z: -21 },
    { kind: 'bench', x: -6, z: -7.5, yaw: 0.4 },
    { kind: 'bin', x: -2.2, z: -6.5 },
    { kind: 'lamp', x: -1.5, z: -9 },
    { kind: 'lamp', x: -9.5, z: -7.5 },
    { kind: 'aFrame', x: -1.3, z: -3.8, yaw: 0.3 },
    { kind: 'bistroSet', x: -4, z: -5, yaw: 0 },
    { kind: 'bistroSet', x: -8, z: -6.5, yaw: 1.57 },
  ],
  school: [
    // A hoop faces −z before turning: the far one turns round to face the court.
    { kind: 'hoop', x: 4, z: -14, yaw: Math.PI },
    { kind: 'hoop', x: 4, z: -8.4, yaw: 0 },
    { kind: 'bikeRack', x: -5.6, z: -3.4, yaw: 0.5 },
    { kind: 'bikeRack', x: 9.5, z: -5.5, yaw: -1.2 },
    { kind: 'flagPole', x: -3, z: -17 },
    { kind: 'bench', x: 8.8, z: -9.5, yaw: -1.3 },
    { kind: 'tree', x: -7.5, z: -6.5, size: 1.1 },
    { kind: 'tree', x: -9, z: -14, size: 1.3 },
    { kind: 'tree', x: 11, z: -15, size: 1.2 },
    { kind: 'bin', x: 2.6, z: -4.4 },
    { kind: 'aFrame', x: -1.3, z: -3.8, yaw: 0.4 },
    { kind: 'bistroSet', x: 4.5, z: -5, yaw: -0.5 },
    { kind: 'bistroSet', x: 7, z: -8, yaw: -0.5 },
  ],
  harbour: [
    { kind: 'bollard', x: -6, z: -14 },
    { kind: 'bollard', x: -1, z: -14 },
    { kind: 'bollard', x: 4, z: -14 },
    { kind: 'bollard', x: 9, z: -14 },
    { kind: 'crates', x: 5, z: -8.5, yaw: 0.3 },
    { kind: 'crates', x: -6.5, z: -1.8, yaw: -0.4 },
    { kind: 'barrel', x: 6.8, z: -9.8 },
    { kind: 'barrel', x: 3.3, z: -10.4 },
    { kind: 'bench', x: 0.5, z: -9.5, yaw: 0 },
    { kind: 'lamp', x: 2.4, z: -4.4 },
    { kind: 'lamp', x: -3.6, z: -11 },
    { kind: 'lamp', x: 8, z: -6.5 },
    { kind: 'aFrame', x: -1.6, z: -2.9, yaw: 0.5 },
    { kind: 'bistroSet', x: 4, z: -5.5, yaw: 0 },
    { kind: 'bistroSet', x: 6.5, z: -6, yaw: -0.5 },
  ],
  square: [
    { kind: 'fountain', x: 4.5, z: -11 },
    { kind: 'stall', x: -6, z: -15, yaw: 0.2 },
    { kind: 'stall', x: 9.5, z: -7.5, yaw: -0.9 },
    { kind: 'stall', x: -0.5, z: -17, yaw: 0 },
    { kind: 'planter', x: -6.5, z: -6 },
    { kind: 'planter', x: 3, z: -7.2 },
    { kind: 'bench', x: 8.5, z: -14, yaw: -0.4 },
    { kind: 'lamp', x: -3.8, z: -4.4 },
    { kind: 'lamp', x: 6.5, z: -6.5 },
    { kind: 'tree', x: -10, z: -8, size: 1.1 },
    { kind: 'aFrame', x: -1.3, z: -3.8, yaw: 0.3 },
    { kind: 'bistroSet', x: -2, z: -6.5, yaw: -0.5 },
    { kind: 'bistroSet', x: -8, z: -4.5, yaw: 0.5 },
  ],
};

/** Room a prop needs around its centre (m). */
export function propRadius(p: Prop): number {
  return PROP_RADIUS[p.kind] * (p.size ?? 1);
}

/** Half the path's width, plus a little room for customers' shoulders (m). */
export const PATH_CLEARANCE = 0.9;

/** Shortest distance from a point to the path customers walk (in to the window, and off again). */
export function distanceToQueuePath(x: number, z: number, place: PlaceId = 'park'): number {
  const path = PLACE_ROUTES[place];
  let best = Infinity;
  for (let i = 1; i < path.length; i++) {
    const a = path[i - 1];
    const b = path[i];
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const t = Math.max(0, Math.min(1, ((x - a.x) * dx + (z - a.z) * dz) / (dx * dx + dz * dz)));
    best = Math.min(best, Math.hypot(x - (a.x + dx * t), z - (a.z + dz * t)));
  }
  return best;
}

