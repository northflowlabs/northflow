import type { Metadata } from 'next';
import SystemsHero from './components/SystemsHero';
import InfrastructureComponents from './components/InfrastructureComponents';
import GovernanceFrameworks from './components/GovernanceFrameworks';
import ComplianceStandards from './components/ComplianceStandards';
import ImplementationApproach from './components/ImplementationApproach';
import TechnicalResources from './components/TechnicalResources';
import ProjectHGECallout from './components/ProjectHGECallout';
import SystemDiagram from '@/components/diagrams/SystemDiagram';
import { generateMetadata, generateWebPageSchema } from '@/lib/seo';
import StructuredData from '@/components/common/StructuredData';

export const metadata: Metadata = generateMetadata({
  title: 'Governable Infrastructure Systems | Northflow Technologies',
  description:
    'Reference architectures for regulated, mission-critical environments. Sovereign control, compliance frameworks, and operational continuity designed for institutional governance requirements.',
  path: '/systems',
  ogType: 'website',
  ogImage: 'https://northflow.no/assets/images/Northflow%20-%20Earth%20Sat.jpg',
});

export default function SystemsPage() {
  const webPageSchema = generateWebPageSchema({
    title: 'Institutional Systems & Governance Architecture | Northflow',
    description:
      'Northflow systems define institutional digital architecture for governance, resilience, auditability, and long-lived operational reliability in European contexts.',
    path: '/systems',
  });

  return (
    <>
      <StructuredData data={[webPageSchema]} />
      <SystemsHero />
      <section className="bg-muted py-16">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-headline font-semibold text-foreground mb-6 text-center">
              System architecture overview
            </h2>
            <p className="text-base text-muted-foreground font-body leading-relaxed mb-8 text-center">
              Institutional infrastructure built on three foundational pillars: sovereign control,
              compliance frameworks, and operational continuity. Each layer is designed to support
              the others while maintaining independence.
            </p>
            <p className="text-sm font-body text-foreground bg-background border border-primary/20 rounded-sm px-4 py-3 mb-8 text-center">
              <span className="font-semibold">HGE connection:</span> The governance and audit layer
              is informed by Project HGE&apos;s verification methodology, including signed evidence
              bundles, deterministic replay, and audit invariants.
            </p>
            <div className="flex justify-center">
              <SystemDiagram className="w-full max-w-3xl text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-background">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <ProjectHGECallout />
          </div>
        </div>
      </section>
      <InfrastructureComponents />
      <GovernanceFrameworks />
      <ComplianceStandards />
      <ImplementationApproach />
      <TechnicalResources />
    </>
  );
}
