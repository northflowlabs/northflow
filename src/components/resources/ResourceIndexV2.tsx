'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

type Domain = 'Space' | 'Climate' | 'Marine' | 'Biomedical' | 'Energy';
type DocumentType =
  | 'Validation artifact'
  | 'Technical paper'
  | 'Framework'
  | 'Compliance';
type AccessStatus = 'Available' | 'Structured engagement' | 'Controlled disclosure';

interface RelatedArtifact {
  label: string;
  href: string;
}

interface ResourceItem {
  id: string;
  title: string;
  domain: Domain;
  documentType: DocumentType;
  status: AccessStatus;
  publicationDate: string;
  lastUpdated: string;
  wordCount: number;
  citationCount?: number;
  description: string;
  href: string;
  relatedValidationArtifacts: RelatedArtifact[];
}

const resources: ResourceItem[] = [
  {
    id: 'va-001',
    title: 'Gaia DR3 validation summary: structured hypothesis search at scale',
    domain: 'Space',
    documentType: 'Validation artifact',
    status: 'Available',
    publicationDate: 'February 2026',
    lastUpdated: '2026-02-02',
    wordCount: 2650,
    citationCount: 3,
    description:
      'Operational validation summary for HGE on Gaia DR3 including deterministic execution metrics and uncertainty-aware evidence outputs.',
    href: '/validation',
    relatedValidationArtifacts: [
      { label: 'Gaia DR3 validation report (PDF)', href: '/publications/gaia-dr3-validation-summary.pdf' },
      { label: 'HGE validation section', href: '/research/hge#validation-evidence' },
    ],
  },
  {
    id: 'tp-001',
    title: 'HGE methodology overview',
    domain: 'Space',
    documentType: 'Technical paper',
    status: 'Available',
    publicationDate: 'January 2026',
    lastUpdated: '2026-01-30',
    wordCount: 1840,
    citationCount: 2,
    description:
      'Method-focused technical paper on automated hypothesis formulation, experiment design, and iterative confidence updates.',
    href: '/technical-papers',
    relatedValidationArtifacts: [{ label: 'Evidence bundle specification', href: '/validation' }],
  },
  {
    id: 'fw-001',
    title: 'Sentinel adaptation framework',
    domain: 'Climate',
    documentType: 'Framework',
    status: 'Structured engagement',
    publicationDate: 'March 2026 (expected)',
    lastUpdated: '2026-02-10',
    wordCount: 2210,
    description:
      'Adapter framework for ESA Sentinel ingestion, preprocessing, and domain-specific hypothesis templates for wildfire and deforestation contexts.',
    href: '/research/hge',
    relatedValidationArtifacts: [{ label: 'Sentinel progress logs', href: '/validation#sentinel-progress' }],
  },
  {
    id: 'fw-002',
    title: 'Marine systems adaptation blueprint',
    domain: 'Marine',
    documentType: 'Framework',
    status: 'Structured engagement',
    publicationDate: 'Q2 2026 (planned release window)',
    lastUpdated: '2026-02-01',
    wordCount: 1420,
    description:
      'Roadmap blueprint for extending HGE domain adapters to marine and water-system monitoring use cases.',
    href: '/research',
    relatedValidationArtifacts: [{ label: 'Domain adapters table', href: '/research/hge' }],
  },
  {
    id: 'comp-001',
    title: 'GDPR design alignment framework',
    domain: 'Biomedical',
    documentType: 'Compliance',
    status: 'Structured engagement',
    publicationDate: 'August 2025',
    lastUpdated: '2026-01-18',
    wordCount: 1675,
    description:
      'Design alignment reference for lawful processing and governance-ready data handling in regulated institutional workflows.',
    href: '/compliance',
    relatedValidationArtifacts: [{ label: 'Evidence verification controls', href: '/validation' }],
  },
  {
    id: 'fw-003',
    title: 'Evidence verification system documentation',
    domain: 'Climate',
    documentType: 'Validation artifact',
    status: 'Controlled disclosure',
    publicationDate: 'January 2026',
    lastUpdated: '2026-02-08',
    wordCount: 1940,
    citationCount: 1,
    description:
      'Internal-facing technical document covering verification contract stages, audit invariants, and deterministic replay controls.',
    href: '/documentation',
    relatedValidationArtifacts: [
      { label: 'Red-team tamper test summary', href: '/validation' },
      { label: 'HGE operational validation', href: '/research/hge#validation-evidence' },
    ],
  },
];

const domains = ['All', 'Space', 'Climate', 'Marine', 'Biomedical', 'Energy'] as const;
const documentTypes = ['All', 'Validation artifact', 'Technical paper', 'Framework', 'Compliance'] as const;
const statuses = ['All', 'Available', 'Structured engagement', 'Controlled disclosure'] as const;

const ResourceIndexV2 = () => {
  const [query, setQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<(typeof domains)[number]>('All');
  const [selectedType, setSelectedType] = useState<(typeof documentTypes)[number]>('All');
  const [selectedStatus, setSelectedStatus] = useState<(typeof statuses)[number]>('All');
  const [selectedDate, setSelectedDate] = useState('All');

  const dateOptions = useMemo(() => {
    const uniqueDates = Array.from(new Set(resources.map((resource) => resource.publicationDate)));
    return ['All', ...uniqueDates];
  }, []);

  const filtered = useMemo(
    () =>
      resources.filter((resource) => {
        const text = `${resource.title} ${resource.description}`.toLowerCase();
        const matchesQuery = query === '' || text.includes(query.toLowerCase());
        const matchesDomain = selectedDomain === 'All' || resource.domain === selectedDomain;
        const matchesType = selectedType === 'All' || resource.documentType === selectedType;
        const matchesStatus = selectedStatus === 'All' || resource.status === selectedStatus;
        const matchesDate = selectedDate === 'All' || resource.publicationDate === selectedDate;
        return matchesQuery && matchesDomain && matchesType && matchesStatus && matchesDate;
      }),
    [query, selectedDate, selectedDomain, selectedStatus, selectedType]
  );

  const resetFilters = () => {
    setQuery('');
    setSelectedDomain('All');
    setSelectedType('All');
    setSelectedStatus('All');
    setSelectedDate('All');
  };

  return (
    <div className="space-y-8">
      <section className="bg-card border border-border rounded-sm p-6">
        <h2 className="text-lg font-headline font-semibold text-foreground mb-5">Faceted search</h2>

        <div className="relative mb-5">
          <Icon
            name="magnifying-glass"
            size={18}
            variant="outline"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search resources, methodologies, and validation evidence"
            className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Domain</label>
            <select
              value={selectedDomain}
              onChange={(event) => setSelectedDomain(event.target.value as (typeof domains)[number])}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-sm text-sm text-foreground"
            >
              {domains.map((domain) => (
                <option key={domain} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Document type</label>
            <select
              value={selectedType}
              onChange={(event) =>
                setSelectedType(event.target.value as (typeof documentTypes)[number])
              }
              className="w-full px-4 py-2.5 bg-background border border-border rounded-sm text-sm text-foreground"
            >
              {documentTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Status</label>
            <select
              value={selectedStatus}
              onChange={(event) => setSelectedStatus(event.target.value as (typeof statuses)[number])}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-sm text-sm text-foreground"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Publication timeline</label>
            <select
              value={selectedDate}
              onChange={(event) => setSelectedDate(event.target.value)}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-sm text-sm text-foreground"
            >
              {dateOptions.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {filtered.length} result{filtered.length === 1 ? '' : 's'}
          </p>
          <button
            onClick={resetFilters}
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Reset filters
          </button>
        </div>
      </section>

      <section className="space-y-4">
        {filtered.length === 0 ? (
          <div className="bg-card border border-border rounded-sm p-10 text-center">
            <p className="text-sm text-muted-foreground">No matching resources found for selected facets.</p>
          </div>
        ) : (
          filtered.map((resource) => (
            <article key={resource.id} className="bg-card border border-border rounded-sm p-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-sm text-xs font-cta font-medium bg-primary/10 text-primary">
                  {resource.documentType}
                </span>
                <span className="px-3 py-1 rounded-sm text-xs font-cta font-medium bg-muted text-foreground">
                  {resource.domain}
                </span>
                <span className="px-3 py-1 rounded-sm text-xs font-cta font-medium border border-border text-muted-foreground">
                  {resource.status}
                </span>
              </div>

              <h3 className="text-xl font-headline font-semibold text-foreground mb-2">{resource.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{resource.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-xs">
                <div className="bg-background border border-border rounded-sm px-3 py-2">
                  <p className="text-muted-foreground">Publication timeline</p>
                  <p className="text-foreground font-medium mt-1">{resource.publicationDate}</p>
                </div>
                <div className="bg-background border border-border rounded-sm px-3 py-2">
                  <p className="text-muted-foreground">Word count</p>
                  <p className="text-foreground font-medium mt-1">{resource.wordCount.toLocaleString()}</p>
                </div>
                <div className="bg-background border border-border rounded-sm px-3 py-2">
                  <p className="text-muted-foreground">Last updated</p>
                  <p className="text-foreground font-medium mt-1">{resource.lastUpdated}</p>
                </div>
                <div className="bg-background border border-border rounded-sm px-3 py-2">
                  <p className="text-muted-foreground">Citation count</p>
                  <p className="text-foreground font-medium mt-1">
                    {typeof resource.citationCount === 'number' ? resource.citationCount : 'N/A'}
                  </p>
                </div>
              </div>

              <div className="mb-5">
                <p className="text-xs font-cta font-medium uppercase tracking-wide text-muted-foreground mb-2">
                  Related validation artifacts
                </p>
                <div className="flex flex-wrap gap-2">
                  {resource.relatedValidationArtifacts.map((artifact) => (
                    <Link
                      key={`${resource.id}-${artifact.label}`}
                      href={artifact.href}
                      className="inline-flex items-center text-xs font-body px-2.5 py-1.5 bg-primary/10 text-primary rounded-sm hover:bg-primary/15"
                    >
                      {artifact.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href={resource.href}
                className="inline-flex items-center text-sm font-cta font-medium text-primary hover:text-primary/80"
              >
                Open resource
                <Icon name="arrow-right" size={14} variant="outline" className="ml-1.5" />
              </Link>
            </article>
          ))
        )}
      </section>
    </div>
  );
};

export default ResourceIndexV2;
