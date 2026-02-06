import Icon from '@/components/ui/AppIcon';

interface InfrastructureComponent {
  id: number;
  title: string;
  description: string;
  icon: string;
  capabilities: string[];
}

interface InfrastructureComponentsProps {
  className?: string;
}

const InfrastructureComponents = ({ className = '' }: InfrastructureComponentsProps) => {
  const components: InfrastructureComponent[] = [
    {
      id: 1,
      title: "Sovereign data infrastructure",
      description: "Designed to support geographically distributed data systems with full jurisdictional control and regulatory compliance.",
      icon: "ServerStackIcon",
      capabilities: [
        "Multi-region data residency",
        "Jurisdictional compliance",
        "Audit trail architecture",
        "Regulatory alignment"
      ]
    },
    {
      id: 2,
      title: "Identity & access management",
      description: "Intended to enable enterprise-grade authentication systems with institutional governance and audit capabilities.",
      icon: "ShieldCheckIcon",
      capabilities: [
        "Multi-factor authentication",
        "Role-based access control",
        "Audit logging",
        "Compliance reporting"
      ]
    },
    {
      id: 3,
      title: "Operational continuity systems",
      description: "Structured to allow mission-critical infrastructure for uninterrupted operation during crisis scenarios.",
      icon: "ArrowPathIcon",
      capabilities: [
        "Failover mechanisms",
        "Disaster recovery",
        "Business continuity",
        "Resilience testing"
      ]
    },
    {
      id: 4,
      title: "Governance & audit framework",
      description: "Designed to support comprehensive audit and governance systems for regulatory compliance and institutional oversight.",
      icon: "DocumentCheckIcon",
      capabilities: [
        "Compliance monitoring",
        "Audit trail generation",
        "Policy enforcement",
        "Regulatory reporting"
      ]
    }
  ];

  return (
    <section className={`py-20 bg-card ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-headline font-semibold text-foreground mb-4">
            Infrastructure components
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mb-2">
            Governance-aware system components representing architectural capabilities. Each component is designed to support auditable operations with comprehensive governance.
          </p>
          <p className="text-sm text-muted-foreground font-body max-w-3xl italic">
            Components described represent design capabilities and intended functionality, not deployed features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {components.map((component) => (
            <div
              key={component.id}
              className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon 
                    name={component.icon as any} 
                    size={24} 
                    variant="outline"
                    className="text-primary"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                    {component.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {component.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {component.capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon 
                      name="CheckCircleIcon" 
                      size={16} 
                      variant="solid"
                      className="text-primary flex-shrink-0"
                    />
                    <span className="text-sm text-foreground font-body">
                      {capability}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground font-body italic text-center">
            Some systems incorporate validation and provenance methodologies originating from Project HGE.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureComponents;