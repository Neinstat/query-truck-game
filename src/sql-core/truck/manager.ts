/**
 * The Manager's knock (GAME_DESIGN.md §3–§5): once a day, a small case about the player's own
 * data — today's orders, today's revenue — plus one question about the truck's history. It uses
 * the v1 case engine (pinned evidence + conclusions). Because today's numbers depend on what the
 * player served, the right answers are worked out from the database when the Manager knocks.
 */
import { applyText, type CaseLevel, type Level } from '../levels';
import type { CafeDatabase } from '../db';
import type { Lang } from '../feedback';
import { MANAGER_CASE_ID, MANAGER_INTRO_ID } from './locales/id/manager';

export const MANAGER_CASE = 'manager-day-1';

/**
 * The talk at the back door before the case (GAME_DESIGN.md §4): the Manager's lines one by one,
 * then the player picks a reply and the Manager answers it — every reply leads to the case.
 */
export type ManagerIntro = {
  lines: string[];
  replies: { label: string; answer: string }[];
  /** The button that opens the case after the answer. */
  open: string;
};

export const MANAGER_INTRO: ManagerIntro = {
  lines: [
    '*Knock knock.*',
    "Query Truck Co., regional manager. I don't do small talk.",
    'Three numbers before I leave: how many orders today, how much revenue today, and our best channel last month.',
  ],
  replies: [
    { label: 'Right away.', answer: "Good. One question at a time. Show me the rows — I don't trust feelings." },
    {
      label: 'Can I finish with this customer first?',
      answer: "No. Numbers first. Your customer's clock is stopped anyway — mine isn't.",
    },
    {
      label: "What's a channel?",
      answer: 'Dine-in, takeaway, delivery: where the money comes in. It is a column in sales. Look.',
    },
  ],
  open: 'Open the case 📋',
};

export const managerIntroFor = (lang: Lang): ManagerIntro => (lang === 'id' ? MANAGER_INTRO_ID : MANAGER_INTRO);

/** The October channels, in the order the choices are shown. */
const CHANNELS = ['dine-in', 'takeaway', 'delivery'] as const;

const checkDate = (date: string) => {
  if (!/^\d{4}-\d\d-\d\d$/.test(date)) throw new Error(`Bad date: ${date}`);
  return date;
};

/** The reference queries behind each answer (also used as evidence). */
export function managerQueries(date: string) {
  const d = checkDate(date);
  return {
    orders: `SELECT COUNT(DISTINCT order_id) AS orders FROM sales WHERE channel = 'truck' AND sold_at::date = '${d}';`,
    orderIds: `SELECT DISTINCT order_id FROM sales WHERE channel = 'truck' AND sold_at::date = '${d}';`,
    revenue: `SELECT COALESCE(SUM(quantity * unit_price), 0) AS revenue FROM sales WHERE channel = 'truck' AND sold_at::date = '${d}';`,
    bestChannel: `SELECT channel, SUM(quantity * unit_price) AS revenue FROM sales WHERE sold_at >= '2026-10-01' AND sold_at < '2026-11-01' GROUP BY channel ORDER BY revenue DESC LIMIT 1;`,
  };
}

/** The case in English, with the right answers for the data as it is now. */
export async function buildManagerCase(db: CafeDatabase, date: string): Promise<CaseLevel> {
  const q = managerQueries(date);
  const value = async (sql: string) => {
    const r = await db.run(sql);
    if (!r.ok) throw new Error(`Manager case query failed: ${sql}`);
    return r.rows[0]?.[0];
  };
  const orders = Number(await value(q.orders));
  const revenue = Number(await value(q.revenue));
  const best = String(await value(q.bestChannel));
  const bestIndex = CHANNELS.indexOf(best as (typeof CHANNELS)[number]);
  if (bestIndex < 0) throw new Error(`Unexpected channel: ${best}`);
  const starters = [
    `SELECT COUNT(DISTINCT order_id) AS orders\nFROM sales\nWHERE channel = ___\n  AND sold_at::date = '${date}';`,
    `SELECT COALESCE(SUM(quantity * unit_price), 0) AS revenue\nFROM sales\nWHERE channel = 'truck'\n  AND sold_at::date = ___;`,
    `SELECT channel, SUM(quantity * unit_price) AS revenue\nFROM sales\nWHERE sold_at >= '2026-10-01' AND sold_at < ___\nGROUP BY channel\nORDER BY revenue DESC;`,
  ];

  return {
    id: MANAGER_CASE,
    kind: 'case',
    title: 'Numbers. Now.',
    character: 'manager',
    // The Manager's laptop sees every table.
    station: 'back-office',
    dialogue: [
      '*Knock knock.*',
      "Query Truck Co., regional manager. I don't do small talk.",
      'Three numbers before I leave: how many orders today, how much revenue today, and our best channel last month.',
      "One question at a time. Show me the rows — I don't trust feelings.",
    ],
    task: "Answer the Manager's three questions, one at a time: fill the blank in the query, run it, and type the number you see.",
    guided: true,
    starters,
    questions: [
      {
        prompt: 'How many orders did the truck serve today?',
        answer: { kind: 'number', value: orders },
        evidence: [{ sql: q.orders, exact: true }, { sql: q.orderIds, exact: true }],
        guide: {
          goal: "Count today's truck orders. Every item sold is one row in sales, and one order can have several rows — so the query counts the different order_id values, only for the truck's sales today.",
          read: 'The result is one row with one number, orders. That number is your answer.',
          starter: starters[0],
          hints: [
            "The blank is which channel to count. The truck's own sales have channel = 'truck'.",
            "Text in SQL goes in single quotes: replace ___ with 'truck' (quotes included), then press Run.",
            `The whole query: ${q.orders}`,
          ],
          reply: 'Hm. Fine. Next: money.',
        },
      },
      {
        prompt: 'How much revenue did the truck make today, in dollars?',
        answer: { kind: 'number', value: revenue, tolerance: 0.01 },
        evidence: { sql: q.revenue, exact: true },
        guide: {
          goal: `Revenue is the money that came in: for every row, quantity × unit_price, all added up with SUM. This time the blank is the day: today is ${date}.`,
          read: 'The result is one number, revenue, in dollars. Type it as it is (for example 10.25).',
          starter: starters[1],
          hints: [
            'sold_at::date turns the sale time into just the date, so it can be compared with today.',
            `A date is written like text, in single quotes: replace ___ with '${date}'.`,
            `The whole query: ${q.revenue}`,
          ],
          reply: 'Acceptable. Last one — and this is the one that matters.',
        },
      },
      {
        prompt: 'Which channel brought in the most revenue in October?',
        answer: { kind: 'choice', choices: [...CHANNELS], correct: bestIndex },
        evidence: { sql: q.bestChannel },
        guide: {
          goal: "Compare the channels (dine-in, takeaway, delivery) over October. GROUP BY channel makes one row per channel, SUM adds up each channel's revenue, and ORDER BY revenue DESC puts the biggest first.",
          read: 'The result has one row per channel. The top row earned the most: pick that channel.',
          starter: starters[2],
          hints: [
            'October is every sale from 1 October up to (but not including) 1 November.',
            "Replace ___ with '2026-11-01': sold_at < '2026-11-01' keeps all of 31 October.",
            `The whole query: ${q.bestChannel.replace(' LIMIT 1', '')}`,
          ],
          reply: '',
        },
      },
    ],
    // Each step has its own hints (guide.hints); these are for anything that shows the level's.
    hints: [
      "Every truck sale has channel = 'truck'. Today is one date: compare sold_at::date with it.",
      'Fill the blank, run the query, and type the number you see.',
      "Blanks: 'truck' · '" + date + "' · '2026-11-01' (the day after October ends).",
    ],
    success: "Hm. Correct. Don't let it go to your head. Same time tomorrow.",
  };
}

/** The case in the player's language (falls back to English). */
export async function managerCaseFor(db: CafeDatabase, date: string, lang: Lang): Promise<Level> {
  const level = await buildManagerCase(db, date);
  return lang === 'id' ? applyText(level, MANAGER_CASE_ID) : level;
}
