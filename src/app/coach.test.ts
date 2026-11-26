import { beforeEach, describe, expect, it } from 'vitest';
import { COACH, coachStep, loadCoach, saveCoach, stepsDone, type CoachState } from './coach';
import { COACH_ID } from './locales/id/coach';

const idle: CoachState = { front: false, consoleOpen: false, lens: false, served: 0 };

describe('the first-day coach', () => {
  beforeEach(() => {
    const store = new Map<string, string>();
    (globalThis as unknown as { localStorage: Storage }).localStorage = {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => void store.set(k, v),
      removeItem: (k: string) => void store.delete(k),
    } as Storage;
  });
  it('walks through the objective, the customer, the lens and the rewards in order', () => {
    expect(coachStep(idle, [])).toBe('goal');
    expect(coachStep({ ...idle, front: true }, ['goal'])).toBe('aim');
    expect(coachStep({ ...idle, front: true, consoleOpen: true }, ['goal', 'aim'])).toBe('lens');
    expect(coachStep({ ...idle, served: 1 }, ['goal', 'aim', 'lens'])).toBe('rewards');
    expect(coachStep({ ...idle, served: 1 }, ['goal', 'aim', 'lens', 'rewards'])).toBeNull();
  });
  it('never shows the lens hint when the lens is already on, or a step twice', () => {
    expect(coachStep({ ...idle, front: true, consoleOpen: true, lens: true }, ['goal', 'aim'])).toBeNull();
    expect(coachStep(idle, ['goal'])).toBeNull();
  });
  it('marks steps done by what the player did', () => {
    expect(stepsDone(idle)).toEqual([]);
    expect(stepsDone({ ...idle, front: true })).toEqual(['goal']);
    expect(stepsDone({ ...idle, front: true, consoleOpen: true })).toEqual(['goal', 'aim']);
    expect(stepsDone({ ...idle, served: 1 })).toEqual(['goal', 'aim', 'lens']);
  });
  it('remembers the steps seen, and is off until it is started', () => {
    expect(loadCoach()).toBeNull();
    saveCoach([]);
    expect(loadCoach()).toEqual([]);
    saveCoach(['goal']);
    expect(loadCoach()).toEqual(['goal']);
    saveCoach(null);
    expect(loadCoach()).toBeNull();
  });
  it('has Indonesian text with the same shape', () => {
    expect(Object.keys(COACH_ID)).toEqual(Object.keys(COACH));
    for (const id of Object.keys(COACH) as (keyof typeof COACH)[]) {
      expect(COACH_ID[id].points?.length).toBe(COACH[id].points?.length);
      expect(COACH_ID[id].text).not.toBe(COACH[id].text);
    }
  });
});
