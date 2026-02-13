interface EFOSSystemOverviewDiagramProps {
  className?: string;
}

const EFOSSystemOverviewDiagram = ({ className = '' }: EFOSSystemOverviewDiagramProps) => {
  return (
    <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Institutional Objectives Layer */}
      <rect
        x="50"
        y="40"
        width="700"
        height="80"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <text
        x="400"
        y="65"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm font-medium"
        fill="currentColor"
      >
        Institutional Objectives
      </text>
      <text
        x="400"
        y="95"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm"
        fill="currentColor"
      >
        Public service continuity · Regulatory accountability · National and regional autonomy
      </text>

      {/* Arrow down */}
      <line x1="400" y1="120" x2="400" y2="150" stroke="currentColor" strokeWidth="2" />
      <polygon points="400,150 395,140 405,140" fill="currentColor" />

      {/* EFOS Governance Layer */}
      <rect
        x="50"
        y="150"
        width="700"
        height="90"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <text
        x="400"
        y="170"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm font-medium"
        fill="currentColor"
      >
        EFOS Governance Layer
      </text>
      <text
        x="400"
        y="190"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm"
        fill="currentColor"
      >
        Shared principles for oversight
      </text>
      <text
        x="400"
        y="205"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm"
        fill="currentColor"
      >
        Auditability and accountability
      </text>
      <text
        x="400"
        y="220"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm"
        fill="currentColor"
      >
        Cross-border coordination guidance
      </text>

      {/* Arrow down */}
      <line x1="400" y1="240" x2="400" y2="270" stroke="currentColor" strokeWidth="2" />
      <polygon points="400,270 395,260 405,260" fill="currentColor" />

      {/* Architecture and Control Frameworks */}
      <rect
        x="50"
        y="270"
        width="700"
        height="90"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <text
        x="400"
        y="290"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm font-medium"
        fill="currentColor"
      >
        Architecture and Control Frameworks
      </text>
      <text
        x="400"
        y="310"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm"
        fill="currentColor"
      >
        Reference patterns for infrastructure design
      </text>
      <text
        x="400"
        y="325"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm"
        fill="currentColor"
      >
        Resilience and continuity models
      </text>
      <text
        x="400"
        y="340"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm"
        fill="currentColor"
      >
        Security and compliance alignment
      </text>

      {/* Arrow down */}
      <line x1="400" y1="360" x2="400" y2="390" stroke="currentColor" strokeWidth="2" />
      <polygon points="400,390 395,380 405,380" fill="currentColor" />

      {/* Operational Systems Layer */}
      <rect
        x="50"
        y="390"
        width="700"
        height="80"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <text
        x="400"
        y="415"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm font-medium"
        fill="currentColor"
      >
        Operational Systems and Infrastructure
      </text>
      <text
        x="400"
        y="440"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm"
        fill="currentColor"
      >
        National and regional digital infrastructure
      </text>
      <text
        x="400"
        y="455"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm"
        fill="currentColor"
      >
        Operated within sovereign jurisdictions
      </text>
    </svg>
  );
};

export default EFOSSystemOverviewDiagram;
