/**
 * The Manager's daily cases (GAME_DESIGN.md §4, 6.7): small guided cases of one or two questions,
 * a pool per week. A case belongs to the week whose SQL it needs; on day N of week W the Manager
 * brings one from the cases of weeks 1…W (this week's more often). They follow the analyst's
 * five steps — the business question, the metric, the pattern, the opportunity, the action — and
 * a case with `recommends` ends with "so what should we do?", a choice backed by the result.
 *
 * The answers are worked out from the database when the Manager knocks (`answer` holds SQL), so
 * they always match the data. Each step has its words in English and Indonesian side by side;
 * SQL, table and column names and data values are never translated.
 */
import type { CaseLevel, CaseQuestion } from '../levels';
import type { CafeDatabase } from '../db';
import type { Lang } from '../feedback';
import type { ManagerIntro } from './manager';
import { WEEKLY_CASES } from './managerCases.weekly';

export type StepText = { prompt: string; goal: string; read: string; hints: [string, string]; reply: string };

export type Answer =
  | { kind: 'number'; sql: string; tolerance?: number }
  /** A choice: the options come from a query (one column), the right one from another. */
  | { kind: 'choice-sql'; choicesSql: string; correctSql: string }
  /** A fixed choice (a recommendation). */
  | { kind: 'choice'; choices: string[]; correct: number; choicesId: string[] };

export type Step = {
  /** The query the step starts with (one `___`). */
  starter: string;
  /** What fills the blank (used by the tests, and by the last hint). */
  fill: string;
  /** The whole query, shown in the last hint and used as evidence. */
  solution: string;
  answer: Answer;
  en: StepText;
  id: StepText;
};

export type CaseText = { title: string; ask: string; task: string; success: string };

export type DailyCase = {
  /** Never renamed once released (saved days only keep the date, but tests and logs use it). */
  id: string;
  /** The week this case is first brought. */
  week: number;
  /** Ends with a recommendation (the analyst's fifth step). */
  recommends?: boolean;
  /** The big case of a week's last day (6.8): brought on day 5 of its week, never drawn at random. */
  weekly?: boolean;
  steps: Step[];
  en: CaseText;
  idText: CaseText;
};

const HISTORY = "sold_at >= '2026-10-01' AND sold_at < '2026-11-01'";

export const DAILY_CASES: DailyCase[] = [
  ...WEEKLY_CASES,
  // The original knock, "Numbers. Now.", is built by `manager.ts` (its text lives there and in
  // `locales/id/manager.ts`): this entry only puts it in the pool, from week 4 (COUNT, SUM, GROUP BY).
  {
    id: 'numbers-now',
    week: 4,
    steps: [],
    en: { title: 'Numbers. Now.', ask: '', task: '', success: '' },
    idText: { title: 'Angka. Sekarang.', ask: '', task: '', success: '' },
  },
  // ───────────── Week 1 · just reading tables ─────────────
  {
    id: 'menu-size',
    week: 1,
    en: {
      title: 'How big is the menu?',
      ask: 'Two small facts about the menu before I leave: how many items we sell, and what a Latte costs.',
      task: "Answer the Manager's two questions: fill the blank in the query, run it, and read the answer from the table.",
      success: 'Hm. Correct. Know your menu. Same time tomorrow.',
    },
    idText: {
      title: 'Sebesar apa menunya?',
      ask: 'Dua fakta kecil soal menu sebelum saya pergi: berapa item yang kita jual, dan berapa harga Latte.',
      task: 'Jawab dua pertanyaan The Manager: isi bagian kosong di query, jalankan, lalu baca jawabannya dari tabel.',
      success: 'Hm. Benar. Kenali menumu. Besok jam yang sama.',
    },
    steps: [
      {
        starter: 'SELECT *\nFROM ___;',
        fill: 'menu_items',
        solution: 'SELECT * FROM menu_items;',
        answer: { kind: 'number', sql: 'SELECT COUNT(*) FROM menu_items;' },
        en: {
          prompt: 'How many items are on the menu?',
          goal: 'Every row of menu_items is one item we sell. SELECT * shows every column of every row, so the number of rows is the size of the menu.',
          read: 'Count the rows in the result (the table says how many there are).',
          hints: ['The blank is the table. The menu lives in menu_items.', 'Replace ___ with menu_items and press Run.'],
          reply: 'Hm. Fine. Next: price.',
        },
        id: {
          prompt: 'Berapa item yang ada di menu?',
          goal: 'Setiap baris menu_items adalah satu item yang kita jual. SELECT * menampilkan semua kolom di semua baris, jadi jumlah baris adalah ukuran menu.',
          read: 'Hitung baris di hasil (tabelnya menyebutkan jumlahnya).',
          hints: ['Bagian kosong itu tabelnya. Menu ada di menu_items.', 'Ganti ___ dengan menu_items lalu tekan Jalankan.'],
          reply: 'Hm. Oke. Berikutnya: harga.',
        },
      },
      {
        starter: 'SELECT ___, price\nFROM menu_items;',
        fill: 'name',
        solution: 'SELECT name, price FROM menu_items;',
        answer: { kind: 'number', sql: "SELECT price FROM menu_items WHERE name = 'Latte';", tolerance: 0.001 },
        en: {
          prompt: 'How much does a Latte cost, in dollars?',
          goal: 'You can ask for just the columns you need. Show the name next to the price, then find the Latte in the list.',
          read: 'Find the row called Latte and read its price.',
          hints: ['The blank is a column that says which item each row is.', 'Replace ___ with name, run it, and look for Latte.'],
          reply: '',
        },
        id: {
          prompt: 'Berapa harga satu Latte, dalam dolar?',
          goal: 'Kamu bisa meminta hanya kolom yang dibutuhkan. Tampilkan nama di samping harga, lalu cari Latte di daftar.',
          read: 'Cari baris bernama Latte dan baca harganya.',
          hints: ['Bagian kosong itu kolom yang menyebut item apa tiap baris.', 'Ganti ___ dengan name, jalankan, dan cari Latte.'],
          reply: '',
        },
      },
    ],
  },
  {
    id: 'suppliers-who',
    week: 1,
    en: {
      title: 'Who brings the stock?',
      ask: 'I want to know our suppliers: how many we have on file, and who brings the coffee beans.',
      task: "Answer the Manager's two questions: fill the blank in the query, run it, and read the answer from the table.",
      success: 'Hm. Correct. A truck is only as good as its deliveries. Same time tomorrow.',
    },
    idText: {
      title: 'Siapa yang mengantar stok?',
      ask: 'Saya mau tahu soal pemasok kita: berapa yang tercatat, dan siapa yang mengantar biji kopi.',
      task: 'Jawab dua pertanyaan The Manager: isi bagian kosong di query, jalankan, lalu baca jawabannya dari tabel.',
      success: 'Hm. Benar. Truk hanya sebagus pengirimannya. Besok jam yang sama.',
    },
    steps: [
      {
        starter: 'SELECT *\nFROM ___;',
        fill: 'suppliers',
        solution: 'SELECT * FROM suppliers;',
        answer: { kind: 'number', sql: 'SELECT COUNT(*) FROM suppliers;' },
        en: {
          prompt: 'How many suppliers are on file?',
          goal: 'The suppliers table has one row per supplier, past and present. Count its rows.',
          read: 'Count the rows in the result.',
          hints: ['The blank is the table with the suppliers.', 'Replace ___ with suppliers and press Run.'],
          reply: 'Hm. Next: who brings the coffee.',
        },
        id: {
          prompt: 'Berapa pemasok yang tercatat?',
          goal: 'Tabel suppliers punya satu baris per pemasok, dulu dan sekarang. Hitung barisnya.',
          read: 'Hitung baris di hasil.',
          hints: ['Bagian kosong itu tabel yang berisi pemasok.', 'Ganti ___ dengan suppliers lalu tekan Jalankan.'],
          reply: 'Hm. Berikutnya: siapa yang mengantar kopi.',
        },
      },
      {
        starter: 'SELECT name, ___\nFROM suppliers;',
        fill: 'product',
        solution: 'SELECT name, product FROM suppliers;',
        answer: {
          kind: 'choice-sql',
          choicesSql: 'SELECT name FROM suppliers ORDER BY name;',
          correctSql: "SELECT name FROM suppliers WHERE product = 'coffee beans';",
        },
        en: {
          prompt: 'Which supplier brings the coffee beans?',
          goal: 'Show each supplier next to what they bring (the product column), then find the one that brings coffee beans.',
          read: 'Find the row whose product is coffee beans and read its name.',
          hints: ['The blank is the column that says what each supplier brings.', 'Replace ___ with product and run it.'],
          reply: '',
        },
        id: {
          prompt: 'Pemasok mana yang mengantar biji kopi?',
          goal: 'Tampilkan tiap pemasok di samping apa yang diantarnya (kolom product), lalu cari yang mengantar coffee beans.',
          read: 'Cari baris yang product-nya coffee beans dan baca namanya.',
          hints: ['Bagian kosong itu kolom yang menyebut apa yang diantar tiap pemasok.', 'Ganti ___ dengan product lalu jalankan.'],
          reply: '',
        },
      },
    ],
  },
  {
    id: 'people-and-recipes',
    week: 1,
    en: {
      title: 'Recipes and regulars',
      ask: 'Two counts for my report: how many lines our recipe binders hold, and how many customers we know by name.',
      task: "Answer the Manager's two questions: fill the blank in the query, run it, and read the answer from the table.",
      success: 'Hm. Correct. Numbers in order. Same time tomorrow.',
    },
    idText: {
      title: 'Resep dan pelanggan',
      ask: 'Dua hitungan untuk laporan saya: berapa baris yang ada di buku resep, dan berapa pelanggan yang kita kenal namanya.',
      task: 'Jawab dua pertanyaan The Manager: isi bagian kosong di query, jalankan, lalu baca jawabannya dari tabel.',
      success: 'Hm. Benar. Angka yang rapi. Besok jam yang sama.',
    },
    steps: [
      {
        starter: 'SELECT *\nFROM ___;',
        fill: 'recipes',
        solution: 'SELECT * FROM recipes;',
        answer: { kind: 'number', sql: 'SELECT COUNT(*) FROM recipes;' },
        en: {
          prompt: 'How many lines are in the recipe binders?',
          goal: 'Each row of recipes is one ingredient of one item. Count the rows.',
          read: 'Count the rows in the result.',
          hints: ['The blank is the table with the recipes.', 'Replace ___ with recipes and press Run.'],
          reply: 'Hm. Next: people.',
        },
        id: {
          prompt: 'Berapa baris yang ada di buku resep?',
          goal: 'Setiap baris recipes adalah satu bahan dari satu item. Hitung barisnya.',
          read: 'Hitung baris di hasil.',
          hints: ['Bagian kosong itu tabel yang berisi resep.', 'Ganti ___ dengan recipes lalu tekan Jalankan.'],
          reply: 'Hm. Berikutnya: orang-orangnya.',
        },
      },
      {
        starter: 'SELECT *\nFROM ___;',
        fill: 'customers',
        solution: 'SELECT * FROM customers;',
        answer: { kind: 'number', sql: 'SELECT COUNT(*) FROM customers;' },
        en: {
          prompt: 'How many customers do we know by name?',
          goal: 'The customers table has one row per customer we have a name for. Count the rows.',
          read: 'Count the rows in the result.',
          hints: ['The blank is the table with the customers.', 'Replace ___ with customers and press Run.'],
          reply: '',
        },
        id: {
          prompt: 'Berapa pelanggan yang kita kenal namanya?',
          goal: 'Tabel customers punya satu baris per pelanggan yang kita tahu namanya. Hitung barisnya.',
          read: 'Hitung baris di hasil.',
          hints: ['Bagian kosong itu tabel yang berisi pelanggan.', 'Ganti ___ dengan customers lalu tekan Jalankan.'],
          reply: '',
        },
      },
    ],
  },
  // ───────────── Week 2 · WHERE ─────────────
  {
    id: 'cheap-and-closed',
    week: 2,
    en: {
      title: 'Cheap and sold out',
      ask: 'Two checks on the menu: how many items cost less than $3, and how many are marked not available.',
      task: "Answer the Manager's two questions: fill the blank in the query, run it, and count the rows.",
      success: 'Hm. Correct. Filter first, talk later. Same time tomorrow.',
    },
    idText: {
      title: 'Murah dan habis',
      ask: 'Dua pengecekan menu: berapa item yang harganya di bawah $3, dan berapa yang ditandai tidak tersedia.',
      task: 'Jawab dua pertanyaan The Manager: isi bagian kosong di query, jalankan, lalu hitung barisnya.',
      success: 'Hm. Benar. Saring dulu, bicara belakangan. Besok jam yang sama.',
    },
    steps: [
      {
        starter: 'SELECT name, price\nFROM menu_items\nWHERE price < ___;',
        fill: '3',
        solution: 'SELECT name, price FROM menu_items WHERE price < 3;',
        answer: { kind: 'number', sql: 'SELECT COUNT(*) FROM menu_items WHERE price < 3;' },
        en: {
          prompt: 'How many items cost less than $3?',
          goal: 'WHERE keeps only the rows that match a condition. Keep the items whose price is below 3, then count the rows.',
          read: 'Count the rows in the result.',
          hints: ['The blank is the limit: the price must be less than it.', 'Replace ___ with 3 (a number needs no quotes) and press Run.'],
          reply: 'Hm. Next: the sold-out ones.',
        },
        id: {
          prompt: 'Berapa item yang harganya kurang dari $3?',
          goal: 'WHERE hanya menyimpan baris yang cocok dengan sebuah syarat. Simpan item yang harganya di bawah 3, lalu hitung barisnya.',
          read: 'Hitung baris di hasil.',
          hints: ['Bagian kosong itu batasnya: harga harus kurang dari itu.', 'Ganti ___ dengan 3 (angka tidak perlu tanda kutip) lalu tekan Jalankan.'],
          reply: 'Hm. Berikutnya: yang habis.',
        },
      },
      {
        starter: 'SELECT name, is_available\nFROM menu_items\nWHERE is_available = ___;',
        fill: 'FALSE',
        solution: 'SELECT name, is_available FROM menu_items WHERE is_available = FALSE;',
        answer: { kind: 'number', sql: 'SELECT COUNT(*) FROM menu_items WHERE is_available = FALSE;' },
        en: {
          prompt: 'How many items are marked not available?',
          goal: 'is_available is a yes/no column: TRUE or FALSE. Keep the rows where it is FALSE and count them.',
          read: 'Count the rows in the result.',
          hints: ['The blank is the value to look for: not available means FALSE.', 'Replace ___ with FALSE (no quotes) and press Run.'],
          reply: '',
        },
        id: {
          prompt: 'Berapa item yang ditandai tidak tersedia?',
          goal: 'is_available adalah kolom ya/tidak: TRUE atau FALSE. Simpan baris yang nilainya FALSE lalu hitung.',
          read: 'Hitung baris di hasil.',
          hints: ['Bagian kosong itu nilai yang dicari: tidak tersedia berarti FALSE.', 'Ganti ___ dengan FALSE (tanpa tanda kutip) lalu tekan Jalankan.'],
          reply: '',
        },
      },
    ],
  },
  // ───────────── Week 3 · ORDER BY, LIMIT, computed columns ─────────────
  {
    id: 'margin-star',
    week: 3,
    recommends: true,
    en: {
      title: 'What should we push?',
      ask: 'We have room for one item on the chalkboard special. Show me which item earns the most on every sale: price minus cost. Then tell me which one to push.',
      task: "Answer the Manager's question: fill the blank, run the query, and pick the item with the biggest margin.",
      success: 'Hm. A recommendation with numbers behind it. Rare. Same time tomorrow.',
    },
    idText: {
      title: 'Apa yang harus kita dorong?',
      ask: 'Papan kapur punya tempat untuk satu menu spesial. Tunjukkan item mana yang untungnya terbesar di tiap penjualan: harga dikurangi biaya. Lalu bilang mana yang harus didorong.',
      task: 'Jawab pertanyaan The Manager: isi bagian kosong, jalankan query-nya, lalu pilih item dengan margin terbesar.',
      success: 'Hm. Rekomendasi dengan angka di baliknya. Langka. Besok jam yang sama.',
    },
    steps: [
      {
        starter:
          'SELECT name, price - cost AS margin\nFROM menu_items\nWHERE price IS NOT NULL AND cost IS NOT NULL\nORDER BY margin ___\nLIMIT 3;',
        fill: 'DESC',
        solution:
          'SELECT name, price - cost AS margin FROM menu_items WHERE price IS NOT NULL AND cost IS NOT NULL ORDER BY margin DESC LIMIT 3;',
        answer: {
          kind: 'choice-sql',
          choicesSql:
            'SELECT name FROM (SELECT name, price - cost AS margin FROM menu_items WHERE price IS NOT NULL AND cost IS NOT NULL ORDER BY margin DESC LIMIT 3) t ORDER BY name;',
          correctSql:
            'SELECT name FROM menu_items WHERE price IS NOT NULL AND cost IS NOT NULL ORDER BY price - cost DESC LIMIT 1;',
        },
        en: {
          prompt: 'Which item should we push? (Pick the one with the biggest margin.)',
          goal: 'The margin is price - cost: what is left of each sale. Sort from the biggest margin down and look at the top. Two rows have an empty price or cost, so the query skips them (an empty value would sort first with DESC).',
          read: 'The top row has the biggest margin. Pick that item: it is the one to push.',
          hints: [
            'The blank is the sort direction. Biggest first means descending.',
            'Replace ___ with DESC and press Run: the first row is the answer.',
          ],
          reply: '',
        },
        id: {
          prompt: 'Item mana yang harus kita dorong? (Pilih yang marginnya terbesar.)',
          goal: 'Margin adalah harga - biaya: sisa dari setiap penjualan. Urutkan dari margin terbesar ke bawah dan lihat yang teratas. Dua baris punya harga atau biaya kosong, jadi query-nya melewatkan mereka (nilai kosong akan muncul pertama dengan DESC).',
          read: 'Baris teratas punya margin terbesar. Pilih item itu: itulah yang harus didorong.',
          hints: ['Bagian kosong itu arah urutan. Terbesar dulu berarti menurun.', 'Ganti ___ dengan DESC lalu tekan Jalankan: baris pertama adalah jawabannya.'],
          reply: '',
        },
      },
    ],
  },
  // ───────────── Week 4 · aggregates ─────────────
  {
    id: 'busy-hour',
    week: 4,
    recommends: true,
    en: {
      title: 'The quiet hour',
      ask: 'October: which hour of the day was busiest? And I want more orders without longer queues. When should we run an offer?',
      task: "Answer the Manager's two questions: fill the blank, run the query, and read the busiest or quietest hour.",
      success: 'Hm. A quiet hour is empty room. Fill it. Same time tomorrow.',
    },
    idText: {
      title: 'Jam sepi',
      ask: 'Oktober: jam berapa yang paling ramai? Dan saya mau pesanan lebih banyak tanpa antrean lebih panjang. Kapan sebaiknya kita bikin penawaran?',
      task: 'Jawab dua pertanyaan The Manager: isi bagian kosong, jalankan query-nya, lalu baca jam teramai atau tersepi.',
      success: 'Hm. Jam sepi adalah ruang kosong. Isi. Besok jam yang sama.',
    },
    steps: [
      {
        starter: `SELECT EXTRACT(HOUR FROM sold_at) AS hour, COUNT(DISTINCT order_id) AS orders\nFROM sales\nWHERE ${HISTORY}\nGROUP BY hour\nORDER BY orders ___\nLIMIT 3;`,
        fill: 'DESC',
        solution: `SELECT EXTRACT(HOUR FROM sold_at) AS hour, COUNT(DISTINCT order_id) AS orders FROM sales WHERE ${HISTORY} GROUP BY hour ORDER BY orders DESC LIMIT 3;`,
        answer: {
          kind: 'number',
          sql: `SELECT EXTRACT(HOUR FROM sold_at) FROM sales WHERE ${HISTORY} GROUP BY 1 ORDER BY COUNT(DISTINCT order_id) DESC LIMIT 1;`,
        },
        en: {
          prompt: 'Which hour of the day (0–23) had the most orders in October?',
          goal: 'The metric is orders per hour. EXTRACT(HOUR …) pulls the hour out of the sale time, GROUP BY makes one row per hour, and ORDER BY puts the busiest hour first.',
          read: 'The top row is the busiest hour. Type its hour, for example 8 for 08:00–08:59.',
          hints: ['The blank is the sort direction. The most orders first means descending.', 'Replace ___ with DESC and press Run: the hour in the first row is the answer.'],
          reply: 'Hm. Now the other end.',
        },
        id: {
          prompt: 'Jam berapa (0–23) yang punya pesanan terbanyak di bulan Oktober?',
          goal: 'Metriknya adalah pesanan per jam. EXTRACT(HOUR …) mengambil jam dari waktu penjualan, GROUP BY membuat satu baris per jam, dan ORDER BY menaruh jam teramai di atas.',
          read: 'Baris teratas adalah jam teramai. Ketik jamnya, misalnya 8 untuk 08:00–08:59.',
          hints: ['Bagian kosong itu arah urutan. Pesanan terbanyak dulu berarti menurun.', 'Ganti ___ dengan DESC lalu tekan Jalankan: jam di baris pertama adalah jawabannya.'],
          reply: 'Hm. Sekarang ujung satunya.',
        },
      },
      {
        starter: `SELECT EXTRACT(HOUR FROM sold_at) AS hour, COUNT(DISTINCT order_id) AS orders\nFROM sales\nWHERE ${HISTORY}\nGROUP BY hour\nORDER BY orders ___;`,
        fill: 'ASC',
        solution: `SELECT EXTRACT(HOUR FROM sold_at) AS hour, COUNT(DISTINCT order_id) AS orders FROM sales WHERE ${HISTORY} GROUP BY hour ORDER BY orders ASC;`,
        answer: {
          kind: 'choice',
          choices: [
            'Run the offer in the busiest hour',
            'Run the offer in the quietest hour',
            'Do not run an offer at all',
          ],
          choicesId: ['Bikin penawaran di jam teramai', 'Bikin penawaran di jam tersepi', 'Jangan bikin penawaran sama sekali'],
          correct: 1,
        },
        en: {
          prompt: 'So what should we do?',
          goal: 'An offer pays off where there is empty room, not where the queue is already long. Sort the hours the other way and look at the bottom of the busy list: the quietest hours.',
          read: 'The first row is the quietest hour. Pick the recommendation that fills it.',
          hints: ['The blank is the sort direction. Fewest orders first means ascending.', 'Replace ___ with ASC and press Run. The top row is the quietest hour.'],
          reply: '',
        },
        id: {
          prompt: 'Jadi, apa yang sebaiknya kita lakukan?',
          goal: 'Penawaran berguna di tempat yang masih kosong, bukan di tempat antrean sudah panjang. Urutkan jam ke arah sebaliknya dan lihat yang paling sepi.',
          read: 'Baris pertama adalah jam tersepi. Pilih rekomendasi yang mengisinya.',
          hints: ['Bagian kosong itu arah urutan. Pesanan tersedikit dulu berarti menaik.', 'Ganti ___ dengan ASC lalu tekan Jalankan. Baris teratas adalah jam tersepi.'],
          reply: '',
        },
      },
    ],
  },
  // ───────────── Week 5 · JOIN ─────────────
  {
    id: 'espresso-combo',
    week: 5,
    recommends: true,
    en: {
      title: 'What goes with an Espresso?',
      ask: 'Lots of people buy espressos. How many orders had one in them? And what else do those people take? I want a combo for the chalkboard.',
      task: "Answer the Manager's two questions: fill the blank, run the query, and read the number or the top item.",
      success: 'Hm. A combo built on what people already do. Good. Same time tomorrow.',
    },
    idText: {
      title: 'Apa yang cocok dengan Espresso?',
      ask: 'Banyak orang beli espresso. Berapa pesanan yang berisi satu? Dan apa lagi yang diambil orang-orang itu? Saya mau paket combo untuk papan kapur.',
      task: 'Jawab dua pertanyaan The Manager: isi bagian kosong, jalankan query-nya, lalu baca angkanya atau item teratas.',
      success: 'Hm. Combo yang dibangun dari kebiasaan orang. Bagus. Besok jam yang sama.',
    },
    steps: [
      {
        starter: `SELECT COUNT(DISTINCT order_id) AS orders\nFROM sales\nWHERE item_id = ___ AND sold_at < '2026-11-01';`,
        fill: '1',
        solution: "SELECT COUNT(DISTINCT order_id) AS orders FROM sales WHERE item_id = 1 AND sold_at < '2026-11-01';",
        answer: { kind: 'number', sql: "SELECT COUNT(DISTINCT order_id) FROM sales WHERE item_id = 1 AND sold_at < '2026-11-01';" },
        en: {
          prompt: 'How many orders (before November) had an Espresso in them?',
          goal: 'The Espresso is item 1 (you can check it in menu_items). One order can have several rows in sales, so count the different order_id values that have a row for item 1.',
          read: 'The result is one number, orders. That is your answer.',
          hints: ['The blank is the Espresso’s item_id. Look it up in menu_items if you do not remember.', 'Replace ___ with 1 and press Run.'],
          reply: 'Hm. Now what rides along with it.',
        },
        id: {
          prompt: 'Berapa pesanan (sebelum November) yang berisi Espresso?',
          goal: 'Espresso adalah item 1 (bisa dicek di menu_items). Satu pesanan bisa punya beberapa baris di sales, jadi hitung order_id berbeda yang punya baris untuk item 1.',
          read: 'Hasilnya satu angka, orders. Itulah jawabanmu.',
          hints: ['Bagian kosong itu item_id Espresso. Cari di menu_items kalau lupa.', 'Ganti ___ dengan 1 lalu tekan Jalankan.'],
          reply: 'Hm. Sekarang apa yang ikut bersamanya.',
        },
      },
      {
        starter:
          "SELECT m.name, COUNT(*) AS orders\nFROM sales a\nJOIN sales b ON a.order_id = b.order_id AND a.item_id <> b.item_id\nJOIN menu_items m ON m.item_id = b.item_id\nWHERE a.item_id = ___ AND a.sold_at < '2026-11-01'\nGROUP BY m.name\nORDER BY orders DESC\nLIMIT 3;",
        fill: '1',
        solution:
          "SELECT m.name, COUNT(*) AS orders FROM sales a JOIN sales b ON a.order_id = b.order_id AND a.item_id <> b.item_id JOIN menu_items m ON m.item_id = b.item_id WHERE a.item_id = 1 AND a.sold_at < '2026-11-01' GROUP BY m.name ORDER BY orders DESC LIMIT 3;",
        answer: {
          kind: 'choice-sql',
          choicesSql:
            "SELECT name FROM (SELECT m.name, COUNT(*) AS orders FROM sales a JOIN sales b ON a.order_id = b.order_id AND a.item_id <> b.item_id JOIN menu_items m ON m.item_id = b.item_id WHERE a.item_id = 1 AND a.sold_at < '2026-11-01' GROUP BY m.name ORDER BY orders DESC LIMIT 3) t ORDER BY name;",
          correctSql:
            "SELECT m.name FROM sales a JOIN sales b ON a.order_id = b.order_id AND a.item_id <> b.item_id JOIN menu_items m ON m.item_id = b.item_id WHERE a.item_id = 1 AND a.sold_at < '2026-11-01' GROUP BY m.name ORDER BY COUNT(*) DESC LIMIT 1;",
        },
        en: {
          prompt: 'So what should the Espresso combo include? Pick what espresso buyers take most often.',
          goal: 'Join sales to itself: a is the Espresso row, b is any other row in the same order (the same order_id). Then join menu_items to turn item_id into a name and count which item shows up most.',
          read: 'The top row is the item that most often travels with an Espresso. That is the one to put in the combo.',
          hints: [
            'The blank is the Espresso’s item_id again: the a rows must be Espresso rows.',
            'Replace ___ with 1 and press Run. The first row is the best partner for the Espresso.',
          ],
          reply: '',
        },
        id: {
          prompt: 'Jadi, apa isi combo Espresso? Pilih yang paling sering diambil pembeli espresso.',
          goal: 'Gabungkan sales dengan dirinya sendiri: a adalah baris Espresso, b adalah baris lain di pesanan yang sama (order_id sama). Lalu gabungkan menu_items untuk mengubah item_id jadi nama dan hitung item mana yang paling sering muncul.',
          read: 'Baris teratas adalah item yang paling sering menemani Espresso. Itulah yang masuk combo.',
          hints: ['Bagian kosong itu item_id Espresso lagi: baris a harus baris Espresso.', 'Ganti ___ dengan 1 lalu tekan Jalankan. Baris pertama adalah pasangan terbaik Espresso.'],
          reply: '',
        },
      },
    ],
  },
  {
    id: 'loyal-and-lost',
    week: 5,
    en: {
      title: 'Regulars and strangers',
      ask: 'Who is our most loyal customer, by number of orders? And how many people signed up but never bought a thing?',
      task: "Answer the Manager's two questions: fill the blank, run the query, and read the answer from the result.",
      success: 'Hm. Know who comes back, and who never did. Same time tomorrow.',
    },
    idText: {
      title: 'Pelanggan tetap dan orang asing',
      ask: 'Siapa pelanggan paling setia kita, dari jumlah pesanannya? Dan berapa orang yang mendaftar tapi tidak pernah membeli apa pun?',
      task: 'Jawab dua pertanyaan The Manager: isi bagian kosong, jalankan query-nya, lalu baca jawabannya dari hasil.',
      success: 'Hm. Tahu siapa yang kembali, dan siapa yang tidak pernah. Besok jam yang sama.',
    },
    steps: [
      {
        starter:
          'SELECT c.name, COUNT(DISTINCT s.order_id) AS orders\nFROM customers c\nJOIN sales s ON s.customer_id = c.customer_id\nGROUP BY c.name\nORDER BY orders ___\nLIMIT 3;',
        fill: 'DESC',
        solution:
          'SELECT c.name, COUNT(DISTINCT s.order_id) AS orders FROM customers c JOIN sales s ON s.customer_id = c.customer_id GROUP BY c.name ORDER BY orders DESC LIMIT 3;',
        answer: {
          kind: 'choice-sql',
          choicesSql:
            'SELECT name FROM (SELECT c.name, COUNT(DISTINCT s.order_id) AS orders FROM customers c JOIN sales s ON s.customer_id = c.customer_id GROUP BY c.name ORDER BY orders DESC LIMIT 3) t ORDER BY name;',
          correctSql:
            'SELECT c.name FROM customers c JOIN sales s ON s.customer_id = c.customer_id GROUP BY c.name ORDER BY COUNT(DISTINCT s.order_id) DESC LIMIT 1;',
        },
        en: {
          prompt: 'Who is the most loyal customer?',
          goal: 'Join customers to sales to put a name on every sale, count each person’s different orders, and sort so the most loyal comes first.',
          read: 'The top row is the customer with the most orders.',
          hints: ['The blank is the sort direction. The most orders first means descending.', 'Replace ___ with DESC and press Run. The first row is the answer.'],
          reply: 'Hm. Now the other kind.',
        },
        id: {
          prompt: 'Siapa pelanggan paling setia?',
          goal: 'Gabungkan customers dengan sales supaya tiap penjualan punya nama, hitung pesanan berbeda tiap orang, lalu urutkan supaya yang paling setia di atas.',
          read: 'Baris teratas adalah pelanggan dengan pesanan terbanyak.',
          hints: ['Bagian kosong itu arah urutan. Pesanan terbanyak dulu berarti menurun.', 'Ganti ___ dengan DESC lalu tekan Jalankan. Baris pertama adalah jawabannya.'],
          reply: 'Hm. Sekarang jenis yang lain.',
        },
      },
      {
        starter:
          'SELECT c.name\nFROM customers c\nLEFT JOIN sales s ON s.customer_id = c.customer_id\nWHERE s.sale_id IS ___;',
        fill: 'NULL',
        solution:
          'SELECT c.name FROM customers c LEFT JOIN sales s ON s.customer_id = c.customer_id WHERE s.sale_id IS NULL;',
        answer: {
          kind: 'number',
          sql: 'SELECT COUNT(*) FROM customers c LEFT JOIN sales s ON s.customer_id = c.customer_id WHERE s.sale_id IS NULL;',
        },
        en: {
          prompt: 'How many customers signed up but never bought anything?',
          goal: 'LEFT JOIN keeps every customer, even those with no sale; for them the sales columns are empty (NULL). Keep only those rows and count them.',
          read: 'Count the rows in the result.',
          hints: ['The blank is how to test for “nothing there”: IS followed by the word for empty.', 'Replace ___ with NULL (no quotes) and press Run.'],
          reply: '',
        },
        id: {
          prompt: 'Berapa pelanggan yang mendaftar tapi tidak pernah membeli apa pun?',
          goal: 'LEFT JOIN menyimpan setiap pelanggan, bahkan yang tidak punya penjualan; untuk mereka kolom sales kosong (NULL). Simpan hanya baris itu lalu hitung.',
          read: 'Hitung baris di hasil.',
          hints: ['Bagian kosong itu cara menguji “tidak ada isinya”: IS diikuti kata untuk kosong.', 'Ganti ___ dengan NULL (tanpa tanda kutip) lalu tekan Jalankan.'],
          reply: '',
        },
      },
    ],
  },
  // ───────────── Week 6 · put it together ─────────────
  {
    id: 'milk-mornings',
    week: 6,
    recommends: true,
    en: {
      title: 'The milk mystery',
      ask: 'Milk drinks are down. On how many October days did we run out of milk before noon? And what do we do about it?',
      task: "Answer the Manager's two questions: fill the blank, run the query, and read the answer from the result.",
      success: 'Hm. Evidence first, action second. That is the job. Same time tomorrow.',
    },
    idText: {
      title: 'Misteri susu',
      ask: 'Minuman susu menurun. Di berapa hari Oktober kita kehabisan susu sebelum siang? Dan apa yang kita lakukan?',
      task: 'Jawab dua pertanyaan The Manager: isi bagian kosong, jalankan query-nya, lalu baca jawabannya dari hasil.',
      success: 'Hm. Bukti dulu, tindakan kemudian. Itu pekerjaannya. Besok jam yang sama.',
    },
    steps: [
      {
        starter:
          "SELECT day, delivered_at, sold_out_at\nFROM inventory\nWHERE ingredient = 'milk'\n  AND day >= '2026-10-01' AND day < '2026-11-01'\n  AND sold_out_at < ___;",
        fill: "'12:00'",
        solution:
          "SELECT day, delivered_at, sold_out_at FROM inventory WHERE ingredient = 'milk' AND day >= '2026-10-01' AND day < '2026-11-01' AND sold_out_at < '12:00';",
        answer: {
          kind: 'number',
          sql: "SELECT COUNT(*) FROM inventory WHERE ingredient = 'milk' AND day >= '2026-10-01' AND day < '2026-11-01' AND sold_out_at < '12:00';",
        },
        en: {
          prompt: 'On how many October days did the milk run out before 12:00?',
          goal: 'inventory has one row per delivery and day, with the time the stock ran out (sold_out_at; empty if it never did). Keep October’s milk rows that ran out before noon and count them.',
          read: 'Count the rows in the result. Look at delivered_at too: when does the milk arrive?',
          hints: ['The blank is the time to compare with, as text in single quotes.', "Replace ___ with '12:00' (quotes included) and press Run."],
          reply: 'Hm. That is a pattern. Now: what do we do?',
        },
        id: {
          prompt: 'Di berapa hari Oktober susu habis sebelum jam 12:00?',
          goal: 'inventory punya satu baris per pengiriman dan hari, dengan waktu stok habis (sold_out_at; kosong kalau tidak pernah habis). Simpan baris susu bulan Oktober yang habis sebelum siang lalu hitung.',
          read: 'Hitung baris di hasil. Lihat juga delivered_at: kapan susunya datang?',
          hints: ['Bagian kosong itu waktu pembandingnya, sebagai teks dalam tanda kutip satu.', "Ganti ___ dengan '12:00' (pakai tanda kutip) lalu tekan Jalankan."],
          reply: 'Hm. Itu sebuah pola. Sekarang: apa yang kita lakukan?',
        },
      },
      {
        starter:
          "SELECT s.name, s.delivery_time, s.since, s.until\nFROM suppliers s\nWHERE s.product = ___\nORDER BY s.since;",
        fill: "'milk'",
        solution: "SELECT s.name, s.delivery_time, s.since, s.until FROM suppliers s WHERE s.product = 'milk' ORDER BY s.since;",
        answer: {
          kind: 'choice',
          choices: [
            'Get the milk delivered in the morning again',
            'Raise the price of milk drinks',
            'Stop selling milk drinks',
          ],
          choicesId: ['Minta susu diantar pagi lagi', 'Naikkan harga minuman susu', 'Berhenti jual minuman susu'],
          correct: 0,
        },
        en: {
          prompt: 'So what should we do?',
          goal: 'Compare the milk suppliers: who delivers when, and since when. The October change shows in the dates. Then pick the action that fixes the cause, not the symptom.',
          read: 'The newer supplier delivers at noon; the old one came at 06:00. The mornings run dry in between.',
          hints: ['The blank is the product to look for: it is text, so it needs single quotes.', "Replace ___ with 'milk' (quotes included) and press Run."],
          reply: '',
        },
        id: {
          prompt: 'Jadi, apa yang sebaiknya kita lakukan?',
          goal: 'Bandingkan pemasok susu: siapa mengantar kapan, dan sejak kapan. Perubahan Oktober terlihat di tanggalnya. Lalu pilih tindakan yang memperbaiki penyebabnya, bukan gejalanya.',
          read: 'Pemasok yang baru mengantar jam 12:00; yang lama datang jam 06:00. Pagi hari kehabisan di antaranya.',
          hints: ['Bagian kosong itu produk yang dicari: itu teks, jadi perlu tanda kutip satu.', "Ganti ___ dengan 'milk' (pakai tanda kutip) lalu tekan Jalankan."],
          reply: '',
        },
      },
    ],
  },
];

export const dailyCaseById = (id: string): DailyCase | undefined => DAILY_CASES.find((c) => c.id === id);

/** The cases the Manager may bring in a week: the cases of weeks 1…week. */
export const casesForWeek = (week: number): DailyCase[] => DAILY_CASES.filter((c) => c.week <= week && !c.weekly);

const hash = (text: string): number => {
  let h = 2166136261;
  for (const ch of text) h = Math.imul(h ^ ch.charCodeAt(0), 16777619) >>> 0;
  return h;
};

/**
 * Today's case: on the fifth day of a week with a big case, that case; otherwise the same date always gives the same one. Two days in three it is one of this
 * week's own cases (when the week has any), otherwise any case so far — so earlier weeks come
 * back, like spaced repetition.
 */
export function pickDailyCase(week: number, date: string, dayInWeek?: number): DailyCase {
  // The fifth day of weeks 2–5: the week's big case.
  if (dayInWeek === 5) {
    const big = DAILY_CASES.find((c) => c.weekly && c.week === week);
    if (big) return big;
  }
  const all = casesForWeek(week);
  const own = all.filter((c) => c.week === week);
  const h = hash(`${week} ${date}`);
  const pool = own.length > 0 && h % 3 !== 0 ? own : all;
  return pool[Math.floor(h / 3) % pool.length];
}

/** The Manager's talk at the door for one of today's cases. */
export function dailyIntro(c: DailyCase, lang: Lang): ManagerIntro {
  const text = lang === 'id' ? c.idText : c.en;
  const base = lang === 'id' ? ID_INTRO : EN_INTRO;
  return {
    lines: [base.lines[0], base.lines[1], text.ask],
    replies: base.replies.slice(0, 2),
    open: base.open,
  };
}

const EN_INTRO: ManagerIntro = {
  lines: ['*Knock knock.*', "Query Truck Co., regional manager. I don't do small talk.", ''],
  replies: [
    { label: 'Right away.', answer: "Good. One question at a time. Show me the rows — I don't trust feelings." },
    {
      label: 'Can I finish with this customer first?',
      answer: "No. Numbers first. Your customer's clock is stopped anyway — mine isn't.",
    },
  ],
  open: 'Open the case 📋',
};

const ID_INTRO: ManagerIntro = {
  lines: ['*Tok tok.*', 'Query Truck Co., manajer wilayah. Saya tidak suka basa-basi.', ''],
  replies: [
    { label: 'Siap, sekarang juga.', answer: 'Bagus. Satu pertanyaan sekali jalan. Tunjukkan barisnya — saya tidak percaya perasaan.' },
    { label: 'Boleh saya selesaikan pelanggan ini dulu?', answer: 'Tidak. Angka dulu. Jam pelangganmu toh sedang berhenti — jam saya tidak.' },
  ],
  open: 'Buka kasusnya 📋',
};

/** The case as a level, with the right answers for the data as it is now. */
export async function buildDailyCase(db: CafeDatabase, c: DailyCase, lang: Lang = 'en'): Promise<CaseLevel> {
  const first = async (sql: string) => {
    const r = await db.run(sql);
    if (!r.ok) throw new Error(`Manager case query failed: ${sql}`);
    return r.rows;
  };
  const id = lang === 'id';
  const text = id ? c.idText : c.en;
  const questions: CaseQuestion[] = [];
  for (const step of c.steps) {
    const t = id ? step.id : step.en;
    const a = step.answer;
    let answer: CaseQuestion['answer'];
    if (a.kind === 'number') {
      answer = { kind: 'number', value: Number((await first(a.sql))[0][0]), tolerance: a.tolerance ?? 1e-6 };
      if (a.tolerance === undefined) delete (answer as { tolerance?: number }).tolerance;
    } else if (a.kind === 'choice') {
      answer = { kind: 'choice', choices: id ? a.choicesId : a.choices, correct: a.correct };
    } else {
      const choices = (await first(a.choicesSql)).map((r) => String(r[0]));
      const right = String((await first(a.correctSql))[0][0]);
      const correct = choices.indexOf(right);
      if (correct < 0) throw new Error(`Manager case: ${right} is not among ${choices.join(', ')}`);
      answer = { kind: 'choice', choices, correct };
    }
    questions.push({
      prompt: t.prompt,
      answer,
      evidence: { sql: step.solution },
      guide: {
        goal: t.goal,
        read: t.read,
        starter: step.starter,
        hints: [...t.hints, `${id ? 'Query lengkapnya' : 'The whole query'}: ${step.solution}`],
        reply: t.reply,
      },
    });
  }
  return {
    id: `manager-${c.id}`,
    kind: 'case',
    title: text.title,
    character: 'manager',
    station: 'back-office',
    dialogue: [
      (id ? ID_INTRO : EN_INTRO).lines[0],
      (id ? ID_INTRO : EN_INTRO).lines[1],
      text.ask,
      id
        ? 'Satu pertanyaan sekali jalan. Tunjukkan barisnya — saya tidak percaya perasaan.'
        : "One question at a time. Show me the rows — I don't trust feelings.",
    ],
    task: text.task,
    guided: true,
    starters: c.steps.map((s) => s.starter),
    questions,
    hints: [
      ...(id
        ? ['Isi bagian kosong, jalankan query-nya, lalu baca jawabannya.', 'Setiap langkah punya petunjuk sendiri.', 'Jawabannya ada di baris hasil.']
        : ['Fill the blank, run the query, and read the answer.', 'Each step has its own hints.', 'The answer is in the result rows.']),
    ] as [string, string, string],
    success: text.success,
  };
}
