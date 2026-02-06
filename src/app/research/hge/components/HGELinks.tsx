import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface HGELinksProps {
  className?: string;
}

const HGELinks = ({ className = '' }: HGELinksProps) => {
  return (
    <section className={`bg-card border-y border-border py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
              Research access & technical briefings
            </h2>
            <p className="text-lg font-body text-muted-foreground">
              HGE technical materials are maintained internally and shared selectively with qualified research partners and institutional collaborators.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-background border border-border rounded-sm p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                  <Icon name="LockClosedIcon" size={24} variant="outline" className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                    Controlled research access
                  </h3>
                  <p className="text-base font-body text-muted-foreground leading-relaxed mb-4">
                    Project HGE technical papers, system documentation, and validation materials are maintained internally and shared selectively with research partners, funding agencies, and institutional collaborators.
                  </p>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    Public releases will follow peer review, partner validation, and governance review.
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border">
                <Link
                  href="/engage"
                  className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm hover:bg-primary/90 transition-colors duration-200 font-cta font-medium"
                >
                  <span>Request research briefing</span>
                  <Icon name="ArrowRightIcon" size={16} variant="outline" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-muted border border-border rounded-sm p-6">
            <div className="flex items-start space-x-3">
              <Icon name="InformationCircleIcon" size={20} variant="outline" className="text-muted-foreground flex-shrink-0 mt-0.5" />
              <p className="text-sm font-body text-muted-foreground">
                Research briefings are provided to qualified partners following institutional review. Materials are shared under appropriate confidentiality and collaboration frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HGELinks;