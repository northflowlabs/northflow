/**
 * Cookie Consent Management Utilities
 * GDPR-compliant cookie consent handling for institutional users
 */

export interface CookieConsent {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  timestamp: string;
}

const CONSENT_COOKIE_NAME = 'northflow_cookie_consent';
const CONSENT_COOKIE_EXPIRY_DAYS = 365;

/**
 * Get current cookie consent preferences from localStorage
 */
export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem(CONSENT_COOKIE_NAME);
    if (!stored) return null;

    const consent = JSON.parse(stored) as CookieConsent;

    // Validate consent structure
    if (
      typeof consent.necessary === 'boolean' &&
      typeof consent.functional === 'boolean' &&
      typeof consent.analytics === 'boolean' &&
      consent.timestamp
    ) {
      return consent;
    }

    return null;
  } catch (error) {
    console.error('Error reading cookie consent:', error);
    return null;
  }
}

/**
 * Set cookie consent preferences
 */
export function setCookieConsent(consent: CookieConsent): void {
  if (typeof window === 'undefined') return;

  try {
    // Store in localStorage for persistence
    localStorage.setItem(CONSENT_COOKIE_NAME, JSON.stringify(consent));

    // Also set a cookie for server-side access if needed
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + CONSENT_COOKIE_EXPIRY_DAYS);

    document.cookie = `${CONSENT_COOKIE_NAME}=${JSON.stringify(consent)}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Strict; Secure`;

    // Dispatch custom event for other components to react
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: consent }));
  } catch (error) {
    console.error('Error setting cookie consent:', error);
  }
}

/**
 * Clear cookie consent (for testing or user request)
 */
export function clearCookieConsent(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(CONSENT_COOKIE_NAME);
    document.cookie = `${CONSENT_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  } catch (error) {
    console.error('Error clearing cookie consent:', error);
  }
}

/**
 * Check if a specific cookie category is allowed
 */
export function isCookieCategoryAllowed(category: keyof Omit<CookieConsent, 'timestamp'>): boolean {
  const consent = getCookieConsent();
  if (!consent) return false;
  return consent[category] === true;
}

/**
 * Check if consent has expired (older than 1 year)
 */
export function isConsentExpired(): boolean {
  const consent = getCookieConsent();
  if (!consent) return true;

  const consentDate = new Date(consent.timestamp);
  const now = new Date();
  const daysSinceConsent = (now.getTime() - consentDate.getTime()) / (1000 * 60 * 60 * 24);

  return daysSinceConsent > CONSENT_COOKIE_EXPIRY_DAYS;
}
