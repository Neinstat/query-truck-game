import type { CoachStepId } from './coach';
import { coachFor } from './coach';
import type { Lang } from '../sql-core/feedback';

/** The first-day coach hint (9.3): a card at the top of the view that never takes the mouse. */
export function Coach({ step, lang, where }: { step: CoachStepId; lang: Lang; where: string | null }) {
  const c = coachFor(lang)[step];
  return (
    <aside className="coach" role="status" aria-live="polite">
      <p className="coach-title">
        <span aria-hidden="true">{c.icon}</span> {c.title}
      </p>
      <p className="coach-text">{c.text}</p>
      {step === 'aim' && where && <p className="coach-where">👉 {where}</p>}
      {c.points && (
        <ul className="coach-points">
          {c.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
    </aside>
  );
}
