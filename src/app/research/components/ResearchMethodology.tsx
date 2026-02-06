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
      title: "Problem definition",
      description: "Identification and framing of infrastructure challenges through stakeholder dialogue and institutional needs assessment.",
      icon: "MagnifyingGlassIcon"
    },
    {
      id: 2,
      title: "Framework design",
      description: "Development of conceptual frameworks and methodological approaches grounded in institutional requirements and operational realities.",
      icon: "CubeIcon"
    },
    {
      id: 3,
      title: "Evidence mapping",
      description: "Systematic review of existing research, standards, and operational practices relevant to the problem domain.",
      icon: "DocumentCheckIcon"
    },
    {
      id: 4,
      title: "Prototype concepts",
      description: "Development of prototype frameworks and proof-of-concept designs to test theoretical approaches in practical contexts.",
      icon: "BeakerIcon"
    },
    {
      id: 5,
      title: "Validation dialogue (where applicable)",
      description: "Structured dialogue with institutional stakeholders to validate frameworks and refine approaches based on operational feedback.",
      icon: "UserGroupIcon"
    },
    {
      id: 6,
      title: "Publication outputs (iterated working papers and briefs)",
      description: "Publication of research findings through working papers, technical briefs, and framework documentation, iterated based on feedback.",
      icon: "DocumentTextIcon"
    }
  ];

  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
            Research approach
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto">
            Research at Northflow is applied and systems-oriented. Outputs are developed to support real-world infrastructure design, governance, and operational decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methodologySteps.map((step, index) => (
            <div
              key={step.id}
              className="relative bg-card border border-border rounded-sm p-8"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-sm flex items-center justify-center font-headline font-semibold text-lg">
                {index + 1}
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-6 ml-auto">
                <Icon name={step.icon as any} size={24} variant="outline" className="text-primary" />
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

        <div className="mt-16 bg-card border border-border rounded-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheckIcon" size={32} variant="outline" className="text-primary" />
              </div>
              <h4 className="text-lg font-headline font-semibold text-foreground mb-2">
                Structured methodology
              </h4>
              <p className="text-sm font-body text-muted-foreground">
                Research follows systematic processes to ensure consistency and quality in framework development.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <Icon name="CogIcon" size={32} variant="outline" className="text-primary" />
              </div>
              <h4 className="text-lg font-headline font-semibold text-foreground mb-2">
                Applied focus
              </h4>
              <p className="text-sm font-body text-muted-foreground">
                Research emphasizes practical, deployable solutions for institutional infrastructure challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <Icon name="DocumentDuplicateIcon" size={32} variant="outline" className="text-primary" />
              </div>
              <h4 className="text-lg font-headline font-semibold text-foreground mb-2">
                Iterative outputs
              </h4>
              <p className="text-sm font-body text-muted-foreground">
                Working papers and briefs are published iteratively, refined through dialogue and validation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchMethodology;