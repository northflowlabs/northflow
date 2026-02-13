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
      icon: 'LightBulbIcon',
    },
    {
      id: 2,
      title: 'Experiment design',
      description:
        'Experiments are designed to maximize expected information gain while respecting instrument capabilities, resource constraints, and operational limits. Design prioritizes hypotheses with highest epistemic value.',
      icon: 'BeakerIcon',
    },
    {
      id: 3,
      title: 'Execution on real instruments',
      description:
        'Experiments are executed on physical instruments in operational environments. Execution accounts for noise, drift, calibration uncertainty, and environmental factors. Full provenance is maintained.',
      icon: 'CpuChipIcon',
    },
    {
      id: 4,
      title: 'Belief update and iteration',
      description:
        'Observed results are used to update confidence in hypotheses through Bayesian reasoning. Updated beliefs inform the next cycle of hypothesis generation, creating a continuous discovery loop.',
      icon: 'ArrowPathIcon',
    },
  ];

  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto">
            HGE implements a four-stage methodology that mirrors the scientific method while
            operating autonomously under real-world constraints.
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
            uncertainty, enabling systematic exploration of complex problem spaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HGEMethodology;
