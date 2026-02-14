interface ValidationItem {
  category: string;
  items: string[];
}

interface InstitutionalValidationSectionProps {
  className?: string;
}

const InstitutionalValidationSection = ({
  className = '',
}: InstitutionalValidationSectionProps) => {
  const validations: ValidationItem[] = [
    {
      category: 'Regulatory and governance alignment',
      items: [
        'GDPR-aligned data protection architecture',
        'Awareness of NIS2 and DORA regulatory environments',
        'ISO/IEC 27001-oriented information security design',
      ],
    },
    {
      category: 'Security and assurance alignment',
      items: [
        'Deterministic execution and reproducibility models',
        'Audit-ready evidence artifact structures',
        'Governance-aware deployment patterns',
      ],
    },
    {
      category: 'Operational frameworks',
      items: [
        'Risk management orientation (ISO 31000 principles)',
        'Structured evaluation and documentation discipline',
        'Long-horizon system lifecycle design',
      ],
    },
    {
      category: 'Institutional engagement',
      items: [
        'Research collaboration initiatives',
        'Methodological co-development',
        'Dialogue with European institutional stakeholders',
      ],
    },
  ];

  return (
    <section className={`bg-card py-16 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-6">
            Standards alignment
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Architectures developed with structural alignment to European regulatory and governance
            environments.
          </p>
          <p className="text-xs text-muted-foreground font-body mt-4 italic">
            Standards references describe design alignment and target operating models. Formal
            certifications are pursued and verified where applicable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {validations.map((validation, index) => (
            <div key={index} className="bg-background border border-border rounded-lg p-8">
              <h3 className="text-xl font-headline font-semibold text-foreground mb-6">
                {validation.category}
              </h3>
              <ul className="space-y-3">
                {validation.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                    <span className="text-sm text-muted-foreground font-body leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionalValidationSection;
