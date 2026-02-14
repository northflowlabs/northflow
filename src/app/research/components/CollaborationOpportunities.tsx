import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Opportunity {
  id: number;
  title: string;
  type: string;
  description: string;
  requirements: string[];
  duration: string;
  commitment: string;
}

interface CollaborationOpportunitiesProps {
  className?: string;
}

const CollaborationOpportunities = ({ className = '' }: CollaborationOpportunitiesProps) => {
  const opportunities: Opportunity[] = [
    {
      id: 1,
      title: 'Policy and standards dialogue',
      type: 'Engagement mode',
      description:
        'Structured dialogue on governance frameworks, regulatory alignment, and standards considerations for institutional evidence and critical infrastructure systems.',
      requirements: [
        'Interest in digital infrastructure governance',
        'Understanding of European regulatory context',
        'Commitment to structured dialogue',
      ],
      duration: '',
      commitment: 'Policy dialogue, framework discussion, standards exploration',
    },
    {
      id: 2,
      title: 'Technical framework collaboration',
      type: 'Engagement mode',
      description:
        'Co-development of technical frameworks, architecture patterns, and evaluation approaches for institutional infrastructure and evidence systems.',
      requirements: [
        'Technical expertise in relevant domains',
        'Focus on practical, deployable solutions',
        'Willingness to engage in structured knowledge exchange',
      ],
      duration: '',
      commitment: 'Framework development, technical dialogue, documentation',
    },
    {
      id: 3,
      title: 'Applied research exchange',
      type: 'Engagement mode',
      description:
        'Structured exchange of methodologies and findings addressing shared challenges in climate resilience, governance, and mission-critical institutional systems.',
      requirements: [
        'Active research in relevant areas',
        'Commitment to applied research approach',
        'Interest in collaborative knowledge development',
      ],
      duration: '',
      commitment: 'Research dialogue, knowledge exchange, collaborative inquiry',
    },
    {
      id: 4,
      title: 'Pilot scoping and validation',
      type: 'Engagement mode',
      description:
        'Scoping and validation of framework concepts in institutional contexts where applicable, with emphasis on bounded evaluation and evidence integrity.',
      requirements: [
        'Institutional stakeholder with relevant interests',
        'Openness to exploratory pilot concepts',
        'Capacity for structured validation dialogue',
      ],
      duration: '',
      commitment: 'Pilot scoping, validation dialogue, feedback exchange',
    },
  ];

  return (
    <section className={`bg-muted py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
            Research collaboration and dialogue
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto">
            Northflow engages in structured institutional dialogue and research collaboration within
            climate resilience, governance, and critical infrastructure domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {opportunities.map((opportunity) => (
            <div key={opportunity.id} className="bg-card border border-border rounded-sm p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-headline font-semibold text-foreground">
                  {opportunity.title}
                </h3>
                <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-cta font-medium rounded-sm whitespace-nowrap ml-4">
                  {opportunity.type}
                </span>
              </div>

              <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6">
                {opportunity.description}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon
                      name="CheckCircleIcon"
                      size={16}
                      variant="outline"
                      className="text-primary"
                    />
                    <span className="text-sm font-cta font-medium text-foreground">
                      Engagement conditions
                    </span>
                  </div>
                  <ul className="space-y-2 pl-6">
                    {opportunity.requirements.map((req, index) => (
                      <li key={index} className="text-sm font-body text-muted-foreground">
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-end pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="HandRaisedIcon"
                      size={16}
                      variant="outline"
                      className="text-muted-foreground"
                    />
                    <span className="text-xs font-body text-muted-foreground">
                      {opportunity.commitment.split(',')[0]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-sm p-8 text-center">
          <Icon
            name="AcademicCapIcon"
            size={48}
            variant="outline"
            className="text-primary mx-auto mb-4"
          />
          <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
            Initiate dialogue
          </h3>
          <p className="text-sm font-body text-muted-foreground max-w-2xl mx-auto mb-6">
            Institutions and organizations interested in research dialogue or collaboration
            opportunities should submit inquiries through the institutional engagement process.
          </p>
          <Link
            href="/engage"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm font-cta font-medium rounded-sm transition-all duration-200 ease-institutional hover:-translate-y-0.5 hover:shadow-hover"
          >
            Initiate institutional dialogue
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollaborationOpportunities;
