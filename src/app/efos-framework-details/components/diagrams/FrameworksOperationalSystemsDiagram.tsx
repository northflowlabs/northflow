interface FrameworksOperationalSystemsDiagramProps {
  className?: string;
}

const FrameworksOperationalSystemsDiagram = ({ className = '' }: FrameworksOperationalSystemsDiagramProps) => {
  return (
    <svg
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* EFOS Framework Layer */}
      <rect x="100" y="50" width="600" height="100" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="400" y="85" textAnchor="middle" dominantBaseline="middle" className="text-base font-medium" fill="currentColor">
        EFOS
      </text>
      <text x="400" y="105" textAnchor="middle" dominantBaseline="middle" className="text-sm" fill="currentColor">
        Strategic governance and architecture framework
      </text>

      {/* Arrow down */}
      <line x1="400" y1="150" x2="400" y2="190" stroke="currentColor" strokeWidth="2" />
      <polygon points="400,190 395,180 405,180" fill="currentColor" />
      <text x="430" y="175" textAnchor="start" dominantBaseline="middle" className="text-sm italic" fill="currentColor">
        Informs
      </text>

      {/* Operational Systems Layer */}
      <text x="400" y="210" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Operational Systems Layer
      </text>

      {/* Compliance Infrastructure */}
      <rect x="100" y="230" width="180" height="120" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="190" y="265" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Compliance
      </text>
      <text x="190" y="280" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Infrastructure
      </text>
      <text x="190" y="305" textAnchor="middle" dominantBaseline="middle" className="text-sm" fill="currentColor">
        Regulatory reporting
      </text>
      <text x="190" y="320" textAnchor="middle" dominantBaseline="middle" className="text-sm" fill="currentColor">
        Data governance
      </text>
      <text x="190" y="335" textAnchor="middle" dominantBaseline="middle" className="text-sm" fill="currentColor">
        Policy enforcement
      </text>

      {/* Audit and Reporting Systems */}
      <rect x="310" y="230" width="180" height="120" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="400" y="265" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Audit and
      </text>
      <text x="400" y="280" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Reporting Systems
      </text>
      <text x="400" y="305" textAnchor="middle" dominantBaseline="middle" className="text-sm" fill="currentColor">
        Audit trails
      </text>
      <text x="400" y="320" textAnchor="middle" dominantBaseline="middle" className="text-sm" fill="currentColor">
        Compliance monitoring
      </text>
      <text x="400" y="335" textAnchor="middle" dominantBaseline="middle" className="text-sm" fill="currentColor">
        Reporting dashboards
      </text>

      {/* Continuity Management Platforms */}
      <rect x="520" y="230" width="180" height="120" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="610" y="265" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Continuity
      </text>
      <text x="610" y="280" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Management Platforms
      </text>
      <text x="610" y="305" textAnchor="middle" dominantBaseline="middle" className="text-sm" fill="currentColor">
        Failover systems
      </text>
      <text x="610" y="320" textAnchor="middle" dominantBaseline="middle" className="text-sm" fill="currentColor">
        Backup coordination
      </text>
      <text x="610" y="335" textAnchor="middle" dominantBaseline="middle" className="text-sm" fill="currentColor">
        Recovery protocols
      </text>

      {/* Connection lines from EFOS to systems */}
      <line x1="250" y1="150" x2="190" y2="230" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="400" y1="150" x2="400" y2="230" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="550" y1="150" x2="610" y2="230" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
    </svg>
  );
};

export default FrameworksOperationalSystemsDiagram;