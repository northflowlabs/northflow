import { trackEvent, getAudienceType } from './analytics';
import type { EventParams } from '@/types/gtag';

// Institutional engagement event parameters
interface InstitutionalEngagementParams extends EventParams {
  engagement_type:
    | 'contact_form'
    | 'access_request'
    | 'resource_download'
    | 'research_view'
    | 'cta_click';
  audience_type?: 'institution' | 'research_partner' | 'general_visitor';
  institution_type?: string;
  page_section?: string;
}

interface ResearchPageParams extends EventParams {
  research_area?: string;
  publication_type?: string;
  page_depth?: number;
  audience_type?: string;
}

interface FormSubmitParams extends EventParams {
  form_id: string;
  form_name?: string;
  form_type?: 'contact' | 'access_request';
  audience_type?: string;
  organization_type?: string;
}

interface FileDownloadParams extends EventParams {
  file_name: string;
  file_type?: string;
  file_category?: 'research' | 'technical' | 'framework';
  audience_type?: string;
}

interface NavigationParams extends EventParams {
  from_page: string;
  to_page: string;
  link_text?: string;
  audience_type?: string;
}

interface CTAClickParams extends EventParams {
  cta_id: string;
  cta_location: string;
  cta_text?: string;
  audience_type?: string;
  destination?: string;
}

// Audience-specific engagement tracking
export function trackAudienceEngagement(
  engagementType: 'cta_click' | 'page_view' | 'form_interaction',
  params: {
    location: string;
    context?: string;
    ctaText?: string;
    destination?: string;
  }
): void {
  const audienceType = getAudienceType(params.context);

  trackEvent('audience_engagement', {
    engagement_type: engagementType,
    audience_type: audienceType,
    location: params.location,
    cta_text: params.ctaText,
    destination: params.destination,
  });
}

// CTA tracking with audience classification
export function trackCTAClick(params: CTAClickParams): void {
  trackEvent('cta_click', {
    ...params,
    audience_type: params.audience_type || 'general_visitor',
  });
}

// Institutional engagement tracking
export function trackInstitutionalEngagement(params: InstitutionalEngagementParams): void {
  trackEvent('institutional_engagement', {
    ...params,
    audience_type: params.audience_type || 'institution',
  });
}

// Research page metrics with audience tracking
export function trackResearchView(params: ResearchPageParams): void {
  trackEvent('research_page_view', {
    ...params,
    audience_type: params.audience_type || getAudienceType(params.research_area),
  });
}

export function trackPolicyPageView(params: ResearchPageParams): void {
  trackEvent('policy_page_view', params);
}

// Form interactions with audience and organization type
export function trackFormSubmit(params: FormSubmitParams): void {
  trackEvent('form_submit', {
    ...params,
    audience_type: params.audience_type || getAudienceType(params.organization_type),
  });
}

export function trackFormStart(formId: string, audienceContext?: string): void {
  trackEvent('form_start', {
    form_id: formId,
    audience_type: getAudienceType(audienceContext),
  });
}

// File downloads with audience tracking
export function trackFileDownload(params: FileDownloadParams): void {
  trackEvent('file_download', {
    ...params,
    audience_type: params.audience_type || 'general_visitor',
  });
}

// Navigation patterns with audience classification
export function trackNavigation(params: NavigationParams): void {
  trackEvent('navigation', {
    ...params,
    audience_type: params.audience_type || 'general_visitor',
  });
}

// Resource engagement
export function trackResourceEngagement(
  resourceType: string,
  resourceId: string,
  audienceContext?: string
): void {
  trackEvent('resource_engagement', {
    resource_type: resourceType,
    resource_id: resourceId,
    audience_type: getAudienceType(audienceContext),
  });
}

// Scroll depth tracking
export function trackScrollDepth(depth: number, pagePath: string): void {
  trackEvent('scroll_depth', {
    scroll_percentage: depth,
    page_path: pagePath,
  });
}

// Qualified inbound conversation indicators
export function trackQualifiedInbound(params: {
  source: string;
  organizationType?: string;
  inquiryFocus?: string[];
  audienceType?: string;
}): void {
  trackEvent('qualified_inbound', {
    source: params.source,
    organization_type: params.organizationType,
    inquiry_focus: params.inquiryFocus?.join(', '),
    audience_type: params.audienceType || getAudienceType(params.organizationType),
  });
}
