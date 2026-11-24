import { useCallback, useState } from 'react';
import { parseDifficulty, type Difficulty } from '../sql-core/truck/difficulty';
import { hasPlayedBefore } from './useTruckShift';

const KEY = 'query-truck.difficulty';

function load(): Difficulty | null {
  try {
    const saved = parseDifficulty(localStorage.getItem(KEY));
    if (saved) return saved;
  } catch {
    // Storage refused: the choice is just asked again next time.
  }
  // A save from before the choice carries on as it was (the input grows with the player).
  return hasPlayedBefore() ? 'grow' : null;
}

/** The player's difficulty (GAME_DESIGN.md §5), saved in this browser; `null` until a new player has chosen. */
export function useDifficulty(): [Difficulty | null, (d: Difficulty) => void] {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(load);
  const choose = useCallback((d: Difficulty) => {
    setDifficulty(d);
    try {
      localStorage.setItem(KEY, d);
    } catch {
      // Private windows may refuse storage.
    }
  }, []);
  return [difficulty, choose];
}
