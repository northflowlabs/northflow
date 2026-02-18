import React from 'react';

export default function InitiativeHero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
      <div className="max-w-[1400px] mx-auto px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 px-4 py-2 rounded-sm mb-6">
            <span className="text-xs font-cta font-medium tracking-wide uppercase">
              Northflow Initiatives
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-semibold mb-6 leading-tight">
            Structured research and validation programmes
          </h1>
          <p className="text-lg font-body text-primary-foreground/90 leading-relaxed mb-8">
            Northflow conducts applied research initiatives that validate and extend the Hypothesis
            Generation Engine across operational domains. Current programmes focus on space-enabled
            climate resilience and evidence infrastructure methodology.
          </p>
          <p className="text-sm font-body text-primary-foreground/70 leading-relaxed mb-8 italic">
            All initiatives ladder to Project HGE. Domain expansion follows strict validation
            milestones.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              <span className="text-sm font-body">Framework development</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              <span className="text-sm font-body">Pilot exploration</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              <span className="text-sm font-body">Institutional engagement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
