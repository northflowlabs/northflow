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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-cta font-semibold tracking-[0.16em] text-primary mb-3">
              ENGAGEMENT
            </p>
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
              Research access & technical briefings
            </h2>
            <p className="text-lg font-body text-muted-foreground leading-relaxed">
              HGE technical materials, validation artifacts, and system documentation are maintained
              internally and shared selectively with qualified research partners, funding agencies,
              and institutional collaborators. Public releases follow peer review, partner
              validation, and governance review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background border border-border rounded-sm p-6">
              <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                <Icon name="document-text" size={20} variant="outline" className="text-primary" />
              </div>
              <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                Public institutional materials
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                Framework overviews, validation summaries, and general system descriptions available
                through this website.
              </p>
            </div>

            <div className="bg-background border border-border rounded-sm p-6">
              <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                <Icon
                  name="building-library"
                  size={20}
                  variant="outline"
                  className="text-primary"
                />
              </div>
              <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                Structured engagement
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                Technical specifications, implementation guides, and operational procedures provided
                through institutional dialogue.
              </p>
            </div>

            <div className="bg-background border border-border rounded-sm p-6">
              <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                <Icon name="lock-closed" size={20} variant="outline" className="text-primary" />
              </div>
              <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                Controlled disclosure
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                Detailed architectural documentation, security specifications, and validation
                datasets subject to qualification requirements and confidentiality protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HGELinks;
