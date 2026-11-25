import { money, type TemplateText } from '../../templates';

/** Indonesian text for the Week 3 order templates (SQL, table and column names stay in English). */
const KATEGORI: Record<string, string> = { coffee: 'kopi', tea: 'teh', pastry: 'pastri', sandwich: 'roti lapis', dessert: 'makanan penutup' };
const kat = (c: string | number) => KATEGORI[String(c)] ?? String(c);
const kapital = (s: string) => s.replace(/^./, (c) => c.toUpperCase());

export const WEEK3_TEMPLATES_ID: Record<string, TemplateText> = {
  'sorted-price': {
    title: (p) => (p.dir === 'DESC' ? `${kapital(kat(p.category))} termahal dulu` : `${kapital(kat(p.category))} termurah dulu`),
    lines: [
      (p) =>
        p.dir === 'DESC'
          ? `Tunjukkan ${kat(p.category)}-mu, yang paling mahal di atas. Aku suka bermimpi besar.`
          : `${kapital(kat(p.category))}-mu, tolong, yang termurah dulu. Aku naik pelan-pelan.`,
      (p) =>
        p.dir === 'DESC'
          ? `Aku mau memanjakan diri. Daftar ${kat(p.category)} dengan harganya, dari yang termahal ke bawah.`
          : `Daftar ${kat(p.category)} dengan harganya, mulai dari yang paling murah.`,
    ],
    task: (p) => `Tampilkan name dan price dari setiap menu ${p.category}, ${p.dir === 'DESC' ? 'termahal' : 'termurah'} dulu.`,
    hints: [
      () => 'Barisnya sudah benar — tinggal diurutkan.',
      (p) => `ORDER BY price mengurutkan dari kecil ke besar (ASC). Untuk besar ke kecil tambahkan DESC. Di sini: ${p.dir}.`,
      (p) => `… WHERE category = '${p.category}' ORDER BY price ${p.dir};`,
    ],
    success: () => 'Pas, begini cara aku suka membaca menu.',
  },
  alphabetical: {
    title: (p) => `${kapital(kat(p.category))} A sampai Z`,
    lines: [
      (p) => `Aku lagi mencetak poster. Bisa daftar ${kat(p.category)}-mu urut abjad?`,
      (p) => `Nama semua ${kat(p.category)}-mu, dari A sampai Z. Aku suka yang rapi.`,
    ],
    task: (p) => `Tampilkan name dari setiap menu ${p.category}, urut abjad.`,
    hints: [
      () => 'Teks juga bisa diurutkan: A datang sebelum Z.',
      () => 'ORDER BY, lalu kolom yang dipakai mengurutkan. Tanpa ASC atau DESC urutannya A sampai Z.',
      (p) => `… WHERE category = '${p.category}' ORDER BY name;`,
    ],
    success: () => 'Bagus, ini pasti cantik di poster.',
  },
  'top-n': {
    title: (p) => `${p.dir === 'DESC' ? 'Teratas' : 'Terbawah'}: ${p.n} ${kat(p.category)}`,
    lines: [
      (p) =>
        p.dir === 'DESC'
          ? `Cukup ${p.n} ${kat(p.category)} termahal. Sisanya tidak menarik buatku.`
          : `Hanya ${p.n} ${kat(p.category)} termurah. Nama dan harganya.`,
      (p) =>
        p.dir === 'DESC'
          ? `${p.n} ${kat(p.category)} apa yang paling mahal? Itu saja.`
          : `Beri aku ${p.n} ${kat(p.category)} dengan harga terendah yang kamu punya.`,
    ],
    task: (p) => `Tampilkan name dan price dari ${p.n} menu ${p.category} ${p.dir === 'DESC' ? 'termahal' : 'termurah'}.`,
    hints: [
      () => 'Urutkan dulu, lalu ambil beberapa baris pertama saja.',
      (p) => `LIMIT ${p.n} mengambil ${p.n} baris pertama. Letaknya paling akhir, setelah ORDER BY.`,
      (p) => `… ORDER BY price ${p.dir} LIMIT ${p.n};`,
    ],
    success: () => 'Persis yang kubutuhkan. Tanpa menggulir!',
  },
  'each-once': {
    title: () => 'Tiap kategori sekali',
    lines: [
      () => 'Kamu jual apa saja? Kategorinya saja — masing-masing sekali, ya.',
      () => 'Aku menulis buletin. Daftar kategori di menumu, tanpa pengulangan.',
    ],
    task: () => 'Tampilkan setiap category di menu_items, masing-masing hanya sekali.',
    hints: [
      () => 'SELECT category biasa mengulang kategori untuk setiap menu.',
      () => 'DISTINCT tepat setelah SELECT menyisakan tiap nilai sekali saja.',
      () => 'SELECT DISTINCT category FROM menu_items;',
    ],
    success: () => 'Rapi sekali! Kopi, teh, pastri… dan satu "other" yang misterius.',
  },
  'each-ingredient-once': {
    title: () => 'Tiap bahan sekali',
    lines: [
      () => 'Kamu masak pakai bahan apa saja? Masing-masing sekali, bukan sekali per resep.',
      () => 'Aku punya alergi. Beri daftar bahan di resepmu, tanpa pengulangan.',
    ],
    task: () => 'Tampilkan setiap ingredient di recipes, masing-masing hanya sekali.',
    hints: [
      () => 'Banyak resep memakai bahan yang sama, jadi SELECT biasa mengulangnya.',
      () => 'DISTINCT tepat setelah SELECT menyisakan tiap nilai sekali saja.',
      () => 'SELECT DISTINCT ingredient FROM recipes;',
    ],
    success: () => 'Bagus, sekarang aku bisa mengecek daftarnya dengan benar.',
  },
  'each-product-once': {
    title: () => 'Tiap produk sekali',
    lines: [
      () => 'Pemasokmu membawa apa saja? Tiap produk sekali, tolong.',
      () => 'Aku penasaran isi kulkasmu. Daftar produknya, tanpa pengulangan.',
    ],
    task: () => 'Tampilkan setiap product di suppliers, masing-masing hanya sekali.',
    hints: [
      () => 'Satu produk bisa punya beberapa pemasok, jadi SELECT biasa mengulangnya.',
      () => 'DISTINCT tepat setelah SELECT menyisakan tiap nilai sekali saja.',
      () => 'SELECT DISTINCT product FROM suppliers;',
    ],
    success: () => 'Sekarang aku tahu isinya. Terima kasih!',
  },
  margin: {
    title: (p) => `Margin ${kat(p.category)}`,
    lines: [
      (p) => `Aku menghitung angka untuk pemilik. Berapa untung tiap ${kat(p.category)}-mu? Namai kolomnya margin.`,
      (p) => `Berapa sisa harga setelah biaya, untuk setiap ${kat(p.category)}-mu? Namai kolomnya margin.`,
    ],
    task: (p) => `Tampilkan name setiap menu ${p.category} dan margin-nya (price dikurangi cost), dengan kolom bernama margin.`,
    hints: [
      () => 'Kamu bisa menghitung di dalam query: price - cost.',
      () => 'AS memberi nama pada kolom hasil hitungan: … AS margin.',
      (p) => `SELECT name, price - cost AS margin FROM menu_items WHERE category = '${p.category}';`,
    ],
    success: () => 'Nah, ini angka yang bisa kutunjukkan ke pemilik.',
  },
  'happy-hour': {
    title: (p) => `Happy hour: ${kat(p.category)}`,
    lines: [
      (p) => `Kami merencanakan happy hour: potongan ${money(p.off)} untuk setiap ${kat(p.category)}. Tunjukkan harga barunya di kolom bernama happy_price.`,
      (p) => `Berapa harga ${kat(p.category)} kalau dipotong ${money(p.off)}? Namai harga barunya happy_price.`,
    ],
    task: (p) => `Tampilkan name setiap menu ${p.category} dan price dikurangi ${money(p.off)}, sebagai happy_price.`,
    hints: [
      () => 'Hitung harga barunya langsung di SELECT: price - potongan.',
      () => 'Beri nama hitungan itu dengan AS happy_price.',
      (p) => `SELECT name, price - ${p.off} AS happy_price FROM menu_items WHERE category = '${p.category}';`,
    ],
    success: () => 'Happy hour jadi. Para mahasiswa pasti suka.',
  },
  'priciest-known': {
    title: (p) => (p.n === 1 ? 'Menu termahal' : `${p.n} menu termahal`),
    lines: [
      (p) =>
        p.n === 1
          ? 'Apa yang paling mahal di menumu? Pastikan itu harga sungguhan, bukan yang kosong.'
          : `${p.n} menu mana yang paling mahal? Hanya harga sungguhan — lewati yang tanpa harga.`,
      (p) => `${p.n} teratas menurut harga, tolong. Kalau menu tidak punya harga, jangan dihitung.`,
    ],
    task: (p) => `Tampilkan name dan price dari ${p.n === 1 ? 'menu' : `${p.n} menu`} termahal, tanpa menu yang tidak punya harga.`,
    hints: [
      () => 'Urutkan harga dari besar ke kecil, ambil baris pertama — tapi lihat apa yang muncul pertama.',
      () => 'Dengan DESC, PostgreSQL menaruh NULL di depan. Singkirkan harga kosong dengan WHERE price IS NOT NULL.',
      (p) => `… WHERE price IS NOT NULL ORDER BY price DESC LIMIT ${p.n};`,
    ],
    success: () => 'Harga sungguhan di atas. Itu yang kumau.',
  },
  'costliest-known': {
    title: (p) => (p.n === 1 ? 'Menu dengan biaya terbesar' : `${p.n} menu dengan biaya terbesar`),
    lines: [
      (p) =>
        p.n === 1
          ? 'Menu mana yang paling mahal biaya pembuatannya? Hanya yang biayanya tercatat.'
          : `${p.n} menu mana yang biaya pembuatannya paling besar? Lewati yang biayanya belum tercatat.`,
      (p) => `${p.n} teratas menurut biaya, yang terbesar dulu. Menu tanpa biaya tidak dihitung.`,
    ],
    task: (p) => `Tampilkan name dan cost dari ${p.n === 1 ? 'menu' : `${p.n} menu`} dengan biaya pembuatan terbesar, tanpa menu yang tidak punya cost.`,
    hints: [
      () => 'Urutkan biaya dari besar ke kecil, ambil baris pertama — dan waspadai biaya yang kosong.',
      () => 'Dengan DESC, nilai NULL muncul duluan. Saring dengan IS NOT NULL.',
      (p) => `… WHERE cost IS NOT NULL ORDER BY cost DESC LIMIT ${p.n};`,
    ],
    success: () => 'Bagus untuk tahu ke mana uang pergi.',
  },
};
