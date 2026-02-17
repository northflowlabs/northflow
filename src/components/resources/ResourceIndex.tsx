'use client';

import React from 'react';
import { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Resource {
  id: string;
  title: string;
  type: 'Documentation' | 'Technical Papers' | 'Compliance' | 'Security';
  topic: string[];
  publicationDate: string;
  description: string;
  href: string;
  availability:
    | 'Public institutional materials'
    | 'Structured engagement'
    | 'Controlled disclosure';
}

interface SavedSearch {
  id: string;
  name: string;
  searchQuery: string;
  selectedType: string;
  selectedTopics: string[];
  selectedDate: string;
  selectedAvailability: string;
  createdAt: string;
}

const resources: Resource[] = [
  {
    id: 'doc-003',
    title: 'Governance and oversight procedures',
    type: 'Documentation',
    topic: ['Governance frameworks', 'Oversight', 'Accountability'],
    publicationDate: 'December 2025',
    description: 'Governance structures, oversight mechanisms, and accountability frameworks.',
    href: '/documentation',
    availability: 'Public institutional materials',
  },
  {
    id: 'research-001',
    title: 'Operational sovereignty in digital infrastructure',
    type: 'Technical Papers',
    topic: ['Digital sovereignty', 'Infrastructure design', 'Governance frameworks'],
    publicationDate: 'December 2025',
    description:
      'Research publication examining operational sovereignty principles and their application to institutional digital infrastructure design and governance.',
    href: '/research',
    availability: 'Public institutional materials',
  },
  {
    id: 'comp-005',
    title: 'DORA operational resilience alignment',
    type: 'Compliance',
    topic: ['Operational resilience', 'Financial sector', 'Third-party risk', 'DORA'],
    publicationDate: 'December 2025',
    description:
      'Operational resilience requirements, testing frameworks, and third-party risk management.',
    href: '/compliance',
    availability: 'Structured engagement',
  },
  {
    id: 'comp-004',
    title: 'NIS2 Directive alignment',
    type: 'Compliance',
    topic: ['Cybersecurity', 'Incident reporting', 'Risk management', 'NIS2'],
    publicationDate: 'November 2025',
    description:
      'Security requirements, incident reporting, and risk management measures aligned with European cybersecurity directive.',
    href: '/compliance',
    availability: 'Structured engagement',
  },
  {
    id: 'comp-003',
    title: 'ISO 22301 business continuity alignment',
    type: 'Compliance',
    topic: ['Business continuity', 'Resilience', 'Recovery procedures', 'ISO 22301'],
    publicationDate: 'October 2025',
    description: 'Continuity planning, resilience frameworks, and recovery procedures.',
    href: '/compliance',
    availability: 'Structured engagement',
  },
  {
    id: 'tp-002',
    title: 'Operational sovereignty in critical infrastructure',
    type: 'Technical Papers',
    topic: ['Critical infrastructure', 'Risk management', 'Regulatory compliance'],
    publicationDate: 'October 2025',
    description:
      'Analysis of operational sovereignty requirements for critical infrastructure operators.',
    href: '/technical-papers',
    availability: 'Structured engagement',
  },
  {
    id: 'doc-002',
    title: 'API documentation and integration standards',
    type: 'Documentation',
    topic: ['System architecture', 'Interoperability', 'Technical standards'],
    publicationDate: 'October 2025',
    description: 'Technical documentation for API integration and interoperability standards.',
    href: '/documentation',
    availability: 'Structured engagement',
  },
  {
    id: 'sec-005',
    title: 'Supply chain security assessment',
    type: 'Security',
    topic: ['Third-party risk', 'Supply chain', 'Risk assessment'],
    publicationDate: 'September 2025',
    description: 'Security assessment framework for supply chain and third-party dependencies.',
    href: '/security',
    availability: 'Structured engagement',
  },
  {
    id: 'comp-002',
    title: 'ISO/IEC 27001 alignment',
    type: 'Compliance',
    topic: ['Information security', 'Risk management', 'Security controls', 'ISO 27001'],
    publicationDate: 'September 2025',
    description:
      'Security controls, risk management methodologies, and information security governance.',
    href: '/compliance',
    availability: 'Structured engagement',
  },
  {
    id: 'sec-004',
    title: 'Zero-trust architecture framework',
    type: 'Security',
    topic: ['Security architecture', 'Access control', 'Identity management'],
    publicationDate: 'August 2025',
    description:
      'Zero-trust security model implementation for critical infrastructure environments.',
    href: '/security',
    availability: 'Controlled disclosure',
  },
  {
    id: 'comp-001',
    title: 'GDPR alignment framework',
    type: 'Compliance',
    topic: ['Data protection', 'Privacy', 'Regulatory compliance', 'GDPR'],
    publicationDate: 'August 2025',
    description:
      'Data protection principles, processing requirements, and individual rights embedded in system design.',
    href: '/compliance',
    availability: 'Public institutional materials',
  },
  {
    id: 'tp-004',
    title: 'Resilience architecture for critical systems',
    type: 'Technical Papers',
    topic: ['System architecture', 'Resilience', 'Business continuity'],
    publicationDate: 'July 2025',
    description: 'Architectural patterns for resilience in critical infrastructure systems.',
    href: '/technical-papers',
    availability: 'Structured engagement',
  },
  {
    id: 'sec-003',
    title: 'Incident response procedures',
    type: 'Security',
    topic: ['Incident response', 'Detection', 'Notification protocols'],
    publicationDate: 'July 2025',
    description:
      'Incident response procedures designed to align with European regulatory requirements.',
    href: '/security',
    availability: 'Controlled disclosure',
  },
  {
    id: 'tp-003',
    title: 'Cross-border data governance frameworks',
    type: 'Technical Papers',
    topic: ['Data governance', 'Regulatory alignment', 'Interoperability'],
    publicationDate: 'June 2025',
    description:
      'Framework analysis for cross-border data governance in regulated infrastructure environments.',
    href: '/technical-papers',
    availability: 'Controlled disclosure',
  },
  {
    id: 'sec-002',
    title: 'Cryptographic protection framework',
    type: 'Security',
    topic: ['Cryptography', 'Data protection', 'Key management'],
    publicationDate: 'June 2025',
    description:
      'Cryptographic controls aligned with European standards for data at rest and in transit.',
    href: '/security',
    availability: 'Controlled disclosure',
  },
  {
    id: 'sec-001',
    title: 'Security architecture principles',
    type: 'Security',
    topic: ['Security architecture', 'Defence in depth', 'Access control'],
    publicationDate: 'May 2025',
    description:
      'Foundational security design principles including isolation, cryptographic protection, and access control.',
    href: '/security',
    availability: 'Public institutional materials',
  },
  {
    id: 'comp-007',
    title: 'Data Act implementation guidance',
    type: 'Compliance',
    topic: ['Data governance', 'Interoperability', 'Regulatory compliance', 'Data Act'],
    publicationDate: 'April 2025',
    description: 'Implementation guidance for Data Act requirements in infrastructure systems.',
    href: '/compliance',
    availability: 'Structured engagement',
  },
  {
    id: 'doc-001',
    title: 'Documentation practices and access model',
    type: 'Documentation',
    topic: ['System architecture', 'Operational procedures', 'Governance frameworks'],
    publicationDate: 'March 2025',
    description:
      'Comprehensive documentation practices covering system architecture, operational procedures, governance frameworks, and compliance methodologies.',
    href: '/documentation',
    availability: 'Public institutional materials',
  },
  {
    id: 'tp-001',
    title: 'European Flexibility Operating System (EFOS)',
    type: 'Technical Papers',
    topic: ['Digital sovereignty', 'Infrastructure design', 'Regulatory alignment', 'EFOS'],
    publicationDate: 'March 2025',
    description:
      'Proposed European public–private digital infrastructure for harmonised, cross-border energy system flexibility management, responding to EU directives (DES, Green Deal, EPBD, Data Act, AI Act, Net Zero Industry Act). Long-term digital backbone for EU system objectives, not a commercial software product.',
    href: '/efos-framework-details',
    availability: 'Structured engagement',
  },
  {
    id: 'comp-006',
    title: 'AI Act compliance framework',
    type: 'Compliance',
    topic: ['Artificial intelligence', 'Regulatory compliance', 'Risk assessment', 'AI Act'],
    publicationDate: 'March 2025',
    description: 'Compliance framework for AI systems under European AI Act requirements.',
    href: '/compliance',
    availability: 'Controlled disclosure',
  },
  {
    id: 'research-002',
    title: 'Crisis-resilient digital infrastructure',
    type: 'Technical Papers',
    topic: ['Infrastructure design', 'Resilience', 'Business continuity'],
    publicationDate: 'In preparation',
    description:
      'Working paper exploring frameworks for crisis-resilient digital infrastructure design, focusing on continuity and operational resilience during disruption scenarios.',
    href: '/research',
    availability: 'Structured engagement',
  },
  {
    id: 'research-003',
    title: 'Interoperability as infrastructure',
    type: 'Technical Papers',
    topic: ['Interoperability', 'Digital sovereignty', 'Regulatory alignment'],
    publicationDate: 'In preparation',
    description:
      'Framework brief examining interoperability as foundational infrastructure requirement for sovereign digital systems and cross-border coordination.',
    href: '/research',
    availability: 'Structured engagement',
  },
  {
    id: 'research-004',
    title: 'AI governance for mission-critical systems',
    type: 'Technical Papers',
    topic: ['Artificial intelligence', 'Governance frameworks', 'Security architecture'],
    publicationDate: 'In preparation',
    description:
      'Brief addressing governance frameworks for AI deployment in mission-critical institutional systems, covering accountability, transparency, and operational control.',
    href: '/research',
    availability: 'Structured engagement',
  },
];

const ResourceIndex = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('All');
  const [selectedAvailability, setSelectedAvailability] = useState<string>('All');
  const [savedSearches, setSavedSearches] = useState<SavedSearch[]>([]);
  const [showSavedSearches, setShowSavedSearches] = useState(false);
  const [saveSearchName, setSaveSearchName] = useState('');
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [showTopicsDropdown, setShowTopicsDropdown] = useState(false);
  const topicsDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem('northflow_saved_searches');
    if (stored) {
      try {
        setSavedSearches(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse saved searches');
      }
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (topicsDropdownRef.current && !topicsDropdownRef.current.contains(event.target as Node)) {
        setShowTopicsDropdown(false);
      }
    };

    if (showTopicsDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTopicsDropdown]);

  const resourceTypes = ['All', 'Documentation', 'Technical Papers', 'Compliance', 'Security'];
  const availabilityOptions = [
    'All',
    'Public institutional materials',
    'Structured engagement',
    'Controlled disclosure',
  ];

  const allTopics = useMemo(() => {
    const topics = new Set<string>();
    resources.forEach((resource) => {
      resource.topic.forEach((t) => topics.add(t));
    });
    return Array.from(topics).sort();
  }, []);

  const publicationDates = useMemo(() => {
    const dates = new Set(resources.map((r) => r.publicationDate));
    return ['All', ...Array.from(dates).sort().reverse()];
  }, []);

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        searchQuery === '' ||
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.topic.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesType = selectedType === 'All' || resource.type === selectedType;
      const matchesTopics =
        selectedTopics.length === 0 ||
        selectedTopics.some((topic) => resource.topic.includes(topic));
      const matchesDate = selectedDate === 'All' || resource.publicationDate === selectedDate;
      const matchesAvailability =
        selectedAvailability === 'All' || resource.availability === selectedAvailability;

      return matchesSearch && matchesType && matchesTopics && matchesDate && matchesAvailability;
    });
  }, [searchQuery, selectedType, selectedTopics, selectedDate, selectedAvailability]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedType('All');
    setSelectedTopics([]);
    setSelectedDate('All');
    setSelectedAvailability('All');
  };

  const activeFilterCount = [
    selectedType !== 'All' ? 1 : 0,
    selectedTopics.length,
    selectedDate !== 'All' ? 1 : 0,
    selectedAvailability !== 'All' ? 1 : 0,
  ].reduce((a, b) => a + b, 0);

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const saveCurrentSearch = () => {
    if (!saveSearchName.trim()) return;

    const newSearch: SavedSearch = {
      id: Date.now().toString(),
      name: saveSearchName.trim(),
      searchQuery,
      selectedType,
      selectedTopics,
      selectedDate,
      selectedAvailability,
      createdAt: new Date().toISOString(),
    };

    const updated = [...savedSearches, newSearch];
    setSavedSearches(updated);
    localStorage.setItem('northflow_saved_searches', JSON.stringify(updated));
    setSaveSearchName('');
    setShowSaveDialog(false);
  };

  const loadSavedSearch = (search: SavedSearch) => {
    setSearchQuery(search.searchQuery);
    setSelectedType(search.selectedType);
    setSelectedTopics(search.selectedTopics);
    setSelectedDate(search.selectedDate);
    setSelectedAvailability(search.selectedAvailability);
    setShowSavedSearches(false);
  };

  const deleteSavedSearch = (id: string) => {
    const updated = savedSearches.filter((s) => s.id !== id);
    setSavedSearches(updated);
    localStorage.setItem('northflow_saved_searches', JSON.stringify(updated));
  };

  const hasActiveFilters = searchQuery !== '' || activeFilterCount > 0;

  return (
    <div className="space-y-8">
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-headline font-semibold text-foreground">
              Search and filter resources
            </h2>
            <div className="flex items-center gap-2">
              {savedSearches.length > 0 && (
                <button
                  onClick={() => setShowSavedSearches(!showSavedSearches)}
                  className="px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-sm transition-all duration-200 hover:bg-muted/80 flex items-center gap-2"
                >
                  <Icon name="bookmark" size={16} variant="outline" />
                  Saved searches ({savedSearches.length})
                </button>
              )}
              {hasActiveFilters && (
                <button
                  onClick={() => setShowSaveDialog(true)}
                  className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-hover flex items-center gap-2"
                >
                  <Icon name="bookmark" size={16} variant="solid" />
                  Save search
                </button>
              )}
            </div>
          </div>

          {showSavedSearches && savedSearches.length > 0 && (
            <div className="bg-muted/50 border border-border rounded-lg p-4">
              <h3 className="text-sm font-semibold text-foreground mb-3">Saved searches</h3>
              <div className="space-y-2">
                {savedSearches.map((search) => (
                  <div
                    key={search.id}
                    className="flex items-center justify-between gap-4 p-3 bg-background border border-border rounded-sm"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground mb-1">{search.name}</p>
                      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                        {search.searchQuery && <span>Query: "{search.searchQuery}"</span>}
                        {search.selectedType !== 'All' && (
                          <span>• Type: {search.selectedType}</span>
                        )}
                        {search.selectedTopics.length > 0 && (
                          <span>• Topics: {search.selectedTopics.length}</span>
                        )}
                        {search.selectedDate !== 'All' && (
                          <span>• Date: {search.selectedDate}</span>
                        )}
                        {search.selectedAvailability !== 'All' && (
                          <span>• Availability: {search.selectedAvailability}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => loadSavedSearch(search)}
                        className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-sm transition-all duration-200 hover:-translate-y-0.5"
                      >
                        Load
                      </button>
                      <button
                        onClick={() => deleteSavedSearch(search.id)}
                        className="p-1.5 text-muted-foreground hover:text-destructive transition-colors duration-200"
                      >
                        <Icon name="trash" size={16} variant="outline" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {showSaveDialog && (
            <div className="bg-muted/50 border border-border rounded-lg p-4">
              <h3 className="text-sm font-semibold text-foreground mb-3">Save current search</h3>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Enter search name..."
                  value={saveSearchName}
                  onChange={(e) => setSaveSearchName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && saveCurrentSearch()}
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  autoFocus
                />
                <button
                  onClick={saveCurrentSearch}
                  disabled={!saveSearchName.trim()}
                  className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-hover disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setShowSaveDialog(false);
                    setSaveSearchName('');
                  }}
                  className="px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-sm transition-all duration-200 hover:bg-muted/80"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="relative">
            <Icon
              name="MagnifyingGlassIcon"
              size={20}
              variant="outline"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search resources by title, description, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Resource type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-sm text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              >
                {resourceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Topics</label>
              <div className="relative" ref={topicsDropdownRef}>
                <button
                  onClick={() => setShowTopicsDropdown(!showTopicsDropdown)}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-sm text-sm text-left focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 flex items-center justify-between"
                >
                  <span
                    className={
                      selectedTopics.length === 0 ? 'text-muted-foreground' : 'text-foreground'
                    }
                  >
                    {selectedTopics.length === 0
                      ? 'Select topics...'
                      : `${selectedTopics.length} selected`}
                  </span>
                  <Icon
                    name={showTopicsDropdown ? 'chevron-up' : 'chevron-down'}
                    size={16}
                    variant="outline"
                    className="text-muted-foreground"
                  />
                </button>

                {showTopicsDropdown && (
                  <div className="absolute z-50 w-full mt-1 bg-background border border-border rounded-sm shadow-lg max-h-80 overflow-y-auto">
                    <div className="p-2 space-y-1">
                      {allTopics.map((topic) => (
                        <label
                          key={topic}
                          className="flex items-center gap-3 px-3 py-2 hover:bg-muted rounded-sm cursor-pointer transition-colors duration-150"
                        >
                          <input
                            type="checkbox"
                            checked={selectedTopics.includes(topic)}
                            onChange={() => toggleTopic(topic)}
                            className="w-4 h-4 rounded border-border text-primary focus:ring-2 focus:ring-primary/20 cursor-pointer"
                          />
                          <span className="text-sm text-foreground flex-1">{topic}</span>
                        </label>
                      ))}
                    </div>
                    {selectedTopics.length > 0 && (
                      <div className="border-t border-border p-2">
                        <button
                          onClick={() => setSelectedTopics([])}
                          className="w-full px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-sm transition-colors duration-150"
                        >
                          Clear all topics
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Publication date
              </label>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-sm text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              >
                {publicationDates.map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Availability</label>
              <select
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-sm text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              >
                {availabilityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {selectedTopics.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Selected topics
              </label>
              <div className="flex flex-wrap gap-2">
                {selectedTopics.map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-sm"
                  >
                    {topic}
                    <button
                      onClick={() => toggleTopic(topic)}
                      className="hover:bg-primary/20 rounded-sm p-0.5 transition-colors duration-150"
                    >
                      <Icon name="x-mark" size={14} variant="solid" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeFilterCount > 0 && (
            <div className="flex items-center justify-between pt-2">
              <p className="text-sm text-muted-foreground">
                {activeFilterCount} filter{activeFilterCount > 1 ? 's' : ''} applied
                {selectedTopics.length > 0 &&
                  ` (${selectedTopics.length} topic${selectedTopics.length > 1 ? 's' : ''})`}
              </p>
              <button
                onClick={resetFilters}
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {filteredResources.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <Icon
              name="DocumentMagnifyingGlassIcon"
              size={48}
              variant="outline"
              className="mx-auto mb-4 text-muted-foreground"
            />
            <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
              No resources found
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-cta font-medium rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-hover"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                        {resource.type}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {resource.publicationDate}
                      </span>
                    </div>
                    <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {resource.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {resource.topic.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 bg-muted/60 text-foreground text-[11px] font-medium rounded border border-border/50"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Availability: {resource.availability}
                    </p>
                  </div>
                  <Link
                    href={resource.href}
                    className="flex-shrink-0 px-4 py-2 bg-primary text-primary-foreground text-sm font-cta font-medium rounded-sm transition-colors duration-200 hover:bg-primary/90"
                  >
                    View details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
          Access to resources
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          Resource availability reflects sensitivity, regulatory context, and system maturity.
          Public materials are accessible directly. Restricted materials are shared through
          structured institutional engagement and appropriate confidentiality arrangements.
        </p>
        <Link
          href="/engage"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground text-sm font-cta font-medium rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-hover"
        >
          Begin institutional engagement
        </Link>
      </div>
    </div>
  );
};

export default ResourceIndex;
