import { describe, expect, it } from 'vitest';
import { STATIONS } from '../sql-core/stations';
import { objectForTable } from './DatabaseMenu';
import { ui } from '../i18n';

describe('the Data Lens database menu', () => {
  it('knows where every table of the truck lives', () => {
    for (const station of Object.values(STATIONS)) {
      for (const table of station.tables) expect(objectForTable(table), table).not.toBeNull();
    }
    expect(objectForTable('no_such_table')).toBeNull();
  });
  it('has its text in both languages', () => {
    expect(ui.id.databaseTitle).toBeTruthy();
    expect(ui.id.databaseIntro).not.toBe(ui.en.databaseIntro);
    expect(ui.id.databaseColumns(3)).not.toBe(ui.en.databaseColumns(3));
  });
});
