import Link from 'next/link';

interface MethodologicalFoundationProps {
  className?: string;
}

const MethodologicalFoundation = ({ className = '' }: MethodologicalFoundationProps) => {
  return (
    <section className={`bg-background py-16 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-headline font-semibold text-foreground mb-6">
            Methodological foundation
          </h2>
          <p className="text-base text-foreground font-body leading-relaxed mb-6">
            EFOS is informed by Northflow Research methodologies developed in Project HGE. HGE
            contributes validation workflows, uncertainty-aware reasoning, and provenance practices
            that strengthen system robustness over time.
          </p>
          <Link
            href="/research/hge"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-200"
          >
            Read about Project HGE
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MethodologicalFoundation;
