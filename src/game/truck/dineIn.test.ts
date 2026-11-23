import { describe, expect, it } from 'vitest';
import { PLACES } from '../../sql-core/truck/places';
import { alongPath, blockedWay, DineIn, DINE_IN_SHARE, reachableSeats, seatsAt, walkTo } from './dineIn';

describe('eating in', () => {
  for (const place of PLACES) {
    it(`has seats people can walk to (${place.id})`, () => {
      expect(reachableSeats(place.id).length, place.id).toBeGreaterThanOrEqual(3);
    });
  }

  it('never walks people through a table, the line or the truck', () => {
    for (const place of PLACES) {
      for (const seat of reachableSeats(place.id)) expect(blockedWay(seat, place.id)).toBeNull();
    }
  });

  it('would catch a seat behind the line (the way there crosses the queue)', () => {
    // The park's left bench is across the line from the way off (to the right).
    const left = seatsAt('park').find((s) => s.x < -4 && s.z > -4)!;
    expect(blockedWay(left, 'park')).not.toBeNull();
  });

  it('sits a customer down, keeps them a while, then sends them back to the way out', () => {
    const dine = new DineIn('park');
    const diner = dine.tryToSit('o1', 0.1)!;
    expect(diner).not.toBeNull();
    expect(diner.state).toBe('toSeat');
    // Walk all the way to the seat.
    for (let i = 0; i < 200 && diner.state === 'toSeat'; i++) dine.update(0.1, 0);
    expect(diner.state).toBe('sitting');
    // Sitting takes game time only.
    expect(dine.update(5, 0)).toEqual([]);
    dine.update(0.1, 60);
    expect(diner.state).toBe('leaving');
    let gone: unknown[] = [];
    for (let i = 0; i < 200 && gone.length === 0; i++) gone = dine.update(0.1, 0);
    expect(gone).toEqual([diner]);
    expect(dine.diners).toEqual([]);
  });

  it('takes it away when the customer chooses to, cannot sit, or every seat is taken', () => {
    const dine = new DineIn('square');
    expect(dine.tryToSit('a', DINE_IN_SHARE + 0.01)).toBeNull();
    expect(dine.tryToSit('b', 0.1, false)).toBeNull();
    const seats = reachableSeats('square').length;
    for (let i = 0; i < seats; i++) expect(dine.tryToSit(`c${i}`, 0.1)).not.toBeNull();
    expect(dine.tryToSit('late', 0.1)).toBeNull();
    // One person per seat.
    expect(new Set(dine.diners.map((d) => d.seat.id)).size).toBe(seats);
  });

  it('walks along a path and faces the way they go', () => {
    const seat = reachableSeats('harbour')[0];
    const path = walkTo(seat, 'harbour');
    expect(alongPath(path, 0)).toMatchObject({ x: path[0].x, z: path[0].z, done: false });
    expect(alongPath(path, 1000)).toMatchObject({ x: seat.x, z: seat.z, done: true });
  });
});
