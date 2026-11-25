import { describe, expect, it } from 'vitest';
import { ANALYSIS_DAY, BADGES, earnedBadges, newBadges, streak } from './badges';
import { newDay, serveOrder, type DayLog } from './day';
import { EGGS } from './eggs';
import { newShop } from './shop';

const shop = newShop();
const day = (date: string, stars: number[], manager = false): DayLog => {
  let d = newDay(date, stars.map((_, i) => `price-under:${i}`));
  stars.forEach((s, i) => (d = serveOrder(d, { orderId: `price-under:${i}`, at: 620 + i, tip: 0, stars: s })));
  return manager ? { ...d, manager: { stars: 2 } } : d;
};
const days = (n: number, stars = [1]): DayLog[] => Array.from({ length: n }, (_, i) => day(`2026-11-${String(i + 1).padStart(2, '0')}`, stars));
const earned = (past: DayLog[], eggs = [] as never[]) => earnedBadges({ past, shop, eggs });

describe('badges', () => {
  it('have unique ids and every one can be earned', () => {
    expect(new Set(BADGES.map((b) => b.id)).size).toBe(BADGES.length);
    for (const b of BADGES) expect(b.name.id && b.name.en && b.how.id && b.how.en).toBeTruthy();
    const all = Array.from({ length: 31 }, (_, i) => day(`2026-12-${i + 1}`, [3, 3, 3], true));
    const withModern = { ...shop, owned: [...shop.owned, 'machine-modern'] };
    const eggs = EGGS.map((e) => e.id);
    const got = earnedBadges({ past: all, shop: withModern, eggs });
    expect(got).toContain('modern-machine');
    expect(got).toContain('egg-hunter');
    expect(got).toContain('analysis-case');
    expect(got).toContain('free-mode');
    expect(got).toContain('manager-fan');
    expect(got).toContain('streak-5');
    expect(got).toContain('perfect-day');
  });

  it('starts with nothing and gives the first badges for a first order', () => {
    expect(earned([])).toEqual([]);
    expect(earned([day('2026-11-01', [1])])).toEqual(['first-order']);
    expect(earned([day('2026-11-01', [3])])).toContain('three-stars');
  });

  it('needs the Analysis Case answered on its own day', () => {
    const past = days(ANALYSIS_DAY);
    expect(earned(past)).not.toContain('analysis-case');
    past[ANALYSIS_DAY - 1] = day('2026-12-01', [2], true);
    expect(earned(past)).toContain('analysis-case');
  });

  it('counts a streak in served days and never loses a badge once earned', () => {
    expect(streak(days(3))).toBe(3);
    const broken = [...days(5), { ...newDay('2026-11-20', ['x']) }, ...days(1)];
    expect(streak(broken)).toBe(1);
    expect(earned(broken)).toContain('streak-5');
  });

  it('lists only the badges a day just brought', () => {
    const past = days(2);
    expect(newBadges(past, day('2026-11-03', [3]), shop, [])).toEqual(['three-stars']);
    expect(newBadges([], day('2026-11-03', [1]), shop, [])).toEqual(['first-order']);
  });
});
