/**
 * How to play (GAME_DESIGN.md §4, §7): the guide opened from the pause menu, the title screen, or
 * the book on the truck's back counter. English here; Indonesian in locales/id/guide.ts (same
 * shape, tested). Table names stay in English.
 */
import type { Lang } from '../sql-core/feedback';
import { GUIDE_ID } from './locales/id/guide';

export type GuideItem = { icon: string; name: string; tables?: string[]; text: string };
export type GuidePage = { id: string; icon: string; title: string; paragraphs: string[]; items?: GuideItem[] };

export const GUIDE: readonly GuidePage[] = [
  {
    id: 'job',
    icon: '🚚',
    title: 'Your job',
    paragraphs: [
      "You are the new hire at Rolling Roast, a coffee truck parked in a city park. It's open from 10:00 to 17:00.",
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
    paragraphs: ['Click the view to start looking around with the mouse.'],
    items: [
      { icon: '⌨️', name: 'W A S D / arrows', text: 'Walk around inside the truck.' },
      { icon: '🖱', name: 'Mouse', text: 'Look around. Aim the dot in the middle at something.' },
      { icon: '👆', name: 'E or click', text: 'Use what the dot points at: the tablet, the fridge, a door…' },
      { icon: '🔍', name: 'L', text: 'Turn the Data Lens on or off.' },
      { icon: '⏸', name: 'Esc', text: 'Pause the game and open this menu. Esc again to carry on.' },
    ],
  },
  {
    id: 'truck',
    icon: '🧭',
    title: 'The truck',
    paragraphs: [
      'Every object in the truck sees only its own tables — just like a real company, where data lives in different systems. The speech bubble tells you where to answer each order.',
    ],
    items: [
      {
        icon: '📱',
        name: 'Tablet (front counter)',
        tables: ['sales', 'customers', 'menu_items'],
        text: 'The till. Most orders are answered here: prices, categories, what is on the menu.',
      },
      {
        icon: '🧊',
        name: 'Fridge & stock shelves (left end)',
        tables: ['inventory', 'suppliers'],
        text: 'What was delivered, by whom, and when it ran out. Questions about stock and deliveries are answered here.',
      },
      {
        icon: '📚',
        name: 'Recipe binders (back wall)',
        tables: ['recipes', 'menu_items'],
        text: 'What goes into each item, and how much. Questions about ingredients are answered here.',
      },
      {
        icon: '📋',
        name: 'Menu board (back wall)',
        tables: ['menu_items'],
        text: 'Look around the menu any time. Nothing you run here is graded.',
      },
      {
        icon: '🚪',
        name: 'Back door (right end)',
        text: "The Manager — your boss, in a suit — knocks once a day (around 13:30) and asks for numbers: today's orders, today's revenue, last month's best channel. Investigate, pin 📌 the results that prove each answer, then answer. They are bossy, but fair.",
      },
      { icon: '📖', name: 'Guide book (back counter)', text: 'This guide. Open it whenever you like.' },
    ],
  },
  {
    id: 'lens',
    icon: '🔍',
    title: 'Data Lens',
    paragraphs: [
      'Press L (or the 🔍 button) and the truck turns into a blueprint: every object shows a card with its tables, how many rows they have, and a few sample rows.',
      'Tables the current order needs are starred ★, so the lens also shows you where to look.',
      'Click a table name on a card to open it and look inside. Press L again to go back.',
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
