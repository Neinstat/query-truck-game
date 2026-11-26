import { useEffect } from 'react';
import type { UiText } from '../i18n';
import { objectForStation, type TruckObjectId } from '../sql-core/truck/objects';
import { STATIONS } from '../sql-core/stations';
import type { StationId } from '../sql-core/stations';

/** Where a table is looked at: the object whose station shows it (first match; a table can be on more than one). */
export function objectForTable(table: string): TruckObjectId | null {
  const station = (Object.keys(STATIONS) as StationId[]).find((id) => STATIONS[id].tables.includes(table));
  return station ? objectForStation(station) : null;
}

type Summary = { columns: string[]; count: number };

/**
 * The Data Lens database menu (9.4b): every table of the truck in one list, with its rows,
 * columns and where it lives. Opened with D while the lens is on; a click opens the table.
 */
export function DatabaseMenu({
  tables,
  summaries,
  needed,
  t,
  onOpen,
  onClose,
}: {
  tables: string[];
  summaries: Record<string, Summary>;
  needed: string[];
  t: UiText;
  onOpen: (object: TruckObjectId, table: string) => void;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.code === 'KeyD') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="menu-screen" role="dialog" aria-label={t.databaseTitle}>
      <div className="title-card shop-card">
        <h2 className="pause-title">🗄 {t.databaseTitle}</h2>
        <p className="pause-hint">{t.databaseIntro}</p>
        <ul className="db-list">
          {tables.map((table) => {
            const object = objectForTable(table);
            const s = summaries[table];
            return (
              <li key={table}>
                <button type="button" className="db-table" disabled={!object} onClick={() => object && onOpen(object, table)}>
                  <code>
                    {needed.includes(table) ? '★ ' : ''}
                    {table}
                  </code>
                  <span>{s ? `${t.lensRows(s.count)} · ${t.databaseColumns(s.columns.length)}` : '…'}</span>
                  {object && <span className="db-where">{t.truckThings[object]}</span>}
                </button>
              </li>
            );
          })}
        </ul>
        <button type="button" className="menu-button menu-button-main" onClick={onClose}>
          {t.shopClose}
        </button>
      </div>
    </div>
  );
}
