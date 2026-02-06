import type { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import CompanyStorySection from './components/CompanyStorySection';
import MissionSection from './components/MissionSection';
import LeadershipSection from './components/LeadershipSection';
import RegionalPresenceSection from './components/RegionalPresenceSection';
import InstitutionalValidationSection from './components/InstitutionalValidationSection';
import ApproachSection from './components/ApproachSection';
import CTASection from './components/CTASection';
import { generateMetadata, generateWebPageSchema } from '@/lib/seo';
import StructuredData from '@/components/common/StructuredData';

export const metadata: Metadata = generateMetadata({
  title: 'About Northflow — institutional-grade systems and research',
  description: 'Northflow is a Nordic technology initiative building long-horizon digital infrastructure and research platforms for regulated and institutional environments.',
  path: '/about',
  ogType: 'website',
});

export default function AboutPage() {
  const webPageSchema = generateWebPageSchema({
    title: 'About Northflow — institutional-grade systems and research',
    description: 'Northflow is a Nordic technology initiative building long-horizon digital infrastructure and research platforms for regulated and institutional environments.',
    path: '/about'
  });

  return (
    <>
      <StructuredData data={[webPageSchema]} />
      <HeroSection />
      <CompanyStorySection />
      <MissionSection />
      <LeadershipSection />
      <RegionalPresenceSection />
      <InstitutionalValidationSection />
      <ApproachSection />
      <CTASection />
    </>
  );
}