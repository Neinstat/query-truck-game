/**
 * The weather (GAME_DESIGN.md §7): on some days it rains over the neon city. Each day gets its
 * own showers, worked out from a seed (the day's orders), so a reload brings the same weather at
 * the same time. Pure logic (no Three.js), tested on its own.
 */
import { CLOSING, OPENING } from '../../sql-core/truck/day';

/** A shower: when it starts and ends (minutes since midnight) and how hard it rains (0–1). */
export type Shower = { start: number; end: number; strength: number };

/** Game minutes a shower takes to build up and to die away. */
export const RAIN_FADE = 12;
/** About this many days out of ten have rain. */
const RAINY_DAYS = 0.7;

/** A small deterministic random generator (mulberry32). */
export function seededRandom(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** A number from a string (FNV-1a), for seeding. */
export function hashString(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * The day's showers. Most days get one or two, 40–110 game minutes long, some light, some heavy;
 * the rest stay dry. `always` makes sure it rains (a long, heavy shower from opening time; for testing
 * with `?rain` in the address).
 */
export function planShowers(seed: number, always = false): Shower[] {
  const random = seededRandom(seed);
  if (!always && random() > RAINY_DAYS) return [];
  const showers: Shower[] = [];
  const count = always ? 2 : 1 + Math.floor(random() * 2);
  let from = OPENING + 15;
  for (let i = 0; i < count && from < CLOSING - 40; i++) {
    // With `always`, the first shower is already falling at opening time.
    const start = i === 0 && always ? OPENING - RAIN_FADE : from + Math.floor(random() * 120);
    const length = (i === 0 && always ? 90 : 40) + Math.floor(random() * 70);
    const end = Math.min(CLOSING + RAIN_FADE, start + length);
    showers.push({ start, end, strength: i === 0 && always ? 0.95 : 0.45 + random() * 0.55 });
    from = end + 30;
  }
  return showers;
}

/** How hard it rains at a clock time (0 = dry, 1 = a downpour), with soft starts and ends. */
export function rainAt(showers: readonly Shower[], minutes: number): number {
  let rain = 0;
  for (const s of showers) {
    const up = Math.min(1, Math.max(0, (minutes - s.start) / RAIN_FADE));
    const down = Math.min(1, Math.max(0, (s.end - minutes) / RAIN_FADE));
    rain = Math.max(rain, Math.min(up, down) * s.strength);
  }
  return rain;
}
