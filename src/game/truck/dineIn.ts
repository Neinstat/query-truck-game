/**
 * Eating in (GAME_DESIGN.md §14.4): after being served, some customers sit down for a while
 * instead of walking off with their order: on the place's benches and picnic tables, or at the
 * truck's own folding bistro sets. Pure logic (no Three.js), tested on its own.
 *
 * A diner walks off along the place's way out as far as the first step past the window, then
 * to a spot beside their seat (never through a table), sits, and after a while walks back the
 * same way and on out of sight.
 */
import type { PlaceId } from '../../sql-core/truck/places';
import { PLACE_PROPS, PLACE_ROUTES, propRadius, type Prop, type PropKind } from './world';
import { QUEUE } from './queue';

type Point = { x: number; z: number };

/** A seat: where the sitter's feet-centre is, which way they face (yaw; 0 = towards −z), how high
 * the seat is, where they step up to it from, and where their cup goes (on a table). */
export type Seat = {
  id: string;
  x: number;
  z: number;
  yaw: number;
  height: number;
  from: Point;
  cup?: { x: number; y: number; z: number };
  /** The prop the seat belongs to (index in PLACE_PROPS). */
  prop: number;
};

type LocalSeat = { x: number; z: number; yaw: number; height: number; from: Point; cup?: { x: number; y: number; z: number } };

/** Seats on each kind of thing people can sit on, in the thing's own frame (see scenery.ts). */
const SEATS_ON: Partial<Record<PropKind, LocalSeat[]>> = {
  // The bench faces −z (its back is at +z).
  bench: [-0.4, 0.4].map((x) => ({ x, z: 0, yaw: 0, height: 0.48, from: { x, z: -0.75 } })),
  // A picnic table has a bench on each long side; people face the table and climb in from behind.
  picnicTable: [
    ...[-0.35, 0.35].map((x) => ({ x, z: -0.72, yaw: Math.PI, height: 0.46, from: { x, z: -1.35 }, cup: { x, y: 0.78, z: -0.25 } })),
    ...[-0.35, 0.35].map((x) => ({ x, z: 0.72, yaw: 0, height: 0.46, from: { x, z: 1.35 }, cup: { x, y: 0.78, z: 0.25 } })),
  ],
  // The truck's folding bistro set: a round table and two stools, facing each other along x.
  bistroSet: [
    { x: -0.62, z: 0, yaw: -Math.PI / 2, height: 0.48, from: { x: -1.15, z: 0 }, cup: { x: -0.2, y: 0.74, z: 0 } },
    { x: 0.62, z: 0, yaw: Math.PI / 2, height: 0.48, from: { x: 1.15, z: 0 }, cup: { x: 0.2, y: 0.74, z: 0 } },
  ],
};

/** A point in a prop's frame, placed in the world (the same turn as THREE's rotation.y). */
function toWorld(p: Prop, x: number, z: number): Point {
  const yaw = p.yaw ?? 0;
  const c = Math.cos(yaw);
  const s = Math.sin(yaw);
  return { x: p.x + x * c + z * s, z: p.z - x * s + z * c };
}

/** Every seat at a place. */
export function seatsAt(place: PlaceId): Seat[] {
  const seats: Seat[] = [];
  PLACE_PROPS[place].forEach((p, index) => {
    (SEATS_ON[p.kind] ?? []).forEach((s, i) => {
      const at = toWorld(p, s.x, s.z);
      const cup = s.cup ? { ...toWorld(p, s.cup.x, s.cup.z), y: s.cup.y } : undefined;
      seats.push({ id: `${index}.${i}`, ...at, yaw: s.yaw + (p.yaw ?? 0), height: s.height, from: toWorld(p, s.from.x, s.from.z), cup, prop: index });
    });
  });
  return seats;
}

/** Where a served customer steps aside to, past the window, and how far along the route that is. */
export function stepAside(place: PlaceId): Point & { at: number } {
  const path = PLACE_ROUTES[place];
  const next = path.find((p) => p.at > QUEUE.frontX)!;
  return { x: next.x, z: next.z, at: next.at };
}

/** The line at the window, from the window out to the last waiting spot. */
function linePoints(place: PlaceId): Point[] {
  return PLACE_ROUTES[place].filter((p) => p.at >= QUEUE.frontX - 2 * QUEUE.gap && p.at <= QUEUE.frontX);
}

function distanceToSegment(p: Point, a: Point, b: Point): number {
  const dx = b.x - a.x;
  const dz = b.z - a.z;
  const len = dx * dx + dz * dz;
  const t = len === 0 ? 0 : Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.z - a.z) * dz) / len));
  return Math.hypot(p.x - (a.x + dx * t), p.z - (a.z + dz * t));
}

/** Closest two segments come (sampled; fine for short walks). */
function segmentGap(a: Point, b: Point, c: Point, d: Point): number {
  let best = Infinity;
  for (let i = 0; i <= 20; i++) {
    const t = i / 20;
    best = Math.min(best, distanceToSegment({ x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t }, c, d));
    best = Math.min(best, distanceToSegment({ x: c.x + (d.x - c.x) * t, z: c.z + (d.z - c.z) * t }, a, b));
  }
  return best;
}

/** The truck and its cab from above, with a little room round it (as the route test uses). */
const inTruck = (p: Point) => p.x > -5.2 && p.x < 3.5 && p.z > -1.45 && p.z < 1.45;

/** Room a walker needs from a thing's edge, and from the people waiting in line (m). */
const SHOULDERS = 0.3;
const LINE_ROOM = 0.7;
/** How far a seat's own thing reaches from its centre, for the walk up to it (m). */
const OWN_ROOM = 0.45;

/** The walk from stepping aside to sitting down. */
export function walkTo(seat: Seat, place: PlaceId): Point[] {
  const aside = stepAside(place);
  return [{ x: aside.x, z: aside.z }, seat.from, { x: seat.x, z: seat.z }];
}

/** Why a seat can't be walked to (null = it can): the way there hits a thing, the line or the truck. */
export function blockedWay(seat: Seat, place: PlaceId): string | null {
  const [aside, from, at] = walkTo(seat, place);
  const props = PLACE_PROPS[place];
  for (let i = 0; i < props.length; i++) {
    const p = props[i];
    const r = propRadius(p) * 0.8 + SHOULDERS;
    // Its own seat only needs the walk to miss the seat itself (people come round to its side).
    const own = i === seat.prop ? OWN_ROOM + SHOULDERS : r;
    if (distanceToSegment(p, aside, from) < own) return `walks through the ${p.kind} at ${p.x}, ${p.z}`;
    if (i !== seat.prop && distanceToSegment(p, from, at) < r) return `sits into the ${p.kind} at ${p.x}, ${p.z}`;
  }
  const line = linePoints(place);
  for (let i = 1; i < line.length; i++) {
    if (segmentGap(aside, from, line[i - 1], line[i]) < LINE_ROOM) return 'walks through the line';
  }
  for (let i = 0; i <= 20; i++) {
    const t = i / 20;
    if (inTruck({ x: aside.x + (from.x - aside.x) * t, z: aside.z + (from.z - aside.z) * t })) return 'walks through the truck';
  }
  return null;
}

/** The seats people can get to at a place. */
export function reachableSeats(place: PlaceId): Seat[] {
  return seatsAt(place).filter((s) => blockedWay(s, place) === null);
}

/** About this share of customers (with legs) eat in when there is a free seat. */
export const DINE_IN_SHARE = 0.6;
/** Walking speed off the route (m/s) and how long a diner stays (game minutes). */
export const DINER_SPEED = 1.3;
export const SIT_MINUTES = { min: 18, max: 40 } as const;

export type Diner = {
  orderId: string;
  seat: Seat;
  state: 'toSeat' | 'sitting' | 'leaving';
  /** The walk being done (points) and how far along it (m). */
  path: Point[];
  walked: number;
  /** Game minutes left sitting. */
  sitLeft: number;
};

/** Where a walker is along a path, and which way they face. */
export function alongPath(path: Point[], walked: number): Point & { yaw: number; done: boolean } {
  let left = walked;
  for (let i = 1; i < path.length; i++) {
    const a = path[i - 1];
    const b = path[i];
    const len = Math.hypot(b.x - a.x, b.z - a.z);
    const yaw = Math.atan2(-(b.x - a.x), -(b.z - a.z));
    if (left <= len || i === path.length - 1) {
      const t = len === 0 ? 1 : Math.min(1, left / len);
      return { x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t, yaw, done: i === path.length - 1 && left >= len };
    }
    left -= len;
  }
  const last = path[path.length - 1];
  return { ...last, yaw: 0, done: true };
}

/**
 * Today's diners: who is walking to a seat, sitting or walking back. Seats are taken one person
 * each. `choose` is a number 0..1 fixed per order, so the same customer always decides the same.
 */
export class DineIn {
  readonly diners: Diner[] = [];
  private readonly seats: Seat[];

  constructor(readonly place: PlaceId) {
    this.seats = reachableSeats(place);
  }

  freeSeats(): Seat[] {
    return this.seats.filter((s) => !this.diners.some((d) => d.seat.id === s.id));
  }

  /** A served customer stepping aside: do they sit down? Returns the new diner, or null. */
  tryToSit(orderId: string, choose: number, canSit = true): Diner | null {
    if (!canSit || choose >= DINE_IN_SHARE) return null;
    const free = this.freeSeats();
    if (free.length === 0) return null;
    // Spread out: pick among the free seats with the same fixed number.
    const seat = free[Math.floor((choose / DINE_IN_SHARE) * free.length) % free.length];
    const diner: Diner = {
      orderId,
      seat,
      state: 'toSeat',
      path: walkTo(seat, this.place),
      walked: 0,
      sitLeft: SIT_MINUTES.min + (choose / DINE_IN_SHARE) * (SIT_MINUTES.max - SIT_MINUTES.min),
    };
    this.diners.push(diner);
    return diner;
  }

  /** Moves everyone on; returns diners who have walked back to the way out (they then leave along it). */
  update(seconds: number, gameMinutes: number): Diner[] {
    const done: Diner[] = [];
    for (const d of [...this.diners]) {
      if (d.state === 'sitting') {
        d.sitLeft -= gameMinutes;
        if (d.sitLeft <= 0) {
          d.state = 'leaving';
          d.path = [...walkTo(d.seat, this.place)].reverse();
          d.walked = 0;
        }
        continue;
      }
      d.walked += DINER_SPEED * seconds;
      if (alongPath(d.path, d.walked).done) {
        if (d.state === 'toSeat') d.state = 'sitting';
        else {
          this.diners.splice(this.diners.indexOf(d), 1);
          done.push(d);
        }
      }
    }
    return done;
  }
}
