import type { Metadata } from 'next';
import HeroSection from './homepage/components/HeroSection';
import FourPillarsSection from './homepage/components/FourPillarsSection';
import CapabilitiesSection from './homepage/components/CapabilitiesSection';
import TrustIndicatorsSection from './homepage/components/TrustIndicatorsSection';
import ResearchHighlightSection from './homepage/components/ResearchHighlightSection';
import EngagementSection from './homepage/components/EngagementSection';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Sovereign Digital Infrastructure for Europe | Northflow',
  description:
    'Northflow designs sovereign, auditable digital infrastructure for European institutions operating under regulation, long-term responsibility, and operational continuity.',
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
