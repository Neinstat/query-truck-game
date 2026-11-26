import { useEffect } from 'react';
import type { UiText } from '../i18n';
import type { Lang } from '../sql-core/feedback';
import { BADGES, badgeHow, badgeName, earnedBadges, streak, type BadgeInput } from '../sql-core/truck/badges';
import { levelFor } from '../sql-core/truck/xp';
import { EGGS, eggHint, eggText, eggTitle } from '../sql-core/truck/eggs';

/**
 * The badge page (7.3), opened from the pause menu: badges earned and still to earn, the day
 * streak, and the easter eggs (found ones show their note; the rest show a hint).
 */
export function BadgesScreen({ input, xp, lang, t, onClose }: { input: BadgeInput; xp: number; lang: Lang; t: UiText; onClose: () => void }) {
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
  const earned = new Set(earnedBadges(input));
  const run = streak(input.past);
  const lv = levelFor(xp);
  return (
    <div className="menu-screen" role="dialog" aria-label={t.badgesTitle}>
      <div className="title-card shop-card">
        <h2 className="pause-title">{t.badgesTitle}</h2>
        <p className="pause-hint">{t.badgesIntro}</p>
        <p className="shop-balance">{t.levelLine(lv.level, lang === 'id' ? lv.title.id : lv.title.en, xp, lv.next ? (lang === 'id' ? lv.next.id : lv.next.en) : null, lv.next ? lv.span - lv.into : 0)}</p>
        <p className="shop-balance">{run > 0 ? t.badgesStreak(run) : t.badgesNoStreak}</p>
        <section className="shop-slot">
          <h3>{t.badgesEarned(earned.size, BADGES.length)}</h3>
          <div className="shop-items">
            {BADGES.map((b) => (
              <div key={b.id} className={`shop-item badge-item${earned.has(b.id) ? ' shop-item-on' : ' badge-locked'}`}>
                <strong>
                  {earned.has(b.id) ? b.icon : '🔒'} {badgeName(b, lang)}
                </strong>
                <span>{badgeHow(b, lang)}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="shop-slot">
          <h3>
            🥚 {t.eggsTitle} · {t.eggsFound(input.eggs.length, EGGS.length)}
          </h3>
          <div className="shop-items">
            {EGGS.map((e) => {
              const found = input.eggs.includes(e.id);
              return (
                <div key={e.id} className={`shop-item badge-item${found ? ' shop-item-on' : ' badge-locked'}`}>
                  <strong>{found ? eggTitle(e, lang) : t.eggsHidden}</strong>
                  <span>{found ? eggText(e, lang) : eggHint(e, lang)}</span>
                </div>
              );
            })}
          </div>
        </section>
        <button className="menu-button menu-button-main" onClick={onClose}>
          {t.shopClose}
        </button>
      </div>
    </div>
  );
}
