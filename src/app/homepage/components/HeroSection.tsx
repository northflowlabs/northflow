import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`bg-background py-20 lg:py-32 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-headline font-semibold text-foreground leading-tight mb-6">
              Institutional evidence infrastructure for climate and critical systems
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground font-body leading-relaxed mb-8">
              Structured, reproducible, and verifiable architectures designed for regulated European
              environments. Built in Norway. Operating across Europe.
            </p>
            <Link
              href="/engage"
              className="inline-block px-8 py-3.5 bg-primary text-primary-foreground text-base font-cta font-medium rounded-sm transition-all duration-200 ease-institutional hover:-translate-y-0.5 hover:shadow-hover"
            >
              Request institutional briefing
            </Link>
            <p className="text-sm text-muted-foreground font-body mt-3">
              For government entities, research institutions, and mission-critical stakeholders.
            </p>
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
