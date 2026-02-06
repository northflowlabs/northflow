interface ResearchHeroProps {
  className?: string;
}

const ResearchHero = ({ className = '' }: ResearchHeroProps) => {
  return (
    <section className={`bg-gradient-to-br from-primary to-primary/90 text-primary-foreground ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 px-4 py-2 rounded-sm mb-6">
            <span className="text-xs font-cta font-medium tracking-wide uppercase">
              Northflow Research Lab — Internal Division
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-semibold mb-6 leading-tight">
            Research and applied frameworks for sovereign digital infrastructure
          </h1>
          <p className="text-lg font-body text-primary-foreground/90 leading-relaxed mb-8">
            Northflow Research Lab develops applied research, working papers, and system frameworks to inform governable, resilient institutional infrastructure. Research is active, systems-oriented, and intended to inform real-world infrastructure decisions.
          </p>
          <p className="text-sm font-body text-primary-foreground/70 leading-relaxed mb-8 italic">
            Intended for institutional and research audiences. Public materials are released selectively.
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
              <span className="text-sm font-body">Framework development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchHero;