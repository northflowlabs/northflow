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
              Project HGE — automated scientific discovery infrastructure
            </h2>
            <p className="text-base font-body text-muted-foreground leading-relaxed mb-8">
              Project HGE (Hypothesis Generation Engine) is Northflow's flagship research methodology and platform. It operationalizes the scientific method—hypotheses → experiments → evidence → confidence updates—across diverse instruments and environments. HGE provides a systematic, instrument-agnostic approach to automated discovery, enabling rigorous validation of complex systems under real-world constraints.
            </p>
          </div>

          <div className="mb-8">
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-sm flex items-center justify-center mt-0.5">
                  <Icon name="BeakerIcon" size={14} variant="outline" className="text-primary" />
                </div>
                <span className="text-base font-body text-foreground">
                  Formulates testable hypotheses
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-sm flex items-center justify-center mt-0.5">
                  <Icon name="ChartBarIcon" size={14} variant="outline" className="text-primary" />
                </div>
                <span className="text-base font-body text-foreground">
                  Prioritizes experiments by information gain
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-sm flex items-center justify-center mt-0.5">
                  <Icon name="CpuChipIcon" size={14} variant="outline" className="text-primary" />
                </div>
                <span className="text-base font-body text-foreground">
                  Executes on real instruments (including live remote quantum hardware used as a stress-test environment)
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-sm flex items-center justify-center mt-0.5">
                  <Icon name="DocumentCheckIcon" size={14} variant="outline" className="text-primary" />
                </div>
                <span className="text-base font-body text-foreground">
                  Tracks uncertainty, drift, and provenance
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-8 p-4 bg-background border border-border rounded-sm">
            <p className="text-sm font-body text-muted-foreground">
              <span className="font-semibold text-foreground">Current validation:</span> Currently validating the methodology on live remote quantum hardware as a demanding physical test environment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/research/hge"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-body font-medium rounded-sm hover:bg-primary/90 transition-colors duration-200 ease-institutional"
            >
              Learn more about HGE
              <Icon name="ArrowRightIcon" size={16} variant="outline" className="ml-2" />
            </Link>
            <Link
              href="/technical-papers"
              className="inline-flex items-center justify-center px-6 py-3 bg-background border border-border text-foreground font-body font-medium rounded-sm hover:bg-card transition-colors duration-200 ease-institutional"
            >
              Read technical overview
              <Icon name="ArrowRightIcon" size={16} variant="outline" className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHGESection;