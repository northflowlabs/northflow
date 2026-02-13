import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Regulatory Alignment & Institutional Compliance | Northflow',
  description:
    "Northflow's compliance approach aligns digital infrastructure with European regulatory frameworks, governance requirements, and long-term accountability.",
};

export default function CompliancePage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
          <div className="max-w-[1400px] mx-auto px-8 py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 px-4 py-2 rounded-sm mb-6">
                <span className="text-xs font-cta font-medium tracking-wide uppercase">
                  Regulatory alignment
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-headline font-semibold mb-6 leading-tight">
                Compliance as design principle
              </h1>
              <p className="text-lg font-body text-primary-foreground/90 leading-relaxed mb-4">
                Northflow approaches regulatory alignment as foundational system design, not
                retrospective requirement. Architectures are developed with European regulatory
                frameworks embedded throughout — enabling institutional deployment in governed
                environments.
              </p>
              <p className="text-sm font-body text-primary-foreground/70 leading-relaxed italic">
                Standards references describe design intent and target operating models. Formal
                certifications pursued where applicable.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-8 py-16">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
                Compliance as design principle
              </h2>
              <div className="space-y-4 text-base text-foreground font-body leading-relaxed">
                <p>
                  Northflow Technologies approaches regulatory compliance as a foundational design
                  principle rather than a retrospective requirement.
                </p>
                <p>
                  Systems and operational frameworks are developed with regulatory alignment
                  embedded throughout the design process, ensuring that compliance considerations
                  inform architectural decisions, governance structures, and operational procedures.
                </p>
                <p>
                  Our compliance systems are informed by research workflows from Project HGE,
                  particularly around uncertainty handling and provenance tracking.
                </p>
                <p>This approach prioritises:</p>
                <ul className="space-y-2 ml-6 [&>li]:flex [&>li]:items-start [&>li]:gap-3 [&>li>span:first-child]:mt-0.5 [&>li>span:first-child]:leading-none">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Alignment with European regulatory frameworks from initial design stages
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Systematic integration of compliance requirements into technical architecture
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Transparency in methodology and limitation disclosure</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Continuous monitoring of regulatory developments and framework evolution
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
                Framework alignment
              </h2>
              <div className="space-y-4 text-base text-foreground font-body leading-relaxed">
                <p>
                  Northflow Technologies designs systems and operational frameworks to align with
                  the following regulatory and standards frameworks:
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Framework relevance varies by jurisdiction, sector, and institutional mandate.
                </p>

                <div className="mt-6 mb-8">
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-4">
                    Primary European frameworks
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-2 border-primary rounded-lg p-6 bg-card shadow-sm">
                      <h4 className="text-lg font-headline font-semibold text-foreground mb-3">
                        GDPR — Data protection design alignment
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        General Data Protection Regulation
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        Data protection principles, processing requirements, and individual rights
                        embedded in system architecture.
                      </p>
                    </div>
                    <div className="border-2 border-primary rounded-lg p-6 bg-card shadow-sm">
                      <h4 className="text-lg font-headline font-semibold text-foreground mb-3">
                        NIS2 Directive — Security design alignment
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Network and information security
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        Security requirements, incident reporting, and risk management measures
                        aligned with European cybersecurity directive.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-4">
                    Supporting frameworks
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-border rounded-lg p-6 bg-card">
                      <h4 className="text-lg font-headline font-semibold text-foreground mb-3">
                        ISO/IEC 27001 — Information security design alignment
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Information security management
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        Security controls, risk management methodologies, and information security
                        governance aligned with international standards.
                      </p>
                    </div>
                    <div className="border border-border rounded-lg p-6 bg-card">
                      <h4 className="text-lg font-headline font-semibold text-foreground mb-3">
                        ISO 22301 — Business continuity design alignment
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Business continuity management
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        Continuity planning, resilience frameworks, and recovery procedures designed
                        to align with business continuity standards.
                      </p>
                    </div>
                    <div className="border border-border rounded-lg p-6 bg-card">
                      <h4 className="text-lg font-headline font-semibold text-foreground mb-3">
                        DORA — Operational resilience design alignment
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Digital Operational Resilience Act
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        Operational resilience requirements, testing frameworks, and third-party
                        risk management aligned with financial sector regulation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
                Alignment versus certification
              </h2>
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="space-y-4 text-base text-foreground font-body leading-relaxed">
                  <p className="font-semibold">Important clarification:</p>
                  <p>
                    Framework alignment describes the design approach and operational methodology
                    employed by Northflow Technologies. It does not constitute formal certification,
                    accreditation, or regulatory approval.
                  </p>
                  <p>Alignment indicates that:</p>
                  <ul className="space-y-2 ml-6 [&>li]:flex [&>li]:items-start [&>li]:gap-3 [&>li>span:first-child]:mt-0.5 [&>li>span:first-child]:leading-none">
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Systems are designed with framework requirements as foundational principles
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Operational procedures incorporate framework methodologies</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Documentation and governance structures reflect framework standards
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Continuous monitoring of regulatory developments</span>
                    </li>
                  </ul>
                  <p>Alignment does not indicate:</p>
                  <ul className="space-y-2 ml-6 [&>li]:flex [&>li]:items-start [&>li]:gap-3 [&>li>span:first-child]:mt-0.5 [&>li>span:first-child]:leading-none">
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Formal certification by accredited bodies (unless explicitly stated)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Regulatory approval or endorsement</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Legal compliance guarantees for specific use cases</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Audit completion or attestation</span>
                    </li>
                  </ul>
                  <p>
                    Institutional stakeholders should conduct independent compliance assessment
                    appropriate to their specific regulatory context and operational requirements.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
                Compliance documentation
              </h2>
              <div className="space-y-4 text-base text-foreground font-body leading-relaxed">
                <p>
                  Detailed compliance documentation, including framework mapping, control
                  implementation details, and audit trail materials, is available to institutional
                  stakeholders through structured engagement.
                </p>
                <p>Documentation includes:</p>
                <ul className="space-y-2 ml-6 [&>li]:flex [&>li]:items-start [&>li]:gap-3 [&>li>span:first-child]:mt-0.5 [&>li>span:first-child]:leading-none">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Framework requirement mapping to system architecture</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Control implementation methodologies and evidence</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Risk assessment and mitigation procedures</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Audit trail and change management records</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
                Regulatory monitoring
              </h2>
              <div className="space-y-4 text-base text-foreground font-body leading-relaxed">
                <p>
                  Northflow Technologies maintains systematic monitoring of regulatory developments,
                  framework updates, and emerging compliance requirements relevant to European
                  digital infrastructure.
                </p>
                <p>
                  This monitoring informs ongoing system evolution and ensures that alignment
                  remains current with regulatory expectations.
                </p>
              </div>
            </section>

            <section className="bg-card border border-border rounded-sm p-8 mt-12">
              <div className="text-center">
                <h2 className="text-2xl font-headline font-semibold text-foreground mb-4">
                  Compliance consultation
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
                  Initiate compliance inquiry
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
