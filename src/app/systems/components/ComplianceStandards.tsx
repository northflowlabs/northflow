import Icon from '@/components/ui/AppIcon';

interface Standard {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
}

interface ComplianceStandardsProps {
  className?: string;
}

const ComplianceStandards = ({ className = '' }: ComplianceStandardsProps) => {
  const standards: Standard[] = [
    {
      id: 1,
      name: 'ISO/IEC 27001',
      category: 'Information Security',
      description:
        'Systems designed to align with international standards for information security management.',
      icon: 'shield-check',
    },
    {
      id: 2,
      name: 'GDPR',
      category: 'Data Protection',
      description:
        'Architecture informed by European Union regulation for data protection and privacy.',
      icon: 'lock-closed',
    },
    {
      id: 3,
      name: 'NIS2 Directive',
      category: 'Network Security',
      description:
        'Design mapped to principles of EU directive for network and information systems security.',
      icon: 'server-stack',
    },
    {
      id: 4,
      name: 'DORA',
      category: 'Digital Resilience',
      description:
        'Framework designed to align with Digital Operational Resilience Act requirements.',
      icon: 'chart-bar',
    },
    {
      id: 5,
      name: 'ISO 22301',
      category: 'Business Continuity',
      description:
        'Continuity and risk management capabilities mapped to international business continuity standards.',
      icon: 'arrow-path',
    },
    {
      id: 6,
      name: 'ISO/IEC 20000',
      category: 'Service Management',
      description:
        'Operational frameworks designed to align with service management system standards.',
      icon: 'cpu-chip',
    },
  ];

  return (
    <section className={`py-20 bg-muted ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-headline font-semibold text-foreground mb-4">
            Standards alignment
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl">
            Design principles and architectural alignment with international regulatory frameworks.
            Standards references describe design alignment only, not achieved compliance or
            certification.
          </p>
          <p className="text-xs text-foreground font-body mt-3 bg-card border border-primary/20 rounded-sm px-3 py-2 max-w-3xl">
            <span className="font-semibold">Design-alignment qualifier:</span> Formal
            certifications are pursued and verified where applicable. References to standards
            describe design intent and target operating model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((standard) => (
            <div
              key={standard.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon
                    name={standard.icon as any}
                    size={20}
                    variant="outline"
                    className="text-primary"
                  />
                </div>
                <div>
                  <h3 className="text-base font-headline font-semibold text-foreground mb-1">
                    {standard.name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-body">{standard.category}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {standard.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card border border-border rounded-lg p-8">
          <div className="flex items-start space-x-4">
            <Icon
              name="building-library"
              size={24}
              variant="outline"
              className="text-primary flex-shrink-0 mt-1"
            />
            <div>
              <h3 className="text-base font-headline font-semibold text-foreground mb-2">
                Research collaboration and dialogue
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Northflow engages in structured dialogue and research collaboration with policy and
                standards communities. These exchanges inform system design and contribute to
                evolving frameworks for governable infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceStandards;
