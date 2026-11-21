import type { GuidePage } from '../../guide';

/** Indonesian guide (same pages and items as the English one; table names stay in English). */
export const GUIDE_ID: readonly GuidePage[] = [
  {
    id: 'job',
    icon: '🚚',
    title: 'Tugasmu',
    paragraphs: [
      'Kamu karyawan baru di Rolling Roast, truck kopi yang parkir di taman kota. Buka dari jam 10.00 sampai 17.00.',
      'Pelanggan antre di jendela. Masing-masing bertanya soal menu, stok, atau resep. Kamu mencari jawabannya dengan SQL — dan jawaban itu adalah pesanan mereka.',
      'Kalau hasilmu sudah benar, serahkan pesanannya. Truck mencatat penjualannya di tabel sales, jadi pekerjaanmu sendiri menjadi data.',
      'Jam berhenti selama konsol atau menu ini terbuka: menulis SQL tidak pernah diberi batas waktu.',
      'Pelanggan makin tidak sabar selama menunggu di antrean (😊 → 😐 → 😠). Pelayanan cepat memberi tip lebih besar. Pelanggan yang menunggu terlalu lama akan pergi, dan pertanyaannya kembali di hari lain. Kamu tidak bisa kalah.',
    ],
  },
  {
    id: 'controls',
    icon: '🎮',
    title: 'Kontrol',
    paragraphs: ['Klik layar untuk mulai melihat sekeliling dengan mouse.'],
    items: [
      { icon: '⌨️', name: 'W A S D / panah', text: 'Berjalan di dalam truck.' },
      { icon: '🖱', name: 'Mouse', text: 'Melihat sekeliling. Arahkan titik di tengah layar ke sebuah benda.' },
      { icon: '👆', name: 'E atau klik', text: 'Memakai benda yang ditunjuk titik itu: tablet, kulkas, pintu…' },
      { icon: '🔍', name: 'L', text: 'Menyalakan atau mematikan Data Lens.' },
      { icon: '⏸', name: 'Esc', text: 'Menjeda permainan dan membuka menu ini. Esc lagi untuk lanjut.' },
    ],
  },
  {
    id: 'truck',
    icon: '🧭',
    title: 'Isi truck',
    paragraphs: [
      'Setiap benda di truck hanya bisa melihat tabelnya sendiri — seperti perusahaan sungguhan, di mana data tersimpan di sistem yang berbeda-beda. Gelembung percakapan memberi tahu di mana setiap pesanan dijawab.',
    ],
    items: [
      {
        icon: '📱',
        name: 'Tablet (meja depan)',
        tables: ['sales', 'customers', 'menu_items'],
        text: 'Mesin kasir. Sebagian besar pesanan dijawab di sini: harga, kategori, apa saja yang ada di menu.',
      },
      {
        icon: '🧊',
        name: 'Kulkas & rak stok (ujung kiri)',
        tables: ['inventory', 'suppliers'],
        text: 'Apa yang dikirim, oleh siapa, dan kapan habisnya. Pertanyaan soal stok dan pengiriman dijawab di sini.',
      },
      {
        icon: '📚',
        name: 'Binder resep (dinding belakang)',
        tables: ['recipes', 'menu_items'],
        text: 'Apa saja isi setiap menu, dan berapa banyak. Pertanyaan soal bahan dijawab di sini.',
      },
      {
        icon: '📋',
        name: 'Papan menu (dinding belakang)',
        tables: ['menu_items'],
        text: 'Lihat-lihat menu kapan saja. Query yang kamu jalankan di sini tidak dinilai.',
      },
      {
        icon: '🚪',
        name: 'Pintu belakang (ujung kanan)',
        text: 'The Manager — atasanmu yang berjas — mengetuk sekali sehari (sekitar jam 13.30) dan meminta angka: jumlah pesanan hari ini, pendapatan hari ini, channel terbaik bulan lalu. Selidiki, sematkan 📌 hasil yang membuktikan setiap jawaban, lalu jawab. Dia galak, tapi adil.',
      },
      { icon: '📖', name: 'Buku panduan (meja belakang)', text: 'Panduan ini. Buka kapan saja kamu mau.' },
    ],
  },
  {
    id: 'lens',
    icon: '🔍',
    title: 'Data Lens',
    paragraphs: [
      'Tekan L (atau tombol 🔍) dan truck berubah menjadi cetak biru: setiap benda menampilkan kartu berisi tabelnya, berapa barisnya, dan beberapa contoh baris.',
      'Tabel yang dibutuhkan pesanan saat ini diberi bintang ★, jadi lensa ini juga menunjukkan ke mana harus mencari.',
      'Klik nama tabel di kartu untuk membukanya dan melihat isinya. Tekan L lagi untuk kembali.',
    ],
  },
  {
    id: 'sql',
    icon: '✍️',
    title: 'Menulis SQL',
    paragraphs: [
      'Ide SQL yang baru datang bersama kartu pelajaran. Kamu bisa membukanya lagi dari pesanan mana pun lewat "Lihat materi lagi".',
      'Awalnya kamu mengisi satu kata di query. Setelah kamu menguasai sebuah konsep, kamu menulis seluruh syarat setelah WHERE, lalu nanti seluruh query-nya.',
      'Selalu akhiri query dengan titik koma ;',
      'Buntu? Setiap pesanan punya tiga petunjuk, dari dorongan kecil sampai hampir jawabannya. ⭐⭐⭐ = tanpa petunjuk dan tanpa salah jalan, ⭐⭐ = tanpa petunjuk, ⭐ = benar.',
    ],
  },
  {
    id: 'days',
    icon: '📅',
    title: 'Hari & latihan',
    paragraphs: [
      'Saat tutup, ringkasan menampilkan pesananmu, pendapatan (beserta query yang menghitungnya), tip, dan bintang.',
      'Ringkasan juga menampilkan setiap konsep SQL yang kamu latih. Konsep yang masih salah atau butuh petunjuk kembali besok; yang sudah kamu kuasai kembali lebih lama. Konsep baru datang sedikit demi sedikit.',
      'Lalu buka hari berikutnya: pelanggan baru, pertanyaan baru, dan langit kembali berjalan dari pagi sampai malam.',
    ],
  },
];
