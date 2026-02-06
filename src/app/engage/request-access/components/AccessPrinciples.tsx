import Icon from '@/components/ui/AppIcon';

interface AccessPrinciplesProps {
  className?: string;
}

const AccessPrinciples = ({ className = '' }: AccessPrinciplesProps) => {
  const principles = [
    'Materials are shared for evaluation, research, and institutional discussion',
    'Access is reviewed based on institutional role and intended use',
    'Disclosure is contextual and may be subject to limitations',
    'Requests are handled confidentially',
  ];

  return (
    <section className={`bg-card py-16 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-headline font-semibold text-foreground mb-8 text-center">
            Access principles
          </h2>
          <div className="bg-background border border-border rounded-sm p-8">
            <ul className="space-y-4">
              {principles.map((principle, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon 
                      name="CheckIcon" 
                      size={16} 
                      variant="outline" 
                      className="text-primary"
                    />
                  </div>
                  <span className="text-base text-foreground font-body leading-relaxed">
                    {principle}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessPrinciples;