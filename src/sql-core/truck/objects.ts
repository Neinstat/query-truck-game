/**
 * The things in the food truck the player can use (GAME_DESIGN.md §7–§8), and which tables each
 * one sees. Every object is a "station": a PostgreSQL role that may only read its own tables,
 * which teaches that company data lives in many systems. Pure data: no game engine or UI here.
 */
import type { StationId } from '../stations';

export type TruckObjectId = 'tablet' | 'fridge' | 'stock-shelves' | 'menu-board' | 'recipe-shelf' | 'back-door' | 'guide-book' | 'radio' | 'phone' | 'calendar' | 'badge-board';

export const TRUCK_OBJECTS: readonly TruckObjectId[] = ['tablet', 'fridge', 'stock-shelves', 'menu-board', 'recipe-shelf', 'back-door', 'guide-book', 'radio', 'phone', 'calendar', 'badge-board'];

/** The tables an object shows when the player looks around with it (null: nothing to query). */
export const OBJECT_STATION: Record<TruckObjectId, StationId | null> = {
  // The till: sales, customers, and the menu they refer to.
  tablet: 'cash-register',
  // What came in, from whom, and when it ran out.
  fridge: 'stock-ledger',
  // The shelves of boxes next to it (9.8): the same storeroom ledger, where the suppliers' deliveries are kept.
  'stock-shelves': 'stock-ledger',
  'menu-board': 'menu-board',
  // What goes into each item, next to the menu.
  'recipe-shelf': 'recipe-book',
  // The Manager knocks here (Phase 4.11); no data of its own yet.
  'back-door': null,
  // The how-to-play book on the back counter: no data, it opens the guide.
  'guide-book': null,
  // The radio on the back counter: no data, it changes the music.
  radio: null,
  // The phone (truck shop), the wall calendar (days) and the pinboard (badges): menus, no data.
  phone: null,
  calendar: null,
  'badge-board': null,
};

/**
 * Where an order is answered (9.8): the storeroom is two objects, the fridge (`inventory`) and the
 * stock shelves (`suppliers`). Both open the same ledger, so a query joining the two works at
 * either; an order that only reads `suppliers` is answered at the shelves.
 */
export function objectForOrder(station: StationId, tables: readonly string[]): TruckObjectId {
  if (station === 'stock-ledger' && tables.length > 0 && tables.every((t) => t === 'suppliers')) return 'stock-shelves';
  return objectForStation(station);
}

/** Where an order is answered, by its station alone (the fridge for the whole storeroom). */
export function objectForStation(station: StationId): TruckObjectId {
  switch (station) {
    case 'menu-board':
    case 'cash-register':
      // Menu questions come from customers at the window: answered on the tablet, which sees the menu.
      return 'tablet';
    case 'stock-ledger':
      return 'fridge';
    case 'recipe-book':
      return 'recipe-shelf';
    case 'back-office':
      return 'back-door';
  }
}
