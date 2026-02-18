interface RegionalScope {
  title: string;
  description: string;
}

interface RegionalPresenceSectionProps {
  className?: string;
}

const RegionalPresenceSection = ({ className = '' }: RegionalPresenceSectionProps) => {
  const scopes: RegionalScope[] = [
    {
      title: 'Norway',
      description: 'Institutional base and primary regulatory grounding for Northflow development.',
    },
    {
      title: 'Nordic operating context',
      description:
        'Design orientation shaped by long-horizon infrastructure requirements in regulated environments.',
    },
    {
      title: 'European institutional context',
      description: 'Cross-border collaboration and governance-aware system architecture planning.',
    },
    {
      title: 'Institutional engagement pathways',
      description:
        'Activation based on confirmed institutional dialogue, validation milestones, and partnership readiness.',
    },
  ];

  return (
    <section className={`bg-background py-16 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-6">
            Operating context
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Northflow is based in Norway and operates within broader European institutional contexts
            where continuity, auditability, and governance alignment are required.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scopes.map((scope, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-headline font-semibold text-foreground mb-4">
                {scope.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {scope.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionalPresenceSection;
