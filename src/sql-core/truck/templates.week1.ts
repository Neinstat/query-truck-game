/**
 * Week 1 · Opening Week order templates (GAME_DESIGN.md §6): `SELECT *`, one column, several
 * columns, and `FROM` at each object of the truck (the menu board, the recipe binders, the
 * fridge). The query is built from word blocks, with a decoy or two. Text is English here;
 * Indonesian lives in locales/id/templates.week1.ts.
 */
import type { StationId } from '../stations';
import type { Params, OrderTemplate, Purchase, TemplateText } from './templates';

const buy = (itemId: number, quantity = 1): Purchase => ({ itemId, quantity });

/** The words of a query as blocks: `SELECT name, price FROM menu_items;` → SELECT name , price FROM menu_items ; */
export function queryTokens(sql: string): string[] {
  return sql.replace(/,/g, ' , ').replace(/;/g, ' ;').split(/\s+/).filter(Boolean);
}

/**
 * The blocks for a query: its words plus the decoys, in a fixed scrambled order (never the
 * answer order, which would give the answer away).
 */
export function blocksFor(sql: string, decoys: readonly string[]): string[] {
  const all = [...queryTokens(sql), ...decoys];
  const key = (b: string, i: number) => [...`${b}${i}`].reduce((h, c) => Math.imul(h ^ c.charCodeAt(0), 0x01000193) >>> 0, 0x811c9dc5);
  const scrambled = all.map((b, i) => ({ b, k: key(b, i) })).sort((x, y) => x.k - y.k).map((x) => x.b);
  return scrambled.join(' ') === all.join(' ') ? [...scrambled.slice(1), scrambled[0]] : scrambled;
}

/** How customers say a column in a sentence. */
export const COLUMN_WORDS: Record<string, string> = {
  name: 'names',
  category: 'categories',
  price: 'prices',
  cost: 'costs',
  description: 'descriptions',
  item_id: 'item numbers',
  ingredient: 'ingredients',
  amount: 'amounts',
  unit: 'units',
  product: 'products',
  delivery_time: 'delivery times',
};
const words = (columns: string | number) =>
  String(columns)
    .split(/,\s*/)
    .map((c) => COLUMN_WORDS[c] ?? c)
    .join(', ')
    .replace(/, ([^,]*)$/, ' and $1');

type Place = { table: string; station: StationId; others: readonly string[] };
const MENU: Place = { table: 'menu_items', station: 'menu-board', others: ['recipes', 'suppliers'] };
const RECIPES: Place = { table: 'recipes', station: 'recipe-book', others: ['menu_items', 'inventory'] };
const SUPPLIERS: Place = { table: 'suppliers', station: 'stock-ledger', others: ['inventory', 'menu_items'] };

const everything = (id: string, place: Place, lines: TemplateText['lines'], buys: readonly Purchase[][], title: string, success: string): OrderTemplate => ({
  id,
  concept: 'select-all',
  station: place.station,
  variants: buys.map((b, i) => ({ key: String.fromCharCode(97 + i), params: {}, buys: b })),
  solution: () => `SELECT * FROM ${place.table};`,
  input: () => ({ kind: 'blocks', blocks: blocksFor(`SELECT * FROM ${place.table};`, ['name', place.others[0]]) }),
  text: {
    title: () => title,
    lines,
    task: () => `Show every column of every row in the ${place.table} table.`,
    hints: [
      () => `You want the whole ${place.table} table, with nothing left out.`,
      () => 'SELECT, then * for "every column", then FROM and the table name.',
      () => `SELECT * FROM … — which table is it? Look at the tables in the lens.`,
    ],
    success: () => success,
  },
});

/** One or several columns of a table: the variants say which. */
const columns = (
  id: string,
  concept: 'select-column' | 'select-columns',
  place: Place,
  variants: readonly { key: string; columns: string; decoy: string; buys: readonly Purchase[] }[],
  lines: TemplateText['lines'],
  success: string,
): OrderTemplate => ({
  id,
  concept,
  station: place.station,
  variants: variants.map((v) => ({ key: v.key, params: { columns: v.columns, decoy: v.decoy }, buys: [v.buys[0]] })),
  solution: (p) => `SELECT ${p.columns} FROM ${place.table};`,
  input: (p) => ({
    kind: 'blocks',
    blocks: blocksFor(`SELECT ${p.columns} FROM ${place.table};`, [String(p.decoy), concept === 'select-column' ? ',' : place.others[0]]),
  }),
  text: {
    title: (p) => (concept === 'select-column' ? `Just the ${words(p.columns)}` : `The ${words(p.columns)}`),
    lines,
    task: (p) => `Show only the ${String(p.columns).includes(',') ? 'columns' : 'column'} ${p.columns} from the ${place.table} table.`,
    hints: [
      (p) => `Only ${String(p.columns).includes(',') ? 'these columns' : 'this one column'} — not the whole table.`,
      (p) => (String(p.columns).includes(',') ? 'List the column names after SELECT, with a comma between them.' : 'Put the column name right after SELECT, instead of *.'),
      (p) => `SELECT ${p.columns} FROM …;`,
    ],
    success: () => success,
  },
});

const v = (key: string, cols: string, decoy: string, itemId: number) => ({ key, columns: cols, decoy, buys: [buy(itemId)] });

/** Lines use `p.columns`, spoken as words. */
const say = (...f: ((w: string, p: Params) => string)[]): TemplateText['lines'] => f.map((g) => (p: Params) => g(words(p.columns), p));

export const WEEK1_TEMPLATES: readonly OrderTemplate[] = [
  everything(
    'menu-all',
    MENU,
    [
      () => "I'm new in town. Can I see everything on your menu board, all the details?",
      () => 'Show me the whole menu, every column. I like to know what I am ordering.',
    ],
    [[buy(1)], [buy(2)], [buy(3)]],
    'The Whole Menu',
    'Wow, so much detail. A flat white, please!',
  ),
  everything(
    'recipes-all',
    RECIPES,
    [
      () => 'I am curious how it all gets made. Can I see the whole recipe binder?',
      () => 'My cousin wants to open a truck. May I look at every recipe you have written down?',
    ],
    [[buy(4)], [buy(5)]],
    'The Recipe Binder',
    'So much butter! I will not tell my cousin.',
  ),
  everything(
    'suppliers-all',
    SUPPLIERS,
    [
      () => 'Who brings you all this stuff? Show me the whole supplier list.',
      () => 'I work in a shop nearby. Could I see everything you know about your suppliers?',
    ],
    [[buy(6)], [buy(7)]],
    'Who Supplies Us?',
    'Interesting. Maybe we can swap tips.',
  ),
  columns(
    'menu-column',
    'select-column',
    MENU,
    [
      v('name', 'name', 'price', 1),
      v('category', 'category', 'name', 2),
      v('price', 'price', 'name', 3),
      v('description', 'description', 'name', 4),
    ],
    say(
      (w) => `All those columns make my head spin! Could I see just the ${w}?`,
      (w) => `Only the ${w} of everything you sell, please. Nothing else.`,
    ),
    'Much easier to read. Thank you!',
  ),
  columns(
    'recipe-column',
    'select-column',
    RECIPES,
    [v('ingredient', 'ingredient', 'amount', 5), v('unit', 'unit', 'ingredient', 6)],
    say(
      (w) => `I only care about the ${w} in your recipes. Could you show just that?`,
      (w) => `Just the ${w} from the recipe binder, please. One column.`,
    ),
    'Exactly what I wanted to see.',
  ),
  columns(
    'supplier-column',
    'select-column',
    SUPPLIERS,
    [v('name', 'name', 'product', 7), v('product', 'product', 'name', 8)],
    say(
      (w) => `Quick question: what are the ${w} on your supplier list? Only that column.`,
      (w) => `Show me just the ${w} of your suppliers. I am in a hurry.`,
    ),
    'Short and sweet. Thanks!',
  ),
  columns(
    'menu-columns',
    'select-columns',
    MENU,
    [
      v('name-price', 'name, price', 'cost', 1),
      v('name-category', 'name, category', 'price', 2),
      v('name-cost', 'name, cost', 'price', 3),
      v('name-price-cost', 'name, price, cost', 'category', 4),
    ],
    say(
      (w) => `Could I see the ${w} on the menu? Just those columns.`,
      (w) => `I'd like the ${w} of every item, side by side.`,
    ),
    'A tidy little table. Perfect.',
  ),
  columns(
    'recipe-columns',
    'select-columns',
    RECIPES,
    [v('item-ingredient', 'item_id, ingredient', 'amount', 5), v('ingredient-amount-unit', 'ingredient, amount, unit', 'item_id', 6)],
    say(
      (w) => `From the recipe binder I need the ${w}, nothing more.`,
      (w) => `Could you list the ${w} from your recipes?`,
    ),
    'Now I can cook along at home.',
  ),
  columns(
    'supplier-columns',
    'select-columns',
    SUPPLIERS,
    [v('name-product', 'name, product', 'unit', 7), v('name-delivery', 'name, delivery_time', 'product', 8)],
    say(
      (w) => `For my own list I need the ${w} of your suppliers.`,
      (w) => `Show me the ${w} from the supplier list, please.`,
    ),
    'Thanks, that goes straight into my notes.',
  ),
];
