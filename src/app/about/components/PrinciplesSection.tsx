interface Principle {
  number: string;
  title: string;
  description: string;
}

interface PrinciplesSectionProps {}

function PrinciplesSection({}: PrinciplesSectionProps) {
  const principles: Principle[] = [
    {
      number: '01',
      title: 'Infrastructure before interfaces',
      description:
        'We prioritize foundational systems over surface-level applications. Robust infrastructure enables sustainable innovation and operational resilience across decades.',
    },
    {
      number: '02',
      title: 'Research before execution',
      description:
        'Every implementation is preceded by rigorous analysis. We invest in understanding systemic requirements before committing to architectural decisions.',
    },
    {
      number: '03',
      title: 'Operations over abstraction',
      description:
        'We favor proven operational patterns over theoretical frameworks. Real-world deployment experience informs our approach to system design and institutional integration.',
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-light mb-16 text-foreground">How we work</h2>
        <div className="space-y-12">
          {principles.map((principle) => (
            <div key={principle.number} className="border-l-2 border-primary pl-8 py-4">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-sm text-muted-foreground font-mono">{principle.number}</span>
                <h3 className="text-xl md:text-2xl font-normal text-foreground">
                  {principle.title}
                </h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PrinciplesSection;
