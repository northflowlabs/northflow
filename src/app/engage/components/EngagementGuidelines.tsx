import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Guideline {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface EngagementGuidelinesProps {
  className?: string;
}

const EngagementGuidelines = ({ className = '' }: EngagementGuidelinesProps) => {
  const guidelines: Guideline[] = [
    {
      id: 1,
      icon: 'ClockIcon',
      title: 'Response timeline',
      description: 'Initial review within 5-7 business days. Complex inquiries may require additional evaluation time.',
    },
    {
      id: 2,
      icon: 'DocumentCheckIcon',
      title: 'Evaluation process',
      description: 'All inquiries undergo institutional review to ensure alignment with our engagement criteria and capacity.',
    },
    {
      id: 3,
      icon: 'LockClosedIcon',
      title: 'Confidentiality',
      description: 'Dialogue conducted under appropriate confidentiality frameworks. NDA arrangements available where required.',
    },
    {
      id: 4,
      icon: 'UserGroupIcon',
      title: 'Structured dialogue',
      description: 'Engagement follows a phased approach: initial briefing, technical evaluation, pilot exploration, or consortium participation.',
    },
  ];

  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
            Engagement process
          </h2>
          <p className="text-base text-muted-foreground font-body max-w-2xl mx-auto">
            Our institutional engagement follows a structured, transparent process designed for government entities and qualified stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guidelines.map((guideline) => (
            <div
              key={guideline.id}
              className="bg-card p-6 rounded-sm border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                <Icon 
                  name={guideline.icon as any} 
                  size={24} 
                  variant="outline" 
                  className="text-primary"
                />
              </div>
              <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                {guideline.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {guideline.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-card p-8 rounded-sm border border-border">
            <h3 className="text-xl font-headline font-semibold text-foreground mb-4 flex items-center">
              <Icon name="InformationCircleIcon" size={24} variant="outline" className="text-primary mr-3" />
              Alternative contact methods
            </h3>
            <div className="space-y-4 text-sm text-muted-foreground font-body">
              <p>
                <strong className="text-foreground">For urgent institutional matters:</strong> Direct communication channels may be established following initial engagement review.
              </p>
              <p>
                <strong className="text-foreground">For research collaboration inquiries:</strong> Please reference Northflow Research Lab on the <a href="/research" className="text-primary hover:underline">Research page</a> for academic and policy research partnerships.
              </p>
              <p>
                <strong className="text-foreground">For media inquiries:</strong> Please use the general contact form and specify "Media Inquiry" in your dialogue intent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementGuidelines;