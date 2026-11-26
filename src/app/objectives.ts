/**
 * The objectives list (9.4): today's customers as tasks — new (still to come), ongoing (at the
 * window now), done (with the stars) and failed (they left; why). Pure, so it is tested.
 */
import type { DayLog } from '../sql-core/truck/day';

export type ObjectiveState = 'new' | 'ongoing' | 'done' | 'failed';
export type Objective = { orderId: string; state: ObjectiveState; stars?: number };

export function objectives(day: Pick<DayLog, 'orders' | 'served' | 'missed'>, frontId: string | null): Objective[] {
  return day.orders.map((orderId) => {
    const served = day.served.find((s) => s.orderId === orderId);
    if (served) return { orderId, state: 'done', stars: served.stars };
    if (day.missed.includes(orderId)) return { orderId, state: 'failed' };
    if (orderId === frontId) return { orderId, state: 'ongoing' };
    return { orderId, state: 'new' };
  });
}

/** What one served customer paid, and whether it raised the player's level (the pop-up after each customer). */
export type ServedReward = { xp: number; coins: number; levelUp: boolean };

export function servedReward(
  served: { stars: number; tip: number },
  xpAfter: number,
  levelOf: (xp: number) => number,
  coinsForOrder: (stars: number, tip: number) => number,
): ServedReward {
  return { xp: served.stars, coins: coinsForOrder(served.stars, served.tip), levelUp: levelOf(xpAfter) > levelOf(xpAfter - served.stars) };
}
