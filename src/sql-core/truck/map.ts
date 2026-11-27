/**
 * The map (GAME_DESIGN.md §4, 9.6): every morning, from day 2, the player chooses where the truck
 * parks. Places open over time, and a busier place pays more coins. The choice is kept on the
 * day's log (`DayLog.place`); a day with no choice falls back to the fixed rotation in `places.ts`.
 * Pure data and rules, tested without a browser.
 */
import type { Lang } from '../feedback';
import { PLACES, type Place, type PlaceId } from './places';

export type PlaceRule = {
  /** The first day this place can be chosen. */
  unlockDay: number;
  /** How many coins an order pays here, compared with the park (1 = the same). */
  pay: number;
  /** How busy the place is, in words, for the map. */
  busy: 'quiet' | 'steady' | 'busy' | 'packed';
};

export const PLACE_RULES: Record<PlaceId, PlaceRule> = {
  park: { unlockDay: 1, pay: 1, busy: 'quiet' },
  skatepark: { unlockDay: 2, pay: 1.1, busy: 'steady' },
  school: { unlockDay: 4, pay: 1.2, busy: 'steady' },
  harbour: { unlockDay: 6, pay: 1.3, busy: 'busy' },
  square: { unlockDay: 8, pay: 1.5, busy: 'packed' },
};

export const BUSY_LABEL: Record<PlaceRule['busy'], Record<Lang, string>> = {
  quiet: { en: 'Quiet', id: 'Sepi' },
  steady: { en: 'Steady', id: 'Lumayan ramai' },
  busy: { en: 'Busy', id: 'Ramai' },
  packed: { en: 'Packed', id: 'Penuh sesak' },
};

export const isUnlocked = (id: PlaceId, dayNumber: number): boolean => PLACE_RULES[id].unlockDay <= dayNumber;

export const unlockedPlaces = (dayNumber: number): Place[] => PLACES.filter((p) => isUnlocked(p.id, dayNumber));

/** The coin multiplier of a place (1 when the day has none). */
export const placePay = (id: PlaceId | undefined): number => (id ? PLACE_RULES[id].pay : 1);

/** "+20%" for the map. */
export const payLabel = (id: PlaceId): string => {
  const extra = Math.round((PLACE_RULES[id].pay - 1) * 100);
  return extra > 0 ? `+${extra}%` : '+0%';
};

export const isPlaceId = (v: unknown): v is PlaceId => typeof v === 'string' && PLACES.some((p) => p.id === v);

/**
 * The map opens on a fresh morning of day 2 or later (day 1 is always the park, so a new player
 * is not asked yet), and only while no place has been chosen.
 */
export function needsMap(dayNumber: number, day: { place?: PlaceId; clock: number; served: unknown[]; missed: unknown[] }, opening: number): boolean {
  return dayNumber >= 2 && day.place === undefined && day.clock <= opening && day.served.length === 0 && day.missed.length === 0;
}
