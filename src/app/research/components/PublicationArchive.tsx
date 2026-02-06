'use client';

import { useState } from 'react';
import Link from 'next/link';
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

  const categories = ['All', 'Digital Sovereignty', 'Infrastructure Resilience', 'Auditable Systems', 'Operational Continuity', 'Regulatory Alignment', 'Security Architecture'];
  const types = ['All', 'Briefing', 'Framework', 'Technical Note', 'Signals & Outlook'];

  const publications: Publication[] = [
    {
      id: 1,
      title: "The European Flexibility Operating System (EFOS)",
      publicationDate: "10.03.25",
      category: "Digital Sovereignty",
      type: "Initiative paper",
      classification: "Public discussion draft",
      abstract: "Initiative paper outlining EFOS as a proposed European public–private digital infrastructure for harmonised, cross-border energy system flexibility management. Addresses EU directives including DES, Green Deal, EPBD, Data Act, AI Act, and Net Zero Industry Act. Clarifies EFOS as a long-term digital backbone for EU system objectives, not a commercial software product.",
      status: 'published',
      actionLabel: 'Request access'
    },
    {
      id: 2,
      title: "Operational sovereignty in digital infrastructure",
      publicationDate: "01.06.25",
      category: "Digital Sovereignty",
      type: "Research publication",
      classification: "Public discussion draft",
      abstract: "Research publication examining operational sovereignty principles and their application to institutional digital infrastructure design and governance.",
      status: 'published',
      actionLabel: 'Request access'
    },
    {
      id: 3,
      title: "Crisis-resilient digital infrastructure",
      publicationDate: "In preparation",
      category: "Infrastructure Resilience",
      type: "Working paper",
      classification: "In preparation",
      abstract: "Working paper exploring frameworks for crisis-resilient digital infrastructure design, focusing on continuity and operational resilience during disruption scenarios.",
      status: 'in-preparation',
      actionLabel: 'Notify me'
    },
    {
      id: 4,
      title: "Interoperability as infrastructure",
      publicationDate: "In preparation",
      category: "Regulatory Alignment",
      type: "Framework brief",
      classification: "In preparation",
      abstract: "Framework brief examining interoperability as foundational infrastructure requirement for sovereign digital systems and cross-border coordination.",
      status: 'in-preparation',
      actionLabel: 'Request briefing'
    },
    {
      id: 5,
      title: "AI governance for mission-critical systems",
      publicationDate: "In preparation",
      category: "Security Architecture",
      type: "Brief",
      classification: "In preparation",
      abstract: "Brief addressing governance frameworks for AI deployment in mission-critical institutional systems, covering accountability, transparency, and operational control.",
      status: 'in-preparation',
      actionLabel: 'Notify me'
    },
    {
      id: 6,
      title: "Research-to-infrastructure translation model",
      publicationDate: "In preparation",
      category: "Operational Continuity",
      type: "Methods note",
      classification: "In preparation",
      abstract: "Methods note documenting the translation process from applied research outputs to deployable infrastructure components and operational frameworks.",
      status: 'in-preparation',
      actionLabel: 'Request briefing'
    }
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesCategory = selectedCategory === 'All' || pub.category === selectedCategory;
    const matchesType = selectedType === 'All' || pub.type === selectedType;
    const matchesSearch = searchQuery === '' || 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors?.some(author => author.toLowerCase().includes(searchQuery.toLowerCase()));
    
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
            This archive includes published papers, technical briefs, and working documents produced through Northflow's research and development activities.
          </p>
          <p className="text-sm font-body text-muted-foreground max-w-3xl mx-auto mt-3 italic border-t border-border pt-3 mt-4">
            Documents are provided for institutional discussion and evaluation. They are not investment offers.
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
                  name="MagnifyingGlassIcon" 
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
              Showing {filteredPublications.length} of {publications.length} publications
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
          {filteredPublications.map((publication) => (
            <div
              key={publication.id}
              className="bg-card border border-border rounded-sm p-8 hover:shadow-hover transition-all duration-200 ease-institutional"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-cta font-medium rounded-sm">
                      {publication.type}
                    </span>
                    <span className="text-xs font-body text-muted-foreground">
                      {publication.category}
                    </span>
                    <span className="text-xs font-body text-muted-foreground">
                      {publication.classification}
                    </span>
                    {publication.status === 'in-preparation' && (
                      <span className="inline-flex items-center px-3 py-1 bg-muted text-muted-foreground text-xs font-cta font-medium rounded-sm">
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
                      <Icon name="CalendarIcon" size={16} variant="outline" className="text-muted-foreground" />
                      <span className="text-xs font-body text-muted-foreground">
                        {new Date(publication.publicationDate).toLocaleDateString('en-GB', { 
                          day: '2-digit', 
                          month: '2-digit', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                    {publication.citations !== undefined && (
                      <div className="flex items-center space-x-2">
                        <Icon name="DocumentTextIcon" size={16} variant="outline" className="text-muted-foreground" />
                        <span>{publication.citations} citations</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Icon name="CalendarIcon" size={16} variant="outline" />
                      <span>{publication.publicationDate}</span>
                    </div>
                    {publication.citations !== undefined && (
                      <div className="flex items-center space-x-2">
                        <Icon name="DocumentTextIcon" size={16} variant="outline" />
                        <span>{publication.citations} citations</span>
                      </div>
                    )}
                  </div>
                  <Link
                    href="/engage/request-access?source=research-publication"
                    className="inline-flex items-center space-x-2 px-6 py-2.5 bg-muted text-foreground text-sm font-cta font-medium rounded-sm border border-border transition-all duration-200 ease-institutional hover:bg-muted/80"
                  >
                    <Icon name="BellIcon" size={16} variant="outline" />
                    <span>{publication.actionLabel || 'Notify me'}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <div className="bg-card border border-border rounded-sm p-12 text-center">
            <Icon name="DocumentMagnifyingGlassIcon" size={48} variant="outline" className="text-muted-foreground mx-auto mb-4" />
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