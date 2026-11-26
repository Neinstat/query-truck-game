import { beforeEach, describe, expect, it } from 'vitest';
import { onboardingPending, setOnboardingPending, startAction } from './onboarding';

describe('the first start', () => {
  beforeEach(() => {
    const store = new Map<string, string>();
    (globalThis as unknown as { localStorage: Storage }).localStorage = {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => void store.set(k, v),
      removeItem: (k: string) => void store.delete(k),
    } as Storage;
  });
  it('remembers that the guide and the tour are still to do', () => {
    expect(onboardingPending()).toBe(false);
    setOnboardingPending(true);
    expect(onboardingPending()).toBe(true);
    setOnboardingPending(false);
    expect(onboardingPending()).toBe(false);
  });
  it('sends a new player through the story, a half-done start back to the guide, and everyone else into the day', () => {
    expect(startAction(false, false)).toBe('story');
    expect(startAction(true, true)).toBe('guide');
    expect(startAction(true, false)).toBe('play');
  });
});
