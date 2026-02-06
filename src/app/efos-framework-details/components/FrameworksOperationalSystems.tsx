import FrameworksOperationalSystemsDiagram from './diagrams/FrameworksOperationalSystemsDiagram';

const FrameworksOperationalSystems = () => {
  return (
    <section className="bg-muted py-16">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-headline font-semibold text-foreground mb-6 text-center">
            Frameworks and operational systems
          </h2>
          <div className="flex justify-center mb-6">
            <FrameworksOperationalSystemsDiagram className="w-full max-w-3xl text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground font-body leading-relaxed text-center italic">
            EFOS informs system design and governance. It does not replace operational tools or institutional authority.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrameworksOperationalSystems;