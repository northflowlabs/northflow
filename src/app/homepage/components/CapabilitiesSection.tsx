import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';

interface Capability {
  id: number;
  icon: string;
  title: string;
  description: string;
  metrics: string;
  backgroundImage?: string;
  backgroundAlt?: string;
}

interface CapabilitiesSectionProps {
  className?: string;
}

const CapabilitiesSection = ({ className = '' }: CapabilitiesSectionProps) => {
  const capabilities: Capability[] = [
    {
      id: 1,
      icon: 'server-stack',
      title: 'Infrastructure systems',
      description:
        'Governance-grade architectures designed for regulated environments and institutional oversight.',
      metrics: 'Designed to align with ISO/IEC 27001 principles.',
      backgroundImage: 'https://images.unsplash.com/photo-1712074228208-6b0de58d6a0b',
      backgroundAlt: 'Data centre exterior - modern institutional infrastructure building',
    },
    {
      id: 2,
      icon: 'document-magnifying-glass',
      title: 'Research & development',
      description:
        'Applied research frameworks supporting Earth Observation, climate resilience, and structured evaluation systems.',
      metrics: 'Institutional publications and technical documentation available.',
      backgroundImage: '/assets/images/EFOS_-_Flexibility_system-1767049348023.jpg',
      backgroundAlt: 'EFOS flexibility system research diagram',
    },
    {
      id: 3,
      icon: 'globe-europe-africa',
      title: 'European operating context',
      description:
        'Architectures developed within European regulatory environments and institutional compliance frameworks.',
      metrics: 'GDPR-aligned data protection approach.',
      backgroundImage:
        '/assets/images/Built_in_Norway_and_operating_across_Europe-1767115614475.jpg',
      backgroundAlt:
        'Modern institutional buildings representing Nordic and European operational context',
    },
  ];

  return (
    <section className={`bg-background py-20 lg:py-24 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-semibold text-foreground mb-4">
            Institutional capabilities
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Infrastructure and research systems for government entities and mission-critical
            stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              className="relative bg-card p-10 rounded-sm border border-border overflow-hidden"
            >
              {/* Background Image */}
              {capability.backgroundImage && (
                <div className="absolute inset-0 z-0">
                  <Image
                    src={capability.backgroundImage}
                    alt={capability.backgroundAlt || ''}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    loading="lazy"
                    className="object-cover opacity-[0.08] grayscale"
                  />
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mb-6">
                  <Icon
                    name={capability.icon as any}
                    size={28}
                    variant="outline"
                    className="text-primary"
                  />
                </div>
                <h3 className="text-2xl font-headline font-semibold text-foreground mb-4">
                  {capability.title}
                </h3>
                <p className="text-base text-muted-foreground font-body leading-relaxed mb-6">
                  {capability.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <span className="text-sm font-cta font-medium text-primary">
                    {capability.metrics}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
