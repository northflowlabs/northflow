import type { Metadata } from 'next';
import ResearchHero from './components/ResearchHero';
import ProjectHGESection from './components/ProjectHGESection';
import ResearchAreas from './components/ResearchAreas';
import PublicationArchive from './components/PublicationArchive';
import OngoingProjects from './components/OngoingProjects';
import ResearchMethodology from './components/ResearchMethodology';
import CollaborationOpportunities from './components/CollaborationOpportunities';
import DomainAdapterMap from './components/DomainAdapterMap';
import { generateMetadata, generateWebPageSchema } from '@/lib/seo';
import StructuredData from '@/components/common/StructuredData';

export const metadata: Metadata = generateMetadata({
  title: 'Structured Evidence Research | Northflow Technologies',
  description:
    'Applied research in structured discovery, evidence systems, and space-enabled climate resilience. Project HGE: machine-driven hypothesis generation with verifiable provenance tracking.',
  path: '/research',
  ogType: 'website',
});

export default function ResearchPage() {
  const webPageSchema = generateWebPageSchema({
    title: 'Structured Evidence Research | Northflow Technologies',
    description:
      'Applied research in structured discovery, evidence systems, and space-enabled climate resilience. Project HGE: machine-driven hypothesis generation with verifiable provenance tracking.',
    path: '/research',
  });

  return (
    <>
      <StructuredData data={[webPageSchema]} />
      <ResearchHero />
      <section className="bg-background py-16">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-headline font-semibold text-foreground mb-6 text-center">
              Institutional research for climate, space, and critical systems
            </h2>
            <p className="text-base text-muted-foreground font-body leading-relaxed mb-8 text-center">
              Northflow conducts applied research focused on structured evidence systems for climate
              resilience, space-enabled observation, and mission-critical institutional
              environments. The research program formalises how claims are defined, evaluated, and
              governed under uncertainty. Its outputs progress from methodological validation to
              deployable system architectures through structured institutional engagement.
            </p>
          </div>
        </div>
      </section>
      <ResearchAreas />
      <ProjectHGESection />
      <DomainAdapterMap />
      <PublicationArchive />
      <OngoingProjects />
      <ResearchMethodology />
      <CollaborationOpportunities />
    </>
  );
}
