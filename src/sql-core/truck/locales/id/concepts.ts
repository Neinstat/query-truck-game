import type { ConceptId } from '../../concepts';

/** Indonesian names of the concepts (SQL words stay in English). */
export const CONCEPT_NAMES_ID: Record<ConceptId, string> = {
  'select-all': 'Semua isi tabel: SELECT *',
  'select-column': 'Satu kolom dengan SELECT',
  'select-columns': 'Beberapa kolom dengan SELECT',
  'where-compare': 'WHERE dengan < dan >=',
  'where-text': "WHERE dengan 'teks'",
  and: 'Dua syarat dengan AND',
  in: 'Daftar nilai dengan IN',
  like: 'Pola dengan LIKE',
  'is-null': 'Nilai kosong: IS NULL',
};
