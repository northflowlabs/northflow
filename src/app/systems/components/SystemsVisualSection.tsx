interface SystemsVisualSectionProps {
  className?: string;
}

const SystemsVisualSection = ({ className = '' }: SystemsVisualSectionProps) => {
  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-headline font-semibold text-foreground mb-3 text-center">
            System interactions and governance boundaries
          </h2>
          <p className="text-sm text-muted-foreground font-body leading-relaxed text-center max-w-3xl mx-auto">
            The diagram below is illustrative and conceptual. It represents design principles and architectural intent, not deployed systems, products, or operational environments.
          </p>
        </div>
        <div className="relative w-full aspect-[21/9] bg-gradient-to-br from-primary/5 via-muted to-primary/10 rounded-lg overflow-hidden border border-border">
          {/* Abstract system-level visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 1200 514" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid pattern */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
                </pattern>
              </defs>
              <rect width="1200" height="514" fill="url(#grid)" className="text-foreground" />
              
              {/* Abstract nodes and connections */}
              <g className="text-primary" opacity="0.6">
                {/* Central node cluster */}
                <circle cx="600" cy="257" r="8" fill="currentColor" />
                <circle cx="500" cy="200" r="6" fill="currentColor" />
                <circle cx="700" cy="200" r="6" fill="currentColor" />
                <circle cx="500" cy="314" r="6" fill="currentColor" />
                <circle cx="700" cy="314" r="6" fill="currentColor" />
                
                {/* Connection lines */}
                <line x1="600" y1="257" x2="500" y2="200" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                <line x1="600" y1="257" x2="700" y2="200" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                <line x1="600" y1="257" x2="500" y2="314" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                <line x1="600" y1="257" x2="700" y2="314" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                
                {/* Outer layer nodes */}
                <circle cx="350" cy="150" r="5" fill="currentColor" opacity="0.7" />
                <circle cx="850" cy="150" r="5" fill="currentColor" opacity="0.7" />
                <circle cx="350" cy="364" r="5" fill="currentColor" opacity="0.7" />
                <circle cx="850" cy="364" r="5" fill="currentColor" opacity="0.7" />
                
                {/* Secondary connections */}
                <line x1="500" y1="200" x2="350" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                <line x1="700" y1="200" x2="850" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                <line x1="500" y1="314" x2="350" y2="364" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                <line x1="700" y1="314" x2="850" y2="364" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                
                {/* Abstract layer representations */}
                <rect x="200" y="100" width="120" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <rect x="880" y="100" width="120" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <rect x="200" y="354" width="120" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <rect x="880" y="354" width="120" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
              </g>
            </svg>
          </div>
        </div>
        
        {/* Caption */}
        <div className="mt-6 max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            Research outputs inform system design, implementation planning, and institutional dialogue across infrastructure contexts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SystemsVisualSection;