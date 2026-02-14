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
              <p>
                Northflow operates from a Nordic regulatory foundation with active engagement across
                European institutional contexts.
              </p>
              <p>
                The company develops research-grade and applied systems designed for resilience,
                structured evaluation, and operational integrity under uncertainty.
              </p>
              <p>
                Our approach prioritizes long-horizon infrastructure thinking: systems must remain
                stable across political transitions, regulatory shifts, and evolving institutional
                requirements.
              </p>
              <p>
                We work with environments where continuity, auditability, and structural clarity are
                primary design constraints.
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
                  Formalization of structured hypothesis and evaluation architecture
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-20 text-sm font-cta font-medium text-primary">
                  Phase 2
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  Validation across astronomical and Earth observation datasets
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-20 text-sm font-cta font-medium text-primary">
                  Phase 3
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  Governance and reproducibility framework consolidation
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-20 text-sm font-cta font-medium text-primary">
                  Phase 4
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  Institutional adaptation within European regulatory contexts
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-20 text-sm font-cta font-medium text-primary">
                  Ongoing
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  Long-horizon methodological refinement and domain extension
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStorySection;
