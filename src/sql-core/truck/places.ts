/**
 * Where the truck parks today (GAME_DESIGN.md §3, §7): a different spot in the city each day, so
 * the view out of the window never gets boring. The places take turns in a fixed order, starting
 * in the park on day 1; the same day always has the same place (also after a reload). Pure data:
 * the 3D scenery for each place is built in src/game/truck/scenery.ts.
 */
import type { Lang } from '../feedback';

export type PlaceId = 'park' | 'skatepark' | 'school' | 'harbour' | 'square';

export type Place = {
  id: PlaceId;
  icon: string;
  name: Record<Lang, string>;
  /** One line about the spot, for the title screen. */
  blurb: Record<Lang, string>;
};

/** In the order the truck visits them. */
export const PLACES: readonly Place[] = [
  {
    id: 'park',
    icon: '🌳',
    name: { en: 'City Park', id: 'Taman Kota' },
    blurb: { en: 'Lawns, picnic tables and string lights.', id: 'Rumput, meja piknik, dan lampu gantung.' },
  },
  {
    id: 'skatepark',
    icon: '🛹',
    name: { en: 'Skatepark under the Overpass', id: 'Skatepark di Bawah Jalan Layang' },
    blurb: { en: 'Ramps, rails and traffic rumbling overhead.', id: 'Ramp, rail, dan lalu lintas bergemuruh di atas.' },
  },
  {
    id: 'school',
    icon: '🏫',
    name: { en: 'Behind the School', id: 'Di Belakang Sekolah' },
    blurb: { en: 'A basketball court, bikes and the school bell.', id: 'Lapangan basket, sepeda, dan bel sekolah.' },
  },
  {
    id: 'harbour',
    icon: '⚓',
    name: { en: 'Harbour Pier', id: 'Dermaga Pelabuhan' },
    blurb: { en: 'Boats, gulls and a lighthouse.', id: 'Kapal, burung camar, dan mercusuar.' },
  },
  {
    id: 'square',
    icon: '⛲',
    name: { en: 'Town Square', id: 'Alun-Alun Kota' },
    blurb: { en: 'Market stalls around a fountain and a clock tower.', id: 'Lapak pasar di sekitar air mancur dan menara jam.' },
  },
];

/** Where the truck parks on a day (day 1 = the first day played). */
export function placeForDay(dayNumber: number): Place {
  const n = PLACES.length;
  const i = (((Math.max(1, Math.floor(dayNumber)) - 1) % n) + n) % n;
  return PLACES[i];
}
