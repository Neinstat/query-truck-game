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
  'order-by': 'Mengurutkan dengan ORDER BY',
  limit: 'Daftar teratas dengan LIMIT',
  distinct: 'Tiap nilai sekali: DISTINCT',
  alias: 'Kolom hitungan dengan AS',
  'sort-nulls': 'Mengurutkan dan nilai kosong',
  count: 'Menghitung baris dengan COUNT',
  sum: 'Menjumlahkan dengan SUM',
  'avg-round': 'Rata-rata dan ROUND',
  'group-by': 'Satu baris per kelompok: GROUP BY',
  having: 'Menyaring kelompok dengan HAVING',
  dates: 'Tanggal: DATE_TRUNC dan EXTRACT',
  join: 'Menyambung tabel: JOIN … ON',
  'left-join': 'Menjaga semua baris: LEFT JOIN',
  'join-group': 'JOIN, lalu GROUP BY',
  regulars: 'Pelanggan tetap: tiga tabel bersama',
};
