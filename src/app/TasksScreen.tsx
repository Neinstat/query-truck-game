import type { UiText } from '../i18n';
import type { Lang } from '../sql-core/feedback';
import { conceptName } from '../sql-core/truck/concepts';
import type { DayLog } from '../sql-core/truck/day';
import { orderLine, type TruckOrder } from '../sql-core/truck/orders';
import { stumble, taskRows } from './tasks';

/**
 * The orders list (9.4b), opened with O or the ❗ button: today's customers in the order they
 * arrive, with what is going on (waiting now, still to come, done with stars, or left) and, where
 * stars were lost or a customer left, which SQL topic to practise.
 */
export function TasksScreen({
  orders,
  day,
  frontId,
  answerWhere,
  lang,
  t,
  onClose,
}: {
  orders: readonly TruckOrder[];
  day: DayLog;
  frontId: string | null;
  /** Where the order at the window is answered ("at the fridge"), or null. */
  answerWhere: string | null;
  lang: Lang;
  t: UiText;
  onClose: () => void;
}) {
  const rows = taskRows(
    orders.map((o) => o.id),
    day,
    frontId,
  );
  return (
    <div className="menu-screen" role="dialog" aria-label={t.tasksTitle}>
      <div className="title-card tasks-card">
        <h2 className="pause-title">{t.tasksTitle}</h2>
        <ul className="tasks-list">
          {rows.map((row, i) => {
            // The customers still to come are one line, not one each.
            if (row.status === 'next' && rows.findIndex((r) => r.status === 'next') !== i) return null;
            const order = orders[i];
            const comingCount = rows.filter((r) => r.status === 'next').length;
            const why = stumble(row.stars);
            return (
              <li key={row.id} className={`task task-${row.status}`}>
                <span className="task-icon" aria-hidden="true">
                  {row.status === 'done' ? '✅' : row.status === 'now' ? '❗' : row.status === 'left' ? '❌' : '⏳'}
                </span>
                <div className="task-body">
                  <strong>{row.status === 'next' ? t.tasksNext(comingCount) : orderLine(order, lang)}</strong>
                  <span className="task-meta">
                    {row.status === 'next' ? t.tasksStatus.next : t.tasksStatus[row.status]}
                    {row.status === 'done' && row.stars !== null && ` · ${'⭐'.repeat(row.stars)}`}
                    {row.status === 'now' && answerWhere ? ` · ${t.truckAnswerAt(answerWhere)}` : ''}
                  </span>
                  {(why || row.status === 'left') && (
                    <span className="task-practise">
                      {row.status === 'left' ? t.tasksLeft : why === 'hints' ? t.tasksHints : t.tasksMistake} {conceptName(order.concept, lang)}
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        <button className="menu-button menu-button-main" onClick={onClose} autoFocus>
          {t.shopClose}
        </button>
      </div>
    </div>
  );
}
