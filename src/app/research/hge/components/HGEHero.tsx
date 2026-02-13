import React from 'react';

interface HGEHeroProps {
  className?: string;
}

const HGEHero = ({ className = '' }: HGEHeroProps) => {
  return (
    <section
      className={`bg-gradient-to-br from-primary to-primary/90 text-primary-foreground ${className}`}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 px-4 py-2 rounded-sm mb-6">
            <span className="text-xs font-cta font-medium tracking-wide uppercase">
              Northflow Research Lab — Flagship Research Project
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-semibold mb-6 leading-tight">
            Project HGE (Hypothesis Generation Engine)
          </h1>
          <p className="text-lg font-body text-primary-foreground/90 leading-relaxed">
            Project HGE operationalizes the scientific method as infrastructure. It formulates
            testable hypotheses, designs experiments to maximize information gain, executes them on
            real instruments under operational constraints, and updates confidence based on observed
            evidence. The system is instrument-agnostic, provenance-aware, and designed to function
            in environments characterized by noise, drift, and uncertainty. HGE represents a
            methodological approach to automated scientific discovery grounded in rigorous
            validation and reproducibility.
          </p>
          <p className="text-sm font-body text-primary-foreground/70 leading-relaxed mt-4 italic">
            Intended for institutional and research audiences. Public materials are released
            selectively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HGEHero;
