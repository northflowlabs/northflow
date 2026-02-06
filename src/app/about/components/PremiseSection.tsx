interface PremiseSectionProps {}

function PremiseSection({}: PremiseSectionProps) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-2xl md:text-3xl leading-relaxed text-foreground font-light">
          The greatest risk of the digital era is not slow innovation—it is the
          erosion of institutional memory, operational continuity, and sovereign
          control. We build infrastructure that endures.
        </p>
      </div>
    </section>
  );
}

export default PremiseSection;