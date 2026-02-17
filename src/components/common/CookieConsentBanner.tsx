'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import { getCookieConsent, setCookieConsent, type CookieConsent } from '@/lib/cookieConsent';

interface CookieConsentBannerProps {
  className?: string;
}

const CookieConsentBanner = ({ className = '' }: CookieConsentBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookieConsent>({
    necessary: true,
    functional: false,
    analytics: false,
    timestamp: new Date().toISOString(),
  });

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent: CookieConsent = {
      necessary: true,
      functional: true,
      analytics: true,
      timestamp: new Date().toISOString(),
    };
    setCookieConsent(consent);
    setIsVisible(false);
    announceToScreenReader('All cookies accepted');
  };

  const handleAcceptNecessary = () => {
    const consent: CookieConsent = {
      necessary: true,
      functional: false,
      analytics: false,
      timestamp: new Date().toISOString(),
    };
    setCookieConsent(consent);
    setIsVisible(false);
    announceToScreenReader('Only necessary cookies accepted');
  };

  const handleSavePreferences = () => {
    const consent: CookieConsent = {
      ...preferences,
      necessary: true,
      timestamp: new Date().toISOString(),
    };
    setCookieConsent(consent);
    setIsVisible(false);
    announceToScreenReader('Cookie preferences saved');
  };

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40" aria-hidden="true" />
      <div
        role="dialog"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-description"
        aria-modal="true"
        className={`fixed bottom-0 left-0 right-0 bg-card border-t-2 border-primary shadow-2xl z-50 ${className}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-8 md:px-8">
          {!showPreferences ? (
            <>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-4">
                    <Icon
                      name="ShieldCheckIcon"
                      size={28}
                      variant="outline"
                      className="text-primary flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <div>
                      <h2
                        id="cookie-consent-title"
                        className="text-xl font-headline font-semibold text-foreground mb-2"
                      >
                        Data processing and cookie notice
                      </h2>
                      <p
                        id="cookie-consent-description"
                        className="text-sm text-muted-foreground font-body leading-relaxed"
                      >
                        This website uses cookies and processes personal data in accordance with
                        European data protection regulations (GDPR). Necessary cookies are required
                        for core functionality. Optional cookies support site analytics and
                        functional improvements. You may withdraw consent at any time through the
                        privacy settings.
                      </p>
                    </div>
                  </div>

                  <div className="ml-11 space-y-2">
                    <p className="text-xs text-muted-foreground font-body">
                      <strong className="font-semibold text-foreground">Necessary cookies:</strong>{' '}
                      Essential for site operation, security, and form submission.
                    </p>
                    <p className="text-xs text-muted-foreground font-body">
                      <strong className="font-semibold text-foreground">Functional cookies:</strong>{' '}
                      Enable enhanced features and user preferences.
                    </p>
                    <p className="text-xs text-muted-foreground font-body">
                      <strong className="font-semibold text-foreground">Analytics cookies:</strong>{' '}
                      Help us understand site usage patterns (anonymized data only).
                    </p>
                  </div>

                  <div className="ml-11 mt-4">
                    <a
                      href="/privacy-policy"
                      className="text-sm text-primary hover:text-accent font-cta font-medium underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                    >
                      View full privacy policy
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[200px]">
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-3 bg-primary text-primary-foreground font-cta font-semibold text-sm rounded-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors duration-200"
                    aria-label="Accept all cookies"
                  >
                    Accept all
                  </button>
                  <button
                    onClick={handleAcceptNecessary}
                    className="px-6 py-3 bg-muted text-foreground font-cta font-semibold text-sm rounded-sm hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors duration-200"
                    aria-label="Accept only necessary cookies"
                  >
                    Necessary only
                  </button>
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="px-6 py-3 border border-border text-foreground font-cta font-medium text-sm rounded-sm hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors duration-200"
                    aria-label="Customize cookie preferences"
                  >
                    Customize
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-headline font-semibold text-foreground">
                    Cookie preferences
                  </h2>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded p-1"
                    aria-label="Close preferences"
                  >
                    <Icon name="x-mark" size={24} variant="outline" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start justify-between gap-4 p-4 bg-muted/30 rounded-sm">
                    <div className="flex-1">
                      <h3 className="text-base font-cta font-semibold text-foreground mb-1">
                        Necessary cookies
                      </h3>
                      <p className="text-sm text-muted-foreground font-body">
                        Required for core site functionality, security, and compliance. These cannot
                        be disabled.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-cta font-medium text-muted-foreground">
                        Always active
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-4 p-4 border border-border rounded-sm">
                    <div className="flex-1">
                      <h3 className="text-base font-cta font-semibold text-foreground mb-1">
                        Functional cookies
                      </h3>
                      <p className="text-sm text-muted-foreground font-body">
                        Enable enhanced features such as saved preferences and improved user
                        experience.
                      </p>
                    </div>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={(e) =>
                          setPreferences({ ...preferences, functional: e.target.checked })
                        }
                        className="w-5 h-5 text-primary border-input rounded focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer"
                        aria-label="Enable functional cookies"
                      />
                    </label>
                  </div>

                  <div className="flex items-start justify-between gap-4 p-4 border border-border rounded-sm">
                    <div className="flex-1">
                      <h3 className="text-base font-cta font-semibold text-foreground mb-1">
                        Analytics cookies
                      </h3>
                      <p className="text-sm text-muted-foreground font-body">
                        Help us understand how the site is used through anonymized data collection.
                        No personal identification.
                      </p>
                    </div>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) =>
                          setPreferences({ ...preferences, analytics: e.target.checked })
                        }
                        className="w-5 h-5 text-primary border-input rounded focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer"
                        aria-label="Enable analytics cookies"
                      />
                    </label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-cta font-semibold text-sm rounded-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors duration-200"
                  >
                    Save preferences
                  </button>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="flex-1 px-6 py-3 border border-border text-foreground font-cta font-medium text-sm rounded-sm hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CookieConsentBanner;
