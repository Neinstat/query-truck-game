import { describe, expect, it } from 'vitest';
import { PLACES, placeForDay } from './places';

describe('where the truck parks', () => {
  it('starts in the park on day 1', () => {
    expect(placeForDay(1).id).toBe('park');
  });

  it('is somewhere else every day, and visits every place before coming back', () => {
    const seen = new Set<string>();
    for (let day = 1; day <= PLACES.length; day++) {
      expect(placeForDay(day).id).not.toBe(placeForDay(day + 1).id);
      seen.add(placeForDay(day).id);
    }
    expect(seen.size).toBe(PLACES.length);
    expect(placeForDay(PLACES.length + 1).id).toBe('park');
  });

  it('has a name and a line about it in both languages', () => {
    expect(new Set(PLACES.map((p) => p.id)).size).toBe(PLACES.length);
    for (const p of PLACES) {
      for (const lang of ['en', 'id'] as const) {
        expect(p.name[lang].length, p.id).toBeGreaterThan(3);
        expect(p.blurb[lang].length, p.id).toBeGreaterThan(10);
      }
    }
  });
});
