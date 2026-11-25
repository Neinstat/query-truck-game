/**
 * Week 5 · Regulars & Recipes order templates (GAME_DESIGN.md §6): `JOIN … ON` with table aliases,
 * `LEFT JOIN … IS NULL`, `JOIN` + `GROUP BY`, and the regulars (`sales` + `customers`). Answers that
 * read `sales` are graded on the data as it is right now (today's own sales are walk-ins with no
 * customer), so templates that read `sales` per group do not sort, except "the usual", whose top
 * item is unique for every regular (tested). Text is English here; Indonesian lives in
 * locales/id/templates.week5.ts.
 */
import type { OrderTemplate, Purchase } from './templates';

const buy = (itemId: number, quantity = 1): Purchase => ({ itemId, quantity });

const REVENUE = 'SUM(s.quantity * s.unit_price)';
const ON_ITEM = 'ON m.item_id = r.item_id';
const ON_SALE_ITEM = 'ON m.item_id = s.item_id';
const ON_SALE_CUSTOMER = 'ON c.customer_id = s.customer_id';

/** Menu items customers ask about by name (the recipes of each one are in the recipe binders). */
export const WEEK5_ITEMS: Record<string, string> = { 'Latte': 'Latte', 'Croissant': 'Croissant', 'Cheesecake': 'Cheesecake', 'Ham & Cheese Toastie': 'Ham & Cheese Toastie' };

export const WEEK5_TEMPLATES: readonly OrderTemplate[] = [
  {
    id: 'uses-ingredient',
    concept: 'join',
    station: 'recipe-book',
    variants: ['milk', 'butter', 'eggs', 'cinnamon'].map((ing, i) => ({ key: ing, params: { ingredient: ing }, buys: [buy([4, 17, 26, 20][i])] })),
    solution: (p) => `SELECT m.name FROM recipes r JOIN menu_items m ${ON_ITEM} WHERE r.ingredient = '${p.ingredient}';`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT m.name FROM recipes r ___ menu_items m ${ON_ITEM} WHERE r.ingredient = '${p.ingredient}';`,
      answers: ['JOIN'],
    }),
    text: {
      title: (p) => `Made with ${p.ingredient}`,
      lines: [
        (p) => `I am allergic to some things, so: which menu items use ${p.ingredient}? Names, please.`,
        (p) => `The recipe binders know the ingredients, but only by item number. Which items by name contain ${p.ingredient}?`,
      ],
      task: (p) => `Show the name of every menu item whose recipe uses ${p.ingredient}.`,
      hints: [
        () => 'recipes only has item numbers. The names live in menu_items, so join the two tables.',
        (p) => `JOIN menu_items m ${ON_ITEM}, then keep the rows with WHERE r.ingredient = '${p.ingredient}'.`,
        (p) => `SELECT m.name FROM recipes r JOIN menu_items m ${ON_ITEM} WHERE r.ingredient = '${p.ingredient}';`,
      ],
      success: () => 'Good to know before I order. Thank you!',
    },
  },
  {
    id: 'ingredient-amounts',
    concept: 'join',
    station: 'recipe-book',
    variants: [
      { key: 'milk', params: { ingredient: 'milk' }, buys: [buy(3)] },
      { key: 'butter', params: { ingredient: 'butter' }, buys: [buy(18)] },
      { key: 'sugar', params: { ingredient: 'sugar' }, buys: [buy(27)] },
    ],
    solution: (p) => `SELECT m.name, r.amount, r.unit FROM recipes r JOIN menu_items m ${ON_ITEM} WHERE r.ingredient = '${p.ingredient}';`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT m.name, r.amount, r.unit FROM recipes r JOIN menu_items m ${ON_ITEM} WHERE r.ingredient = ___;`,
      answers: [`'${p.ingredient}'`],
    }),
    text: {
      title: (p) => `How much ${p.ingredient}?`,
      lines: [
        (p) => `I plan the shopping. For every item with ${p.ingredient} in it, how much goes in? Name, amount and unit.`,
        (p) => `List the items that use ${p.ingredient} and how much of it each takes, with the unit.`,
      ],
      task: (p) => `Show the name, amount and unit of ${p.ingredient} for every menu item that uses it.`,
      hints: [
        () => 'The amount is in recipes, the name in menu_items: join them on the item number.',
        (p) => `JOIN menu_items m ${ON_ITEM} WHERE r.ingredient = '${p.ingredient}'. Write the columns with their alias (m.name, r.amount).`,
        (p) => `SELECT m.name, r.amount, r.unit FROM recipes r JOIN menu_items m ${ON_ITEM} WHERE r.ingredient = '${p.ingredient}';`,
      ],
      success: () => 'That is the shopping list sorted. Thanks!',
    },
  },
  {
    id: 'item-recipe',
    concept: 'join',
    station: 'recipe-book',
    variants: Object.values(WEEK5_ITEMS).map((name, i) => ({ key: name, params: { item: name }, buys: [buy([4, 17, 25, 22][i])] })),
    solution: (p) => `SELECT r.ingredient, r.amount, r.unit FROM menu_items m JOIN recipes r ${ON_ITEM} WHERE m.name = '${p.item}';`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT r.ingredient, r.amount, r.unit FROM menu_items m JOIN recipes r ___ WHERE m.name = '${p.item}';`,
      answers: [ON_ITEM],
    }),
    text: {
      title: (p) => `What is in the ${p.item}?`,
      lines: [
        (p) => `What goes into the ${p.item}? I want each ingredient with its amount and unit.`,
        (p) => `Read me the recipe of the ${p.item}: ingredient, amount, unit.`,
      ],
      task: (p) => `Show the ingredient, amount and unit of every line in the recipe of the ${p.item}.`,
      hints: [
        () => 'You know the name, but recipes only knows the item number: join menu_items to recipes.',
        (p) => `JOIN recipes r ${ON_ITEM} and filter with WHERE m.name = '${p.item}'.`,
        (p) => `SELECT r.ingredient, r.amount, r.unit FROM menu_items m JOIN recipes r ${ON_ITEM} WHERE m.name = '${p.item}';`,
      ],
      success: () => 'So that is the secret. Lovely.',
    },
  },
  {
    id: 'no-recipe',
    concept: 'left-join',
    station: 'recipe-book',
    variants: [
      { key: 'name', params: { cols: 'm.name' }, buys: [buy(2)] },
      { key: 'name-category', params: { cols: 'm.name, m.category' }, buys: [buy(10)] },
    ],
    solution: (p) => `SELECT ${p.cols} FROM menu_items m LEFT JOIN recipes r ${ON_ITEM} WHERE r.recipe_id IS NULL;`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT ${p.cols} FROM menu_items m LEFT JOIN recipes r ${ON_ITEM} WHERE r.recipe_id ___ NULL;`,
      answers: ['IS'],
    }),
    text: {
      title: () => 'Items without a recipe',
      lines: [
        (p) => `I am writing a training sheet from the binders. Is any menu item missing its recipe? Show ${p.cols === 'm.name' ? 'its name' : 'its name and category'}.`,
        (p) => `Which items on the menu have no recipe at all? ${p.cols === 'm.name' ? 'Just the name' : 'Name and category'}, please.`,
      ],
      task: (p) => `Show the ${p.cols === 'm.name' ? 'name' : 'name and category'} of every menu item that has no row in recipes.`,
      hints: [
        () => 'Start from menu_items so every item stays, then look for the ones where nothing matched.',
        () => 'LEFT JOIN recipes keeps items without a match and fills the recipe columns with NULL. Test r.recipe_id IS NULL.',
        (p) => `SELECT ${p.cols} FROM menu_items m LEFT JOIN recipes r ${ON_ITEM} WHERE r.recipe_id IS NULL;`,
      ],
      success: () => 'Of course, that one was never written down. Time to ask the owner.',
    },
  },
  {
    id: 'never-sold',
    concept: 'left-join',
    station: 'cash-register',
    variants: [
      { key: 'name', params: { cols: 'm.name' }, buys: [buy(1)] },
      { key: 'name-price', params: { cols: 'm.name, m.price' }, buys: [buy(3)] },
    ],
    solution: (p) => `SELECT ${p.cols} FROM menu_items m LEFT JOIN sales s ${ON_SALE_ITEM} WHERE s.sale_id IS NULL;`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT ${p.cols} FROM menu_items m ___ JOIN sales s ${ON_SALE_ITEM} WHERE s.sale_id IS NULL;`,
      answers: ['LEFT'],
    }),
    text: {
      title: () => 'Never sold',
      lines: [
        (p) => `Is anything on the menu that nobody ever bought? Show ${p.cols === 'm.name' ? 'the name' : 'the name and the price'}.`,
        (p) => `Which items have never been rung up at the till? ${p.cols === 'm.name' ? 'Names only' : 'Name and price'}.`,
      ],
      task: (p) => `Show the ${p.cols === 'm.name' ? 'name' : 'name and price'} of every menu item that has no sales at all.`,
      hints: [
        () => 'Keep every menu item, and look for the ones with no matching sale.',
        () => 'Start from menu_items, LEFT JOIN sales, and test a sales column with IS NULL.',
        (p) => `SELECT ${p.cols} FROM menu_items m LEFT JOIN sales s ${ON_SALE_ITEM} WHERE s.sale_id IS NULL;`,
      ],
      success: () => 'Two dead items. Maybe the menu is a bit too long.',
    },
  },
  {
    id: 'never-ordered',
    concept: 'left-join',
    station: 'cash-register',
    variants: [
      { key: 'name', params: { cols: 'c.name' }, buys: [buy(4)] },
      { key: 'name-joined', params: { cols: 'c.name, c.joined_on' }, buys: [buy(2)] },
    ],
    solution: (p) => `SELECT ${p.cols} FROM customers c LEFT JOIN sales s ${ON_SALE_CUSTOMER} WHERE s.sale_id IS NULL;`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT ${p.cols} FROM customers c LEFT JOIN sales s ${ON_SALE_CUSTOMER} WHERE s.sale_id ___ NULL;`,
      answers: ['IS'],
    }),
    text: {
      title: () => 'Signed up, never came',
      lines: [
        (p) => `Some people filled in a loyalty card and never ordered. Who are they? ${p.cols === 'c.name' ? 'Names' : 'Names and the date they joined'}, please.`,
        (p) => `Which customers have no sales at all? Show ${p.cols === 'c.name' ? 'their names' : 'their names and join dates'}.`,
      ],
      task: (p) => `Show the ${p.cols === 'c.name' ? 'name' : 'name and joined_on date'} of every customer who has no sales.`,
      hints: [
        () => 'Start from customers so every customer stays, then look for the ones with no matching sale.',
        () => 'customers LEFT JOIN sales, then WHERE s.sale_id IS NULL.',
        (p) => `SELECT ${p.cols} FROM customers c LEFT JOIN sales s ${ON_SALE_CUSTOMER} WHERE s.sale_id IS NULL;`,
      ],
      success: () => 'I will send each of them a free cookie. Thank you!',
    },
  },
  {
    id: 'per-category',
    concept: 'join-group',
    station: 'cash-register',
    variants: [
      { key: 'units', params: { measure: 'SUM(s.quantity)', alias: 'units', about: 'units sold' }, buys: [buy(4)] },
      { key: 'revenue', params: { measure: REVENUE, alias: 'revenue', about: 'revenue' }, buys: [buy(17)] },
      { key: 'lines', params: { measure: 'COUNT(*)', alias: 'sales_lines', about: 'number of sales lines' }, buys: [buy(25)] },
    ],
    solution: (p) => `SELECT m.category, ${p.measure} AS ${p.alias} FROM sales s JOIN menu_items m ${ON_SALE_ITEM} GROUP BY m.category;`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT m.category, ${p.measure} AS ${p.alias} FROM sales s JOIN menu_items m ${ON_SALE_ITEM} GROUP BY ___;`,
      answers: ['m.category'],
    }),
    text: {
      title: (p) => `${String(p.about).replace(/^./, (c) => c.toUpperCase())} per category`,
      lines: [
        (p) => `Coffee, pastries, sandwiches… I want the ${p.about} for each category, named ${p.alias}.`,
        (p) => `Give me the ${p.about} per menu category: the category and ${p.alias}. One row each.`,
      ],
      task: (p) => `Show each category (from menu_items) with its ${p.about} (${p.alias}), one row per category.`,
      hints: [
        () => 'sales knows the item, menu_items knows the category: join them first, then group.',
        (p) => `JOIN menu_items m ${ON_SALE_ITEM}, then GROUP BY m.category with ${p.measure}.`,
        (p) => `SELECT m.category, ${p.measure} AS ${p.alias} FROM sales s JOIN menu_items m ${ON_SALE_ITEM} GROUP BY m.category;`,
      ],
      success: () => 'Now I can plan the ordering by category.',
    },
  },
  {
    id: 'per-item-name',
    concept: 'join-group',
    station: 'cash-register',
    variants: [
      { key: 'revenue', params: { measure: REVENUE, alias: 'revenue', about: 'revenue' }, buys: [buy(3)] },
      { key: 'units', params: { measure: 'SUM(s.quantity)', alias: 'units', about: 'units sold' }, buys: [buy(2)] },
    ],
    solution: (p) => `SELECT m.name, ${p.measure} AS ${p.alias} FROM sales s JOIN menu_items m ${ON_SALE_ITEM} GROUP BY m.name;`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT m.name, ${p.measure} AS ${p.alias} FROM sales s JOIN menu_items m ${ON_SALE_ITEM} GROUP BY ___;`,
      answers: ['m.name'],
    }),
    text: {
      title: (p) => `${String(p.about).replace(/^./, (c) => c.toUpperCase())} by item name`,
      lines: [
        (p) => `Numbers by item_id mean nothing to me. Show each item by name with its ${p.about}, named ${p.alias}.`,
        (p) => `I want names, not numbers: every item's name and its ${p.about} (${p.alias}).`,
      ],
      task: (p) => `Show each item's name (m.name) with its ${p.about} (${p.alias}), one row per item.`,
      hints: [
        () => 'The name lives in menu_items: join it to sales on the item number, then group by the name.',
        (p) => `JOIN menu_items m ${ON_SALE_ITEM}, GROUP BY m.name, and ${p.measure} AS ${p.alias}.`,
        (p) => `SELECT m.name, ${p.measure} AS ${p.alias} FROM sales s JOIN menu_items m ${ON_SALE_ITEM} GROUP BY m.name;`,
      ],
      success: () => 'Names at last. This I can read.',
    },
  },
  {
    id: 'regular-visits',
    concept: 'regulars',
    station: 'cash-register',
    variants: [
      { key: '35', params: { min: 35 }, buys: [buy(4)] },
      { key: '30', params: { min: 30 }, buys: [buy(3)] },
    ],
    solution: (p) =>
      `SELECT c.name, COUNT(DISTINCT s.order_id) AS visits FROM sales s JOIN customers c ${ON_SALE_CUSTOMER} GROUP BY c.name HAVING COUNT(DISTINCT s.order_id) >= ${p.min};`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT c.name, COUNT(DISTINCT s.order_id) AS visits FROM sales s JOIN customers c ${ON_SALE_CUSTOMER} GROUP BY c.name HAVING COUNT(DISTINCT s.order_id) >= ___;`,
      answers: [String(p.min)],
    }),
    text: {
      title: (p) => `Regulars: ${p.min}+ visits`,
      lines: [
        (p) => `I want to say thank you to our regulars by name. Who came ${p.min} times or more? Show the name and visits.`,
        (p) => `Names, not customer numbers: everyone with ${p.min} or more orders, with the number as visits.`,
      ],
      task: (p) => `Show the name and visits (distinct orders) of every customer with at least ${p.min} visits.`,
      hints: [
        () => 'Join sales to customers to get the name, count each order_id once per customer, then keep the big groups.',
        (p) => `JOIN customers c ${ON_SALE_CUSTOMER}, GROUP BY c.name, HAVING COUNT(DISTINCT s.order_id) >= ${p.min}.`,
        (p) => `SELECT c.name, COUNT(DISTINCT s.order_id) AS visits FROM sales s JOIN customers c ${ON_SALE_CUSTOMER} GROUP BY c.name HAVING COUNT(DISTINCT s.order_id) >= ${p.min};`,
      ],
      success: () => 'Those names go on the thank-you board.',
    },
  },
  {
    id: 'my-usual',
    concept: 'regulars',
    station: 'cash-register',
    // Each regular's top item is unique (no tie for first place), so one answer is right.
    variants: [
      { key: 'Ava Brooks', params: { who: 'Ava Brooks' }, buys: [buy(1)] },
      { key: 'Ben Carter', params: { who: 'Ben Carter' }, buys: [buy(4)] },
      { key: 'Henry Irwin', params: { who: 'Henry Irwin' }, buys: [buy(4)] },
      { key: 'Grace Hughes', params: { who: 'Grace Hughes' }, buys: [buy(3)] },
    ],
    solution: (p) =>
      `SELECT m.name, SUM(s.quantity) AS units FROM sales s JOIN customers c ${ON_SALE_CUSTOMER} JOIN menu_items m ${ON_SALE_ITEM} WHERE c.name = '${p.who}' GROUP BY m.name ORDER BY units DESC LIMIT 1;`,
    input: (p) => ({
      kind: 'fill-blank',
      template: `SELECT m.name, SUM(s.quantity) AS units FROM sales s JOIN customers c ${ON_SALE_CUSTOMER} JOIN menu_items m ${ON_SALE_ITEM} WHERE c.name = '${p.who}' GROUP BY m.name ORDER BY units ___ LIMIT 1;`,
      answers: ['DESC'],
    }),
    text: {
      title: () => "What's my usual?",
      lines: [
        (p) => `Hi, it is ${p.who} again! You know what I always have, right? Look it up: the item and how many I have had.`,
        (p) => `${p.who} here. What is my usual? Show the item I bought most (name and units).`,
      ],
      task: (p) => `Show the name and total units (units) of the item that ${p.who} has bought most, only that one row.`,
      hints: [
        () => 'Three tables meet here: sales links the customer to the item. Join both, filter on the customer name, group by item.',
        (p) => `JOIN customers c ${ON_SALE_CUSTOMER} JOIN menu_items m ${ON_SALE_ITEM}, WHERE c.name = '${p.who}', GROUP BY m.name, ORDER BY units DESC LIMIT 1.`,
        (p) => `SELECT m.name, SUM(s.quantity) AS units FROM sales s JOIN customers c ${ON_SALE_CUSTOMER} JOIN menu_items m ${ON_SALE_ITEM} WHERE c.name = '${p.who}' GROUP BY m.name ORDER BY units DESC LIMIT 1;`,
      ],
      success: () => "Yes, that is my usual! See you tomorrow.",
    },
  },
];
