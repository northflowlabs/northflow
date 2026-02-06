export function getLocaleFromPathname(pathname: string): string {
  return 'en';
}

export function removeLocaleFromPathname(pathname: string): string {
  return pathname;
}

export function addLocaleToPathname(pathname: string, locale: string): string {
  return pathname;
}

export function getLocalizedPath(path: string, locale: string): string {
  return path;
}