import { useEffect, useRef, useState } from 'react';
import type { UiText } from '../i18n';
import { rewardNote, type RewardNote } from './rewardNote';

/** How long the note stays on screen (ms). */
const SHOWN_FOR = 2600;

/** Floats up in the middle of the screen when XP or coins went up: what the last customer paid. */
export function RewardToast({ xp, coins, paused, t }: { xp: number; coins: number; paused: boolean; t: UiText }) {
  const last = useRef({ xp, coins });
  const [note, setNote] = useState<(RewardNote & { id: number }) | null>(null);
  const id = useRef(0);
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => {
    const prev = last.current;
    last.current = { xp, coins };
    // A menu is open (a purchase, a restart, a jump to another day): just keep the numbers right.
    if (paused) return;
    const next = rewardNote(prev, { xp, coins });
    if (!next) return;
    setNote({ ...next, id: ++id.current });
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setNote(null), SHOWN_FOR);
  }, [xp, coins, paused]);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  if (!note) return null;
  return (
    <div className="reward-toast" key={note.id} role="status">
      {note.coins > 0 && <span className="reward-coins">+{note.coins} 🪙</span>}
      {note.xp > 0 && <span className="reward-xp">+{note.xp} {t.xpShort}</span>}
      {note.level !== null && <span className="reward-level">{t.levelUp(note.level)}</span>}
    </div>
  );
}
