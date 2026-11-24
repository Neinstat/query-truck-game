import type { TemplateText } from '../../templates';
import { ITEM_NAMES } from '../../templates.week4';

/** Indonesian text for the Week 4 order templates (SQL, table and column names stay in English). */
const item = (id: string | number) => ITEM_NAMES[Number(id)] ?? `item ${id}`;
const MONTHS_ID: Record<string, string> = { '2026-08': 'Agustus', '2026-09': 'September', '2026-10': 'Oktober' };
const ABOUT_ID: Record<string, string> = {
  'number of sales lines': 'jumlah baris penjualan',
  revenue: 'pendapatan',
  'units sold': 'jumlah unit terjual',
  orders: 'jumlah pesanan',
};
const about = (p: Record<string, string | number>) => ABOUT_ID[String(p.about)] ?? String(p.about);
const kapital = (s: string) => s.replace(/^./, (c) => c.toUpperCase());
const REVENUE = 'SUM(quantity * unit_price)';

export const WEEK4_TEMPLATES_ID: Record<string, TemplateText> = {
  'count-channel': {
    title: (p) => `Berapa penjualan ${p.channel}?`,
    lines: [
      (p) => `Pertanyaan angka cepat: berapa baris penjualan yang lewat ${p.channel}? Hitungannya saja.`,
      (p) => `Manajer bertanya seberapa ramai ${p.channel}. Berapa baris di sales yang bertuliskan ${p.channel}?`,
    ],
    task: (p) => `Hitung baris di sales yang channel-nya ${p.channel}.`,
    hints: [
      () => 'Kamu mau satu angka: berapa banyak baris yang cocok.',
      (p) => `Saring dengan WHERE channel = '${p.channel}', lalu hitung dengan COUNT(*).`,
      (p) => `SELECT COUNT(*) FROM sales WHERE channel = '${p.channel}';`,
    ],
    success: () => 'Angka yang bisa kutulis di papan. Terima kasih!',
  },
  'count-item': {
    title: (p) => `Seberapa sering: ${item(p.item)}`,
    lines: [
      (p) => `Semua orang pesan ${item(p.item)}, atau cuma aku? Berapa baris penjualannya (item_id ${p.item})?`,
      (p) => `Hitungkan penjualan ${item(p.item)} untukku — item_id-nya ${p.item}.`,
    ],
    task: (p) => `Hitung baris di sales untuk item_id ${p.item} (${item(p.item)}).`,
    hints: [
      () => 'Kamu mau satu angka: berapa banyak baris tentang menu ini.',
      (p) => `Saring dengan WHERE item_id = ${p.item}, lalu hitung barisnya dengan COUNT(*).`,
      (p) => `SELECT COUNT(*) FROM sales WHERE item_id = ${p.item};`,
    ],
    success: () => 'Sebanyak itu! Jadi bukan cuma aku.',
  },
  'revenue-channel': {
    title: (p) => `Pendapatan: ${p.channel}`,
    lines: [
      (p) => `Berapa uang yang dibawa ${p.channel} seluruhnya? Namai angkanya revenue.`,
      (p) => `Jumlahkan semua yang dibayar pelanggan lewat ${p.channel} (quantity × unit_price). Namai revenue.`,
    ],
    task: (p) => `Tampilkan total revenue (jumlah quantity × unit_price) penjualan ${p.channel}, dinamai revenue.`,
    hints: [
      () => 'Pendapatan adalah quantity × unit_price tiap penjualan, dijumlahkan.',
      (p) => `SUM juga bisa menjumlahkan hasil hitungan. Ambil hanya baris ${p.channel} dengan WHERE.`,
      (p) => `SELECT ${REVENUE} AS revenue FROM sales WHERE channel = '${p.channel}';`,
    ],
    success: () => 'Nah, ini angka dengan tanda dolar!',
  },
  'units-item': {
    title: (p) => `Unit terjual: ${item(p.item)}`,
    lines: [
      (p) => `Berapa ${item(p.item)} yang sebenarnya kita jual seluruhnya (item_id ${p.item})? Namai angkanya units.`,
      (p) => `Total ${item(p.item)} yang terjual, tolong — jumlahkan quantity-nya. Namai units.`,
    ],
    task: (p) => `Tampilkan total quantity item_id ${p.item} (${item(p.item)}) yang terjual, dinamai units.`,
    hints: [
      () => 'Satu baris penjualan bisa punya quantity lebih dari 1, jadi menghitung baris saja tidak cukup.',
      () => 'SUM(quantity) menjumlahkan quantity.',
      (p) => `SELECT SUM(quantity) AS units FROM sales WHERE item_id = ${p.item};`,
    ],
    success: () => 'Wah, banyak sekali. Terima kasih!',
  },
  'avg-order': {
    title: (p) => `Rata-rata pesanan: ${p.channel}`,
    lines: [
      (p) => `Rata-rata satu pesanan ${p.channel} membawa berapa? Pendapatan dibagi jumlah pesanan, dibulatkan ke sen. Namai avg_order_value.`,
      (p) => `Nilai rata-rata pesanan untuk ${p.channel}, dua desimal. Ingat satu pesanan bisa punya beberapa baris.`,
    ],
    task: (p) => `Tampilkan nilai rata-rata pesanan penjualan ${p.channel} (pendapatan ÷ jumlah order_id berbeda, dibulatkan 2 desimal), dinamai avg_order_value.`,
    hints: [
      () => 'Satu pesanan bisa punya beberapa baris penjualan, jadi hitung tiap order_id sekali saja.',
      () => 'COUNT(DISTINCT order_id) menghitung pesanan; ROUND(…, 2) menyisakan dua desimal.',
      (p) => `SELECT ROUND(${REVENUE} / COUNT(DISTINCT order_id), 2) AS avg_order_value FROM sales WHERE channel = '${p.channel}';`,
    ],
    success: () => 'Pas — ini angka yang diminta manajer tiap minggu.',
  },
  'per-group': {
    title: (p) => `${kapital(about(p))} per ${p.group === 'channel' ? 'channel' : 'item'}`,
    lines: [
      (p) => `Beri aku ${about(p)} untuk setiap ${p.group === 'channel' ? 'channel' : 'item (menurut item_id)'}, satu baris masing-masing. Namai angkanya ${p.alias}.`,
      (p) => `Aku mau tabel kecil: setiap ${p.group} dengan ${about(p)}-nya di sebelahnya, dinamai ${p.alias}.`,
    ],
    task: (p) => `Tampilkan setiap ${p.group} dengan ${about(p)}-nya (${p.alias}), satu baris per ${p.group}.`,
    hints: [
      () => 'Satu angka per kelompok berarti barisnya dikelompokkan dulu.',
      (p) => `GROUP BY ${p.group} membuat satu baris per ${p.group}; agregatnya dihitung untuk tiap kelompok.`,
      (p) => `SELECT ${p.group}, ${p.measure} AS ${p.alias} FROM sales GROUP BY ${p.group};`,
    ],
    success: () => 'Sekarang bisa kulihat sekilas.',
  },
  'big-sellers': {
    title: (p) => `Menu di atas ${p.min} unit`,
    lines: [
      (p) => `Menu mana yang terjual lebih dari ${p.min} unit seluruhnya? Tampilkan item_id dan units.`,
      (p) => `Yang laris saja, tolong: menu dengan lebih dari ${p.min} unit terjual. item_id dan units.`,
    ],
    task: (p) => `Tampilkan item_id dan total unit (dinamai units) dari setiap menu yang terjual lebih dari ${p.min} unit.`,
    hints: [
      () => 'Jumlahkan dulu unit per menu. Lalu simpan hanya kelompok di atas batas.',
      () => 'WHERE menyaring baris sebelum dikelompokkan; HAVING menyaring kelompok sesudahnya.',
      (p) => `… GROUP BY item_id HAVING SUM(quantity) > ${p.min};`,
    ],
    success: () => 'Para langganan lama. Senang melihatnya dalam angka.',
  },
  'frequent-regulars': {
    title: (p) => `Pelanggan dengan ${p.min}+ kunjungan`,
    lines: [
      (p) => `Siapa pelanggan paling setia? Tampilkan customer_id dan visits (pesanan berbeda) untuk semua yang berkunjung ${p.min} kali atau lebih.`,
      (p) => `Aku mau berterima kasih pada para langganan. Daftar setiap customer_id dengan ${p.min} pesanan atau lebih, angkanya sebagai visits.`,
    ],
    task: (p) => `Tampilkan customer_id dan visits (pesanan berbeda) dari setiap pelanggan dikenal dengan minimal ${p.min} kunjungan.`,
    hints: [
      () => 'Banyak baris penjualan bisa milik satu pesanan: hitung tiap order_id sekali. Pembeli tanpa akun tidak punya customer_id.',
      () => 'Kelompokkan menurut customer_id, lalu saring kelompoknya dengan HAVING.',
      (p) => `… WHERE customer_id IS NOT NULL GROUP BY customer_id HAVING COUNT(DISTINCT order_id) >= ${p.min};`,
    ],
    success: () => 'Mereka yang akan kusapa dengan nama.',
  },
  'per-month': {
    title: (p) => `${kapital(about(p))} bulanan`,
    lines: [
      (p) => `Bulan demi bulan, bagaimana ${about(p)}-nya? Satu baris per bulan, bulannya sebagai "month" dan angkanya sebagai ${p.alias}.`,
      (p) => `Aku butuh ${about(p)} per bulan untuk grafikku. Kolomnya: month dan ${p.alias}.`,
    ],
    task: (p) => `Tampilkan setiap bulan (DATE_TRUNC('month', sold_at), dinamai month) dengan ${about(p)}-nya (${p.alias}).`,
    hints: [
      () => 'Potong tiap timestamp menjadi bulannya, lalu kelompokkan.',
      () => "DATE_TRUNC('month', sold_at) mengubah tanggal menjadi hari pertama bulannya. GROUP BY bisa memakai aliasnya.",
      (p) => `SELECT DATE_TRUNC('month', sold_at) AS month, ${p.measure} AS ${p.alias} FROM sales GROUP BY month;`,
    ],
    success: () => 'Akhirnya ada tren. Terima kasih!',
  },
  'month-revenue': {
    title: (p) => `Pendapatan ${MONTHS_ID[String(p.month)]}`,
    lines: [
      (p) => `Berapa yang kita dapat di ${MONTHS_ID[String(p.month)]}? Satu angka, namanya revenue.`,
      (p) => `Pendapatan ${MONTHS_ID[String(p.month)]} saja, tolong — dari tanggal satu sampai tanggal satu bulan berikutnya.`,
    ],
    task: (p) => `Tampilkan total pendapatan ${MONTHS_ID[String(p.month)]} 2026 (sold_at dari tanggal 1 sampai sebelum tanggal 1 bulan berikutnya), dinamai revenue.`,
    hints: [
      () => 'Ambil hanya penjualan satu bulan, lalu jumlahkan quantity × unit_price.',
      () => 'Satu bulan itu dari hari pertamanya sampai, tapi tidak termasuk, hari pertama bulan berikutnya: sold_at >= … AND sold_at < ….',
      (p) => `… WHERE sold_at >= '${p.month}-01' AND sold_at < … (tanggal 1 bulan berikutnya);`,
    ],
    success: () => 'Terima kasih, ini langsung masuk laporan.',
  },
  'per-weekday': {
    title: () => 'Pesanan per hari dalam seminggu',
    lines: [
      () => 'Apakah ada hari yang lebih ramai? Tampilkan nomor hari (0 itu Minggu) dan jumlah pesanan untuk masing-masing.',
      () => 'Pesanan per hari dalam seminggu, tolong. Namai kolomnya weekday dan orders.',
    ],
    task: () => 'Tampilkan weekday (EXTRACT(DOW FROM sold_at), dinamai weekday) dan jumlah pesanan berbeda (orders) untuk tiap hari.',
    hints: [
      () => 'Kamu butuh hari dalam seminggu dari tiap penjualan, lalu satu baris per hari.',
      () => 'EXTRACT(DOW FROM sold_at) memberi hari sebagai angka: 0 itu Minggu. Kelompokkan menurutnya.',
      () => 'SELECT EXTRACT(DOW FROM sold_at) AS weekday, COUNT(DISTINCT order_id) AS orders FROM sales GROUP BY weekday;',
    ],
    success: () => 'Hmm, satu hari jauh lebih sepi dari yang lain. Menarik…',
  },
};
