import Link from 'next/link';

interface ResearchLabSectionProps {}

function ResearchLabSection({}: ResearchLabSectionProps) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-light mb-8 text-foreground">
          Northflow Research Lab
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Our research division investigates critical challenges in sovereign
          infrastructure, operational continuity, and institutional systems. We
          publish findings on cryptographic frameworks, governance models, and
          long-term digital preservation—contributing to the broader discourse on
          resilient institutional technology.
        </p>
        <Link
          href="/research"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
        >
          Explore research publications
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default ResearchLabSection;