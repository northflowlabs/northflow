import Icon from '@/components/ui/AppIcon';

interface TrustIndicator {
  id: number;
  icon: string;
  label: string;
  description: string;
}

interface TrustIndicatorsSectionProps {
  className?: string;
}

const TrustIndicatorsSection = ({ className = '' }: TrustIndicatorsSectionProps) => {
  const indicators: TrustIndicator[] = [
    {
      id: 1,
      icon: 'check-badge',
      label: 'ISO/IEC 27001 - Information security management design alignment',
      description: 'Structural design alignment for institutional security control models.',
    },
    {
      id: 2,
      icon: 'shield-check',
      label: 'GDPR - European data protection regulation architecture',
      description: 'Design alignment for lawful processing and governance-ready data handling.',
    },
    {
      id: 3,
      icon: 'building-library',
      label: 'NIS2 Directive - Network and information systems security design principles',
      description: 'Architecture patterns aligned with resilience and incident governance intent.',
    },
    {
      id: 4,
      icon: 'document-check',
      label: 'DORA - Digital Operational Resilience Act framework alignment',
      description: 'Operational resilience design alignment for critical digital service contexts.',
    },
  ];

  return (
    <section className={`bg-card py-20 lg:py-24 border-t border-border ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-semibold text-foreground mb-4">
            Architecture designed for European regulatory environments
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Northflow systems are developed with structural alignment to relevant European
            regulatory and governance standards. Standards references describe design intent and
            target operating models. Formal certifications are pursued and verified where
            applicable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((indicator) => (
            <div
              key={indicator.id}
              className="bg-background p-6 rounded-sm border border-border text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <Icon
                  name={indicator.icon as any}
                  size={24}
                  variant="solid"
                  className="text-primary"
                />
              </div>
              <h3 className="text-base font-headline font-semibold text-foreground mb-2">
                {indicator.label}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {indicator.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground font-body max-w-3xl mx-auto italic">
            Standards references describe design alignment and target operating models. Formal
            certifications are pursued and verified where applicable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicatorsSection;
