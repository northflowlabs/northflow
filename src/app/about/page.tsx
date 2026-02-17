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
  title: 'About Northflow | Institutional Evidence Infrastructure',
  description:
    'Built in Norway, operating across Europe. Northflow develops research-grade evidence systems for institutions requiring verifiable continuity, auditability, and long-term operational resilience.',
  path: '/about',
  ogType: 'website',
  ogImage: 'https://northflow.no/assets/images/Northflow%20-%20Earth%20Sat.jpg',
});

export default function AboutPage() {
  const webPageSchema = generateWebPageSchema({
    title: 'About Northflow | Institutional Digital Infrastructure Stewardship',
    description:
      'Northflow is a Nordic technology organization stewarding long-horizon digital infrastructure, research systems, and governance architectures for regulated European environments.',
    path: '/about',
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
