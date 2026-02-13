import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Pillar {
  id: number;
  icon: string;
  title: string;
  description: string;
  isFlagship?: boolean;
  ctaLabel?: string;
  ctaLink?: string;
}

interface FourPillarsSectionProps {
  className?: string;
}

const FourPillarsSection = ({ className = '' }: FourPillarsSectionProps) => {
  const pillars: Pillar[] = [
    {
      id: 1,
      icon: 'magnifying-glass',
      title: 'Structured discovery',
      description:
        'Systematic hypothesis generation and prioritisation across complex observational spaces. Explicit representation enables formal evaluation, institutional review, and cross-domain application.',
    },
    {
      id: 2,
      icon: 'check-badge',
      title: 'Verifiable evaluation',
      description:
        'Deterministic execution producing identical results under identical conditions. Full replay capability ensures any finding can be independently verified. Audit-grade evidence outputs as standard.',
    },
    {
      id: 3,
      icon: 'server-stack',
      title: 'Operational resilience',
      description:
        'Architectures designed for regulated, mission-critical, and long-horizon institutional contexts. Governance modes, failover mechanisms, and continuity planning from inception.',
    },
    {
      id: 4,
      icon: 'globe-alt',
      title: 'Research integration',
      description:
        'Applied research methodologies bridging structured discovery, institutional evidence systems, and domain-specific decision support. Validated across astronomical observation and Earth Observation datasets.',
    },
  ];

  return (
    <section className={`bg-card py-20 lg:py-24 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-semibold text-foreground mb-4">
            Four pillars of institutional evidence infrastructure
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Core capabilities defining Northflow&apos;s approach to structured discovery and verifiable
            knowledge production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-background p-8 rounded-sm border border-border transition-all duration-200 hover:border-primary hover:-translate-y-1 flex flex-col"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-6">
                <Icon
                  name={pillar.icon as any}
                  size={24}
                  variant="outline"
                  className="text-primary"
                />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-headline font-semibold text-foreground">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Flagship Research Initiative: Project HGE */}
        <div className="mt-12 bg-background border border-primary/20 rounded-sm p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
            <div>
              <p className="text-xs font-cta font-semibold tracking-[0.16em] text-primary mb-3">
                THE ENGINE
              </p>
              <h3 className="text-2xl lg:text-3xl font-headline font-semibold text-foreground mb-4">
                Powered by HGE - Hypothesis Generation Engine
              </h3>

              <p className="text-base text-muted-foreground font-body leading-relaxed mb-4">
                HGE is an instrument-agnostic system for structured, machine-driven hypothesis
                discovery and reproducible evaluation. It converts complex observational data into
                verifiable evidence through explicit hypothesis representation,
                information-gain-driven prioritisation, deterministic execution, and
                uncertainty-aware provenance tracking.
              </p>
              <p className="text-base text-muted-foreground font-body leading-relaxed mb-4">
                The engine is domain-agnostic by architecture. It has been validated on astronomical
                catalog data and is now being adapted to Earth Observation, climate resilience, and
                marine systems. Future domains are structurally enabled without requiring engine
                modification.
              </p>
            </div>

            <div className="bg-card border border-border rounded-sm p-6 lg:p-8 h-full flex flex-col">
              <p className="text-base text-muted-foreground font-body leading-relaxed mb-6">
                Every HGE execution produces signed evidence bundles - tamper-resistant, auditable
                artifacts designed for institutional review, regulatory scrutiny, and cross-border
                verification.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Icon name="check-circle" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground font-body">
                    Structured hypothesis search with explicit representation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="check-circle" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground font-body">
                    Deterministic execution with signed evidence artifacts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="check-circle" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground font-body">
                    Designed for institutional reproducibility and auditability
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="check-circle" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground font-body">
                    Validated on Gaia DR3 - operational since 2025
                  </span>
                </li>
              </ul>

              <Link
                href="/research/hge"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-cta font-medium rounded-sm hover:bg-primary/90 transition-colors"
              >
                Explore Project HGE →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourPillarsSection;
