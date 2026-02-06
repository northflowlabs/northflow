import type { Metadata } from 'next';
import HeroSection from './homepage/components/HeroSection';
import FourPillarsSection from './homepage/components/FourPillarsSection';
import CapabilitiesSection from './homepage/components/CapabilitiesSection';
import TrustIndicatorsSection from './homepage/components/TrustIndicatorsSection';
import ResearchHighlightSection from './homepage/components/ResearchHighlightSection';
import EngagementSection from './homepage/components/EngagementSection';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Northflow Technologies - Sovereign Digital Infrastructure for European Institutions',
  description: 'Resilient digital infrastructure for government entities and mission-critical operations. Auditable systems designed for operational continuity and regulatory compliance across Europe.',
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
      <CapabilitiesSection />
      <TrustIndicatorsSection />
      <ResearchHighlightSection />
      <EngagementSection />
    </>
  );
}