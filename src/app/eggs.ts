import { useEffect, useState } from 'react';
import { addFound, eggById, parseFound, type Egg, type EggId } from '../sql-core/truck/eggs';

const KEY = 'query-truck.eggs';
const EVENT = 'query-truck:egg';

export const loadEggs = (): EggId[] => {
  try {
    return parseFound(localStorage.getItem(KEY));
  } catch {
    return [];
  }
};

/** Mark an easter egg as found: saved, and the toast shows it (only the first time). */
export function findEgg(id: EggId): void {
  const before = loadEggs();
  if (before.includes(id)) return;
  try {
    localStorage.setItem(KEY, JSON.stringify(addFound(before, id)));
  } catch {
    // Private windows may refuse storage: the egg is shown but not kept.
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: id }));
}

/** The eggs found so far (updates when one is found). */
export function useEggs(): EggId[] {
  const [found, setFound] = useState(loadEggs);
  useEffect(() => {
    const onFound = () => setFound(loadEggs());
    window.addEventListener(EVENT, onFound);
    return () => window.removeEventListener(EVENT, onFound);
  }, []);
  return found;
}

/** The egg that was just found, to show for a few seconds. */
export function useEggToast(): [Egg | null, () => void] {
  const [egg, setEgg] = useState<Egg | null>(null);
  useEffect(() => {
    const onFound = (e: Event) => setEgg(eggById(String((e as CustomEvent).detail)) ?? null);
    window.addEventListener(EVENT, onFound);
    return () => window.removeEventListener(EVENT, onFound);
  }, []);
  useEffect(() => {
    if (!egg) return;
    const id = window.setTimeout(() => setEgg(null), 9000);
    return () => window.clearTimeout(id);
  }, [egg]);
  return [egg, () => setEgg(null)];
}
