import { beforeEach, describe, expect, it } from 'vitest';
import { loadBonus, saveBonus } from './devBonus';

const store = new Map<string, string>();
(globalThis as unknown as { localStorage: Storage }).localStorage = {
  getItem: (k: string) => store.get(k) ?? null,
  setItem: (k: string, v: string) => void store.set(k, v),
  removeItem: (k: string) => void store.delete(k),
} as Storage;

describe('developer gifts', () => {
  beforeEach(() => store.clear());
  it('start empty, keep what is saved and forget it when it is zero', () => {
    expect(loadBonus()).toEqual({ xp: 0, coins: 0 });
    saveBonus({ xp: 50, coins: 500 });
    expect(loadBonus()).toEqual({ xp: 50, coins: 500 });
    saveBonus({ xp: 0, coins: 0 });
    expect(localStorage.getItem('query-truck.dev-bonus')).toBeNull();
  });
  it('ignore broken saves', () => {
    localStorage.setItem('query-truck.dev-bonus', '{"xp":-5,"coins":"lots"}');
    expect(loadBonus()).toEqual({ xp: 0, coins: 0 });
    localStorage.setItem('query-truck.dev-bonus', 'not json');
    expect(loadBonus()).toEqual({ xp: 0, coins: 0 });
  });
});
