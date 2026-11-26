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

/** A player level: the XP it starts at and the title (EN/ID). Decided 26 Nov 2026 (§13: what XP is for). */
export type PlayerLevel = { xp: number; en: string; id: string };

/** A normal day earns about 20–25 XP, so a level comes every few days and the last one at about week 5–6. */
export const PLAYER_LEVELS: readonly PlayerLevel[] = [
  { xp: 0, en: 'New Hire', id: 'Karyawan Baru' },
  { xp: 25, en: 'Apprentice', id: 'Magang' },
  { xp: 70, en: 'Barista', id: 'Barista' },
  { xp: 140, en: 'Senior Barista', id: 'Barista Senior' },
  { xp: 240, en: 'Data Wrangler', id: 'Penjinak Data' },
  { xp: 370, en: 'Junior Analyst', id: 'Analis Junior' },
  { xp: 530, en: 'Analyst', id: 'Analis' },
  { xp: 720, en: 'Head of Data', id: 'Kepala Data' },
];

export type LevelInfo = { level: number; title: PlayerLevel; next: PlayerLevel | null; into: number; span: number };

/** The level for a total of XP (level 1 is the first), and how far to the next one. */
export const levelFor = (xp: number): LevelInfo => {
  let i = 0;
  while (i + 1 < PLAYER_LEVELS.length && xp >= PLAYER_LEVELS[i + 1].xp) i++;
  const title = PLAYER_LEVELS[i];
  const next = PLAYER_LEVELS[i + 1] ?? null;
  return { level: i + 1, title, next, into: xp - title.xp, span: next ? next.xp - title.xp : 0 };
};
