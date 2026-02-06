import type { Metadata } from 'next';
import Link from 'next/link';
import ResourceIndex from '@/components/resources/ResourceIndex';

export const metadata: Metadata = {
  title: 'Resources - Northflow Technologies',
  description:
    'Searchable index of documentation, technical papers, compliance frameworks, and security resources.',
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 px-4 py-2 rounded-sm mb-6">
              <span className="text-xs font-cta font-medium tracking-wide uppercase">
                Northflow Resources
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-semibold mb-6 leading-tight">
              Resources
            </h1>
            <p className="text-lg font-body text-primary-foreground/90 leading-relaxed mb-8">
              Comprehensive index of documentation, technical papers, compliance frameworks, and security resources for institutional stakeholders.
            </p>
            <p className="text-sm font-body text-primary-foreground/70 leading-relaxed italic">
              These resources reflect Northflow's applied research, system design principles, and regulatory alignment work. Materials are published at different stages of maturity and made available through appropriate engagement pathways.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-8 py-16">
        {/* Project HGE Resources Section */}
        <div className="max-w-[900px] mb-12 p-6 bg-accent/5 border border-accent/20 rounded-lg">
          <h2 className="text-2xl font-headline font-bold text-foreground mb-3">
            Project HGE resources
          </h2>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
            Access methodology, validation logs, and instrument integration notes from Project HGE—Northflow's automated scientific discovery infrastructure.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/technical-papers"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors font-body text-sm font-medium"
            >
              Technical papers
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <Link
              href="/documentation"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors font-body text-sm font-medium"
            >
              Documentation
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <Link
              href="/research/hge"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors font-body text-sm font-medium"
            >
              HGE overview
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Searchable Resource Index */}
        <ResourceIndex />
      </div>
    </div>
  );
}