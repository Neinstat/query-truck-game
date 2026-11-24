/**
 * The SQL concepts customers' orders practise (GAME_DESIGN.md §5). Each order template has one
 * concept; the player's mastery of each concept decides which orders come back on which day.
 * Weeks 1 and 2 so far; Phase 6 adds the other weeks.
 */
import type { Lang } from '../feedback';
import { getChapters, type Level } from '../levels';
import { CONCEPT_NAMES_ID } from './locales/id/concepts';

export type ConceptId = 'select-all' | 'select-column' | 'select-columns' | 'where-compare' | 'where-text' | 'and' | 'in' | 'like' | 'is-null';

/** In teaching order: new concepts are introduced in this order, a few per day. */
export const CONCEPTS: readonly ConceptId[] = ['select-all', 'select-column', 'select-columns', 'where-compare', 'where-text', 'and', 'in', 'like', 'is-null'];

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
};

/** The lesson card for a concept, in the player's language. */
export function conceptLesson(concept: ConceptId, lang: Lang): Level['lesson'] {
  const id = LESSON_FROM[concept];
  return getChapters(lang)
    .flatMap((c) => c.levels)
    .find((l) => l.id === id)?.lesson;
}
