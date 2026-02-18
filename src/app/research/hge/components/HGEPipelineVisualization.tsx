'use client';

import { useMemo, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface HGEPipelineVisualizationProps {
  className?: string;
}

interface PipelineStage {
  id: string;
  title: string;
  icon: string;
  summary: string;
  specifications: string[];
}

const stages: PipelineStage[] = [
  {
    id: 'data',
    title: 'Data',
    icon: 'server-stack',
    summary:
      'Observational datasets are normalized, quality-checked, and mapped into reproducible evidence contexts.',
    specifications: [
      'Schema harmonization across instrument sources',
      'Outlier and drift pre-check pipeline',
      'Provenance event creation at ingestion',
    ],
  },
  {
    id: 'hypotheses',
    title: 'Hypotheses',
    icon: 'sparkles',
    summary:
      'The engine generates explicit, testable hypotheses ranked by information gain and uncertainty impact.',
    specifications: [
      'Machine-readable hypothesis schema',
      'Bayesian prior initialization and weighting',
      'Constraint-aware search space selection',
    ],
  },
  {
    id: 'experiments',
    title: 'Experiments',
    icon: 'beaker',
    summary:
      'Experiments are designed and executed deterministically with operational guardrails and policy gates.',
    specifications: [
      'Information-gain optimized experiment plans',
      'Policy-gated execution contract',
      'Run-level replay compatibility',
    ],
  },
  {
    id: 'evidence',
    title: 'Evidence',
    icon: 'document-check',
    summary:
      'Signed evidence bundles capture outcomes, confidence updates, and traceable provenance chains.',
    specifications: [
      'Cryptographic signature and integrity checks',
      'Audit invariants and tamper detection',
      'Institutional review-ready export package',
    ],
  },
];

const adapterStatuses = [
  { label: 'Gaia adapter', status: 'Operational', tone: 'operational' },
  { label: 'Sentinel adapter', status: 'In development', tone: 'development' },
  { label: 'Marine adapter', status: 'Planned', tone: 'planned' },
];

const toneClasses: Record<string, string> = {
  operational: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  development: 'bg-amber-100 text-amber-800 border-amber-200',
  planned: 'bg-slate-100 text-slate-700 border-slate-200',
};

const HGEPipelineVisualization = ({ className = '' }: HGEPipelineVisualizationProps) => {
  const [activeStageId, setActiveStageId] = useState(stages[0].id);

  const activeStage = useMemo(
    () => stages.find((stage) => stage.id === activeStageId) ?? stages[0],
    [activeStageId]
  );

  return (
    <section className={`bg-card border-y border-border py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-cta font-semibold tracking-[0.16em] text-primary mb-3">
              PIPELINE
            </p>
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
              Data to evidence pipeline
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-4xl mx-auto">
              Interactive execution flow: Data → Hypotheses → Experiments → Evidence. Select each
              stage to review technical specifications and live adapter readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
            {stages.map((stage, index) => {
              const isActive = stage.id === activeStage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageId(stage.id)}
                  className={`relative border rounded-sm p-4 text-left transition-all duration-200 ${
                    isActive
                      ? 'bg-primary/10 border-primary shadow-sm'
                      : 'bg-background border-border hover:border-primary/40'
                  }`}
                >
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-3">
                    <Icon name={stage.icon} size={20} variant="outline" className="text-primary" />
                  </div>
                  <p className="text-sm font-headline font-semibold text-foreground">
                    {stage.title}
                  </p>
                  {index < stages.length - 1 && (
                    <Icon
                      name="arrow-right"
                      size={14}
                      variant="outline"
                      className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-background border border-border rounded-sm p-6">
              <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                {activeStage.title} stage specifications
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">
                {activeStage.summary}
              </p>
              <ul className="space-y-2">
                {activeStage.specifications.map((item) => (
                  <li key={item} className="flex items-start space-x-2">
                    <Icon
                      name="check-circle"
                      size={14}
                      variant="outline"
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-foreground font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background border border-border rounded-sm p-6">
              <h3 className="text-lg font-headline font-semibold text-foreground mb-4">
                Live adapter status
              </h3>
              <div className="space-y-3">
                {adapterStatuses.map((adapter) => (
                  <div key={adapter.label} className="border border-border rounded-sm p-3">
                    <p className="text-sm font-headline font-semibold text-foreground mb-2">
                      {adapter.label}
                    </p>
                    <span
                      className={`inline-flex px-3 py-1 rounded-sm border text-xs font-cta font-medium uppercase ${toneClasses[adapter.tone]}`}
                    >
                      {adapter.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HGEPipelineVisualization;
