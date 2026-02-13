import Icon from '@/components/ui/AppIcon';

interface ResearchHighlightSectionProps {
  className?: string;
}

const ResearchHighlightSection = ({ className = '' }: ResearchHighlightSectionProps) => {
  return (
    <section className={`bg-background py-20 lg:py-24 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-sm mb-6">
              <Icon name="beaker" size={20} variant="outline" className="text-primary" />
              <span className="text-sm font-cta font-medium text-primary">
                Northflow Research Lab
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-headline font-semibold text-foreground mb-6">
              Advanced research in climate and space-enabled systems
            </h2>
            <p className="text-base text-muted-foreground font-body leading-relaxed mb-8">
              Northflow develops structured methodologies for institutional evidence generation
              across climate resilience, Earth Observation, and astronomical observation domains.
              Research areas include structured hypothesis discovery, audit-grade evaluation
              systems, and decision architectures for uncertain and large-scale environments.
            </p>
            <a
              href="/research"
              className="inline-flex items-center space-x-2 text-primary font-cta font-medium hover:underline transition-all duration-200"
            >
              <span>Explore research capabilities →</span>
            </a>
          </div>

          <div className="relative bg-card p-8 rounded-sm border border-border overflow-hidden">
            {/* Content */}
            <div className="relative z-10 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="document-text" size={20} variant="outline" className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                    Policy framework research
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    Analysis of regulatory environments impacting climate, space, infrastructure,
                    and institutional data systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="cpu-chip" size={20} variant="outline" className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                    Systems architecture
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    Development of verifiable infrastructure patterns for mission-critical and
                    research environments.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="academic-cap" size={20} variant="outline" className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                    Academic collaboration
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    Engagement with research institutions to validate and publish methodological
                    advances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlightSection;
