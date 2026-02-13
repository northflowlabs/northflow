import EFOSSystemOverviewDiagram from './diagrams/EFOSSystemOverviewDiagram';

const EFOSSystemOverview = () => {
  return (
    <section className="bg-muted py-16">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-headline font-semibold text-foreground mb-6 text-center">
            European framework for operational sovereignty
          </h2>
          <p className="text-base text-muted-foreground font-body leading-relaxed mb-8 text-center">
            EFOS defines how sovereign digital infrastructure can be governed, coordinated, and
            sustained across European institutional environments.
          </p>
          <div className="flex justify-center mb-6">
            <EFOSSystemOverviewDiagram className="w-full max-w-3xl text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground font-body leading-relaxed text-center italic">
            EFOS operates as a coordination and reference framework. It does not function as a
            centralised system or authority.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EFOSSystemOverview;
