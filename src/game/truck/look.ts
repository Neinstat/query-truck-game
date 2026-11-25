/**
 * What the player's upgrades (GAME_DESIGN.md §10, 7.2) make the truck look like: the colour of the
 * band round the body, the awning's stripe colour, and which espresso machine stands on the back
 * counter. Set once, before the truck is built; buying an upgrade reloads the page so the truck is
 * built again. The defaults are the original truck, so tests and tools see no change.
 */
import { RISO, type Ink } from '../art/riso';

export type TruckLook = { paint: Ink; awning: Ink; machine: 0 | 1 | 2 };

export const DEFAULT_LOOK: TruckLook = { paint: 'red', awning: 'teal', machine: 1 };

let current: TruckLook = DEFAULT_LOOK;

/** Colours arrive as plain names from the shop: an unknown name keeps the default. */
export const setTruckLook = (look: { paint?: string; awning?: string; machine?: 0 | 1 | 2 } | undefined): void => {
  const ink = (name: string | undefined, fallback: Ink): Ink => (name && name in RISO ? (name as Ink) : fallback);
  current = {
    paint: ink(look?.paint, DEFAULT_LOOK.paint),
    awning: ink(look?.awning, DEFAULT_LOOK.awning),
    machine: look?.machine ?? DEFAULT_LOOK.machine,
  };
};
export const truckLook = (): TruckLook => current;
