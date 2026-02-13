interface ClosingSectionProps {}

function ClosingSection({}: ClosingSectionProps) {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed text-center">
          We build for decades, not quarters. Institutional infrastructure requires long-term
          orientation, operational discipline, and unwavering commitment to sovereign continuity.
        </p>
      </div>
    </section>
  );
}

export default ClosingSection;
