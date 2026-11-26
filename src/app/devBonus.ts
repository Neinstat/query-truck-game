/**
 * Developer-only gifts (7.5): extra XP and coins added from the developer panel so shop purchases,
 * levels and badges can be tested without playing for days. Saved apart from the day logs, so they
 * never touch the real rules; "Reset all progress" removes them with everything else.
 */
const KEY = 'query-truck.dev-bonus';

export type DevBonus = { xp: number; coins: number };

export function loadBonus(): DevBonus {
  try {
    const data = JSON.parse(localStorage.getItem(KEY) ?? '{}') as Partial<DevBonus>;
    const num = (v: unknown) => (typeof v === 'number' && Number.isFinite(v) && v > 0 ? Math.floor(v) : 0);
    return { xp: num(data.xp), coins: num(data.coins) };
  } catch {
    return { xp: 0, coins: 0 };
  }
}

export function saveBonus(b: DevBonus): void {
  try {
    if (b.xp || b.coins) localStorage.setItem(KEY, JSON.stringify(b));
    else localStorage.removeItem(KEY);
  } catch {
    // Private windows may refuse storage: the gift is just not kept.
  }
}
