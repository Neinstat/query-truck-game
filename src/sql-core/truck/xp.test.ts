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
