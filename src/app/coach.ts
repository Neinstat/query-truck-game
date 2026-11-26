/**
 * The first-day coach (9.3): after the required guide and tour, a small card walks a new player
 * through their first customer — the goal, the customer, "aim at the fridge", the console, the Data
 * Lens — and then says what XP, coins, levels, the shop and the days are for. It never blocks play.
 * English here; Indonesian in locales/id/coach.ts (same shape, tested).
 */
import type { Lang } from '../sql-core/feedback';
import { COACH_ID } from './locales/id/coach';

/** What moves the coach on: the player's button, or something they do in the truck. */
export type CoachWait = 'button' | 'customer' | 'aim' | 'console' | 'lens';
export type CoachStep = { id: string; icon: string; title: string; text: string; wait: CoachWait };

export const COACH: readonly CoachStep[] = [
  { id: 'goal', icon: '🎯', title: 'Your goal', text: 'Serve every customer today. Each one asks a question; the answer is their order, and you find it with SQL.', wait: 'button' },
  { id: 'customer', icon: '🧑', title: 'The first customer', text: 'Wait at the serving window. A customer walks up and a speech bubble shows what they want.', wait: 'customer' },
  { id: 'aim', icon: '👀', title: 'Aim at the right place', text: 'The bubble says where to answer, for example "at the fridge". Walk there, point the dot at it and press E.', wait: 'aim' },
  { id: 'console', icon: '⌨️', title: 'Open it', text: 'Press E (or click) to open the console and write the query. The clock stops while you type, so take your time.', wait: 'console' },
  { id: 'lens', icon: '🔍', title: 'Not sure what is in a table?', text: 'Press L for the Data Lens: every object shows the tables it holds and a few rows. Press L again to close it.', wait: 'lens' },
  { id: 'rewards', icon: '⭐', title: 'What you earn', text: 'Right answers give XP (your level goes up) and coins. Spend coins at the desk phone in the truck shop, check past days on the wall calendar and badges on the pinboard. A new place every day, so the work stays fresh.', wait: 'button' },
];

export function coachFor(lang: Lang): readonly CoachStep[] {
  return lang === 'id' ? COACH_ID : COACH;
}

/** What the player has done so far, as the truck reports it. */
export type CoachFacts = { customer: boolean; aimedAtAnswer: boolean; consoleOpen: boolean; lens: boolean };

/** Whether the thing this step waits for has happened (a button step never advances by itself). */
export function coachDone(wait: CoachWait, f: CoachFacts): boolean {
  switch (wait) {
    case 'customer':
      return f.customer;
    case 'aim':
      return f.aimedAtAnswer || f.consoleOpen;
    case 'console':
      return f.consoleOpen;
    case 'lens':
      return f.lens;
    default:
      return false;
  }
}

const KEY = 'query-truck.coach';

/** The step the coach is at (a number), or 'done'/null for a player who does not need it. */
export function loadCoach(): number | null {
  try {
    const v = localStorage.getItem(KEY);
    if (v === null || v === 'done') return null;
    const n = Number(v);
    return Number.isInteger(n) && n >= 0 && n < COACH.length ? n : null;
  } catch {
    return null;
  }
}

export function saveCoach(step: number | 'done' | 'start'): void {
  try {
    localStorage.setItem(KEY, step === 'start' ? '0' : String(step));
  } catch {
    // Without storage the coach just does not come back after a reload.
  }
}
