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
        'Systematic hypothesis generation and structured search across complex data environments.',
    },
    {
      id: 2,
      icon: 'check-badge',
      title: 'Verifiable evaluation',
      description:
        'Deterministic execution, explicit audit trails, and reproducible evidence artifacts.',
    },
    {
      id: 3,
      icon: 'server-stack',
      title: 'Operational resilience',
      description:
        'Architectures designed for regulated, mission-critical, and long-horizon contexts.',
    },
    {
      id: 4,
      icon: 'globe-alt',
      title: 'Research integration',
      description:
        'Applied research methodologies bridging Earth Observation, climate systems, and decision support.',
    },
  ];

  return (
    <section className={`bg-card py-20 lg:py-24 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-semibold text-foreground mb-4">
            Four pillars framework
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Core capabilities defining our institutional approach to evidence infrastructure.
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

        {/* Flagship Research Initiative: Project HGE Callout Section */}
        <div className="mt-12 bg-background border border-primary/20 rounded-sm p-8 lg:p-10">
          <div className="max-w-4xl">
            <h3 className="text-2xl lg:text-3xl font-headline font-semibold text-foreground mb-4">
              Flagship research initiative: Project HGE
            </h3>
            <p className="text-base text-muted-foreground font-body leading-relaxed mb-6">
              Powered by HGE (Hypothesis Generation Engine), an instrument-agnostic system for
              structured, machine-driven hypothesis discovery and reproducible evaluation. Initially
              validated on astronomical catalog data, HGE is now being extended to Earth Observation
              datasets within climate and resilience domains.
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
            </ul>

            <Link
              href="/research/hge"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-cta font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              Explore Project HGE
              <Icon name="arrow-right" size={18} className="text-primary-foreground" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourPillarsSection;
