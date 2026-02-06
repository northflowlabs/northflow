'use client';

import Icon from '@/components/ui/AppIcon';
import { trackCTAClick, trackAudienceEngagement } from '@/lib/analytics-events';

interface EngagementPath {
  id: number;
  icon: string;
  title: string;
  description: string;
  action: string;
  audienceType: 'institution' | 'research_partner' | 'institution';
}

interface EngagementSectionProps {
  className?: string;
}

const EngagementSection = ({ className = '' }: EngagementSectionProps) => {
  const engagementPaths: EngagementPath[] = [
    {
      id: 1,
      icon: 'BuildingOffice2Icon',
      title: 'Government entities',
      description: 'Formal dialogue process for sovereign infrastructure requirements and institutional partnerships.',
      action: 'Initiate institutional dialogue',
      audienceType: 'institution',
    },
    {
      id: 2,
      icon: 'UserGroupIcon',
      title: 'Research collaboration',
      description: 'Academic and policy research partnerships through Northflow Research Lab initiatives.',
      action: 'Explore research opportunities',
      audienceType: 'research_partner',
    },
    {
      id: 3,
      icon: 'BuildingLibraryIcon',
      title: 'Asset managers',
      description: 'Mission-critical infrastructure consultation for regulated financial institutions.',
      action: 'Request formal consultation',
      audienceType: 'institution',
    }
  ];

  const handlePathClick = (path: EngagementPath) => {
    trackAudienceEngagement('cta_click', {
      location: 'homepage_engagement_section',
      context: path.title,
      ctaText: path.action,
      destination: '/engage',
    });
  };

  const handleMainCTAClick = () => {
    trackCTAClick({
      cta_id: 'begin_formal_engagement',
      cta_location: 'homepage_engagement_section',
      cta_text: 'Begin formal engagement process',
      destination: '/engage',
      audience_type: 'institution',
    });
  };

  return (
    <section className={`bg-card py-20 lg:py-24 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-semibold text-foreground mb-4">
            Institutional engagement
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Formal dialogue pathways for qualified stakeholders and institutional partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {engagementPaths.map((path) => (
            <div
              key={path.id}
              className="bg-background p-8 rounded-sm border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-6">
                <Icon 
                  name={path.icon as any} 
                  size={24} 
                  variant="outline" 
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                {path.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                {path.description}
              </p>
              <a
                href="/engage"
                onClick={() => handlePathClick(path)}
                className="inline-flex items-center space-x-2 text-primary font-cta font-medium text-sm hover:underline transition-all duration-200"
              >
                <span>{path.action}</span>
                <Icon name="ArrowRightIcon" size={16} variant="outline" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/engage"
            onClick={handleMainCTAClick}
            className="inline-block px-8 py-3.5 bg-primary text-primary-foreground text-base font-cta font-medium rounded-sm transition-all duration-200 ease-institutional hover:-translate-y-0.5 hover:shadow-hover"
          >
            Begin formal engagement process
          </a>
          <p className="text-sm text-muted-foreground font-body mt-3">
            Research dialogue · Institutional collaboration · Funding discussions
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;