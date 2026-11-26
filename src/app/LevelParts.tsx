import type { Level } from '../sql-core/levels';
import { useEffect, useState } from 'react';
import type { CafeDatabase, QueryResult } from '../sql-core/db';
import type { UiText } from '../i18n';
import { ResultTable } from '../console/ResultTable';

/* Pieces of a level shown in the game world's overlays. */

/** Hints are revealed one at a time: general direction → clause → almost the answer. */
export function Hints({ hints, used, onReveal, t }: { hints: string[]; used: number; onReveal: () => void; t: UiText }) {
  return (
    <div className="hints">
      {hints.slice(0, used).map((hint, i) => (
        <p key={i} className="hint">
          <span className="hint-label">💡 {t.hintTitle(i + 1)}</span> {hint}
        </p>
      ))}
      {used < hints.length && (
        <button className="link-button" onClick={onReveal}>
          {t.hintButton(used, hints.length)}
        </button>
      )}
    </div>
  );
}

/** How many rows of the example's result a lesson card shows. */
const LESSON_ROWS = 4;

export function Lesson({ lesson, db, t }: { lesson: NonNullable<Level['lesson']>; db?: CafeDatabase | null; station?: Level['station']; t: UiText }) {
  const [result, setResult] = useState<QueryResult | null>(null);
  useEffect(() => {
    let alive = true;
    setResult(null);
    if (db && lesson.example) {
      db.run(lesson.example)
        .then((r) => alive && setResult(r))
        .catch(() => undefined);
    }
    return () => {
      alive = false;
    };
  }, [db, lesson.example]);
  return (
    <section className="lesson">
      <h3 className="lesson-title">📘 {lesson.title}</h3>
      {lesson.body.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {lesson.example && <pre className="lesson-example">{lesson.example}</pre>}
      {result?.ok && (
        <div className="lesson-result">
          <p className="lesson-result-label">{t.lessonResult}</p>
          <ResultTable columns={result.columns} rows={result.rows.slice(0, LESSON_ROWS)} rowsLabel={() => t.lessonRowsOf(Math.min(LESSON_ROWS, result.rows.length), result.rows.length)} />
        </div>
      )}
    </section>
  );
}
