import { beforeAll, describe, expect, it } from 'vitest';
import { checkAnswer } from '../checker';
import { createCafeDatabase, type CafeDatabase } from '../db';
import { BLANK } from '../levels';
import { ui } from '../../i18n';
import { CONCEPT_WEEK } from './concepts';
import { DIFFICULTIES, inputFor, parseDifficulty, WRITE_STARTER } from './difficulty';
import { orderId } from './orders';
import { TEMPLATES } from './templates';
import { queryTokens } from './templates.week1';

let db: CafeDatabase;
beforeAll(async () => {
  db = await createCafeDatabase();
}, 60_000);

const ALL = TEMPLATES.flatMap((t) => t.variants.map((v) => [orderId(t, v), t, v] as const));

describe('difficulty', () => {
  it('parses only the four known values', () => {
    for (const d of DIFFICULTIES) expect(parseDifficulty(d)).toBe(d);
    expect(parseDifficulty('hard')).toBeUndefined();
    expect(parseDifficulty(null)).toBeUndefined();
  });

  it('has a name, audience and benefit in both languages, and a backstory of the same length', () => {
    for (const d of DIFFICULTIES) {
      for (const lang of ['en', 'id'] as const) {
        const text = ui[lang].difficulties[d];
        expect(text.name && text.forWho && text.benefit, `${lang} ${d}`).toBeTruthy();
      }
      expect(ui.id.difficulties[d].name).not.toBe(ui.en.difficulties[d].name);
    }
    expect(ui.id.backstory).toHaveLength(ui.en.backstory.length);
    expect(ui.en.backstory.length).toBeGreaterThanOrEqual(3);
    expect(ui.en.backstory.length).toBeLessThanOrEqual(5);
  });

  it('the write level starts from SELECT * FROM with free typing', () => {
    const [, t, v] = ALL[0];
    expect(inputFor(t, v, 'write', 5)).toEqual({ kind: 'free', starter: WRITE_STARTER });
    expect(WRITE_STARTER.trim()).toBe('SELECT * FROM');
  });
});

describe.each(ALL)('order %s at every difficulty', (id, template, variant) => {
  const solution = template.solution(variant.params);

  it('cards: the blocks hold every word of the solution, and are not in answer order', () => {
    const input = inputFor(template, variant, 'cards', 0);
    if (input.kind !== 'blocks') throw new Error('expected blocks');
    const left = [...input.blocks];
    for (const word of queryTokens(solution)) {
      const at = left.indexOf(word);
      expect(at, `${id}: ${word}`).toBeGreaterThanOrEqual(0);
      left.splice(at, 1);
    }
    expect(input.blocks.join(' ')).not.toBe(queryTokens(solution).join(' '));
  });

  it('cards: the solution built from its blocks is correct', async () => {
    const sql = queryTokens(solution).join(' ');
    expect((await checkAnswer(db, sql, solution, undefined, template.station)).verdict).toEqual({ correct: true });
  });

  it('fill: the gaps filled with their answers give the solution', async () => {
    const input = inputFor(template, variant, 'fill', 0);
    if (input.kind !== 'fill-blank') throw new Error('expected fill-blank');
    expect(input.template).toContain(BLANK);
    expect(input.template.trimEnd()).toMatch(/;$/);
    let n = 0;
    const sql = input.template.replace(new RegExp(BLANK, 'g'), () => input.answers[n++]);
    expect(n).toBe(input.answers.length);
    expect((await checkAnswer(db, sql, solution, undefined, template.station)).verdict).toEqual({ correct: true });
  });

  it('grow: keeps the old rule (the template input at level 0, free typing at level 5)', () => {
    // From week 3 on, a new concept starts with free typing.
    expect(inputFor(template, variant, 'grow', 0)).toEqual(CONCEPT_WEEK[template.concept] >= 3 ? { kind: 'free' } : template.input(variant.params));
    expect(inputFor(template, variant, 'grow', 5)).toEqual({ kind: 'free' });
  });
});
