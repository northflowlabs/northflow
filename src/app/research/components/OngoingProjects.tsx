interface Project {
  id: number;
  title: string;
  domain: string;
  description: string;
  status: string;
  outputType: string;
}

interface OngoingProjectsProps {
  className?: string;
}

const OngoingProjects = ({ className = '' }: OngoingProjectsProps) => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Crisis-resilient digital infrastructure',
      domain: 'Infrastructure Resilience',
      description:
        'Investigation of architectural patterns and operational protocols for maintaining digital continuity during crisis, disruption, or conflict scenarios.',
      status: 'Status: Active',
      outputType: 'Technical concept',
    },
    {
      id: 2,
      title: 'AI governance for mission-critical systems',
      domain: 'AI & Governance',
      description:
        'Applied research into the safe, auditable, and bounded use of AI in institutional and mission-critical environments.',
      status: 'Status: Active',
      outputType: 'Working paper',
    },
    {
      id: 3,
      title: 'Research-to-infrastructure translation models',
      domain: 'Research Methodology',
      description:
        'Development of structured pathways for translating research outputs into deployable, governable, and trusted digital infrastructure.',
      status: 'Status: In development',
      outputType: 'Technical concept',
    },
    {
      id: 4,
      title: 'European Flexibility Operating System (EFOS)',
      domain: 'Energy Systems & Infrastructure',
      description:
        'Research and framework development for a proposed European public–private digital infrastructure providing a harmonised, cross-border operational layer for predicting, coordinating, and managing flexibility across Europe’s energy system, aligned with relevant European regulatory frameworks and energy system directives.',
      status: 'Status: Active',
      outputType: 'Framework brief',
    },
    {
      id: 5,
      title: 'Institutional interoperability systems',
      domain: 'Systems Architecture',
      description:
        'Research into interoperability as a permanent infrastructure layer across public systems, energy networks, and regulated sectors.',
      status: 'Status: In development',
      outputType: 'Framework brief',
    },
    {
      id: 6,
      title: 'Operational sovereignty frameworks',
      domain: 'Digital Sovereignty',
      description:
        'Research into governance, architecture, and control mechanisms that enable states and institutions to retain operational authority over critical digital systems.',
      status: 'Status: In development',
      outputType: 'Working paper',
    },
  ];

  const getStatusColor = (status: string) => {
    return 'bg-muted text-muted-foreground';
  };

  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
            Active research initiatives
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto mb-3">
            Current research initiatives addressing climate resilience, institutional evidence
            systems, and mission-critical infrastructure.
          </p>
          <p className="text-sm font-body text-muted-foreground max-w-3xl mx-auto italic">
            Initiatives represent active research, framework development, and early-stage
            publication work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-border rounded-sm p-8 hover:shadow-hover transition-all duration-200 ease-institutional"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span
                    className={`inline-flex items-center px-3 py-1 text-xs font-body font-medium rounded-sm ${getStatusColor(project.status)}`}
                  >
                    {project.status}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-muted text-muted-foreground text-xs font-body font-medium rounded-sm">
                    {project.outputType}
                  </span>
                </div>
              </div>
              <span className="text-xs font-body text-muted-foreground block mb-3">
                {project.domain}
              </span>

              <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                {project.title}
              </h3>

              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
