/**
 * The title screen's film (GAME_DESIGN.md §11): a loop of slow camera shots round the world —
 * the truck, its awning and name board, inside at the counter, the place from high up, the cab,
 * the roof and the seats — each a gentle move from one spot to another, with a short fade to
 * dark between shots. Pure logic (no Three.js), tested on its own.
 *
 * Every shot keeps its subject a little right of the middle: the title card sits on the left.
 */
type V = { x: number; y: number; z: number };

export type Shot = {
  name: string;
  /** Where the camera starts and ends, and what it looks at (start and end). */
  from: V;
  to: V;
  lookFrom: V;
  lookTo: V;
  seconds: number;
};

const v = (x: number, y: number, z: number): V => ({ x, y, z });

export const SHOTS: readonly Shot[] = [
  // The whole truck from the front, sliding along.
  { name: 'truck', from: v(-2.5, 1.6, -9), to: v(2.5, 1.9, -8.4), lookFrom: v(-0.8, 1.5, 0), lookTo: v(0.3, 1.5, 0), seconds: 7 },
  // Close on the awning, the bunting and the name board.
  { name: 'awning', from: v(2.9, 2.6, -3.5), to: v(1.7, 2.75, -3.2), lookFrom: v(-0.6, 2.2, -1.4), lookTo: v(-0.9, 2.4, -1.4), seconds: 6 },
  // Inside: past the till and the tablet towards the coffee machine and the radio.
  { name: 'inside', from: v(1.9, 1.55, -0.55), to: v(0.9, 1.5, -0.6), lookFrom: v(-0.9, 1.25, 1.0), lookTo: v(-1.2, 1.25, 1.0), seconds: 6 },
  // The place from high up, the truck small in the middle of it.
  { name: 'place', from: v(-7, 9, -15), to: v(5, 10.5, -17), lookFrom: v(0, 0, -4), lookTo: v(0, 0, -3), seconds: 8 },
  // Low by the cab and the front wheel.
  { name: 'cab', from: v(-8.6, 0.45, -2.4), to: v(-7.6, 0.55, -1.4), lookFrom: v(-4, 1.1, -0.4), lookTo: v(-3.6, 1.1, 0), seconds: 6 },
  // Over the roof: the giant cup, the steam and the flower box.
  { name: 'roof', from: v(3.6, 4.3, -3.6), to: v(0.6, 4.0, -3.8), lookFrom: v(-0.6, 3.0, 0), lookTo: v(-1.6, 3.0, 0), seconds: 6 },
  // The back door opens on The Manager, waiting on the step in a suit.
  { name: 'manager', from: v(0.5, 1.55, -0.45), to: v(1.5, 1.6, -0.3), lookFrom: v(3.4, 1.5, 0.05), lookTo: v(3.4, 1.5, 0.05), seconds: 6 },
  // Out by the seats where customers eat in, looking back at the truck.
  { name: 'seats', from: v(6, 3.6, -11), to: v(4, 3.3, -10.5), lookFrom: v(0.5, 0.8, -4.5), lookTo: v(0, 0.9, -4), seconds: 7 },
];

/** Where a named shot starts in the film (s), and how long it lasts; null for an unknown name. */
export function shotSpan(name: string): { start: number; seconds: number } | null {
  let start = 0;
  for (const s of SHOTS) {
    if (s.name === name) return { start, seconds: s.seconds };
    start += s.seconds;
  }
  return null;
}

export const FILM_SECONDS = SHOTS.reduce((sum, s) => sum + s.seconds, 0);
/** How long the fade to dark and back takes at each cut (s, each way). */
export const FADE = 0.6;

const ease = (t: number) => t * t * (3 - 2 * t);
const mix = (a: V, b: V, t: number): V => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, z: a.z + (b.z - a.z) * t });

/** The camera at a moment of the film: where it is, what it looks at, and how dark (0..1). */
export function filmAt(seconds: number): { shot: string; at: V; look: V; dark: number } {
  let t = ((seconds % FILM_SECONDS) + FILM_SECONDS) % FILM_SECONDS;
  for (const s of SHOTS) {
    if (t < s.seconds) {
      const k = ease(t / s.seconds);
      const edge = Math.min(t, s.seconds - t);
      return { shot: s.name, at: mix(s.from, s.to, k), look: mix(s.lookFrom, s.lookTo, k), dark: edge < FADE ? 1 - edge / FADE : 0 };
    }
    t -= s.seconds;
  }
  const last = SHOTS[SHOTS.length - 1];
  return { shot: last.name, at: last.to, look: last.lookTo, dark: 1 };
}
