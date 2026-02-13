'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Initiative {
  id: string;
  title: string;
  category: string;
  status:
    | 'Framework development'
    | 'In design'
    | 'Exploratory'
    | 'Concept stage'
    | 'Flagship research initiative';
  description: string;
  secondaryDescription?: string;
  focusAreas: string[];
  timeline: string;
  participants: string;
  icon: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function InitiativeGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const initiatives: Initiative[] = [
    {
      id: 'hge',
      title: 'Project HGE (Hypothesis Generation Engine)',
      category: 'Research',
      status: 'Flagship research initiative',
      description:
        'Automated, hypothesis-driven discovery infrastructure for instrument-grade research.',
      secondaryDescription:
        'Validated via live remote quantum hardware as a physical stress-test environment.',
      focusAreas: [
        'Hypothesis generation',
        'Experiment prioritization',
        'Uncertainty tracking',
        'Provenance systems',
      ],
      timeline: 'Active validation',
      participants: 'Research infrastructure programme',
      icon: 'BeakerIcon',
      ctaText: 'Explore HGE',
      ctaLink: '/research',
    },
    {
      id: 'efos',
      title: 'European framework for operational sovereignty',
      category: 'Sovereignty',
      status: 'Framework development',
      description:
        'Proposed framework establishing digital sovereignty principles for European government entities and critical infrastructure operators.',
      focusAreas: [
        'Data sovereignty',
        'Operational independence',
        'Regulatory compliance',
        'Audit standards',
      ],
      timeline: 'Development phase',
      participants: 'Institutional dialogue underway',
      icon: 'ShieldCheckIcon',
    },
    {
      id: 'resilience',
      title: 'Critical infrastructure resilience programme',
      category: 'Resilience',
      status: 'In design',
      description:
        'Initiative developing operational continuity frameworks for mission-critical digital infrastructure across NATO-adjacent regions.',
      focusAreas: [
        'Continuity planning',
        'Failover systems',
        'Crisis management',
        'Recovery protocols',
      ],
      timeline: 'Framework definition',
      participants: 'Exploratory engagement',
      icon: 'CpuChipIcon',
    },
    {
      id: 'governance',
      title: 'Institutional governance framework',
      category: 'Governance',
      status: 'Framework development',
      description:
        'Governance methodologies for auditable digital infrastructure in regulated institutional environments.',
      focusAreas: ['Audit trails', 'Compliance automation', 'Policy enforcement', 'Access control'],
      timeline: 'In preparation',
      participants: 'Requirements gathering',
      icon: 'DocumentCheckIcon',
    },
    {
      id: 'interop',
      title: 'Cross-border interoperability initiative',
      category: 'Integration',
      status: 'Concept stage',
      description:
        'Technical standards enabling secure data exchange between sovereign infrastructure systems across European jurisdictions.',
      focusAreas: [
        'Protocol standards',
        'Security frameworks',
        'Data exchange',
        'Identity management',
      ],
      timeline: 'Conceptual design',
      participants: 'Early consultation',
      icon: 'ArrowsRightLeftIcon',
    },
    {
      id: 'research',
      title: 'Sovereign technology research consortium',
      category: 'Research',
      status: 'Exploratory',
      description:
        'Research programme advancing sovereign digital infrastructure capabilities through institutional partnerships and academic collaboration.',
      focusAreas: [
        'Advanced cryptography',
        'Distributed systems',
        'Quantum readiness',
        'Zero-trust architecture',
      ],
      timeline: 'Exploratory programme',
      participants: 'Research dialogue',
      icon: 'BeakerIcon',
    },
    {
      id: 'regional',
      title: 'Regional deployment framework',
      category: 'Operations',
      status: 'In design',
      description:
        'Deployment methodologies ensuring consistent infrastructure implementation across diverse European regulatory environments.',
      focusAreas: [
        'Local compliance',
        'Regional standards',
        'Deployment protocols',
        'Support infrastructure',
      ],
      timeline: 'Framework definition',
      participants: 'Regional consultation',
      icon: 'GlobeEuropeAfricaIcon',
    },
  ];

  const categories = [
    'All',
    'Sovereignty',
    'Resilience',
    'Governance',
    'Integration',
    'Research',
    'Operations',
  ];

  const filteredInitiatives =
    selectedCategory === 'All'
      ? initiatives
      : initiatives.filter((init) => init.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Flagship research initiative':
        return 'bg-accent/20 text-accent border border-accent/30';
      case 'Framework development':
        return 'bg-accent/10 text-accent';
      case 'In design':
        return 'bg-primary/10 text-primary';
      case 'Exploratory':
        return 'bg-warning/10 text-warning';
      case 'Concept stage':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="bg-background py-24">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-headline font-semibold text-foreground mb-4">
            Strategic programmes
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl">
            Framework initiatives under development, structured to advance through research, pilot
            exploration, and institutional dialogue.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-sm text-sm font-cta font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:bg-muted border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInitiatives.map((initiative) => (
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
                  className={`px-3 py-1 rounded-sm text-xs font-cta font-medium ${getStatusColor(initiative.status)}`}
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

              {initiative.secondaryDescription && (
                <p className="text-xs text-muted-foreground/80 font-body mb-4 leading-relaxed italic">
                  {initiative.secondaryDescription}
                </p>
              )}

              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="CalendarIcon" size={16} variant="outline" />
                  <span className="font-body">{initiative.timeline}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="UserGroupIcon" size={16} variant="outline" />
                  <span className="font-body">{initiative.participants}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground font-body mb-2">Focus areas:</p>
                <div className="flex flex-wrap gap-2">
                  {initiative.focusAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted text-foreground text-xs font-body rounded-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {initiative.ctaText && initiative.ctaLink && (
                <div className="mt-4 pt-4 border-t border-border">
                  <Link
                    href={initiative.ctaLink}
                    className="inline-flex items-center text-sm font-cta font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    {initiative.ctaText}
                    <Icon name="ArrowRightIcon" size={16} variant="outline" className="ml-1" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
