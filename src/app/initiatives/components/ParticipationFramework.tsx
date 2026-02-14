'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function ParticipationFramework() {
  return (
    <section className="bg-card border-t border-border py-24">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-headline font-semibold text-foreground mb-4">
            Initiative engagement
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl">
            Engagement pathways aligned with current institutional priorities for research
            collaboration and bounded pilot scoping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-background border border-border rounded-sm p-8 hover:shadow-hover transition-all duration-200">
            <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
              <Icon name="academic-cap" size={24} variant="outline" className="text-primary" />
            </div>
            <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
              Research collaboration
            </h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
              Academic and research partnerships in structured discovery methodology, Earth
              Observation applications, and evidence system validation. Co-publication and
              methodological co-development.
            </p>
            <Link
              href="/engage"
              className="inline-flex items-center text-sm font-cta font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Initiate research dialogue
              <Icon name="arrow-right" size={16} variant="outline" className="ml-1" />
            </Link>
          </div>

          <div className="bg-background border border-border rounded-sm p-8 hover:shadow-hover transition-all duration-200">
            <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
              <Icon name="building-office" size={24} variant="outline" className="text-primary" />
            </div>
            <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
              Institutional pilot scoping
            </h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
              Scoping and validation of HGE applications in institutional contexts. Emphasis on
              bounded evaluation and evidence integrity assessment.
            </p>
            <Link
              href="/engage"
              className="inline-flex items-center text-sm font-cta font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Request pilot scoping
              <Icon name="arrow-right" size={16} variant="outline" className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
