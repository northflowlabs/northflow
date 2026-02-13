import Icon from '@/components/ui/AppIcon';

interface MethodologyStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface ResearchMethodologyProps {
  className?: string;
}

const ResearchMethodology = ({ className = '' }: ResearchMethodologyProps) => {
  const methodologySteps: MethodologyStep[] = [
    {
      id: 1,
      title: 'Problem definition',
      description:
        'Define the institutional decision context, the uncertainty boundary, and the operational failure modes that matter.',
      icon: 'MagnifyingGlassIcon',
    },
    {
      id: 2,
      title: 'Framework design',
      description:
        'Specify reasoning and governance structures: what is claimed, what counts as evidence, and what can invalidate a conclusion.',
      icon: 'CubeIcon',
    },
    {
      id: 3,
      title: 'Evidence mapping',
      description:
        'Map data sources, standards, and prior work into an evidence basis that can be audited and reproduced.',
      icon: 'DocumentCheckIcon',
    },
    {
      id: 4,
      title: 'Prototype and proof',
      description:
        'Construct bounded prototypes to test whether the framework yields stable conclusions under realistic institutional constraints.',
      icon: 'BeakerIcon',
    },
    {
      id: 5,
      title: 'Institutional validation dialogue',
      description:
        'Validate assumptions and evaluation criteria through structured dialogue with institutional stakeholders and operators.',
      icon: 'UserGroupIcon',
    },
    {
      id: 6,
      title: 'Publication',
      description:
        'Publish working documents as governed outputs: traceable versions refined through review, validation, and operational learning.',
      icon: 'DocumentTextIcon',
    },
  ];

  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
            Research approach
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto">
            Research at Northflow is applied and systems-oriented. Outputs are governed by
            methodological discipline and designed to support institutional decision-making under
            uncertainty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methodologySteps.map((step, index) => (
            <div key={step.id} className="relative bg-card border border-border rounded-sm p-8">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-sm flex items-center justify-center font-headline font-bold text-lg">
                {index + 1}
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-6 ml-auto">
                <Icon
                  name={step.icon as any}
                  size={24}
                  variant="outline"
                  className="text-primary"
                />
              </div>
              <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchMethodology;
