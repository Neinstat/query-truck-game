import { describe, expect, it } from 'vitest';
import { COACH, coachDone, coachFor } from './coach';
import { COACH_ID } from './locales/id/coach';

describe('the first-day coach', () => {
  it('is translated step by step with the same shape', () => {
    expect(COACH_ID.map((s) => [s.id, s.wait])).toEqual(COACH.map((s) => [s.id, s.wait]));
    expect(coachFor('id')).toBe(COACH_ID);
    expect(coachFor('en')).toBe(COACH);
  });
  it('has no "--" dashes in its text', () => {
    for (const s of [...COACH, ...COACH_ID]) expect(s.text + s.title).not.toContain('--');
  });
  it('advances only when what it waits for has happened', () => {
    const none = { customer: false, aimedAtAnswer: false, consoleOpen: false, lens: false };
    expect(coachDone('button', { ...none, customer: true, lens: true })).toBe(false);
    expect(coachDone('customer', none)).toBe(false);
    expect(coachDone('customer', { ...none, customer: true })).toBe(true);
    expect(coachDone('aim', { ...none, aimedAtAnswer: true })).toBe(true);
    expect(coachDone('aim', { ...none, consoleOpen: true })).toBe(true);
    expect(coachDone('console', { ...none, aimedAtAnswer: true })).toBe(false);
    expect(coachDone('lens', { ...none, lens: true })).toBe(true);
  });
});
