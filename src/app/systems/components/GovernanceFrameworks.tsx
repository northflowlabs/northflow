import Icon from '@/components/ui/AppIcon';

interface Framework {
  id: number;
  title: string;
  description: string;
  features: string[];
  compliance: string[];
}

interface GovernanceFrameworksProps {
  className?: string;
}

const GovernanceFrameworks = ({ className = '' }: GovernanceFrameworksProps) => {
  const frameworks: Framework[] = [
    {
      id: 1,
      title: 'Audit & compliance framework',
      description:
        'Designed to support comprehensive audit capabilities for regulatory compliance and institutional oversight requirements.',
      features: [
        'Real-time audit trail generation',
        'Automated compliance monitoring',
        'Policy enforcement mechanisms',
        'Regulatory reporting automation',
      ],
      compliance: ['ISO 27001', 'GDPR', 'SOC 2', 'NIS2'],
    },
    {
      id: 2,
      title: 'Data governance system',
      description:
        'Intended to enable enterprise data governance with full lineage tracking and jurisdictional compliance capabilities.',
      features: [
        'Data lineage tracking',
        'Jurisdictional controls',
        'Privacy by design',
        'Data classification',
      ],
      compliance: ['GDPR', 'Data Protection Act', 'CCPA', 'Privacy Shield'],
    },
    {
      id: 3,
      title: 'Access control framework',
      description:
        'Structured to allow institutional-grade access management with comprehensive audit and governance capabilities.',
      features: [
        'Role-based access control',
        'Privileged access management',
        'Access review workflows',
        'Segregation of duties',
      ],
      compliance: ['ISO 27001', 'NIST', 'CIS Controls', 'PCI DSS'],
    },
  ];

  return (
    <section className={`py-20 bg-muted ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-headline font-semibold text-foreground mb-4">
            Governance frameworks
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl">
            Governance embedded as system design, not post-deployment compliance. Frameworks
            emphasise control mapping, auditability, and institutional oversight from inception.
          </p>
        </div>

        <div className="space-y-8">
          {frameworks.map((framework) => (
            <div key={framework.id} className="bg-card border border-border rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                    {framework.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                    {framework.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {framework.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Icon
                          name="CheckCircleIcon"
                          size={16}
                          variant="solid"
                          className="text-primary flex-shrink-0 mt-0.5"
                        />
                        <span className="text-sm text-foreground font-body">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:border-l lg:border-border lg:pl-8">
                  <h4 className="text-sm font-headline font-semibold text-foreground mb-4">
                    Compliance standards
                  </h4>
                  <div className="space-y-2">
                    {framework.compliance.map((standard, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 bg-primary/5 border border-primary/20 rounded text-xs font-body text-foreground"
                      >
                        {standard}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernanceFrameworks;
