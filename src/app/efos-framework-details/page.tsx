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
  title: 'EFOS framework — operational and governance architecture',
  description: 'EFOS is a structured framework for resilient digital operations and governance. Learn how the architecture supports traceability, control, and long-horizon reliability.',
  path: '/efos-framework-details',
  ogType: 'website',
});

export default function EFOSFrameworkDetailsPage() {
  const webPageSchema = generateWebPageSchema({
    title: 'EFOS framework — operational and governance architecture',
    description: 'EFOS is a structured framework for resilient digital operations and governance. Learn how the architecture supports traceability, control, and long-horizon reliability.',
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