interface PowerGridCTAProps {
  className?: string;
}

const PowerGridCTA = ({ className = '' }: PowerGridCTAProps) => {
  return (
    <section className={`bg-primary text-primary-foreground py-16 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold mb-6">
            Power Grid Systems Collaboration
          </h2>
          <p className="text-lg font-body leading-relaxed mb-8 opacity-90">
            We are actively seeking collaboration and information exchange on power grid systems,
            operational continuity frameworks, and cross-border energy infrastructure governance. If
            your institution is working on related initiatives or requires technical consultation,
            we welcome the opportunity to engage.
          </p>
          <a
            href="/engage/request-access?source=efos-framework"
            className="inline-block px-8 py-3.5 bg-primary-foreground text-primary text-base font-cta font-medium rounded-sm hover:bg-primary/90 transition-colors duration-200"
          >
            Request collaboration
          </a>
        </div>
      </div>
    </section>
  );
};

export default PowerGridCTA;
