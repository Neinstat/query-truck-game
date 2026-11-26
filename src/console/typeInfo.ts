import type { Lang } from '../sql-core/feedback';

/** PostgreSQL's long names, shortened so the type column lines up. */
const SHORT: Record<string, string> = {
  'time without time zone': 'time',
  'timestamp without time zone': 'timestamp',
  'time with time zone': 'timetz',
  'timestamp with time zone': 'timestamptz',
  'character varying': 'varchar',
  'double precision': 'float',
};

export function shortType(type: string): string {
  return SHORT[type] ?? type;
}

/** What each type means, in plain words (the type names themselves stay English). */
const MEANING: Record<Lang, Record<string, string>> = {
  en: {
    integer: 'a whole number, like 3 or 120',
    numeric: 'a number with decimals, like 4.50',
    text: 'words and letters, like Latte',
    date: 'a calendar day, like 2026-10-31',
    time: 'a time of day, like 08:30',
    timestamp: 'a day and a time together',
    boolean: 'true or false',
  },
  id: {
    integer: 'bilangan bulat, seperti 3 atau 120',
    numeric: 'angka desimal, seperti 4.50',
    text: 'kata dan huruf, seperti Latte',
    date: 'tanggal, seperti 2026-10-31',
    time: 'jam dalam sehari, seperti 08:30',
    timestamp: 'tanggal dan jam sekaligus',
    boolean: 'true (benar) atau false (salah)',
  },
};

/** The plain-words meaning of a type, or null for one we have no label for. */
export function typeMeaning(type: string, lang: Lang): string | null {
  return MEANING[lang][shortType(type)] ?? null;
}
