import Image from 'next/image';

interface HGEGaiaVisualProps {
  className?: string;
}

const HGEGaiaVisual = ({ className = '' }: HGEGaiaVisualProps) => {
  return (
    <section className={`bg-background py-16 lg:py-24 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-sm mb-6">
              <span className="text-xs font-cta font-medium tracking-wide uppercase text-primary">
                Gaia DR3 validation image
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-headline font-semibold text-foreground mb-6">
              Gaia DR3 - Northflow HGE
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
              Visual context from HGE validation work on Gaia Data Release 3. The image supports the
              project&apos;s reproducibility-first approach to large-scale astronomical evidence.
            </p>
            <p className="text-sm text-muted-foreground font-body">
              Validation artifact context: 1.8 billion observational records processed through
              deterministic, provenance-aware workflows.
            </p>
          </div>

          <div className="relative w-full h-[400px] lg:h-[500px] rounded-sm overflow-hidden border border-border bg-card">
            <Image
              src="/assets/images/Gaia DR3 - Northflow HGE.jpg"
              alt="Gaia DR3 visualization used in Northflow HGE validation context"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HGEGaiaVisual;
