import { describe, expect, it } from 'vitest';
import { newDay, serveOrder, type DayLog } from './day';
import { dayXp, totalXp } from './xp';

const order = (day: DayLog, orderId: string, stars: number): DayLog =>
  serveOrder(day, { orderId, at: 620, tip: 0, stars });

describe('XP', () => {
  it('is the stars earned at the window plus the Manager case', () => {
    let day = newDay('2026-11-02', ['a', 'b', 'c']);
    expect(dayXp(day)).toBe(0);
    day = order(day, 'a', 3);
    day = order(day, 'b', 1);
    expect(dayXp(day)).toBe(4);
    expect(dayXp({ ...day, manager: { stars: 2 } })).toBe(6);
  });

  it('adds up over days and never pays twice for the same order', () => {
    const a = order(order(newDay('2026-11-02', ['a']), 'a', 2), 'a', 3);
    expect(dayXp(a)).toBe(2);
    const b = order(newDay('2026-11-03', ['b']), 'b', 3);
    expect(totalXp([a, b])).toBe(5);
    expect(totalXp([])).toBe(0);
  });
});

import { PLAYER_LEVELS, levelFor } from './xp';

describe('player levels', () => {
  it('start at level 1 and rise with XP', () => {
    expect(levelFor(0).level).toBe(1);
    expect(levelFor(24).level).toBe(1);
    expect(levelFor(25).level).toBe(2);
    expect(levelFor(25).into).toBe(0);
    expect(levelFor(10_000).level).toBe(PLAYER_LEVELS.length);
    expect(levelFor(10_000).next).toBeNull();
  });
  it('have rising thresholds and both languages', () => {
    PLAYER_LEVELS.forEach((l, i) => {
      if (i > 0) expect(l.xp).toBeGreaterThan(PLAYER_LEVELS[i - 1].xp);
      expect(l.en && l.id).toBeTruthy();
    });
  });
});
