/**
 * Drag-and-drop SQL cards (9.5): the list of placed blocks is a list of tray indexes; these pure
 * helpers put a block at a gap, so a forgotten word can be inserted without starting over.
 */

/** Put tray block `block` into the answer at gap `gap` (0 = before the first). A block already placed moves instead of doubling. */
export function dropBlock(placed: readonly number[], block: number, gap: number): number[] {
  const from = placed.indexOf(block);
  const rest = placed.filter((b) => b !== block);
  // Removing a block before the gap shifts the gap one to the left.
  const at = Math.max(0, Math.min(rest.length, from !== -1 && from < gap ? gap - 1 : gap));
  return [...rest.slice(0, at), block, ...rest.slice(at)];
}
