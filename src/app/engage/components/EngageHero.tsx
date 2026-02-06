import React from 'react';

interface EngageHeroProps {
  className?: string;
}

const EngageHero = ({ className = '' }: EngageHeroProps) => {
  return (
    <section className={`bg-gradient-to-br from-primary to-primary/90 text-primary-foreground ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8 py-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 px-4 py-2 rounded-sm mb-6">
            <span className="text-xs font-cta font-medium tracking-wide uppercase">
              Institutional Engagement
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-semibold mb-6 leading-tight">
            Request a briefing
          </h1>
          <div className="space-y-4 text-lg md:text-xl text-primary-foreground/90 font-body leading-relaxed mb-8">
            <p>
              Northflow conducts briefings with selected institutional stakeholders exploring sovereign digital infrastructure, long-horizon systems, or research collaboration.
            </p>
            <p>
              Briefings are confidential, non-commercial exchanges focused on alignment, governance, and architectural considerations — not product demonstrations or sales discussions.
            </p>
            <p>
              All requests are subject to internal review. Engagement is selective.
            </p>
          </div>
          <div className="flex items-center space-x-6 text-sm text-primary-foreground/90 font-body">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
              <span>Structured inquiry process</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
              <span>Confidential and non-commercial dialogue</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
              <span>Institutional review and response</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngageHero;