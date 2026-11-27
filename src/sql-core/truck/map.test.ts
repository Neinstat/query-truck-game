import { describe, expect, it } from 'vitest';
import { BUSY_LABEL, isUnlocked, needsMap, PLACE_RULES, placePay, unlockedPlaces } from './map';
import { PLACES } from './places';
import { dayCoins } from './shop';
import { newDay, OPENING, parseDayLog } from './day';
import { nextDay } from './repetition';

describe('the map', () => {
  it('has a rule for every place, with the park open from day 1 and every place open eventually', () => {
    for (const p of PLACES) {
      expect(PLACE_RULES[p.id], p.id).toBeDefined();
      expect(BUSY_LABEL[PLACE_RULES[p.id].busy].id.length).toBeGreaterThan(2);
    }
    expect(unlockedPlaces(1).map((p) => p.id)).toEqual(['park']);
    expect(unlockedPlaces(30)).toHaveLength(PLACES.length);
  });

  it('opens places over time, and busier places pay more', () => {
    expect(isUnlocked('square', 2)).toBe(false);
    expect(isUnlocked('skatepark', 2)).toBe(true);
    const pays = PLACES.map((p) => PLACE_RULES[p.id].pay);
    expect([...pays].sort((a, b) => a - b)).toEqual(pays);
    expect(placePay(undefined)).toBe(1);
  });

  it('asks only on a fresh morning from day 2, once', () => {
    const fresh = newDay('2026-11-02', ['x']);
    expect(needsMap(1, fresh, OPENING)).toBe(false);
    expect(needsMap(2, fresh, OPENING)).toBe(true);
    expect(needsMap(2, { ...fresh, place: 'park' }, OPENING)).toBe(false);
    expect(needsMap(2, { ...fresh, clock: OPENING + 60 }, OPENING)).toBe(false);
  });

  it('keeps the place on the day log, and pays more coins at a busier place', () => {
    const day = nextDay([]);
    const served = { orderId: day.orders[0], at: 650, tip: 1, stars: 3 };
    const base = { ...day, served: [served] };
    expect(parseDayLog(JSON.stringify({ ...base, place: 'harbour' }))?.place).toBe('harbour');
    expect(parseDayLog(JSON.stringify({ ...base, place: 'moon' }))?.place).toBeUndefined();
    expect(dayCoins({ ...base, place: 'square' })).toBeGreaterThan(dayCoins({ ...base, place: 'park' }));
    expect(dayCoins(base)).toBe(dayCoins({ ...base, place: 'park' }));
  });
});
