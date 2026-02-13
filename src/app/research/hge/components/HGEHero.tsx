import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HGEHeroProps {
  className?: string;
}

const HGEHero = ({ className = '' }: HGEHeroProps) => {
  return (
    <section
      className={`bg-gradient-to-br from-primary to-primary/90 text-primary-foreground ${className}`}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 px-4 py-2 rounded-sm mb-6">
              <span className="text-xs font-cta font-medium tracking-wide uppercase">
                Flagship research project — operational since 2025
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-semibold mb-4 leading-tight">
              Hypothesis Generation Engine
            </h1>
            <p className="text-xl md:text-2xl font-headline text-primary-foreground/95 mb-6 leading-tight">
              Structured scientific discovery infrastructure
            </p>
            <p className="text-lg font-body text-primary-foreground/90 leading-relaxed mb-6">
              HGE converts complex observational data into verifiable evidence through machine-driven
              hypothesis search, deterministic execution, and audit-grade provenance tracking.
              Validated on Gaia DR3 astronomical catalog. Currently adapting to ESA Sentinel Earth
              Observation.
            </p>
            <p className="text-sm font-body text-primary-foreground/75 leading-relaxed mb-8">
              Built for institutional environments where reproducibility, auditability, and
              long-term operational integrity are non-negotiable.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                href="/engage"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary-foreground text-primary text-base font-cta font-medium rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-hover"
              >
                Request technical briefing
              </Link>
              <Link
                href="#validation-evidence"
                className="inline-flex items-center text-base font-cta font-medium text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              >
                View validation evidence →
              </Link>
            </div>

            <p className="text-xs font-cta font-medium tracking-wide uppercase text-primary-foreground/80">
              Deterministic execution · Signed evidence bundles · Gaia DR3 validated · ESA
              adaptation underway
            </p>
          </div>

          <div className="relative w-full h-[420px] lg:h-[540px] rounded-sm overflow-hidden bg-primary/20">
            <Image
              src="/assets/images/Gaia DR3 - Northflow HGE.jpg"
              alt="Gaia DR3 visualization for Northflow HGE validation"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-95"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HGEHero;
