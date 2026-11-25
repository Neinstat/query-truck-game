import { describe, expect, it } from 'vitest';
import { clampLook, LOOK_MAX, LOOK_MIN } from './lookSettings';

describe('mouse speed setting', () => {
  it('stays inside its range and falls back to normal speed for nonsense', () => {
    expect(clampLook(1.3)).toBe(1.3);
    expect(clampLook(0)).toBe(LOOK_MIN);
    expect(clampLook(99)).toBe(LOOK_MAX);
    expect(clampLook(Number.NaN)).toBe(1);
  });
});
