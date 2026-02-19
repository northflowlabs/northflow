import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

export const metadata: Metadata = generateMetadata({
  title: 'Validation artifacts & institutional evidence register | Northflow',
  description:
    'Proof inventory mapping each core capability to a concrete validation artifact with status, update date, and access pathway for institutional review.',
  path: '/validation',
  ogType: 'website',
  ogImage: 'https://northflow.no/assets/images/Northflow%20-%20Earth%20Sat.jpg',
});

const ValidationPage = () => {
  type ArtifactStatus = 'Operational' | 'In development' | 'In evaluation' | 'Planned';
  type ArtifactCard = {
    id: string;
    title: string;
    status: ArtifactStatus;
    statusLabel: string;
    dateLabel: string;
    description: string;
    bullets: string[];
    bulletTone?: 'complete' | 'inProgress';
    ctaLabel: string;
    href: string;
  };

  const getStatusClasses = (status: ArtifactStatus) => {
    if (status === 'Operational') return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    if (status === 'In development') return 'bg-amber-100 text-amber-800 border-amber-200';
    if (status === 'In evaluation') return 'bg-amber-100 text-amber-800 border-amber-200';
    return 'bg-slate-100 text-slate-800 border-slate-200';
  };

  const getBulletConfig = (tone: ArtifactCard['bulletTone']) => {
    if (tone === 'inProgress') {
      return {
        icon: 'clock',
        className: 'text-amber-700 mt-0.5 flex-shrink-0',
      } as const;
    }

    return {
      icon: 'check-circle',
      className: 'text-primary mt-0.5 flex-shrink-0',
    } as const;
  };

  const artifacts: ArtifactCard[] = [
    {
      id: 'gaia-dr3-validation',
      title: 'Gaia DR3 validation report',
      status: 'Operational',
      statusLabel: 'Operational',
      dateLabel: 'AVAILABLE — FEBRUARY 2026',
      description:
        'Operational validation report documenting HGE execution over Gaia Data Release 3 with deterministically replayable outcomes, uncertainty handling, and reproducibility controls.',
      bullets: [
        '1.8 billion object catalog coverage',
        'Deterministic run-to-run reproducibility',
        'Audit-ready provenance trail included',
      ],
      ctaLabel: 'Read public summary',
      href: '#gaia-dr3-public-summary',
    },
    {
      id: 'evidence-bundle-spec',
      title: 'Evidence bundle specification',
      status: 'Operational',
      statusLabel: 'Operational',
      dateLabel: 'VERSION 1.0 — AVAILABLE',
      description:
        'Technical specification for signed evidence bundles, schema constraints, cryptographic signatures, and verification procedures used across institutional review workflows.',
      bullets: [
        'Schema-level validation rules',
        'W3C PROV-aligned provenance fields',
        'Signature and integrity verification steps',
      ],
      ctaLabel: 'Open specification',
      href: '/documentation',
    },
    {
      id: 'deterministic-replay-demo',
      title: 'Deterministic replay demonstration',
      status: 'Operational',
      statusLabel: 'Operational',
      dateLabel: 'DEMO PACKAGE — AVAILABLE',
      description:
        'Replay demonstration package showing identical output generation under controlled inputs and policy constraints, used for institutional technical briefings.',
      bullets: [
        'Reproducible execution trace',
        'Policy-gated verification checkpoints',
        'Evidence chain integrity confirmation',
      ],
      ctaLabel: 'View demonstration context',
      href: '/research/hge',
    },
    {
      id: 'red-team-tamper',
      title: 'Red-team tamper test results',
      status: 'Operational',
      statusLabel: 'Operational',
      dateLabel: 'SUMMARY — JANUARY 2026',
      description:
        'Summary of red-team tamper resistance testing covering six adversarial attack vectors against evidence generation, storage, and verification pathways.',
      bullets: [
        '6 attack vectors tested',
        'Tamper detection and rejection paths',
        'Incident evidence verification workflow',
      ],
      ctaLabel: 'Review security summary',
      href: '/security',
    },
    {
      id: 'sentinel-progress',
      title: 'Sentinel adaptation progress logs',
      status: 'In development',
      statusLabel: 'In development',
      dateLabel: 'MONTHLY UPDATES — ACTIVE',
      description:
        'Implementation logs tracking HGE adaptation to ESA Sentinel data pipelines for wildfire risk, deforestation verification, and infrastructure stress indicators.',
      bullets: [
        'Adapter integration milestones',
        'Validation checkpoint updates',
        'Institutional engagement timeline',
      ],
      ctaLabel: 'View monthly logs',
      href: '#sentinel-progress-logs',
    },
    {
      id: 'quantum-oqtopus-evaluation',
      title: 'Quantum instrument backend evaluation',
      status: 'In evaluation',
      statusLabel: 'In evaluation',
      dateLabel: 'FEBRUARY 2026 — UNIVERSITY OF OSAKA',
      description:
        'Structured API evaluation of the OQTOPUS quantum platform (oqtopus.io) as a live physical instrument backend. Testing hypothesis submission, probabilistic result ingestion, calibration drift tracking, and provenance alignment with the HGE evidence bundle format.',
      bullets: [
        'API endpoint integration',
        'Token and session management',
        'Probabilistic outcome ingestion',
        'Calibration drift provenance',
        'Evidence bundle alignment',
      ],
      bulletTone: 'inProgress',
      ctaLabel: 'Request evaluation briefing',
      href: '/engage/request-access',
    },
    {
      id: 'benchmark-annex',
      title: 'Institutional benchmark annex',
      status: 'Planned',
      statusLabel: 'Planned',
      dateLabel: 'PLANNED — Q2 2026',
      description:
        'Cross-domain benchmark annex for institutional reviewers comparing reproducibility, verification latency, and governance-mode behavior across deployment contexts.',
      bullets: [
        'Comparative benchmark protocol',
        'Governance-mode performance matrix',
        'Publication readiness checkpoints',
      ],
      ctaLabel: 'Track publication readiness',
      href: '/engage/request-access',
    },
  ];

  const sentinelMonthlyLogs = [
    {
      month: 'February 2026',
      detail:
        'Sentinel ingestion adapter baseline completed. Initial wildfire-risk hypothesis templates validated in sandbox environment.',
    },
    {
      month: 'January 2026',
      detail:
        'Schema mapping finalized for Sentinel metadata fields. Provenance event contract aligned with evidence bundle specification v1.0.',
    },
    {
      month: 'December 2025',
      detail:
        'Domain transition plan approved: astronomy validation baseline → Earth Observation adaptation workflow with phased governance controls.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-700 via-slate-500 to-slate-200">
        <div className="max-w-[1400px] mx-auto px-8 py-20">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-cta font-semibold tracking-[0.18em] uppercase opacity-90 mb-4">
              Proof inventory
            </p>
            <h1 className="text-4xl md:text-5xl font-headline font-semibold mb-6 leading-tight">
              Validation artifacts and institutional evidence register
            </h1>
            <p className="text-base md:text-lg font-body text-white/90 leading-relaxed max-w-3xl">
              Northflow follows a strict no-claim-without-artifact discipline. Every core capability
              is mapped to a concrete, reviewable artifact with status, update date, and access
              pathway.
            </p>
            <p className="text-xs font-body text-white/80 mt-6">
              Status legend: Operational, In development, In evaluation, Planned. Dates indicate
              latest release or target publication window.
            </p>
          </div>
        </div>
      </section>

      {/* Inventory */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-cta font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-3">
              Artifacts
            </p>
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-3">
              Verifiable evidence inventory
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-body max-w-3xl mx-auto">
              Each entry below links to documentation, downloadable packages, or operational context
              used in institutional review cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artifacts.map((card) => (
              <div key={card.id} className="bg-card border border-border rounded-sm p-7">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-headline font-semibold text-foreground leading-snug">
                    {card.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-sm text-[11px] font-cta font-semibold tracking-[0.12em] uppercase border whitespace-nowrap ${getStatusClasses(
                      card.status
                    )}`}
                  >
                    {card.statusLabel}
                  </span>
                </div>

                <p className="text-[11px] font-cta font-semibold tracking-[0.12em] uppercase text-muted-foreground mb-4">
                  {card.dateLabel}
                </p>

                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-5">
                  {card.description}
                </p>

                <ul className="space-y-2 mb-5">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      {(() => {
                        const bulletConfig = getBulletConfig(card.bulletTone);
                        return (
                          <Icon
                            name={bulletConfig.icon}
                            size={14}
                            variant="outline"
                            className={bulletConfig.className}
                          />
                        );
                      })()}
                      <span className="text-sm text-foreground font-body leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-sm font-cta font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    <span>{card.ctaLabel} →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Gaia DR3 report overview (public-safe) */}
          <div id="gaia-dr3-public-summary" className="mt-16 max-w-5xl mx-auto scroll-mt-24">
            <div className="text-center mb-10">
              <p className="text-xs font-cta font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-3">
                Report overview
              </p>
              <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-3">
                Gaia DR3 validation report — public summary
              </h2>
              <p className="text-sm md:text-base text-muted-foreground font-body max-w-3xl mx-auto">
                This section summarizes what the validation demonstrates and what artifacts are
                available for review. It intentionally omits implementation details that constitute
                proprietary methodology.
              </p>
            </div>

            <div className="bg-card border border-border rounded-sm p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-headline font-semibold text-foreground mb-2">
                    Scope and dataset context
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    The Gaia Data Release 3 (DR3) catalog contains approximately{' '}
                    <span className="font-medium text-foreground">1.8 billion</span> observational
                    objects. Northflow’s validation demonstrates that the Hypothesis Generation
                    Engine (HGE) can operate over this scale while producing institutionally
                    reviewable evidence outputs.
                  </p>
                </div>

                <div className="bg-background border border-border rounded-sm p-5 w-full md:max-w-xs">
                  <p className="text-[11px] font-cta font-semibold tracking-[0.14em] uppercase text-muted-foreground mb-2">
                    At-a-glance
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Dataset: Gaia DR3 catalog',
                      'Scale: ~1.8B objects',
                      'Output: signed evidence bundles',
                      'Property: deterministic replay',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Icon
                          name="check-circle"
                          size={14}
                          variant="outline"
                          className="text-primary mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm text-foreground font-body leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-cta font-semibold tracking-[0.14em] uppercase text-muted-foreground mb-3">
                    What this validation demonstrates
                  </h4>
                  <ul className="space-y-3">
                    {[
                      {
                        title: 'Deterministic replay',
                        body: 'A given run can be replayed to reproduce the same outputs under the same inputs and policy constraints — a requirement for audit-grade evidence handling.',
                      },
                      {
                        title: 'Provenance-aware outputs',
                        body: 'Outputs are packaged as evidence bundles with traceable provenance context, enabling reviewers to understand where conclusions originate and how they are verified.',
                      },
                      {
                        title: 'Institutional review readiness',
                        body: 'Artifacts are structured for evaluation in regulated environments where traceability, repeatability, and integrity checks are mandatory — not optional.',
                      },
                      {
                        title: 'Scale without hand-curation',
                        body: 'The validation is designed to show that reviewable evidence workflows can operate at catalog scale, without requiring ad-hoc manual reconstruction of results.',
                      },
                    ].map((item) => (
                      <li
                        key={item.title}
                        className="bg-background border border-border rounded-sm p-5"
                      >
                        <p className="text-sm font-headline font-semibold text-foreground">
                          {item.title}
                        </p>
                        <p className="text-sm text-muted-foreground font-body leading-relaxed mt-1">
                          {item.body}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-cta font-semibold tracking-[0.14em] uppercase text-muted-foreground mb-3">
                    Artifacts available for institutional review
                  </h4>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                    Public materials provide a high-level validation narrative and a public-safe
                    summary for review. Additional packages may be shared selectively for qualified
                    institutional stakeholders.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      'Public validation summary (this page)',
                      'Evidence bundle schema + integrity verification steps',
                      'Replay demonstration context for briefings',
                      'Security / tamper testing summary (red-team results)',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Icon
                          name="check-circle"
                          size={14}
                          variant="outline"
                          className="text-primary mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm text-foreground font-body leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-border pt-5">
                    <h4 className="text-sm font-cta font-semibold tracking-[0.14em] uppercase text-muted-foreground mb-3">
                      What we do not publish
                    </h4>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed mb-3">
                      For safety, integrity, and IP reasons, some implementation details are not
                      published openly. We focus on publishing evidence, not recipes.
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Internal heuristics, ranking logic, and decision policies',
                        'Operational parameters tied to deployment governance constraints',
                        'Security-sensitive mechanisms that would weaken tamper resistance if disclosed',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Icon
                            name="x-circle"
                            size={14}
                            variant="outline"
                            className="text-muted-foreground mt-0.5 flex-shrink-0"
                          />
                          <span className="text-sm text-muted-foreground font-body leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/engage/request-access"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-cta font-medium rounded-sm hover:bg-muted transition-colors duration-200"
                >
                  <span>Request institutional access package</span>
                  <Icon name="arrow-right" size={16} variant="outline" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explorer */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-cta font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-3">
              Explorer
            </p>
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-3">
              Evidence bundle explorer
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-body max-w-3xl mx-auto">
              Sample signed evidence bundle (anonymized). Expand each section to inspect how claims,
              provenance, integrity, and audit controls are represented.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-background border border-border rounded-sm p-4">
                <p className="text-[11px] font-cta font-semibold tracking-[0.14em] uppercase text-muted-foreground mb-1">
                  Bundle ID
                </p>
                <p className="text-sm font-cta font-semibold text-foreground">
                  HGE-EVB-2026-02-017
                </p>
              </div>
              <div className="bg-background border border-border rounded-sm p-4">
                <p className="text-[11px] font-cta font-semibold tracking-[0.14em] uppercase text-muted-foreground mb-1">
                  Signature status
                </p>
                <p className="text-sm font-cta font-semibold text-emerald-700">Verified</p>
              </div>
              <div className="bg-background border border-border rounded-sm p-4">
                <p className="text-[11px] font-cta font-semibold tracking-[0.14em] uppercase text-muted-foreground mb-1">
                  Replay status
                </p>
                <p className="text-sm font-cta font-semibold text-emerald-700">
                  Deterministic match
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: 'Hypothesis representation',
                  subtitle: 'Machine-readable hypothesis schema (JSON-LD envelope)',
                  body: 'Contains formal claim statement, parameter bounds, uncertainty priors, and falsifiability criteria. Each block is versioned and linked to originating evidence context.',
                },
                {
                  title: 'Provenance chain',
                  subtitle: 'W3C PROV-aligned event trace from ingestion to conclusion',
                  body: 'Provenance events record ingestion, transformations, policy gates, and verification checkpoints used to reach each claim.',
                },
                {
                  title: 'Cryptographic signature',
                  subtitle: 'Signed hash envelope with bundle integrity fingerprint',
                  body: 'Cryptographic envelope includes signature metadata, key identifiers, and integrity hashes for tamper detection and institutional verification.',
                },
                {
                  title: 'Audit invariants',
                  subtitle: 'Policy, replay, and tamper controls enforced per contract',
                  body: 'Audit invariants define required controls for replay, policy enforcement, and tamper resistance across each execution context.',
                },
              ].map((row) => (
                <details key={row.title} className="bg-background border border-border rounded-sm">
                  <summary className="list-none cursor-pointer select-none p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-headline font-semibold text-foreground">
                          {row.title}
                        </p>
                        <p className="text-xs text-muted-foreground font-body mt-1">
                          {row.subtitle}
                        </p>
                      </div>
                      <Icon
                        name="chevron-down"
                        size={16}
                        variant="outline"
                        className="text-muted-foreground mt-0.5 flex-shrink-0"
                      />
                    </div>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {row.body}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sentinel logs */}
      <section id="sentinel-progress-logs" className="py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-headline font-semibold text-foreground mb-3">
              Sentinel adaptation progress logs
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-body mb-8">
              Monthly update stream for Earth Observation adaptation. Entries are maintained for
              institutional traceability and planning review.
            </p>

            <div className="space-y-4">
              {sentinelMonthlyLogs.map((log) => (
                <div key={log.month} className="bg-card border border-border rounded-sm p-6">
                  <p className="text-[11px] font-cta font-semibold tracking-[0.14em] uppercase text-muted-foreground mb-2">
                    {log.month}
                  </p>
                  <p className="text-sm text-foreground font-body leading-relaxed">{log.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValidationPage;
