import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface MethodologyStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface HGEMethodologyProps {
  className?: string;
}

const HGEMethodology = ({ className = '' }: HGEMethodologyProps) => {
  const steps: MethodologyStep[] = [
    {
      id: 1,
      title: 'Hypothesis generation',
      description:
        'System formulates testable hypotheses based on current knowledge state, uncertainty estimates, and domain constraints. Hypotheses are structured to enable falsification and quantitative evaluation.',
      icon: 'sparkles',
    },
    {
      id: 2,
      title: 'Experiment design',
      description:
        'Experiments are designed to maximize expected information gain while respecting instrument capabilities, resource constraints, and operational limits. Design prioritizes hypotheses with highest epistemic value.',
      icon: 'beaker',
    },
    {
      id: 3,
      title: 'Deterministic execution',
      description:
        'Experiments are executed with full provenance tracking. Deterministic execution ensures identical conditions produce identical results — enabling independent verification and audit-grade evidence generation.',
      icon: 'cpu-chip',
    },
    {
      id: 4,
      title: 'Belief update and iteration',
      description:
        'Observed results update confidence through structured reasoning. Updated beliefs inform the next cycle of hypothesis generation, creating a continuous discovery loop with full traceability.',
      icon: 'arrow-path',
    },
  ];

  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-cta font-semibold tracking-[0.16em] text-primary mb-3">
            METHODOLOGY
          </p>
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
            Four-stage discovery cycle
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-4xl mx-auto">
            HGE implements a closed-loop methodology that mirrors the scientific method while
            operating autonomously under real-world constraints. Each cycle increases confidence in
            validated hypotheses while identifying new areas of uncertainty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative bg-card border border-border rounded-sm p-8">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-sm flex items-center justify-center font-headline font-semibold text-lg">
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

        <div className="mt-12 bg-muted border border-border rounded-sm p-6">
          <p className="text-sm font-body text-muted-foreground text-center">
            <span className="font-semibold text-foreground">Methodological principle:</span> Each
            cycle increases confidence in validated hypotheses while identifying new areas of
            uncertainty, enabling systematic exploration of complex problem spaces under resource
            constraints.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HGEMethodology;
