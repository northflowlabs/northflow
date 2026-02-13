import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technical Papers & Reference Architectures | Northflow',
  description:
    'Methodological notes, validation studies, and framework documentation for peer review and institutional assessment.',
};

export default function TechnicalPapersPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 px-4 py-2 rounded-sm mb-6">
              <span className="text-xs font-cta font-medium tracking-wide uppercase">
                Technical papers
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-semibold mb-6 leading-tight">
              Research publication archive
            </h1>
            <p className="text-lg font-body text-primary-foreground/90 leading-relaxed">
              Methodological notes, validation studies, and framework documentation for peer review
              and institutional assessment. Research emphasizes reproducibility, provenance
              tracking, and uncertainty-aware reasoning.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
              Current publications
            </h2>

            <div className="space-y-6">
              <div className="border border-emerald-500/30 rounded-lg p-8 bg-card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                      Gaia DR3 validation: structured hypothesis search at scale
                    </h3>
                    <p className="text-sm text-muted-foreground">Technical paper · February 2026</p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-500/20">
                    Available
                  </span>
                </div>
                <p className="text-base text-foreground font-body leading-relaxed mb-4">
                  Operational validation of HGE against the Gaia Data Release 3 astronomical
                  catalog. Demonstrates deterministic execution, reproducible evidence generation,
                  and uncertainty quantification across 1.8 billion observational records.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                    Hypothesis generation
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                    Astronomical data
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                    Reproducibility
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                    Validation
                  </span>
                </div>
                <a
                  href="/research"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  View paper details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="border border-border rounded-lg p-8 bg-card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                      HGE: instrument-agnostic hypothesis testing loop
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Technical overview · Expected March 2026
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-yellow-500/10 text-yellow-700 text-xs font-semibold rounded-full border border-yellow-500/20">
                    In preparation — prioritized
                  </span>
                </div>
                <p className="text-base text-foreground font-body leading-relaxed mb-4">
                  Architecture and workflow of the Hypothesis Generation Engine. Method-focused
                  system for automated hypothesis formulation, experiment specification, and result
                  interpretation.
                </p>
                <a
                  href="/research/hge"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  View paper details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="border border-border rounded-lg p-8 bg-card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                      Quantum backend validation: executing experiments under noise and drift
                    </h3>
                    <p className="text-sm text-muted-foreground">Methods note · Expected April 2026</p>
                  </div>
                  <span className="px-3 py-1 bg-yellow-500/10 text-yellow-700 text-xs font-semibold rounded-full border border-yellow-500/20">
                    In preparation — prioritized
                  </span>
                </div>
                <p className="text-base text-foreground font-body leading-relaxed mb-4">
                  Validation approach using remote quantum hardware as physical stress-test
                  environment. Focus on methodological considerations for instrument-agnostic
                  validation.
                </p>
                <a
                  href="/research/hge"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  View paper details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
              Publication types
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                  Technical papers
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Detailed research papers covering system architecture, operational frameworks, and
                  validation methodologies.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6 bg-card">
                <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                  Working documents
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Preliminary research findings and framework proposals for institutional dialogue.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6 bg-card">
                <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                  Validation artifacts
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Empirical validation studies, benchmark results, and reproducibility assessments.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
