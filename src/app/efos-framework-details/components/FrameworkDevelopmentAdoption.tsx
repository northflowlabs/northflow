import FrameworkDevelopmentAdoptionDiagram from './diagrams/FrameworkDevelopmentAdoptionDiagram';

const FrameworkDevelopmentAdoption = () => {
  return (
    <section className="bg-background py-16">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-headline font-semibold text-foreground mb-6 text-center">
            Framework development and institutional adoption
          </h2>
          <div className="flex justify-center mb-6">
            <FrameworkDevelopmentAdoptionDiagram className="w-full max-w-4xl text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground font-body leading-relaxed text-center italic">
            EFOS adoption is incremental, non-binding, and institution-led.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrameworkDevelopmentAdoption;
