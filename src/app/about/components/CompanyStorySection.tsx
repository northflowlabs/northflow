interface CompanyStorySectionProps {
  className?: string;
}

const CompanyStorySection = ({ className = '' }: CompanyStorySectionProps) => {
  return (
    <section className={`bg-card py-16 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-6">
              Norwegian heritage. European reach.
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>Northflow builds on research and applied systems work developed over multiple years across digital infrastructure, governance, and mission-critical environments.

              </p>
              <p>Northflow draws on long-standing experience across technology, health-related research, and organisational leadership. This experience informs an approach to digital infrastructure that prioritises auditability, governance, and long-term operational reliability.

              </p>
              <p>
                We operate from the principle that institutional technology must prioritize continuity over innovation. Systems must be designed to function during network disruptions, political transitions, and crisis scenarios. This approach has positioned Northflow as a partner for organizations that cannot accept failure.
              </p>
              <p>
                Today, we maintain operations across six European nations, supporting government entities, organizations aligned with resilience frameworks, and large asset managers with infrastructure built for institutional requirements.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-8 border border-border">
            <h3 className="text-xl font-headline font-semibold text-foreground mb-6">
              Indicative development phases
            </h3>
            <div className="space-y-6">
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-20 text-sm font-cta font-medium text-primary">
                  Phase 1
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  Company establishment with focus on sovereign technology infrastructure
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-20 text-sm font-cta font-medium text-primary">
                  Phase 2
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  Target operating model aligned to information security management standards
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-20 text-sm font-cta font-medium text-primary">
                  Phase 3
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  Northflow Research Lab (NRL) formalized recently as internal division for advanced R&D
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-20 text-sm font-cta font-medium text-primary">
                  Phase 4
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  Regional operations expanded across Nordic and Northern European nations
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-20 text-sm font-cta font-medium text-primary">
                  Ongoing
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  Certification pathways pursued for resilience standards and institutional frameworks
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CompanyStorySection;