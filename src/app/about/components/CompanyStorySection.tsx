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
                European institutional contexts. The company develops research-grade and applied
                systems designed for resilience, structured evaluation, and operational integrity
                under uncertainty.
              </p>
              <p>
                Our approach prioritises long-horizon infrastructure thinking: systems must remain
                stable across political transitions, regulatory shifts, and evolving institutional
                requirements. We work with environments where continuity, auditability, and
                structural clarity are primary design constraints.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-8 border border-border">
            <h3 className="text-xl font-headline font-semibold text-foreground mb-6">
              Indicative development phases
            </h3>
            <div className="space-y-6">
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-24 text-sm font-cta font-medium text-primary">
                  Phase 1
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  <span className="font-medium text-foreground">Foundation (completed)</span>
                  <br />
                  Formalisation of HGE architecture and core engine validation. Structured
                  hypothesis representation system, evidence planning module, deterministic replay
                  system, and signed evidence bundle format all operational. Validated against Gaia
                  DR3 astronomical catalog.
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-24 text-sm font-cta font-medium text-primary">
                  Phase 2
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  <span className="font-medium text-foreground">Domain adaptation (current)</span>
                  <br />
                  Extension of validated engine to Earth Observation and climate resilience domains.
                  ESA Sentinel data adaptation in progress. ESA concept note drafted. Academic
                  engagement initiated. Governance and reproducibility framework under
                  consolidation.
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-24 text-sm font-cta font-medium text-primary">
                  Phase 3
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  <span className="font-medium text-foreground">
                    Institutional validation (next)
                  </span>
                  <br />
                  Formal institutional pilot preparation. Publication of validation artifacts and
                  methodology documentation. Horizon Europe consortium preparation. First
                  institutional partnerships confirmed.
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-24 text-sm font-cta font-medium text-primary">
                  Phase 4
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  <span className="font-medium text-foreground">
                    Institutional deployment (planned)
                  </span>
                  <br />
                  Scaled institutional contracts within European regulatory contexts. Controlled
                  domain expansion to marine systems and secondary validation domains.
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-24 text-sm font-cta font-medium text-primary">
                  Ongoing
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  Long-horizon methodological refinement, domain adapter development, and research
                  publication programme.
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
