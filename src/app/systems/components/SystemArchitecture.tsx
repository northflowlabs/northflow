'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ArchitectureLayer {
  id: number;
  name: string;
  description: string;
  components: string[];
}

interface SystemArchitectureProps {
  className?: string;
}

const SystemArchitecture = ({ className = '' }: SystemArchitectureProps) => {
  const [selectedLayer, setSelectedLayer] = useState<number>(1);

  const layers: ArchitectureLayer[] = [
    {
      id: 1,
      name: 'Infrastructure layer',
      description:
        'Designed to support sovereign infrastructure with geographic distribution and jurisdictional compliance.',
      components: [
        'Multi-region data centers',
        'Network infrastructure',
        'Storage systems',
        'Compute resources',
      ],
    },
    {
      id: 2,
      name: 'Platform layer',
      description:
        'Intended to enable core platform services providing foundational capabilities for institutional operations.',
      components: ['Identity management', 'Access control', 'Audit logging', 'Monitoring systems'],
    },
    {
      id: 3,
      name: 'Application layer',
      description:
        'Structured to allow mission-critical applications with governance and compliance capabilities.',
      components: [
        'Business applications',
        'Workflow systems',
        'Reporting tools',
        'Integration services',
      ],
    },
    {
      id: 4,
      name: 'Governance layer',
      description:
        'Designed to support comprehensive governance and audit framework for regulatory compliance.',
      components: [
        'Policy enforcement',
        'Compliance monitoring',
        'Audit trail',
        'Regulatory reporting',
      ],
    },
  ];

  return (
    <section className={`py-20 bg-card ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-headline font-semibold text-foreground mb-4">
            System architecture overview
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl">
            Layered reference model designed for institutional requirements. Each layer represents
            architectural capabilities with emphasis on oversight, continuity, and control.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-2">
            {layers.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setSelectedLayer(layer.id)}
                className={`w-full text-left px-6 py-4 rounded-lg border transition-all duration-200 ${
                  selectedLayer === layer.id
                    ? 'bg-primary text-primary-foreground border-primary shadow-md'
                    : 'bg-background text-foreground border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-headline font-semibold">{layer.name}</span>
                  <Icon
                    name="ChevronRightIcon"
                    size={16}
                    variant="outline"
                    className={
                      selectedLayer === layer.id
                        ? 'text-primary-foreground'
                        : 'text-muted-foreground'
                    }
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 bg-background border border-border rounded-lg p-8">
            {layers
              .filter((layer) => layer.id === selectedLayer)
              .map((layer) => (
                <div key={layer.id}>
                  <h3 className="text-xl font-headline font-semibold text-foreground mb-4">
                    {layer.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                    {layer.description}
                  </p>

                  <h4 className="text-sm font-headline font-semibold text-foreground mb-4">
                    Key components
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {layer.components.map((component, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 px-4 py-3 bg-muted rounded-lg"
                      >
                        <Icon
                          name="CubeIcon"
                          size={16}
                          variant="outline"
                          className="text-primary flex-shrink-0"
                        />
                        <span className="text-sm text-foreground font-body">{component}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;
