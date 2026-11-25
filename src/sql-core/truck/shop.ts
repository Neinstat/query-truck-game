/**
 * Coins and the truck shop (GAME_DESIGN.md §10, 7.2). The truck starts plain and a bit worn on
 * purpose; coins earned at the window buy upgrades that visibly change it. Coins are worked out
 * from the day logs (like XP), so a replay never pays twice; only what was bought is saved.
 * Pure data: the game reads the resulting look (`truckLook`), the shop screen reads `SHOP_ITEMS`.
 */
import type { Lang } from '../feedback';
import type { DayLog } from './day';

/** Coins for one served order: 10 per star plus the tip (a whole coin per 10 cents of tip). */
export const coinsForOrder = (stars: number, tip: number): number => stars * 10 + Math.round(tip * 10);
/** Coins for a Manager case: 20 per star. */
export const coinsForCase = (stars: number): number => stars * 20;

export const dayCoins = (log: DayLog): number =>
  log.served.reduce((sum, s) => sum + coinsForOrder(s.stars, s.tip), 0) + (log.manager ? coinsForCase(log.manager.stars) : 0);

export const totalCoins = (logs: readonly DayLog[]): number => logs.reduce((sum, log) => sum + dayCoins(log), 0);

export type ShopSlot = 'paint' | 'awning' | 'machine';
export const SHOP_SLOTS: readonly ShopSlot[] = ['machine', 'paint', 'awning'];

export type ShopItem = {
  id: string;
  slot: ShopSlot;
  /** The colour (an ink name) for paint and awning; the tier (0 old, 1 good, 2 modern) for the machine. */
  value: string;
  price: number;
  /** A plain starting item: owned from the start, free. */
  start?: boolean;
  name: { en: string; id: string };
  /** One line about what it does to the truck. */
  text: { en: string; id: string };
};

export const SHOP_ITEMS: readonly ShopItem[] = [
  { id: 'machine-old', slot: 'machine', value: '0', price: 0, start: true,
    name: { en: 'Old dented espresso machine', id: 'Mesin espresso tua yang penyok' },
    text: { en: 'It works. Mostly.', id: 'Masih jalan. Kebanyakan.' } },
  { id: 'machine-good', slot: 'machine', value: '1', price: 600,
    name: { en: 'Red espresso machine', id: 'Mesin espresso merah' },
    text: { en: 'A proper machine with a pressure gauge.', id: 'Mesin yang layak, lengkap dengan alat ukur tekanan.' } },
  { id: 'machine-modern', slot: 'machine', value: '2', price: 1800,
    name: { en: 'Modern chrome espresso machine', id: 'Mesin espresso krom modern' },
    text: { en: 'Shiny steel, two group heads, a glowing display.', id: 'Baja mengilap, dua kepala seduh, layar menyala.' } },
  { id: 'paint-faded', slot: 'paint', value: 'paperShade', price: 0, start: true,
    name: { en: 'Faded paint', id: 'Cat pudar' },
    text: { en: 'The truck\'s original, sun-bleached band.', id: 'Pita asli truck yang pudar kena matahari.' } },
  { id: 'paint-coral', slot: 'paint', value: 'red', price: 300,
    name: { en: 'Coral red', id: 'Merah koral' },
    text: { en: 'The classic Query Truck band.', id: 'Pita klasik Query Truck.' } },
  { id: 'paint-teal', slot: 'paint', value: 'teal', price: 300,
    name: { en: 'Teal', id: 'Hijau toska' },
    text: { en: 'Cool and calm.', id: 'Sejuk dan tenang.' } },
  { id: 'paint-mustard', slot: 'paint', value: 'mustard', price: 400,
    name: { en: 'Mustard', id: 'Kuning mustard' },
    text: { en: 'Sunny, hard to miss.', id: 'Cerah, sulit dilewatkan.' } },
  { id: 'paint-lilac', slot: 'paint', value: 'lilac', price: 500,
    name: { en: 'Lilac', id: 'Ungu lilac' },
    text: { en: 'The rarest colour on the street.', id: 'Warna paling langka di jalan.' } },
  { id: 'awning-plain', slot: 'awning', value: 'paperShade', price: 0, start: true,
    name: { en: 'Plain awning', id: 'Tenda polos' },
    text: { en: 'Washed-out cream stripes.', id: 'Garis krem yang pucat.' } },
  { id: 'awning-teal', slot: 'awning', value: 'teal', price: 250,
    name: { en: 'Teal stripes', id: 'Garis toska' },
    text: { en: 'The awning the truck was built with.', id: 'Tenda bawaan truck ini.' } },
  { id: 'awning-red', slot: 'awning', value: 'red', price: 350,
    name: { en: 'Red stripes', id: 'Garis merah' },
    text: { en: 'Warm and cheerful.', id: 'Hangat dan ceria.' } },
  { id: 'awning-pink', slot: 'awning', value: 'pink', price: 450,
    name: { en: 'Pink stripes', id: 'Garis merah muda' },
    text: { en: 'Pastel and friendly.', id: 'Pastel dan ramah.' } },
];

export const shopItem = (id: string): ShopItem | undefined => SHOP_ITEMS.find((i) => i.id === id);
export const itemName = (item: ShopItem, lang: Lang): string => (lang === 'id' ? item.name.id : item.name.en);
export const itemText = (item: ShopItem, lang: Lang): string => (lang === 'id' ? item.text.id : item.text.en);

/** What the player bought and what is on the truck now. Starting items are always owned. */
export type ShopState = { owned: string[]; equipped: Record<ShopSlot, string> };

const START_ITEMS = SHOP_ITEMS.filter((i) => i.start);

export const newShop = (): ShopState => ({
  owned: START_ITEMS.map((i) => i.id),
  equipped: Object.fromEntries(START_ITEMS.map((i) => [i.slot, i.id])) as Record<ShopSlot, string>,
});

/** Read a saved shop; anything unknown or broken is dropped, so a bad save is a plain truck. */
export function parseShop(raw: string | null): ShopState {
  const shop = newShop();
  if (!raw) return shop;
  try {
    const data = JSON.parse(raw) as { owned?: unknown; equipped?: Record<string, unknown> };
    const owned = new Set(shop.owned);
    for (const id of Array.isArray(data.owned) ? data.owned : []) if (typeof id === 'string' && shopItem(id)) owned.add(id);
    shop.owned = [...owned];
    for (const slot of SHOP_SLOTS) {
      const id = data.equipped?.[slot];
      if (typeof id === 'string' && owned.has(id) && shopItem(id)?.slot === slot) shop.equipped[slot] = id;
    }
  } catch {
    return newShop();
  }
  return shop;
}

/** Coins spent so far. */
export const spent = (shop: ShopState): number => shop.owned.reduce((sum, id) => sum + (shopItem(id)?.price ?? 0), 0);

export type BuyResult = { ok: true; shop: ShopState } | { ok: false; reason: 'owned' | 'poor' | 'unknown' };

/** Buy an item with the coins in hand (earned minus spent) and put it on the truck. */
export function buy(shop: ShopState, id: string, balance: number): BuyResult {
  const item = shopItem(id);
  if (!item) return { ok: false, reason: 'unknown' };
  if (shop.owned.includes(id)) return { ok: false, reason: 'owned' };
  if (item.price > balance) return { ok: false, reason: 'poor' };
  return { ok: true, shop: { owned: [...shop.owned, id], equipped: { ...shop.equipped, [item.slot]: id } } };
}

/** Put an owned item on the truck. */
export function equip(shop: ShopState, id: string): ShopState {
  const item = shopItem(id);
  if (!item || !shop.owned.includes(id)) return shop;
  return { ...shop, equipped: { ...shop.equipped, [item.slot]: id } };
}

/** What the 3D truck shows (game/truck/look.ts reads this). */
export type TruckLook = { paint: string; awning: string; machine: 0 | 1 | 2 };

export function truckLook(shop: ShopState): TruckLook {
  const value = (slot: ShopSlot) => shopItem(shop.equipped[slot])!.value;
  return { paint: value('paint'), awning: value('awning'), machine: Number(value('machine')) as 0 | 1 | 2 };
}
