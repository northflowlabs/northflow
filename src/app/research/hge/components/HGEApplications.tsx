import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface HGEApplicationsProps {
  className?: string;
}

const HGEApplications = ({ className = '' }: HGEApplicationsProps) => {
  const features = [
    {
      title: 'Explicit hypothesis representation',
      description:
        'Structured, machine-readable hypotheses enabling formal evaluation and cross-domain application',
      icon: 'sparkles',
    },
    {
      title: 'Information-gain prioritization',
      description:
        'Experiments ranked by expected epistemic value, respecting resource constraints and operational limits',
      icon: 'beaker',
    },
    {
      title: 'Deterministic execution',
      description:
        'Identical inputs produce identical outputs — full replay capability ensures independent verification',
      icon: 'cpu-chip',
    },
    {
      title: 'Uncertainty-aware provenance',
      description:
        'Complete audit trail from raw data to conclusion, with confidence tracking and drift detection',
      icon: 'arrow-path',
    },
  ];

  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-cta font-semibold tracking-[0.16em] text-primary mb-3">
              THE ENGINE
            </p>
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
              Infrastructure for structured discovery
            </h2>
            <p className="text-lg font-body text-muted-foreground leading-relaxed mb-4">
              HGE is not a product. It is a methodological program for automated scientific
              discovery — a domain-agnostic system that formalizes hypothesis generation,
              evaluation, and verification under uncertainty. It enables institutions to conduct
              systematic, resource-efficient exploration of complex problem spaces where traditional
              approaches are limited by cost, time, or physical constraints.
            </p>
            <p className="text-lg font-body text-muted-foreground leading-relaxed">
              The engine is instrument-agnostic by design. It has been operationally validated on
              astronomical catalog data and is now being adapted to Earth Observation, climate
              resilience, and marine systems. Every execution produces signed evidence bundles —
              tamper-resistant, auditable artifacts designed for institutional review, regulatory
              scrutiny, and cross-border verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-card border border-border rounded-sm p-7">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} size={20} variant="outline" className="text-primary" />
                </div>
                <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HGEApplications;
