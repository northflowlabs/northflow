interface ProofItem {
  id: number;
  title: string;
  status: 'Operational' | 'In development';
  description: string;
}

interface ValidationEvidenceSectionProps {
  className?: string;
}

const ValidationEvidenceSection = ({ className = '' }: ValidationEvidenceSectionProps) => {
  const proofItems: ProofItem[] = [
    {
      id: 1,
      title: 'Gaia DR3 astronomical validation',
      status: 'Operational',
      description:
        "HGE has been operationally validated against the Gaia Data Release 3 astronomical catalog - one of the largest and most complex structured scientific datasets available. This validation demonstrates the engine's ability to perform structured hypothesis search at scale, with deterministic execution and reproducible evidence outputs across billions of observational records.",
    },
    {
      id: 2,
      title: 'Evidence verification system',
      status: 'Operational',
      description:
        'A 5-step verification contract producing signed evidence bundles with deterministic replay, audit invariants, policy gating, and tamper resistance. The system has been tested against 6 adversarial attack vectors through a dedicated red-team tamper suite.',
    },
    {
      id: 3,
      title: 'Governance modes',
      status: 'Operational',
      description:
        'Configurable governance (disabled / logging / enforced) enabling graduated institutional deployment. Supports transition from open research environments to fully governed mission-critical operations.',
    },
    {
      id: 4,
      title: 'Sentinel Earth Observation adaptation',
      status: 'In development',
      description:
        'Active adaptation of HGE for ESA Sentinel satellite data. Targeting wildfire risk modelling, deforestation verification, and infrastructure vulnerability mapping. ESA engagement initiated.',
    },
  ];

  const getStatusClasses = (status: ProofItem['status']) => {
    if (status === 'Operational') {
      return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    }

    return 'bg-amber-100 text-amber-800 border-amber-200';
  };

  return (
    <section className={`bg-card py-20 lg:py-24 border-y border-border ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-cta font-semibold tracking-[0.16em] text-primary mb-3">
            PROOF
          </p>
          <h2 className="text-3xl lg:text-4xl font-headline font-semibold text-foreground mb-4">
            Validated methodology. Operational evidence.
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-4xl mx-auto">
            Northflow follows a strict proof-before-claim discipline. Every capability presented on
            this site is backed by a working implementation or a documented validation artifact. The
            proof inventory is maintained and updated as development progresses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {proofItems.map((item) => (
            <div
              key={item.id}
              className="bg-card p-8 rounded-sm border border-border transition-all duration-200 hover:border-primary hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <h3 className="text-xl font-headline font-semibold text-foreground leading-snug">
                  {item.title}
                </h3>
                <span
                  className={`px-3 py-1 rounded-sm text-xs font-cta font-medium border whitespace-nowrap ${getStatusClasses(item.status)}`}
                >
                  {item.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValidationEvidenceSection;
