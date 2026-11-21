import { describe, expect, it } from 'vitest';
import { CLOSING, OPENING } from '../../sql-core/truck/day';
import { dayFraction, SKY_KEYS, skyAt } from './sky';

describe('the sky over the day', () => {
  it('runs from morning at opening to night at closing', () => {
    expect(dayFraction(OPENING)).toBe(0);
    expect(dayFraction(CLOSING)).toBe(1);
    expect(dayFraction(OPENING - 30)).toBe(0);
    expect(skyAt(OPENING).sky).toBe(SKY_KEYS[0].sky);
    expect(skyAt(CLOSING).sky).toBe(SKY_KEYS[SKY_KEYS.length - 1].sky);
  });

  it('has the sun high at noon, setting in the evening, and the neon always on, brightest at night', () => {
    expect(skyAt(OPENING + 150).elevation).toBeGreaterThan(skyAt(OPENING).elevation);
    expect(skyAt(CLOSING - 30).elevation).toBeLessThan(5);
    for (let m = OPENING; m <= CLOSING; m += 10) expect(skyAt(m).lamps).toBeGreaterThanOrEqual(0.6);
    expect(skyAt(CLOSING).lamps).toBe(1);
    // Night is darker than noon.
    expect(skyAt(CLOSING).ambient).toBeLessThan(skyAt(OPENING + 150).ambient);
  });

  it('blends smoothly between keyframes into valid colours', () => {
    let last = skyAt(OPENING).across;
    for (let m = OPENING; m <= CLOSING; m += 7) {
      const s = skyAt(m);
      for (const c of [s.sky, s.sunColour, s.disc]) expect(c).toMatch(/^#[0-9a-f]{6}$/);
      expect(s.across).toBeGreaterThanOrEqual(last);
      last = s.across;
    }
  });
});
