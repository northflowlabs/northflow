interface SystemsHeroProps {
  className?: string;
}

const SystemsHero = ({ className = '' }: SystemsHeroProps) => {
  return (
    <section
      className={`bg-gradient-to-br from-primary to-primary/90 text-primary-foreground ${className}`}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 px-4 py-2 rounded-sm mb-6">
            <span className="text-xs font-cta font-medium tracking-wide uppercase">
              Northflow Systems
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-semibold mb-6 leading-tight">
            Governable infrastructure systems
          </h1>
          <p className="text-sm font-body text-primary-foreground/70 leading-relaxed mb-8 italic">
            Reference architectures and implementation frameworks for regulated, mission-critical
            environments.
          </p>
          <p className="text-lg font-body text-primary-foreground/90 leading-relaxed mb-4">
            Systems designed to support regulated environments with continuity, oversight, and
            institutional governance requirements.
          </p>
          <p className="text-lg font-body text-primary-foreground/90 leading-relaxed">
            Architecture patterns emphasize auditability, control mapping, and operational
            resilience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SystemsHero;
