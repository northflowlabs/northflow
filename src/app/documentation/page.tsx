import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'System Architecture & Integration Guides | Northflow Docs',
  description:
    'Technical documentation for Project HGE and institutional evidence infrastructure. System architecture, experiment specifications, validation workflows, and integration patterns.',
  path: '/documentation',
  ogType: 'website',
  ogImage: 'https://northflow.no/assets/images/Northflow%20-%20Earth%20Sat.jpg',
});

export default function DocumentationPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
          <div className="max-w-[1400px] mx-auto px-8 py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 px-4 py-2 rounded-sm mb-6">
                <span className="text-xs font-cta font-medium tracking-wide uppercase">
                  Technical documentation
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-headline font-semibold mb-6 leading-tight">
                System architecture and integration guides
              </h1>
              <p className="text-lg font-body text-primary-foreground/90 leading-relaxed">
                Technical documentation for Project HGE and institutional evidence infrastructure.
                Documentation covers system architecture, experiment specifications, validation
                workflows, and integration patterns.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-8 py-16">
          <div className="space-y-12">
            {/* Project HGE documentation section */}
            <section className="bg-accent/5 border border-accent/20 rounded-lg p-8">
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
                Project HGE documentation
              </h2>
              <div className="space-y-6 text-base text-foreground font-body leading-relaxed">
                <p>
                  Project HGE (Hypothesis Generation Engine) represents Northflow's automated
                  scientific discovery infrastructure. The system operationalizes the scientific
                  method through hypothesis-driven experimentation, executing on real instruments
                  including remote quantum hardware used as a demanding validation environment. HGE
                  provides instrument-grade validation workflows, uncertainty-aware reasoning, and
                  comprehensive provenance tracking across experimental cycles.
                </p>
                <p>
                  This documentation covers the system architecture, experiment specification
                  schemas, result data structures, and integration patterns for connecting
                  instrument backends. The methodology emphasizes rigorous validation, drift
                  detection, and evidence-based confidence updates throughout the discovery process.
                </p>
                <p>
                  Integration guidance addresses instrument backend interfaces, data flow patterns,
                  and validation workflows that enable HGE to coordinate experiments across diverse
                  physical systems while maintaining provenance and uncertainty quantification.
                </p>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                      Available documentation
                    </h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li>
                        <span className="text-foreground font-medium">HGE architecture overview</span>
                        <p>
                          System design, component interactions, and data flow patterns for the
                          Hypothesis Generation Engine.
                        </p>
                        <p className="text-xs italic">Status: Available — Version 1.2</p>
                      </li>
                      <li>
                        <span className="text-foreground font-medium">
                          Evidence bundle specification
                        </span>
                        <p>
                          Format specification for signed evidence artifacts including provenance
                          tracking and verification procedures.
                        </p>
                        <p className="text-xs italic">Status: Available — Version 2.0</p>
                      </li>
                      <li>
                        <span className="text-foreground font-medium">
                          Experiment specification schema
                        </span>
                        <p>
                          JSON schema for hypothesis representation, experiment design, and result
                          interpretation.
                        </p>
                        <p className="text-xs italic">Status: Available — Version 1.0</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                      In development
                    </h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li>
                        <span className="text-foreground font-medium">Sentinel data integration guide</span>
                        <p>
                          Adapter specifications for ESA Sentinel Earth Observation data ingestion
                          and preprocessing.
                        </p>
                        <p className="text-xs italic">Status: Draft — Expected March 2026</p>
                      </li>
                      <li>
                        <span className="text-foreground font-medium">Instrument backend interface</span>
                        <p>
                          Technical specification for connecting physical instruments and data
                          sources to HGE.
                        </p>
                        <p className="text-xs italic">
                          Status: In development — Expected April 2026
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                      Planned
                    </h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li>
                        <span className="text-foreground font-medium">
                          Validation workflow automation
                        </span>
                        <p>
                          Documentation for automated verification pipeline and deterministic replay
                          systems.
                        </p>
                        <p className="text-xs italic">Status: Planned — Expected Q2 2026</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
                Documentation scope
              </h2>
              <div className="space-y-4 text-base text-foreground font-body leading-relaxed">
                <p>
                  Structured documentation enables institutional oversight, audit readiness, and
                  long-term operational continuity.
                </p>
                <p>
                  Northflow Technologies maintains comprehensive documentation covering system
                  architecture, operational procedures, governance frameworks, and compliance
                  methodologies.
                </p>
                <p>
                  Documentation is organised into tiers based on institutional requirements and
                  engagement level:
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                      Public institutional materials
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Framework overviews, validation summaries, and general system descriptions.
                    </p>
                  </div>
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                      Structured engagement
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Technical specifications, implementation guides, and operational procedures
                      provided through structured engagement.
                    </p>
                  </div>
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                      Controlled disclosure
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Detailed architectural documentation and security specifications subject to
                      qualification requirements.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
                Documentation lifecycle
              </h2>
              <div className="space-y-4 text-base text-foreground font-body leading-relaxed">
                <p>
                  Documentation follows a structured lifecycle ensuring accuracy, currency, and
                  institutional transparency:
                </p>

                <div className="mt-8 bg-card border border-border rounded-lg p-6">
                  <svg
                    className="w-full h-48"
                    viewBox="0 0 800 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <marker
                        id="arrow"
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="3"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3, 0 6" fill="#64748b" />
                      </marker>
                    </defs>

                    {/* Design */}
                    <rect
                      x="20"
                      y="60"
                      width="140"
                      height="80"
                      fill="white"
                      stroke="#cbd5e1"
                      strokeWidth="1.5"
                      rx="4"
                    />
                    <text
                      x="90"
                      y="90"
                      textAnchor="middle"
                      fill="#1e293b"
                      fontSize="14"
                      fontWeight="600"
                    >
                      Design
                    </text>
                    <text x="90" y="110" textAnchor="middle" fill="#64748b" fontSize="11">
                      Documentation creation
                    </text>
                    <text x="90" y="125" textAnchor="middle" fill="#64748b" fontSize="11">
                      and initial validation
                    </text>

                    {/* Validate */}
                    <rect
                      x="200"
                      y="60"
                      width="140"
                      height="80"
                      fill="white"
                      stroke="#cbd5e1"
                      strokeWidth="1.5"
                      rx="4"
                    />
                    <text
                      x="270"
                      y="90"
                      textAnchor="middle"
                      fill="#1e293b"
                      fontSize="14"
                      fontWeight="600"
                    >
                      Validate
                    </text>
                    <text x="270" y="110" textAnchor="middle" fill="#64748b" fontSize="11">
                      Version control and
                    </text>
                    <text x="270" y="125" textAnchor="middle" fill="#64748b" fontSize="11">
                      change management
                    </text>

                    {/* Maintain */}
                    <rect
                      x="380"
                      y="60"
                      width="140"
                      height="80"
                      fill="white"
                      stroke="#cbd5e1"
                      strokeWidth="1.5"
                      rx="4"
                    />
                    <text
                      x="450"
                      y="90"
                      textAnchor="middle"
                      fill="#1e293b"
                      fontSize="14"
                      fontWeight="600"
                    >
                      Maintain
                    </text>
                    <text x="450" y="110" textAnchor="middle" fill="#64748b" fontSize="11">
                      Controlled distribution
                    </text>
                    <text x="450" y="125" textAnchor="middle" fill="#64748b" fontSize="11">
                      and access
                    </text>

                    {/* Govern */}
                    <rect
                      x="560"
                      y="60"
                      width="140"
                      height="80"
                      fill="white"
                      stroke="#cbd5e1"
                      strokeWidth="1.5"
                      rx="4"
                    />
                    <text
                      x="630"
                      y="90"
                      textAnchor="middle"
                      fill="#1e293b"
                      fontSize="14"
                      fontWeight="600"
                    >
                      Govern
                    </text>
                    <text x="630" y="110" textAnchor="middle" fill="#64748b" fontSize="11">
                      Review cycles and
                    </text>
                    <text x="630" y="125" textAnchor="middle" fill="#64748b" fontSize="11">
                      continuous updates
                    </text>

                    {/* Arrows */}
                    <line
                      x1="165"
                      y1="100"
                      x2="195"
                      y2="100"
                      stroke="#94a3b8"
                      strokeWidth="1.5"
                      markerEnd="url(#arrow)"
                    />
                    <line
                      x1="345"
                      y1="100"
                      x2="375"
                      y2="100"
                      stroke="#94a3b8"
                      strokeWidth="1.5"
                      markerEnd="url(#arrow)"
                    />
                    <line
                      x1="525"
                      y1="100"
                      x2="555"
                      y2="100"
                      stroke="#94a3b8"
                      strokeWidth="1.5"
                      markerEnd="url(#arrow)"
                    />

                    {/* Continuous improvement line */}
                    <line
                      x1="90"
                      y1="155"
                      x2="630"
                      y2="155"
                      stroke="#cbd5e1"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                    />
                    <text
                      x="360"
                      y="175"
                      textAnchor="middle"
                      fill="#94a3b8"
                      fontSize="10"
                      fontStyle="italic"
                    >
                      continuous improvement applied across all stages
                    </text>
                  </svg>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Documentation lifecycle: Design → Validate → Maintain → Govern (continuous
                    improvement applied across all stages)
                  </p>
                </div>

                <div className="space-y-4 mt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                        Development and validation
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Documentation is developed in parallel with system design and validated
                        through internal review processes.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                        Version control and change management
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        All documentation is subject to version control with clear change tracking
                        and audit trail maintenance.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                        Distribution and access control
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Documentation distribution follows access control protocols aligned with
                        institutional engagement requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                        Maintenance and updates
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Regular review cycles ensure documentation remains current with system
                        evolution and regulatory developments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
                Access model
              </h2>
              <div className="space-y-4 text-base text-foreground font-body leading-relaxed">
                <p>
                  Documentation access is provided through structured engagement pathways
                  appropriate to institutional requirements:
                </p>
                <div className="bg-card border border-border rounded-lg p-6 mt-6">
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-4">
                    Access qualification criteria
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Institutional affiliation with government entities, regulatory authorities,
                        or critical infrastructure operators
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Defined use case or procurement evaluation requirement
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Appropriate confidentiality and data handling protocols
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Formal engagement request through institutional channels
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-sm p-8 mt-12">
              <div className="text-center">
                <h2 className="text-2xl font-headline font-semibold text-foreground mb-4">
                  Documentation access request
                </h2>
                <p className="text-base text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
                  Looking for research collaboration or institutional deployment? Request a
                  briefing.
                </p>
                <p className="text-xs text-muted-foreground font-body mb-6">
                  Research dialogue · Institutional collaboration · Funding discussions
                </p>
                <a
                  href="/engage/request-access?source=documentation"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-cta font-medium rounded-sm hover:bg-primary/90 transition-all duration-200 ease-institutional hover:-translate-y-0.5 hover:shadow-hover"
                >
                  Initiate documentation access request
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
