/**
 * How customers look (GAME_DESIGN.md §7). Every customer is put together at random from their
 * order (the same order always gives the same person): build, skin, hair, eyes, clothes and
 * extras, leaning on their kind (a student, an office worker, a runner, a grandpa, a painter).
 * Now and then a customer is a flat 2D cartoon or a brick toy figure instead (character.ts).
 * Our own characters. ⚠ Placeholder (docs/ASSETS.md).
 */
import type { CustomerLook } from '../../sql-core/truck/orders';
import type { Ink } from '../art/riso';
import { seededRandom } from './weather';

export type HairStyle = 'short' | 'long' | 'bun' | 'sides' | 'bald' | 'spiky' | 'curly' | 'ponytail' | 'cap' | 'beanie';
export type Eyes = 'plain' | 'glasses' | 'sunglasses' | 'sleepy' | 'wide';
export type Top = 'jacket' | 'hoodie' | 'tee' | 'sweater';
export type Lower = 'trousers' | 'shorts' | 'skirt';
export type Extra = 'backpack' | 'scarf' | 'headphones' | 'lanyard' | 'necklace' | 'bag' | 'paint' | 'beard' | 'moustache' | 'brows' | 'blush';

export type Look = {
  /** Height and width, around 1. */
  height: number;
  width: number;
  skin: Ink;
  hair: Ink;
  hairStyle: HairStyle;
  /** The cap's or beanie's colour. */
  hat: Ink;
  eyes: Eyes;
  top: Top;
  /** The top's colour, and the shirt under an open jacket (or the hoodie's strings). */
  outer: Ink;
  inner: Ink;
  lower: Lower;
  legs: Ink;
  shoes: Ink;
  extras: Extra[];
};

/** What a customer is drawn as. */
export type Kind = 'person' | 'cartoon' | 'brick';

const pick = <T>(random: () => number, list: readonly T[]): T => list[Math.floor(random() * list.length)];

const SKINS: Ink[] = ['skin1', 'skin2', 'skin3'];
const HAIR: Ink[] = ['ink', 'woodDark', 'wood', 'mustardDark', 'redDark', 'inkSoft'];
const BRIGHT: Ink[] = ['red', 'teal', 'mustard', 'pink', 'lilac', 'tealLight', 'peach', 'grass'];
const DARK: Ink[] = ['ink', 'inkSoft', 'tealDark', 'woodDark', 'redDark', 'grassDark', 'wood'];
const PALE: Ink[] = ['white', 'paper', 'paperShade', 'peach', 'tealLight', 'pink'];

/** Each kind of customer: what they tend to wear. */
const KINDS: Record<CustomerLook, { hair: HairStyle[]; tops: Top[]; lowers: Lower[]; extras: Extra[]; old?: boolean }> = {
  student: { hair: ['short', 'spiky', 'curly', 'ponytail', 'long', 'beanie', 'bun'], tops: ['hoodie', 'tee', 'jacket'], lowers: ['trousers', 'shorts', 'skirt'], extras: ['backpack', 'headphones', 'brows', 'blush'] },
  office: { hair: ['short', 'bun', 'long', 'bald', 'ponytail'], tops: ['jacket', 'sweater'], lowers: ['trousers', 'skirt'], extras: ['lanyard', 'bag', 'brows', 'moustache'] },
  runner: { hair: ['cap', 'short', 'ponytail', 'spiky', 'bald'], tops: ['tee', 'hoodie'], lowers: ['shorts', 'trousers'], extras: ['headphones', 'necklace', 'brows'] },
  grandpa: { hair: ['sides', 'bald', 'short'], tops: ['sweater', 'jacket'], lowers: ['trousers'], extras: ['moustache', 'beard', 'scarf', 'bag'], old: true },
  painter: { hair: ['bun', 'curly', 'long', 'beanie', 'short'], tops: ['tee', 'sweater', 'jacket'], lowers: ['trousers', 'skirt', 'shorts'], extras: ['paint', 'scarf', 'blush', 'bag'] },
};

/** How often a customer is a 2D cartoon or a brick toy instead of a low-poly person. */
export const CARTOON_CHANCE = 0.12;
export const BRICK_CHANCE = 0.12;

/** What kind of figure an order's customer is, from its seed. */
export function kindFor(seed: number): Kind {
  const r = seededRandom(seed ^ 0x5bd1e995)();
  return r < CARTOON_CHANCE ? 'cartoon' : r < CARTOON_CHANCE + BRICK_CHANCE ? 'brick' : 'person';
}

/** A low-poly person, put together at random (the same seed always gives the same person). */
export function lookFor(kind: CustomerLook, seed: number): Look {
  const random = seededRandom(seed);
  const k = KINDS[kind];
  const hairStyle = pick(random, k.hair);
  const top = pick(random, k.tops);
  const r = random();
  const eyes: Eyes = r < 0.55 ? 'plain' : r < 0.72 ? (k.old ? 'glasses' : 'wide') : r < 0.86 ? 'glasses' : r < 0.94 ? 'sleepy' : 'sunglasses';
  const extras = k.extras.filter(() => random() < 0.45);
  const outer = top === 'jacket' && random() < 0.5 ? pick(random, DARK) : pick(random, BRIGHT);
  return {
    height: k.old ? 0.94 + random() * 0.06 : 0.9 + random() * 0.18,
    width: 0.88 + random() * 0.32,
    skin: pick(random, SKINS),
    hair: k.old ? (random() < 0.7 ? 'white' : 'paperShade') : pick(random, HAIR),
    hairStyle,
    hat: pick(random, BRIGHT),
    eyes,
    top,
    outer,
    inner: pick(random, PALE),
    lower: pick(random, k.lowers),
    legs: pick(random, random() < 0.6 ? DARK : ['paperShade', 'wood', 'tealDark', 'lilac']),
    shoes: pick(random, ['ink', 'white', 'red', 'woodDark', 'teal'] as Ink[]),
    extras,
  };
}
