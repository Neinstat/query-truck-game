/**
 * The six-week curriculum (GAME_DESIGN.md §6). One week is five working days; every concept
 * belongs to a week (`CONCEPT_WEEK` in `concepts.ts`) and the day planner only uses concepts of
 * this week and earlier weeks. The calendar skips Saturdays and Sundays (`nextWorkday`).
 */
import type { Lang } from '../feedback';
import { WEEKS_ID } from './locales/id/weeks';

export const DAYS_PER_WEEK = 5;
export const LAST_WEEK = 6;
/**
 * The week of the first play day. Week 1 gets its own orders in iteration 6.2; until then the
 * game starts in week 2, where today's concepts live (6.2 sets this to 1).
 */
export const FIRST_WEEK = 2;

export type WeekInfo = {
  /** The week's name, e.g. "Picky Customers". */
  name: string;
  /** What the week teaches, in a short line (SQL words stay in English). */
  teaches: string;
  /** The Manager's big case at the end of the week, or null (week 1 is the tutorial). */
  managerCase: string | null;
};

export const WEEKS: Record<number, WeekInfo> = {
  1: { name: 'Opening Week', teaches: 'Reading the menu: SELECT, columns and FROM', managerCase: null },
  2: { name: 'Picky Customers', teaches: 'Picking rows: WHERE, AND / OR, IN, LIKE and IS NULL', managerCase: 'The Menu Audit' },
  3: {
    name: 'Daily Specials',
    teaches: 'Sorting and shaping: ORDER BY, LIMIT, DISTINCT, aliases and computed columns',
    managerCase: 'What Should We Promote?',
  },
  4: {
    name: 'Counting the Till',
    teaches: 'Numbers: COUNT, SUM, AVG, GROUP BY, HAVING and dates',
    managerCase: 'The Quiet Day',
  },
  5: {
    name: 'Regulars & Recipes',
    teaches: 'Connecting tables: JOIN and LEFT JOIN',
    managerCase: 'Where Did the Regulars Go?',
  },
  6: {
    name: 'The Big Question',
    teaches: 'Everything together, to answer a real business question',
    managerCase: 'October Sales Dropped',
  },
};

/** A week's text in the player's language (Indonesian falls back to English). */
export function weekInfo(week: number, lang: Lang): WeekInfo {
  const en = WEEKS[Math.min(LAST_WEEK, Math.max(1, week))];
  const id = lang === 'id' ? WEEKS_ID[Math.min(LAST_WEEK, Math.max(1, week))] : undefined;
  return { ...en, ...id };
}

/** Day 1, 2, 3… of the player's play → week and day of the week. After week 6 it is free mode. */
export function weekOfDay(dayNumber: number): { week: number; dayInWeek: number } {
  const n = Math.max(1, Math.floor(dayNumber));
  return {
    week: Math.min(LAST_WEEK, FIRST_WEEK + Math.floor((n - 1) / DAYS_PER_WEEK)),
    dayInWeek: ((n - 1) % DAYS_PER_WEEK) + 1,
  };
}

/** The first morning of a week: the week card shows. */
export const isWeekStart = (dayNumber: number): boolean => weekOfDay(dayNumber).dayInWeek === 1;

/** The next date after `date` that is not a Saturday or a Sunday. */
export function nextWorkday(date: string): string {
  let t = Date.parse(`${date}T00:00:00Z`);
  do {
    t += 86_400_000;
  } while ([0, 6].includes(new Date(t).getUTCDay()));
  return new Date(t).toISOString().slice(0, 10);
}
