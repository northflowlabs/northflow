'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import type { EventParams } from '@/types/gtag';

export function useGoogleAnalytics(): void {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (!measurementId) return;

    if (!window.dataLayer) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = [];
      window.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      };
      
      window.gtag('js', new Date());
      window.gtag('config', measurementId, {
        page_path: pathname,
      });
    }

    const url = pathname + (searchParams.toString() ? `?${searchParams}` : '');
    window.gtag('event', 'page_view', { page_path: url });
  }, [pathname, searchParams]);
}

export function trackEvent(eventName: string, eventParams: EventParams = {}): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

// Audience type classification helper
export function getAudienceType(context?: string): string {
  if (!context) return 'general_visitor';
  
  const lowerContext = context.toLowerCase();
  
  if (lowerContext.includes('institution') || lowerContext.includes('government') || lowerContext.includes('funding')) {
    return 'institution';
  }
  if (lowerContext.includes('research') || lowerContext.includes('academic') || lowerContext.includes('collaboration')) {
    return 'research_partner';
  }
  
  return 'general_visitor';
}