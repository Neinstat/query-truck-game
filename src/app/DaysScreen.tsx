import { useState } from 'react';
import type { UiText } from '../i18n';
import type { Lang } from '../sql-core/feedback';
import { conceptName } from '../sql-core/truck/concepts';
import { OPENING, type DayLog } from '../sql-core/truck/day';
import { placeForDay } from '../sql-core/truck/places';
import { dayConcepts } from '../sql-core/truck/repetition';
import type { Practice, PracticeMode } from './useTruckShift';

/**
 * The Days screen (GAME_DESIGN.md §5, owner's idea 23 Nov 2026), from the pause menu: every day
 * played so far — where the truck stood, the SQL it practised, how it went — and today. Any day
 * can be practised again, with its very orders or with the same topics in new cases: a query is
 * learnt by writing it again and again. Practice runs never change progress (useTruckShift).
 * Today can also be started again from 10:00 (that one is for real). Esc closes it (TruckApp).
 */
export function DaysScreen({
  past,
  today,
  practice,
  lang,
  t,
  onRestartToday,
  onPractise,
  onEndPractice,
  onClose,
}: {
  past: readonly DayLog[];
  today: DayLog;
  practice: Practice | null;
  lang: Lang;
  t: UiText;
  onRestartToday: () => void;
  onPractise: (from: number, mode: PracticeMode) => void;
  onEndPractice: () => void;
  onClose: () => void;
}) {
  const [confirmRestart, setConfirmRestart] = useState(false);
  const todayNumber = past.length + 1;
  const days = [...past, today];

  return (
    <div className="menu-screen days-screen" role="dialog" aria-label={t.daysTitle}>
      <div className="title-card days-card">
        <header className="days-header">
          <h2 className="pause-title">{t.daysTitle}</h2>
          <button className="close-button days-close" onClick={onClose} aria-label={t.dialogueClose}>
            ✕
          </button>
        </header>
        <p className="pause-hint">{practice ? t.daysPractising(practice.from) : t.daysIntro(todayNumber)}</p>
        <ol className="days-list">
          {days
            .map((day, i) => ({ day, n: i + 1 }))
            .reverse()
            .map(({ day, n }) => {
              const isToday = n === todayNumber;
              const place = placeForDay(n);
              const stars = day.served.reduce((sum, s) => sum + s.stars, 0);
              const started = day.clock > OPENING || day.served.length > 0;
              const practising = practice?.from === n;
              return (
                <li key={day.date} className={['days-row', isToday ? 'days-row-today' : '', practising ? 'days-row-practising' : ''].join(' ').trim()}>
                  <div className="days-row-head">
                    <span className="days-row-day">{isToday ? t.daysToday : t.daysDay(n)}</span>
                    <span className="days-row-place">
                      {place.icon} {place.name[lang]} · {t.dateLabel(day.date)}
                    </span>
                    <span className="days-row-score">
                      {started ? (
                        <>
                          {t.daysServed(day.served.length, day.orders.length)} · ⭐ {stars}/{day.orders.length * 3}
                        </>
                      ) : (
                        t.daysNothingYet
                      )}
                    </span>
                  </div>
                  <ul className="days-topics">
                    {dayConcepts(day.orders).map((c) => (
                      <li key={c}>{conceptName(c, lang)}</li>
                    ))}
                  </ul>
                  <div className="days-actions">
                    {isToday && practice && (
                      <button className="menu-button menu-button-main" onClick={onEndPractice}>
                        {t.daysBack(todayNumber)}
                      </button>
                    )}
                    {isToday && !practice && started && !confirmRestart && (
                      <button className="menu-button" onClick={() => setConfirmRestart(true)}>
                        {t.daysRestart}
                      </button>
                    )}
                    {isToday && !practice && confirmRestart && (
                      <span className="days-confirm">
                        {t.restartConfirm}
                        <button className="menu-button menu-button-danger" onClick={onRestartToday}>
                          {t.daysRestart}
                        </button>
                        <button className="menu-button" onClick={() => setConfirmRestart(false)}>
                          {t.cancelLabel}
                        </button>
                      </span>
                    )}
                    {!isToday && (
                      <button className="menu-button" onClick={() => onPractise(n, 'replay')}>
                        {t.daysReplay}
                      </button>
                    )}
                    <button className="menu-button menu-button-main" onClick={() => onPractise(n, 'fresh')}>
                      {t.daysFresh}
                    </button>
                  </div>
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
}
