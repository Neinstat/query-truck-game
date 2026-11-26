/**
 * The little note that floats up after a customer paid (9.4): "+3 XP · +30 🪙", and a level-up
 * line when a new level was reached. Pure logic, tested without a browser.
 */
import { levelFor } from '../sql-core/truck/xp';

export type RewardNote = { xp: number; coins: number; level: number | null };

/** What changed between two readings of XP and coins; null when nothing was earned (a drop is a restart or a purchase, not a reward). */
export function rewardNote(prev: { xp: number; coins: number }, now: { xp: number; coins: number }): RewardNote | null {
  const xp = Math.max(0, now.xp - prev.xp);
  const coins = Math.max(0, now.coins - prev.coins);
  if (xp === 0 && coins === 0) return null;
  const was = levelFor(prev.xp).level;
  const is = levelFor(now.xp).level;
  return { xp, coins, level: is > was ? is : null };
}
