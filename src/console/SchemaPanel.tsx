import type { Lang } from '../sql-core/feedback';
import { shortType, typeMeaning } from './typeInfo';

export type Table = { table: string; columns: { name: string; type: string }[] };

type Props = { tables: Table[]; title: string; lang?: Lang; columnLabel?: string; typeLabel?: string };

/** Each table as a small grid (column | type), with a note above it saying what its types mean. */
export function SchemaPanel({ tables, title, lang = 'en', columnLabel = 'Column', typeLabel = 'Type' }: Props) {
  return (
    <aside className="schema">
      <h2 className="schema-title">{title}</h2>
      {tables.map((t) => {
        const types = [...new Set(t.columns.map((c) => shortType(c.type)))];
        return (
          <div key={t.table} className="schema-table">
            <p className="schema-table-name">{t.table}</p>
            <ul className="schema-legend">
              {types.map((type) => {
                const meaning = typeMeaning(type, lang);
                return (
                  <li key={type}>
                    <code>{type}</code>
                    {meaning && <span> = {meaning}</span>}
                  </li>
                );
              })}
            </ul>
            <table className="schema-grid">
              <thead>
                <tr>
                  <th>{columnLabel}</th>
                  <th>{typeLabel}</th>
                </tr>
              </thead>
              <tbody>
                {t.columns.map((c) => (
                  <tr key={c.name}>
                    <td>{c.name}</td>
                    <td className="schema-type">{shortType(c.type)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </aside>
  );
}
