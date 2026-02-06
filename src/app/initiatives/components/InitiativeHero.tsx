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
            Institutional infrastructure initiatives
          </h1>
          <p className="text-lg font-body text-primary-foreground/90 leading-relaxed mb-8">
            Strategic initiatives under development, focused on designing and advancing digital infrastructure frameworks for institutional environments. These initiatives are structured to mature through research, pilot exploration, and phased institutional engagement.
          </p>
          <p className="text-sm font-body text-primary-foreground/70 leading-relaxed mb-8 italic">
            Intended for institutional and research audiences. Public materials are released selectively.
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