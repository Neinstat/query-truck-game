import { describe, expect, it } from 'vitest';
import { newDay, serveOrder, missOrder } from '../sql-core/truck/day';
import { hasOpenTask, stumble, taskRows } from './tasks';

describe('the orders list', () => {
  const ids = ['a', 'b', 'c', 'd'];
  it('says where each customer stands', () => {
    let day = newDay('2026-11-26', ids);
    day = serveOrder(day, { orderId: 'a', at: 600, tip: 1, stars: 3 });
    day = missOrder(day, 'b');
    const rows = taskRows(ids, day, 'c');
    expect(rows.map((r) => r.status)).toEqual(['done', 'left', 'now', 'next']);
    expect(rows[0].stars).toBe(3);
    expect(hasOpenTask(rows)).toBe(true);
  });
  it('has nothing open when nobody is at the window', () => {
    expect(hasOpenTask(taskRows(ids, newDay('2026-11-26', ids), null))).toBe(false);
  });
  it('tells why stars were lost', () => {
    expect(stumble(3)).toBeNull();
    expect(stumble(2)).toBe('mistake');
    expect(stumble(1)).toBe('hints');
    expect(stumble(null)).toBeNull();
  });
});
