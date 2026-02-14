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
      title: 'Nordics',
      description: 'Primary grounding in regulated Nordic infrastructure and research contexts.',
    },
    {
      title: 'Spain',
      description: 'Active engagement in energy, systems, and resilience-oriented dialogues.',
    },
    {
      title: 'European Union',
      description: 'Cross-border governance awareness and institutional coordination contexts.',
    },
    {
      title: 'Cross-border systems',
      description:
        'Structured methodologies designed for interoperability and institutional consistency.',
    },
  ];

  return (
    <section className={`bg-background py-16 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-6">
            Regional grounding and European scope
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Developed within Nordic regulatory systems with active engagement across European
            institutional environments.
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
