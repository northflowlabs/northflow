import type { Locale } from '@/i18n/config';

export function getLocaleFromPathname(pathname: string): Locale {
  return 'en';
}

export function removeLocaleFromPathname(pathname: string): string {
  return pathname;
}

export function addLocaleToPathname(pathname: string, locale: Locale): string {
  return pathname;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  return path;
}
