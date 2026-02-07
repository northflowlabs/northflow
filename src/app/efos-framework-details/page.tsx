import type { Metadata } from 'next';
import EFOSHero from './components/EFOSHero';
import EFOSSystemOverview from './components/EFOSSystemOverview';
import SovereigntyPreservingGovernance from './components/SovereigntyPreservingGovernance';
import OperationalContinuityFlow from './components/OperationalContinuityFlow';
import FrameworkDevelopmentAdoption from './components/FrameworkDevelopmentAdoption';
import FrameworksOperationalSystems from './components/FrameworksOperationalSystems';
import MethodologicalFoundation from './components/MethodologicalFoundation';
import PowerGridCTA from './components/PowerGridCTA';
import { generateMetadata, generateWebPageSchema } from '@/lib/seo';
import StructuredData from '@/components/common/StructuredData';

export const metadata: Metadata = generateMetadata({
  title: 'EFOS — European Operational Governance Architecture | Northflow',
  description: 'EFOS defines a reference architecture for traceable, auditable, and sovereign digital operations designed for long-horizon institutional governance.',
  path: '/efos-framework-details',
  ogType: 'website',
});

export default function EFOSFrameworkDetailsPage() {
  const webPageSchema = generateWebPageSchema({
    title: 'EFOS — European Operational Governance Architecture | Northflow',
    description: 'EFOS defines a reference architecture for traceable, auditable, and sovereign digital operations designed for long-horizon institutional governance.',
    path: '/efos-framework-details'
  });

  return (
    <>
      <StructuredData data={[webPageSchema]} />
      <EFOSHero />
      <EFOSSystemOverview />
      <SovereigntyPreservingGovernance />
      <OperationalContinuityFlow />
      <FrameworkDevelopmentAdoption />
      <FrameworksOperationalSystems />
      <MethodologicalFoundation />
      <PowerGridCTA />
    </>
  );
}