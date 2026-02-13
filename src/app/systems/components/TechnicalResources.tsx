'use client';

import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { trackCTAClick, trackResourceEngagement } from '@/lib/analytics-events';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: string;
  status: string;
  statusTone: 'available' | 'development' | 'draft';
  icon: string;
  ctaText: string;
  ctaUrl: string;
}

interface TechnicalResourcesProps {
  className?: string;
}

const TechnicalResources = ({ className = '' }: TechnicalResourcesProps) => {
  const statusClasses: Record<Resource['statusTone'], string> = {
    available: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
    development: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
    draft: 'bg-muted text-muted-foreground border-border',
  };

  const resources: Resource[] = [
    {
      id: 1,
      title: 'Project HGE methodology overview',
      description:
        'Methodology documentation describing verification workflows, evidence structure, deterministic replay, and audit invariants used as the systems governance foundation.',
      type: 'Methodology reference',
      status: 'Available',
      statusTone: 'available',
      icon: 'beaker',
      ctaText: 'Open overview',
      ctaUrl: '/research/hge',
    },
    {
      id: 2,
      title: 'Technical papers archive',
      description:
        'Collection of technical notes and working papers supporting evaluation, review, and institutional implementation planning.',
      type: 'Working papers',
      status: 'Working draft',
      statusTone: 'draft',
      icon: 'document-text',
      ctaText: 'View archive',
      ctaUrl: '/technical-papers',
    },
  ];

  const handleResourceClick = (resource: Resource) => {
    trackResourceEngagement('technical_resource', resource.title, 'institution');
  };

  const handleConsultationClick = () => {
    trackCTAClick({
      cta_id: 'technical_consultation',
      cta_location: 'systems_technical_resources',
      cta_text: 'Initiate dialogue',
      destination: '/engage',
      audience_type: 'institution',
    });
  };

  return (
    <section className={`py-20 bg-muted ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-headline font-semibold text-foreground mb-4">
            Technical resources
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mb-3">
            Reference, evaluation, and in-development materials for institutional stakeholders.
            Resources provide design context, framework guidance, and support implementation
            planning.
          </p>
          <p className="text-sm text-muted-foreground font-body max-w-3xl italic">
            Availability varies by development stage. Materials are provided for evaluation,
            dialogue, and design review.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon
                      name={resource.icon as any}
                      size={20}
                      variant="outline"
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-base font-headline font-semibold text-foreground">
                        {resource.title}
                      </h3>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${statusClasses[resource.statusTone]}`}
                      >
                        {resource.status}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground font-body mb-3">{resource.type}</p>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href={resource.ctaUrl}
                onClick={() => handleResourceClick(resource)}
                className="inline-flex items-center space-x-2 text-sm font-cta font-medium text-primary hover:text-primary/80 transition-colors duration-200"
              >
                <Icon name="arrow-right" size={16} variant="outline" />
                <span>{resource.ctaText}</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                Request technical consultation
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                Engage with our systems architecture team for detailed technical discussions and
                implementation planning.
              </p>
            </div>
            <Link
              href="/engage"
              onClick={handleConsultationClick}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground text-sm font-cta font-medium rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-hover whitespace-nowrap"
            >
              Initiate dialogue
              <Icon name="arrow-right" size={16} variant="outline" className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalResources;
