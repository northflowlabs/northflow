import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  quarter: string;
  year: string;
  title: string;
  description: string;
  initiatives: string[];
  status: 'Foundation' | 'Development' | 'Exploration' | 'Planned';
}

export default function StrategicTimeline() {
  const timeline: TimelineEvent[] = [
    {
      quarter: 'Phase 1',
      year: '',
      title: 'Foundation and research',
      description:
        'Framework conceptualisation and initial stakeholder dialogue across European institutions.',
      initiatives: [
        'EFOS Framework Design',
        'Research Consortium Formation',
        'Governance Standards',
      ],
      status: 'Development',
    },
    {
      quarter: 'Phase 2',
      year: '',
      title: 'Framework definition',
      description: 'Core standards definition and architectural principles development.',
      initiatives: [
        'Reference Architecture',
        'Compliance Methodologies',
        'Technical Specifications',
      ],
      status: 'Development',
    },
    {
      quarter: 'Phase 3',
      year: '',
      title: 'Pilot exploration',
      description: 'Scoped validation exercises and iterative framework refinement.',
      initiatives: ['Pilot Design', 'Validation Protocols', 'Feedback Integration'],
      status: 'Planned',
    },
    {
      quarter: 'Phase 4',
      year: '',
      title: 'Iterative development',
      description: 'Framework maturation based on pilot outcomes and institutional feedback.',
      initiatives: ['Framework Refinement', 'Standards Evolution', 'Documentation Development'],
      status: 'Planned',
    },
    {
      quarter: 'Phase 5',
      year: '',
      title: 'Institutional readiness',
      description: 'Preparation for potential adoption pathways and ecosystem development.',
      initiatives: ['Adoption Frameworks', 'Training Materials', 'Support Infrastructure'],
      status: 'Planned',
    },
    {
      quarter: 'Phase 6',
      year: '',
      title: 'Potential adoption pathways',
      description: 'Long-term governance establishment and ecosystem maturation.',
      initiatives: ['Governance Models', 'Certification Pathways', 'Ecosystem Growth'],
      status: 'Planned',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Foundation':
        return 'bg-primary text-primary-foreground';
      case 'Development':
        return 'bg-accent text-accent-foreground';
      case 'Exploration':
        return 'bg-primary text-primary-foreground';
      case 'Planned':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="bg-background py-24">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-headline font-semibold text-foreground mb-4">
            Indicative programme development pathway
          </h2>
          <p className="text-sm text-muted-foreground font-body mb-4 italic">
            The timeline below represents an indicative development pathway. Phases may evolve based
            on institutional dialogue, regulatory context, and pilot outcomes.
          </p>
          <p className="text-lg text-muted-foreground font-body max-w-3xl">
            Phased approach to framework maturation, structured to progress through research,
            validation, and institutional engagement.
          </p>
        </div>

        <div className="relative">
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className="relative">
                <div className="md:grid md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-3 mb-4 md:mb-0">
                    <div className="flex items-center space-x-3 md:justify-end">
                      <div
                        className={`px-3 py-1 rounded-sm text-sm font-cta font-medium ${getStatusColor(event.status)}`}
                      >
                        {event.status}
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-headline font-semibold text-foreground">
                          {event.quarter}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-9">
                    <div className="bg-card border border-border rounded-sm p-6 hover:shadow-hover transition-all duration-200">
                      <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">
                        {event.description}
                      </p>
                      <div className="space-y-2">
                        <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-2">
                          Key activities:
                        </p>
                        {event.initiatives.map((initiative, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <Icon
                              name="ArrowRightIcon"
                              size={14}
                              variant="outline"
                              className="text-primary mt-0.5 flex-shrink-0"
                            />
                            <span className="text-sm text-foreground font-body">{initiative}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-card border border-border rounded-sm p-8">
          <div className="flex items-start space-x-4">
            <Icon
              name="InformationCircleIcon"
              size={24}
              variant="outline"
              className="text-primary flex-shrink-0 mt-1"
            />
            <div>
              <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                Development pathway notes
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                This pathway represents an indicative sequence for framework development. Actual
                progression depends on institutional dialogue outcomes, regulatory developments, and
                pilot validation results. Phases are designed to be iterative and may overlap or
                extend based on stakeholder requirements and framework maturation needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
