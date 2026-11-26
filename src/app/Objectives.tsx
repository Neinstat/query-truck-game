import { orderLine, type TruckOrder } from '../sql-core/truck/orders';
import type { Lang } from '../sql-core/feedback';
import type { UiText } from '../i18n';
import { objectives } from './objectives';
import type { DayLog } from '../sql-core/truck/day';

const ICON = { new: '⚪', ongoing: '🟡', done: '✅', failed: '❌' } as const;

/** Today's customers as an objectives list (9.4), top right. It never takes the mouse. */
export function Objectives({ day, orders, frontId, lang, t }: { day: DayLog; orders: readonly TruckOrder[]; frontId: string | null; lang: Lang; t: UiText }) {
  const list = objectives(day, frontId);
  return (
    <aside className="objectives" aria-label={t.objectivesTitle}>
      <p className="objectives-title">{t.objectivesTitle}</p>
      <ol>
        {list.map((o, i) => {
          const order = orders.find((x) => x.id === o.orderId);
          // A customer who has not come yet is not spoiled: only the ones met so far show their question.
          const line = order && o.state !== 'new' ? orderLine(order, lang) : '…';
          return (
            <li key={o.orderId} className={`objective objective-${o.state}`} title={t.objectiveStates[o.state]}>
              <span aria-hidden="true">{ICON[o.state]}</span>
              <span className="objective-text">
                {i + 1}. {line}
                {o.state === 'done' && o.stars ? ` ${'⭐'.repeat(o.stars)}` : ''}
                {(o.state === 'failed' || o.state === 'ongoing') && <em> {t.objectiveStates[o.state]}</em>}
              </span>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
