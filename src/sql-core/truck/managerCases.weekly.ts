/**
 * The Manager's big cases (GAME_DESIGN.md §6, 6.8): on the fifth day of weeks 2–5 he brings one
 * guided case of three questions that follows the analyst's five steps — the business question,
 * the metric, the pattern, the opportunity, the action — and ends with a recommendation backed by
 * the result. They moved here from the v1 café (the story is now the truck's: no Grandma, no café),
 * and use only the SQL taught up to their week. The shapes are those of `managerCases.ts`.
 */
import type { DailyCase } from './managerCases';

export const WEEKLY_CASES: DailyCase[] = [
  // ───────────── Week 2 · The Menu Audit ─────────────
  {
    id: 'menu-audit',
    week: 2,
    weekly: true,
    recommends: true,
    en: {
      title: 'The Menu Audit',
      ask: 'The printer comes tomorrow to print our new menu cards. Before that, audit the menu for me: find the gaps, and tell me what we fix first.',
      task: "Audit the menu for the Manager: fill the blank, run each query, and answer from the result. The last answer is a recommendation.",
      success: 'Hm. Gaps found, priority set, evidence shown. The printer can wait one day. Good week.',
    },
    idText: {
      title: 'Audit Menu',
      ask: 'Besok tukang cetak datang mencetak kartu menu baru kita. Sebelum itu, audit menunya untuk saya: cari yang bolong, dan bilang apa yang kita perbaiki dulu.',
      task: 'Audit menu untuk The Manager: isi bagian kosong, jalankan tiap query, dan jawab dari hasilnya. Jawaban terakhir adalah rekomendasi.',
      success: 'Hm. Yang bolong ketemu, prioritas ditentukan, bukti ditunjukkan. Tukang cetak bisa menunggu sehari. Minggu yang bagus.',
    },
    steps: [
      {
        starter: 'SELECT name, category, price, cost\nFROM menu_items\nWHERE category IS NULL OR price IS NULL OR ___ IS NULL;',
        fill: 'cost',
        solution:
          'SELECT name, category, price, cost FROM menu_items WHERE category IS NULL OR price IS NULL OR cost IS NULL;',
        answer: {
          kind: 'number',
          sql: 'SELECT COUNT(*) FROM menu_items WHERE category IS NULL OR price IS NULL OR cost IS NULL;',
        },
        en: {
          prompt: 'How many menu items have a missing category, price or cost?',
          goal: 'Missing data is NULL, and you test for it with IS NULL (never = NULL). Join the three checks with OR so a row with any gap shows up.',
          read: 'Count the rows in the result: each one is an item with at least one gap.',
          hints: [
            'The blank is the third column to check: the one that holds what an item costs us.',
            'Replace ___ with cost (no quotes, it is a column) and press Run.',
          ],
          reply: 'Hm. That is more than I expected. Which one hurts most?',
        },
        id: {
          prompt: 'Berapa item menu yang kategori, harga, atau biayanya kosong?',
          goal: 'Data yang hilang adalah NULL, dan mengujinya dengan IS NULL (jangan pernah = NULL). Gabungkan tiga pengecekan dengan OR agar baris dengan satu lubang pun muncul.',
          read: 'Hitung baris di hasil: tiap baris adalah item dengan sedikitnya satu lubang.',
          hints: [
            'Bagian kosong itu kolom ketiga yang dicek: yang menyimpan berapa biaya item bagi kita.',
            'Ganti ___ dengan cost (tanpa tanda kutip, itu kolom) lalu tekan Jalankan.',
          ],
          reply: 'Hm. Lebih banyak dari dugaan saya. Yang mana paling parah?',
        },
      },
      {
        starter: 'SELECT name, price\nFROM menu_items\nWHERE price ___ NULL;',
        fill: 'IS',
        solution: 'SELECT name, price FROM menu_items WHERE price IS NULL;',
        answer: {
          kind: 'choice-sql',
          choicesSql:
            'SELECT name FROM menu_items WHERE category IS NULL OR price IS NULL OR cost IS NULL ORDER BY name;',
          correctSql: 'SELECT name FROM menu_items WHERE price IS NULL;',
        },
        en: {
          prompt: "Which item can't be rung up at the till at all?",
          goal: 'An item with no price cannot be sold: the till has nothing to add up. Look for the rows where the price is NULL.',
          read: 'The result holds the item with no price. Pick it.',
          hints: [
            'The blank is the word that tests for an empty value: IS, then NULL.',
            'Replace ___ with IS and press Run.',
          ],
          reply: 'Hm. A drink we cannot even sell. Next: what do we do?',
        },
        id: {
          prompt: 'Item mana yang sama sekali tidak bisa dikasir?',
          goal: 'Item tanpa harga tidak bisa dijual: kasir tidak punya apa-apa untuk dijumlahkan. Cari baris yang harganya NULL.',
          read: 'Hasilnya berisi item tanpa harga. Pilih itu.',
          hints: ['Bagian kosong itu kata untuk menguji nilai kosong: IS, lalu NULL.', 'Ganti ___ dengan IS lalu tekan Jalankan.'],
          reply: 'Hm. Minuman yang bahkan tidak bisa kita jual. Berikutnya: apa yang kita lakukan?',
        },
      },
      {
        starter: 'SELECT name, price, is_available\nFROM menu_items\nWHERE price IS NULL AND is_available = ___;',
        fill: 'TRUE',
        solution: 'SELECT name, price, is_available FROM menu_items WHERE price IS NULL AND is_available = TRUE;',
        answer: {
          kind: 'choice',
          choices: [
            "Add Hot Chocolate's price: it is on sale but can't be rung up",
            'Fix the spelling of "Iced Capuccino"',
            'Take the sold-out items off the list',
          ],
          choicesId: [
            'Isi harga Hot Chocolate: dijual tapi tidak bisa dikasir',
            'Perbaiki ejaan "Iced Capuccino"',
            'Hapus item yang habis dari daftar',
          ],
          correct: 0,
        },
        en: {
          prompt: 'The menu goes to the printer tomorrow. What should we fix first?',
          goal: 'Fix the gap that costs us money first. Check whether the item with no price is marked available: if it is, customers can ask for it and we cannot charge them.',
          read: 'The item is marked available (TRUE) and still has no price. That is the first fix.',
          hints: [
            'The blank is a yes/no value: we want items that ARE available, so TRUE.',
            'Replace ___ with TRUE (no quotes) and press Run.',
          ],
          reply: '',
        },
        id: {
          prompt: 'Menu masuk percetakan besok. Apa yang harus kita perbaiki dulu?',
          goal: 'Perbaiki lubang yang merugikan uang dulu. Cek apakah item tanpa harga itu ditandai tersedia: kalau ya, pelanggan bisa memesannya dan kita tidak bisa menagihnya.',
          read: 'Item itu ditandai tersedia (TRUE) tapi tetap tanpa harga. Itulah perbaikan pertama.',
          hints: [
            'Bagian kosong itu nilai ya/tidak: kita mau item yang TERSEDIA, jadi TRUE.',
            'Ganti ___ dengan TRUE (tanpa tanda kutip) lalu tekan Jalankan.',
          ],
          reply: '',
        },
      },
    ],
  },
  // ───────────── Week 3 · What Should We Promote? ─────────────
  {
    id: 'promote-which',
    week: 3,
    weekly: true,
    recommends: true,
    en: {
      title: 'What Should We Promote?',
      ask: 'We can feature one drink on the big chalkboard next week. I want the one that earns us the most, not the one you like making. Show me, then recommend.',
      task: "Find the drink to feature: fill the blank, run each query, and answer from the result. The last answer is a recommendation.",
      success: 'Hm. You checked that we can actually sell it. Many people forget. The chalkboard is yours.',
    },
    idText: {
      title: 'Apa yang Harus Dipromosikan?',
      ask: 'Kita boleh menampilkan satu minuman di papan kapur besar minggu depan. Saya mau yang paling menguntungkan, bukan yang kamu suka buat. Tunjukkan, lalu rekomendasikan.',
      task: 'Cari minuman untuk ditampilkan: isi bagian kosong, jalankan tiap query, dan jawab dari hasilnya. Jawaban terakhir adalah rekomendasi.',
      success: 'Hm. Kamu memeriksa bahwa kita memang bisa menjualnya. Banyak yang lupa. Papan kapurnya urusanmu.',
    },
    steps: [
      {
        starter: 'SELECT name, price - cost AS margin\nFROM menu_items\nWHERE price - cost > ___;',
        fill: '3.5',
        solution: 'SELECT name, price - cost AS margin FROM menu_items WHERE price - cost > 3.5;',
        answer: { kind: 'number', sql: 'SELECT COUNT(*) FROM menu_items WHERE price - cost > 3.5;' },
        en: {
          prompt: 'How many items earn more than $3.50 on every sale?',
          goal: 'The margin is price - cost: what is left of a sale. Keep the items whose margin is above 3.5 and count them.',
          read: 'Count the rows in the result.',
          hints: ['The blank is the limit: a plain number, no quotes.', 'Replace ___ with 3.5 and press Run.'],
          reply: 'Hm. A short list. Now just the drinks.',
        },
        id: {
          prompt: 'Berapa item yang untungnya lebih dari $3,50 di tiap penjualan?',
          goal: 'Margin adalah harga - biaya: sisa dari sebuah penjualan. Simpan item yang marginnya di atas 3.5 lalu hitung.',
          read: 'Hitung baris di hasil.',
          hints: ['Bagian kosong itu batasnya: angka biasa, tanpa tanda kutip.', 'Ganti ___ dengan 3.5 lalu tekan Jalankan.'],
          reply: 'Hm. Daftar pendek. Sekarang khusus minuman.',
        },
      },
      {
        starter:
          "SELECT name, price - cost AS margin, is_available\nFROM menu_items\nWHERE category IN ('coffee', 'tea')\nORDER BY margin DESC\nLIMIT ___;",
        fill: '3',
        solution:
          "SELECT name, price - cost AS margin, is_available FROM menu_items WHERE category IN ('coffee', 'tea') ORDER BY margin DESC LIMIT 3;",
        answer: {
          kind: 'choice-sql',
          choicesSql:
            "SELECT name FROM (SELECT name, price - cost AS margin FROM menu_items WHERE category IN ('coffee', 'tea') ORDER BY margin DESC LIMIT 3) t ORDER BY name;",
          correctSql:
            "SELECT name FROM menu_items WHERE category IN ('coffee', 'tea') ORDER BY price - cost DESC LIMIT 1;",
        },
        en: {
          prompt: 'Which coffee or tea earns the most per sale?',
          goal: 'Sort the drinks by margin, biggest first, and keep the top few. Look at the last column too: is_available says whether we can sell it today.',
          read: 'The first row has the biggest margin. Pick that drink (but read its is_available).',
          hints: ['The blank is how many rows to keep: the top three is enough.', 'Replace ___ with 3 and press Run.'],
          reply: 'Hm. Remember that last column. Now: what do we do?',
        },
        id: {
          prompt: 'Kopi atau teh mana yang untungnya terbesar per penjualan?',
          goal: 'Urutkan minuman menurut margin, terbesar dulu, dan simpan beberapa teratas. Lihat juga kolom terakhir: is_available menunjukkan apakah hari ini bisa kita jual.',
          read: 'Baris pertama punya margin terbesar. Pilih minuman itu (tapi baca is_available-nya).',
          hints: ['Bagian kosong itu jumlah baris yang disimpan: tiga teratas cukup.', 'Ganti ___ dengan 3 lalu tekan Jalankan.'],
          reply: 'Hm. Ingat kolom terakhir itu. Sekarang: apa yang kita lakukan?',
        },
      },
      {
        starter:
          "SELECT name, price - cost AS margin\nFROM menu_items\nWHERE category IN ('coffee', 'tea') AND is_available = ___\nORDER BY margin DESC\nLIMIT 3;",
        fill: 'TRUE',
        solution:
          "SELECT name, price - cost AS margin FROM menu_items WHERE category IN ('coffee', 'tea') AND is_available = TRUE ORDER BY margin DESC LIMIT 3;",
        answer: {
          kind: 'choice',
          choices: [
            'Caramel Macchiato: the best margin we can actually sell',
            'Pumpkin Spice Latte: the biggest margin of all drinks',
            'Espresso: the cheapest to make',
          ],
          choicesId: [
            'Caramel Macchiato: margin terbaik yang benar-benar bisa kita jual',
            'Pumpkin Spice Latte: margin terbesar dari semua minuman',
            'Espresso: yang paling murah dibuat',
          ],
          correct: 0,
        },
        en: {
          prompt: 'Which drink should go on the chalkboard?',
          goal: 'A big margin is no use if we cannot sell the item. Keep only the drinks that are available (TRUE) and look at the top again.',
          read: 'The top row is the best drink we can really sell.',
          hints: ['The blank is a yes/no value: we want drinks that ARE available.', 'Replace ___ with TRUE (no quotes) and press Run.'],
          reply: '',
        },
        id: {
          prompt: 'Minuman mana yang sebaiknya masuk papan kapur?',
          goal: 'Margin besar tidak berguna kalau itemnya tidak bisa dijual. Simpan hanya minuman yang tersedia (TRUE) dan lihat yang teratas lagi.',
          read: 'Baris teratas adalah minuman terbaik yang benar-benar bisa kita jual.',
          hints: ['Bagian kosong itu nilai ya/tidak: kita mau minuman yang TERSEDIA.', 'Ganti ___ dengan TRUE (tanpa tanda kutip) lalu tekan Jalankan.'],
          reply: '',
        },
      },
    ],
  },
  // ───────────── Week 4 · The Quiet Day ─────────────
  {
    id: 'quiet-day',
    week: 4,
    weekly: true,
    recommends: true,
    en: {
      title: 'The Quiet Day',
      ask: 'Some days the queue is short enough to hear the radio. Is one weekday really quieter? And if so, why, and what should we do about it?',
      task: "Find the quiet day: fill the blank, run each query, and answer from the result. The last answer is a recommendation.",
      success: 'Hm. Question, metric, pattern, action. That is the whole job. See you Monday.',
    },
    idText: {
      title: 'Hari yang Sepi',
      ask: 'Ada hari-hari ketika antreannya sepi sampai radio terdengar jelas. Apa benar satu hari kerja lebih sepi? Kalau ya, kenapa, dan apa yang harus kita lakukan?',
      task: 'Cari hari yang sepi: isi bagian kosong, jalankan tiap query, dan jawab dari hasilnya. Jawaban terakhir adalah rekomendasi.',
      success: 'Hm. Pertanyaan, metrik, pola, tindakan. Itulah seluruh pekerjaannya. Sampai Senin.',
    },
    steps: [
      {
        starter: `SELECT EXTRACT(DOW FROM sold_at) AS weekday,\n  COUNT(DISTINCT order_id) AS orders\nFROM sales\nWHERE sold_at < '2026-11-01'\nGROUP BY ___\nORDER BY orders;`,
        fill: 'weekday',
        solution: `SELECT EXTRACT(DOW FROM sold_at) AS weekday, COUNT(DISTINCT order_id) AS orders FROM sales WHERE sold_at < '2026-11-01' GROUP BY weekday ORDER BY orders;`,
        answer: {
          kind: 'number',
          sql: `SELECT EXTRACT(DOW FROM sold_at) FROM sales WHERE sold_at < '2026-11-01' GROUP BY 1 ORDER BY COUNT(DISTINCT order_id) LIMIT 1;`,
        },
        en: {
          prompt: 'Which day of the week has the fewest orders? (0 = Sunday, 1 = Monday … 6 = Saturday.)',
          goal: 'EXTRACT(DOW …) turns a date into a weekday number. Group the orders by it, count the different order_id values, and sort from the smallest.',
          read: 'The first row has the fewest orders. Type its weekday number.',
          hints: ['The blank is what to group by: the weekday column made above.', 'Replace ___ with weekday and press Run: the first row is the answer.'],
          reply: 'Hm. One day stands out. Why?',
        },
        id: {
          prompt: 'Hari apa dalam seminggu yang pesanannya paling sedikit? (0 = Minggu, 1 = Senin … 6 = Sabtu.)',
          goal: 'EXTRACT(DOW …) mengubah tanggal menjadi nomor hari. Kelompokkan pesanan menurut itu, hitung order_id yang berbeda, dan urutkan dari yang terkecil.',
          read: 'Baris pertama punya pesanan paling sedikit. Ketik nomor harinya.',
          hints: ['Bagian kosong itu kolom untuk mengelompokkan: kolom weekday yang dibuat di atas.', 'Ganti ___ dengan weekday lalu tekan Jalankan: baris pertama adalah jawabannya.'],
          reply: 'Hm. Satu hari menonjol. Kenapa?',
        },
      },
      {
        starter: `SELECT EXTRACT(DOW FROM sold_at) AS weekday,\n  COUNT(DISTINCT order_id) AS orders,\n  ROUND(SUM(quantity * unit_price) / COUNT(DISTINCT ___), 2) AS avg_order\nFROM sales\nWHERE sold_at < '2026-11-01'\nGROUP BY weekday\nORDER BY weekday;`,
        fill: 'order_id',
        solution: `SELECT EXTRACT(DOW FROM sold_at) AS weekday, COUNT(DISTINCT order_id) AS orders, ROUND(SUM(quantity * unit_price) / COUNT(DISTINCT order_id), 2) AS avg_order FROM sales WHERE sold_at < '2026-11-01' GROUP BY weekday ORDER BY weekday;`,
        answer: {
          kind: 'choice',
          choices: [
            'Fewer orders, but each one is about the usual size',
            'Smaller orders: the same people spend less',
            'Both fewer and smaller orders',
          ],
          choicesId: [
            'Pesanan lebih sedikit, tapi tiap pesanan ukurannya biasa saja',
            'Pesanan lebih kecil: orang yang sama belanja lebih sedikit',
            'Pesanan lebih sedikit sekaligus lebih kecil',
          ],
          correct: 0,
        },
        en: {
          prompt: 'Why is that day quiet?',
          goal: 'Revenue = orders × average order value. Add the average order value (revenue per order) to each weekday and compare the quiet day with the rest: is it the number of orders or their size?',
          read: 'Look at avg_order for every weekday: is the quiet day different? Then look at orders.',
          hints: [
            'The blank is what to count so each order counts once: the order number column.',
            'Replace ___ with order_id (no quotes) and press Run.',
          ],
          reply: 'Hm. So the question is how to bring people in.',
        },
        id: {
          prompt: 'Kenapa hari itu sepi?',
          goal: 'Pendapatan = jumlah pesanan × rata-rata nilai pesanan. Tambahkan rata-rata nilai pesanan (pendapatan per pesanan) di tiap hari kerja dan bandingkan hari sepi dengan yang lain: apakah soal jumlah pesanan atau ukurannya?',
          read: 'Lihat avg_order di setiap hari: apakah hari sepi berbeda? Lalu lihat orders.',
          hints: [
            'Bagian kosong itu yang dihitung agar tiap pesanan terhitung sekali: kolom nomor pesanan.',
            'Ganti ___ dengan order_id (tanpa tanda kutip) lalu tekan Jalankan.',
          ],
          reply: 'Hm. Jadi pertanyaannya: bagaimana menarik orang datang.',
        },
      },
      {
        starter: `SELECT EXTRACT(HOUR FROM sold_at) AS hour,\n  COUNT(DISTINCT order_id) AS orders\nFROM sales\nWHERE EXTRACT(DOW FROM sold_at) = ___\n  AND sold_at < '2026-11-01'\nGROUP BY hour\nORDER BY hour;`,
        fill: '2',
        solution: `SELECT EXTRACT(HOUR FROM sold_at) AS hour, COUNT(DISTINCT order_id) AS orders FROM sales WHERE EXTRACT(DOW FROM sold_at) = 2 AND sold_at < '2026-11-01' GROUP BY hour ORDER BY hour;`,
        answer: {
          kind: 'choice',
          choices: [
            'Run an offer on the quiet day: it is quiet at every hour',
            'Raise prices on the quiet day to make up the difference',
            'Stop opening on the quiet day',
          ],
          choicesId: [
            'Buat penawaran di hari sepi: sepi di setiap jam',
            'Naikkan harga di hari sepi untuk menutup selisihnya',
            'Berhenti buka di hari sepi',
          ],
          correct: 0,
        },
        en: {
          prompt: 'What should we do about the quiet day?',
          goal: 'Look inside the quiet day, hour by hour. If only one hour were weak, an offer there would be enough. If every hour is thin, the whole day needs a reason to come.',
          read: 'Is there one weak hour, or are all the hours thin?',
          hints: ['The blank is the weekday number you found in the first step.', 'Replace ___ with that number (no quotes) and press Run.'],
          reply: '',
        },
        id: {
          prompt: 'Apa yang sebaiknya kita lakukan soal hari sepi itu?',
          goal: 'Lihat ke dalam hari sepi itu, jam demi jam. Kalau hanya satu jam yang lemah, penawaran di jam itu cukup. Kalau semua jam tipis, seluruh hari butuh alasan untuk datang.',
          read: 'Apakah hanya ada satu jam yang lemah, atau semua jam tipis?',
          hints: ['Bagian kosong itu nomor hari yang kamu temukan di langkah pertama.', 'Ganti ___ dengan nomor itu (tanpa tanda kutip) lalu tekan Jalankan.'],
          reply: '',
        },
      },
    ],
  },
  // ───────────── Week 5 · Where Did the Regulars Go? ─────────────
  {
    id: 'regulars-gone',
    week: 5,
    weekly: true,
    recommends: true,
    en: {
      title: 'Where Did the Regulars Go?',
      ask: 'Some of our best regulars stopped coming. People who came every week. I want to know who they are, what they used to buy, and how we win them back.',
      task: "Find the regulars who left: fill the blank, run each query, and answer from the result. The last answer is a recommendation.",
      success: 'Hm. A reason, not a guess. Send them a card. Good work this week.',
    },
    idText: {
      title: 'Ke Mana Para Langganan Pergi?',
      ask: 'Beberapa langganan terbaik kita berhenti datang. Orang yang dulu datang tiap minggu. Saya mau tahu siapa mereka, apa yang dulu mereka beli, dan bagaimana menarik mereka kembali.',
      task: 'Cari langganan yang pergi: isi bagian kosong, jalankan tiap query, dan jawab dari hasilnya. Jawaban terakhir adalah rekomendasi.',
      success: 'Hm. Alasan, bukan tebakan. Kirimi mereka kartu. Kerja bagus minggu ini.',
    },
    steps: [
      {
        starter:
          'SELECT c.name, COUNT(DISTINCT s.order_id) AS orders, MAX(s.sold_at) AS last_visit\nFROM customers c\nJOIN sales s ON s.customer_id = c.customer_id\nGROUP BY c.name\nHAVING COUNT(DISTINCT s.order_id) >= 10\n   AND MAX(s.sold_at) < ___;',
        fill: "'2026-09-01'",
        solution:
          "SELECT c.name, COUNT(DISTINCT s.order_id) AS orders, MAX(s.sold_at) AS last_visit FROM customers c JOIN sales s ON s.customer_id = c.customer_id GROUP BY c.name HAVING COUNT(DISTINCT s.order_id) >= 10 AND MAX(s.sold_at) < '2026-09-01';",
        answer: {
          kind: 'number',
          sql: "SELECT COUNT(*) FROM (SELECT c.name FROM customers c JOIN sales s ON s.customer_id = c.customer_id GROUP BY c.name HAVING COUNT(DISTINCT s.order_id) >= 10 AND MAX(s.sold_at) < '2026-09-01') t;",
        },
        en: {
          prompt: 'How many regulars (10 or more orders) have not been back since the end of August?',
          goal: 'Join customers with their sales, group by customer, and keep with HAVING the ones with 10+ orders whose last visit (MAX of sold_at) is before 1 September.',
          read: 'Count the rows in the result: each one is a regular who left.',
          hints: ['The blank is the date to compare with: a text in single quotes.', "Replace ___ with '2026-09-01' (quotes included) and press Run."],
          reply: 'Hm. That is a lot of loyalty gone. What did they like?',
        },
        id: {
          prompt: 'Berapa langganan (10 pesanan atau lebih) yang belum kembali sejak akhir Agustus?',
          goal: 'Gabungkan customers dengan penjualannya, kelompokkan per pelanggan, dan pertahankan dengan HAVING yang punya 10+ pesanan dan kunjungan terakhirnya (MAX sold_at) sebelum 1 September.',
          read: 'Hitung baris di hasil: tiap baris adalah langganan yang pergi.',
          hints: ['Bagian kosong itu tanggal pembanding: teks dalam tanda kutip satu.', "Ganti ___ dengan '2026-09-01' (pakai tanda kutip) lalu tekan Jalankan."],
          reply: 'Hm. Banyak kesetiaan yang hilang. Mereka suka apa?',
        },
      },
      {
        starter:
          "SELECT m.name, SUM(s.quantity) AS units\nFROM sales s\nJOIN customers c ON c.customer_id = s.customer_id\nJOIN menu_items m ON m.item_id = s.item_id\nWHERE c.name IN ('Grace Hughes', 'Chloe Diaz', 'Lily Lopez', 'Noah Owens')\nGROUP BY m.name\nORDER BY units DESC\nLIMIT ___;",
        fill: '3',
        solution:
          "SELECT m.name, SUM(s.quantity) AS units FROM sales s JOIN customers c ON c.customer_id = s.customer_id JOIN menu_items m ON m.item_id = s.item_id WHERE c.name IN ('Grace Hughes', 'Chloe Diaz', 'Lily Lopez', 'Noah Owens') GROUP BY m.name ORDER BY units DESC LIMIT 3;",
        answer: {
          kind: 'choice-sql',
          choicesSql:
            "SELECT name FROM (SELECT m.name, SUM(s.quantity) AS units FROM sales s JOIN customers c ON c.customer_id = s.customer_id JOIN menu_items m ON m.item_id = s.item_id WHERE c.name IN ('Grace Hughes', 'Chloe Diaz', 'Lily Lopez', 'Noah Owens') GROUP BY m.name ORDER BY units DESC LIMIT 3) t ORDER BY name;",
          correctSql:
            "SELECT m.name FROM sales s JOIN customers c ON c.customer_id = s.customer_id JOIN menu_items m ON m.item_id = s.item_id WHERE c.name IN ('Grace Hughes', 'Chloe Diaz', 'Lily Lopez', 'Noah Owens') GROUP BY m.name ORDER BY SUM(s.quantity) DESC LIMIT 1;",
        },
        en: {
          prompt: 'What did these four order most?',
          goal: 'Join sales with customers and menu_items, keep the four regulars who left, add up the units per item and sort from the biggest.',
          read: 'The first row is what they bought most. Pick that item.',
          hints: ['The blank is how many items to keep: the top three is enough.', 'Replace ___ with 3 and press Run: the first row is the answer.'],
          reply: 'Hm. Hold on to that item. Now: what do we do?',
        },
        id: {
          prompt: 'Apa yang paling banyak dipesan keempat orang ini?',
          goal: 'Gabungkan sales dengan customers dan menu_items, pertahankan empat langganan yang pergi, jumlahkan unit per item dan urutkan dari yang terbesar.',
          read: 'Baris pertama adalah yang paling banyak mereka beli. Pilih item itu.',
          hints: ['Bagian kosong itu jumlah item yang disimpan: tiga teratas cukup.', 'Ganti ___ dengan 3 lalu tekan Jalankan: baris pertama adalah jawabannya.'],
          reply: 'Hm. Ingat item itu. Sekarang: apa yang kita lakukan?',
        },
      },
      {
        starter: "SELECT name, is_available\nFROM menu_items\nWHERE name LIKE ___;",
        fill: "'Grandma%'",
        solution: "SELECT name, is_available FROM menu_items WHERE name LIKE 'Grandma%';",
        answer: {
          kind: 'choice',
          choices: [
            "Bring back Grandma's Secret Cake, even as a weekend special",
            'Send them a discount on lattes',
            'Nothing: regulars always drift away in the end',
          ],
          choicesId: [
            "Hadirkan lagi Grandma's Secret Cake, walau hanya spesial akhir pekan",
            'Kirimi mereka diskon latte',
            'Tidak ada: langganan memang selalu menghilang pada akhirnya',
          ],
          correct: 0,
        },
        en: {
          prompt: 'What is the best way to win them back?',
          goal: "Check what happened to the item they loved. LIKE with % matches any ending, so 'Grandma%' finds every item whose name starts with Grandma.",
          read: 'The cake is marked not available (FALSE). They left when it did.',
          hints: ["The blank is the pattern: text in single quotes, with % for \"anything after\".", "Replace ___ with 'Grandma%' (quotes included) and press Run."],
          reply: '',
        },
        id: {
          prompt: 'Apa cara terbaik untuk menarik mereka kembali?',
          goal: "Cek apa yang terjadi pada item yang mereka sukai. LIKE dengan % cocok dengan akhiran apa pun, jadi 'Grandma%' menemukan semua item yang namanya diawali Grandma.",
          read: 'Kuenya ditandai tidak tersedia (FALSE). Mereka pergi bersamaan dengan itu.',
          hints: ["Bagian kosong itu polanya: teks dalam tanda kutip satu, dengan % untuk \"apa saja sesudahnya\".", "Ganti ___ dengan 'Grandma%' (pakai tanda kutip) lalu tekan Jalankan."],
          reply: '',
        },
      },
    ],
  },
  // ───────────── Week 6 · The Analysis Case ─────────────
  {
    id: 'october-dropped',
    week: 6,
    weekly: true,
    recommends: true,
    en: {
      title: 'October Sales Dropped',
      ask: 'Head office sent me a number I do not like: October is well below September. Find out how big the drop is, what fell, when, and why. Then tell me what we do. Five questions. Take the whole day if you must.',
      task: 'The Analysis Case: five questions that follow the analyst\'s steps. Fill the blank, run each query, and answer from the result. The last answer is a recommendation.',
      success:
        'The milk. A supplier that saves us 25 cents a litre cost us a fifth of our sales. I will call Meadow Dairy myself. Hm. You did what an analyst does: question, metric, pattern, cause, action. Good work.',
    },
    idText: {
      title: 'Penjualan Oktober Turun',
      ask: 'Kantor pusat mengirim angka yang tidak saya suka: Oktober jauh di bawah September. Cari tahu seberapa besar turunnya, apa yang turun, kapan, dan kenapa. Lalu bilang apa yang kita lakukan. Lima pertanyaan. Pakai seharian kalau perlu.',
      task: 'Kasus Analisis: lima pertanyaan yang mengikuti langkah seorang analis. Isi bagian kosong, jalankan tiap query, dan jawab dari hasilnya. Jawaban terakhir adalah rekomendasi.',
      success:
        'Susunya. Pemasok yang menghemat 25 sen per liter malah membuat kita kehilangan seperlima penjualan. Saya sendiri yang akan menelepon Meadow Dairy. Hm. Kamu melakukan apa yang dilakukan seorang analis: pertanyaan, metrik, pola, penyebab, tindakan. Kerja bagus.',
    },
    steps: [
      {
        starter:
          "SELECT DATE_TRUNC('month', sold_at) AS month,\n       SUM(quantity * unit_price) AS revenue\nFROM sales\nWHERE sold_at >= '2026-09-01' AND sold_at < '2026-11-01'\nGROUP BY ___\nORDER BY month;",
        fill: 'month',
        solution:
          "SELECT DATE_TRUNC('month', sold_at) AS month, SUM(quantity * unit_price) AS revenue FROM sales WHERE sold_at >= '2026-09-01' AND sold_at < '2026-11-01' GROUP BY month ORDER BY month;",
        answer: {
          kind: 'number',
          sql: "SELECT ROUND(100.0 * (SUM(CASE WHEN sold_at < '2026-10-01' THEN quantity * unit_price ELSE 0 END) - SUM(CASE WHEN sold_at >= '2026-10-01' THEN quantity * unit_price ELSE 0 END)) / SUM(CASE WHEN sold_at < '2026-10-01' THEN quantity * unit_price ELSE 0 END), 2) FROM sales WHERE sold_at >= '2026-09-01' AND sold_at < '2026-11-01';",
          tolerance: 0.5,
        },
        en: {
          prompt: 'By what percentage did revenue fall from September to October? (Just the number, without the % sign.)',
          goal: 'Step one is the business question: how big is the problem? Total revenue per month, then the percentage change: (September − October) ÷ September × 100.',
          read: 'Two rows: September and October. Work out the drop by hand: (September − October) ÷ September × 100.',
          hints: [
            'The blank is the column to group by: the month you just made with DATE_TRUNC, which has the alias month.',
            'Replace ___ with month and press Run. Then take the two revenue numbers and work out the percentage.',
          ],
          reply: 'Hm. That is a real drop. What fell?',
        },
        id: {
          prompt: 'Berapa persen pendapatan turun dari September ke Oktober? (Angkanya saja, tanpa tanda %.)',
          goal: 'Langkah satu adalah pertanyaan bisnisnya: seberapa besar masalahnya? Total pendapatan per bulan, lalu perubahan persennya: (September − Oktober) ÷ September × 100.',
          read: 'Dua baris: September dan Oktober. Hitung turunnya sendiri: (September − Oktober) ÷ September × 100.',
          hints: [
            'Bagian kosong itu kolom untuk mengelompokkan: bulan yang baru kamu buat dengan DATE_TRUNC, aliasnya month.',
            'Ganti ___ dengan month lalu tekan Jalankan. Lalu ambil dua angka pendapatan dan hitung persentasenya.',
          ],
          reply: 'Hm. Itu penurunan yang nyata. Apa yang turun?',
        },
      },
      {
        starter:
          "SELECT m.name,\n       DATE_TRUNC('month', s.sold_at) AS month,\n       SUM(s.quantity * s.unit_price) AS revenue\nFROM sales s\nJOIN menu_items m ON m.item_id = s.item_id\nWHERE m.name IN ('Latte', 'Cappuccino', 'Flat White')\n  AND s.sold_at >= '2026-09-01' AND s.sold_at < '2026-11-01'\nGROUP BY m.name, ___\nORDER BY m.name, month;",
        fill: 'month',
        solution:
          "SELECT m.name, DATE_TRUNC('month', s.sold_at) AS month, SUM(s.quantity * s.unit_price) AS revenue FROM sales s JOIN menu_items m ON m.item_id = s.item_id WHERE m.name IN ('Latte', 'Cappuccino', 'Flat White') AND s.sold_at >= '2026-09-01' AND s.sold_at < '2026-11-01' GROUP BY m.name, month ORDER BY m.name, month;",
        answer: {
          kind: 'choice-sql',
          choicesSql: "SELECT name FROM menu_items WHERE name IN ('Latte', 'Cappuccino', 'Flat White') ORDER BY name;",
          correctSql: "SELECT name FROM menu_items WHERE name = 'Latte';",
        },
        en: {
          prompt: 'Three milk drinks look worst. Which of them lost the most revenue?',
          goal: 'The metric by item: join sales to menu_items for the names, and group by item and month so you can compare September with October for each.',
          read: 'For each drink compare its September row with its October row: the biggest gap is the one that lost the most.',
          hints: [
            'The blank is the second thing to group by, next to the name: the month.',
            'Replace ___ with month and press Run. Then subtract each drink\'s October revenue from its September revenue.',
          ],
          reply: 'Hm. All milk drinks. Interesting. When did it happen?',
        },
        id: {
          prompt: 'Tiga minuman susu tampak paling parah. Mana yang paling banyak kehilangan pendapatan?',
          goal: 'Metrik per item: gabungkan sales dengan menu_items untuk nama, dan kelompokkan per item dan bulan agar kamu bisa membandingkan September dengan Oktober untuk tiap item.',
          read: 'Untuk tiap minuman, bandingkan baris September dengan baris Oktobernya: selisih terbesar adalah yang paling banyak kehilangan.',
          hints: [
            'Bagian kosong itu hal kedua untuk dikelompokkan, di samping nama: bulannya.',
            'Ganti ___ dengan month lalu tekan Jalankan. Lalu kurangi pendapatan Oktober tiap minuman dari pendapatan Septembernya.',
          ],
          reply: 'Hm. Semuanya minuman susu. Menarik. Kapan itu terjadi?',
        },
      },
      {
        starter:
          "SELECT EXTRACT(HOUR FROM sold_at) AS hour,\n       DATE_TRUNC('month', sold_at) AS month,\n       SUM(quantity * unit_price) AS revenue\nFROM sales\nWHERE sold_at >= '2026-09-01' AND sold_at < '2026-11-01'\nGROUP BY hour, ___\nORDER BY hour, month;",
        fill: 'month',
        solution:
          "SELECT EXTRACT(HOUR FROM sold_at) AS hour, DATE_TRUNC('month', sold_at) AS month, SUM(quantity * unit_price) AS revenue FROM sales WHERE sold_at >= '2026-09-01' AND sold_at < '2026-11-01' GROUP BY hour, month ORDER BY hour, month;",
        answer: {
          kind: 'choice',
          choices: ['In the morning, before noon', 'Around lunch, 12:00 to 14:00', 'In the late afternoon'],
          choicesId: ['Di pagi hari, sebelum siang', 'Sekitar makan siang, 12:00 sampai 14:00', 'Di sore hari'],
          correct: 0,
        },
        en: {
          prompt: 'When during the day did the sales fall?',
          goal: 'Step three is the pattern: when. Group by the hour of the day and by month, then compare September with October hour by hour.',
          read: 'Hours 7 to 11 fall hard from September to October; around noon October is even higher. The drop sits in the morning.',
          hints: [
            'The blank is the second group, the one that tells September from October: the month.',
            'Replace ___ with month and press Run. Compare the two rows of each hour.',
          ],
          reply: 'Hm. Mornings. So something is wrong with our mornings. Why?',
        },
        id: {
          prompt: 'Kapan dalam sehari penjualan turun?',
          goal: 'Langkah tiga adalah pola: kapan. Kelompokkan per jam dalam sehari dan per bulan, lalu bandingkan September dengan Oktober jam demi jam.',
          read: 'Jam 7 sampai 11 turun tajam dari September ke Oktober; sekitar siang Oktober malah lebih tinggi. Penurunannya ada di pagi hari.',
          hints: [
            'Bagian kosong itu kelompok kedua, yang membedakan September dari Oktober: bulannya.',
            'Ganti ___ dengan month lalu tekan Jalankan. Bandingkan dua baris tiap jam.',
          ],
          reply: 'Hm. Pagi hari. Jadi ada yang salah dengan pagi kita. Kenapa?',
        },
      },
      {
        starter:
          "SELECT s.name,\n       s.delivery_time,\n       COUNT(i.sold_out_at) AS days_ran_out\nFROM inventory i\nJOIN suppliers s ON s.supplier_id = i.supplier_id\nWHERE i.ingredient = 'milk'\nGROUP BY s.name, ___\nORDER BY s.delivery_time;",
        fill: 's.delivery_time',
        solution:
          "SELECT s.name, s.delivery_time, COUNT(i.sold_out_at) AS days_ran_out FROM inventory i JOIN suppliers s ON s.supplier_id = i.supplier_id WHERE i.ingredient = 'milk' GROUP BY s.name, s.delivery_time ORDER BY s.delivery_time;",
        answer: {
          kind: 'choice',
          choices: [
            'Customers got tired of coffee',
            'The new milk supplier delivers at noon, so the milk runs out in the mornings',
            'We raised our prices in October',
          ],
          choicesId: [
            'Pelanggan bosan dengan kopi',
            'Pemasok susu yang baru mengantar jam 12 siang, jadi susu habis di pagi hari',
            'Kita menaikkan harga di bulan Oktober',
          ],
          correct: 1,
        },
        en: {
          prompt: 'What is the most likely cause?',
          goal: 'Look in the storeroom: inventory says on which days the milk ran out, suppliers says who delivers and when. Join them and count the days with a sold_out_at for each supplier.',
          read: 'One supplier has 0 days out of milk; the other, which delivers at noon, has 24. The mornings run dry before the delivery arrives.',
          hints: [
            'The blank is the other column in the SELECT that is not a total: when the supplier delivers.',
            'Replace ___ with s.delivery_time and press Run.',
          ],
          reply: 'Hm. So it is the delivery. One last question: what do we do?',
        },
        id: {
          prompt: 'Apa penyebab yang paling mungkin?',
          goal: 'Lihat gudang: inventory mencatat di hari mana susu habis, suppliers mencatat siapa yang mengantar dan kapan. Gabungkan keduanya dan hitung hari yang punya sold_out_at untuk tiap pemasok.',
          read: 'Satu pemasok punya 0 hari kehabisan susu; yang lain, yang mengantar jam 12 siang, punya 24. Pagi hari kering sebelum pengiriman tiba.',
          hints: [
            'Bagian kosong itu kolom lain di SELECT yang bukan total: kapan pemasok mengantar.',
            'Ganti ___ dengan s.delivery_time lalu tekan Jalankan.',
          ],
          reply: 'Hm. Jadi ini soal pengiriman. Satu pertanyaan terakhir: apa yang kita lakukan?',
        },
      },
      {
        starter:
          "SELECT name, delivery_time, price_per_unit, since\nFROM suppliers\nWHERE product = 'milk'\nORDER BY ___;",
        fill: 'since',
        solution: "SELECT name, delivery_time, price_per_unit, since FROM suppliers WHERE product = 'milk' ORDER BY since;",
        answer: {
          kind: 'choice',
          choices: [
            'Go back to the early supplier, even at 25 cents more a litre',
            'Keep the cheaper supplier and sell fewer milk drinks',
            'Raise the price of every drink',
          ],
          choicesId: [
            'Kembali ke pemasok pagi, walau lebih mahal 25 sen per liter',
            'Tetap pakai pemasok yang lebih murah dan jual lebih sedikit minuman susu',
            'Naikkan harga setiap minuman',
          ],
          correct: 0,
        },
        en: {
          prompt: 'So what should we do?',
          goal: 'Step five is the action, backed by evidence. Compare the two milk suppliers: what the change saves per litre, against what it cost us in sales.',
          read: 'The new supplier is 25 cents a litre cheaper, but it cost about 1,900 in monthly sales. Fix the cause, not the symptom.',
          hints: [
            'The blank is the column to sort the suppliers by, so the old one comes first: since when they deliver.',
            'Replace ___ with since and press Run.',
          ],
          reply: '',
        },
        id: {
          prompt: 'Jadi, apa yang sebaiknya kita lakukan?',
          goal: 'Langkah lima adalah tindakan, didukung bukti. Bandingkan dua pemasok susu: apa yang dihemat per liter, melawan apa yang hilang dari penjualan kita.',
          read: 'Pemasok baru lebih murah 25 sen per liter, tapi membuat kita kehilangan sekitar 1.900 penjualan per bulan. Perbaiki penyebabnya, bukan gejalanya.',
          hints: [
            'Bagian kosong itu kolom untuk mengurutkan pemasok agar yang lama muncul dulu: sejak kapan mereka mengantar.',
            'Ganti ___ dengan since lalu tekan Jalankan.',
          ],
          reply: '',
        },
      },
    ],
  },
];
