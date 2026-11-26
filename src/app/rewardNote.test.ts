import { describe, expect, it } from 'vitest';
import { rewardNote } from './rewardNote';

describe('the reward note', () => {
  it('shows what one customer paid', () => {
    expect(rewardNote({ xp: 10, coins: 40 }, { xp: 13, coins: 70 })).toEqual({ xp: 3, coins: 30, level: null });
  });
  it('says so when a new level is reached', () => {
    expect(rewardNote({ xp: 23, coins: 0 }, { xp: 26, coins: 5 })?.level).toBe(2);
  });
  it('stays quiet when nothing was earned or the numbers dropped (restart, shop)', () => {
    expect(rewardNote({ xp: 5, coins: 5 }, { xp: 5, coins: 5 })).toBeNull();
    expect(rewardNote({ xp: 5, coins: 50 }, { xp: 5, coins: 20 })).toBeNull();
  });
  it('shows only the part that went up', () => {
    expect(rewardNote({ xp: 5, coins: 50 }, { xp: 8, coins: 20 })).toEqual({ xp: 3, coins: 0, level: null });
  });
});
