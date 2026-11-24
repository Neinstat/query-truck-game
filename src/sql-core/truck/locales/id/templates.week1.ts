import type { Params, TemplateText } from '../../templates';

/** Indonesian text for the Week 1 order templates (SQL, table and column names stay in English). */
const KOLOM: Record<string, string> = {
  name: 'nama',
  category: 'kategori',
  price: 'harga',
  cost: 'biaya',
  description: 'deskripsi',
  item_id: 'nomor item',
  ingredient: 'bahan',
  amount: 'jumlah',
  unit: 'satuan',
  product: 'produk',
  delivery_time: 'jam pengiriman',
};
const kata = (columns: string | number) =>
  String(columns)
    .split(/,\s*/)
    .map((c) => KOLOM[c] ?? c)
    .join(', ')
    .replace(/, ([^,]*)$/, ' dan $1');
const kapital = (s: string) => s.replace(/^./, (c) => c.toUpperCase());
const say = (...f: ((w: string) => string)[]) => f.map((g) => (p: Params) => g(kata(p.columns)));

const everything = (table: string, title: string, lines: TemplateText['lines'], success: string): TemplateText => ({
  title: () => title,
  lines,
  task: () => `Tampilkan semua kolom dari setiap baris di tabel ${table}.`,
  hints: [
    () => `Kamu ingin seluruh tabel ${table}, tanpa ada yang dilewatkan.`,
    () => 'SELECT, lalu * untuk "semua kolom", lalu FROM dan nama tabelnya.',
    () => 'SELECT * FROM … — tabel yang mana? Lihat tabel-tabel lewat lensa.',
  ],
  success: () => success,
});

const columns = (table: string, single: boolean, lines: TemplateText['lines'], success: string): TemplateText => ({
  title: (p) => (single ? `Cuma ${kata(p.columns)}` : kapital(kata(p.columns))),
  lines,
  task: (p) => `Tampilkan hanya ${single ? 'kolom' : 'kolom-kolom'} ${p.columns} dari tabel ${table}.`,
  hints: [
    () => (single ? 'Hanya satu kolom — bukan seluruh tabel.' : 'Hanya kolom-kolom ini — bukan seluruh tabel.'),
    () => (single ? 'Taruh nama kolom tepat setelah SELECT, sebagai ganti *.' : 'Tulis nama-nama kolom setelah SELECT, dengan koma di antaranya.'),
    (p) => `SELECT ${p.columns} FROM …;`,
  ],
  success: () => success,
});

export const WEEK1_TEMPLATES_ID: Record<string, TemplateText> = {
  'menu-all': everything(
    'menu_items',
    'Seluruh Menu',
    [
      () => 'Aku baru di kota ini. Boleh lihat semua yang ada di papan menu, lengkap dengan detailnya?',
      () => 'Tunjukkan seluruh menunya, semua kolom. Aku suka tahu persis apa yang kupesan.',
    ],
    'Wah, detail sekali. Aku pesan satu flat white!',
  ),
  'recipes-all': everything(
    'recipes',
    'Binder Resep',
    [
      () => 'Aku penasaran bagaimana semuanya dibuat. Boleh lihat seluruh binder resepnya?',
      () => 'Sepupuku mau buka food truck. Boleh aku lihat semua resep yang kamu catat?',
    ],
    'Banyak sekali mentega! Tidak akan kuceritakan ke sepupuku.',
  ),
  'suppliers-all': everything(
    'suppliers',
    'Siapa Pemasok Kita?',
    [
      () => 'Siapa yang mengantar semua bahan ini? Tunjukkan seluruh daftar pemasoknya.',
      () => 'Aku kerja di toko dekat sini. Boleh lihat semua yang kamu tahu soal pemasokmu?',
    ],
    'Menarik. Mungkin kita bisa bertukar tips.',
  ),
  'menu-column': columns(
    'menu_items',
    true,
    say(
      (w) => `Kolom sebanyak itu bikin kepalaku pusing! Boleh lihat ${w}-nya saja?`,
      (w) => `Cuma ${w} dari semua yang kamu jual, ya. Yang lain tidak usah.`,
    ),
    'Jauh lebih enak dibaca. Terima kasih!',
  ),
  'recipe-column': columns(
    'recipes',
    true,
    say(
      (w) => `Aku cuma peduli soal ${w} di resepmu. Bisa tunjukkan itu saja?`,
      (w) => `Cuma ${w} dari binder resep, ya. Satu kolom saja.`,
    ),
    'Persis yang ingin kulihat.',
  ),
  'supplier-column': columns(
    'suppliers',
    true,
    say(
      (w) => `Tanya sebentar: apa saja ${w} di daftar pemasokmu? Kolom itu saja.`,
      (w) => `Tunjukkan ${w} para pemasokmu saja. Aku sedang buru-buru.`,
    ),
    'Singkat dan jelas. Makasih!',
  ),
  'menu-columns': columns(
    'menu_items',
    false,
    say(
      (w) => `Boleh lihat ${w} di menu? Kolom-kolom itu saja.`,
      (w) => `Aku mau ${w} dari setiap menu, berdampingan.`,
    ),
    'Tabel kecil yang rapi. Sempurna.',
  ),
  'recipe-columns': columns(
    'recipes',
    false,
    say(
      (w) => `Dari binder resep aku butuh ${w}, tidak lebih.`,
      (w) => `Bisa daftarkan ${w} dari resep-resepmu?`,
    ),
    'Sekarang aku bisa masak sendiri di rumah.',
  ),
  'supplier-columns': columns(
    'suppliers',
    false,
    say(
      (w) => `Untuk daftarku, aku perlu ${w} para pemasokmu.`,
      (w) => `Tunjukkan ${w} dari daftar pemasok, ya.`,
    ),
    'Terima kasih, langsung masuk catatanku.',
  ),
};
