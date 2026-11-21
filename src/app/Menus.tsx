import { useEffect, useState } from 'react';
import type { UiText } from '../i18n';
import { LANGS, type Lang } from '../sql-core/feedback';
import { formatClock, OPENING } from '../sql-core/truck/day';
import { guideFor } from './guide';

/**
 * The game's menus (GAME_DESIGN.md §7): the title screen (which is also the loading screen), the
 * pause menu (Esc), and the how-to-play guide. Time stops in the truck while any of them is open.
 */

function LangSwitch({ lang, setLang, t }: { lang: Lang; setLang: (l: Lang) => void; t: UiText }) {
  return (
    <div className="lang-switch menu-lang" role="group" aria-label={t.language}>
      {LANGS.map((code) => (
        <button
          key={code}
          className={code === lang ? 'lang-button active' : 'lang-button'}
          aria-pressed={code === lang}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

/** The first screen: the title, what is still loading, and the button into the day. */
export function TitleScreen(props: {
  dayNumber: number;
  clock: number;
  /** The 3D truck and the database are ready. */
  worldReady: boolean;
  dataReady: boolean;
  dataError: string | null;
  onStart: () => void;
  onGuide: () => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  t: UiText;
}) {
  const { dayNumber, clock, worldReady, dataReady, dataError, onStart, onGuide, lang, setLang, t } = props;
  const ready = worldReady && dataReady;
  const started = clock > OPENING;
  return (
    <div className="menu-screen title-screen">
      <div className="title-card">
        <p className="title-kicker">🚚 Rolling Roast</p>
        <h1 className="title-name">SQL Valley</h1>
        <p className="title-tagline">{t.titleTagline}</p>
        {ready ? (
          <button className="menu-button menu-button-main" onClick={onStart} autoFocus>
            {started ? t.titleContinue(dayNumber, formatClock(clock)) : t.titleStart(dayNumber)}
          </button>
        ) : (
          <div className="title-loading" role="status">
            <div className="loading-bar" aria-hidden="true" />
            <p>{dataError ? `${t.loadError} ${dataError}` : !worldReady ? t.loadingWorld : t.loadingData}</p>
          </div>
        )}
        <button className="menu-button" onClick={onGuide}>
          📖 {t.howToPlay}
        </button>
        <LangSwitch lang={lang} setLang={setLang} t={t} />
      </div>
    </div>
  );
}

/** Shown on a reload into the next day: just the loading bar until the truck is ready. */
export function LoadingScreen({ t }: { t: UiText }) {
  return (
    <div className="menu-screen" role="status">
      <div className="title-card">
        <h1 className="title-name">SQL Valley</h1>
        <div className="title-loading">
          <div className="loading-bar" aria-hidden="true" />
          <p>{t.loadingWorld}</p>
        </div>
      </div>
    </div>
  );
}

/** Esc: the game is paused until the player carries on. */
export function PauseMenu(props: {
  onResume: () => void;
  onGuide: () => void;
  onRestart: () => void;
  onTitle: () => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  t: UiText;
}) {
  const { onResume, onGuide, onRestart, onTitle, lang, setLang, t } = props;
  const [confirmRestart, setConfirmRestart] = useState(false);
  return (
    <div className="menu-screen pause-screen" role="dialog" aria-label={t.pausedTitle}>
      <div className="title-card pause-card">
        <h2 className="pause-title">⏸ {t.pausedTitle}</h2>
        <p className="pause-hint">{t.pausedHint}</p>
        <button className="menu-button menu-button-main" onClick={onResume} autoFocus>
          ▶ {t.resume}
        </button>
        <button className="menu-button" onClick={onGuide}>
          📖 {t.howToPlay}
        </button>
        {confirmRestart ? (
          <div className="pause-confirm">
            <p>{t.restartConfirm}</p>
            <button className="menu-button menu-button-danger" onClick={onRestart}>
              ↺ {t.replayDay}
            </button>
            <button className="link-button" onClick={() => setConfirmRestart(false)}>
              {t.cancelLabel}
            </button>
          </div>
        ) : (
          <button className="menu-button" onClick={() => setConfirmRestart(true)}>
            ↺ {t.replayDay}
          </button>
        )}
        <button className="menu-button" onClick={onTitle}>
          🏠 {t.toTitle}
        </button>
        <LangSwitch lang={lang} setLang={setLang} t={t} />
      </div>
    </div>
  );
}

/** How to play: one page at a time, chosen from the tabs on the left. */
export function Guide({ lang, t, onClose }: { lang: Lang; t: UiText; onClose: () => void }) {
  const pages = guideFor(lang);
  const [index, setIndex] = useState(0);
  const page = pages[Math.min(index, pages.length - 1)];
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(pages.length - 1, i + 1));
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(0, i - 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [pages.length]);
  return (
    <div className="menu-screen guide-screen" role="dialog" aria-label={t.howToPlay}>
      <section className="guide-book">
        <header className="guide-header">
          <h2>📖 {t.howToPlay}</h2>
          <button className="close-button" onClick={onClose} aria-label={t.dialogueClose}>
            ✕
          </button>
        </header>
        <div className="guide-body">
          <nav className="guide-tabs" aria-label={t.howToPlay}>
            {pages.map((p, i) => (
              <button
                key={p.id}
                className={i === index ? 'guide-tab guide-tab-on' : 'guide-tab'}
                aria-current={i === index}
                onClick={() => setIndex(i)}
              >
                <span aria-hidden="true">{p.icon}</span> {p.title}
              </button>
            ))}
          </nav>
          <article className="guide-page">
            <h3>
              {page.icon} {page.title}
            </h3>
            {page.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
            {page.items && (
              <ul className="guide-items">
                {page.items.map((item) => (
                  <li key={item.name}>
                    <span className="guide-item-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div>
                      <p className="guide-item-name">{item.name}</p>
                      {item.tables && (
                        <p className="guide-item-tables">
                          {item.tables.map((table) => (
                            <code key={table}>{table}</code>
                          ))}
                        </p>
                      )}
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <footer className="guide-nav">
              <button className="link-button" disabled={index === 0} onClick={() => setIndex(index - 1)}>
                ← {t.guidePrev}
              </button>
              <span>
                {index + 1} / {pages.length}
              </span>
              {index < pages.length - 1 ? (
                <button className="link-button" onClick={() => setIndex(index + 1)}>
                  {t.guideNext} →
                </button>
              ) : (
                <button className="link-button" onClick={onClose}>
                  {t.guideDone} ✓
                </button>
              )}
            </footer>
          </article>
        </div>
      </section>
    </div>
  );
}
