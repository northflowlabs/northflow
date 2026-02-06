interface ValidationItem {
  category: string;
  items: string[];
}

interface InstitutionalValidationSectionProps {
  className?: string;
}

const InstitutionalValidationSection = ({ className = '' }: InstitutionalValidationSectionProps) => {
  const validations: ValidationItem[] = [
    {
      category: "Regulatory and governance alignment",
      items: [
        "Designed to align with ISO/IEC 27001 information security principles",
        "Informed by GDPR data protection requirements",
        "Mapped to principles of the NIS2 Directive",
        "Aligned to DORA financial resilience framework"
      ]
    },
    {
      category: "Security and assurance alignment",
      items: [
        "Architectural context informed by frameworks relevant to NATO member states",
        "Target operating model aligned to SOC 2 Type II principles",
        "Designed for European cybersecurity certification scheme alignment",
        "Built to support institutional security requirements"
      ]
    },
    {
      category: "Operational frameworks",
      items: [
        "Business continuity management (aligned to ISO 22301)",
        "IT service management (aligned to ISO/IEC 20000)",
        "Risk management and auditability as design goals",
        "Governance and audit trail standards"
      ]
    },
    {
      category: "Institutional engagement",
      items: [
        "Dialogue with government technology initiatives",
        "Research collaboration on infrastructure systems",
        "Engagement with regulatory environment stakeholders",
        "Academic and institutional research partnerships"
      ]
    }
  ];

  return (
    <section className={`bg-card py-16 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-6">
            Standards alignment
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Our systems are designed with architectural alignment to regulatory frameworks, security standards, and institutional requirements across European contexts.
          </p>
          <p className="text-xs text-muted-foreground font-body mt-4 italic">
            Standards references describe design alignment and target operating models. Formal certifications are pursued and verified where applicable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {validations.map((validation, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-lg p-8"
            >
              <h3 className="text-xl font-headline font-semibold text-foreground mb-6">
                {validation.category}
              </h3>
              <ul className="space-y-3">
                {validation.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="flex items-start space-x-3"
                  >
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