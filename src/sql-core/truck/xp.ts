/**
 * XP (GAME_DESIGN.md §10, 7.1): one point for every star earned at the window and on the
 * Manager's cases. Worked out from the day logs, like mastery, so it never needs a save of its
 * own and a day never pays twice. Practice runs are not in `past`, so they pay nothing.
 */
import type { DayLog } from './day';

/** The XP one day's log is worth. */
export const dayXp = (log: DayLog): number =>
  log.served.reduce((sum, s) => sum + s.stars, 0) + (log.manager?.stars ?? 0);

/** All the XP in a list of days. */
export const totalXp = (logs: readonly DayLog[]): number => logs.reduce((sum, log) => sum + dayXp(log), 0);
