import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technical Papers - Northflow Technologies',
  description:
    'Research and publication archive featuring European Flexibility Operating System (EFOS) framework documentation and operational sovereignty research.',
};

export default function TechnicalPapersPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <div className="max-w-[1200px] mx-auto px-8 py-16">
          <div className="max-w-[900px]">
            <h1 className="text-4xl font-headline font-bold text-foreground mb-4">
              Technical papers
            </h1>
            <p className="text-lg text-muted-foreground font-body mb-12 leading-relaxed">
              Research and publication archive for institutional review and academic collaboration.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
                Publication types
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                    Technical papers
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Detailed research papers covering system architecture, operational frameworks, and technical methodologies suitable for peer review and institutional assessment.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                    Policy briefs
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Concise analysis documents addressing regulatory frameworks, compliance methodologies, and policy implications for government decision-makers.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                    Working documents
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Preliminary research findings and framework proposals intended for institutional dialogue and collaborative development.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                    Framework documentation
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Comprehensive documentation of operational frameworks, governance structures, and implementation methodologies.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
                Current publications
              </h2>
              
              {/* Project HGE Section */}
              <div className="mb-12">
                <h3 className="text-xl font-headline font-semibold text-foreground mb-6 flex items-center gap-3">
                  <span className="text-primary">Project HGE — technical papers</span>
                </h3>
                
                <div className="space-y-6">
                  {/* Paper 1: Technical Overview */}
                  <div className="border border-border rounded-lg p-8 bg-card">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-headline font-semibold text-foreground mb-2">
                          HGE: instrument-agnostic hypothesis testing loop (technical overview)
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Technical paper · 2026
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-yellow-500/10 text-yellow-700 text-xs font-semibold rounded-full border border-yellow-500/20">
                        Draft / In preparation
                      </span>
                    </div>
                    <p className="text-base text-foreground font-body leading-relaxed mb-4">
                      This paper describes the architecture and workflow of the Hypothesis Generation Engine (HGE), a method-focused system for automated hypothesis formulation, experiment specification, and result interpretation. HGE operates independently of specific instrument backends, enabling validation across diverse experimental platforms. The approach emphasizes reproducibility, provenance tracking, and uncertainty-aware reasoning without claims of performance superiority over existing methods.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                        Hypothesis testing
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                        Instrument integration
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                        Workflow automation
                      </span>
                    </div>
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

                  {/* Paper 2: Quantum Backend Validation */}
                  <div className="border border-border rounded-lg p-8 bg-card">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-headline font-semibold text-foreground mb-2">
                          Quantum backend validation: executing experiments under noise and drift (methods note)
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Methods note · 2026
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-yellow-500/10 text-yellow-700 text-xs font-semibold rounded-full border border-yellow-500/20">
                        Draft / In preparation
                      </span>
                    </div>
                    <p className="text-base text-foreground font-body leading-relaxed mb-4">
                      This methods note documents the validation approach for HGE using remote quantum hardware as a physical stress-test environment. The work examines how the system handles real-world experimental constraints including hardware noise, calibration drift, and queue-based execution. Findings focus on methodological considerations for instrument-agnostic validation rather than quantum computing performance metrics.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                        Validation methods
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                        Quantum hardware
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                        Noise characterization
                      </span>
                    </div>
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
              </div>

              <div className="mb-6 flex items-center gap-4 p-4 bg-primary/5 border-l-4 border-primary rounded">
                <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-foreground">Flagship initiative</p>
                  <p className="text-xs text-muted-foreground">Primary European infrastructure framework</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-2 border-primary rounded-lg p-8 bg-card shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                        European Flexibility Operating System (EFOS)
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Technical paper · December 2025
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                      Flagship
                    </span>
                  </div>
                  <p className="text-base text-foreground font-body leading-relaxed mb-4">
                    Comprehensive framework documentation for EFOS, a proposed European public–private digital infrastructure providing harmonised, cross-border operational layer for energy system flexibility management. Addresses architectural principles, governance structures, and implementation methodologies responding to EU directives (DES, Green Deal, EPBD, Data Act, AI Act, Net Zero Industry Act). Clarifies EFOS as a long-term digital backbone for EU system objectives, not a commercial software product.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      Digital sovereignty
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      Infrastructure design
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      Governance frameworks
                    </span>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center gap-8">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-xs text-muted-foreground">Published</span>
                      </div>
                      <div className="flex-1 h-px bg-border"></div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-xs text-muted-foreground">In consultation</span>
                      </div>
                      <div className="flex-1 h-px bg-border"></div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                        <span className="text-xs text-muted-foreground">Upcoming revisions</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-6">
                    Available through structured engagement for government entities and regulatory authorities.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-8 bg-card">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                        Operational sovereignty in critical infrastructure
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Policy brief · December 2025
                      </p>
                    </div>
                  </div>
                  <p className="text-base text-foreground font-body leading-relaxed mb-4">
                    Analysis of operational sovereignty requirements for critical infrastructure operators. Examines regulatory alignment, risk management frameworks, and institutional governance models suitable for European deployment.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      Critical infrastructure
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      Risk management
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      Regulatory compliance
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Available through structured engagement for institutional stakeholders.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
                Forthcoming work
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                    Digital resilience frameworks for European institutions
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Technical paper examining resilience methodologies, continuity planning, and operational recovery frameworks aligned with NIS2 and DORA requirements.
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span className="text-xs text-muted-foreground">In development</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Expected: Q1 2026</span>
                  </div>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                    Governance models for sovereign digital infrastructure
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Framework documentation addressing institutional governance, oversight mechanisms, and accountability structures for sovereign infrastructure deployment.
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                      <span className="text-xs text-muted-foreground">Planned</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Expected: Q2 2026</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
                Research methodology
              </h2>
              <div className="space-y-4 text-base text-foreground font-body leading-relaxed">
                <p>
                  Research is conducted through systematic analysis of regulatory frameworks, institutional requirements, and technical capabilities. Methodology emphasises:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Alignment with European regulatory standards and institutional practices</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Validation through institutional dialogue and expert consultation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Transparency in methodology and limitation disclosure</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Practical applicability for government and critical infrastructure contexts</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
                Access and citation
              </h2>
              <div className="space-y-4 text-base text-foreground font-body leading-relaxed">
                <p>
                  Technical papers are available to institutional stakeholders through structured engagement pathways. Access requests should specify institutional affiliation, intended use, and relevant evaluation context.
                </p>
                <p>
                  Citation of published materials should follow standard academic conventions with appropriate attribution to Northflow Technologies.
                </p>
              </div>
            </section>

            <section className="bg-card border border-border rounded-sm p-8 mt-12">
              <div className="text-center">
                <h2 className="text-2xl font-headline font-semibold text-foreground mb-4">
                  Request publication access
                </h2>
                <p className="text-base text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
                  Looking for research collaboration or institutional deployment? Request a briefing.
                </p>
                <p className="text-xs text-muted-foreground font-body mb-6">
                  Research dialogue · Institutional collaboration · Funding discussions
                </p>
                <a
                  href="/engage/request-access?source=technical-papers"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-cta font-medium rounded-sm hover:bg-primary/90 transition-all duration-200 ease-institutional hover:-translate-y-0.5 hover:shadow-hover"
                >
                  Request publication access
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}