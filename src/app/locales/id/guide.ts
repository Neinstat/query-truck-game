import type { GuidePage } from '../../guide';

/** Indonesian guide (same pages and items as the English one; table names stay in English). */
export const GUIDE_ID: readonly GuidePage[] = [
  {
    id: 'job',
    icon: '🚚',
    title: 'Tugasmu',
    paragraphs: [
      'Kamu karyawan baru di Rolling Roast, truck kopi yang parkir di jalan penuh neon di Neo Valley, kota raksasa yang sering hujan di tahun 2077. Buka dari jam 10.00 sampai 17.00.',
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
    paragraphs: ['Cukup gerakkan mouse untuk melihat sekeliling — tidak perlu klik dulu. Esc melepas mouse dan menjeda permainan.'],
    items: [
      { icon: '⌨️', name: 'W A S D / panah', text: 'Berjalan di dalam truck.' },
      { icon: '🖱', name: 'Mouse', text: 'Melihat sekeliling. Arahkan titik di tengah layar ke sebuah benda.' },
      { icon: '👆', name: 'E atau klik', text: 'Memakai benda yang ditunjuk titik itu: tablet, kulkas, pintu…' },
      { icon: '🔍', name: 'L', text: 'Menyalakan atau mematikan Data Lens.' },
      { icon: '⏸', name: 'Esc', text: 'Menjeda permainan dan membuka menu (Data Lens, bahasa, panduan ini…). Enter untuk lanjut.' },
    ],
  },
  {
    id: 'truck',
    icon: '🧭',
    title: 'Isi truck',
    paragraphs: [
      'Truck ini tempat kerjamu. Setiap benda di bawah menyimpan satu bagian data perusahaan, dan hanya bisa melihat tabelnya sendiri — seperti perusahaan sungguhan, di mana data penjualan, stok, dan resep tersimpan di sistem yang berbeda.',
      'Saat pelanggan memesan, gelembung percakapannya memberi tahu di mana menjawab ("Jawab di kulkas"). Jalan ke sana, bidik, lalu tekan E. Ikuti tur untuk melihat setiap benda.',
    ],
    items: [
      {
        icon: '📱',
        object: 'tablet',
        name: 'Tablet — mesin kasir',
        where: 'Meja depan, di kanan jendela layanan',
        tables: ['menu_items', 'sales', 'customers'],
        text: 'Tempat kamu menjawab sebagian besar pelanggan. Tablet melihat menu (nama, kategori, harga, dan apakah menu itu tersedia hari ini), semua penjualan yang pernah dibuat truck, dan pelanggan yang punya kartu member.',
        example: '"Ada apa saja di bawah $3?" · "Kopi mana yang bisa dipesan hari ini?"',
      },
      {
        icon: '🧊',
        object: 'fridge',
        name: 'Kulkas & rak stok — catatan gudang',
        where: 'Ujung kiri truck',
        tables: ['inventory', 'suppliers'],
        text: 'Apa yang dikirim setiap hari, berapa banyak, dan jam berapa habisnya (inventory); serta perusahaan mana yang memasok setiap barang, kapan mengantarnya, dan sejak kapan (suppliers). Pertanyaan soal stok dan pengiriman dijawab di sini.',
        example: '"Siapa yang mengantar susu sekarang, dan jam berapa?"',
      },
      {
        icon: '📚',
        object: 'recipe-shelf',
        name: 'Binder resep — isi setiap menu',
        where: 'Dinding belakang, sebelah kanan',
        tables: ['recipes', 'menu_items'],
        text: 'Satu baris untuk setiap bahan dari setiap menu, beserta jumlah dan satuannya, di samping daftar menu. Pertanyaan soal bahan dijawab di sini.',
        example: '"Berapa banyak susu di setiap minumanmu?"',
      },
      {
        icon: '📋',
        object: 'menu-board',
        name: 'Papan menu — latihan bebas',
        where: 'Dinding belakang, di tengah',
        tables: ['menu_items'],
        text: 'Menu yang tergantung di dinding. Jalankan query apa saja pada menu_items untuk menjelajah dan berlatih. Tidak ada yang dinilai dan tidak ada pelanggan yang menunggu.',
      },
      {
        icon: '🚪',
        object: 'back-door',
        name: 'Pintu belakang — The Manager',
        where: 'Ujung kanan truck',
        text: 'Sekali sehari, sekitar jam 13.30, pintunya bergetar: The Manager mengetuk. Atasanmu (berjas, selalu terburu-buru) meminta angka: jumlah pesanan hari ini, pendapatan hari ini, channel penjualan terbaik bulan lalu. Buka pintunya, selidiki dengan query apa saja, sematkan 📌 hasil yang membuktikan setiap jawaban, lalu jawab. Inilah bagian analis dari pekerjaanmu: menjawab pertanyaan bisnis dengan data.',
        example: '"Berapa pendapatan kita hari ini?"',
      },
      {
        icon: '📖',
        object: 'guide-book',
        name: 'Buku panduan — panduan ini',
        where: 'Meja belakang, di bawah papan menu',
        text: 'Bidik lalu tekan E kapan saja kamu ingin membaca cara bermain lagi.',
      },
    ],
  },
  {
    id: 'lens',
    icon: '🔍',
    title: 'Data Lens',
    paragraphs: [
      'Tekan L (atau tombol 🔍) dan truck berubah menjadi cetak biru: setiap benda menampilkan kartu berisi tabelnya, berapa barisnya, dan beberapa contoh baris.',
      'Tabel yang dibutuhkan pesanan saat ini diberi bintang ★, jadi lensa ini juga menunjukkan ke mana harus mencari.',
      'Bidik sebuah benda: kartunya menyala. Tekan E untuk membuka tabelnya dan melihat isinya. Tekan L lagi untuk kembali.',
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
