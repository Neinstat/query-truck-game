/**
 * The day in the sky (GAME_DESIGN.md §7): the truck's working day, 10:00–17:00, is shown as a
 * whole day from morning to night — a pale morning, a bright noon, a warm afternoon, a sunset,
 * and night with the park's lamps on. Pure logic (no Three.js), tested on its own.
 */
import { CLOSING, OPENING } from '../../sql-core/truck/day';

export type Sky = {
  /** Sky and fog colour. */
  sky: string;
  /** The sun's light colour and strength (0–1), and the ambient light's strength (0–1). */
  sunColour: string;
  sunLight: number;
  ambient: number;
  /** The sun's height over the horizon (degrees; below 0 it has set) and where it is (−1 left … 1 right). */
  elevation: number;
  across: number;
  /** The disc's colour (sun by day, moon at night). */
  disc: string;
  /** How bright the park's lamps and the truck's inside light are (0 = off, 1 = night). */
  lamps: number;
};

/** Keyframes over the working day: 0 = opening, 1 = closing. */
export const SKY_KEYS: readonly (Sky & { at: number })[] = [
  { at: 0, sky: '#cfe6ea', sunColour: '#fff1d6', sunLight: 0.38, ambient: 0.78, elevation: 22, across: -0.8, disc: '#fff3c4', lamps: 0 },
  { at: 0.35, sky: '#a8d8ec', sunColour: '#ffffff', sunLight: 0.45, ambient: 0.85, elevation: 58, across: -0.2, disc: '#fff6d8', lamps: 0 },
  { at: 0.62, sky: '#f4d9a6', sunColour: '#ffe2b0', sunLight: 0.42, ambient: 0.76, elevation: 32, across: 0.25, disc: '#ffd36b', lamps: 0 },
  { at: 0.82, sky: '#f19a78', sunColour: '#ff9f70', sunLight: 0.32, ambient: 0.6, elevation: 7, across: 0.55, disc: '#f2703f', lamps: 0.5 },
  { at: 0.92, sky: '#7b5f8f', sunColour: '#c48aa8', sunLight: 0.16, ambient: 0.45, elevation: -4, across: 0.7, disc: '#f2703f', lamps: 0.9 },
  { at: 1, sky: '#2b3354', sunColour: '#9fb0ff', sunLight: 0.12, ambient: 0.36, elevation: -10, across: 0.8, disc: '#e8ecff', lamps: 1 },
];

/** How far through the working day a clock time is (0 at opening, 1 at closing). */
export function dayFraction(minutes: number): number {
  return Math.min(1, Math.max(0, (minutes - OPENING) / (CLOSING - OPENING)));
}

const hex = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const toHex = (c: number[]) => `#${c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('')}`;
const mixHex = (a: string, b: string, t: number) => toHex(hex(a).map((v, i) => v + (hex(b)[i] - v) * t));
const mix = (a: number, b: number, t: number) => a + (b - a) * t;

/** The sky at a clock time, blended between the two nearest keyframes. */
export function skyAt(minutes: number): Sky {
  const f = dayFraction(minutes);
  let i = 0;
  while (i < SKY_KEYS.length - 2 && SKY_KEYS[i + 1].at <= f) i++;
  const a = SKY_KEYS[i];
  const b = SKY_KEYS[i + 1];
  const t = Math.min(1, Math.max(0, (f - a.at) / (b.at - a.at)));
  return {
    sky: mixHex(a.sky, b.sky, t),
    sunColour: mixHex(a.sunColour, b.sunColour, t),
    sunLight: mix(a.sunLight, b.sunLight, t),
    ambient: mix(a.ambient, b.ambient, t),
    elevation: mix(a.elevation, b.elevation, t),
    across: mix(a.across, b.across, t),
    disc: mixHex(a.disc, b.disc, t),
    lamps: mix(a.lamps, b.lamps, t),
  };
}
