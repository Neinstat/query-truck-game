import { describe, expect, it } from 'vitest';
import { OBJECT_STATION } from '../../sql-core/truck/objects';
import { STATIONS, tablesInQuery } from '../../sql-core/stations';
import { objectForStation } from '../../sql-core/truck/objects';
import { TEMPLATES } from '../../sql-core/truck/templates';
import { PLACES } from '../../sql-core/truck/places';
import { QUEUE, spotX } from './queue';
import {
  aimedInteractable,
  clampWalk,
  EYE_Y,
  GROUND_Y,
  INTERACTABLE_BOXES,
  LENS_SPOTS,
  lensPoint,
  distanceToQueuePath,
  PLACE_PROPS,
  PROP_RADIUS,
  propRadius,
  PATH_CLEARANCE,
  LAYOUT,
  lookAtAngles,
  lookDirection,
  TOUR_STOPS,
  queuePosition,
  rayBox,
  REACH,
  TRUCK,
  WALK,
  walkStep,
  type Vec3,
} from './world';

const centre = (b: { min: Vec3; max: Vec3 }): Vec3 => ({
  x: (b.min.x + b.max.x) / 2,
  y: (b.min.y + b.max.y) / 2,
  z: (b.min.z + b.max.z) / 2,
});

describe('walking in the truck', () => {
  it('stays inside the truck', () => {
    expect(clampWalk(-99, 99)).toEqual({ x: WALK.minX, z: WALK.maxZ });
    expect(WALK.minX).toBeGreaterThan(-TRUCK.length / 2);
    expect(WALK.maxX).toBeLessThan(TRUCK.length / 2);
  });

  it('walks forward where you look, and strafes sideways', () => {
    const forward = walkStep({ x: 0, z: 0 }, 0, { forward: true, back: false, left: false, right: false }, 0.1);
    expect(forward.z).toBeLessThan(0);
    expect(forward.x).toBeCloseTo(0);
    const right = walkStep({ x: 0, z: 0 }, 0, { forward: false, back: false, left: false, right: true }, 0.1);
    expect(right.x).toBeGreaterThan(0);
    // Turned a quarter to the left (yaw +90°), forward is −x.
    const turned = walkStep({ x: 0, z: 0 }, Math.PI / 2, { forward: true, back: false, left: false, right: false }, 0.1);
    expect(turned.x).toBeLessThan(0);
  });

  it('is not faster diagonally', () => {
    const d = walkStep({ x: 0, z: 0 }, 0, { forward: true, back: false, left: false, right: true }, 0.1);
    const s = walkStep({ x: 0, z: 0 }, 0, { forward: true, back: false, left: false, right: false }, 0.1);
    expect(Math.hypot(d.x, d.z)).toBeCloseTo(Math.hypot(s.x, s.z));
  });
});

describe('aiming at things', () => {
  it('finds a box straight ahead and misses one behind', () => {
    const b = { min: { x: -1, y: -1, z: -3 }, max: { x: 1, y: 1, z: -2 } };
    expect(rayBox({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: -1 }, b)).toBeCloseTo(2);
    expect(rayBox({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 1 }, b)).toBeNull();
  });

  it('can reach every thing from somewhere the player can stand', () => {
    for (const { id, box } of INTERACTABLE_BOXES) {
      const target = centre(box);
      const stand = clampWalk(target.x, target.z);
      const eye = { x: stand.x, y: EYE_Y, z: stand.z };
      const dx = target.x - eye.x;
      const dy = target.y - eye.y;
      const dz = target.z - eye.z;
      const length = Math.hypot(dx, dy, dz);
      expect(length, id).toBeLessThanOrEqual(REACH);
      expect(aimedInteractable(eye, { x: dx / length, y: dy / length, z: dz / length }), id).toBe(id);
    }
  });

  it('looks at the tablet from the start when glancing down-right', () => {
    const eye = { x: 0, y: EYE_Y, z: 0.1 };
    const t = centre(LAYOUT.tablet);
    const yaw = Math.atan2(-(t.x - eye.x), -(t.z - eye.z));
    const pitch = Math.atan2(t.y - eye.y, Math.hypot(t.x - eye.x, t.z - eye.z));
    expect(aimedInteractable(eye, lookDirection(yaw, pitch))).toBe('tablet');
  });

  it('ignores things out of reach', () => {
    const eye = { x: WALK.maxX, y: EYE_Y, z: 0 };
    expect(aimedInteractable(eye, { x: -1, y: 0, z: 0 })).not.toBe('fridge');
  });
});

describe('the queue in the park', () => {
  it('brings the front customer right up to the window, outside the truck', () => {
    const front = queuePosition(spotX(0));
    expect(front.z).toBeLessThan(-TRUCK.depth / 2);
    expect(front.x).toBeGreaterThan(LAYOUT.window.min.x);
    expect(front.x).toBeLessThan(LAYOUT.window.max.x);
  });

  it('puts people further back further away', () => {
    const d = (s: number) => {
      const p = queuePosition(spotX(s));
      return Math.hypot(p.x, p.z);
    };
    for (let s = 1; s < QUEUE.maxWaiting; s++) expect(d(s)).toBeGreaterThan(d(s - 1));
  });

  it('keeps customers' + "'" + ' heads in the window: ground is lower than the truck floor', () => {
    const headTop = GROUND_Y + 1.75;
    expect(headTop).toBeGreaterThan(LAYOUT.window.min.y);
    expect(headTop).toBeLessThan(LAYOUT.window.max.y);
  });
});

describe('the Data Lens', () => {
  it('only lists tables on a card that its object can see, with unique card ids', () => {
    expect(new Set(LENS_SPOTS.map((s) => s.id)).size).toBe(LENS_SPOTS.length);
    for (const spot of LENS_SPOTS) {
      const station = OBJECT_STATION[spot.object];
      expect(station, spot.id).not.toBeNull();
      for (const table of spot.tables) expect(STATIONS[station!].tables, `${spot.id}: ${table}`).toContain(table);
    }
  });

  it('shows every table the truck can query somewhere, apart from customers (on a customer)', () => {
    const all = new Set(Object.values(STATIONS).flatMap((s) => s.tables));
    all.delete('customers');
    expect(new Set(LENS_SPOTS.flatMap((s) => s.tables))).toEqual(all);
  });

  it('shows every table an order needs on the card of the object where it is answered', () => {
    for (const template of TEMPLATES) {
      const object = objectForStation(template.station);
      const onCards = LENS_SPOTS.filter((s) => s.object === object).flatMap((s) => s.tables);
      // The customer at the window carries the `customers` card, and the tablet opens it (TruckGame).
      if (object === 'tablet') onCards.push('customers');
      for (const v of template.variants) {
        for (const table of tablesInQuery(template.solution(v.params))) expect(onCards, `${template.id}: ${table}`).toContain(table);
      }
    }
  });

  it('keeps every card inside the truck', () => {
    for (const { box, id } of LENS_SPOTS) {
      const p = lensPoint(box);
      expect(p.y, id).toBeLessThan(TRUCK.height);
      expect(Math.abs(p.x), id).toBeLessThanOrEqual(TRUCK.length / 2);
    }
  });
});

describe('the places around the truck', () => {
  it('has things set out for every place', () => {
    for (const place of PLACES) expect(PLACE_PROPS[place.id].length, place.id).toBeGreaterThan(5);
  });

  for (const place of PLACES) {
    const pieces = PLACE_PROPS[place.id].map((p) => ({ name: `${place.id}: ${p.kind} ${p.x},${p.z}`, ...p, r: propRadius(p) }));

    it(`keeps everything off the path customers walk (${place.id})`, () => {
      for (const p of pieces) expect(distanceToQueuePath(p.x, p.z, place.id), p.name).toBeGreaterThanOrEqual(p.r + PATH_CLEARANCE);
    });

    it(`keeps the pieces apart from each other (${place.id})`, () => {
      for (const a of pieces) {
        for (const b of pieces) {
          if (a === b) continue;
          expect(Math.hypot(a.x - b.x, a.z - b.z), `${a.name} / ${b.name}`).toBeGreaterThanOrEqual(a.r + b.r);
        }
      }
    });
  }

  for (const place of PLACES) {
    it(`never walks people through the truck or its cab (${place.id})`, () => {
      // The truck with its cab and bumpers, from above, and a little room round it.
      const inside = (x: number, z: number) => x > -5.2 && x < 3.5 && z > -1.45 && z < 1.45;
      for (let u = 0; u <= QUEUE.exitX; u += 5) {
        const p = queuePosition(u, place.id);
        expect(inside(p.x, p.z), `${place.id} at ${u}: ${p.x.toFixed(2)}, ${p.z.toFixed(2)}`).toBe(false);
      }
    });

    it(`queues straight out from the window (${place.id})`, () => {
      const spots = [0, 1, 2].map((s) => queuePosition(spotX(s), place.id));
      for (const s of spots) expect(s.z).toBeLessThan(-TRUCK.depth / 2);
      expect(spots[1].z).toBeLessThan(spots[0].z);
      expect(spots[2].z).toBeLessThan(spots[1].z);
    });
  }

  it('would catch a bench standing on the path (the bug this test was written for)', () => {
    // The old park bench at (−4.5, −7) stood right on the path.
    expect(distanceToQueuePath(-4.5, -7)).toBeLessThan(PROP_RADIUS.bench + PATH_CLEARANCE);
  });
});


describe('the truck tour', () => {
  it('stands inside the truck at every stop, looking at the object shown', () => {
    for (const stop of TOUR_STOPS) {
      expect(stop.eye.x).toBeGreaterThanOrEqual(WALK.minX);
      expect(stop.eye.x).toBeLessThanOrEqual(WALK.maxX);
      expect(stop.eye.z).toBeGreaterThanOrEqual(WALK.minZ);
      expect(stop.eye.z).toBeLessThanOrEqual(WALK.maxZ);
      const { yaw, pitch } = lookAtAngles(stop.eye, stop.target);
      // Nothing else stands between the camera and the object it shows.
      const dir = lookDirection(yaw, pitch);
      const hits = INTERACTABLE_BOXES.map((b) => ({ id: b.id, t: rayBox(stop.eye, dir, b.box) }))
        .filter((h): h is { id: typeof h.id; t: number } => h.t !== null)
        .sort((a, b) => a.t - b.t);
      expect(hits[0]?.id, stop.object).toBe(stop.object);
    }
  });

  it('visits every object the player can use, once', () => {
    expect(TOUR_STOPS.map((s) => s.object).sort()).toEqual([...new Set(INTERACTABLE_BOXES.map((b) => b.id))].sort());
  });
});
