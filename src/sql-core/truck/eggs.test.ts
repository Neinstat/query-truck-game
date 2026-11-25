import { describe, expect, it } from 'vitest';
import { addFound, eggForQuery, EGGS, KONAMI, konamiStep, parseFound } from './eggs';

describe('easter eggs', () => {
  it('have text in both languages and unique ids', () => {
    expect(new Set(EGGS.map((e) => e.id)).size).toBe(EGGS.length);
    expect(EGGS.length).toBeGreaterThanOrEqual(6);
    for (const e of EGGS) expect(e.title.en && e.title.id && e.text.en && e.text.id && e.hint.en && e.hint.id).toBeTruthy();
  });

  it('are found by the right queries and only those', () => {
    expect(eggForQuery('SELECT * FROM information_schema.tables;')).toBe('schema');
    expect(eggForQuery('drop   table menu_items;')).toBe('drop');
    expect(eggForQuery('SELECT 42;')).toBe('answer');
    expect(eggForQuery('select 42 as answer')).toBe('answer');
    expect(eggForQuery('SELECT * FROM menu_items;')).toBeNull();
    expect(eggForQuery('SELECT 421;')).toBeNull();
  });

  it('recognises the old code, even after other keys', () => {
    let recent: string[] = [];
    let done = false;
    for (const key of ['x', 'q', ...KONAMI.map((k) => (k === 'b' ? 'B' : k))]) ({ recent, done } = konamiStep(recent, key));
    expect(done).toBe(true);
    expect(konamiStep(recent, 'z').done).toBe(false);
  });

  it('saves the found list safely', () => {
    expect(parseFound(null)).toEqual([]);
    expect(parseFound('nonsense')).toEqual([]);
    expect(parseFound('["duck","nope",3]')).toEqual(['duck']);
    expect(addFound(addFound([], 'duck'), 'duck')).toEqual(['duck']);
  });
});
