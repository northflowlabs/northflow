'use client';

import { useCallback } from 'react';
import { trackEvent } from '@/lib/analytics';
import type { EventParams } from '@/types/gtag';

interface UseAnalyticsReturn {
  track: (eventName: string, params?: EventParams) => void;
  trackClick: (elementId: string, additionalParams?: EventParams) => void;
  trackPageView: (pagePath: string) => void;
}

export function useAnalytics(): UseAnalyticsReturn {
  const track = useCallback((eventName: string, params: EventParams = {}) => {
    trackEvent(eventName, params);
  }, []);

  const trackClick = useCallback((elementId: string, additionalParams: EventParams = {}) => {
    trackEvent('element_click', {
      element_id: elementId,
      ...additionalParams
    });
  }, []);

  const trackPageView = useCallback((pagePath: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', { page_path: pagePath });
    }
  }, []);

  return { track, trackClick, trackPageView };
}