import { eggForQuery } from '../sql-core/truck/eggs';
import { findEgg } from '../app/eggs';
import { useEffect, useMemo, useState } from 'react';
import type { CafeDatabase, QueryResult } from '../sql-core/db';
import { runQuery } from '../sql-core/db';
import { formatFeedback, type Lang } from '../sql-core/feedback';
import type { StationId } from '../sql-core/stations';
import type { UiText } from '../i18n';
import { ResultTable } from './ResultTable';
import { SchemaPanel, type Table } from './SchemaPanel';
import { SqlEditor } from './SqlEditor';
import { WithCode } from './WithCode';

type Props = {
  db: CafeDatabase;
  /** The tables this object can see; queries run as its station, so others are refused. */
  station: StationId;
  schema: Table[];
  lang: Lang;
  t: UiText;
  /** Start on this table (e.g. one clicked in the Data Lens); default: the first one. */
  table?: string;
};

/**
 * Looking around with one object in the truck (the fridge, the menu board…): run any query on its
 * tables. Nothing is graded — this is where players check things before answering an order.
 */
/** The query that shows a table, as the explorer writes it. */
export const lookQuery = (table: string) => `SELECT *\nFROM ${table}\nLIMIT 10;`;

/**
 * Looking around with one object in the truck (the fridge, the menu board…): run any query on its
 * tables. Nothing is graded — this is where players check things before answering an order.
 * It opens with the first table already shown (the query runs at once), a button for each
 * table, how many rows the table has, and — while the query is the one that shows a table — what
 * each line of it does, for beginners.
 */
export function ExploreConsole({ db, station, schema, lang, t, table }: Props) {
  const first = schema.find((s) => s.table === table)?.table ?? schema[0]?.table;
  const [current, setCurrent] = useState(first);
  const [sql, setSql] = useState(first ? lookQuery(first) : '');
  const [editorKey, setEditorKey] = useState(0);
  const [result, setResult] = useState<QueryResult | null>(null);
  const [running, setRunning] = useState(false);
  const [total, setTotal] = useState<number | null>(null);

  const completionSchema = useMemo(
    () => Object.fromEntries(schema.map((tbl) => [tbl.table, tbl.columns.map((c) => c.name)])),
    [schema],
  );

  async function runSql(text: string) {
    if (running) return;
    setRunning(true);
    try {
      const egg = eggForQuery(text);
      if (egg) findEgg(egg);
      setResult(await runQuery(db, text, station));
    } finally {
      setRunning(false);
    }
  }
  const run = () => runSql(sql);

  /** Show a table: its query goes in the editor and runs, and its row count is looked up. */
  async function show(name: string) {
    const text = lookQuery(name);
    setCurrent(name);
    setSql(text);
    setEditorKey((k) => k + 1);
    setTotal(null);
    await runSql(text);
    const count = await runQuery(db, `SELECT COUNT(*) FROM ${name};`, station);
    if (count.ok) setTotal(Number(count.rows[0]?.[0] ?? 0));
  }

  // Open with the first table already on screen.
  useEffect(() => {
    if (first) void show(first);
    // Only when the console opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const explained = current !== undefined && sql.trim() === lookQuery(current).trim();

  return (
    <div className="console">
      <SchemaPanel tables={schema} title={t.tables} />
      <section className="workspace">
        {schema.length > 0 && (
          <div className="explore-tables" role="group" aria-label={t.tables}>
            <span className="case-label">{t.exploreShow}</span>
            {schema.map((tbl) => (
              <button
                key={tbl.table}
                className={tbl.table === current ? 'explore-table active' : 'explore-table'}
                aria-pressed={tbl.table === current}
                onClick={() => show(tbl.table)}
              >
                <code>{tbl.table}</code>
              </button>
            ))}
          </div>
        )}
        <SqlEditor key={editorKey} initialValue={sql} onChange={setSql} onRun={run} schema={completionSchema} label="SQL" />
        <div className="toolbar">
          <button className="run-button" onClick={run} disabled={running}>
            {running ? t.running : t.run}
          </button>
          {running && db.stop && (
            <button className="secondary-button" onClick={() => db.stop?.()}>
              ■ {t.stop}
            </button>
          )}
          <span className="shortcut">{t.shortcut}</span>
        </div>
        {explained && current && (
          <div className="explain-query" aria-label={t.exploreHowTitle}>
            <p className="explain-title">🔎 {t.exploreHowTitle}</p>
            <ol>
              <li>
                <code>SELECT *</code> — {t.exploreSelect}
              </li>
              <li>
                <code>FROM {current}</code> — {t.exploreFrom(current)}
              </li>
              <li>
                <code>LIMIT 10;</code> — {t.exploreLimit(total)}
              </li>
            </ol>
            <p className="explain-try">✏️ {t.exploreTry(schema.find((x) => x.table === current)?.columns[1]?.name ?? 'name')}</p>
          </div>
        )}
        {result && !result.ok && (
          <p className="feedback feedback-wrong" role="status">
            <WithCode text={formatFeedback(result.error, lang)} />
          </p>
        )}
        {result?.ok && <ResultTable columns={result.columns} rows={result.rows} rowsLabel={t.rows} shownLabel={t.rowsShown} />}
      </section>
    </div>
  );
}
