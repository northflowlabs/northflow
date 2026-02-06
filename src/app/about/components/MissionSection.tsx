interface MissionSectionProps {
  className?: string;
}

const MissionSection = ({ className = '' }: MissionSectionProps) => {
  const principles = [
    {
      title: "Sovereign technology",
      description: "Infrastructure that governments can audit, govern, and control without external dependencies or proprietary constraints."
    },
    {
      title: "Operational continuity",
      description: "Systems designed to function during network disruptions, political transitions, and crisis scenarios without degradation."
    },
    {
      title: "Institutional trust",
      description: "Demonstrated capability through regulatory compliance, audit transparency, and proven deployment in regulated environments."
    },
    {
      title: "Mission-critical reliability",
      description: "Infrastructure built for organizations that cannot accept failure, with focus on resilience over feature velocity."
    }
  ];

  return (
    <section className={`bg-background py-16 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-6">
            Our institutional mission
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            We exist to provide European institutions with digital infrastructure that prioritizes sovereignty, auditability, and operational continuity over commercial convenience.
          </p>
          <p className="text-sm text-muted-foreground/80 font-body leading-relaxed mt-6">
            Northflow engages with public research agencies, academic institutions, and international partners on long-horizon infrastructure research.
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