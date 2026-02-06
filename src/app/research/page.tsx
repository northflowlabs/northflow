import type { Metadata } from 'next';
import ResearchHero from './components/ResearchHero';
import ProjectHGESection from './components/ProjectHGESection';
import ResearchAreas from './components/ResearchAreas';
import PublicationArchive from './components/PublicationArchive';
import OngoingProjects from './components/OngoingProjects';
import ResearchMethodology from './components/ResearchMethodology';
import CollaborationOpportunities from './components/CollaborationOpportunities';
import ResearchFlowDiagram from '@/components/diagrams/ResearchFlowDiagram';
import { generateMetadata, generateWebPageSchema } from '@/lib/seo';
import StructuredData from '@/components/common/StructuredData';

export const metadata: Metadata = generateMetadata({
  title: 'Research — Project HGE and long-horizon discovery systems',
  description: 'Northflow research develops instrument-agnostic discovery infrastructure. Project HGE operationalizes hypothesis-driven science through automated testing under uncertainty.',
  path: '/research',
  ogType: 'website',
});

export default function ResearchPage() {
  const webPageSchema = generateWebPageSchema({
    title: 'Research — Project HGE and long-horizon discovery systems',
    description: 'Northflow research develops instrument-agnostic discovery infrastructure. Project HGE operationalizes hypothesis-driven science through automated testing under uncertainty.',
    path: '/research'
  });

  return (
    <>
      <StructuredData data={[webPageSchema]} />
      <ResearchHero />
      <section className="bg-background py-16">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-headline font-semibold text-foreground mb-6 text-center">
              Why research exists inside Northflow
            </h2>
            <p className="text-base text-muted-foreground font-body leading-relaxed mb-8 text-center">
              NRL was formalized as an internal division to ensure that systems are grounded in rigorous methodology rather than assumption. Research informs architecture. Architecture enables deployment. This translation from study to operational systems is central to how Northflow operates.
            </p>
            <div className="flex justify-center">
              <ResearchFlowDiagram className="w-full max-w-2xl text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>
      <ResearchAreas />
      <ProjectHGESection />
      <PublicationArchive />
      <OngoingProjects />
      <ResearchMethodology />
      <CollaborationOpportunities />
    </>
  );
}