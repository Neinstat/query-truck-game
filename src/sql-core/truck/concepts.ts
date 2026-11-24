/**
 * The SQL concepts customers' orders practise (GAME_DESIGN.md §5). Each order template has one
 * concept; the player's mastery of each concept decides which orders come back on which day.
 * Weeks 1–4 so far; Phase 6 adds the other weeks.
 */
import type { Lang } from '../feedback';
import { getChapters, type Level } from '../levels';
import { CONCEPT_NAMES_ID } from './locales/id/concepts';

export type ConceptId = 'select-all' | 'select-column' | 'select-columns' | 'where-compare' | 'where-text' | 'and' | 'in' | 'like' | 'is-null' | 'order-by' | 'limit' | 'distinct' | 'alias' | 'sort-nulls' | 'count' | 'sum' | 'avg-round' | 'group-by' | 'having' | 'dates';

/** In teaching order: new concepts are introduced in this order, a few per day. */
export const CONCEPTS: readonly ConceptId[] = ['select-all', 'select-column', 'select-columns', 'where-compare', 'where-text', 'and', 'in', 'like', 'is-null', 'order-by', 'limit', 'distinct', 'alias', 'sort-nulls', 'count', 'sum', 'avg-round', 'group-by', 'having', 'dates'];

export const CONCEPT_NAMES: Record<ConceptId, string> = {
  'select-all': 'Everything in a table: SELECT *',
  'select-column': 'One column with SELECT',
  'select-columns': 'Several columns with SELECT',
  'where-compare': 'WHERE with < and >=',
  'where-text': "WHERE with 'text'",
  and: 'Two conditions with AND',
  in: 'A list of values with IN',
  like: 'Patterns with LIKE',
  'is-null': 'Empty values: IS NULL',
  'order-by': 'Sorting with ORDER BY',
  limit: 'Top lists with LIMIT',
  distinct: 'Each value once: DISTINCT',
  alias: 'Calculated columns with AS',
  'sort-nulls': 'Sorting and empty values',
  count: 'Counting rows with COUNT',
  sum: 'Adding up with SUM',
  'avg-round': 'Averages and ROUND',
  'group-by': 'One row per group: GROUP BY',
  having: 'Filtering groups with HAVING',
  dates: 'Dates: DATE_TRUNC and EXTRACT',
};

/** The week (1–6) each concept is taught in; the planner only uses concepts up to this week. */
export const CONCEPT_WEEK: Record<ConceptId, number> = {
  'select-all': 1,
  'select-column': 1,
  'select-columns': 1,
  'where-compare': 2,
  'where-text': 2,
  and: 2,
  in: 2,
  like: 2,
  'is-null': 2,
  'order-by': 3,
  limit: 3,
  distinct: 3,
  alias: 3,
  'sort-nulls': 3,
  count: 4,
  sum: 4,
  'avg-round': 4,
  'group-by': 4,
  having: 4,
  dates: 4,
};

export const conceptName = (concept: ConceptId, lang: Lang): string =>
  (lang === 'id' ? CONCEPT_NAMES_ID[concept] : undefined) ?? CONCEPT_NAMES[concept];

/** The chapter level whose lesson card teaches each concept (Chapter 1). */
const LESSON_FROM: Record<ConceptId, string> = {
  'select-all': 'ch0-1',
  'select-column': 'ch0-2',
  'select-columns': 'ch0-3',
  'where-compare': 'ch1-1',
  'where-text': 'ch1-2',
  and: 'ch1-3',
  in: 'ch1-4',
  like: 'ch1-5',
  'is-null': 'ch1-6',
  'order-by': 'ch2-1',
  limit: 'ch2-2',
  distinct: 'ch2-3',
  alias: 'ch2-4',
  'sort-nulls': 'ch2-5',
  count: 'ch3-1',
  sum: 'ch3-2',
  'avg-round': 'ch3-3',
  'group-by': 'ch3-4',
  having: 'ch3-6',
  dates: 'ch3-5',
};

/** The lesson card for a concept, in the player's language. */
export function conceptLesson(concept: ConceptId, lang: Lang): Level['lesson'] {
  const id = LESSON_FROM[concept];
  return getChapters(lang)
    .flatMap((c) => c.levels)
    .find((l) => l.id === id)?.lesson;
}
