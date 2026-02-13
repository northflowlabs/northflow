import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const ProjectHGECallout = () => {
  return (
    <aside className="bg-primary/5 border border-primary/30 rounded-lg p-8">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="beaker" size={22} variant="outline" className="text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
            Research backbone: Project HGE (expanded)
          </h3>
          <p className="text-base text-muted-foreground font-body leading-relaxed mb-4">
            Project HGE provides instrument-grade validation workflows and uncertainty-aware
            reasoning methods that inform Northflow&apos;s systems architecture.
          </p>
          <p className="text-base text-muted-foreground font-body leading-relaxed mb-6">
            The verification layer developed within HGE — including signed evidence bundles,
            deterministic replay, and audit invariants — provides the methodological foundation for
            system-level governance capabilities.
          </p>
          <Link
            href="/research/hge"
            className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <span>Learn about HGE</span>
            <Icon name="arrow-right" size={16} variant="outline" className="text-primary" />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default ProjectHGECallout;
