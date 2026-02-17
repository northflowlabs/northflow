import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

export default function EFOSHighlight() {
  const milestones = [
    {
      phase: 'Phase 1',
      title: 'Foundation and research',
      status: 'Current focus',
      date: 'Development phase',
      deliverables: ['Core standards', 'Governance model', 'Compliance framework'],
    },
    {
      phase: 'Phase 2',
      title: 'Framework definition',
      status: 'Near-term',
      date: 'Planned',
      deliverables: ['Reference architecture', 'Deployment guidelines', 'Audit protocols'],
    },
    {
      phase: 'Phase 3',
      title: 'Pilot exploration',
      status: 'Planned',
      date: 'Future phase',
      deliverables: ['Scoped pilots', 'Validation exercises', 'Iterative refinement'],
    },
    {
      phase: 'Phase 4',
      title: 'Institutional readiness',
      status: 'Planned',
      date: 'Long-term',
      deliverables: ['Adoption pathways', 'Ecosystem development', 'Long-term governance'],
    },
  ];

  return (
    <section className="bg-card border-y border-border py-24">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center">
                <Icon
                  name="ShieldCheckIcon"
                  size={24}
                  variant="solid"
                  className="text-primary-foreground"
                />
              </div>
              <span className="text-sm font-cta font-medium text-primary uppercase tracking-wider">
                Flagship initiative
              </span>
            </div>
            <h2 className="text-3xl font-headline font-semibold text-foreground mb-6">
              European Flexibility Operating System (EFOS)
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
              EFOS is a proposed European public–private digital infrastructure designed to provide
              a harmonised, cross-border operational layer for predicting, coordinating, and
              managing flexibility across Europe's energy system. It responds directly to the
              objectives of the Digitalisation of the Energy System (DES), the Green Deal, the
              Energy Performance of Buildings Directive (EPBD), the Data Act, the AI Act, and the
              Net Zero Industry Act.
            </p>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
              EFOS is conceived as a unified AI-driven infrastructure that forecasts demand,
              generation, congestion, and pricing in the short term; orchestrates distributed assets
              across buildings, industry, storage, and mobility; provides real-time interfaces for
              DSOs, TSOs, and flexibility markets; implements EU-wide interoperability and data
              harmonisation; and ensures compliance with DES, EPBD, Data Act, AI Act, and NIS2. It
              is not a commercial software product but a long-term digital backbone intended to
              support EU system objectives.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Icon
                  name="CheckCircleIcon"
                  size={20}
                  variant="solid"
                  className="text-primary mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-sm font-cta font-medium text-foreground mb-1">
                    Architectural principles
                  </p>
                  <p className="text-sm text-muted-foreground font-body">
                    Framework design for operational independence and sovereignty principles.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon
                  name="CheckCircleIcon"
                  size={20}
                  variant="solid"
                  className="text-primary mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-sm font-cta font-medium text-foreground mb-1">
                    Regulatory alignment pathways
                  </p>
                  <p className="text-sm text-muted-foreground font-body">
                    Compliance methodologies mapped to GDPR, NIS2, and institutional governance
                    requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon
                  name="CheckCircleIcon"
                  size={20}
                  variant="solid"
                  className="text-primary mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-sm font-cta font-medium text-foreground mb-1">
                    Governance model development
                  </p>
                  <p className="text-sm text-muted-foreground font-body">
                    Structures enabling multi-stakeholder participation and framework evolution.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/efos-framework-details"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-cta font-medium rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-hover"
              >
                <span>View full framework details</span>
                <Icon name="arrow-right" size={16} variant="outline" />
              </Link>
              <Link
                href="/engage"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-card border border-border text-foreground text-sm font-cta font-medium rounded-sm transition-all duration-200 hover:bg-muted"
              >
                <span>Request programme briefing</span>
                <Icon name="arrow-right" size={16} variant="outline" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-sm overflow-hidden border border-border">
              <AppImage
                src="/assets/images/EFOS_-_Flexibility_system-1767049348023.jpg"
                alt="Modern architectural solar panel or infrastructure structure photographed from below against blue sky, showing geometric panels arranged in angular formation with supporting framework"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-sm p-6 shadow-hover max-w-xs">
              <div className="flex items-center space-x-3 mb-2">
                <Icon name="user-group" size={20} variant="outline" className="text-primary" />
                <span className="text-2xl font-headline font-semibold text-foreground">2</span>
              </div>
              <p className="text-sm text-muted-foreground font-body">
                Units engaged in EFOS framework dialogue
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones?.map((milestone, index) => (
            <div key={index} className="bg-background border border-border rounded-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-cta font-medium text-primary uppercase tracking-wider">
                  {milestone?.phase}
                </span>
                <span
                  className={`px-2 py-1 rounded-sm text-xs font-body ${
                    milestone?.status === 'Current focus'
                      ? 'bg-accent/10 text-accent'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {milestone?.status}
                </span>
              </div>
              <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                {milestone?.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body mb-4">{milestone?.date}</p>
              <div className="space-y-2">
                {milestone?.deliverables?.map((deliverable, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <Icon
                      name="CheckIcon"
                      size={14}
                      variant="outline"
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span className="text-xs text-muted-foreground font-body">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
