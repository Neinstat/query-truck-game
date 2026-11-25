import { useCallback, useState } from 'react';
import { buy, equip, parseShop, spent, truckLook, type ShopState } from '../sql-core/truck/shop';

const KEY = 'query-truck.shop';
/** Set before the reload that repaints the truck, so the next page can say what is new. */
export const NEW_ITEM_KEY = 'query-truck.new-item';

const load = (): ShopState => {
  try {
    return parseShop(localStorage.getItem(KEY));
  } catch {
    return parseShop(null);
  }
};

/** The truck's upgrades: saved in this browser; every change reloads the page to rebuild the truck. */
export function useShop(earned: number, beforeReload: () => void) {
  const [shop] = useState<ShopState>(load);
  const balanceNow = earned - spent(shop);
  const apply = useCallback(
    (next: ShopState, newId?: string) => {
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
        if (newId) sessionStorage.setItem(NEW_ITEM_KEY, newId);
      } catch {
        // Private windows may refuse storage: the upgrade just isn't kept.
      }
      beforeReload();
      window.location.reload();
    },
    [beforeReload],
  );
  const purchase = useCallback(
    (id: string) => {
      const result = buy(shop, id, balanceNow);
      if (result.ok) apply(result.shop, id);
    },
    [shop, balanceNow, apply],
  );
  const putOn = useCallback((id: string) => apply(equip(shop, id)), [shop, apply]);
  return { shop, balance: Math.max(0, balanceNow), look: truckLook(shop), purchase, putOn };
}
