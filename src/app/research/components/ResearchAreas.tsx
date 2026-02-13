'use client';

import Icon from '@/components/ui/AppIcon';
import { useState } from 'react';

interface ResearchArea {
  id: number;
  title: string;
  description: string;
  icon: string;
  trackCount: number;
  statusLabel: string;
  tracks: string[];
}

interface FutureArea {
  id: number;
  title: string;
  description: string;
}

interface ResearchAreasProps {
  className?: string;
}

const ResearchAreas = ({ className = '' }: ResearchAreasProps) => {
  const [expandedArea, setExpandedArea] = useState<number | null>(null);

  const toggleExpansion = (areaId: number) => {
    setExpandedArea(expandedArea === areaId ? null : areaId);
  };

  const researchAreas: ResearchArea[] = [
    {
      id: 1,
      title: 'Climate and infrastructure resilience',
      description:
        'Evidence frameworks for resilience analysis across climate-exposed and mission-critical infrastructure domains. Integration of satellite observation data with structured hypothesis search for institutional decision support.',
      icon: 'arrow-path',
      trackCount: 4,
      statusLabel: 'Primary research focus',
      tracks: [
        'Resilience Indicator Frameworks — Structured indicators, thresholds, and evaluation criteria for resilience claims.',
        'Hazard–Exposure Evidence Mapping — Linking signals, exposure models, and evidence provenance into reviewable bundles.',
        'Continuity and Failure-Mode Assessment — Formal analysis of disruption scenarios and operational continuity constraints.',
        'Decision Support under Uncertainty — Reproducible reasoning frameworks for institutional risk and resilience decisions.',
      ],
    },
    {
      id: 2,
      title: 'AI governance for mission-critical systems',
      description:
        'Governance-aligned evaluation and evidence controls for bounded AI use in institutional and critical environments.',
      icon: 'shield-check',
      trackCount: 4,
      statusLabel: 'Active development',
      tracks: [
        'Audit-Ready Evaluation Protocols — Testable criteria for safety, boundedness, and institutional acceptability.',
        'Evidence Governance and Provenance — Traceable evidence bundles, versioning, and integrity controls.',
        'Drift and Degradation Detection — Monitoring approaches that preserve accountability over time.',
        'Operational Control and Oversight — Human oversight patterns, escalation paths, and enforceable governance modes.',
      ],
    },
    {
      id: 3,
      title: 'Research-to-infrastructure translation models',
      description:
        'Structured pathways for moving governed research outputs into deployable institutional architectures. Methodology for converting validated research into operational systems with full provenance tracking and governance integration.',
      icon: 'document-check',
      trackCount: 3,
      statusLabel: 'Active development',
      tracks: [
        'Publication-to-Architecture Translation — Converting working documents into implementation-ready system specifications.',
        'Validation and Review Loops — Institutional review, validation dialogue, and controlled iteration processes.',
        'Governed Deployment Pathways — Operational patterns for moving from validated frameworks into system integration.',
      ],
    },
    {
      id: 4,
      title: 'Institutional interoperability systems',
      description:
        'Interoperability as evidence infrastructure: exchange, verification, and portability across institutions, sectors, and jurisdictions. Cross-border data and evidence sharing frameworks for European institutional environments.',
      icon: 'server-stack',
      trackCount: 3,
      statusLabel: 'Framework development',
      tracks: [
        'Evidence Portability Frameworks — Standardized evidence bundles and exchange patterns across institutional boundaries.',
        'Cross-System Verification Interfaces — Interoperable verification mechanisms for claims and supporting evidence.',
        'Long-Horizon Compatibility and Governance — Sustaining interoperability under changing constraints and standards.',
      ],
    },
  ];

  const futureAreas: FutureArea[] = [
    {
      id: 1,
      title: 'Energy systems evidence infrastructure',
      description:
        'Evidence and reasoning frameworks for resilience, flexibility, and coordination in energy-system contexts.',
    },
    {
      id: 2,
      title: 'Operational sovereignty frameworks',
      description:
        'Governance, architecture, and control mechanisms that enable states and institutions to retain operational authority over critical digital systems.',
    },
  ];

  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
            Research focus areas
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto">
            Northflow Research Lab conducts applied research across domains critical to climate
            resilience, space-enabled observation, and institutional system integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {researchAreas.map((area) => (
            <div
              key={area.id}
              className="bg-card border border-border rounded-sm p-8 hover:shadow-hover transition-all duration-200 ease-institutional flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                  <Icon
                    name={area.icon as any}
                    size={24}
                    variant="outline"
                    className="text-primary"
                  />
                </div>
              </div>
              <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6">
                {area.description}
              </p>
              <div className="pt-6 border-t border-border mt-auto">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="beaker"
                      size={16}
                      variant="outline"
                      className="text-muted-foreground"
                    />
                    <span className="text-xs font-body text-muted-foreground">
                      {area.trackCount} structured research tracks · {area.statusLabel}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleExpansion(area.id)}
                    className="text-xs font-body text-primary hover:text-primary/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label={`View methodological scope for ${area.title}`}
                  >
                    View scope
                  </button>
                </div>

                {expandedArea === area.id && (
                  <>
                    <div className="border-t border-border mt-4"></div>
                    <div className="pt-4">
                      <h4 className="text-sm font-headline font-medium text-muted-foreground mb-4">
                        Structured research tracks
                      </h4>
                      <ul className="space-y-3">
                        {area.tracks.map((track, index) => (
                          <li key={index}>
                            <div className="text-sm font-body font-medium text-foreground leading-relaxed">
                              {track}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-headline font-semibold text-foreground mb-4">
            Future research directions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureAreas.map((area) => (
              <div key={area.id} className="bg-muted/40 border border-border rounded-sm p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-headline font-semibold text-muted-foreground">
                    {area.title}
                  </h4>
                  <span className="inline-flex items-center px-2 py-1 bg-muted text-muted-foreground text-xs font-body rounded-sm border border-border">
                    Future
                  </span>
                </div>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
