import { describe, expect, it } from 'vitest';
import { createCafeDatabase } from '../sql-core/db';
import { shortType, typeMeaning } from './typeInfo';

describe('type labels', () => {
  it('shortens the long time names', () => {
    expect(shortType('time without time zone')).toBe('time');
    expect(shortType('integer')).toBe('integer');
  });

  it('every type in the database has a plain-words label in both languages', async () => {
    const db = await createCafeDatabase();
    const res = await db.run(
      "SELECT DISTINCT data_type FROM information_schema.columns WHERE table_schema = 'public';",
    );
    expect(res.ok).toBe(true);
    if (!res.ok) return;
    for (const [type] of res.rows) {
      for (const lang of ['en', 'id'] as const) {
        expect(typeMeaning(String(type), lang), `${type} (${lang})`).toBeTruthy();
      }
    }
  });
});
