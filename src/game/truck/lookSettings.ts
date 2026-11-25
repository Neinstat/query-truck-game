/** How fast the mouse turns the view (8.1): 1 is the normal speed; the settings page changes it. */
const KEY = 'query-truck.look';
export const LOOK_MIN = 0.4;
export const LOOK_MAX = 2.5;

export const clampLook = (value: number): number => (Number.isFinite(value) ? Math.min(LOOK_MAX, Math.max(LOOK_MIN, value)) : 1);

export function loadLook(): number {
  try {
    const raw = localStorage.getItem(KEY);
    return raw === null ? 1 : clampLook(Number(raw));
  } catch {
    return 1;
  }
}

let factor = loadLook();
export const getLook = (): number => factor;
export function setLook(value: number): void {
  factor = clampLook(value);
  try {
    localStorage.setItem(KEY, String(factor));
  } catch {
    // Private windows may refuse storage: the speed just isn't kept.
  }
}
