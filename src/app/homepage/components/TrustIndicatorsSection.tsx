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
      label: 'Designed to align with ISO 27001',
      description: 'Information security management alignment.',
    },
    {
      id: 2,
      icon: 'shield-check',
      label: 'GDPR-aligned data protection approach',
      description: 'European data protection regulation adherence.',
    },
    {
      id: 3,
      icon: 'building-library',
      label: 'Mapped to relevant European governance frameworks',
      description: 'Institutional and cross-border regulatory considerations.',
    },
    {
      id: 4,
      icon: 'document-check',
      label: 'Audit-ready',
      description: 'Comprehensive governance and transparency architecture.',
    },
  ];

  return (
    <section className={`bg-card py-20 lg:py-24 border-t border-border ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-semibold text-foreground mb-4">
            Standards alignment framework
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Systems built with controls mapped to relevant European regulatory and governance
            standards.
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
