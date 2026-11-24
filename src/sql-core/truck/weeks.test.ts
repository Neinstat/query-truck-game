import { describe, expect, it } from 'vitest';
import { CONCEPTS, CONCEPT_WEEK } from './concepts';
import { WEEKS_ID } from './locales/id/weeks';
import { nextDay, planDay } from './repetition';
import { parseOrderId } from './orders';
import { DAYS_PER_WEEK, FIRST_WEEK, isWeekStart, LAST_WEEK, nextWorkday, WEEKS, weekInfo, weekOfDay } from './weeks';
import { FIRST_PLAY_DATE, serveOrder, type DayLog } from './day';

describe('weeks', () => {
  it('turns over after five days', () => {
    expect(weekOfDay(1)).toEqual({ week: FIRST_WEEK, dayInWeek: 1 });
    expect(weekOfDay(DAYS_PER_WEEK)).toEqual({ week: FIRST_WEEK, dayInWeek: 5 });
    expect(weekOfDay(DAYS_PER_WEEK + 1)).toEqual({ week: FIRST_WEEK + 1, dayInWeek: 1 });
    expect(isWeekStart(1)).toBe(true);
    expect(isWeekStart(2)).toBe(false);
    expect(isWeekStart(6)).toBe(true);
  });

  it('stays in week 6 (free mode) after the last week', () => {
    expect(weekOfDay(200).week).toBe(LAST_WEEK);
  });

  it('skips weekends on the calendar', () => {
    expect(nextWorkday('2026-11-01')).toBe('2026-11-02'); // Sunday → Monday
    expect(nextWorkday('2026-11-05')).toBe('2026-11-06'); // Thursday → Friday
    expect(nextWorkday('2026-11-06')).toBe('2026-11-09'); // Friday → Monday
    expect(nextWorkday('2026-11-07')).toBe('2026-11-09'); // Saturday → Monday
  });

  it('has a name, a teaching line and a translation for every week', () => {
    for (let w = 1; w <= LAST_WEEK; w++) {
      expect(WEEKS[w].name.length).toBeGreaterThan(0);
      expect(WEEKS[w].teaches.length).toBeGreaterThan(0);
      const id = weekInfo(w, 'id');
      expect(id.name).not.toBe(WEEKS[w].name);
      expect(id.teaches).not.toBe(WEEKS[w].teaches);
      // The case exists in both languages or in neither.
      expect(Boolean(id.managerCase)).toBe(Boolean(WEEKS[w].managerCase));
      expect(Object.keys(WEEKS_ID[w]).sort()).toEqual(WEEKS[w].managerCase ? ['managerCase', 'name', 'teaches'] : ['name', 'teaches']);
    }
  });

  it('gives every concept a week from 1 to 6', () => {
    for (const c of CONCEPTS) expect(CONCEPT_WEEK[c]).toBeGreaterThanOrEqual(1);
    for (const c of CONCEPTS) expect(CONCEPT_WEEK[c]).toBeLessThanOrEqual(LAST_WEEK);
  });

  it('plans only the concepts of this week and earlier weeks', () => {
    // Before week 2 nothing is taught yet, so no orders can be planned.
    expect(planDay('2026-11-02', {}, [], 1)).toEqual([]);
    const ids = planDay('2026-11-02', {}, [], FIRST_WEEK);
    expect(ids.length).toBeGreaterThan(0);
    for (const id of ids) expect(CONCEPT_WEEK[parseOrderId(id)!.template.concept]).toBeLessThanOrEqual(FIRST_WEEK);
  });

  it('plans days on working days only, week after week', () => {
    const past: DayLog[] = [];
    let date = '';
    for (let n = 1; n <= 12; n++) {
      const day = nextDay(past);
      if (n > 1) {
        expect([0, 6]).not.toContain(new Date(`${day.date}T00:00:00Z`).getUTCDay());
        expect(day.date > date).toBe(true);
      } else expect(day.date).toBe(FIRST_PLAY_DATE);
      date = day.date;
      past.push(serveOrder(day, { orderId: day.orders[0], at: 600, tip: 1, stars: 3 }));
    }
    expect(past[5].date).toBe('2026-11-06');
    expect(past[6].date).toBe('2026-11-09'); // Friday → Monday, not Saturday
  });
});
