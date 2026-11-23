import { useEffect, useState } from 'react';
import type { UiText } from '../i18n';
import { LANGS, type Lang } from '../sql-core/feedback';
import { formatClock, OPENING } from '../sql-core/truck/day';
import { guideFor, type GuideItem } from './guide';
import { sound } from '../audio/sound';
import type { Place } from '../sql-core/truck/places';
import { Logo } from './Logo';

/** Sound on/off, the main volume, and music, ambience and effects on their own (saved). */
function SoundControl({ t }: { t: UiText }) {
  const [, redraw] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => sound.subscribe(() => redraw((n) => n + 1)), []);
  const slider = (label: string, value: number, set: (v: number) => void) => (
    <label className="sound-row">
      <span>{label}</span>
      <input type="range" min={0} max={100} value={Math.round(value * 100)} disabled={sound.muted} onChange={(e) => set(Number(e.target.value) / 100)} />
    </label>
  );
  return (
    <div className="sound-control" role="group" aria-label={t.soundLabel}>
      <div className="sound-main">
        <button
          className="sound-toggle"
          aria-pressed={!sound.muted}
          onClick={() => {
            sound.start();
            sound.setMuted(!sound.muted);
          }}
        >
          {sound.muted ? '🔇' : '🔊'} {sound.muted ? t.soundOff : t.soundOn}
        </button>
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(sound.volume * 100)}
          aria-label={t.volume}
          disabled={sound.muted}
          onChange={(e) => sound.setVolume(Number(e.target.value) / 100)}
        />
        <button className="sound-more" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? '▴' : '▾'} {t.soundMix}
        </button>
      </div>
      {open && (
        <div className="sound-mix">
          {slider(`📻 ${t.soundMusic}`, sound.mix('music'), (v) => sound.setMix('music', v))}
          {slider(`🌧 ${t.soundAmbience}`, sound.mix('ambience'), (v) => sound.setMix('ambience', v))}
          {slider(`🖱 ${t.soundEffects}`, sound.mix('effects'), (v) => sound.setMix('effects', v))}
        </div>
      )}
    </div>
  );
}

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
  /** Where the truck parks today. */
  place: Place;
  clock: number;
  /** The 3D truck and the database are ready. */
  worldReady: boolean;
  dataReady: boolean;
  dataError: string | null;
  onStart: () => void;
  onGuide: () => void;
  onTour: () => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  t: UiText;
}) {
  const { dayNumber, place, clock, worldReady, dataReady, dataError, onStart, onGuide, onTour, lang, setLang, t } = props;
  const ready = worldReady && dataReady;
  const started = clock > OPENING;
  return (
    <div className="menu-screen title-screen">
      <div className="title-card">
        <p className="title-kicker">🚚 {t.titleKicker}</p>
        <Logo className="title-logo" />
        <p className="title-tagline">{t.titleTagline}</p>
        <p className="title-place">
          <span>
            <span aria-hidden="true">{place.icon}</span> {t.todayAt} <strong>{place.name[lang]}</strong>
          </span>
          <span className="title-place-blurb">{place.blurb[lang]}</span>
        </p>
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
        <button className="menu-button" onClick={onTour} disabled={!worldReady}>
          🎥 {t.tourStart}
        </button>
        <SoundControl t={t} />
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
        <Logo className="title-logo" />
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
  onTour: () => void;
  /** The Data Lens is on; toggling it also carries on playing. */
  lens: boolean;
  onLens: () => void;
  onRestart: () => void;
  onTitle: () => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  t: UiText;
}) {
  const { onResume, onGuide, onTour, lens, onLens, onRestart, onTitle, lang, setLang, t } = props;
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
        <button className="menu-button" onClick={onLens}>
          🔍 {lens ? t.lensOff : t.lensOn} <kbd>L</kbd>
        </button>
        <button className="menu-button" onClick={onTour}>
          🎥 {t.tourStart}
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
        <ul className="pause-controls" aria-label={t.controlsTitle}>
          {t.controlsList.map(([key, what]) => (
            <li key={key}>
              <kbd>{key}</kbd> {what}
            </li>
          ))}
        </ul>
        <SoundControl t={t} />
        <LangSwitch lang={lang} setLang={setLang} t={t} />
      </div>
    </div>
  );
}

/** How to play: one page at a time, chosen from the tabs on the left. */
export function Guide({
  lang,
  t,
  onClose,
  pictures,
  onTour,
}: {
  lang: Lang;
  t: UiText;
  onClose: () => void;
  /** Pictures of the truck's objects, taken in the game (object id → image URL). */
  pictures: Record<string, string>;
  /** Start the truck tour (shown on the pages that list the truck's objects). */
  onTour: () => void;
}) {
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
            {page.items?.some((item) => item.object) && (
              <button className="menu-button menu-button-main guide-tour-button" onClick={onTour}>
                🎥 {t.tourStart}
              </button>
            )}
            {page.items && (
              <ul className="guide-items">
                {page.items.map((item) => (
                  <GuideEntry key={item.name} item={item} picture={item.object ? pictures[item.object] : undefined} t={t} />
                ))}
              </ul>
            )}
            <footer className="guide-nav">
              <button className="nav-button" disabled={index === 0} onClick={() => setIndex(index - 1)}>
                ← {t.guidePrev}
              </button>
              <span className="guide-count">
                {index + 1} / {pages.length}
              </span>
              {index < pages.length - 1 ? (
                <button className="nav-button nav-button-main" onClick={() => setIndex(index + 1)}>
                  {t.guideNext} →
                </button>
              ) : (
                <button className="nav-button nav-button-main" onClick={onClose}>
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

/** One object or control in the guide: its picture from the game (or an icon), and what it is for. */
function GuideEntry({ item, picture, t }: { item: GuideItem; picture?: string; t: UiText }) {
  return (
    <li className={picture || item.object ? 'guide-entry guide-entry-pictured' : 'guide-entry'}>
      {item.object ? (
        picture ? (
          <img className="guide-picture" src={picture} alt={item.name} />
        ) : (
          <div className="guide-picture guide-picture-empty" aria-hidden="true">
            {item.icon}
          </div>
        )
      ) : (
        <span className="guide-item-icon" aria-hidden="true">
          {item.icon}
        </span>
      )}
      <div>
        <p className="guide-item-name">{item.name}</p>
        {item.where && <p className="guide-item-where">📍 {item.where}</p>}
        {item.tables && (
          <p className="guide-item-tables">
            <span>{t.guideTables}</span>
            {item.tables.map((table) => (
              <code key={table}>{table}</code>
            ))}
          </p>
        )}
        <p>{item.text}</p>
        {item.example && (
          <p className="guide-item-example">
            💬 {t.guideExample} {item.example}
          </p>
        )}
      </div>
    </li>
  );
}

/**
 * The truck tour: the camera flies to each object while this card, at the bottom of the screen,
 * says what it is for. Same words as the guide's truck page.
 */
export function TruckTour({
  items,
  step,
  onStep,
  onClose,
  t,
}: {
  items: GuideItem[];
  step: number;
  onStep: (step: number) => void;
  onClose: () => void;
  t: UiText;
}) {
  const item = items[step];
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (step < items.length - 1) onStep(step + 1);
        else onClose();
      }
      if (e.key === 'ArrowLeft' && step > 0) onStep(step - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [step, items.length, onStep, onClose]);
  if (!item) return null;
  return (
    <div className="tour" role="dialog" aria-label={t.tourTitle}>
      <section className="tour-card">
        <header className="tour-header">
          <span className="tour-step">
            🎥 {t.tourTitle} · {step + 1}/{items.length}
          </span>
          <button className="close-button" onClick={onClose} aria-label={t.dialogueClose}>
            ✕
          </button>
        </header>
        <h2 className="tour-name">{item.name}</h2>
        {item.where && <p className="guide-item-where">📍 {item.where}</p>}
        {item.tables && (
          <p className="guide-item-tables">
            <span>{t.guideTables}</span>
            {item.tables.map((table) => (
              <code key={table}>{table}</code>
            ))}
          </p>
        )}
        <p className="tour-text">{item.text}</p>
        {item.example && (
          <p className="guide-item-example">
            💬 {t.guideExample} {item.example}
          </p>
        )}
        <footer className="tour-nav">
          <button className="nav-button" disabled={step === 0} onClick={() => onStep(step - 1)}>
            ← {t.guidePrev}
          </button>
          <div className="tour-dots" aria-hidden="true">
            {items.map((it, i) => (
              <span key={it.name} className={i === step ? 'tour-dot tour-dot-on' : 'tour-dot'} />
            ))}
          </div>
          {step < items.length - 1 ? (
            <button className="menu-button menu-button-main" onClick={() => onStep(step + 1)} autoFocus>
              {t.guideNext} →
            </button>
          ) : (
            <button className="menu-button menu-button-main" onClick={onClose} autoFocus>
              {t.tourDone} ✓
            </button>
          )}
        </footer>
      </section>
    </div>
  );
}
