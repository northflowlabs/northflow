import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface HGETechnicalSpecificationsProps {
  className?: string;
}

const HGETechnicalSpecifications = ({ className = '' }: HGETechnicalSpecificationsProps) => {
  const coreCapabilities = [
    'Structured hypothesis representation (JSON-LD schemas)',
    'Bayesian experiment prioritization',
    'Deterministic execution engine',
    'Cryptographic evidence signing (ECDSA)',
    'Provenance tracking (W3C PROV-aligned)',
    'Drift detection and confidence updating',
    'Governance modes: disabled / logging / enforced',
  ];

  const integrationCapabilities = [
    'Instrument-agnostic backend interface',
    'REST API for experiment orchestration',
    'Webhook callbacks for asynchronous instruments',
    'Containerized deployment',
    'PostgreSQL/MongoDB persistence options',
    'GDPR-aligned data handling',
  ];

  return (
    <section className={`bg-card border-y border-border py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-cta font-semibold tracking-[0.16em] text-primary mb-3">
              SPECIFICATIONS
            </p>
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
              Technical foundation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background border border-border rounded-sm p-7">
              <h3 className="text-xl font-headline font-semibold text-foreground mb-4">
                Core capabilities
              </h3>
              <ul className="space-y-3">
                {coreCapabilities.map((capability) => (
                  <li key={capability} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-sm flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Icon
                        name="CheckCircleIcon"
                        size={12}
                        variant="outline"
                        className="text-primary"
                      />
                    </div>
                    <span className="text-sm font-body text-foreground leading-relaxed">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background border border-border rounded-sm p-7">
              <h3 className="text-xl font-headline font-semibold text-foreground mb-4">Integration</h3>
              <ul className="space-y-3">
                {integrationCapabilities.map((capability) => (
                  <li key={capability} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-sm flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Icon
                        name="CheckCircleIcon"
                        size={12}
                        variant="outline"
                        className="text-primary"
                      />
                    </div>
                    <span className="text-sm font-body text-foreground leading-relaxed">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HGETechnicalSpecifications;
