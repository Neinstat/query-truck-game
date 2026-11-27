import { describe, expect, it } from 'vitest';
import { newDay, serveOrder } from './day';
import { buy, coinsForOrder, dayCoins, equip, newShop, parseShop, SHOP_ITEMS, SHOP_SLOTS, spent, totalCoins, truckLook } from './shop';

describe('coins', () => {
  it('pay 10 per star plus the tip, and 20 per star for a Manager case', () => {
    expect(coinsForOrder(3, 1)).toBe(40);
    expect(coinsForOrder(1, 0)).toBe(10);
    let day = serveOrder(newDay('2026-11-02', ['a']), { orderId: 'a', at: 620, tip: 0.5, stars: 2 });
    expect(dayCoins(day)).toBe(25);
    day = { ...day, manager: { stars: 3 } };
    expect(dayCoins(day)).toBe(85);
    expect(totalCoins([day, day])).toBe(170);
  });

  it('never pay twice for the same order', () => {
    const once = serveOrder(newDay('2026-11-02', ['a']), { orderId: 'a', at: 620, tip: 1, stars: 3 });
    const twice = serveOrder(once, { orderId: 'a', at: 700, tip: 1, stars: 3 });
    expect(dayCoins(twice)).toBe(dayCoins(once));
  });
});

describe('the shop', () => {
  it('starts plain: the starting items are owned and on the truck, and cost nothing', () => {
    const shop = newShop();
    expect(spent(shop)).toBe(0);
    expect(truckLook(shop)).toEqual({ paint: 'paperShade', awning: 'paperShade', machine: 0, plants: 0, till: 0, board: 0 });
    for (const slot of SHOP_SLOTS) expect(SHOP_ITEMS.filter((i) => i.slot === slot && i.start)).toHaveLength(1);
  });

  it('has a price above zero for everything that is not a starting item, and tiers that grow', () => {
    for (const i of SHOP_ITEMS) expect(i.start ? i.price === 0 : i.price > 0, i.id).toBe(true);
    expect(SHOP_ITEMS.find((i) => i.id === 'machine-modern')!.price).toBeGreaterThan(SHOP_ITEMS.find((i) => i.id === 'machine-good')!.price);
  });

  it('buys only with enough coins, only once, and puts the item on the truck', () => {
    const shop = newShop();
    expect(buy(shop, 'paint-teal', 100)).toEqual({ ok: false, reason: 'poor' });
    expect(buy(shop, 'nope', 999)).toEqual({ ok: false, reason: 'unknown' });
    const bought = buy(shop, 'paint-teal', 300);
    expect(bought.ok).toBe(true);
    if (!bought.ok) return;
    expect(truckLook(bought.shop).paint).toBe('teal');
    expect(spent(bought.shop)).toBe(300);
    expect(buy(bought.shop, 'paint-teal', 999)).toEqual({ ok: false, reason: 'owned' });
    // Back to the faded paint, and to the teal again, without paying again.
    const faded = equip(bought.shop, 'paint-faded');
    expect(truckLook(faded).paint).toBe('paperShade');
    expect(truckLook(equip(faded, 'paint-teal')).paint).toBe('teal');
    // Something not owned cannot be put on.
    expect(equip(faded, 'paint-lilac')).toBe(faded);
  });

  it('reads a saved shop and drops what it does not know', () => {
    const bought = buy(newShop(), 'awning-red', 999);
    if (!bought.ok) throw new Error('should buy');
    expect(parseShop(JSON.stringify(bought.shop))).toEqual(bought.shop);
    expect(parseShop(null)).toEqual(newShop());
    expect(parseShop('{broken')).toEqual(newShop());
    // An unowned item cannot be slipped in as equipped, and a wrong slot is ignored.
    const cheat = parseShop(JSON.stringify({ owned: ['ghost'], equipped: { paint: 'paint-lilac', awning: 'machine-good' } }));
    expect(cheat).toEqual(newShop());
  });
});
