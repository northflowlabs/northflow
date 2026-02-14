interface MissionSectionProps {
  className?: string;
}

const MissionSection = ({ className = '' }: MissionSectionProps) => {
  const principles = [
    {
      title: 'Sovereign-aligned architecture',
      description:
        'Systems designed for institutional oversight, cross-border collaboration, and regulatory coherence.',
    },
    {
      title: 'Operational continuity',
      description:
        'Architectures built to function across crisis, transition, and evolving governance conditions.',
    },
    {
      title: 'Institutional trust',
      description: 'Deterministic evaluation and verifiable outputs suitable for formal review.',
    },
    {
      title: 'Mission-critical reliability',
      description: 'Infrastructure designed for environments where failure is not acceptable.',
    },
  ];

  return (
    <section className={`bg-background py-16 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-6">
            Our institutional mission
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            We exist to formalize how institutions generate, evaluate, and verify knowledge under
            uncertainty — prioritizing reproducibility, structural clarity, and long-term
            operational resilience over short-term acceleration.
          </p>
          <p className="text-sm text-muted-foreground/80 font-body leading-relaxed mt-6">
            Northflow engages with public research agencies, academic institutions, and
            international partners on long-horizon infrastructure research.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-headline font-semibold text-foreground mb-4">
                {principle.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
