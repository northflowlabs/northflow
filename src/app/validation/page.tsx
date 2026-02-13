import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { generateMetadata } from '@/lib/seo';
import EvidenceBundleExplorer from './components/EvidenceBundleExplorer';

type ArtifactStatus = 'Operational' | 'In development' | 'Planned';

interface ValidationArtifact {
  id: number;
  title: string;
  status: ArtifactStatus;
  dateLabel: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  ctaDownload?: boolean;
  highlights: string[];
}

const artifacts: ValidationArtifact[] = [
  {
    id: 1,
    title: 'Gaia DR3 validation report',
    status: 'Operational',
    dateLabel: 'Available — February 2026',
    description:
      'Operational validation report documenting HGE execution over Gaia Data Release 3 with deterministic replay outcomes, uncertainty handling, and reproducibility controls.',
    ctaLabel: 'Download PDF',
    ctaHref: '/publications/gaia-dr3-validation-summary.pdf',
    ctaDownload: true,
    highlights: [
      '1.8 billion object catalog coverage',
      'Deterministic run-to-run reproducibility',
      'Audit-ready provenance trail included',
    ],
  },
  {
    id: 2,
    title: 'Evidence bundle specification',
    status: 'Operational',
    dateLabel: 'Version 2.0 — Available',
    description:
      'Technical specification for signed evidence bundles, schema constraints, cryptographic signatures, and verification procedures used across institutional review workflows.',
    ctaLabel: 'Open specification',
    ctaHref: '/documentation',
    highlights: [
      'Schema-level validation rules',
      'W3C PROV-aligned provenance fields',
      'Signature and integrity verification steps',
    ],
  },
  {
    id: 3,
    title: 'Deterministic replay demonstration',
    status: 'Operational',
    dateLabel: 'Demo package — Available',
    description:
      'Replay demonstration package showing identical output generation under controlled inputs and policy constraints, used for institutional technical briefings.',
    ctaLabel: 'View demonstration context',
    ctaHref: '/research/hge#validation-evidence',
    highlights: [
      'Reproducible execution trace',
      'Policy-gated verification checkpoints',
      'Evidence chain integrity confirmation',
    ],
  },
  {
    id: 4,
    title: 'Red-team tamper test results',
    status: 'Operational',
    dateLabel: 'Summary — January 2026',
    description:
      'Summary of red-team tamper resistance testing covering six adversarial attack vectors against evidence generation, storage, and verification pathways.',
    ctaLabel: 'Review security summary',
    ctaHref: '/security',
    highlights: [
      '6 attack vectors tested',
      'Tamper detection and rejection paths',
      'Incident evidence verification workflow',
    ],
  },
  {
    id: 5,
    title: 'Sentinel adaptation progress logs',
    status: 'In development',
    dateLabel: 'Monthly updates — Active',
    description:
      'Implementation logs tracking HGE adaptation to ESA Sentinel data pipelines for wildfire risk, deforestation verification, and infrastructure stress indicators.',
    ctaLabel: 'View monthly logs',
    ctaHref: '#sentinel-progress',
    highlights: [
      'Adapter integration milestones',
      'Validation checkpoint updates',
      'Institutional engagement timeline',
    ],
  },
  {
    id: 6,
    title: 'Institutional benchmark annex',
    status: 'Planned',
    dateLabel: 'Planned — Q2 2026',
    description:
      'Cross-domain benchmark annex for institutional reviewers comparing reproducibility, verification latency, and governance-mode behavior across deployment contexts.',
    ctaLabel: 'Track publication readiness',
    ctaHref: '/resources',
    highlights: [
      'Comparative benchmark protocol',
      'Governance-mode performance matrix',
      'Publication readiness checkpoints',
    ],
  },
];

const sentinelLogs = [
  {
    month: 'February 2026',
    update:
      'Sentinel ingestion adapter baseline completed. Initial wildfire-risk hypothesis templates validated in sandbox environment.',
  },
  {
    month: 'January 2026',
    update:
      'Schema mapping finalized for Sentinel metadata fields. Provenance event contract aligned with evidence bundle specification v2.0.',
  },
  {
    month: 'December 2025',
    update:
      'Domain transition plan approved: astronomy validation baseline to Earth Observation adaptation workflow with phased governance controls.',
  },
];

const getStatusClasses = (status: ArtifactStatus) => {
  if (status === 'Operational') {
    return 'bg-emerald-100 text-emerald-800 border-emerald-200';
  }

  if (status === 'In development') {
    return 'bg-amber-100 text-amber-800 border-amber-200';
  }

  return 'bg-slate-100 text-slate-700 border-slate-200';
};

export const metadata: Metadata = generateMetadata({
  title: 'Validation Artifacts & Proof Inventory | Northflow',
  description:
    'Operational proof inventory for Northflow HGE validation artifacts, technical evidence packages, and adaptation progress logs.',
  path: '/validation',
  keywords: ['validation artifacts', 'proof inventory', 'gaia dr3', 'evidence bundle'],
});

export default function ValidationPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-8 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 px-4 py-2 rounded-sm mb-6">
              <span className="text-xs font-cta font-medium tracking-wide uppercase">Proof inventory</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-semibold mb-6 leading-tight">
              Validation artifacts and institutional evidence register
            </h1>
            <p className="text-lg font-body text-primary-foreground/90 leading-relaxed mb-6">
              Northflow follows a strict no-claim-without-artifact discipline. Every core capability
              is mapped to a concrete, reviewable artifact with status, update date, and access
              pathway.
            </p>
            <p className="text-sm font-body text-primary-foreground/75">
              Status legend: Operational, In development, Planned. Dates indicate latest release or
              target publication window.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-cta font-semibold tracking-[0.16em] text-primary mb-3">ARTIFACTS</p>
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
              Verifiable evidence inventory
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-4xl mx-auto">
              Each entry below links to documentation, downloadable packages, or operational context
              used in institutional review cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artifacts.map((artifact) => (
              <article key={artifact.id} className="bg-card border border-border rounded-sm p-7">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-xl font-headline font-semibold text-foreground leading-snug">
                    {artifact.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-sm text-xs font-cta font-medium uppercase border whitespace-nowrap ${getStatusClasses(artifact.status)}`}
                  >
                    {artifact.status}
                  </span>
                </div>

                <p className="text-xs font-cta text-muted-foreground uppercase tracking-wide mb-4">
                  {artifact.dateLabel}
                </p>

                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-5">
                  {artifact.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {artifact.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start space-x-2">
                      <Icon
                        name="check-circle"
                        size={14}
                        variant="outline"
                        className="text-primary mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-foreground font-body">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={artifact.ctaHref}
                  download={artifact.ctaDownload}
                  className="inline-flex items-center text-sm font-cta font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {artifact.ctaLabel}
                  <Icon name="arrow-right" size={14} variant="outline" className="ml-1.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <EvidenceBundleExplorer />

      <section id="sentinel-progress" className="bg-card border-y border-border py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-headline font-semibold text-foreground mb-4">
              Sentinel adaptation progress logs
            </h2>
            <p className="text-base font-body text-muted-foreground leading-relaxed mb-8">
              Monthly update stream for Earth Observation adaptation. Entries are maintained for
              institutional traceability and planning review.
            </p>

            <div className="space-y-4">
              {sentinelLogs.map((log) => (
                <div key={log.month} className="bg-background border border-border rounded-sm p-5">
                  <p className="text-xs font-cta font-medium uppercase tracking-wide text-primary mb-2">
                    {log.month}
                  </p>
                  <p className="text-sm font-body text-foreground leading-relaxed">{log.update}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
