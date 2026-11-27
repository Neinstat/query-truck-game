import { useMemo, useState } from 'react';
import { runQuery, type CafeDatabase, type QueryResult } from '../sql-core/db';
import { checkConclusion, type ConclusionVerdict, type GivenAnswer } from '../sql-core/cases';
import { formatCaseFeedback, formatFeedback, type Lang } from '../sql-core/feedback';
import { BLANK, type CaseLevel } from '../sql-core/levels';
import type { UiText } from '../i18n';
import { ResultTable } from './ResultTable';
import { WithCode } from './WithCode';
import { SchemaPanel, type Table } from './SchemaPanel';
import { SqlEditor } from './SqlEditor';
import { sound } from '../audio/sound';

type Props = {
  db: CafeDatabase;
  schema: Table[];
  level: CaseLevel;
  lang: Lang;
  t: UiText;
  /** Hints shown so far (all steps together, for stars), and showing one more. */
  hintsUsed: number;
  onRevealHint: () => void;
  /** Every question answered. `wrongAnswers` = answers the data didn't support (for stars). */
  onSolved: (wrongAnswers: number) => void;
  /** Shown once the last question is answered. */
  solvedPanel?: React.ReactNode;
  /** Who is asking (for "The Manager says…"). */
  asker?: string;
};

/**
 * A guided case (GAME_DESIGN.md §5, the Manager's knock): one question at a time. Each step
 * says what to find, starts the editor with its query (with a ___ to fill), ticks off
 * "run it → read it → answer it", and has its own hints. The last result the player ran is the
 * proof of the answer, so there is nothing to pin.
 */
export function GuidedCase({ db, schema, level, lang, t, hintsUsed, onRevealHint, onSolved, solvedPanel, asker }: Props) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState<boolean[]>(() => level.questions.map(() => false));
  const [sql, setSql] = useState(level.questions[0]?.guide?.starter ?? level.starters[0] ?? '');
  const [editorKey, setEditorKey] = useState(0);
  const [result, setResult] = useState<QueryResult | null>(null);
  const [running, setRunning] = useState(false);
  const [blankLeft, setBlankLeft] = useState(false);
  const [answer, setAnswer] = useState<GivenAnswer>(null);
  const [verdict, setVerdict] = useState<ConclusionVerdict | null>(null);
  const [checking, setChecking] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  /** Hints shown in each step. */
  const [shown, setShown] = useState<number[]>(() => level.questions.map(() => 0));

  const question = level.questions[step];
  const guide = question.guide;
  const starter = guide?.starter ?? level.starters[step] ?? '';
  const hints = guide?.hints ?? level.hints;
  const allDone = done.every(Boolean);
  const stepDone = done[step];
  const ran = result?.ok === true;
  const answered = answer !== null && answer !== '';
  const completionSchema = useMemo(
    () => Object.fromEntries(schema.map((tbl) => [tbl.table, tbl.columns.map((c) => c.name)])),
    [schema],
  );
  void hintsUsed;

  function openStep(i: number) {
    const s = level.questions[i]?.guide?.starter ?? level.starters[i] ?? '';
    setStep(i);
    setSql(s);
    setEditorKey((k) => k + 1);
    setResult(null);
    setBlankLeft(false);
    setAnswer(null);
    setVerdict(null);
  }

  async function run() {
    if (running) return;
    // A blank still in the query: say so plainly instead of showing a syntax error.
    if (sql.includes(BLANK)) {
      setBlankLeft(true);
      sound.play('wrong');
      return;
    }
    setBlankLeft(false);
    setRunning(true);
    try {
      const r = await runQuery(db, sql, level.station);
      setResult(r);
      sound.play(r.ok ? 'run' : 'wrong');
    } finally {
      setRunning(false);
    }
  }

  async function submit() {
    if (checking || stepDone) return;
    setChecking(true);
    try {
      const proof = result?.ok ? { columns: result.columns, rows: result.rows } : null;
      const v = await checkConclusion(db, question, answer, proof);
      setVerdict(v);
      if (v.correct) {
        sound.play('correct');
        const next = done.map((d, i) => d || i === step);
        setDone(next);
        if (next.every(Boolean)) onSolved(wrongAnswers);
      } else {
        sound.play('wrong');
        if (v.feedback.kind === 'answer-wrong') setWrongAnswers((n) => n + 1);
      }
    } finally {
      setChecking(false);
    }
  }

  function revealHint() {
    if (shown[step] >= hints.length) return;
    setShown((list) => list.map((n, i) => (i === step ? n + 1 : n)));
    onRevealHint();
  }

  const tick = (on: boolean) => (on ? '✅' : '⬜');
  const feedback = (v: ConclusionVerdict) => {
    if (v.correct) return null;
    const kind = v.feedback.kind;
    if (kind === 'no-evidence' || !ran) return t.guidedRunFirst;
    if (kind === 'answer-wrong') return t.guidedWrong;
    if (kind === 'no-answer') return t.guidedNoAnswer;
    // The answer is right but the last result doesn't show it.
    return `${t.guidedProof} ${formatCaseFeedback(v.feedback, lang)}`;
  };

  return (
    <div className="guided-case">
      <ol className="guided-steps" aria-label={t.guidedSteps}>
        {level.questions.map((q, i) => (
          <li key={i} className={i === step ? 'guided-step current' : done[i] ? 'guided-step done' : 'guided-step'}>
            <button className="guided-step-button" onClick={() => openStep(i)} disabled={!done[i] && i > 0 && !done[i - 1] && i !== step}>
              <span className="guided-step-number">{done[i] ? '✓' : i + 1}</span>
              <span className="guided-step-text">{q.prompt}</span>
            </button>
          </li>
        ))}
      </ol>

      <div className="console guided-console">
        <SchemaPanel tables={schema} title={t.tables} lang={lang} columnLabel={t.columnHeader} typeLabel={t.typeHeader} />
        <section className="workspace">
          <div className="guided-question">
            <p className="guided-asks">
              {asker ?? t.guidedAsker} · {t.guidedQuestion(step + 1, level.questions.length)}
            </p>
            <p className="guided-prompt">{question.prompt}</p>
            {guide && <p className="guided-goal">💡 {guide.goal}</p>}
            <ul className="guided-checklist">
              <li>
                {tick(ran)} {t.guidedDo1}
              </li>
              <li>
                {tick(ran && answered)} {guide ? guide.read : t.guidedDo2}
              </li>
              <li>
                {tick(stepDone)} {t.guidedDo3}
              </li>
            </ul>
          </div>

          <SqlEditor key={`${step}-${editorKey}`} initialValue={sql} onChange={setSql} onRun={run} schema={completionSchema} label="SQL" />
          <div className="toolbar">
            <button className="run-button" onClick={run} disabled={running}>
              {running ? t.running : t.run}
            </button>
            <button
              className="secondary-button"
              onClick={() => {
                setSql(starter);
                setEditorKey((k) => k + 1);
              }}
            >
              ↺ {t.guidedReset}
            </button>
            <span className="shortcut">{t.shortcut}</span>
          </div>
          {blankLeft && (
            <p className="feedback feedback-wrong" role="status">
              {t.guidedBlank}
            </p>
          )}
          {result && !result.ok && (
            <p className="feedback feedback-wrong" role="status">
              <WithCode text={formatFeedback(result.error, lang)} />
            </p>
          )}
          {result?.ok && <ResultTable columns={result.columns} rows={result.rows} rowsLabel={t.rows} shownLabel={t.rowsShown} />}

          <div className="guided-hints">
            {hints.slice(0, shown[step]).map((h, i) => (
              <p key={i} className="hint">
                <strong>{t.hintTitle(i + 1)}:</strong> <WithCode text={h} />
              </p>
            ))}
            {!stepDone && shown[step] < hints.length && (
              <button className="link-button" onClick={revealHint}>
                💡 {t.hintButton(shown[step], hints.length)}
              </button>
            )}
          </div>

          <div className={stepDone ? 'guided-answer done' : 'guided-answer'}>
            <span className="case-label">{t.guidedYourAnswer}</span>
            {question.answer.kind === 'choice' ? (
              <div className="conclusion-choices" role="radiogroup" aria-label={question.prompt}>
                {question.answer.choices.map((choice, c) => (
                  <label key={c} className="conclusion-choice">
                    <input type="radio" name={`${level.id}-step${step}`} checked={answer === c} disabled={stepDone} onChange={() => setAnswer(c)} />
                    {choice}
                  </label>
                ))}
              </div>
            ) : (
              <input
                className="conclusion-input"
                inputMode="decimal"
                placeholder={t.answerPlaceholder}
                aria-label={question.prompt}
                value={answer === null ? '' : String(answer)}
                disabled={stepDone}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && submit()}
              />
            )}
            {!stepDone && (
              <button className="primary-button" onClick={submit} disabled={checking || !answered}>
                {t.guidedSend}
              </button>
            )}
          </div>
          {verdict && !verdict.correct && (
            <p className="feedback feedback-wrong" role="status">
              <WithCode text={feedback(verdict) ?? ''} />
            </p>
          )}
          {stepDone && !allDone && (
            <div className="guided-reply">
              {guide?.reply && <p className="guided-reply-line">“{guide.reply}”</p>}
              <button className="primary-button" onClick={() => openStep(done.findIndex((d) => !d))}>
                {t.guidedNext} →
              </button>
            </div>
          )}
          {allDone && (
            <>
              <p className="feedback feedback-correct" role="status">
                ✓ {t.correct}
              </p>
              {solvedPanel}
            </>
          )}
        </section>
      </div>
    </div>
  );
}
