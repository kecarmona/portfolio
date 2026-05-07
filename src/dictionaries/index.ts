import 'server-only';
import type { Dictionary } from './types';
export type { Dictionary } from './types';

const dictionaries = {
  en: () => import('./en.json').then((m) => m.default),
  es: () => import('./es.json').then((m) => m.default),
};

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const hasLocale = (x: string): x is Locale =>
  (locales as readonly string[]).includes(x);

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]() as Promise<Dictionary>;
