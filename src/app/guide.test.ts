import { describe, expect, it } from 'vitest';
import { STATIONS } from '../sql-core/stations';
import { TOUR_STOPS } from '../game/truck/world';
import { GUIDE, guideFor } from './guide';
import { GUIDE_ID } from './locales/id/guide';

describe('the how-to-play guide', () => {
  it('is translated to Indonesian page by page, with the same shape', () => {
    expect(GUIDE_ID.map((p) => p.id)).toEqual(GUIDE.map((p) => p.id));
    for (const [i, page] of GUIDE.entries()) {
      const id = GUIDE_ID[i];
      expect(id.paragraphs.length, page.id).toBe(page.paragraphs.length);
      expect(id.items?.length, page.id).toBe(page.items?.length);
      page.items?.forEach((item, k) => {
        expect(id.items![k].tables).toEqual(item.tables);
        expect(id.items![k].object).toBe(item.object);
        expect(Boolean(id.items![k].example)).toBe(Boolean(item.example));
      });
    }
    expect(guideFor('id')).toBe(GUIDE_ID);
    expect(guideFor('en')).toBe(GUIDE);
  });

  it('only names tables that exist in the truck', () => {
    const tables = new Set(Object.values(STATIONS).flatMap((s) => s.tables));
    for (const item of GUIDE.flatMap((p) => p.items ?? [])) for (const t of item.tables ?? []) expect(tables.has(t), t).toBe(true);
  });

  it('shows every stop of the truck tour on the truck page, in tour order', () => {
    const truck = GUIDE.find((p) => p.id === 'truck')!;
    expect(truck.items!.map((i) => i.object)).toEqual(TOUR_STOPS.map((s) => s.object));
  });
});
