import type { CoachStep } from '../../coach';

export const COACH_ID: readonly CoachStep[] = [
  { id: 'goal', icon: '🎯', title: 'Tujuanmu', text: 'Layani semua pelanggan hari ini. Tiap pelanggan bertanya; jawabannya adalah pesanan mereka, dan kamu mencarinya dengan SQL.', wait: 'button' },
  { id: 'customer', icon: '🧑', title: 'Pelanggan pertama', text: 'Tunggu di jendela pelayanan. Pelanggan datang dan balon bicara menunjukkan apa yang mereka mau.', wait: 'customer' },
  { id: 'aim', icon: '👀', title: 'Bidik tempat yang tepat', text: 'Balon bicara menyebut tempat menjawab, misalnya "di kulkas". Jalan ke sana, arahkan titik ke benda itu dan tekan E.', wait: 'aim' },
  { id: 'console', icon: '⌨️', title: 'Buka konsolnya', text: 'Tekan E (atau klik) untuk membuka konsol dan menulis query. Jam berhenti saat kamu mengetik, jadi santai saja.', wait: 'console' },
  { id: 'lens', icon: '🔍', title: 'Bingung isi tabelnya?', text: 'Tekan L untuk Data Lens: tiap benda menampilkan tabel dan beberapa barisnya. Tekan L lagi untuk menutup.', wait: 'lens' },
  { id: 'rewards', icon: '⭐', title: 'Apa yang kamu dapat', text: 'Jawaban benar memberi XP (levelmu naik) dan koin. Belanjakan koin di telepon meja (toko truk), lihat hari lalu di kalender dinding dan badge di papan pin. Tempat baru tiap hari, jadi tidak membosankan.', wait: 'button' },
];
