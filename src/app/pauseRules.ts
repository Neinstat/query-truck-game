/**
 * When losing the captured mouse means "the player pressed Esc" (so the pause menu opens), and
 * when it is only a side effect of something else taking the mouse (a console, the Data Lens, the
 * guide, the developer panel, or a menu opened from an object in the truck: the phone, calendar
 * and pinboard).
 */
export type MouseLossContext = {
  wasLocked: boolean;
  locked: boolean;
  playing: boolean;
  consoleOpen: boolean;
  lens: boolean;
  guideOpen: boolean;
  dayDone: boolean;
  devOpen: boolean;
  /** The shop, the days, the badges or the orders list are open (from the phone, calendar, pinboard or the O key). */
  objectMenuOpen: boolean;
};

export function mouseLossMeansPause(c: MouseLossContext): boolean {
  return c.wasLocked && !c.locked && c.playing && !c.consoleOpen && !c.lens && !c.guideOpen && !c.dayDone && !c.devOpen && !c.objectMenuOpen;
}
