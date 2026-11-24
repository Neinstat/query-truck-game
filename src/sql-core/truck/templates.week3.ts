/**
 * Week 3 · Daily Specials order templates (GAME_DESIGN.md §6): `ORDER BY`, `LIMIT`, `DISTINCT`,
 * aliases and computed columns, and the `NULL`-first trap of `DESC`. Every sorted answer has no
 * ties (the sorted column is unique among the rows shown, and a `LIMIT` never cuts through a tie),
 * so there is exactly one right order. Text is English here; Indonesian lives in
 * locales/id/templates.week3.ts.
 */
import type { OrderTemplate, Purchase } from './templates';
import { money } from './templates';

const buy = (itemId: number, quantity = 1): Purchase => ({ itemId, quantity });

const CATEGORY_WORDS: Record<string, string> = { coffee: 'coffees', tea: 'teas', pastry: 'pastries', sandwich: 'sandwiches', dessert: 'desserts' };
const word = (c: string | number) => CATEGORY_WORDS[String(c)] ?? String(c);

/** "1", "2", "3" → how a customer says a count. */
const COUNT_WORDS: Record<number, string> = { 1: 'one', 2: 'two', 3: 'three' };
const count = (n: string | number) => COUNT_WORDS[Number(n)] ?? String(n);

export const WEEK3_TEMPLATES: readonly OrderTemplate[] = [
  {
    id: 'sorted-price',
    concept: 'order-by',
    station: 'menu-board',
    // Prices inside each of these categories are all different, so the order is unambiguous.
    variants: [
      { key: 'sandwich-desc', params: { category: 'sandwich', dir: 'DESC' }, buys: [buy(23)] },
      { key: 'sandwich-asc', params: { category: 'sandwich', dir: 'ASC' }, buys: [buy(24)] },
      { key: 'dessert-desc', params: { category: 'dessert', dir: 'DESC' }, buys: [buy(25)] },
      { key: 'dessert-asc', params: { category: 'dessert', dir: 'ASC' }, buys: [buy(26)] },
    ],
    solution: (p) => `SELECT name, price FROM menu_items WHERE category = '${p.category}' ORDER BY price ${p.dir};`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT name, price FROM menu_items WHERE category = '${p.category}' ORDER BY price ___;`,
      answers: [String(p.dir)],
    }),
    text: {
      title: (p) => (p.dir === 'DESC' ? `Priciest ${word(p.category)} first` : `Cheapest ${word(p.category)} first`),
      lines: [
        (p) =>
          p.dir === 'DESC'
            ? `Show me your ${word(p.category)}, the most expensive on top. I like to dream big.`
            : `Your ${word(p.category)}, please, cheapest first. I'll work my way up.`,
        (p) =>
          p.dir === 'DESC'
            ? `I'm treating myself. List the ${word(p.category)} with their prices, from the priciest down.`
            : `List the ${word(p.category)} with their prices, starting with the cheapest one.`,
      ],
      task: (p) =>
        `Show the name and price of every ${p.category} item, ${p.dir === 'DESC' ? 'most expensive' : 'cheapest'} first.`,
      hints: [
        () => 'The rows are right already — they only need sorting.',
        (p) => `ORDER BY price sorts small to big (ASC). For big to small add DESC. Here: ${p.dir}.`,
        (p) => `… WHERE category = '${p.category}' ORDER BY price ${p.dir};`,
      ],
      success: () => 'Perfect, just the way I like to read a menu.',
    },
  },
  {
    id: 'alphabetical',
    concept: 'order-by',
    station: 'menu-board',
    variants: [
      { key: 'tea', params: { category: 'tea' }, buys: [buy(12)] },
      { key: 'pastry', params: { category: 'pastry' }, buys: [buy(20)] },
      { key: 'coffee', params: { category: 'coffee' }, buys: [buy(6)] },
    ],
    solution: (p) => `SELECT name FROM menu_items WHERE category = '${p.category}' ORDER BY name;`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT name FROM menu_items WHERE category = '${p.category}' ORDER BY ___;`,
      answers: ['name'],
    }),
    text: {
      title: (p) => `${word(p.category)} A to Z`.replace(/^./, (c) => c.toUpperCase()),
      lines: [
        (p) => `I'm printing a poster. Can you list your ${word(p.category)} in alphabetical order?`,
        (p) => `Names of all your ${word(p.category)}, A to Z. I like things tidy.`,
      ],
      task: (p) => `Show the name of every ${p.category} item, in alphabetical order.`,
      hints: [
        () => 'Text can be sorted too: A comes before Z.',
        () => 'ORDER BY, then the column to sort by. Without ASC or DESC it goes A to Z.',
        (p) => `… WHERE category = '${p.category}' ORDER BY name;`,
      ],
      success: () => 'Lovely, that will look good on the poster.',
    },
  },
  {
    id: 'top-n',
    concept: 'limit',
    station: 'menu-board',
    // Every cut falls between two different prices.
    variants: [
      { key: 'dessert-desc-2', params: { category: 'dessert', dir: 'DESC', n: 2 }, buys: [buy(25)] },
      { key: 'sandwich-desc-1', params: { category: 'sandwich', dir: 'DESC', n: 1 }, buys: [buy(23)] },
      { key: 'sandwich-asc-2', params: { category: 'sandwich', dir: 'ASC', n: 2 }, buys: [buy(24)] },
      { key: 'dessert-asc-1', params: { category: 'dessert', dir: 'ASC', n: 1 }, buys: [buy(26)] },
    ],
    solution: (p) => `SELECT name, price FROM menu_items WHERE category = '${p.category}' ORDER BY price ${p.dir} LIMIT ${p.n};`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT name, price FROM menu_items WHERE category = '${p.category}' ORDER BY price ${p.dir} LIMIT ___;`,
      answers: [String(p.n)],
    }),
    text: {
      title: (p) => `${p.dir === 'DESC' ? 'Top' : 'Bottom'} ${p.n} ${p.n === 1 ? String(p.category) : word(p.category)}`,
      lines: [
        (p) =>
          p.dir === 'DESC'
            ? `Just the ${count(p.n)} most expensive ${p.n === 1 ? p.category : word(p.category)}, please. The rest don't interest me.`
            : `Only the ${count(p.n)} cheapest ${p.n === 1 ? p.category : word(p.category)}. Names and prices.`,
        (p) =>
          p.dir === 'DESC'
            ? `Which ${p.n === 1 ? p.category : `${count(p.n)} ${word(p.category)}`} cost the most? Only those.`
            : `Give me the ${count(p.n)} lowest-priced ${p.n === 1 ? p.category : word(p.category)} you've got.`,
      ],
      task: (p) =>
        `Show the name and price of the ${p.n === 1 ? '' : `${p.n} `}${p.dir === 'DESC' ? 'most expensive' : 'cheapest'} ${p.category} ${p.n === 1 ? 'item' : 'items'}.`,
      hints: [
        () => 'Sort first, then keep only the first rows.',
        (p) => `LIMIT ${p.n} keeps the first ${p.n}. It goes at the very end, after ORDER BY.`,
        (p) => `… ORDER BY price ${p.dir} LIMIT ${p.n};`,
      ],
      success: () => 'Just what I needed. No scrolling!',
    },
  },
  {
    id: 'each-once',
    concept: 'distinct',
    station: 'menu-board',
    variants: [
      { key: 'category', params: { column: 'category', table: 'menu_items' }, buys: [buy(4)] },
    ],
    solution: (p) => `SELECT DISTINCT ${p.column} FROM ${p.table};`,
    input: (p) => ({ kind: 'fill-blank', template: `SELECT ___ ${p.column} FROM ${p.table};`, answers: ['DISTINCT'] }),
    text: {
      title: () => 'Each category once',
      lines: [
        () => 'What kinds of things do you sell? Just the categories — each one only once, please.',
        () => "I'm writing a newsletter. List the categories on your menu, without repeats.",
      ],
      task: () => 'Show every category in menu_items, each one only once.',
      hints: [
        () => 'Plain SELECT category repeats a category for every item.',
        () => 'DISTINCT right after SELECT keeps each value once.',
        () => 'SELECT DISTINCT category FROM menu_items;',
      ],
      success: () => 'So tidy! Coffee, tea, pastry… and a mystery "other".',
    },
  },
  {
    id: 'each-ingredient-once',
    concept: 'distinct',
    station: 'recipe-book',
    variants: [{ key: 'ingredient', params: { column: 'ingredient', table: 'recipes' }, buys: [buy(17)] }],
    solution: (p) => `SELECT DISTINCT ${p.column} FROM ${p.table};`,
    input: (p) => ({ kind: 'fill-blank', template: `SELECT ___ ${p.column} FROM ${p.table};`, answers: ['DISTINCT'] }),
    text: {
      title: () => 'Every ingredient once',
      lines: [
        () => 'Which ingredients do you cook with? Each one once, not once per recipe.',
        () => "I have allergies. Give me the list of ingredients in your recipes, without repeats.",
      ],
      task: () => 'Show every ingredient in recipes, each one only once.',
      hints: [
        () => 'Many recipes use the same ingredient, so plain SELECT repeats it.',
        () => 'DISTINCT right after SELECT keeps each value once.',
        () => 'SELECT DISTINCT ingredient FROM recipes;',
      ],
      success: () => 'Good, now I can check the list properly.',
    },
  },
  {
    id: 'each-product-once',
    concept: 'distinct',
    station: 'stock-ledger',
    variants: [{ key: 'product', params: { column: 'product', table: 'suppliers' }, buys: [buy(11)] }],
    solution: (p) => `SELECT DISTINCT ${p.column} FROM ${p.table};`,
    input: (p) => ({ kind: 'fill-blank', template: `SELECT ___ ${p.column} FROM ${p.table};`, answers: ['DISTINCT'] }),
    text: {
      title: () => 'Every product once',
      lines: [
        () => 'What do your suppliers bring you? Each product once, please.',
        () => "I'm curious what goes into your fridge. List the products, no repeats.",
      ],
      task: () => 'Show every product in suppliers, each one only once.',
      hints: [
        () => 'The same product can have several suppliers, so plain SELECT repeats it.',
        () => 'DISTINCT right after SELECT keeps each value once.',
        () => 'SELECT DISTINCT product FROM suppliers;',
      ],
      success: () => 'Now I know what is in there. Thanks!',
    },
  },
  {
    id: 'margin',
    concept: 'alias',
    station: 'menu-board',
    variants: [
      { key: 'coffee', params: { category: 'coffee' }, buys: [buy(3)] },
      { key: 'sandwich', params: { category: 'sandwich' }, buys: [buy(22)] },
      { key: 'dessert', params: { category: 'dessert' }, buys: [buy(27)] },
      { key: 'tea', params: { category: 'tea' }, buys: [buy(13)] },
    ],
    solution: (p) => `SELECT name, price - cost AS margin FROM menu_items WHERE category = '${p.category}';`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT name, price - cost ___ margin FROM menu_items WHERE category = '${p.category}';`,
      answers: ['AS'],
    }),
    text: {
      title: (p) => `Margin on ${word(p.category)}`,
      lines: [
        (p) => `I run the numbers for the owner. What do we keep on each of the ${word(p.category)}? Call it margin.`,
        (p) => `How much is left of the price after the cost, for every one of your ${word(p.category)}? Name the column margin.`,
      ],
      task: (p) => `Show the name of every ${p.category} item and its margin (price minus cost), with the column named margin.`,
      hints: [
        () => 'You can calculate in a query: price - cost.',
        () => 'AS gives a calculated column a name: … AS margin.',
        (p) => `SELECT name, price - cost AS margin FROM menu_items WHERE category = '${p.category}';`,
      ],
      success: () => 'Now that is a number I can show the owner.',
    },
  },
  {
    id: 'happy-hour',
    concept: 'alias',
    station: 'menu-board',
    variants: [
      { key: 'pastry-0.5', params: { category: 'pastry', off: 0.5 }, buys: [buy(18)] },
      { key: 'coffee-1', params: { category: 'coffee', off: 1 }, buys: [buy(6)] },
      { key: 'dessert-1', params: { category: 'dessert', off: 1 }, buys: [buy(27)] },
    ],
    solution: (p) => `SELECT name, price - ${p.off} AS happy_price FROM menu_items WHERE category = '${p.category}';`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT name, price - ${p.off} AS ___ FROM menu_items WHERE category = '${p.category}';`,
      answers: ['happy_price'],
    }),
    text: {
      title: (p) => `Happy hour: ${word(p.category)}`,
      lines: [
        (p) => `We're planning a happy hour: ${money(p.off)} off every one of the ${word(p.category)}. Show the new prices, in a column called happy_price.`,
        (p) => `What would the ${word(p.category)} cost with ${money(p.off)} off? Call the new price happy_price.`,
      ],
      task: (p) => `Show the name of every ${p.category} item and its price minus ${money(p.off)}, as happy_price.`,
      hints: [
        () => 'Calculate the new price right in the SELECT: price - the discount.',
        () => 'Give the calculation a name with AS happy_price.',
        (p) => `SELECT name, price - ${p.off} AS happy_price FROM menu_items WHERE category = '${p.category}';`,
      ],
      success: () => 'Happy hour it is. The students will love it.',
    },
  },
  {
    id: 'priciest-known',
    concept: 'sort-nulls',
    station: 'menu-board',
    // Hot Chocolate has no price: sorted DESC, its NULL comes first unless it is filtered out.
    variants: [
      { key: '1', params: { n: 1 }, buys: [buy(23)] },
      { key: '2', params: { n: 2 }, buys: [buy(22)] },
    ],
    solution: (p) => `SELECT name, price FROM menu_items WHERE price IS NOT NULL ORDER BY price DESC LIMIT ${p.n};`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT name, price FROM menu_items WHERE price ___ ORDER BY price DESC LIMIT ${p.n};`,
      answers: ['IS NOT NULL'],
    }),
    text: {
      title: (p) => (p.n === 1 ? 'The priciest item' : `The ${count(p.n)} priciest items`),
      lines: [
        (p) =>
          p.n === 1
            ? "What's the most expensive thing on your menu? Make sure it's a real price, not a blank."
            : `Which ${count(p.n)} items cost the most? Only real prices — skip anything without one.`,
        (p) => `Top ${p.n} by price, please. If an item has no price, it doesn't count.`,
      ],
      task: (p) => `Show the name and price of the ${p.n === 1 ? '' : `${p.n} `}most expensive ${p.n === 1 ? 'item' : 'items'}, leaving out items with no price.`,
      hints: [
        () => 'Sort by price from big to small, keep the first rows — but look at what comes first.',
        () => 'With DESC, PostgreSQL puts NULL first. Leave empty prices out with WHERE price IS NOT NULL.',
        (p) => `… WHERE price IS NOT NULL ORDER BY price DESC LIMIT ${p.n};`,
      ],
      success: () => 'A real price at the top. That is the one I wanted.',
    },
  },
  {
    id: 'costliest-known',
    concept: 'sort-nulls',
    station: 'menu-board',
    // Banana Bread has no cost, so a DESC sort puts it first unless it is filtered out.
    variants: [
      { key: '1', params: { n: 1 }, buys: [buy(23)] },
      { key: '2', params: { n: 2 }, buys: [buy(22)] },
      { key: '3', params: { n: 3 }, buys: [buy(24)] },
    ],
    solution: (p) => `SELECT name, cost FROM menu_items WHERE cost IS NOT NULL ORDER BY cost DESC LIMIT ${p.n};`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT name, cost FROM menu_items WHERE cost IS NOT NULL ORDER BY cost ___ LIMIT ${p.n};`,
      answers: ['DESC'],
    }),
    text: {
      title: (p) => (p.n === 1 ? 'Our costliest item' : `The ${count(p.n)} costliest items`),
      lines: [
        (p) =>
          p.n === 1
            ? 'Which item costs us the most to make? Only items where we know the cost.'
            : `Which ${count(p.n)} items cost the most to make? Skip the ones with no cost on file.`,
        (p) => `Top ${p.n} by cost, biggest first. Items with a missing cost don't count.`,
      ],
      task: (p) => `Show the name and cost of the ${p.n === 1 ? '' : `${p.n} `}items that cost the most to make, leaving out items with no cost.`,
      hints: [
        () => 'Sort by cost from big to small, keep the first rows — and mind the empty costs.',
        () => 'With DESC, NULL values come first. Filter them out with IS NOT NULL.',
        (p) => `… WHERE cost IS NOT NULL ORDER BY cost DESC LIMIT ${p.n};`,
      ],
      success: () => 'Good to know where the money goes.',
    },
  },
];

