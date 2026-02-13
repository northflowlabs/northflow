import Icon from '@/components/ui/AppIcon';

interface ProcessStep {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface AccessEngagementProcessProps {
  className?: string;
}

const AccessEngagementProcess = ({ className = '' }: AccessEngagementProcessProps) => {
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      icon: 'DocumentTextIcon',
      title: 'Access request submitted',
      description: 'Your request is received and logged for institutional review.',
    },
    {
      id: 2,
      icon: 'ClipboardDocumentCheckIcon',
      title: 'Institutional review by Northflow Technologies',
      description:
        'Request is evaluated based on institutional role, intended use, and governance alignment.',
    },
    {
      id: 3,
      icon: 'ChatBubbleLeftRightIcon',
      title: 'Clarification requested if required',
      description:
        'Additional information may be requested to ensure appropriate access level and context.',
    },
    {
      id: 4,
      icon: 'CheckCircleIcon',
      title: 'Access granted or guidance provided',
      description:
        'Materials are shared with appropriate confidentiality arrangements, or alternative guidance is provided.',
    },
  ];

  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
            Engagement process
          </h2>
          <p className="text-base text-muted-foreground font-body max-w-2xl mx-auto mb-8">
            Access requests follow a structured review process designed for institutional contexts.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-muted rounded-sm border border-border">
            <Icon name="ClockIcon" size={20} variant="outline" className="text-primary" />
            <span className="text-sm font-cta font-medium text-foreground">
              Typical response time: 5–7 business days
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="bg-card p-6 rounded-sm border border-border hover:border-primary/30 transition-colors duration-200"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                <Icon
                  name={step.icon as any}
                  size={24}
                  variant="outline"
                  className="text-primary"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-cta font-semibold text-primary">STEP {step.id}</span>
              </div>
              <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessEngagementProcess;
