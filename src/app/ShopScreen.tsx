import { useEffect } from 'react';
import type { Lang } from '../sql-core/feedback';
import { itemName, itemText, SHOP_ITEMS, SHOP_SLOTS, type ShopState } from '../sql-core/truck/shop';
import type { UiText } from '../i18n';

/**
 * The truck shop (GAME_DESIGN.md §10, 7.2), opened from the pause menu: coins buy upgrades that
 * change how the truck looks. Items of one kind sit together; the one on the truck is marked.
 */
export function ShopScreen({
  shop,
  balance,
  lang,
  t,
  onBuy,
  onEquip,
  onClose,
}: {
  shop: ShopState;
  balance: number;
  lang: Lang;
  t: UiText;
  onBuy: (id: string) => void;
  onEquip: (id: string) => void;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="menu-screen" role="dialog" aria-label={t.shopTitle}>
      <div className="title-card shop-card">
        <h2 className="pause-title">{t.shopTitle}</h2>
        <p className="pause-hint">{t.shopIntro}</p>
        <p className="shop-balance">🪙 {balance}</p>
        {SHOP_SLOTS.map((slot) => (
          <section key={slot} className="shop-slot">
            <h3>{t.shopSlots[slot]}</h3>
            <div className="shop-items">
              {SHOP_ITEMS.filter((i) => i.slot === slot).map((item) => {
                const owned = shop.owned.includes(item.id);
                const on = shop.equipped[slot] === item.id;
                return (
                  <div key={item.id} className={`shop-item${on ? ' shop-item-on' : ''}`}>
                    <strong>{itemName(item, lang)}</strong>
                    <span>{itemText(item, lang)}</span>
                    {on ? (
                      <em>✔ {t.shopOnTruck}</em>
                    ) : owned ? (
                      <button className="menu-button" onClick={() => onEquip(item.id)}>
                        {t.shopPutOn}
                      </button>
                    ) : (
                      <button className="menu-button" disabled={item.price > balance} onClick={() => onBuy(item.id)}>
                        🪙 {item.price} · {t.shopBuy}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
        <button className="menu-button menu-button-main" onClick={onClose}>
          {t.shopClose}
        </button>
      </div>
    </div>
  );
}
