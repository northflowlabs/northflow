import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface HGEValidationProps {
  className?: string;
}

const HGEValidation = ({ className = '' }: HGEValidationProps) => {
  return (
    <section className={`bg-card border-y border-border py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
              Current validation
            </h2>
            <p className="text-lg font-body text-muted-foreground">
              HGE is currently being validated in a demanding physical environment to stress-test its methodology under real-world operational constraints.
            </p>
          </div>

          <div className="bg-background border border-border rounded-sm p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                <Icon name="CpuChipIcon" size={24} variant="outline" className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                  Live remote quantum hardware as physical stress-test environment
                </h3>
                <p className="text-base font-body text-muted-foreground leading-relaxed">
                  The methodology is being validated using live remote quantum computing hardware. Quantum systems present significant operational challenges: high noise levels, temporal drift, calibration uncertainty, and limited coherence times. These characteristics make quantum hardware a rigorous test environment for validating HGE's ability to function under adverse physical conditions.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-sm flex items-center justify-center mt-0.5">
                  <Icon name="CheckCircleIcon" size={14} variant="outline" className="text-accent" />
                </div>
                <span className="text-sm font-body text-foreground">
                  Validation focus: methodology robustness under noise, drift, and uncertainty
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-sm flex items-center justify-center mt-0.5">
                  <Icon name="CheckCircleIcon" size={14} variant="outline" className="text-accent" />
                </div>
                <span className="text-sm font-body text-foreground">
                  Environment characteristics: high noise, temporal drift, calibration challenges
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-sm flex items-center justify-center mt-0.5">
                  <Icon name="CheckCircleIcon" size={14} variant="outline" className="text-accent" />
                </div>
                <span className="text-sm font-body text-foreground">
                  Objective: demonstrate instrument-agnostic methodology in physically constrained setting
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-muted border border-border rounded-sm">
            <p className="text-sm font-body text-muted-foreground">
              <span className="font-semibold text-foreground">Note:</span> Quantum hardware is used as a validation environment for the methodology, not as the primary application domain. The goal is to stress-test HGE's approach in a physically demanding context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HGEValidation;