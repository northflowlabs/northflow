'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { trackCTAClick } from '@/lib/analytics-events';

interface HGEContactProps {
  className?: string;
}

const HGEContact = ({ className = '' }: HGEContactProps) => {
  const handleResearchDialogueClick = () => {
    trackCTAClick({
      cta_id: 'research_dialogue',
      cta_location: 'hge_contact_section',
      cta_text: 'Initiate research dialogue',
      destination: '/engage',
      audience_type: 'research_partner',
    });
  };

  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-sm p-12 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-6">
              <Icon name="academic-cap" size={32} variant="outline" className="text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-headline font-semibold text-foreground mb-4">
              Discuss research collaboration
            </h2>
            <p className="text-base font-body text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Institutions and research organizations interested in exploring HGE methodology,
              validation approaches, or potential collaborative applications are invited to initiate
              structured dialogue through the institutional engagement process.
            </p>
            <Link
              href="/engage"
              onClick={handleResearchDialogueClick}
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-cta font-medium rounded-sm hover:bg-primary/90 transition-all duration-200 ease-institutional hover:-translate-y-0.5 hover:shadow-hover"
            >
              Initiate research dialogue
              <Icon name="arrow-right" size={16} variant="outline" className="ml-2" />
            </Link>
            <p className="text-xs font-body text-muted-foreground mt-6">
              Engagement follows structured institutional dialogue protocols. Response times vary
              based on inquiry complexity and alignment with current research priorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HGEContact;
