'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Initiative {
  id: string;
  title: string;
  status: 'Operational' | 'In development';
  statusTone: 'operational' | 'development';
  description: string;
  detailLabel: string;
  details: string[];
  icon: string;
  ctaText: string;
  ctaLink: string;
}

interface FutureDomain {
  domain: string;
  description: string;
  status: string;
}

export default function InitiativeGrid() {
  const statusClasses: Record<Initiative['statusTone'], string> = {
    operational: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
    development: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
  };

  const initiatives: Initiative[] = [
    {
      id: 'hge',
      title: 'Project HGE — Core engine validation',
      status: 'Operational',
      statusTone: 'operational',
      description:
        'Continuous validation and methodological refinement of the Hypothesis Generation Engine. Current focus: Gaia DR3 astronomical catalog validation (operational), Sentinel Earth Observation adaptation (in development), and evidence verification system hardening.',
      detailLabel: 'Validation metrics',
      details: [
        'Gaia DR3: 1.8 billion objects, deterministic replay verified',
        'Evidence bundles: 5-step verification contract operational',
        'Red-team testing: 6 adversarial attack vectors validated',
      ],
      icon: 'beaker',
      ctaText: 'Explore Project HGE',
      ctaLink: '/research/hge',
    },
    {
      id: 'sentinel-adapter',
      title: 'Sentinel EO domain adapter',
      status: 'In development',
      statusTone: 'development',
      description:
        'Active adaptation of HGE for ESA Sentinel satellite data. Targeting wildfire risk modelling, deforestation verification, and infrastructure vulnerability mapping. ESA Business Applications PoC being submitted.',
      detailLabel: 'Focus areas',
      details: [
        'Wildfire risk hypothesis generation',
        'Deforestation pattern detection',
        'Infrastructure stress indicators',
        'ESA institutional alignment',
      ],
      icon: 'globe-alt',
      ctaText: 'View adaptation roadmap',
      ctaLink: '/research',
    },
    {
      id: 'governance',
      title: 'Institutional evidence governance',
      status: 'Operational',
      statusTone: 'operational',
      description:
        'Governance methodologies for auditable digital infrastructure in regulated environments. Configurable governance modes (disabled / logging / enforced) enabling graduated institutional deployment.',
      detailLabel: 'Capabilities',
      details: [
        'Policy gating and audit invariants',
        'Signed evidence bundle format',
        'Deterministic replay for verification',
        'Cross-border evidence portability',
      ],
      icon: 'document-check',
      ctaText: 'Explore governance framework',
      ctaLink: '/systems',
    },
  ];

  const futureDomains: FutureDomain[] = [
    {
      domain: 'Marine & Water Systems',
      description: 'Evidence frameworks for marine ecosystem monitoring and coastal resilience',
      status: 'Planned — Phase 3',
    },
    {
      domain: 'Biomedical Research',
      description: 'Secondary validation domain demonstrating engine generality',
      status: 'Future — validation only',
    },
    {
      domain: 'Energy Infrastructure',
      description: 'Evidence frameworks for grid resilience and flexibility',
      status: 'Archived — post-Phase 3',
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-headline font-semibold text-foreground mb-4">
            Active initiatives
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl">
            Active programmes focused on HGE validation, domain adaptation, and evidence governance
            capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {initiatives.map((initiative) => (
            <div
              key={initiative.id}
              className="bg-card border border-border rounded-sm p-6 hover:shadow-hover transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Icon
                    name={initiative.icon as any}
                    size={24}
                    variant="outline"
                    className="text-primary"
                  />
                </div>
                <span
                  className={`px-3 py-1 rounded-sm text-xs font-cta font-medium border ${statusClasses[initiative.statusTone]}`}
                >
                  {initiative.status}
                </span>
              </div>

              <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                {initiative.title}
              </h3>

              <p className="text-sm text-muted-foreground font-body mb-2 leading-relaxed">
                {initiative.description}
              </p>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground font-body mb-3">
                  {initiative.detailLabel}
                </p>
                <ul className="space-y-2">
                  {initiative.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon
                        name="check-circle"
                        size={14}
                        variant="outline"
                        className="text-primary mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-foreground font-body">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <Link
                  href={initiative.ctaLink}
                  className="inline-flex items-center text-sm font-cta font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {initiative.ctaText}
                  <Icon name="arrow-right" size={16} variant="outline" className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-sm p-8">
          <p className="text-xs font-cta font-medium text-primary uppercase tracking-wide mb-3">
            Future domains
          </p>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 max-w-4xl">
            HGE is domain-agnostic by architecture. The following domains are structurally enabled
            but frozen pending core validation milestones (ESA PoC acceptance, NTNU engagement
            confirmation, first validation artifact publication).
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 text-xs font-cta font-medium uppercase tracking-wide text-muted-foreground">
                    Domain
                  </th>
                  <th className="py-3 pr-4 text-xs font-cta font-medium uppercase tracking-wide text-muted-foreground">
                    Description
                  </th>
                  <th className="py-3 text-xs font-cta font-medium uppercase tracking-wide text-muted-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {futureDomains.map((domain) => (
                  <tr key={domain.domain} className="border-b border-border last:border-b-0">
                    <td className="py-4 pr-4 text-sm font-headline font-semibold text-foreground">
                      {domain.domain}
                    </td>
                    <td className="py-4 pr-4 text-sm font-body text-muted-foreground">
                      {domain.description}
                    </td>
                    <td className="py-4 text-sm font-body text-muted-foreground">
                      {domain.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
