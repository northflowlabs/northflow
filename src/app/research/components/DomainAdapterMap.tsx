'use client';

import { useMemo, useState } from 'react';

interface DomainAdapterMapProps {
  className?: string;
}

type StatusTone = 'operational' | 'development' | 'evaluation' | 'planned';

interface DomainRow {
  domain: string;
  status: string;
  statusTone: StatusTone;
  dataSources: string;
  roadmap: string[];
}

const rows: DomainRow[] = [
  {
    domain: 'Space',
    status: 'Operational',
    statusTone: 'operational',
    dataSources: 'Gaia DR3, astronomical catalogs',
    roadmap: [
      'Operational baseline maintained through quarterly validation review.',
      'Extended uncertainty benchmarking scheduled for Q2 2026.',
    ],
  },
  {
    domain: 'Climate',
    status: 'In development',
    statusTone: 'development',
    dataSources: 'ESA Sentinel, Copernicus',
    roadmap: [
      'Sentinel ingestion adapter hardening in progress.',
      'Wildfire and deforestation hypothesis templates under institutional pilot review.',
    ],
  },
  {
    domain: 'Quantum Hardware',
    status: 'In evaluation',
    statusTone: 'evaluation',
    dataSources:
      'University of Osaka — Center for Quantum Information and Quantum Biology; OQTOPUS (oqtopus.io)',
    roadmap: [
      'Evaluating OQTOPUS as a physical QPU backend for instrument-agnostic hypothesis testing.',
      'Focus: probabilistic outcome tracking, calibration drift provenance, and closed-loop reasoning under quantum noise.',
    ],
  },
  {
    domain: 'Marine',
    status: 'Planned',
    statusTone: 'planned',
    dataSources: 'Satellite + in-situ marine feeds',
    roadmap: [
      'Domain adapter definition and data contract mapping targeted for Q2 2026.',
      'Pilot candidate selection with institutional partners targeted for Q3 2026.',
    ],
  },
  {
    domain: 'Biomedical',
    status: 'Planned',
    statusTone: 'planned',
    dataSources: 'Structured biomedical datasets',
    roadmap: [
      'Validation-only scoping for governance and compliance constraints.',
      'No operational deployment before dedicated ethics and regulatory review gate.',
    ],
  },
  {
    domain: 'Energy',
    status: 'Planned',
    statusTone: 'planned',
    dataSources: 'Grid telemetry and resilience indicators',
    roadmap: [
      'Conceptual adapter architecture mapped for future institutional requests.',
      'Activation remains contingent on strategic governance approval.',
    ],
  },
];

const statusClasses: Record<StatusTone, string> = {
  operational: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  development: 'bg-amber-100 text-amber-800 border-amber-200',
  evaluation: 'bg-amber-100 text-amber-800 border-amber-200',
  planned: 'bg-slate-100 text-slate-700 border-slate-200',
};

const DomainAdapterMap = ({ className = '' }: DomainAdapterMapProps) => {
  const [activeDomain, setActiveDomain] = useState(rows[0].domain);

  const selected = useMemo(
    () => rows.find((item) => item.domain === activeDomain) ?? rows[0],
    [activeDomain]
  );

  return (
    <section className={`bg-card border-y border-border py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-cta font-semibold tracking-[0.16em] text-primary mb-3">
              DOMAIN ADAPTER MAP
            </p>
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
              Interactive domain adaptation matrix
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-4xl mx-auto">
              Select a domain to review current status, source environment, and adaptation roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-background border border-border rounded-sm p-6 overflow-x-auto">
              <table className="w-full min-w-[620px] text-left border-collapse">
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
                  {rows.map((row) => {
                    const isActive = row.domain === selected.domain;
                    return (
                      <tr
                        key={row.domain}
                        onClick={() => setActiveDomain(row.domain)}
                        className={`border-b border-border last:border-b-0 cursor-pointer ${
                          isActive ? 'bg-primary/5' : 'hover:bg-muted/30'
                        }`}
                      >
                        <td className="py-4 pr-4 text-sm font-headline font-semibold text-foreground">
                          {row.domain}
                        </td>
                        <td className="py-4 pr-4 text-sm font-body text-muted-foreground">
                          {row.dataSources}
                        </td>
                        <td className="py-4">
                          <span
                            className={`inline-flex px-3 py-1 rounded-sm border text-xs font-cta font-medium uppercase ${statusClasses[row.statusTone]}`}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="bg-background border border-border rounded-sm p-6">
              <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                {selected.domain} roadmap
              </h3>
              <p className="text-xs font-cta font-medium uppercase text-muted-foreground mb-4">
                Click any domain row to switch roadmap
              </p>
              <ul className="space-y-3">
                {selected.roadmap.map((item) => (
                  <li
                    key={item}
                    className="text-sm font-body text-muted-foreground leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainAdapterMap;
