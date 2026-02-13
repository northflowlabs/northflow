interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section
      className={`bg-gradient-to-br from-primary to-primary/90 text-primary-foreground ${className}`}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 px-4 py-2 rounded-sm mb-6">
            <span className="text-xs font-cta font-medium tracking-wide uppercase">
              Northflow Technologies — About
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-semibold mb-6 leading-tight">
            Built to support institutions that require verifiable continuity
          </h1>
          <p className="text-lg font-body text-primary-foreground/90 leading-relaxed mb-8">
            Northflow Technologies develops institutional evidence infrastructure for climate and
            critical systems. Our architectures formalize hypothesis discovery, reproducible
            evaluation, and governance-grade verification in regulated European environments.
          </p>
          <p className="text-xs font-body text-primary-foreground/70 leading-relaxed mb-8 italic">
            Designed for cross-border institutional collaboration · GDPR-aligned ·
            Standards-oriented architecture
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              <span className="text-sm font-body">
                Designed for cross-border institutional collaboration
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              <span className="text-sm font-body">GDPR-aligned</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              <span className="text-sm font-body">Standards-oriented architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
