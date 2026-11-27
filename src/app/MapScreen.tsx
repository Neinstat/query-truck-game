import { useState } from 'react';
import type { UiText } from '../i18n';
import type { Lang } from '../sql-core/feedback';
import { BUSY_LABEL, isUnlocked, payLabel, PLACE_RULES } from '../sql-core/truck/map';
import { PLACES, type PlaceId } from '../sql-core/truck/places';

/**
 * The morning map (9.6): the player is at home and picks where the truck parks today. Places that
 * are not open yet are greyed out with the day they open; busier places pay more coins.
 */
export function MapScreen({
  dayNumber,
  suggested,
  lang,
  t,
  onChoose,
}: {
  dayNumber: number;
  /** The place the fixed rotation would have picked: preselected. */
  suggested: PlaceId;
  lang: Lang;
  t: UiText;
  onChoose: (place: PlaceId) => void;
}) {
  const [picked, setPicked] = useState<PlaceId>(isUnlocked(suggested, dayNumber) ? suggested : 'park');
  return (
    <div className="map-screen" role="dialog" aria-label={t.mapTitle}>
      <div className="map-card">
        <p className="week-card-kicker">{t.mapKicker}</p>
        <h2 className="week-card-name">{t.mapTitle}</h2>
        <p className="map-hint">{t.mapHint}</p>
        <ul className="map-places">
          {PLACES.map((p) => {
            const open = isUnlocked(p.id, dayNumber);
            const rule = PLACE_RULES[p.id];
            return (
              <li key={p.id}>
                <button
                  type="button"
                  className={`map-place${picked === p.id ? ' picked' : ''}${open ? '' : ' locked'}`}
                  disabled={!open}
                  aria-pressed={picked === p.id}
                  onClick={() => setPicked(p.id)}
                >
                  <span className="map-place-icon" aria-hidden="true">{open ? p.icon : '🔒'}</span>
                  <span className="map-place-text">
                    <strong>{p.name[lang]}</strong>
                    <span>{open ? p.blurb[lang] : t.mapLocked(rule.unlockDay)}</span>
                  </span>
                  <span className="map-place-pay">
                    <em>{BUSY_LABEL[rule.busy][lang]}</em>
                    {t.mapPay(payLabel(p.id))}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <button type="button" className="week-card-go" onClick={() => onChoose(picked)} autoFocus>
          {t.mapGo}
        </button>
      </div>
    </div>
  );
}
