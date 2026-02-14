import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Institutional Security & Operational Assurance | Northflow',
  description:
    'Security practices supporting institutional-grade digital infrastructure, auditability, and operational assurance across regulated environments.',
};

export default function SecurityPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <div className="max-w-[1200px] mx-auto px-8 py-16">
          <div className="max-w-[900px]">
            <h1 className="text-4xl font-headline font-bold text-foreground mb-4">Security</h1>
            <p className="text-lg text-muted-foreground font-body mb-12 leading-relaxed">
              Security practices and standards for Northflow Technologies institutional
              infrastructure.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
                Security philosophy
              </h2>
              <div className="space-y-4 text-base text-foreground font-body leading-relaxed">
                <p>
                  Security is approached as a foundational design principle. Systems and operational
                  frameworks are developed with security requirements embedded throughout the
                  architecture, governance structures, and operational procedures.
                </p>
                <p>This philosophy prioritises:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Security by design rather than retrospective implementation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Defence in depth through layered security controls</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Principle of least privilege in access control</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Continuous monitoring and threat assessment</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Transparency appropriate to institutional engagement</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
                Architectural principles
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                        Isolation and segmentation
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        System architecture employs isolation and segmentation principles to contain
                        potential security incidents and limit lateral movement. Critical functions
                        are separated from general operations through architectural boundaries.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                        Cryptographic protection
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Data protection employs cryptographic controls aligned with European
                        standards. Encryption is applied to data at rest and in transit, with key
                        management procedures designed for institutional requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                        Access control and authentication
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Access control mechanisms enforce least privilege principles with
                        multi-factor authentication for privileged operations. Identity and access
                        management procedures align with institutional governance requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                        Audit and monitoring
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Comprehensive audit logging and monitoring capabilities provide visibility
                        into system operations, access patterns, and security events. Audit trails
                        are maintained in accordance with regulatory retention requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">5</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                        Incident response
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Incident response procedures are designed to align with European regulatory
                        requirements, including detection, containment, investigation, and
                        notification protocols appropriate to institutional context.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-card border border-border rounded-lg p-6">
                  <svg
                    className="w-full h-64"
                    viewBox="0 0 800 300"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="3"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3, 0 6" fill="#64748b" />
                      </marker>
                    </defs>

                    {/* Layer 1: Perimeter */}
                    <rect
                      x="50"
                      y="20"
                      width="700"
                      height="60"
                      fill="#ffffff"
                      stroke="#64748b"
                      strokeWidth="1.5"
                      rx="4"
                    />
                    <text
                      x="400"
                      y="55"
                      textAnchor="middle"
                      fill="#334155"
                      fontSize="14"
                      fontWeight="600"
                    >
                      Perimeter Security & Access Control
                    </text>

                    {/* Layer 2: Application */}
                    <rect
                      x="50"
                      y="100"
                      width="700"
                      height="60"
                      fill="#ffffff"
                      stroke="#64748b"
                      strokeWidth="1.5"
                      rx="4"
                    />
                    <text
                      x="400"
                      y="135"
                      textAnchor="middle"
                      fill="#334155"
                      fontSize="14"
                      fontWeight="600"
                    >
                      Application Security & Authentication
                    </text>

                    {/* Layer 3: Data */}
                    <rect
                      x="50"
                      y="180"
                      width="700"
                      height="60"
                      fill="#ffffff"
                      stroke="#64748b"
                      strokeWidth="1.5"
                      rx="4"
                    />
                    <text
                      x="400"
                      y="215"
                      textAnchor="middle"
                      fill="#334155"
                      fontSize="14"
                      fontWeight="600"
                    >
                      Data Protection & Cryptographic Controls
                    </text>

                    {/* Layer 4: Monitoring */}
                    <rect
                      x="50"
                      y="260"
                      width="340"
                      height="30"
                      fill="#ffffff"
                      stroke="#64748b"
                      strokeWidth="1.5"
                      rx="4"
                    />
                    <text
                      x="220"
                      y="280"
                      textAnchor="middle"
                      fill="#334155"
                      fontSize="12"
                      fontWeight="600"
                    >
                      Audit & Monitoring
                    </text>

                    <rect
                      x="410"
                      y="260"
                      width="340"
                      height="30"
                      fill="#ffffff"
                      stroke="#64748b"
                      strokeWidth="1.5"
                      rx="4"
                    />
                    <text
                      x="580"
                      y="280"
                      textAnchor="middle"
                      fill="#334155"
                      fontSize="12"
                      fontWeight="600"
                    >
                      Incident Response
                    </text>

                    {/* Arrows */}
                    <line
                      x1="400"
                      y1="80"
                      x2="400"
                      y2="95"
                      stroke="#64748b"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                    />
                    <line
                      x1="400"
                      y1="160"
                      x2="400"
                      y2="175"
                      stroke="#64748b"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                    />
                    <line
                      x1="400"
                      y1="240"
                      x2="220"
                      y2="255"
                      stroke="#64748b"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                    />
                    <line
                      x1="400"
                      y1="240"
                      x2="580"
                      y2="255"
                      stroke="#64748b"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                    />
                  </svg>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Defence-in-depth security architecture with layered controls
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
                Security maturity
              </h2>
              <div className="space-y-4 text-base text-foreground font-body leading-relaxed">
                <p>
                  Security maturity is developed through systematic implementation of controls,
                  continuous improvement processes, and alignment with recognised security
                  frameworks.
                </p>
                <p>
                  Security practices benefit from research-grade validation workflows and provenance
                  concepts developed in Project HGE.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                      Risk management
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Systematic risk assessment, threat modelling, and mitigation planning aligned
                      with institutional risk tolerance.
                    </p>
                  </div>
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                      Vulnerability management
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Regular security assessments, vulnerability scanning, and remediation
                      procedures maintaining security posture.
                    </p>
                  </div>
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                      Security governance
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Governance structures, policy frameworks, and oversight mechanisms ensuring
                      security accountability.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
                Controlled disclosure
              </h2>
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="space-y-4 text-base text-foreground font-body leading-relaxed">
                  <p>
                    Detailed security architecture, control implementation specifics, and
                    vulnerability management procedures are subject to controlled disclosure
                    protocols.
                  </p>
                  <p>This approach balances:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Transparency appropriate for institutional evaluation and procurement
                        processes
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Protection of operational security details that could facilitate threat
                        activity
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Compliance with responsible disclosure principles</span>
                    </li>
                  </ul>
                  <p>
                    Enhanced security documentation is available to qualified institutional
                    stakeholders through structured engagement pathways, subject to appropriate
                    confidentiality protocols.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-sm p-8 mt-12">
              <div className="text-center">
                <h2 className="text-2xl font-headline font-semibold text-foreground mb-4">
                  Institutional security consultation
                </h2>
                <p className="text-base text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
                  Looking for research collaboration or institutional deployment? Request a
                  briefing.
                </p>
                <p className="text-xs text-muted-foreground font-body mb-6">
                  Research dialogue · Institutional collaboration · Funding discussions
                </p>
                <a
                  href="/engage"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-cta font-medium rounded-sm hover:bg-primary/90 transition-all duration-200 ease-institutional hover:-translate-y-0.5 hover:shadow-hover"
                >
                  Request briefing
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
