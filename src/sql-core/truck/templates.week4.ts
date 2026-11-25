/**
 * Week 4 · Counting the Till order templates (GAME_DESIGN.md §6): `COUNT`, `SUM`, `AVG`/`ROUND`,
 * `GROUP BY`, `HAVING` and dates, all on `sales` at the tablet. The answers are graded on the data
 * as it is right now, today's own sales included, so no template sorts: the checker ignores row
 * order when the solution has no `ORDER BY`. Text is English here; Indonesian lives in
 * locales/id/templates.week4.ts.
 */
import type { OrderTemplate, Purchase } from './templates';

const buy = (itemId: number, quantity = 1): Purchase => ({ itemId, quantity });

/** Item names the customers use (ids from menu_items). */
export const ITEM_NAMES: Record<number, string> = { 3: 'Cappuccino', 4: 'Latte', 17: 'Croissant', 22: 'Ham & Cheese Toastie', 25: 'Cheesecake' };
const item = (id: string | number) => ITEM_NAMES[Number(id)] ?? `item ${id}`;

const REVENUE = 'SUM(quantity * unit_price)';
const MONTHS: Record<string, string> = { '2026-08': 'August', '2026-09': 'September', '2026-10': 'October' };

const CHANNELS = ['dine-in', 'takeaway', 'delivery'] as const;
const channelBuy: Record<string, Purchase> = { 'dine-in': buy(4), takeaway: buy(2), delivery: buy(1) };

export const WEEK4_TEMPLATES: readonly OrderTemplate[] = [
  {
    id: 'count-channel',
    concept: 'count',
    station: 'cash-register',
    variants: CHANNELS.map((c) => ({ key: c, params: { channel: c }, buys: [channelBuy[c]] })),
    solution: (p) => `SELECT COUNT(*) FROM sales WHERE channel = '${p.channel}';`,
    input: (p) => ({ kind: 'fill-blank', template: `SELECT ___ FROM sales WHERE channel = '${p.channel}';`, answers: ['COUNT(*)'] }),
    text: {
      title: (p) => `How many ${p.channel} sales?`,
      lines: [
        (p) => `Quick numbers question: how many sales lines came through ${p.channel}? Just the count.`,
        (p) => `The manager asked me how busy ${p.channel} is. How many rows in sales say ${p.channel}?`,
      ],
      task: (p) => `Count the rows in sales whose channel is ${p.channel}.`,
      hints: [
        () => 'You want one number: how many rows match.',
        (p) => `Filter with WHERE channel = '${p.channel}', and count with COUNT(*).`,
        (p) => `SELECT COUNT(*) FROM sales WHERE channel = '${p.channel}';`,
      ],
      success: () => 'A number I can write on the board. Thanks!',
    },
  },
  {
    id: 'count-item',
    concept: 'count',
    station: 'cash-register',
    variants: [4, 17, 25, 22].map((id) => ({ key: String(id), params: { item: id }, buys: [buy(id)] })),
    solution: (p) => `SELECT COUNT(*) FROM sales WHERE item_id = ${p.item};`,
    input: (p) => ({ kind: 'fill-blank', template: `SELECT COUNT(*) FROM sales WHERE item_id = ___;`, answers: [String(p.item)] }),
    text: {
      title: (p) => `How often: ${item(p.item)}`,
      lines: [
        (p) => `Everybody orders the ${item(p.item)}, or is it just me? How many sales lines are for it (item_id ${p.item})?`,
        (p) => `Count the sales of the ${item(p.item)} for me — its item_id is ${p.item}.`,
      ],
      task: (p) => `Count the rows in sales for item_id ${p.item} (${item(p.item)}).`,
      hints: [
        () => 'You want one number: how many rows are about this item.',
        (p) => `Filter with WHERE item_id = ${p.item}, and count the rows with COUNT(*).`,
        (p) => `SELECT COUNT(*) FROM sales WHERE item_id = ${p.item};`,
      ],
      success: () => 'That many! I am not the only one, then.',
    },
  },
  {
    id: 'revenue-channel',
    concept: 'sum',
    station: 'cash-register',
    variants: CHANNELS.map((c) => ({ key: c, params: { channel: c }, buys: [channelBuy[c]] })),
    solution: (p) => `SELECT ${REVENUE} AS revenue FROM sales WHERE channel = '${p.channel}';`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT ${REVENUE} AS revenue FROM sales WHERE channel = ___;`,
      answers: [`'${p.channel}'`],
    }),
    text: {
      title: (p) => `Revenue: ${p.channel}`,
      lines: [
        (p) => `How much money did ${p.channel} bring in altogether? Call the number revenue.`,
        (p) => `Add up everything customers paid through ${p.channel} (quantity × unit_price). Name it revenue.`,
      ],
      task: (p) => `Show the total revenue (the sum of quantity × unit_price) of the ${p.channel} sales, named revenue.`,
      hints: [
        () => 'Revenue is quantity × unit_price for every sale, added up.',
        (p) => `SUM adds up a calculation too. Keep only the ${p.channel} rows with WHERE.`,
        (p) => `SELECT ${REVENUE} AS revenue FROM sales WHERE channel = '${p.channel}';`,
      ],
      success: () => 'Now that is a number with a dollar sign!',
    },
  },
  {
    id: 'units-item',
    concept: 'sum',
    station: 'cash-register',
    variants: [4, 17, 25, 22].map((id) => ({ key: String(id), params: { item: id }, buys: [buy(id)] })),
    solution: (p) => `SELECT SUM(quantity) AS units FROM sales WHERE item_id = ${p.item};`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT ___(quantity) AS units FROM sales WHERE item_id = ${p.item};`,
      answers: ['SUM'],
    }),
    text: {
      title: (p) => `Units sold: ${item(p.item)}`,
      lines: [
        (p) => `How many ${item(p.item)}s did we actually sell in total (item_id ${p.item})? Call the number units.`,
        (p) => `Total number of ${item(p.item)}s sold, please — add up the quantities. Name it units.`,
      ],
      task: (p) => `Show the total quantity sold of item_id ${p.item} (${item(p.item)}), named units.`,
      hints: [
        () => 'One sales line can have a quantity above 1, so counting rows is not enough.',
        () => 'SUM(quantity) adds the quantities up.',
        (p) => `SELECT SUM(quantity) AS units FROM sales WHERE item_id = ${p.item};`,
      ],
      success: () => 'Wow, that is a lot of them. Thanks!',
    },
  },
  {
    id: 'avg-order',
    concept: 'avg-round',
    station: 'cash-register',
    variants: CHANNELS.map((c) => ({ key: c, params: { channel: c }, buys: [channelBuy[c]] })),
    solution: (p) =>
      `SELECT ROUND(${REVENUE} / COUNT(DISTINCT order_id), 2) AS avg_order_value FROM sales WHERE channel = '${p.channel}';`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT ___(${REVENUE} / COUNT(DISTINCT order_id), 2) AS avg_order_value FROM sales WHERE channel = '${p.channel}';`,
      answers: ['ROUND'],
    }),
    text: {
      title: (p) => `Average order: ${p.channel}`,
      lines: [
        (p) => `What does a ${p.channel} order bring in on average? Revenue divided by the number of orders, rounded to cents. Call it avg_order_value.`,
        (p) => `Average order value for ${p.channel}, two decimals. Remember an order can have several lines.`,
      ],
      task: (p) => `Show the average order value of the ${p.channel} sales (revenue ÷ number of distinct orders, rounded to 2 decimals), named avg_order_value.`,
      hints: [
        () => 'An order can have several sales lines, so count each order_id once.',
        () => 'COUNT(DISTINCT order_id) counts orders; ROUND(…, 2) keeps two decimals.',
        (p) => `SELECT ROUND(${REVENUE} / COUNT(DISTINCT order_id), 2) AS avg_order_value FROM sales WHERE channel = '${p.channel}';`,
      ],
      success: () => 'Perfect — that is the number the manager asks me for every week.',
    },
  },
  {
    id: 'per-group',
    concept: 'group-by',
    station: 'cash-register',
    variants: [
      { key: 'channel-lines', params: { group: 'channel', measure: 'COUNT(*)', alias: 'sales_lines', about: 'number of sales lines' }, buys: [buy(4)] },
      { key: 'channel-revenue', params: { group: 'channel', measure: REVENUE, alias: 'revenue', about: 'revenue' }, buys: [buy(2)] },
      { key: 'item-units', params: { group: 'item_id', measure: 'SUM(quantity)', alias: 'units', about: 'units sold' }, buys: [buy(3)] },
      { key: 'item-lines', params: { group: 'item_id', measure: 'COUNT(*)', alias: 'sales_lines', about: 'number of sales lines' }, buys: [buy(17)] },
    ],
    solution: (p) => `SELECT ${p.group}, ${p.measure} AS ${p.alias} FROM sales GROUP BY ${p.group};`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT ${p.group}, ${p.measure} AS ${p.alias} FROM sales GROUP BY ___;`,
      answers: [String(p.group)],
    }),
    text: {
      title: (p) => `${String(p.about).replace(/^./, (c) => c.toUpperCase())} per ${p.group === 'channel' ? 'channel' : 'item'}`,
      lines: [
        (p) => `Give me the ${p.about} for each ${p.group === 'channel' ? 'channel' : 'item (by item_id)'}, one row each. Call the number ${p.alias}.`,
        (p) => `I want a little table: every ${p.group === 'channel' ? 'channel' : 'item_id'} with its ${p.about} next to it, named ${p.alias}.`,
      ],
      task: (p) => `Show every ${p.group} with its ${p.about} (${p.alias}), one row per ${p.group}.`,
      hints: [
        () => 'One number per group means grouping the rows first.',
        (p) => `GROUP BY ${p.group} makes one row per ${p.group}; the aggregate is calculated for each group.`,
        (p) => `SELECT ${p.group}, ${p.measure} AS ${p.alias} FROM sales GROUP BY ${p.group};`,
      ],
      success: () => 'Now I can see it at a glance.',
    },
  },
  {
    id: 'big-sellers',
    concept: 'having',
    station: 'cash-register',
    // At least one and not all of the 26 items pass each limit; the live data only adds a few units.
    variants: [
      { key: '300', params: { min: 300 }, buys: [buy(22)] },
      { key: '400', params: { min: 400 }, buys: [buy(1)] },
      { key: '500', params: { min: 500 }, buys: [buy(3)] },
    ],
    solution: (p) => `SELECT item_id, SUM(quantity) AS units FROM sales GROUP BY item_id HAVING SUM(quantity) > ${p.min};`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT item_id, SUM(quantity) AS units FROM sales GROUP BY item_id ___ SUM(quantity) > ${p.min};`,
      answers: ['HAVING'],
    }),
    text: {
      title: (p) => `Items over ${p.min} units`,
      lines: [
        (p) => `Which items sold more than ${p.min} units in total? Show the item_id and the units.`,
        (p) => `Only the big sellers, please: items with more than ${p.min} units sold. item_id and units.`,
      ],
      task: (p) => `Show the item_id and total units (named units) of every item that sold more than ${p.min} units.`,
      hints: [
        () => 'First add up the units per item. Then keep only the groups above the limit.',
        () => 'WHERE filters rows before grouping; HAVING filters the groups after it.',
        (p) => `… GROUP BY item_id HAVING SUM(quantity) > ${p.min};`,
      ],
      success: () => 'The usual suspects. Good to see it in numbers.',
    },
  },
  {
    id: 'frequent-regulars',
    concept: 'having',
    station: 'cash-register',
    variants: [
      { key: '30', params: { min: 30 }, buys: [buy(4)] },
      { key: '25', params: { min: 25 }, buys: [buy(3)] },
    ],
    solution: (p) =>
      `SELECT customer_id, COUNT(DISTINCT order_id) AS visits FROM sales WHERE customer_id IS NOT NULL GROUP BY customer_id HAVING COUNT(DISTINCT order_id) >= ${p.min};`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT customer_id, COUNT(DISTINCT order_id) AS visits FROM sales WHERE customer_id IS NOT NULL GROUP BY customer_id HAVING COUNT(DISTINCT order_id) >= ___;`,
      answers: [String(p.min)],
    }),
    text: {
      title: (p) => `Customers with ${p.min}+ visits`,
      lines: [
        (p) => `Who are our most loyal customers? Show the customer_id and visits (distinct orders) of everyone with ${p.min} visits or more.`,
        (p) => `I want to thank the regulars. List each customer_id with ${p.min} or more orders, with the number as visits.`,
      ],
      task: (p) => `Show the customer_id and visits (distinct orders) of every known customer with at least ${p.min} visits.`,
      hints: [
        () => 'Many sales lines can belong to one order: count each order_id once. Walk-ins have no customer_id.',
        () => 'Group by customer_id, then keep the groups with HAVING.',
        (p) => `… WHERE customer_id IS NOT NULL GROUP BY customer_id HAVING COUNT(DISTINCT order_id) >= ${p.min};`,
      ],
      success: () => 'Those are the people I will say hello to by name.',
    },
  },
  {
    id: 'per-month',
    concept: 'dates',
    station: 'cash-register',
    variants: [
      { key: 'orders', params: { measure: 'COUNT(DISTINCT order_id)', alias: 'orders', about: 'orders' }, buys: [buy(4)] },
      { key: 'revenue', params: { measure: REVENUE, alias: 'revenue', about: 'revenue' }, buys: [buy(2)] },
    ],
    solution: (p) => `SELECT DATE_TRUNC('month', sold_at) AS month, ${p.measure} AS ${p.alias} FROM sales GROUP BY month;`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT DATE_TRUNC(___, sold_at) AS month, ${p.measure} AS ${p.alias} FROM sales GROUP BY month;`,
      answers: ["'month'"],
    }),
    text: {
      title: (p) => `Monthly ${p.about}`,
      lines: [
        (p) => `Month by month, how are the ${p.about} doing? One row per month, the month as "month" and the number as ${p.alias}.`,
        (p) => `I need the ${p.about} per month for my chart. Columns: month and ${p.alias}.`,
      ],
      task: (p) => `Show each month (DATE_TRUNC('month', sold_at), named month) with its ${p.about} (${p.alias}).`,
      hints: [
        () => 'Cut every timestamp down to its month, then group by that.',
        () => "DATE_TRUNC('month', sold_at) turns a date into the first day of its month. GROUP BY can use its alias.",
        (p) => `SELECT DATE_TRUNC('month', sold_at) AS month, ${p.measure} AS ${p.alias} FROM sales GROUP BY month;`,
      ],
      success: () => 'A trend at last. Thank you!',
    },
  },
  {
    id: 'month-revenue',
    concept: 'dates',
    station: 'cash-register',
    variants: Object.keys(MONTHS).map((m, i) => ({ key: m, params: { month: m }, buys: [buy([4, 2, 1][i])] })),
    solution: (p) => {
      const [y, mo] = String(p.month).split('-').map(Number);
      const next = mo === 12 ? `${y + 1}-01` : `${y}-${String(mo + 1).padStart(2, '0')}`;
      return `SELECT ${REVENUE} AS revenue FROM sales WHERE sold_at >= '${p.month}-01' AND sold_at < '${next}-01';`;
    },
    input: (p) => {
      const [y, mo] = String(p.month).split('-').map(Number);
      const next = mo === 12 ? `${y + 1}-01` : `${y}-${String(mo + 1).padStart(2, '0')}`;
      return {
        kind: 'fill-blank',
        template: `SELECT ${REVENUE} AS revenue FROM sales WHERE sold_at >= '${p.month}-01' AND sold_at ___ '${next}-01';`,
        answers: ['<'],
      };
    },
    text: {
      title: (p) => `${MONTHS[String(p.month)]} revenue`,
      lines: [
        (p) => `How much did we make in ${MONTHS[String(p.month)]}? One number, called revenue.`,
        (p) => `Revenue for ${MONTHS[String(p.month)]} only, please — from the first of the month up to the first of the next.`,
      ],
      task: (p) => `Show the total revenue of ${MONTHS[String(p.month)]} 2026 (sold_at from the 1st up to, not including, the 1st of the next month), named revenue.`,
      hints: [
        () => 'Keep only the sales of one month, then add up quantity × unit_price.',
        () => 'A month is from its first day up to, but not including, the first day of the next month: sold_at >= … AND sold_at < ….',
        (p) => `… WHERE sold_at >= '${p.month}-01' AND sold_at < … (the 1st of the next month);`,
      ],
      success: () => 'Thanks, that goes straight into the report.',
    },
  },
  {
    id: 'per-weekday',
    concept: 'dates',
    station: 'cash-register',
    variants: [{ key: 'orders', params: {}, buys: [buy(3)] }],
    solution: () => 'SELECT EXTRACT(DOW FROM sold_at) AS weekday, COUNT(DISTINCT order_id) AS orders FROM sales GROUP BY weekday;',
    input: () => ({
      kind: 'fill-blank',
      template: 'SELECT EXTRACT(___ FROM sold_at) AS weekday, COUNT(DISTINCT order_id) AS orders FROM sales GROUP BY weekday;',
      answers: ['DOW'],
    }),
    text: {
      title: () => 'Orders per weekday',
      lines: [
        () => 'Are some weekdays busier than others? Show me the weekday number (0 is Sunday) and the number of orders for each.',
        () => 'Orders per day of the week, please. Call the columns weekday and orders.',
      ],
      task: () => 'Show the weekday (EXTRACT(DOW FROM sold_at), named weekday) and the number of distinct orders (orders) for each weekday.',
      hints: [
        () => 'You need the day of the week of every sale, and then one row per weekday.',
        () => 'EXTRACT(DOW FROM sold_at) gives the weekday as a number: 0 is Sunday. Group by it.',
        () => 'SELECT EXTRACT(DOW FROM sold_at) AS weekday, COUNT(DISTINCT order_id) AS orders FROM sales GROUP BY weekday;',
      ],
      success: () => 'Hmm, one day is much quieter than the rest. Interesting…',
    },
  },
];

