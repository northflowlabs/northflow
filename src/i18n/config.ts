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
  const cleanPath = pathname.endsWith('/') && pathname !== '/' 
    ? pathname.slice(0, -1) 
    : pathname;
  
  return ENGLISH_ONLY_PAGES.includes(cleanPath);
}

function locales(...args: any[]): any {
  // eslint-disable-next-line no-console
  console.warn('Placeholder: locales is not implemented yet.', args);
  return null;
}

export { locales };
function localeNames(...args: any[]): any {
  // eslint-disable-next-line no-console
  console.warn('Placeholder: localeNames is not implemented yet.', args);
  return null;
}

export { localeNames };
function Locale(...args: any[]): any {
  // eslint-disable-next-line no-console
  console.warn('Placeholder: Locale is not implemented yet.', args);
  return null;
}

export { Locale };
function defaultLocale(...args: any[]): any {
  // eslint-disable-next-line no-console
  console.warn('Placeholder: defaultLocale is not implemented yet.', args);
  return null;
}

export { defaultLocale };