import React from 'react';
import Icon from '@/components/ui/AppIcon';


interface AdditionalContactPathwaysProps {
  className?: string;
}

const AdditionalContactPathways = ({ className = '' }: AdditionalContactPathwaysProps) => {
  return (
    <section className={`bg-card py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4 text-center">
            Additional contact pathways
          </h2>
          <p className="text-base text-muted-foreground font-body text-center mb-12">
            For specific engagement contexts, alternative pathways may be appropriate following initial review.
          </p>

          <div className="bg-background p-8 rounded-sm border border-border space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="AcademicCapIcon" size={20} variant="outline" className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                  Research collaboration inquiries
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  Refer to the Research section for information on Northflow Research Lab and applied research dialogue.
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="NewspaperIcon" size={20} variant="outline" className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                    Media or public inquiries
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    Use the general contact form and indicate Media inquiry in the message field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalContactPathways;