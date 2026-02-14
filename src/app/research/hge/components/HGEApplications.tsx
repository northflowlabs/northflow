import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface HGEApplicationsProps {
  className?: string;
}

const HGEApplications = ({ className = '' }: HGEApplicationsProps) => {
  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
              Why it matters
            </h2>
            <p className="text-lg font-body text-muted-foreground">
              HGE addresses the challenge of systematic discovery in domains where experimentation
              is expensive, time-consuming, or constrained by physical limitations.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card border border-border rounded-sm p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center">
                  <Icon name="GlobeAltIcon" size={20} variant="outline" className="text-primary" />
                </div>
                <h3 className="text-xl font-headline font-semibold text-foreground">
                  Current application domains
                </h3>
              </div>
              <p className="text-base font-body text-muted-foreground leading-relaxed mb-6">
                HGE is currently focused on astronomy and physics research, where observational
                constraints, instrument availability, and data acquisition costs make systematic
                hypothesis testing particularly valuable. The methodology enables efficient
                exploration of parameter spaces and identification of promising research directions
                under resource constraints.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-cta font-medium rounded-sm">
                  Astronomy
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-cta font-medium rounded-sm">
                  Physics
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-cta font-medium rounded-sm">
                  Observational sciences
                </span>
              </div>
            </div>

            <div className="bg-muted border border-border rounded-sm p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-sm flex items-center justify-center">
                  <Icon name="BeakerIcon" size={20} variant="outline" className="text-accent" />
                </div>
                <div className="flex items-center space-x-3">
                  <h3 className="text-xl font-headline font-semibold text-foreground">
                    Future application directions
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent text-xs font-cta font-medium rounded-sm">
                    Future direction
                  </span>
                </div>
              </div>
              <p className="text-base font-body text-muted-foreground leading-relaxed mb-6">
                Future applications may extend to biology and health research, where similar
                challenges exist: high experimental costs, long feedback cycles, and complex
                parameter spaces. Potential applications include drug discovery optimization,
                biological pathway exploration, and clinical trial design. These applications
                represent future research directions and are not currently active.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent text-xs font-cta font-medium rounded-sm">
                  Biology (future)
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent text-xs font-cta font-medium rounded-sm">
                  Health research (future)
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent text-xs font-cta font-medium rounded-sm">
                  Drug discovery (future)
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-card border border-border rounded-sm">
            <p className="text-sm font-body text-muted-foreground text-center">
              <span className="font-semibold text-foreground">Core value proposition:</span> HGE
              enables systematic, resource-efficient exploration of complex problem spaces where
              traditional approaches are limited by cost, time, or physical constraints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HGEApplications;
