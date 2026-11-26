import { describe, expect, it } from 'vitest';
import { dropBlock } from './blockMoves';

describe('dropBlock', () => {
  it('inserts a new block at a gap', () => {
    expect(dropBlock([0, 2], 1, 1)).toEqual([0, 1, 2]);
    expect(dropBlock([0, 2], 1, 0)).toEqual([1, 0, 2]);
    expect(dropBlock([0, 2], 1, 2)).toEqual([0, 2, 1]);
  });
  it('moves a placed block instead of doubling it', () => {
    expect(dropBlock([0, 1, 2], 0, 3)).toEqual([1, 2, 0]);
    expect(dropBlock([0, 1, 2], 2, 0)).toEqual([2, 0, 1]);
    expect(dropBlock([0, 1, 2], 1, 1)).toEqual([0, 1, 2]);
  });
  it('clamps a gap that is out of range', () => {
    expect(dropBlock([], 4, 9)).toEqual([4]);
  });
});
