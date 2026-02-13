interface SovereigntyPreservingGovernanceDiagramProps {
  className?: string;
}

const SovereigntyPreservingGovernanceDiagram = ({
  className = '',
}: SovereigntyPreservingGovernanceDiagramProps) => {
  return (
    <svg viewBox="0 0 900 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Left Column: National Authorities */}
      <rect
        x="50"
        y="50"
        width="220"
        height="300"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <text
        x="160"
        y="80"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-base font-medium"
        fill="currentColor"
      >
        National Authorities
      </text>

      <rect
        x="70"
        y="110"
        width="180"
        height="60"
        rx="3"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
        fill="none"
      />
      <text
        x="160"
        y="145"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm"
        fill="currentColor"
      >
        Policy authority
      </text>

      <rect
        x="70"
        y="185"
        width="180"
        height="60"
        rx="3"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
        fill="none"
      />
      <text
        x="160"
        y="220"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm"
        fill="currentColor"
      >
        Regulatory enforcement
      </text>

      <rect
        x="70"
        y="260"
        width="180"
        height="60"
        rx="3"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
        fill="none"
      />
      <text
        x="160"
        y="295"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm"
        fill="currentColor"
      >
        Infrastructure oversight
      </text>

      {/* Center Column: EFOS Coordination Framework */}
      <rect
        x="340"
        y="50"
        width="220"
        height="300"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <text
        x="450"
        y="80"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-base font-medium"
        fill="currentColor"
      >
        EFOS Coordination
      </text>
      <text
        x="450"
        y="95"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-base font-medium"
        fill="currentColor"
      >
        Framework
      </text>

      <rect
        x="360"
        y="120"
        width="180"
        height="60"
        rx="3"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
        fill="none"
      />
      <text
        x="450"
        y="155"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm"
        fill="currentColor"
      >
        Shared principles
      </text>

      <rect
        x="360"
        y="195"
        width="180"
        height="60"
        rx="3"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
        fill="none"
      />
      <text
        x="450"
        y="230"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm"
        fill="currentColor"
      >
        Interoperability guidance
      </text>

      <rect
        x="360"
        y="270"
        width="180"
        height="60"
        rx="3"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
        fill="none"
      />
      <text
        x="450"
        y="305"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm"
        fill="currentColor"
      >
        Governance reference models
      </text>

      {/* Right Column: Regional and Cross-border Systems */}
      <rect
        x="630"
        y="50"
        width="220"
        height="300"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <text
        x="740"
        y="80"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-base font-medium"
        fill="currentColor"
      >
        Regional and
      </text>
      <text
        x="740"
        y="95"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-base font-medium"
        fill="currentColor"
      >
        Cross-border Systems
      </text>

      <rect
        x="650"
        y="120"
        width="180"
        height="60"
        rx="3"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
        fill="none"
      />
      <text
        x="740"
        y="155"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm"
        fill="currentColor"
      >
        Coordinated operations
      </text>

      <rect
        x="650"
        y="195"
        width="180"
        height="60"
        rx="3"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
        fill="none"
      />
      <text
        x="740"
        y="230"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm"
        fill="currentColor"
      >
        Shared resilience mechanisms
      </text>

      <rect
        x="650"
        y="270"
        width="180"
        height="60"
        rx="3"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
        fill="none"
      />
      <text
        x="740"
        y="305"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm"
        fill="currentColor"
      >
        Federated data exchange
      </text>

      {/* Connection arrows */}
      <line x1="270" y1="200" x2="340" y2="200" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="340,200 330,195 330,205" fill="currentColor" />

      <line x1="560" y1="200" x2="630" y2="200" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="630,200 620,195 620,205" fill="currentColor" />
    </svg>
  );
};

export default SovereigntyPreservingGovernanceDiagram;
