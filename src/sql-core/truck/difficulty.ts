/**
 * The difficulty choice (GAME_DESIGN.md §5, "Input: the player's choice"): how much of each query
 * the player writes, chosen once on the first start and changeable later. It replaces the old
 * fixed "input grows with the week" rule, which lives on as the fourth option, *Grow with me*
 * (what saves from before 6.3 keep).
 */
import type { InputMode } from '../levels';
import { stagedInput, stageFor } from './orders';
import type { OrderTemplate, TemplateVariant } from './templates';
import { blocksFor, queryTokens } from './templates.week1';

export type Difficulty = 'cards' | 'fill' | 'write' | 'grow';

/** In the order the choice screen shows them (Grow with me is the quiet fourth). */
export const DIFFICULTIES: readonly Difficulty[] = ['cards', 'fill', 'write', 'grow'];

export const parseDifficulty = (value: unknown): Difficulty | undefined =>
  DIFFICULTIES.find((d) => d === value);

/** Where free typing starts for a beginner who writes everything: the part every query shares. */
export const WRITE_STARTER = 'SELECT * FROM ';

/** Word blocks for any order: the template's own (week 1, with decoys) or the solution's words. */
function cardsInput(template: OrderTemplate, variant: TemplateVariant): InputMode {
  const own = template.input(variant.params);
  if (own.kind === 'blocks') return own;
  return { kind: 'blocks', blocks: blocksFor(template.solution(variant.params), []) };
}

/** A partly written query: the template's own gaps (week 2 on), or the columns/table of a week-1 query. */
function fillInput(template: OrderTemplate, variant: TemplateVariant): InputMode {
  const own = template.input(variant.params);
  if (own.kind === 'fill-blank') return own;
  const solution = template.solution(variant.params);
  const m = /^SELECT (.+?) FROM (\w+)(.*;)$/s.exec(solution);
  if (!m) return { kind: 'blocks', blocks: queryTokens(solution) };
  const [, columns, table, rest] = m;
  // `SELECT * FROM ___;` for "show everything", otherwise the column list is the gap.
  return columns === '*'
    ? { kind: 'fill-blank', template: `SELECT * FROM ___${rest}`, answers: [table], blankSize: 12 }
    : { kind: 'fill-blank', template: `SELECT ___ FROM ${table}${rest}`, answers: [columns], blankSize: 16 };
}

/**
 * The input an order uses for the player's difficulty. `level` is the mastery of the order's
 * concept before today (only *Grow with me* looks at it).
 */
export function inputFor(
  template: OrderTemplate,
  variant: TemplateVariant,
  difficulty: Difficulty,
  level: number | undefined,
): InputMode {
  switch (difficulty) {
    case 'cards':
      return cardsInput(template, variant);
    case 'fill':
      return fillInput(template, variant);
    case 'write':
      return { kind: 'free', starter: WRITE_STARTER };
    case 'grow':
      return stagedInput(template, variant, stageFor(template, variant, level));
  }
}
