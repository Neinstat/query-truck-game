import { useEffect, useState } from 'react';
import type { UiText } from '../i18n';
import type { Lang } from '../sql-core/feedback';
import { getLook, LOOK_MAX, LOOK_MIN, setLook } from '../game/truck/lookSettings';
import { findEgg } from './eggs';
import { LangSwitch, SoundControl } from './Menus';
import { resetAllProgress } from './progress';

const REPO = 'https://github.com/Neinstat/query-truck-game';

function useEscape(onClose: () => void) {
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
}

/** Settings (8.1): sound, language, mouse speed and resetting all progress (asks first). */
export function SettingsScreen({ lang, setLang, t, onClose, onDifficulty, onAbout }: { lang: Lang; setLang: (l: Lang) => void; t: UiText; onClose: () => void; onDifficulty?: () => void; onAbout: () => void }) {
  useEscape(onClose);
  const [look, setLookState] = useState(getLook);
  const [confirm, setConfirm] = useState(false);
  return (
    <div className="menu-screen" role="dialog" aria-label={t.settingsTitle}>
      <div className="title-card">
        <h2 className="pause-title">{t.settingsTitle}</h2>
        <SoundControl t={t} />
        <LangSwitch lang={lang} setLang={setLang} t={t} />
        <label className="settings-look">
          {t.settingsLook}
          <input
            type="range"
            min={LOOK_MIN}
            max={LOOK_MAX}
            step={0.1}
            value={look}
            onChange={(e) => {
              setLook(Number(e.target.value));
              setLookState(getLook());
            }}
          />
          <span>×{look.toFixed(1)}</span>
        </label>
        {onDifficulty && (
          <button className="menu-button" onClick={onDifficulty}>
            {t.difficultyButton}
          </button>
        )}
        <button className="menu-button" onClick={onAbout}>
          {t.aboutButton}
        </button>
        {confirm ? (
          <div className="settings-confirm">
            <p>{t.settingsResetAsk}</p>
            <button className="menu-button" onClick={resetAllProgress}>
              {t.settingsResetYes}
            </button>
            <button className="menu-button menu-button-main" onClick={() => setConfirm(false)} autoFocus>
              {t.settingsResetNo}
            </button>
          </div>
        ) : (
          <button className="menu-button" onClick={() => setConfirm(true)}>
            {t.settingsReset}
          </button>
        )}
        <button className="menu-button menu-button-main" onClick={onClose}>
          {t.shopClose}
        </button>
      </div>
    </div>
  );
}

/** What the credits list: the same as CREDITS.md. */
const CREDIT_LINES: readonly { head: { en: string; id: string }; lines: string[] }[] = [
  { head: { en: 'Built with', id: 'Dibuat dengan' }, lines: ['Claude Code, an AI agent, one pull request at a time'] },
  { head: { en: 'Art and sound', id: 'Seni dan suara' }, lines: ['The logo is the developer’s own artwork', 'Every model, colour and sound is original (sound is synthesized with the Web Audio API)'] },
  { head: { en: 'Fonts', id: 'Font' }, lines: ['Fredoka by Milena Brandão and Hafontia (SIL OFL 1.1)', 'Caveat by Impallari Type (SIL OFL 1.1)'] },
  { head: { en: 'Tools', id: 'Perangkat' }, lines: ['Three.js · React · CodeMirror · PGlite (PostgreSQL in your browser)'] },
];

/** About and credits in one still page (8.1): what the game teaches, who made it, what it is built with. The developer's name hides an easter egg. */
export function AboutScreen({ lang, t, onClose }: { lang: Lang; t: UiText; onClose: () => void }) {
  useEscape(onClose);
  return (
    <div className="menu-screen" role="dialog" aria-label={t.aboutTitle}>
      <div className="title-card">
        <h2 className="pause-title">{t.aboutTitle}</h2>
        <p className="pause-hint">{t.aboutTeaches}</p>
        <p className="pause-hint">{t.aboutOffline}</p>
        <p className="pause-hint">
          {t.aboutMadeBy}{' '}
          <button className="credits-name" onClick={() => findEgg('developer')}>
            Neinstat
          </button>
        </p>
        {CREDIT_LINES.map((b) => (
          <section key={b.head.en} className="about-credit">
            <h3>{lang === 'id' ? b.head.id : b.head.en}</h3>
            {b.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </section>
        ))}
        <a className="menu-button" href={REPO} target="_blank" rel="noreferrer">
          {t.aboutSource}
        </a>
        <button className="menu-button menu-button-main" onClick={onClose} autoFocus>
          {t.shopClose}
        </button>
      </div>
    </div>
  );
}

/** A phone or tablet (no hover): the game plays with touch controls (8.1b); `?touch` in the address tests it on a computer. */
export function isTouchOnly(): boolean {
  try {
    if (new URLSearchParams(window.location.search).has('touch')) return true;
    return window.matchMedia('(pointer: coarse)').matches && !window.matchMedia('(hover: hover)').matches;
  } catch {
    return false;
  }
}

export function PhoneNotice({ t, onDismiss }: { t: UiText; onDismiss: () => void }) {
  return (
    <div className="menu-screen phone-notice" role="alertdialog" aria-label={t.phoneTitle}>
      <div className="title-card">
        <h2 className="pause-title">🚚 {t.phoneTitle}</h2>
        <p className="pause-hint">{t.phoneText}</p>
        <button className="menu-button" onClick={onDismiss}>
          {t.phoneAnyway}
        </button>
      </div>
    </div>
  );
}
