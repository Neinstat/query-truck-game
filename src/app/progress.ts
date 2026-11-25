/** Every key the game saves in this browser (wiped by "Reset all progress"). */
export function savedKeys(): string[] {
  try {
    return Object.keys(localStorage).filter((k) => k.startsWith('query-truck.') || k.startsWith('sql-valley.'));
  } catch {
    return [];
  }
}

/** Forget everything saved by the game and start again from the title screen. */
export function resetAllProgress(): void {
  try {
    for (const k of savedKeys()) localStorage.removeItem(k);
    sessionStorage.clear();
  } catch {
    // Nothing to forget.
  }
  window.location.reload();
}
