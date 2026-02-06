interface AccessRequestHeroProps {
  className?: string;
}

const AccessRequestHero = ({ className = '' }: AccessRequestHeroProps) => {
  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-semibold text-foreground mb-6">
            Request access to institutional materials
          </h1>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Certain research publications, framework documents, and initiative materials are made available through structured institutional engagement to ensure appropriate use, contextual understanding, and governance alignment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AccessRequestHero;