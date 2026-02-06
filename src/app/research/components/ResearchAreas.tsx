import Icon from '@/components/ui/AppIcon';

interface ResearchArea {
  id: number;
  title: string;
  description: string;
  icon: string;
  activeProjects: number;
}

interface ResearchAreasProps {
  className?: string;
}

const ResearchAreas = ({ className = '' }: ResearchAreasProps) => {
  const researchAreas: ResearchArea[] = [
    {
      id: 1,
      title: "Digital sovereignty frameworks",
      description: "Inquiry into sovereign technology architectures that enable government entities to maintain operational independence and data control within their jurisdictions.",
      icon: "ShieldCheckIcon",
      activeProjects: 8
    },
    {
      id: 2,
      title: "Infrastructure resilience",
      description: "Development of continuity frameworks for mission-critical systems that maintain operational capability during crisis scenarios and conflict situations.",
      icon: "ServerStackIcon",
      activeProjects: 12
    },
    {
      id: 3,
      title: "Auditable systems design",
      description: "Methodologies for creating governable and auditable infrastructure that meets regulatory compliance requirements for institutional stakeholders.",
      icon: "DocumentCheckIcon",
      activeProjects: 6
    },
    {
      id: 4,
      title: "Operational continuity",
      description: "Research into systems that ensure uninterrupted service delivery for government operations and critical asset management during disruption events.",
      icon: "ArrowPathIcon",
      activeProjects: 10
    },
    {
      id: 5,
      title: "Regulatory alignment",
      description: "Frameworks for technology infrastructure that aligns with European regulatory standards and institutional compliance mandates.",
      icon: "DocumentTextIcon",
      activeProjects: 7
    },
    {
      id: 6,
      title: "Security architecture",
      description: "Advanced security methodologies for protecting institutional data and maintaining operational security in government environments.",
      icon: "LockClosedIcon",
      activeProjects: 9
    }
  ];

  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
            Research focus areas
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto">
            NRL conducts research across six primary domains, each addressing critical challenges in sovereign digital infrastructure and institutional technology systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area) => (
            <div
              key={area.id}
              className="bg-card border border-border rounded-sm p-8 hover:shadow-hover transition-all duration-200 ease-institutional"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                  <Icon name={area.icon as any} size={24} variant="outline" className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6">
                {area.description}
              </p>
              <div className="pt-6 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Icon name="BeakerIcon" size={16} variant="outline" className="text-muted-foreground" />
                  <span className="text-xs font-body text-muted-foreground">
                    {area.activeProjects} active research lines
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

export default ResearchAreas;