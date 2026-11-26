/**
 * The first-day coach (9.3): short, non-blocking hints for a new player after the truck tour —
 * the main objective, the first customer, "aim at the fridge", the Data Lens — and, after the
 * first served customer, what XP, coins, levels, the shop and the days are for. English here;
 * Indonesian in locales/id/coach.ts (same shape, tested).
 */
import type { Lang } from '../sql-core/feedback';
import { COACH_ID } from './locales/id/coach';

export type CoachStepId = 'goal' | 'aim' | 'lens' | 'rewards';

export type CoachText = { icon: string; title: string; text: string; points?: string[] };

export const COACH: Record<CoachStepId, CoachText> = {
  goal: {
    icon: '🎯',
    title: 'Your goal',
    text: 'Serve the customers who queue at the window. Each one asks a question about the menu, the stock or the recipes: find the answer with SQL, and the answer is their order. Wait for the first customer to step up.',
  },
  aim: {
    icon: '👉',
    title: 'Your first customer',
    text: 'Read the order in the speech bubble. It says where to answer. Walk there, point the dot in the middle of the screen at it (a name appears) and press E.',
  },
  lens: {
    icon: '🔍',
    title: 'Not sure which table?',
    text: 'Press L to turn on the Data Lens: every object shows its tables and a few rows, and the tables this order needs are starred ★. Press L again to go back.',
  },
  rewards: {
    icon: '⭐',
    title: 'Well done, first order served!',
    text: 'Every customer pays you in two ways, and both are yours to spend:',
    points: [
      '⭐ XP raises your level and career title (New Hire → Barista → Analyst → Head of Data).',
      '🪙 Coins buy upgrades for the truck: aim at the phone on the back counter and press E.',
      '📅 Each day brings new customers and a new spot in the city. The calendar on the wall shows every day so far.',
    ],
  },
};

export const coachFor = (lang: Lang): Record<CoachStepId, CoachText> => (lang === 'id' ? COACH_ID : COACH);

/** What the game is doing right now, as far as the coach cares. */
export type CoachState = { front: boolean; consoleOpen: boolean; lens: boolean; served: number };

/** The hint to show now, given the steps already seen (null: nothing to say). */
export function coachStep(state: CoachState, seen: readonly CoachStepId[]): CoachStepId | null {
  const has = (id: CoachStepId) => seen.includes(id);
  if (!has('goal') && !state.front && state.served === 0) return 'goal';
  if (!has('aim') && state.front && !state.consoleOpen) return 'aim';
  if (!has('lens') && state.consoleOpen && !state.lens) return 'lens';
  if (!has('rewards') && state.served > 0 && !state.consoleOpen) return 'rewards';
  return null;
}

/** Steps that are finished by what the player does, not by a button. */
export function stepsDone(state: CoachState): CoachStepId[] {
  const done: CoachStepId[] = [];
  if (state.front || state.served > 0) done.push('goal');
  if (state.consoleOpen || state.served > 0) done.push('aim');
  if (state.lens || state.served > 0) done.push('lens');
  return done;
}

const KEY = 'query-truck.coach';

/** null: the coach is off (never started, or finished); otherwise the steps seen so far. */
export function loadCoach(): CoachStepId[] | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw === null) return null;
    const list = JSON.parse(raw) as unknown;
    return Array.isArray(list) ? (list.filter((s) => s in COACH) as CoachStepId[]) : null;
  } catch {
    return null;
  }
}

export function saveCoach(seen: readonly CoachStepId[] | null): void {
  try {
    if (seen === null) localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, JSON.stringify(seen));
  } catch {
    // Without storage the coach just does not come back after a reload.
  }
}
