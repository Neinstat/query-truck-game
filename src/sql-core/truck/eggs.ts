/**
 * Easter eggs (GAME_DESIGN.md §10, 7.3): small hidden surprises that never block learning.
 * Which ones were found is saved in this browser. The queries that trigger some of them are
 * recognised here, so the rule is tested without a browser.
 */
import type { Lang } from '../feedback';

export type EggId = 'duck' | 'konami' | 'developer' | 'schema' | 'drop' | 'answer';

export type Egg = {
  id: EggId;
  /** Shown when the egg is found. */
  title: { en: string; id: string };
  text: { en: string; id: string };
  /** A hint for the badge page, so a player can look for the ones still hidden. */
  hint: { en: string; id: string };
};

export const EGGS: readonly Egg[] = [
  { id: 'duck', title: { en: 'Quack!', id: 'Kwek!' },
    text: { en: 'The rubber duck on the dashboard has been listening to your queries all along. It says: "Have you tried explaining it to me?"', id: 'Bebek karet di dasbor selama ini mendengarkan query-mu. Katanya: "Sudah coba menjelaskannya padaku?"' },
    hint: { en: 'Something small and yellow lives on the title screen.', id: 'Ada sesuatu yang kecil dan kuning di layar judul.' } },
  { id: 'konami', title: { en: 'A very old code', id: 'Kode yang sangat tua' },
    text: { en: '↑ ↑ ↓ ↓ ← → ← → B A. Mira left a sticky note inside the fridge door: "Always LIMIT before you SELECT *. Trust me."', id: '↑ ↑ ↓ ↓ ← → ← → B A. Mira menempel catatan di pintu kulkas: "Selalu pakai LIMIT sebelum SELECT *. Percayalah."' },
    hint: { en: 'Some codes are older than SQL. Try them on the title screen.', id: 'Ada kode yang lebih tua dari SQL. Coba di layar judul.' } },
  { id: 'developer', title: { en: 'A note from the developer', id: 'Catatan dari pembuat' },
    text: { en: 'Thanks for playing Query Truck. It was built one pull request at a time, with a lot of coffee and an AI agent that never sleeps. Keep querying!', id: 'Terima kasih sudah memainkan Query Truck. Dibuat satu pull request demi satu, dengan banyak kopi dan agen AI yang tidak pernah tidur. Terus ngoding query!' },
    hint: { en: 'Credits are for reading, but names can be clicked.', id: 'Kredit itu untuk dibaca, tapi nama bisa diklik.' } },
  { id: 'schema', title: { en: 'Behind the scenes', id: 'Di balik layar' },
    text: { en: 'You asked the database about itself. Real analysts do this on day one: information_schema lists every table and column. Nicely done.', id: 'Kamu bertanya pada database tentang dirinya sendiri. Analis sungguhan melakukannya di hari pertama: information_schema mendaftar setiap tabel dan kolom. Bagus!' },
    hint: { en: 'Ask the database what tables it has.', id: 'Tanyakan pada database tabel apa saja yang ia punya.' } },
  { id: 'drop', title: { en: 'Please don\'t', id: 'Jangan, ya' },
    text: { en: 'The Manager, from the back door: "Did someone just type DROP TABLE?! That is the whole menu!" (Do not worry: nothing was changed. BI analysts only read.)', id: 'Manajer, dari pintu belakang: "Barusan ada yang mengetik DROP TABLE?! Itu seluruh menu kita!" (Tenang: tidak ada yang berubah. Analis BI hanya membaca.)' },
    hint: { en: 'Do something the Manager would not like.', id: 'Lakukan sesuatu yang tidak disukai Manajer.' } },
  { id: 'answer', title: { en: 'The answer', id: 'Jawabannya' },
    text: { en: 'SELECT 42; The answer to life, the universe and everything — and, today, to one very philosophical customer.', id: 'SELECT 42; Jawaban untuk kehidupan, alam semesta dan segalanya — dan hari ini, untuk satu pelanggan yang sangat filosofis.' },
    hint: { en: 'A famous number needs no table.', id: 'Angka yang terkenal tidak butuh tabel.' } },
];

export const eggById = (id: string): Egg | undefined => EGGS.find((e) => e.id === id);
export const eggTitle = (egg: Egg, lang: Lang) => (lang === 'id' ? egg.title.id : egg.title.en);
export const eggText = (egg: Egg, lang: Lang) => (lang === 'id' ? egg.text.id : egg.text.en);
export const eggHint = (egg: Egg, lang: Lang) => (lang === 'id' ? egg.hint.id : egg.hint.en);

/** The egg a typed query finds, if any. */
export function eggForQuery(sql: string): EggId | null {
  const text = sql.toLowerCase().replace(/\s+/g, ' ').trim();
  if (text.includes('information_schema') || text.includes('pg_catalog')) return 'schema';
  if (/\b(drop|truncate)\s+(table|schema|database)\b/.test(text)) return 'drop';
  if (/^select 42\s*(as \w+)?\s*;?$/.test(text)) return 'answer';
  return null;
}

/** The ten keys of the old code, in order. */
export const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'] as const;

/** Add a key to the last keys pressed; true when they now end in the code. */
export function konamiStep(recent: readonly string[], key: string): { recent: string[]; done: boolean } {
  const lower = key.length === 1 ? key.toLowerCase() : key;
  const next = [...recent, lower].slice(-KONAMI.length);
  return { recent: next, done: next.length === KONAMI.length && next.every((k, i) => k === KONAMI[i]) };
}

export function parseFound(raw: string | null): EggId[] {
  try {
    const data: unknown = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(data)) return [];
    return data.filter((id): id is EggId => typeof id === 'string' && !!eggById(id));
  } catch {
    return [];
  }
}

/** Add an egg; the same list comes back if it was already found. */
export const addFound = (found: readonly EggId[], id: EggId): EggId[] => (found.includes(id) ? [...found] : [...found, id]);
