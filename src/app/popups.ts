/**
 * Serving feel (9.4): the floating note after each customer (what they paid, and a level-up), and
 * the alert when a customer is about to leave. Pure helpers so they can be tested.
 */
import type { ServedOrder } from '../sql-core/truck/day';
import { coinsForOrder } from '../sql-core/truck/shop';
import { levelFor } from '../sql-core/truck/xp';

export type RewardNote = { coins: number; xp: number; levelUp: number | null };

/** The note for one served order; `xpAfter` is the player's total XP once it is counted. */
export function rewardNote(s: Pick<ServedOrder, 'stars' | 'tip'>, xpAfter: number): RewardNote {
  const before = levelFor(xpAfter - s.stars).level;
  const after = levelFor(xpAfter).level;
  return { coins: coinsForOrder(s.stars, s.tip), xp: s.stars, levelUp: after > before ? after : null };
}

/** An alert should sound once, when the mood turns to annoyed (not on every update). */
export const angerStarts = (before: string | null, now: string | null): boolean => now === 'annoyed' && before !== 'annoyed';
