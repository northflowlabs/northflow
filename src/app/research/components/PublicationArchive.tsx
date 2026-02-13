'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Publication {
  id: number;
  title: string;
  authors?: string[];
  publicationDate: string;
  category: string;
  type: string;
  domain?: string;
  version?: string;
  classification: string;
  abstract: string;
  downloadUrl?: string;
  citations?: number;
  status?: 'published' | 'in-preparation';
  actionLabel?: string;
}

interface PublicationArchiveProps {
  className?: string;
}

const PublicationArchive = ({ className = '' }: PublicationArchiveProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Digital Sovereignty',
    'Infrastructure Resilience',
    'Auditable Systems',
    'Operational Continuity',
    'Regulatory Alignment',
    'Security Architecture',
  ];
  const types = ['All', 'Briefing', 'Framework', 'Technical Note', 'Signals & Outlook'];

  const formatDisplayDate = (value: string) => {
    if (!value) return '';
    if (value.toLowerCase().includes('preparation')) return 'In preparation';

    const match = value.match(/^(\d{2})\.(\d{2})\.(\d{2}|\d{4})$/);
    if (!match) return value;

    const day = Number(match[1]);
    const month = Number(match[2]);
    const yearRaw = match[3];
    const year = yearRaw.length === 2 ? 2000 + Number(yearRaw) : Number(yearRaw);
    const date = new Date(year, month - 1, day);

    if (Number.isNaN(date.getTime())) return value;

    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const publications: Publication[] = [
    {
      id: 1,
      title: 'Gaia DR3 validation summary: HGE structured hypothesis search at scale',
      publicationDate: '30.01.26',
      category: 'Auditable Systems',
      type: 'Technical brief',
      classification: 'Available',
      abstract:
        'Technical summary documenting operational validation of HGE on Gaia DR3 astronomical catalog data, including deterministic execution outcomes, reproducibility constraints, and evidence-bundle structure used for institutional review.',
      status: 'published',
      actionLabel: 'Request brief',
      downloadUrl: '/engage',
    },
    {
      id: 2,
      title: 'Research-to-infrastructure translation model',
      publicationDate: 'In preparation',
      category: 'Operational Continuity',
      type: 'Methods note',
      classification: 'In preparation',
      abstract:
        'Methods note documenting the translation process from applied research outputs to deployable infrastructure components and operational frameworks.',
      status: 'in-preparation',
      actionLabel: 'Briefing available upon request',
    },
    {
      id: 3,
      title: 'AI governance for mission-critical systems',
      publicationDate: 'In preparation',
      category: 'Security Architecture',
      type: 'Brief',
      classification: 'In preparation',
      abstract:
        'Brief addressing governance frameworks for AI deployment in mission-critical institutional systems, covering accountability, transparency, and operational control.',
      status: 'in-preparation',
    },
    {
      id: 4,
      title: 'Interoperability as infrastructure',
      publicationDate: 'In preparation',
      category: 'Regulatory Alignment',
      type: 'Framework brief',
      classification: 'In preparation',
      abstract:
        'Framework brief examining interoperability as foundational infrastructure requirement for sovereign digital systems and cross-border coordination.',
      status: 'in-preparation',
      actionLabel: 'Briefing available upon request',
    },
    {
      id: 5,
      title: 'The European Flexibility Operating System (EFOS)',
      publicationDate: '10.03.25',
      category: 'Digital Sovereignty',
      type: 'Initiative paper',
      classification: 'Public discussion draft',
      abstract:
        'Initiative paper outlining EFOS as a proposed European public–private digital infrastructure for harmonised, cross-border energy system flexibility management, aligned with relevant European regulatory frameworks and energy system directives. Clarifies EFOS as a long-term digital backbone for EU system objectives, not a commercial software product.',
      status: 'published',
      actionLabel: 'Available upon institutional request',
    },
    {
      id: 6,
      title: 'Operational sovereignty in digital infrastructure',
      publicationDate: '01.06.25',
      category: 'Digital Sovereignty',
      type: 'Research publication',
      classification: 'Public discussion draft',
      abstract:
        'Research publication examining operational sovereignty principles and their application to institutional digital infrastructure design and governance.',
      status: 'published',
      actionLabel: 'Available upon institutional request',
    },
  ];

  const filteredPublications = publications.filter((pub) => {
    const matchesCategory = selectedCategory === 'All' || pub.category === selectedCategory;
    const matchesType = selectedType === 'All' || pub.type === selectedType;
    const matchesSearch =
      searchQuery === '' ||
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors?.some((author) => author.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <section className={`bg-muted py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
            Publications and working papers
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto">
            Northflow maintains an archive of methodological notes, working papers, and applied
            framework documents. The research program is currently in early publication phase, with
            outputs focused on methodological validation and applied system architecture.
          </p>
        </div>

        <div className="bg-card border border-border rounded-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-cta font-medium text-foreground mb-2">
                Search publications
              </label>
              <div className="relative">
                <Icon
                  name="magnifying-glass"
                  size={20}
                  variant="outline"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title or author..."
                  className="w-full pl-10 pr-4 py-2.5 bg-background border border-input rounded-sm text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-cta font-medium text-foreground mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2.5 bg-background border border-input rounded-sm text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-cta font-medium text-foreground mb-2">
                Publication type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2.5 bg-background border border-input rounded-sm text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm font-body text-muted-foreground">
              Showing {Math.min(filteredPublications.length, 4)} of {filteredPublications.length}{' '}
              publications
            </p>
            {(selectedCategory !== 'All' || selectedType !== 'All' || searchQuery !== '') && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedType('All');
                  setSearchQuery('');
                }}
                className="text-sm font-cta font-medium text-primary hover:text-primary/80 transition-colors duration-200"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {filteredPublications.slice(0, 4).map((publication) => (
            <div
              key={publication.id}
              className="bg-card border border-border rounded-sm p-8 hover:shadow-hover transition-all duration-200 ease-institutional"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="inline-flex items-center px-2 py-1 bg-background text-muted-foreground text-xs font-body font-medium rounded-sm border border-border">
                      {publication.type}
                    </span>
                    <span className="text-xs font-body text-muted-foreground">
                      {publication.category}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 bg-background text-muted-foreground text-xs font-body font-medium rounded-sm border border-border">
                      {publication.classification}
                    </span>
                    {publication.status === 'in-preparation' && (
                      <span className="inline-flex items-center px-2 py-1 bg-background text-muted-foreground text-xs font-body font-medium rounded-sm border border-border">
                        In preparation
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                    {publication.title}
                  </h3>

                  {publication.authors && (
                    <p className="text-sm font-body text-muted-foreground mb-2">
                      {publication.authors.join(', ')}
                    </p>
                  )}

                  <div className="flex items-center space-x-4 mb-3 text-xs text-muted-foreground">
                    {publication.domain && <span>Domain: {publication.domain}</span>}
                    {publication.version && <span>Version: {publication.version}</span>}
                  </div>

                  <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">
                    {publication.abstract}
                  </p>

                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Icon
                        name="calendar"
                        size={16}
                        variant="outline"
                        className="text-muted-foreground"
                      />
                      <span className="text-xs font-body text-muted-foreground">
                        {formatDisplayDate(publication.publicationDate)}
                      </span>
                    </div>
                    {publication.citations !== undefined && (
                      <div className="flex items-center space-x-2">
                        <Icon
                          name="document-text"
                          size={16}
                          variant="outline"
                          className="text-muted-foreground"
                        />
                        <span className="text-xs font-body text-muted-foreground">
                          {publication.citations} citations
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  {publication.downloadUrl && publication.actionLabel && (
                    <a
                      href={publication.downloadUrl}
                      className="inline-flex items-center text-sm font-cta font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      {publication.actionLabel}
                      <Icon name="arrow-right" size={14} variant="outline" className="ml-1" />
                    </a>
                  )}
                  {publication.actionLabel && !publication.downloadUrl && (
                    <span className="text-sm font-body text-muted-foreground">
                      {publication.actionLabel}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPublications.length > 4 && (
          <p className="text-sm font-body text-muted-foreground mt-8">
            Additional working documents available upon institutional request.
          </p>
        )}

        {filteredPublications.length === 0 && (
          <div className="bg-card border border-border rounded-sm p-12 text-center">
            <Icon
              name="document-magnifying-glass"
              size={48}
              variant="outline"
              className="text-muted-foreground mx-auto mb-4"
            />
            <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
              No Publications Found
            </h3>
            <p className="text-sm font-body text-muted-foreground">
              Try adjusting your search criteria or filters to find relevant publications.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PublicationArchive;
