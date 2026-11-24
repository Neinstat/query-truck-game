import type { WeekInfo } from '../../weeks';

/** Indonesian text of the six weeks (SQL words and the cases' English names stay as they are). */
export const WEEKS_ID: Record<number, Partial<WeekInfo>> = {
  1: { name: 'Minggu Pembukaan', teaches: 'Membaca menu: SELECT, kolom, dan FROM' },
  2: { name: 'Pelanggan Pemilih', teaches: 'Memilih baris: WHERE, AND / OR, IN, LIKE, dan IS NULL', managerCase: 'Audit Menu' },
  3: {
    name: 'Menu Spesial Harian',
    teaches: 'Mengurutkan dan membentuk hasil: ORDER BY, LIMIT, DISTINCT, alias, dan kolom hitungan',
    managerCase: 'Apa yang Harus Kita Promosikan?',
  },
  4: { name: 'Menghitung Isi Laci Kas', teaches: 'Angka: COUNT, SUM, AVG, GROUP BY, HAVING, dan tanggal', managerCase: 'Hari yang Sepi' },
  5: {
    name: 'Langganan & Resep',
    teaches: 'Menghubungkan tabel: JOIN dan LEFT JOIN',
    managerCase: 'Ke Mana Perginya Para Langganan?',
  },
  6: {
    name: 'Pertanyaan Besar',
    teaches: 'Semuanya digabung untuk menjawab pertanyaan bisnis yang nyata',
    managerCase: 'Penjualan Oktober Turun',
  },
};
