import { useEffect } from 'react';
import type { UiText } from '../i18n';
import type { Lang } from '../sql-core/feedback';
import { findEgg } from './eggs';

type Block = { head: { en: string; id: string }; lines: string[] };

/** What rolls: the people and the tools, the same as CREDITS.md. */
const BLOCKS: readonly Block[] = [
  { head: { en: 'A game by', id: 'Sebuah game oleh' }, lines: ['DEVELOPER'] },
  { head: { en: 'Built with', id: 'Dibuat dengan' }, lines: ['Claude Code — an AI agent, one pull request at a time'] },
  { head: { en: 'Logo and design', id: 'Logo dan desain' }, lines: ['The Query Truck logo is the developer’s own artwork', 'Every model, colour and sound is original'] },
  { head: { en: 'Fonts', id: 'Font' }, lines: ['Fredoka — Milena Brandão and Hafontia (SIL OFL 1.1)', 'Caveat — Impallari Type (SIL OFL 1.1)'] },
  { head: { en: 'Tools', id: 'Perangkat' }, lines: ['Three.js', 'React', 'PGlite — PostgreSQL in your browser', 'CodeMirror'] },
  { head: { en: 'Sound', id: 'Suara' }, lines: ['Synthesized live with the Web Audio API'] },
  { head: { en: 'And you', id: 'Dan kamu' }, lines: ['Thank you for playing. Keep asking good questions.'] },
];

const NAME = 'Neinstat';

/** The credits (7.3): a slow roll, from the title screen and after the Analysis Case. The developer's name hides an easter egg. */
export function CreditsScreen({ lang, t, onClose }: { lang: Lang; t: UiText; onClose: () => void }) {
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
    <div className="menu-screen credits-screen" role="dialog" aria-label={t.creditsTitle}>
      <div className="credits-roll">
        {BLOCKS.map((b) => (
          <section key={b.head.en}>
            <h3>{lang === 'id' ? b.head.id : b.head.en}</h3>
            {b.lines.map((line) =>
              line === 'DEVELOPER' ? (
                <p key={line}>
                  <button className="credits-name" onClick={() => findEgg('developer')}>
                    {NAME}
                  </button>
                </p>
              ) : (
                <p key={line}>{line}</p>
              ),
            )}
          </section>
        ))}
      </div>
      <button className="menu-button menu-button-main credits-close" onClick={onClose} autoFocus>
        {t.creditsClose}
      </button>
    </div>
  );
}
