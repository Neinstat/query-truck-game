import { describe, expect, it } from 'vitest';
import { angerStarts, rewardNote } from './popups';

describe('reward notes', () => {
  it('shows coins and XP for one order', () => {
    expect(rewardNote({ stars: 2, tip: 0.5 }, 10)).toEqual({ coins: 25, xp: 2, levelUp: null });
  });
  it('announces a level up only when the order crosses a level', () => {
    expect(rewardNote({ stars: 3, tip: 1 }, 26).levelUp).toBe(2);
    expect(rewardNote({ stars: 3, tip: 1 }, 30).levelUp).toBeNull();
  });
  it('alerts once when a customer turns annoyed', () => {
    expect(angerStarts('okay', 'annoyed')).toBe(true);
    expect(angerStarts('annoyed', 'annoyed')).toBe(false);
    expect(angerStarts('okay', 'okay')).toBe(false);
    expect(angerStarts(null, null)).toBe(false);
  });
});
