import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const ProjectHGECallout = () => {
  return (
    <aside className="bg-primary/5 border border-primary/20 rounded-lg p-6">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="BeakerIcon" size={20} variant="outline" className="text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
            Research backbone: Project HGE
          </h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
            Project HGE provides instrument-grade validation workflows and uncertainty-aware
            reasoning methods that inform Northflow's systems work.
          </p>
          <Link
            href="/research"
            className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <span>Learn about HGE</span>
            <Icon name="ArrowRightIcon" size={16} variant="outline" className="text-primary" />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default ProjectHGECallout;
