interface DomainEntry {
  id: number;
  domain: string;
  scope: string;
  dataSources: string;
  status: 'Operational' | 'In development' | 'Planned' | 'Future';
}

interface CapabilitiesSectionProps {
  className?: string;
}

const CapabilitiesSection = ({ className = '' }: CapabilitiesSectionProps) => {
  const domains: DomainEntry[] = [
    {
      id: 1,
      domain: 'Space & Astronomical Observation',
      scope:
        'Structured hypothesis search across large-scale astronomical datasets. Engine validation and methodology demonstration.',
      dataSources: 'Gaia DR3, astronomical catalogs',
      status: 'Operational',
    },
    {
      id: 2,
      domain: 'Earth Observation & Climate',
      scope:
        'Wildfire risk modelling, deforestation verification, infrastructure vulnerability mapping from satellite observation.',
      dataSources: 'ESA Sentinel, Copernicus',
      status: 'In development',
    },
    {
      id: 3,
      domain: 'Marine & Water Systems',
      scope:
        'Evidence frameworks for marine ecosystem monitoring, fisheries management, and coastal resilience.',
      dataSources: 'Satellite + in-situ marine data',
      status: 'Planned',
    },
    {
      id: 4,
      domain: 'Biomedical Research',
      scope:
        "Secondary validation domain demonstrating engine generality. Automated hypothesis discovery in oncology and women's health research.",
      dataSources: 'Biomedical datasets',
      status: 'Future',
    },
    {
      id: 5,
      domain: 'Energy Infrastructure',
      scope:
        'Evidence and reasoning frameworks for resilience, flexibility, and coordination in energy-system contexts.',
      dataSources: 'Energy grid data',
      status: 'Future',
    },
  ];

  const getStatusClasses = (status: DomainEntry['status']) => {
    switch (status) {
      case 'Operational':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'In development':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Planned':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <section className={`bg-background py-20 lg:py-24 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-cta font-semibold tracking-[0.16em] text-primary mb-3">
            DOMAIN ARCHITECTURE
          </p>
          <h2 className="text-3xl lg:text-4xl font-headline font-semibold text-foreground mb-4">
            One engine. Multiple application domains.
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-4xl mx-auto">
            HGE is domain-agnostic by design. Each application domain is a structured adapter that
            connects the engine to a specific observational environment and institutional context.
            Domains are activated based on institutional validation milestones and partnership
            readiness.
          </p>
        </div>

        <div className="bg-card border border-border rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px]">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-cta font-semibold tracking-[0.08em] text-muted-foreground">
                    DOMAIN
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-cta font-semibold tracking-[0.08em] text-muted-foreground">
                    SCOPE
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-cta font-semibold tracking-[0.08em] text-muted-foreground">
                    DATA SOURCES
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-cta font-semibold tracking-[0.08em] text-muted-foreground">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody>
                {domains.map((domain, index) => (
                  <tr
                    key={domain.id}
                    className={`${index !== domains.length - 1 ? 'border-b border-border' : ''}`}
                  >
                    <td className="px-6 py-5 align-top text-sm font-headline font-semibold text-foreground">
                      {domain.domain}
                    </td>
                    <td className="px-6 py-5 align-top text-sm font-body text-muted-foreground leading-relaxed">
                      {domain.scope}
                    </td>
                    <td className="px-6 py-5 align-top text-sm font-body text-muted-foreground">
                      {domain.dataSources}
                    </td>
                    <td className="px-6 py-5 align-top">
                      <span
                        className={`inline-flex px-3 py-1 rounded-sm text-xs font-cta font-medium border whitespace-nowrap ${getStatusClasses(domain.status)}`}
                      >
                        {domain.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-sm text-muted-foreground font-body mt-6 max-w-5xl">
          Current domains reflect active development and institutional engagement. Future domains
          are structurally enabled by HGE\'s architecture and will be activated after core
          validation milestones are achieved.
        </p>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
