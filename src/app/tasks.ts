/**
 * The orders list (9.4b): every customer of today with where they stand, for the list the player
 * opens with O. Pure logic, tested without a browser.
 *
 *   done  — served (with the stars it earned)
 *   now   — the customer at the window
 *   next  — still to come
 *   left  — gave up waiting (the order comes back another day)
 */
import type { DayLog } from '../sql-core/truck/day';

export type TaskStatus = 'done' | 'now' | 'next' | 'left';
export type TaskRow = { id: string; status: TaskStatus; stars: number | null };

export function taskRows(orderIds: readonly string[], day: DayLog, frontId: string | null): TaskRow[] {
  return orderIds.map((id) => {
    const served = day.served.find((s) => s.orderId === id);
    if (served) return { id, status: 'done', stars: served.stars };
    if (day.missed.includes(id)) return { id, status: 'left', stars: null };
    if (id === frontId) return { id, status: 'now', stars: null };
    return { id, status: 'next', stars: null };
  });
}

/** What the player should still look at: a customer is waiting. */
export const hasOpenTask = (rows: readonly TaskRow[]): boolean => rows.some((r) => r.status === 'now');

/** Why a finished order lost stars (3 stars is perfect). */
export function stumble(stars: number | null): 'hints' | 'mistake' | null {
  if (stars === null || stars >= 3) return null;
  return stars <= 1 ? 'hints' : 'mistake';
}
