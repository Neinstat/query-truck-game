import { beforeAll, describe, expect, it } from 'vitest';
import { checkConclusion } from '../cases';
import { createCafeDatabase, type LocalCafeDatabase } from '../db';
import { BLANK } from '../levels';
import { LAST_WEEK } from './weeks';
import { buildDailyCase, casesForWeek, DAILY_CASES, pickDailyCase } from './managerCases';
import { managerCaseFor, managerIntroFor, NUMBERS_NOW } from './manager';

let db: LocalCafeDatabase;
beforeAll(async () => {
  db = await createCafeDatabase();
}, 60_000);

/** A real date, `d` days after 1 Nov 2026. */
const dateOffset = (d: number) => new Date(Date.UTC(2026, 10, 1 + d)).toISOString().slice(0, 10);

const playable = DAILY_CASES.filter((c) => c.steps.length > 0);

describe('the pool of daily cases', () => {
  it('has at least three cases available in every week', () => {
    for (let week = 1; week <= LAST_WEEK; week++) expect(casesForWeek(week).length, `week ${week}`).toBeGreaterThanOrEqual(3);
  });

  it('only brings cases of this week and earlier weeks', () => {
    for (let week = 1; week <= LAST_WEEK; week++) {
      for (let day = 0; day < 40; day++) {
        const date = `2026-11-${String((day % 28) + 1).padStart(2, '0')}`;
        expect(pickDailyCase(week, `${date}#${day}`).week).toBeLessThanOrEqual(week);
      }
    }
  });

  it('is the same case for the same day, and mixes this week with earlier ones', () => {
    expect(pickDailyCase(5, '2026-11-20').id).toBe(pickDailyCase(5, '2026-11-20').id);
    const seen = new Set<number>();
    for (let d = 0; d < 60; d++) seen.add(pickDailyCase(5, dateOffset(d)).week);
    expect(seen.has(5)).toBe(true);
    expect(seen.size).toBeGreaterThan(1);
  });

  it('has a case that ends with a recommendation in weeks 4, 5 and 6', () => {
    for (const week of [4, 5, 6]) {
      const own = DAILY_CASES.filter((c) => c.week <= week && c.recommends);
      expect(own.length, `week ${week}`).toBeGreaterThan(0);
      for (const c of own) expect(c.steps[c.steps.length - 1].answer.kind.startsWith('choice')).toBe(true);
    }
  });

  it('has unique ids, one or two steps, and one blank per starter', () => {
    expect(new Set(DAILY_CASES.map((c) => c.id)).size).toBe(DAILY_CASES.length);
    for (const c of playable) {
      expect(c.steps.length).toBeGreaterThanOrEqual(1);
      expect(c.steps.length).toBeLessThanOrEqual(2);
      for (const s of c.steps) expect(s.starter.split(BLANK).length - 1, `${c.id} starter`).toBe(1);
    }
  });
});

describe.each(playable.map((c) => [c.id, c] as const))('daily case %s', (_id, c) => {
  it('is solvable: fill each starter, run it as the laptop, and the right answer is backed by the result', async () => {
    const level = await buildDailyCase(db, c, 'en');
    expect(level.questions).toHaveLength(c.steps.length);
    for (const [i, question] of level.questions.entries()) {
      const sql = level.starters[i].replace(BLANK, c.steps[i].fill);
      const result = await db.run(sql, level.station);
      if (!result.ok) throw new Error(`${c.id} step ${i + 1} failed: ${sql}`);
      const answer = question.answer;
      const given = answer.kind === 'number' ? answer.value : answer.correct;
      const verdict = await checkConclusion(db, question, given, { columns: result.columns, rows: result.rows });
      expect(verdict, `${c.id} step ${i + 1}`).toEqual({ correct: true });
      if (answer.kind === 'choice') {
        expect(answer.correct).toBeGreaterThanOrEqual(0);
        expect(new Set(answer.choices).size).toBe(answer.choices.length);
      }
    }
  }, 60_000);

  it('is guided, with three or more hints ending in the whole query', async () => {
    const level = await buildDailyCase(db, c, 'en');
    expect(level.guided).toBe(true);
    for (const q of level.questions) {
      expect(q.guide?.hints.length).toBeGreaterThanOrEqual(3);
      expect(q.guide?.hints[q.guide.hints.length - 1]).toContain('SELECT');
      expect(q.guide?.goal.length).toBeGreaterThan(20);
    }
  });

  it('has Indonesian text of the same shape, with the same SQL and the same right answer', async () => {
    const en = await buildDailyCase(db, c, 'en');
    const id = await buildDailyCase(db, c, 'id');
    expect(id.title).not.toBe(en.title);
    expect(id.task).not.toBe(en.task);
    expect(id.dialogue).toHaveLength(en.dialogue.length);
    expect(id.starters).toEqual(en.starters);
    for (const [i, q] of id.questions.entries()) {
      expect(q.prompt).not.toBe(en.questions[i].prompt);
      expect(q.guide?.hints).toHaveLength(en.questions[i].guide!.hints.length);
      expect(q.guide?.goal).not.toBe(en.questions[i].guide?.goal);
      expect(q.guide?.starter).toBe(en.questions[i].guide?.starter);
      if (q.answer.kind === 'choice' && en.questions[i].answer.kind === 'choice') {
        expect(q.answer.correct).toBe((en.questions[i].answer as { correct: number }).correct);
        expect(q.answer.choices).toHaveLength((en.questions[i].answer as { choices: string[] }).choices.length);
      }
    }
    for (const lang of ['en', 'id'] as const) {
      const intro = managerIntroFor(lang, c.id);
      expect(intro.lines).toHaveLength(3);
      expect(intro.lines.every((l) => l.length > 0)).toBe(true);
    }
  }, 60_000);
});

describe('right answers that must not tie', () => {
  const top = async (sql: string) => {
    const r = await db.run(sql);
    if (!r.ok) throw new Error(sql);
    return r.rows.map((row) => Number(row[row.length - 1]));
  };
  const HISTORY = "sold_at >= '2026-10-01' AND sold_at < '2026-11-01'";

  it('the busiest and the quietest hour are single hours', async () => {
    const counts = await top(
      `SELECT EXTRACT(HOUR FROM sold_at) AS h, COUNT(DISTINCT order_id) AS n FROM sales WHERE ${HISTORY} GROUP BY h ORDER BY n DESC;`,
    );
    expect(counts[0]).toBeGreaterThan(counts[1]);
    expect(counts[counts.length - 1]).toBeLessThan(counts[counts.length - 2]);
  });

  it('the best partner of a Latte and the most loyal customer win clearly', async () => {
    const partners = await top(
      "SELECT m.name, COUNT(*) AS n FROM sales a JOIN sales b ON a.order_id = b.order_id AND a.item_id <> b.item_id JOIN menu_items m ON m.item_id = b.item_id WHERE a.item_id = 1 AND a.sold_at < '2026-11-01' GROUP BY m.name ORDER BY n DESC;",
    );
    expect(partners[0]).toBeGreaterThan(partners[1]);
    const loyal = await top(
      'SELECT c.name, COUNT(DISTINCT s.order_id) AS n FROM customers c JOIN sales s ON s.customer_id = c.customer_id GROUP BY c.name ORDER BY n DESC;',
    );
    expect(loyal[0]).toBeGreaterThan(loyal[1]);
    const margins = await top(
      'SELECT name, price - cost AS m FROM menu_items WHERE price IS NOT NULL AND cost IS NOT NULL ORDER BY m DESC;',
    );
    expect(margins[0]).toBeGreaterThan(margins[1]);
  });
});

describe('managerCaseFor with a week', () => {
  it('brings the original three-number case when the pool picks it', async () => {
    let found: string | null = null;
    for (let d = 0; d < 120 && !found; d++) {
      const date = dateOffset(d);
      if (pickDailyCase(4, date).id === NUMBERS_NOW) found = date;
    }
    expect(found).not.toBeNull();
    const level = await managerCaseFor(db, found!, 'en', 4);
    expect(level.id).toBe('manager-day-1');
  });

  it('builds a pool case for a week, and keeps the original without one', async () => {
    const c = playable.find((p) => p.week === 1)!;
    let date = '';
    for (let d = 0; d < 120 && !date; d++) if (pickDailyCase(1, dateOffset(d)).id === c.id) date = dateOffset(d);
    const level = await managerCaseFor(db, date, 'en', 1);
    expect(level.id).toBe(`manager-${c.id}`);
    expect((await managerCaseFor(db, '2026-11-01', 'en')).id).toBe('manager-day-1');
  });
});
