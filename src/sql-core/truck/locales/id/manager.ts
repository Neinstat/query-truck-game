import type { LevelText } from '../../../levels';
import type { ManagerIntro } from '../../manager';

/** Indonesian text for The Manager's case (channel names are data, so they stay English). */
export const MANAGER_CASE_ID: LevelText = {
  title: 'Angka. Sekarang.',
  dialogue: [
    '*Tok tok.*',
    'Query Truck Co., manajer wilayah. Saya tidak suka basa-basi.',
    'Tiga angka sebelum saya pergi: berapa pesanan hari ini, berapa pendapatan hari ini, dan channel terbaik kita bulan lalu.',
    'Satu pertanyaan sekali jalan. Tunjukkan barisnya — saya tidak percaya perasaan.',
  ],
  task: 'Jawab tiga pertanyaan The Manager satu per satu: isi bagian kosong di query, jalankan, lalu ketik angka yang kamu lihat.',
  hints: [
    "Setiap penjualan truck punya channel = 'truck'. Hari ini adalah satu tanggal: bandingkan sold_at::date dengan tanggal itu.",
    'Isi bagian kosong, jalankan query-nya, lalu ketik angka yang kamu lihat.',
    "Isian: 'truck' · tanggal hari ini dalam tanda kutip · '2026-11-01' (sehari setelah Oktober berakhir).",
  ],
  success: 'Hm. Benar. Jangan besar kepala. Besok jam yang sama.',
  questions: [
    {
      prompt: 'Berapa pesanan yang dilayani truck hari ini?',
      guide: {
        goal: 'Hitung pesanan truck hari ini. Setiap barang yang terjual adalah satu baris di sales, dan satu pesanan bisa punya beberapa baris — jadi query-nya menghitung order_id yang berbeda, hanya untuk penjualan truck hari ini.',
        read: 'Hasilnya satu baris dengan satu angka, orders. Angka itulah jawabanmu.',
        hints: [
          "Bagian kosong itu channel mana yang dihitung. Penjualan truck sendiri punya channel = 'truck'.",
          "Teks di SQL ditulis dalam tanda kutip satu: ganti ___ dengan 'truck' (pakai tanda kutip), lalu tekan Jalankan.",
          "Query lengkapnya: SELECT COUNT(DISTINCT order_id) AS orders FROM sales WHERE channel = 'truck' AND sold_at::date = tanggal hari ini;",
        ],
        reply: 'Hm. Oke. Berikutnya: uang.',
      },
    },
    {
      prompt: 'Berapa pendapatan truck hari ini, dalam dolar?',
      guide: {
        goal: 'Pendapatan adalah uang yang masuk: untuk setiap baris, quantity × unit_price, lalu semuanya dijumlahkan dengan SUM. Kali ini bagian kosongnya adalah tanggal hari ini (lihat jam di pojok kiri atas).',
        read: 'Hasilnya satu angka, revenue, dalam dolar. Ketik apa adanya (misalnya 10.25).',
        hints: [
          'sold_at::date mengubah waktu penjualan menjadi tanggalnya saja, supaya bisa dibandingkan dengan hari ini.',
          'Tanggal ditulis seperti teks, dalam tanda kutip satu: ganti ___ dengan tanggal hari ini, misalnya \'2026-11-01\'.',
          "Query lengkapnya: SELECT COALESCE(SUM(quantity * unit_price), 0) AS revenue FROM sales WHERE channel = 'truck' AND sold_at::date = tanggal hari ini;",
        ],
        reply: 'Lumayan. Terakhir — dan ini yang paling penting.',
      },
    },
    {
      prompt: 'Channel mana yang menghasilkan pendapatan terbesar di bulan Oktober?',
      guide: {
        goal: 'Bandingkan channel (dine-in, takeaway, delivery) selama Oktober. GROUP BY channel membuat satu baris per channel, SUM menjumlahkan pendapatan tiap channel, dan ORDER BY revenue DESC menaruh yang terbesar di atas.',
        read: 'Hasilnya satu baris per channel. Baris paling atas yang pendapatannya terbesar: pilih channel itu.',
        hints: [
          'Oktober adalah semua penjualan dari 1 Oktober sampai sebelum 1 November.',
          "Ganti ___ dengan '2026-11-01': sold_at < '2026-11-01' tetap mencakup seluruh 31 Oktober.",
          "Query lengkapnya: SELECT channel, SUM(quantity * unit_price) AS revenue FROM sales WHERE sold_at >= '2026-10-01' AND sold_at < '2026-11-01' GROUP BY channel ORDER BY revenue DESC;",
        ],
        reply: '',
      },
    },
  ],
};

/** Indonesian text for the talk at the back door. */
export const MANAGER_INTRO_ID: ManagerIntro = {
  lines: [
    '*Tok tok.*',
    'Query Truck Co., manajer wilayah. Saya tidak suka basa-basi.',
    'Tiga angka sebelum saya pergi: berapa pesanan hari ini, berapa pendapatan hari ini, dan channel terbaik kita bulan lalu.',
  ],
  replies: [
    { label: 'Siap, sekarang juga.', answer: 'Bagus. Satu pertanyaan sekali jalan. Tunjukkan barisnya — saya tidak percaya perasaan.' },
    {
      label: 'Boleh saya selesaikan pelanggan ini dulu?',
      answer: 'Tidak. Angka dulu. Jam pelangganmu toh sedang berhenti — jam saya tidak.',
    },
    {
      label: 'Channel itu apa?',
      answer: 'Dine-in, takeaway, delivery: dari mana uang masuk. Itu kolom di tabel sales. Lihat sendiri.',
    },
  ],
  open: 'Buka kasusnya 📋',
};

