/**
 * How to play (GAME_DESIGN.md §4, §7): the guide opened from the pause menu, the title screen, or
 * the book on the truck's back counter. English here; Indonesian in locales/id/guide.ts (same
 * shape, tested). Table names stay in English.
 */
import type { Lang } from '../sql-core/feedback';
import type { TruckObjectId } from '../sql-core/truck/objects';
import { GUIDE_ID } from './locales/id/guide';

export type GuideItem = {
  icon: string;
  name: string;
  /** The truck object it shows: its picture (from the game) and its stop on the truck tour. */
  object?: TruckObjectId;
  /** Where it is in the truck. */
  where?: string;
  tables?: string[];
  text: string;
  /** A question a customer might ask that is answered here. */
  example?: string;
};
export type GuidePage = { id: string; icon: string; title: string; paragraphs: string[]; items?: GuideItem[] };

export const GUIDE: readonly GuidePage[] = [
  {
    id: 'job',
    icon: '🚚',
    title: 'Your job',
    paragraphs: [
      "You are the new hire at Query Truck, a coffee truck that parks somewhere new in the city every day: the park, a skatepark under the overpass, behind the school, the harbour pier, the town square. It's open from 10:00 to 17:00.",
      'Customers queue at the window. Each one asks something about the menu, the stock or the recipes. You find the answer with SQL — and the answer is their order.',
      'When your result is right, hand the order over. The truck records the sale in the sales table, so your own work becomes data.',
      'The clock stops while a console or this menu is open: writing SQL is never timed.',
      'Customers get impatient while they wait in line (😊 → 😐 → 😠). Quick service earns bigger tips. Someone who waits too long leaves, and their question comes back another day. You never lose.',
    ],
  },
  {
    id: 'controls',
    icon: '🎮',
    title: 'Controls',
    paragraphs: ['Just move the mouse to look around — no need to click first. Esc frees the mouse and pauses the game.'],
    items: [
      { icon: '⌨️', name: 'W A S D / arrows', text: 'Walk around inside the truck.' },
      { icon: '🖱', name: 'Mouse', text: 'Look around. Aim the dot in the middle at something.' },
      { icon: '👆', name: 'E or click', text: 'Use what the dot points at: the tablet, the fridge, a door…' },
      { icon: '🔍', name: 'L', text: 'Turn the Data Lens on or off.' },
      { icon: '⏸', name: 'Esc', text: 'Pause the game and open the menu (Data Lens, language, this guide…). Enter carries on.' },
    ],
  },
  {
    id: 'truck',
    icon: '🧭',
    title: 'The truck',
    paragraphs: [
      'The truck is your workplace. Each object below holds one part of the company\'s data, and it can only see its own tables — like a real company, where sales, stock and recipes live in different systems.',
      'When a customer orders, the speech bubble says where to answer ("Answer at the fridge"). Walk there, aim at it and press E. Take the tour to fly past every object.',
    ],
    items: [
      {
        icon: '📱',
        object: 'tablet',
        name: 'Tablet — the till',
        where: 'Front counter, right of the serving window',
        tables: ['menu_items', 'sales', 'customers'],
        text: 'Where you answer most customers. It sees the menu (names, categories, prices, and whether each item is available today), every sale the truck has ever made, and the customers with a loyalty card.',
        example: '"Anything under $3?" · "Which coffees can I order today?"',
      },
      {
        icon: '🧊',
        object: 'fridge',
        name: 'Fridge & stock shelves — the storeroom records',
        where: 'Left end of the truck',
        tables: ['inventory', 'suppliers'],
        text: 'What was delivered each day, how much, and at what time it ran out (inventory); and which company supplies each product, when it delivers, and since when (suppliers). Answer stock and delivery questions here.',
        example: '"Who brings your milk now, and when?"',
      },
      {
        icon: '📚',
        object: 'recipe-shelf',
        name: 'Recipe binders — what goes into each item',
        where: 'Back wall, on the right',
        tables: ['recipes', 'menu_items'],
        text: 'One line per ingredient of each menu item, with the amount and unit, next to the menu. Answer ingredient questions here.',
        example: '"How much milk is in each of your drinks?"',
      },
      {
        icon: '📋',
        object: 'menu-board',
        name: 'Menu board — practise freely',
        where: 'Back wall, in the middle',
        tables: ['menu_items'],
        text: 'The menu on the wall. Run any query you like on menu_items to explore and practise. Nothing you run here is graded and no customer is waiting for it.',
      },
      {
        icon: '🚪',
        object: 'back-door',
        name: 'Back door — The Manager',
        where: 'Right end of the truck',
        text: 'Once a day, around 13:30, the door rattles: The Manager knocks. Your boss (in a suit, always in a hurry) wants numbers: today\'s orders, today\'s revenue, last month\'s best sales channel. Open the door, investigate with any queries, pin 📌 the results that prove each answer, then reply. This is the analyst part of the job: answering business questions with data.',
        example: '"How much revenue did we make today?"',
      },
      {
        icon: '📖',
        object: 'guide-book',
        name: 'Guide book — this guide',
        where: 'Back counter, under the menu board',
        text: 'Aim at it and press E whenever you want to read how to play again.',
      },
      {
        icon: '📻',
        object: 'radio',
        name: 'Radio — music while you work',
        where: 'Back counter, next to the coffee machine',
        text: 'Aim at it and press E to change the station: Lo-fi, Café Bossa, Pixel Pop, or off. It remembers your choice.',
      },
    ],
  },
  {
    id: 'lens',
    icon: '🔍',
    title: 'Data Lens',
    paragraphs: [
      'Press L (or the 🔍 button) and the truck turns into a blueprint: every object shows a card with its tables, how many rows they have, and a few sample rows.',
      'Tables the current order needs are starred ★, so the lens also shows you where to look.',
      'Aim at an object: its card lights up. Press E to open its tables and look inside. Press L again to go back.',
    ],
  },
  {
    id: 'sql',
    icon: '✍️',
    title: 'Writing SQL',
    paragraphs: [
      'A new SQL idea comes with a lesson card. You can open it again from any order with "Show the lesson again".',
      'At first you fill in one word of the query. Once you know a concept well you write the whole condition after WHERE, and later the whole query.',
      'Always end your query with a semicolon ;',
      'Stuck? Each order has three hints, from a nudge to almost the answer. ⭐⭐⭐ = no hints and no wrong runs, ⭐⭐ = no hints, ⭐ = correct.',
    ],
  },
  {
    id: 'days',
    icon: '📅',
    title: 'Days & practice',
    paragraphs: [
      'At closing time the summary shows your orders, revenue (with the query that counted it), tips and stars.',
      'It also shows each SQL concept you practised. A concept you got wrong or needed hints for comes back tomorrow; one you know well comes back later. New concepts join a few at a time.',
      'Then open the next day: new customers, new questions, and the sky goes from morning to night once more.',
    ],
  },
];

export const guideFor = (lang: Lang): readonly GuidePage[] => (lang === 'id' ? GUIDE_ID : GUIDE);
