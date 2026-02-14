'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface ParticipationType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  engagementFormat: string;
  eligibility: string[];
  participation: string[];
  icon: string;
}

export default function ParticipationFramework() {
  const [expandedType, setExpandedType] = useState<string | null>(null);

  const participationTypes: ParticipationType[] = [
    {
      id: 'early-contributor',
      title: 'Early contributor',
      subtitle: 'Structured input during framework development',
      description:
        'Organisations contributing insight, requirements, and operational perspective during the early design phase of strategic frameworks.',
      engagementFormat: 'Exploratory and non-binding contribution',
      eligibility: [
        'Government technology and digitalisation offices',
        'National or sectoral regulatory authorities',
        'Operators of critical or mission-critical infrastructure',
        'NATO-adjacent or security-relevant organisations (contextual input only)',
      ],
      participation: [
        'Structured dialogue on framework scope and assumptions',
        'Input on operational and regulatory design considerations',
        'Review of early architectural and governance concepts',
        'Periodic development briefings',
      ],
      icon: 'UserGroupIcon',
    },
    {
      id: 'research-exchange',
      title: 'Research and knowledge exchange',
      subtitle: 'Applied research contribution and domain expertise',
      description:
        'Institutions contributing research input, methodological perspective, or domain expertise relevant to sovereign digital infrastructure and institutional systems.',
      engagementFormat: 'Research-oriented collaboration and knowledge exchange',
      eligibility: [
        'Universities and applied research centres',
        'Policy and governance research organisations',
        'Technical standards and advisory bodies',
        'Independent research institutes',
      ],
      participation: [
        'Contribution to research questions and analytical frameworks',
        'Access to technical briefs and working documents',
        'Participation in workshops or structured exchanges',
        'Attribution and acknowledgement in relevant publications where appropriate',
      ],
      icon: 'AcademicCapIcon',
    },
    {
      id: 'pilot-participant',
      title: 'Pilot participant',
      subtitle: 'Exploratory validation and scoped pilot activities',
      description:
        'Organisations exploring limited-scope pilots or validation exercises to test selected framework components in controlled contexts.',
      engagementFormat: 'Pilot-based and exploratory engagement (case-by-case)',
      eligibility: [
        'Government entities and public authorities',
        'Regional or municipal administrations',
        'Large institutional or public-sector asset managers',
        'Operators of regulated or mission-critical systems',
      ],
      participation: [
        'Co-definition of pilot scope and objectives',
        'Participation in validation or simulation exercises',
        'Feedback on operational feasibility and constraints',
        'Lessons learned to inform further framework development',
      ],
      icon: 'BeakerIcon',
    },
    {
      id: 'programme-observer',
      title: 'Programme observer',
      subtitle: 'Monitoring and evaluative engagement',
      description:
        'Stakeholders following initiative development to assess relevance, maturity, and potential future engagement pathways.',
      engagementFormat: 'Observation and informal dialogue (No formal commitment required)',
      eligibility: [
        'Government bodies evaluating future engagement',
        'Public institutions and agencies in assessment phases',
        'Regional or international technology coordination offices',
        'Intergovernmental or multilateral organisations',
      ],
      participation: [
        'Access to selected initiative documentation',
        'Periodic progress and status updates',
        'Review of high-level framework concepts',
        'Guidance on potential future engagement options',
      ],
      icon: 'EyeIcon',
    },
  ];

  const engagementProcess = [
    {
      step: '1',
      title: 'Initial dialogue',
      description: 'Submit expression of interest through institutional dialogue channels.',
      icon: 'DocumentTextIcon',
    },
    {
      step: '2',
      title: 'Scope review',
      description: 'Assessment of alignment, relevance, and potential engagement pathways.',
      icon: 'ClipboardDocumentCheckIcon',
    },
    {
      step: '3',
      title: 'Framework briefing',
      description:
        'Presentation of initiative objectives, development stage, and engagement options.',
      icon: 'PresentationChartLineIcon',
    },
    {
      step: '4',
      title: 'Engagement pathway',
      description:
        'Clarification of next steps, dialogue structure, and contribution opportunities.',
      icon: 'DocumentCheckIcon',
    },
  ];

  return (
    <section className="bg-card border-t border-border py-24">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-headline font-semibold text-foreground mb-4">
            Engagement and contribution pathways
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl">
            Structured dialogue pathways enabling qualified organisations to contribute to framework
            development and exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {participationTypes.map((type) => (
            <div
              key={type.id}
              className="bg-background border border-border rounded-sm overflow-hidden hover:shadow-hover transition-all duration-200"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={type.icon as any}
                      size={24}
                      variant="outline"
                      className="text-primary"
                    />
                  </div>
                  <button
                    onClick={() => setExpandedType(expandedType === type.id ? null : type.id)}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <Icon
                      name={expandedType === type.id ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                      size={20}
                      variant="outline"
                    />
                  </button>
                </div>

                <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                  {type.title}
                </h3>

                <p className="text-sm font-body font-medium text-primary mb-3">{type.subtitle}</p>

                <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">
                  {type.description}
                </p>

                <div className="flex items-start space-x-2 text-sm text-muted-foreground mb-4">
                  <Icon
                    name="ClipboardDocumentListIcon"
                    size={16}
                    variant="outline"
                    className="flex-shrink-0 mt-0.5"
                  />
                  <span className="font-body italic">{type.engagementFormat}</span>
                </div>

                {expandedType === type.id && (
                  <div className="pt-4 border-t border-border space-y-4">
                    <div>
                      <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-2 font-semibold">
                        Eligibility
                      </p>
                      <ul className="space-y-2">
                        {type.eligibility.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Icon
                              name="CheckCircleIcon"
                              size={16}
                              variant="outline"
                              className="text-primary mt-0.5 flex-shrink-0"
                            />
                            <span className="text-sm text-foreground font-body">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-2 font-semibold">
                        What participation involves
                      </p>
                      <ul className="space-y-2">
                        {type.participation.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Icon
                              name="ArrowRightIcon"
                              size={16}
                              variant="outline"
                              className="text-primary mt-0.5 flex-shrink-0"
                            />
                            <span className="text-sm text-foreground font-body">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-headline font-semibold text-foreground mb-8 text-center">
            Engagement process
          </h3>
          <p className="text-sm text-muted-foreground font-body text-center mb-8 max-w-2xl mx-auto">
            Engagement follows a structured dialogue process designed to clarify scope, relevance,
            and potential next steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border rounded-sm p-6 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center font-headline font-semibold">
                      {step.step}
                    </div>
                    <Icon
                      name={step.icon as any}
                      size={20}
                      variant="outline"
                      className="text-primary"
                    />
                  </div>
                  <h4 className="text-lg font-headline font-semibold text-foreground mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < engagementProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <Icon
                      name="ArrowRightIcon"
                      size={20}
                      variant="outline"
                      className="text-border"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-sm p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-headline font-semibold text-foreground mb-4">
              Request programme briefing
            </h3>
            <p className="text-lg text-muted-foreground font-body mb-8 leading-relaxed">
              Qualified organisations interested in framework dialogue should submit enquiries
              through institutional engagement channels. Scope and alignment assessments conducted
              for all engagement requests.
            </p>
            <Link
              href="/engage"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-3 rounded-sm font-cta font-medium hover:bg-primary/90 transition-colors"
            >
              <span>Submit engagement enquiry</span>
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
