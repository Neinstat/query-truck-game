import { describe, expect, it } from 'vitest';
import { CONCEPT_WEEK, conceptLesson, type ConceptId } from './concepts';

const concepts = Object.keys(CONCEPT_WEEK) as ConceptId[];

describe('lesson cards', () => {
  for (const lang of ['en', 'id'] as const) {
    it(`have no dashes in the ${lang} text`, () => {
      for (const c of concepts) {
        const lesson = conceptLesson(c, lang);
        if (!lesson) continue;
        for (const text of [lesson.title, ...lesson.body]) {
          expect(text, `${c} (${lang})`).not.toMatch(/ — | – |--/);
        }
      }
    });
  }

  it('every concept has a lesson with an example query to show the result of', () => {
    for (const c of concepts) {
      const lesson = conceptLesson(c, 'en');
      expect(lesson?.example, c).toBeTruthy();
    }
  });
});
