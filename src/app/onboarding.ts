/**
 * A new player's first start (9.2): story → how hard → the how-to-play guide → the truck tour,
 * and only then the first day. The last two cannot be skipped. This flag remembers that the
 * guide and the tour are still to do, so a reload half-way through starts them again.
 */
const KEY = 'query-truck.onboarding';

export function onboardingPending(): boolean {
  try {
    return localStorage.getItem(KEY) === 'pending';
  } catch {
    return false;
  }
}

export function setOnboardingPending(pending: boolean): void {
  try {
    if (pending) localStorage.setItem(KEY, 'pending');
    else localStorage.removeItem(KEY);
  } catch {
    // Without storage the player is simply not asked again after a reload.
  }
}

/** What the Start button does: a new player gets the story, one half-way through carries on with the guide, everyone else plays. */
export function startAction(difficultyChosen: boolean, pending: boolean): 'story' | 'guide' | 'play' {
  if (!difficultyChosen) return 'story';
  return pending ? 'guide' : 'play';
}
