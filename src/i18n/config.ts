// List of pages that are available in English only
const ENGLISH_ONLY_PAGES = [
  '/documentation',
  '/technical-papers',
  '/security',
  '/compliance',
  '/legal-notice',
  '/privacy-policy',
  '/data-protection-notice',
  '/terms-of-service',
  '/resources',
];

export function isEnglishOnlyPage(pathname: string): boolean {
  // Remove trailing slash for consistent comparison
  const cleanPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;

  return ENGLISH_ONLY_PAGES.includes(cleanPath);
}

export const locales = ['en', 'de'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
};
