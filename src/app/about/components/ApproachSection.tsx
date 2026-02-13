interface ApproachSectionProps {
  className?: string;
}

const ApproachSection = ({ className = '' }: ApproachSectionProps) => {
  const principles = [
    {
      title: 'Infrastructure before interfaces',
      description:
        'Foundational reasoning and verification layers precede interface layers. We built the deterministic execution engine and evidence verification system before any user-facing surface. Systems must operate reliably before they scale.',
    },
    {
      title: 'Research before execution',
      description:
        'Architectures are informed by structured methodology and validation, not assumption or trend. HGE\'s design was validated against Gaia DR3 - one of the most complex astronomical datasets available - before being adapted to Earth Observation.',
    },
    {
      title: 'Operations over abstraction',
      description:
        'Systems are designed for real institutional environments, with resilience and auditability as primary constraints. The proof inventory determines what is publicly claimed. No capability is presented without working implementation or documented validation.',
    },
  ];

  return (
    <section className={`bg-background py-16 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-12 text-center">
            How we work
          </h2>
          <div className="space-y-8">
            {principles.map((principle, index) => (
              <div key={index} className="border-l-2 border-primary pl-6">
                <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                  {principle.title}
                </h3>
                <p className="text-base text-muted-foreground font-body leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
