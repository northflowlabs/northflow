import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ProcessStep {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface EngagementProcessProps {
  className?: string;
}

const EngagementProcess = ({ className = '' }: EngagementProcessProps) => {
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      icon: 'DocumentMagnifyingGlassIcon',
      title: 'Initial review',
      description: 'Each inquiry is reviewed for relevance, scope, and alignment with Northflow research and systems focus.',
    },
    {
      id: 2,
      icon: 'ClipboardDocumentCheckIcon',
      title: 'Contextual evaluation',
      description: 'Additional clarification may be requested to understand institutional context and objectives.',
    },
    {
      id: 3,
      icon: 'LockClosedIcon',
      title: 'Confidential dialogue',
      description: 'Engagement is conducted under appropriate confidentiality standards and professional discretion.',
    },
    {
      id: 4,
      icon: 'ArrowPathIcon',
      title: 'Structured next steps',
      description: 'Where appropriate, next steps may include briefings, exploratory discussions, or referral to research or systems teams.',
    },
  ];

  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
            Engagement process
          </h2>
          <p className="text-base text-muted-foreground font-body max-w-2xl mx-auto">
            Engagement follows a structured, step-based process designed for institutional and public-sector contexts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="bg-card p-6 rounded-sm border border-border hover:border-primary/30 transition-colors duration-200"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                <Icon 
                  name={step.icon as any} 
                  size={24} 
                  variant="outline" 
                  className="text-primary"
                />
              </div>
              <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementProcess;