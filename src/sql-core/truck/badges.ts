/**
 * Badges and the day streak (GAME_DESIGN.md §10, 7.3). Everything is worked out from the day
 * logs, the shop and the easter eggs found, like XP and mastery, so nothing needs a save of its
 * own and a badge can never be lost. A streak counts in-game days and is never punishing:
 * missing a real day changes nothing.
 */
import type { Lang } from '../feedback';
import { CONCEPTS } from './concepts';
import type { DayLog } from './day';
import { EGGS, type EggId } from './eggs';
import { masteryFrom } from './repetition';
import type { ShopState } from './shop';

export type BadgeInput = { past: readonly DayLog[]; shop: ShopState; eggs: readonly EggId[] };

export type Badge = {
  id: string;
  icon: string;
  name: { en: string; id: string };
  /** What to do to earn it. */
  how: { en: string; id: string };
  earned: (input: BadgeInput) => boolean;
};

/** The day the Analysis Case comes (the fifth day of week 6). */
export const ANALYSIS_DAY = 30;

const servedAll = (past: readonly DayLog[]) => past.flatMap((d) => d.served);
const joinedLevel = (past: readonly DayLog[], concept: 'join' | 'left-join') => (masteryFrom(past)[concept]?.level ?? 0) >= 1;

/** Days in a row, counted back from the last finished day, on which at least one order was served. */
export function streak(past: readonly DayLog[]): number {
  let n = 0;
  for (let i = past.length - 1; i >= 0 && past[i].served.length > 0; i--) n++;
  return n;
}

export const BADGES: readonly Badge[] = [
  { id: 'first-order', icon: '☕', name: { en: 'First order', id: 'Pesanan pertama' },
    how: { en: 'Serve your first customer.', id: 'Layani pelanggan pertamamu.' },
    earned: ({ past }) => servedAll(past).length >= 1 },
  { id: 'three-stars', icon: '🌟', name: { en: 'Flawless', id: 'Tanpa cela' },
    how: { en: 'Earn three stars on one order: no hints, no wrong run.', id: 'Dapatkan tiga bintang di satu pesanan: tanpa petunjuk, tanpa salah.' },
    earned: ({ past }) => servedAll(past).some((s) => s.stars === 3) },
  { id: 'perfect-day', icon: '🏆', name: { en: 'Perfect day', id: 'Hari sempurna' },
    how: { en: 'Finish a day with every order served at three stars.', id: 'Selesaikan satu hari dengan semua pesanan terlayani tiga bintang.' },
    earned: ({ past }) => past.some((d) => d.served.length >= 3 && d.missed.length === 0 && d.served.every((s) => s.stars === 3)) },
  { id: 'first-join', icon: '🔗', name: { en: 'First JOIN', id: 'JOIN pertama' },
    how: { en: 'Answer an order that needs a JOIN.', id: 'Jawab pesanan yang butuh JOIN.' },
    earned: ({ past }) => joinedLevel(past, 'join') || joinedLevel(past, 'left-join') },
  { id: 'streak-5', icon: '🔥', name: { en: 'On fire', id: 'Membara' },
    how: { en: 'Serve customers on five days in a row.', id: 'Layani pelanggan lima hari berturut-turut.' },
    earned: ({ past }) => streak(past) >= 5 || past.some((_, i) => streak(past.slice(0, i + 1)) >= 5) },
  { id: 'manager-fan', icon: '👔', name: { en: 'Manager\'s favourite', id: 'Kesayangan Manajer' },
    how: { en: 'Answer the Manager\'s questions on ten days.', id: 'Jawab pertanyaan Manajer di sepuluh hari.' },
    earned: ({ past }) => past.filter((d) => d.manager !== null).length >= 10 },
  { id: 'all-concepts', icon: '🎓', name: { en: 'Know your SQL', id: 'Paham SQL' },
    how: { en: 'Reach level 3 in every concept.', id: 'Capai level 3 di setiap konsep.' },
    earned: ({ past }) => {
      const mastery = masteryFrom(past);
      return CONCEPTS.every((c) => (mastery[c]?.level ?? 0) >= 3);
    } },
  { id: 'analysis-case', icon: '📊', name: { en: 'Case closed', id: 'Kasus selesai' },
    how: { en: 'Solve the Analysis Case at the end of week 6.', id: 'Selesaikan Kasus Analisis di akhir minggu 6.' },
    earned: ({ past }) => past[ANALYSIS_DAY - 1]?.manager != null },
  { id: 'modern-machine', icon: '✨', name: { en: 'Chrome and glory', id: 'Krom dan kejayaan' },
    how: { en: 'Buy the modern espresso machine.', id: 'Beli mesin espresso modern.' },
    earned: ({ shop }) => shop.owned.includes('machine-modern') },
  { id: 'free-mode', icon: '♾️', name: { en: 'Veteran', id: 'Veteran' },
    how: { en: 'Play on into free mode.', id: 'Lanjut bermain sampai mode bebas.' },
    earned: ({ past }) => past.length > ANALYSIS_DAY },
  { id: 'egg-hunter', icon: '🥚', name: { en: 'Egg hunter', id: 'Pemburu telur' },
    how: { en: 'Find every easter egg.', id: 'Temukan semua easter egg.' },
    earned: ({ eggs }) => EGGS.every((e) => eggs.includes(e.id)) },
];

export const badgeName = (b: Badge, lang: Lang) => (lang === 'id' ? b.name.id : b.name.en);
export const badgeHow = (b: Badge, lang: Lang) => (lang === 'id' ? b.how.id : b.how.en);

export const earnedBadges = (input: BadgeInput): string[] => BADGES.filter((b) => b.earned(input)).map((b) => b.id);

/** The badges earned by finishing `day` that were not earned before it. */
export function newBadges(past: readonly DayLog[], day: DayLog, shop: ShopState, eggs: readonly EggId[]): string[] {
  const before = new Set(earnedBadges({ past, shop, eggs }));
  return earnedBadges({ past: [...past, day], shop, eggs }).filter((id) => !before.has(id));
}
