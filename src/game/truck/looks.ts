/**
 * How each customer looks (GAME_DESIGN.md §7): skin, hair, clothes and an extra, in the palette,
 * used by the low-poly people in character.ts. Our own characters. ⚠ Placeholder (docs/ASSETS.md).
 */
import type { CustomerLook } from '../../sql-core/truck/orders';
import type { Ink } from '../art/riso';

export type Look = {
  skin: Ink;
  hair: Ink;
  hairStyle: 'short' | 'long' | 'cap' | 'sides' | 'bun';
  /** The cap's colour (hairStyle 'cap'). */
  hat?: Ink;
  /** The open jacket (or hoodie) and the shirt under it. */
  jacket: Ink;
  shirt: Ink;
  legs: Ink;
  shoes: Ink;
  /** Sunglasses, glasses, or plain eyes. */
  eyes: 'sunglasses' | 'glasses' | 'plain';
  extra?: 'lanyard' | 'backpack' | 'paint' | 'necklace';
};

export const LOOKS: Record<CustomerLook, Look> = {
  student: { skin: 'skin1', hair: 'woodDark', hairStyle: 'short', jacket: 'mustard', shirt: 'white', legs: 'ink', shoes: 'red', eyes: 'plain', extra: 'backpack' },
  office: { skin: 'skin2', hair: 'ink', hairStyle: 'short', jacket: 'inkSoft', shirt: 'white', legs: 'ink', shoes: 'ink', eyes: 'glasses', extra: 'lanyard' },
  runner: { skin: 'skin3', hair: 'ink', hairStyle: 'cap', hat: 'red', jacket: 'teal', shirt: 'white', legs: 'inkSoft', shoes: 'white', eyes: 'sunglasses', extra: 'necklace' },
  grandpa: { skin: 'skin1', hair: 'white', hairStyle: 'sides', jacket: 'wood', shirt: 'paper', legs: 'paperShade', shoes: 'woodDark', eyes: 'glasses' },
  painter: { skin: 'skin2', hair: 'red', hairStyle: 'bun', jacket: 'tealDark', shirt: 'pink', legs: 'wood', shoes: 'ink', eyes: 'plain', extra: 'paint' },
};
