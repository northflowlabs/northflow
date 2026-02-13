interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`bg-primary text-primary-foreground py-16 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold mb-6">
            Long-term orientation
          </h2>
          <p className="text-lg font-body leading-relaxed mb-8 opacity-90">
            Northflow is structured for long-horizon institutional work. Evidence infrastructure
            requires continuity, disciplined development, and governance models capable of
            sustaining oversight over time. Systems are designed to remain stable across evolving
            regulatory and operational conditions.
          </p>
          <a
            href="/engage"
            className="inline-block px-8 py-3.5 bg-primary-foreground text-primary text-base font-cta font-medium rounded-sm transition-all duration-200 ease-institutional hover:-translate-y-0.5 hover:shadow-hover"
          >
            Request institutional dialogue
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
