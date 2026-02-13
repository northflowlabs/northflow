import Image from 'next/image';

interface EFOSHeroProps {
  className?: string;
}

const EFOSHero = ({ className = '' }: EFOSHeroProps) => {
  return (
    <section className={`bg-background py-16 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <div className="mb-4">
              <span className="text-xs font-cta font-medium text-primary uppercase tracking-wider">
                Framework Documentation
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-semibold text-foreground mb-6 leading-tight">
              The European Flexibility Operating System (EFOS)
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
              EFOS is a proposed European public–private digital infrastructure designed to provide
              a harmonised, cross-border operational layer for predicting, coordinating, and
              managing flexibility across Europe's energy system. It responds directly to the
              objectives of the Digitalisation of the Energy System (DES), the Green Deal, the
              Energy Performance of Buildings Directive (EPBD), the Data Act, the AI Act, and the
              Net Zero Industry Act.
            </p>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
              EFOS is conceived as a unified AI-driven infrastructure that:
            </p>
            <ul className="text-base text-muted-foreground font-body leading-relaxed mb-6 space-y-2 list-disc list-inside">
              <li>Forecasts demand, generation, congestion, and pricing in the short term.</li>
              <li>
                Orchestrates distributed assets across buildings, industry, storage, and mobility.
              </li>
              <li>Provides real-time interfaces for DSOs, TSOs, and flexibility markets.</li>
              <li>Implements EU-wide interoperability and data harmonisation.</li>
              <li>Ensures compliance with DES, EPBD, Data Act, AI Act, and NIS2.</li>
            </ul>
            <p className="text-base text-muted-foreground font-body leading-relaxed italic">
              It is not a commercial software product but a long-term digital backbone intended to
              support EU system objectives.
            </p>
          </div>

          {/* Right side - Image */}
          <div>
            <div className="relative w-full h-[500px] lg:h-[600px] rounded-sm overflow-hidden shadow-institutional">
              <Image
                src="/assets/images/sigmund-r9PeXDCJyEw-unsplash-1767126969235.jpg"
                alt="Electrical transmission towers and power lines infrastructure representing European energy system coordination"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EFOSHero;
