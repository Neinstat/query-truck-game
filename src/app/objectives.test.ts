import { describe, expect, it } from 'vitest';
import { coinsForOrder } from '../sql-core/truck/shop';
import { levelFor } from '../sql-core/truck/xp';
import { objectives, servedReward } from './objectives';

describe('the objectives list', () => {
  const day = {
    orders: ['a', 'b', 'c', 'd'],
    served: [{ orderId: 'a', at: 600, tip: 0.2, stars: 3 }],
    missed: ['b'],
  };
  it('marks each customer new, ongoing, done or failed', () => {
    expect(objectives(day, 'c')).toEqual([
      { orderId: 'a', state: 'done', stars: 3 },
      { orderId: 'b', state: 'failed' },
      { orderId: 'c', state: 'ongoing' },
      { orderId: 'd', state: 'new' },
    ]);
  });
  it('has no ongoing customer while the window is empty', () => {
    expect(objectives(day, null).some((o) => o.state === 'ongoing')).toBe(false);
  });
});

describe('the reward pop-up', () => {
  const level = (xp: number) => levelFor(xp).level;
  it('says what a customer paid', () => {
    expect(servedReward({ stars: 3, tip: 0.2 }, 10, level, coinsForOrder)).toEqual({ xp: 3, coins: coinsForOrder(3, 0.2), levelUp: false });
  });
  it('says when the XP crosses a level', () => {
    const next = [...Array(60).keys()].find((xp) => levelFor(xp).level === 2)!;
    expect(servedReward({ stars: 3, tip: 0 }, next + 1, level, coinsForOrder).levelUp).toBe(true);
    expect(servedReward({ stars: 3, tip: 0 }, next + 3, level, coinsForOrder).levelUp).toBe(false);
  });
});
