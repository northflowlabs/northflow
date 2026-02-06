import OperationalContinuityFlowDiagram from './diagrams/OperationalContinuityFlowDiagram';

const OperationalContinuityFlow = () => {
  return (
    <section className="bg-muted py-16">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-headline font-semibold text-foreground mb-6 text-center">
            Operational continuity across disruption scenarios
          </h2>
          <div className="flex justify-center mb-6">
            <OperationalContinuityFlowDiagram className="w-full max-w-4xl text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground font-body leading-relaxed text-center italic">
            EFOS supports continuity planning by aligning governance, architecture, and operational responsibilities before disruption occurs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OperationalContinuityFlow;