import { useEffect, useState } from 'react';
import type { UiText } from '../i18n';
import { DIFFICULTIES, type Difficulty } from '../sql-core/truck/difficulty';

/** A small picture of what an order looks like at each difficulty (not a screenshot: real markup). */
function Preview({ difficulty }: { difficulty: Difficulty }) {
  if (difficulty === 'cards') {
    return (
      <div className="difficulty-preview" aria-hidden="true">
        {['SELECT', 'name', ',', 'price', 'FROM', 'menu_items', ';'].map((w, i) => (
          <span key={i} className="difficulty-block">
            {w}
          </span>
        ))}
      </div>
    );
  }
  if (difficulty === 'fill') {
    return (
      <div className="difficulty-preview" aria-hidden="true">
        <code>
          SELECT <span className="difficulty-gap" /> FROM menu_items;
        </code>
      </div>
    );
  }
  if (difficulty === 'write') {
    return (
      <div className="difficulty-preview" aria-hidden="true">
        <code>
          SELECT * FROM <span className="difficulty-caret" />
        </code>
      </div>
    );
  }
  return (
    <div className="difficulty-preview" aria-hidden="true">
      <span className="difficulty-block">SELECT</span> → <span className="difficulty-gap" /> → <code>SELECT …</code>
    </div>
  );
}

/** The choice of how much of each query the player writes (GAME_DESIGN.md §5). */
export function DifficultyPicker({
  t,
  current,
  onChoose,
  onCancel,
}: {
  t: UiText;
  /** The level in use (shown as chosen), or null for a new player. */
  current: Difficulty | null;
  onChoose: (d: Difficulty) => void;
  /** Set when it is opened from the pause menu: Esc and the button close it without a change. */
  onCancel?: () => void;
}) {
  useEffect(() => {
    if (!onCancel) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onCancel();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onCancel]);
  return (
    <div className={onCancel ? 'menu-screen' : 'menu-screen menu-screen-film'} role="dialog" aria-label={t.difficultyTitle}>
      <div className="title-card difficulty-card">
        <h2 className="pause-title">{t.difficultyTitle}</h2>
        <p className="pause-hint">{current ? t.difficultyChange : t.difficultyIntro}</p>
        <div className="difficulty-options">
          {DIFFICULTIES.map((d) => (
            <button
              key={d}
              type="button"
              className={`difficulty-option difficulty-${d}${current === d ? ' difficulty-current' : ''}`}
              onClick={() => onChoose(d)}
              autoFocus={d === (current ?? 'cards')}
            >
              <span className="difficulty-name">{t.difficulties[d].name}</span>
              <span className="difficulty-for">{t.difficulties[d].forWho}</span>
              <Preview difficulty={d} />
              <span className="difficulty-benefit">{t.difficulties[d].benefit}</span>
              {current === d && <span className="difficulty-now">{t.difficultyNow}</span>}
            </button>
          ))}
        </div>
        {onCancel && (
          <button className="menu-button" onClick={onCancel}>
            {t.difficultyCancel}
          </button>
        )}
      </div>
    </div>
  );
}

/** The film shot behind each backstory page: the truck, the places, the window, the roof. */
const BACKSTORY_SHOTS = ['truck', 'place', 'inside', 'roof'];

/** A new player's first start: a short, skippable backstory, then the difficulty choice. */
export function StartFlow({
  t,
  onChoose,
  onShot,
}: {
  t: UiText;
  onChoose: (d: Difficulty) => void;
  /** Which shot of the title film to show behind the card (null: the whole film). */
  onShot: (shot: string | null) => void;
}) {
  const [page, setPage] = useState<number | null>(0);
  const pages = t.backstory;
  useEffect(() => {
    onShot(page === null ? 'truck' : (BACKSTORY_SHOTS[page] ?? null));
    return () => onShot(null);
  }, [page, onShot]);
  useEffect(() => {
    if (page === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
        e.preventDefault();
        setPage(page + 1 >= pages.length ? null : page + 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [page, pages.length]);
  if (page === null) return <DifficultyPicker t={t} current={null} onChoose={onChoose} />;
  const card = pages[page];
  return (
    <div className="menu-screen menu-screen-film" role="dialog" aria-label={card.title}>
      <div className="title-card backstory-card">
        <p className="week-card-kicker">{t.backstoryStep(page + 1, pages.length)}</p>
        <h2 className="pause-title">
          <span aria-hidden="true">{card.icon}</span> {card.title}
        </h2>
        <p className="backstory-text">{card.text}</p>
        <button className="menu-button menu-button-main" onClick={() => setPage(page + 1 >= pages.length ? null : page + 1)} autoFocus>
          {page + 1 >= pages.length ? t.backstoryDone : t.backstoryNext}
        </button>
        <button className="link-button" onClick={() => setPage(null)}>
          {t.backstorySkip}
        </button>
      </div>
    </div>
  );
}
