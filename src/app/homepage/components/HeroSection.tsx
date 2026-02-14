import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`bg-background py-16 lg:py-24 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-headline font-semibold text-foreground leading-tight mb-6">
              Institutional <span className="whitespace-nowrap">scientific discovery</span>{' '}
              infrastructure for climate, space, and critical systems
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground font-body leading-relaxed mb-6">
              Northflow builds institutional-grade evidence infrastructure that converts large-scale,
              uncertain datasets into reproducible, decision-ready intelligence. Our core asset is
              the Hypothesis Generation Engine (HGE) - a structured system for machine-driven
              hypothesis search, evaluation, and verification under uncertainty.
            </p>
            <p className="text-sm text-muted-foreground font-body mb-5">
              Built in Norway. Validated on astronomical observation data. Adapting to ESA Sentinel
              Earth Observation. Designed for European institutional environments.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/engage"
                className="inline-block px-8 py-3.5 bg-primary text-primary-foreground text-base font-cta font-medium rounded-sm transition-all duration-200 ease-institutional hover:-translate-y-0.5 hover:shadow-hover"
              >
                Request institutional briefing
              </Link>
              <Link
                href="/research/hge"
                className="inline-flex items-center text-base font-cta font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Explore the engine →
              </Link>
            </div>
          </div>

          {/* Right: Geographic Context Image */}
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-sm overflow-hidden">
            <Image
              src="/assets/images/Northflow - Earth Sat.jpg"
              alt="Earth from space showing oceans and clouds with bright light reflection, representing global climate and critical systems monitoring"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-90 grayscale-[10%]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
