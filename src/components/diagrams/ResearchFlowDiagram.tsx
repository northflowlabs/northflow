interface ResearchFlowDiagramProps {
  className?: string;
}

const ResearchFlowDiagram = ({ className = '' }: ResearchFlowDiagramProps) => {
  return (
    <svg
      viewBox="0 0 600 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Research Phase */}
      <rect x="50" y="50" width="140" height="60" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="120" y="75" textAnchor="middle" dominantBaseline="middle" className="text-xs font-medium" fill="currentColor">
        Research &
      </text>
      <text x="120" y="90" textAnchor="middle" dominantBaseline="middle" className="text-xs font-medium" fill="currentColor">
        Methodology
      </text>

      {/* Arrow 1 */}
      <line x1="190" y1="80" x2="240" y2="80" stroke="currentColor" strokeWidth="2" />
      <polygon points="240,80 230,75 230,85" fill="currentColor" />

      {/* Translation Phase */}
      <rect x="240" y="50" width="140" height="60" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="310" y="75" textAnchor="middle" dominantBaseline="middle" className="text-xs font-medium" fill="currentColor">
        Framework
      </text>
      <text x="310" y="90" textAnchor="middle" dominantBaseline="middle" className="text-xs font-medium" fill="currentColor">
        Development
      </text>

      {/* Arrow 2 */}
      <line x1="380" y1="80" x2="430" y2="80" stroke="currentColor" strokeWidth="2" />
      <polygon points="430,80 420,75 420,85" fill="currentColor" />

      {/* Systems Phase */}
      <rect x="430" y="50" width="140" height="60" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="500" y="75" textAnchor="middle" dominantBaseline="middle" className="text-xs font-medium" fill="currentColor">
        Deployable
      </text>
      <text x="500" y="90" textAnchor="middle" dominantBaseline="middle" className="text-xs font-medium" fill="currentColor">
        Systems
      </text>

      {/* Supporting Elements */}
      <rect x="100" y="180" width="100" height="40" rx="4" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" />
      <text x="150" y="200" textAnchor="middle" dominantBaseline="middle" className="text-xs" fill="currentColor">
        Publications
      </text>

      <rect x="250" y="180" width="100" height="40" rx="4" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" />
      <text x="300" y="200" textAnchor="middle" dominantBaseline="middle" className="text-xs" fill="currentColor">
        Validation
      </text>

      <rect x="400" y="180" width="100" height="40" rx="4" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" />
      <text x="450" y="200" textAnchor="middle" dominantBaseline="middle" className="text-xs" fill="currentColor">
        Implementation
      </text>

      {/* Connection lines to supporting elements */}
      <line x1="120" y1="110" x2="150" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="310" y1="110" x2="300" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="500" y1="110" x2="450" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />

      {/* Bottom label */}
      <text x="300" y="260" textAnchor="middle" className="text-xs italic" fill="currentColor">
        From Research to Systems: Translation Methodology
      </text>
    </svg>
  );
};

export default ResearchFlowDiagram;