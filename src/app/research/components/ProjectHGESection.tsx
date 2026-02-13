import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface ProjectHGESectionProps {
  className?: string;
}

const ProjectHGESection = ({ className = '' }: ProjectHGESectionProps) => {
  return (
    <section className={`bg-card border-y border-border py-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-6">
              Project HGE — structured scientific discovery infrastructure
            </h2>
            <p className="text-base font-body text-muted-foreground leading-relaxed mb-8">
              Project HGE (Hypothesis Generation Engine) is Northflow’s core research methodology
              for structured hypothesis formation, evaluation, and evidence governance. HGE is not a
              product. It is a methodological program. It formalises:
            </p>
          </div>

          <div className="mb-8">
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-sm flex items-center justify-center mt-0.5">
                  <Icon name="check-circle" size={14} variant="outline" className="text-primary" />
                </div>
                <span className="text-base font-body text-foreground">
                  Explicit hypothesis representation
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-sm flex items-center justify-center mt-0.5">
                  <Icon name="check-circle" size={14} variant="outline" className="text-primary" />
                </div>
                <span className="text-base font-body text-foreground">
                  Information-gain-driven experiment prioritisation
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-sm flex items-center justify-center mt-0.5">
                  <Icon name="check-circle" size={14} variant="outline" className="text-primary" />
                </div>
                <span className="text-base font-body text-foreground">
                  Deterministic execution and reproducible evaluation
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-sm flex items-center justify-center mt-0.5">
                  <Icon name="check-circle" size={14} variant="outline" className="text-primary" />
                </div>
                <span className="text-base font-body text-foreground">
                  Uncertainty tracking, drift detection, and provenance control
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-8 p-6 bg-background border border-primary/30 rounded-sm">
            <p className="text-xs font-cta font-semibold tracking-[0.08em] text-primary mb-2">
              Current validation
            </p>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              Operational validation completed on Gaia DR3 astronomical catalog datasets - one of
              the largest structured scientific datasets in existence. Earth Observation adaptation
              underway for ESA Sentinel data targeting wildfire risk, deforestation verification,
              and infrastructure vulnerability mapping.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/research/hge"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-body font-medium rounded-sm hover:bg-primary/90 transition-colors duration-200 ease-institutional"
            >
              Methodology overview →
            </Link>
            <Link
              href="/technical-papers"
              className="inline-flex items-center justify-center px-6 py-3 bg-background border border-border text-foreground font-body font-medium rounded-sm hover:bg-card transition-colors duration-200 ease-institutional"
            >
              Technical note →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHGESection;
