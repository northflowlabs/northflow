'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface EvidenceBundleExplorerProps {
  className?: string;
}

interface BundleSection {
  id: string;
  title: string;
  preview: string;
  content: string;
}

const sections: BundleSection[] = [
  {
    id: 'hypothesis',
    title: 'Hypothesis representation',
    preview: 'Machine-readable hypothesis schema (JSON-LD envelope)',
    content:
      'Contains formal claim statement, parameter bounds, uncertainty priors, and falsifiability criteria. Each hypothesis block is versioned and linked to originating evidence context.',
  },
  {
    id: 'provenance',
    title: 'Provenance chain',
    preview: 'W3C PROV-aligned event trace from ingestion to conclusion',
    content:
      'Tracks data source identity, transformation steps, execution environment, and policy checkpoint outcomes. Enables deterministic replay and independent audit reconstruction.',
  },
  {
    id: 'signature',
    title: 'Cryptographic signature',
    preview: 'Signed hash envelope with bundle integrity fingerprint',
    content:
      'Evidence bundles are sealed with ECDSA signatures and integrity hashes. Signature payload includes run id, timestamp, and contract version for institutional verification.',
  },
  {
    id: 'invariants',
    title: 'Audit invariants',
    preview: 'Policy, replay, and tamper controls enforced per contract',
    content:
      'Invariant checks confirm policy gating, replay consistency, and evidence completeness. Failed invariants trigger bundle rejection and incident-path logging for governance review.',
  },
];

const EvidenceBundleExplorer = ({ className = '' }: EvidenceBundleExplorerProps) => {
  const [openSection, setOpenSection] = useState<string>(sections[0].id);

  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-cta font-semibold tracking-[0.16em] text-primary mb-3">EXPLORER</p>
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
              Evidence bundle explorer
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-4xl mx-auto">
              Sample signed evidence bundle (anonymized). Expand each section to inspect how claims,
              provenance, integrity, and audit controls are represented.
            </p>
          </div>

          <div className="bg-card border border-border rounded-sm p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-background border border-border rounded-sm p-3">
                <p className="text-muted-foreground uppercase tracking-wide">Bundle ID</p>
                <p className="text-foreground font-medium mt-1">HGE-EVB-2026-02-017</p>
              </div>
              <div className="bg-background border border-border rounded-sm p-3">
                <p className="text-muted-foreground uppercase tracking-wide">Signature status</p>
                <p className="text-emerald-700 font-medium mt-1">Verified</p>
              </div>
              <div className="bg-background border border-border rounded-sm p-3">
                <p className="text-muted-foreground uppercase tracking-wide">Replay status</p>
                <p className="text-emerald-700 font-medium mt-1">Deterministic match</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {sections.map((section) => {
              const isOpen = openSection === section.id;
              return (
                <div key={section.id} className="bg-card border border-border rounded-sm overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenSection(isOpen ? '' : section.id)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                  >
                    <div>
                      <p className="text-base font-headline font-semibold text-foreground mb-1">
                        {section.title}
                      </p>
                      <p className="text-sm font-body text-muted-foreground">{section.preview}</p>
                    </div>
                    <Icon
                      name="arrow-right"
                      size={16}
                      variant="outline"
                      className={`text-muted-foreground transition-transform ${isOpen ? 'rotate-90' : ''}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 border-t border-border">
                      <p className="text-sm text-foreground font-body leading-relaxed pt-4">
                        {section.content}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceBundleExplorer;
