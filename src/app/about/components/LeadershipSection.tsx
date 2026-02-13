interface LeadershipMember {
  name: string;
  role: string;
  background: string;
  image: string;
  alt: string;
}

interface LeadershipSectionProps {
  className?: string;
}

const LeadershipSection = ({ className = '' }: LeadershipSectionProps) => {
  return (
    <section className={`bg-card py-16 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-6">
            Experience and approach
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Northflow is informed by collective experience across technology development, regulated
            environments, and mission-critical system design. This experience supports an approach
            to digital infrastructure that emphasises auditability, resilience, and governance
            requirements in institutional contexts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
