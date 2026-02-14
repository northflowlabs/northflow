import type { Metadata } from 'next';
import HeroSection from './homepage/components/HeroSection';
import FourPillarsSection from './homepage/components/FourPillarsSection';
import ValidationEvidenceSection from './homepage/components/ValidationEvidenceSection';
import CapabilitiesSection from './homepage/components/CapabilitiesSection';
import TrustIndicatorsSection from './homepage/components/TrustIndicatorsSection';
import ResearchHighlightSection from './homepage/components/ResearchHighlightSection';
import EngagementSection from './homepage/components/EngagementSection';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Institutional Evidence Infrastructure | Northflow Technologies',
  description:
    'Northflow builds institutional-grade evidence infrastructure that converts uncertain datasets into reproducible intelligence. Structured discovery for climate, space, and critical systems in European regulatory environments.',
  path: '/',
  keywords: [
    'European digital sovereignty',
    'government digital infrastructure',
    'institutional technology',
    'operational resilience',
    'mission-critical systems',
    'regulatory compliance',
    'sovereign cloud Europe',
    'digital infrastructure',
  ],
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FourPillarsSection />
      <ValidationEvidenceSection />
      <CapabilitiesSection />
      <TrustIndicatorsSection />
      <ResearchHighlightSection />
      <EngagementSection />
    </>
  );
}
