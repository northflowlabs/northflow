interface ApproachSectionProps {
  className?: string;
}

const ApproachSection = ({ className = '' }: ApproachSectionProps) => {
  const principles = [
    {
      title: "Infrastructure before interfaces",
      description: "We prioritise foundational systems and control layers before user-facing components. Institutional technology must operate reliably, securely, and predictably before usability layers are introduced."
    },
    {
      title: "Research before execution",
      description: "System design is informed by structured research and applied methodology developed through Northflow Research Lab. Solutions are developed based on validated frameworks, not assumptions or short-term trends."
    },
    {
      title: "Operations over abstraction",
      description: "We focus on systems designed for real-world operation. Deployment, maintenance, resilience, and continuity are treated as core design requirements, not downstream concerns."
    }
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