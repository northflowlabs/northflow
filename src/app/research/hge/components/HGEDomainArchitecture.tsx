import React from 'react';

interface HGEDomainArchitectureProps {
  className?: string;
}

const HGEDomainArchitecture = ({ className = '' }: HGEDomainArchitectureProps) => {
  const domains = [
    {
      domain: 'Space & Astronomical Observation',
      dataSources: 'Gaia DR3, astronomical catalogs',
      status: 'Operational',
      statusTone: 'operational',
    },
    {
      domain: 'Earth Observation & Climate',
      dataSources: 'ESA Sentinel, Copernicus',
      status: 'In development',
      statusTone: 'development',
    },
    {
      domain: 'Marine & Water Systems',
      dataSources: 'Satellite + in-situ marine data',
      status: 'Planned — Phase 3',
      statusTone: 'planned',
    },
    {
      domain: 'Biomedical Research',
      dataSources: 'Biomedical datasets',
      status: 'Future — validation only',
      statusTone: 'future',
    },
  ];

  const statusClasses: Record<string, string> = {
    operational: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
    development: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
    planned: 'bg-slate-500/10 text-slate-700 border-slate-500/20',
    future: 'bg-muted text-muted-foreground border-border',
  };

  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-cta font-semibold tracking-[0.16em] text-primary mb-3">
              DOMAIN ADAPTERS
            </p>
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
              One engine. Multiple application domains.
            </h2>
            <p className="text-lg font-body text-muted-foreground leading-relaxed">
              HGE is domain-agnostic by architecture. Each application domain is a structured
              adapter connecting the engine to specific observational environments and institutional
              contexts.
            </p>
          </div>

          <div className="bg-card border border-border rounded-sm p-6 md:p-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[720px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 text-xs font-cta font-medium uppercase tracking-wide text-muted-foreground">
                      Domain
                    </th>
                    <th className="py-3 pr-4 text-xs font-cta font-medium uppercase tracking-wide text-muted-foreground">
                      Data Sources
                    </th>
                    <th className="py-3 text-xs font-cta font-medium uppercase tracking-wide text-muted-foreground">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {domains.map((item) => (
                    <tr key={item.domain} className="border-b border-border last:border-b-0">
                      <td className="py-4 pr-4 text-sm font-headline font-semibold text-foreground">
                        {item.domain}
                      </td>
                      <td className="py-4 pr-4 text-sm font-body text-muted-foreground">
                        {item.dataSources}
                      </td>
                      <td className="py-4">
                        <span
                          className={`inline-flex px-3 py-1 rounded-sm text-xs font-cta font-medium border ${statusClasses[item.statusTone]}`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-sm font-body text-muted-foreground leading-relaxed mt-6">
            Current domains reflect active development and institutional engagement. Future domains
            are structurally enabled by HGE&apos;s architecture and will be activated after core
            validation milestones are achieved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HGEDomainArchitecture;
