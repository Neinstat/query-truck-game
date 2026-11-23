import { describe, expect, it } from 'vitest';
import { FADE, FILM_SECONDS, filmAt, SHOTS } from './cinematic';

describe('the title film', () => {
  it('plays every shot in turn and loops', () => {
    let t = 0;
    for (const s of SHOTS) {
      expect(filmAt(t + s.seconds / 2).shot).toBe(s.name);
      t += s.seconds;
    }
    expect(filmAt(FILM_SECONDS + 1).shot).toBe(SHOTS[0].name);
  });

  it('fades to dark at each cut and is clear in the middle of a shot', () => {
    expect(filmAt(0).dark).toBeCloseTo(1);
    expect(filmAt(SHOTS[0].seconds / 2).dark).toBe(0);
    expect(filmAt(SHOTS[0].seconds - FADE / 2).dark).toBeCloseTo(0.5);
  });

  it('moves smoothly from the start of a shot to its end', () => {
    const s = SHOTS[0];
    expect(filmAt(0).at).toEqual(s.from);
    const end = filmAt(s.seconds - 1e-6).at;
    expect(end.x).toBeCloseTo(s.to.x);
  });
});
