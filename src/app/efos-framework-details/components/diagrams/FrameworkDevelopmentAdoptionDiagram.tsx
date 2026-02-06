interface FrameworkDevelopmentAdoptionDiagramProps {
  className?: string;
}

const FrameworkDevelopmentAdoptionDiagram = ({ className = '' }: FrameworkDevelopmentAdoptionDiagramProps) => {
  return (
    <svg
      viewBox="0 0 1000 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Research and Analysis */}
      <rect x="50" y="80" width="150" height="90" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="125" y="115" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Research and
      </text>
      <text x="125" y="130" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Analysis
      </text>

      {/* Arrow 1 */}
      <line x1="200" y1="125" x2="240" y2="125" stroke="currentColor" strokeWidth="2" />
      <polygon points="240,125 230,120 230,130" fill="currentColor" />

      {/* Framework Definition */}
      <rect x="240" y="80" width="150" height="90" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="315" y="115" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Framework
      </text>
      <text x="315" y="130" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Definition
      </text>

      {/* Arrow 2 */}
      <line x1="390" y1="125" x2="430" y2="125" stroke="currentColor" strokeWidth="2" />
      <polygon points="430,125 420,120 420,130" fill="currentColor" />

      {/* Institutional Dialogue */}
      <rect x="430" y="80" width="150" height="90" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="505" y="115" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Institutional
      </text>
      <text x="505" y="130" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Dialogue
      </text>

      {/* Arrow 3 */}
      <line x1="580" y1="125" x2="620" y2="125" stroke="currentColor" strokeWidth="2" />
      <polygon points="620,125 610,120 610,130" fill="currentColor" />

      {/* Pilot and Validation */}
      <rect x="620" y="80" width="150" height="90" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="695" y="115" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Pilot and
      </text>
      <text x="695" y="130" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Validation
      </text>

      {/* Arrow 4 */}
      <line x1="770" y1="125" x2="810" y2="125" stroke="currentColor" strokeWidth="2" />
      <polygon points="810,125 800,120 800,130" fill="currentColor" />

      {/* Voluntary Adoption */}
      <rect x="810" y="80" width="150" height="90" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="885" y="110" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Voluntary
      </text>
      <text x="885" y="125" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Adoption and
      </text>
      <text x="885" y="140" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Localisation
      </text>

      {/* Stage indicators */}
      <text x="125" y="50" textAnchor="middle" dominantBaseline="middle" className="text-sm" fill="currentColor">
        Stage 1
      </text>
      <text x="315" y="50" textAnchor="middle" dominantBaseline="middle" className="text-sm" fill="currentColor">
        Stage 2
      </text>
      <text x="505" y="50" textAnchor="middle" dominantBaseline="middle" className="text-sm" fill="currentColor">
        Stage 3
      </text>
      <text x="695" y="50" textAnchor="middle" dominantBaseline="middle" className="text-sm" fill="currentColor">
        Stage 4
      </text>
      <text x="885" y="50" textAnchor="middle" dominantBaseline="middle" className="text-sm" fill="currentColor">
        Stage 5
      </text>
    </svg>
  );
};

export default FrameworkDevelopmentAdoptionDiagram;