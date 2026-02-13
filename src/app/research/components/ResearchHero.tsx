interface ResearchHeroProps {
  className?: string;
}

const ResearchHero = ({ className = '' }: ResearchHeroProps) => {
  return (
    <section
      className={`bg-gradient-to-br from-primary to-primary/90 text-primary-foreground ${className}`}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 px-4 py-2 rounded-sm mb-6">
            <span className="text-xs font-cta font-medium tracking-wide uppercase">
              Northflow Research Lab — Internal Division
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-semibold mb-6 leading-tight">
            Structured evidence research and applied infrastructure design
          </h1>
          <p className="text-lg font-body text-primary-foreground/90 leading-relaxed mb-8">
            Research at Northflow exists to design and validate structured evidence infrastructure
            for climate resilience and mission-critical institutional systems.
          </p>
          <p className="text-sm font-body text-primary-foreground/70 leading-relaxed mb-4 italic">
            The program is applied, systems-oriented, and governed by methodological discipline. Its
            purpose is not theoretical exploration, but the development of reproducible reasoning
            frameworks that support institutional decision-making under uncertainty.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-body">Active research initiatives</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-body">Working papers and briefs</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-body">Methodological development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchHero;
