import type { TemplateText } from '../../templates';

/** Indonesian text for the Week 5 order templates (SQL, table and column names stay in English). */
const ON_ITEM = 'ON m.item_id = r.item_id';
const ON_SALE_ITEM = 'ON m.item_id = s.item_id';
const ON_SALE_CUSTOMER = 'ON c.customer_id = s.customer_id';
const ABOUT_ID: Record<string, string> = {
  'units sold': 'jumlah unit terjual',
  revenue: 'pendapatan',
  'number of sales lines': 'jumlah baris penjualan',
};
const about = (p: Record<string, string | number>) => ABOUT_ID[String(p.about)] ?? String(p.about);
const kapital = (s: string) => s.replace(/^./, (c) => c.toUpperCase());
const ING_ID: Record<string, string> = { milk: 'susu', butter: 'mentega', eggs: 'telur', cinnamon: 'kayu manis', sugar: 'gula' };
const ing = (p: Record<string, string | number>) => ING_ID[String(p.ingredient)] ?? String(p.ingredient);

export const WEEK5_TEMPLATES_ID: Record<string, TemplateText> = {
  'uses-ingredient': {
    title: (p) => `Berbahan ${ing(p)}`,
    lines: [
      (p) => `Aku alergi beberapa bahan, jadi: menu mana yang pakai ${ing(p)}? Namanya saja.`,
      (p) => `Binder resep tahu bahan-bahannya, tapi cuma lewat nomor menu. Menu mana (pakai nama) yang mengandung ${ing(p)}?`,
    ],
    task: (p) => `Tampilkan name setiap menu yang resepnya memakai ${p.ingredient}.`,
    hints: [
      () => 'recipes hanya punya nomor menu. Namanya ada di menu_items, jadi gabungkan kedua tabel itu.',
      (p) => `JOIN menu_items m ${ON_ITEM}, lalu saring dengan WHERE r.ingredient = '${p.ingredient}'.`,
      (p) => `SELECT m.name FROM recipes r JOIN menu_items m ${ON_ITEM} WHERE r.ingredient = '${p.ingredient}';`,
    ],
    success: () => 'Bagus, tahu dulu sebelum pesan. Terima kasih!',
  },
  'ingredient-amounts': {
    title: (p) => `Berapa ${ing(p)}?`,
    lines: [
      (p) => `Aku yang mengatur belanja. Untuk setiap menu yang berisi ${ing(p)}, berapa banyak yang masuk? Nama, jumlah dan satuan.`,
      (p) => `Daftarkan menu yang memakai ${ing(p)} dan berapa banyak tiap menu, dengan satuannya.`,
    ],
    task: (p) => `Tampilkan name, amount dan unit untuk ${p.ingredient} di setiap menu yang memakainya.`,
    hints: [
      () => 'Jumlahnya ada di recipes, namanya di menu_items: gabungkan lewat nomor menu.',
      (p) => `JOIN menu_items m ${ON_ITEM} WHERE r.ingredient = '${p.ingredient}'. Tulis kolom dengan aliasnya (m.name, r.amount).`,
      (p) => `SELECT m.name, r.amount, r.unit FROM recipes r JOIN menu_items m ${ON_ITEM} WHERE r.ingredient = '${p.ingredient}';`,
    ],
    success: () => 'Daftar belanja beres. Terima kasih!',
  },
  'item-recipe': {
    title: (p) => `Isi ${p.item}?`,
    lines: [
      (p) => `Apa saja isi ${p.item}? Aku mau tiap bahan dengan jumlah dan satuannya.`,
      (p) => `Bacakan resep ${p.item}: bahan, jumlah, satuan.`,
    ],
    task: (p) => `Tampilkan ingredient, amount dan unit dari setiap baris resep ${p.item}.`,
    hints: [
      () => 'Kamu tahu namanya, tapi recipes hanya tahu nomor menu: gabungkan menu_items ke recipes.',
      (p) => `JOIN recipes r ${ON_ITEM} dan saring dengan WHERE m.name = '${p.item}'.`,
      (p) => `SELECT r.ingredient, r.amount, r.unit FROM menu_items m JOIN recipes r ${ON_ITEM} WHERE m.name = '${p.item}';`,
    ],
    success: () => 'Jadi begitu rahasianya. Bagus.',
  },
  'no-recipe': {
    title: () => 'Menu tanpa resep',
    lines: [
      (p) => `Aku menulis lembar pelatihan dari binder. Ada menu yang resepnya tidak ada? Tampilkan ${p.cols === 'm.name' ? 'namanya' : 'nama dan kategorinya'}.`,
      (p) => `Menu mana yang sama sekali tidak punya resep? ${p.cols === 'm.name' ? 'Namanya saja' : 'Nama dan kategori'}, ya.`,
    ],
    task: (p) => `Tampilkan ${p.cols === 'm.name' ? 'name' : 'name dan category'} setiap menu yang tidak punya baris di recipes.`,
    hints: [
      () => 'Mulai dari menu_items supaya semua menu tetap ada, lalu cari yang tidak ada pasangannya.',
      () => 'LEFT JOIN recipes menjaga menu tanpa pasangan dan mengisi kolom resep dengan NULL. Uji r.recipe_id IS NULL.',
      (p) => `SELECT ${p.cols} FROM menu_items m LEFT JOIN recipes r ${ON_ITEM} WHERE r.recipe_id IS NULL;`,
    ],
    success: () => 'Tentu saja, yang itu tidak pernah ditulis. Saatnya tanya pemiliknya.',
  },
  'never-sold': {
    title: () => 'Tidak pernah terjual',
    lines: [
      (p) => `Ada menu yang tidak pernah dibeli siapa pun? Tampilkan ${p.cols === 'm.name' ? 'namanya' : 'nama dan harganya'}.`,
      (p) => `Menu mana yang belum pernah tercatat di kasir? ${p.cols === 'm.name' ? 'Namanya saja' : 'Nama dan harga'}.`,
    ],
    task: (p) => `Tampilkan ${p.cols === 'm.name' ? 'name' : 'name dan price'} setiap menu yang tidak punya penjualan sama sekali.`,
    hints: [
      () => 'Pertahankan semua menu, lalu cari yang tidak punya penjualan yang cocok.',
      () => 'Mulai dari menu_items, LEFT JOIN sales, lalu uji kolom sales dengan IS NULL.',
      (p) => `SELECT ${p.cols} FROM menu_items m LEFT JOIN sales s ${ON_SALE_ITEM} WHERE s.sale_id IS NULL;`,
    ],
    success: () => 'Dua menu mati. Mungkin menunya terlalu panjang.',
  },
  'never-ordered': {
    title: () => 'Daftar, tapi tak pernah datang',
    lines: [
      (p) => `Beberapa orang mengisi kartu loyalitas lalu tak pernah memesan. Siapa mereka? ${p.cols === 'c.name' ? 'Namanya' : 'Nama dan tanggal bergabung'}, ya.`,
      (p) => `Pelanggan mana yang tidak punya penjualan sama sekali? Tampilkan ${p.cols === 'c.name' ? 'namanya' : 'nama dan tanggal bergabungnya'}.`,
    ],
    task: (p) => `Tampilkan ${p.cols === 'c.name' ? 'name' : 'name dan joined_on'} setiap pelanggan yang tidak punya penjualan.`,
    hints: [
      () => 'Mulai dari customers supaya semua pelanggan tetap ada, lalu cari yang tidak punya penjualan yang cocok.',
      () => 'customers LEFT JOIN sales, lalu WHERE s.sale_id IS NULL.',
      (p) => `SELECT ${p.cols} FROM customers c LEFT JOIN sales s ${ON_SALE_CUSTOMER} WHERE s.sale_id IS NULL;`,
    ],
    success: () => 'Aku akan kirim kue gratis untuk mereka masing-masing. Terima kasih!',
  },
  'per-category': {
    title: (p) => `${kapital(about(p))} per kategori`,
    lines: [
      (p) => `Kopi, kue, sandwich… aku mau ${about(p)} untuk tiap kategori, dinamai ${p.alias}.`,
      (p) => `Berikan ${about(p)} per kategori menu: kategori dan ${p.alias}. Satu baris tiap kategori.`,
    ],
    task: (p) => `Tampilkan tiap kategori (dari menu_items) dengan ${about(p)} (${p.alias}), satu baris per kategori.`,
    hints: [
      () => 'sales tahu menunya, menu_items tahu kategorinya: gabungkan dulu, baru kelompokkan.',
      (p) => `JOIN menu_items m ${ON_SALE_ITEM}, lalu GROUP BY m.category dengan ${p.measure}.`,
      (p) => `SELECT m.category, ${p.measure} AS ${p.alias} FROM sales s JOIN menu_items m ${ON_SALE_ITEM} GROUP BY m.category;`,
    ],
    success: () => 'Sekarang aku bisa merencanakan pesanan per kategori.',
  },
  'per-item-name': {
    title: (p) => `${kapital(about(p))} per nama menu`,
    lines: [
      (p) => `Angka per item_id tidak berarti buatku. Tampilkan tiap menu dengan namanya dan ${about(p)}, dinamai ${p.alias}.`,
      (p) => `Aku mau nama, bukan nomor: nama setiap menu dan ${about(p)} (${p.alias}).`,
    ],
    task: (p) => `Tampilkan nama tiap menu (m.name) dengan ${about(p)} (${p.alias}), satu baris per menu.`,
    hints: [
      () => 'Namanya ada di menu_items: gabungkan ke sales lewat nomor menu, lalu kelompokkan berdasarkan nama.',
      (p) => `JOIN menu_items m ${ON_SALE_ITEM}, GROUP BY m.name, dan ${p.measure} AS ${p.alias}.`,
      (p) => `SELECT m.name, ${p.measure} AS ${p.alias} FROM sales s JOIN menu_items m ${ON_SALE_ITEM} GROUP BY m.name;`,
    ],
    success: () => 'Akhirnya ada nama. Ini bisa kubaca.',
  },
  'regular-visits': {
    title: (p) => `Pelanggan tetap: ${p.min}+ kunjungan`,
    lines: [
      (p) => `Aku mau berterima kasih pada pelanggan tetap dengan menyebut namanya. Siapa yang datang ${p.min} kali atau lebih? Tampilkan nama dan visits.`,
      (p) => `Nama, bukan nomor pelanggan: semua yang punya ${p.min} pesanan atau lebih, dengan jumlahnya sebagai visits.`,
    ],
    task: (p) => `Tampilkan name dan visits (pesanan berbeda) setiap pelanggan dengan minimal ${p.min} kunjungan.`,
    hints: [
      () => 'Gabungkan sales ke customers untuk dapat nama, hitung tiap order_id sekali per pelanggan, lalu simpan kelompok yang besar.',
      (p) => `JOIN customers c ${ON_SALE_CUSTOMER}, GROUP BY c.name, HAVING COUNT(DISTINCT s.order_id) >= ${p.min}.`,
      (p) => `SELECT c.name, COUNT(DISTINCT s.order_id) AS visits FROM sales s JOIN customers c ${ON_SALE_CUSTOMER} GROUP BY c.name HAVING COUNT(DISTINCT s.order_id) >= ${p.min};`,
    ],
    success: () => 'Nama-nama ini masuk papan terima kasih.',
  },
  'my-usual': {
    title: () => 'Apa pesanan biasaku?',
    lines: [
      (p) => `Hai, ini ${p.who} lagi! Kamu tahu apa yang selalu kupesan, kan? Cari tahu: menu dan berapa banyak yang sudah kuambil.`,
      (p) => `${p.who} di sini. Apa pesanan biasaku? Tampilkan menu yang paling sering kubeli (nama dan unit).`,
    ],
    task: (p) => `Tampilkan name dan total unit (units) dari menu yang paling banyak dibeli ${p.who}, hanya satu baris itu.`,
    hints: [
      () => 'Tiga tabel bertemu di sini: sales menghubungkan pelanggan dengan menu. Gabungkan keduanya, saring nama pelanggan, kelompokkan per menu.',
      (p) => `JOIN customers c ${ON_SALE_CUSTOMER} JOIN menu_items m ${ON_SALE_ITEM}, WHERE c.name = '${p.who}', GROUP BY m.name, ORDER BY units DESC LIMIT 1.`,
      (p) => `SELECT m.name, SUM(s.quantity) AS units FROM sales s JOIN customers c ${ON_SALE_CUSTOMER} JOIN menu_items m ${ON_SALE_ITEM} WHERE c.name = '${p.who}' GROUP BY m.name ORDER BY units DESC LIMIT 1;`,
    ],
    success: () => 'Ya, itu pesanan biasaku! Sampai besok.',
  },
};
