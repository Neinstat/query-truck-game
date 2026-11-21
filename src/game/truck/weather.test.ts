import { describe, expect, it } from 'vitest';
import { CLOSING, OPENING } from '../../sql-core/truck/day';
import { hashString, planShowers, rainAt } from './weather';

describe('the weather', () => {
  it('is the same for the same day, and differs between days', () => {
    expect(planShowers(42)).toEqual(planShowers(42));
    const plans = new Set(Array.from({ length: 20 }, (_, i) => JSON.stringify(planShowers(hashString(`day-${i}`)))));
    expect(plans.size).toBeGreaterThan(5);
  });

  it('rains on most days but not all', () => {
    const days = Array.from({ length: 200 }, (_, i) => planShowers(hashString(`day-${i}`)));
    const wet = days.filter((d) => d.length > 0).length;
    expect(wet).toBeGreaterThan(100);
    expect(wet).toBeLessThan(190);
  });

  it('keeps showers inside the working day, one after another', () => {
    for (let i = 0; i < 100; i++) {
      const showers = planShowers(hashString(`day-${i}`));
      for (const s of showers) {
        expect(s.start).toBeGreaterThanOrEqual(OPENING);
        expect(s.end).toBeGreaterThan(s.start);
        expect(s.strength).toBeGreaterThan(0);
        expect(s.strength).toBeLessThanOrEqual(1);
      }
      for (let k = 1; k < showers.length; k++) expect(showers[k].start).toBeGreaterThan(showers[k - 1].end);
    }
  });

  it('starts and stops softly', () => {
    const showers = [{ start: 700, end: 760, strength: 1 }];
    expect(rainAt(showers, 690)).toBe(0);
    expect(rainAt(showers, 700)).toBe(0);
    expect(rainAt(showers, 706)).toBeCloseTo(0.5);
    expect(rainAt(showers, 730)).toBe(1);
    expect(rainAt(showers, 760)).toBe(0);
  });

  it('always rains early when asked to (?rain)', () => {
    const showers = planShowers(7, true);
    expect(showers.length).toBeGreaterThan(0);
    expect(rainAt(showers, OPENING + 30)).toBeGreaterThan(0);
    expect(rainAt(showers, CLOSING + 60)).toBe(0);
  });
});
