import { useEffect } from 'react';
import type { UiText } from '../i18n';
import type { Lang } from '../sql-core/feedback';
import { LAST_WEEK, weekInfo } from '../sql-core/truck/weeks';

/** The card on a new week's first morning (GAME_DESIGN.md §6): its name, what it teaches, the Manager's case. */
export function WeekCard({ week, lang, t, onClose }: { week: number; lang: Lang; t: UiText; onClose: () => void }) {
  const info = weekInfo(week, lang);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="week-card" role="dialog" aria-label={info.name}>
      <p className="week-card-kicker">{t.weekCardKicker(week)}</p>
      <h2 className="week-card-name">{info.name}</h2>
      <p className="week-card-label">{t.weekCardTeaches}</p>
      <p className="week-card-teaches">{info.teaches}</p>
      <p className="week-card-case">{info.managerCase ? `🚪 ${t.weekCardCase(info.managerCase)}` : t.weekCardNoCase}</p>
      {week >= LAST_WEEK && <p className="week-card-case">{t.weekCardFree}</p>}
      <button type="button" className="week-card-go" onClick={onClose} autoFocus>
        {t.weekCardGo}
      </button>
    </div>
  );
}
