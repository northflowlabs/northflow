import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ValidationItem {
  id: number;
  title: string;
  status: 'Operational' | 'In development';
  description: string;
  detailLabel: string;
  details: string[];
}

interface HGEValidationProps {
  className?: string;
}

const HGEValidation = ({ className = '' }: HGEValidationProps) => {
  const validationItems: ValidationItem[] = [
    {
      id: 1,
      title: 'Gaia DR3 astronomical validation',
      status: 'Operational',
      description:
        'HGE operationally validated against the Gaia Data Release 3 catalog — one of the largest structured scientific datasets available (1.8 billion objects). Demonstrates structured hypothesis search at scale, with deterministic execution and reproducible evidence outputs across billions of observational records.',
      detailLabel: 'Metrics',
      details: [
        '1.8 billion catalog objects',
        'Deterministic replay verified',
        'Full provenance tracking operational',
        'Validation artifact: Available',
      ],
    },
    {
      id: 2,
      title: 'Evidence verification system',
      status: 'Operational',
      description:
        '5-step verification contract producing signed evidence bundles with deterministic replay, audit invariants, policy gating, and tamper resistance. Tested against 6 adversarial attack vectors through dedicated red-team tamper suite.',
      detailLabel: 'Capabilities',
      details: [
        'Cryptographic signing',
        'Deterministic replay',
        'Audit invariants enforced',
        'Red-team validated',
      ],
    },
    {
      id: 3,
      title: 'Sentinel Earth Observation adaptation',
      status: 'In development',
      description:
        'Active adaptation of HGE for ESA Sentinel satellite data. Targeting wildfire risk modelling, deforestation verification, and infrastructure vulnerability mapping. ESA Business Applications PoC submitted February 2026.',
      detailLabel: 'Focus areas',
      details: [
        'Wildfire risk hypothesis generation',
        'Deforestation pattern detection',
        'Infrastructure stress indicators',
      ],
    },
  ];

  const getStatusClasses = (status: ValidationItem['status']) => {
    if (status === 'Operational') {
      return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    }

    return 'bg-amber-100 text-amber-800 border-amber-200';
  };

  return (
    <section id="validation-evidence" className={`bg-card border-y border-border py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-cta font-semibold tracking-[0.16em] text-primary mb-3">PROOF</p>
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
            Operational validation
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-4xl mx-auto">
            Northflow follows strict proof-before-claim discipline. HGE capabilities are backed by
            working implementations and documented validation artifacts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {validationItems.map((item) => (
            <div
              key={item.id}
              className="bg-card p-8 rounded-sm border border-border transition-all duration-200 hover:border-primary hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <h3 className="text-xl font-headline font-semibold text-foreground leading-snug">
                  {item.title}
                </h3>
                <span
                  className={`px-3 py-1 rounded-sm text-xs font-cta font-medium uppercase border whitespace-nowrap ${getStatusClasses(item.status)}`}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-5">
                {item.description}
              </p>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground font-body mb-3">{item.detailLabel}</p>
                <ul className="space-y-2">
                  {item.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon
                        name="CheckCircleIcon"
                        size={14}
                        variant="outline"
                        className="text-primary mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-foreground font-body leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HGEValidation;
