import Icon from '@/components/ui/AppIcon';

interface Phase {
  id: number;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

interface ImplementationApproachProps {
  className?: string;
}

const ImplementationApproach = ({ className = '' }: ImplementationApproachProps) => {
  const phases: Phase[] = [
    {
      id: 1,
      number: '01',
      title: 'Assessment & validation',
      description:
        'Comprehensive evaluation of institutional requirements, regulatory context, and governance readiness. Informed by HGE\'s structured evaluation methodology.',
      deliverables: [
        'Requirements documentation',
        'Compliance assessment',
        'Architecture design',
        'Implementation roadmap',
      ],
    },
    {
      id: 2,
      number: '02',
      title: 'Framework deployment',
      description:
        'Structured deployment of reference architectures with jurisdictional compliance and audit capabilities.',
      deliverables: [
        'Infrastructure provisioning',
        'Security configuration',
        'Network architecture',
        'Monitoring setup',
      ],
    },
    {
      id: 3,
      number: '03',
      title: 'Integration & validation',
      description:
        'System integration with comprehensive validation of governance frameworks and operational readiness.',
      deliverables: [
        'System integration',
        'Security testing',
        'Compliance validation',
        'Performance verification',
      ],
    },
    {
      id: 4,
      number: '04',
      title: 'Operational transition',
      description:
        'Structured transition to operational status with institutional governance and continuity planning.',
      deliverables: [
        'Operational handover',
        'Documentation delivery',
        'Training completion',
        'Support activation',
      ],
    },
  ];

  return (
    <section className={`py-20 bg-card ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-headline font-semibold text-foreground mb-4">
            Implementation approach
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl">
            Structured institutional methodology focused on assessment, validation, governance
            readiness, and operational transition. Implementation emphasises continuity and
            institutional oversight.
          </p>
        </div>

        <div className="space-y-6">
          {phases.map((phase, index) => (
            <div key={phase.id} className="relative">
              {index < phases.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-border hidden lg:block"></div>
              )}

              <div className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  <div className="flex-shrink-0 mb-4 lg:mb-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-headline font-bold text-primary">
                        {phase.number}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                      {phase.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-headline font-semibold text-foreground mb-3">
                        Key deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {phase.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Icon
                              name="check-circle"
                              size={16}
                              variant="solid"
                              className="text-primary flex-shrink-0"
                            />
                            <span className="text-sm text-foreground font-body">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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

export default ImplementationApproach;
