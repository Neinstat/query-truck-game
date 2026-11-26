import { describe, expect, it } from 'vitest';
import { mouseLossMeansPause, type MouseLossContext } from './pauseRules';

const base: MouseLossContext = { wasLocked: true, locked: false, playing: true, consoleOpen: false, lens: false, guideOpen: false, dayDone: false, devOpen: false, objectMenuOpen: false };

describe('losing the mouse', () => {
  it('opens the pause menu when nothing else took the mouse (Esc)', () => {
    expect(mouseLossMeansPause(base)).toBe(true);
  });
  it('does not pause when the phone, calendar or pinboard menu took the mouse', () => {
    expect(mouseLossMeansPause({ ...base, objectMenuOpen: true })).toBe(false);
  });
  it('does not pause for the console, the lens, the guide, the dev panel or a finished day', () => {
    for (const key of ['consoleOpen', 'lens', 'guideOpen', 'devOpen', 'dayDone'] as const) expect(mouseLossMeansPause({ ...base, [key]: true })).toBe(false);
  });
  it('does not pause when the mouse was not captured or is still captured', () => {
    expect(mouseLossMeansPause({ ...base, wasLocked: false })).toBe(false);
    expect(mouseLossMeansPause({ ...base, locked: true })).toBe(false);
  });
});
