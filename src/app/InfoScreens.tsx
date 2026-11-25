import { useEffect, useState } from 'react';
import type { UiText } from '../i18n';
import type { Lang } from '../sql-core/feedback';
import { getLook, LOOK_MAX, LOOK_MIN, setLook } from '../game/truck/lookSettings';
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
export function SettingsScreen({ lang, setLang, t, onClose }: { lang: Lang; setLang: (l: Lang) => void; t: UiText; onClose: () => void }) {
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

/** About (8.1): what the game teaches, who made it and where the source lives. */
export function AboutScreen({ t, onClose }: { t: UiText; onClose: () => void }) {
  useEscape(onClose);
  return (
    <div className="menu-screen" role="dialog" aria-label={t.aboutTitle}>
      <div className="title-card">
        <h2 className="pause-title">{t.aboutTitle}</h2>
        <p className="pause-hint">{t.aboutTeaches}</p>
        <p className="pause-hint">{t.aboutOffline}</p>
        <p className="pause-hint">{t.aboutBy}</p>
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

/** A phone or tablet without a keyboard: say so kindly (8.1); "Try anyway" hides it. */
export function isTouchOnly(): boolean {
  try {
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
