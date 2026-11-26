import type { CoachStepId, CoachText } from '../../coach';

/** Indonesian first-day coach (same steps and points as the English one). */
export const COACH_ID: Record<CoachStepId, CoachText> = {
  goal: {
    icon: '🎯',
    title: 'Tujuanmu',
    text: 'Layani pelanggan yang antre di jendela. Masing-masing bertanya soal menu, stok, atau resep: cari jawabannya dengan SQL, dan jawaban itu adalah pesanan mereka. Tunggu pelanggan pertama maju.',
  },
  aim: {
    icon: '👉',
    title: 'Pelanggan pertamamu',
    text: 'Baca pesanan di gelembung ucapan. Di situ tertulis tempat menjawabnya. Jalan ke sana, arahkan titik di tengah layar ke benda itu (namanya muncul), lalu tekan E.',
  },
  lens: {
    icon: '🔍',
    title: 'Bingung tabel mana?',
    text: 'Tekan L untuk menyalakan Data Lens: tiap benda menampilkan tabelnya dan beberapa barisnya, dan tabel yang dibutuhkan pesanan ini diberi bintang ★. Tekan L lagi untuk kembali.',
  },
  rewards: {
    icon: '⭐',
    title: 'Mantap, pesanan pertama selesai!',
    text: 'Setiap pelanggan membayarmu dengan dua cara, dan keduanya milikmu:',
    points: [
      '⭐ XP menaikkan levelmu dan gelar kariermu (New Hire → Barista → Analyst → Head of Data).',
      '🪙 Koin membeli upgrade truk: bidik telepon di meja belakang lalu tekan E.',
      '📅 Tiap hari ada pelanggan baru dan tempat baru di kota. Kalender di dinding menunjukkan semua hari sampai sekarang.',
    ],
  },
};
