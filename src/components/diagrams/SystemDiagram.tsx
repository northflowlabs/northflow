import React from 'react';

interface SystemDiagramProps {
  className?: string;
}

const SystemDiagram = ({ className = '' }: SystemDiagramProps) => {
  return (
    <svg
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Governance Layer */}
      <rect x="50" y="50" width="700" height="80" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="400" y="95" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Governance & Audit Layer
      </text>

      {/* Core Infrastructure Boxes */}
      <rect x="80" y="180" width="180" height="140" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="170" y="250" textAnchor="middle" dominantBaseline="middle" className="text-xs font-medium" fill="currentColor">
        Sovereign Infrastructure
      </text>

      <rect x="310" y="180" width="180" height="140" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="400" y="250" textAnchor="middle" dominantBaseline="middle" className="text-xs font-medium" fill="currentColor">
        Compliance Framework
      </text>

      <rect x="540" y="180" width="180" height="140" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="630" y="250" textAnchor="middle" dominantBaseline="middle" className="text-xs font-medium" fill="currentColor">
        Continuity Systems
      </text>

      {/* Connection Lines */}
      <line x1="170" y1="130" x2="170" y2="180" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="400" y1="130" x2="400" y2="180" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="630" y1="130" x2="630" y2="180" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />

      {/* Horizontal connections */}
      <line x1="260" y1="250" x2="310" y2="250" stroke="currentColor" strokeWidth="1.5" />
      <line x1="490" y1="250" x2="540" y2="250" stroke="currentColor" strokeWidth="1.5" />

      {/* Operational Layer */}
      <rect x="50" y="350" width="700" height="30" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="400" y="365" textAnchor="middle" dominantBaseline="middle" className="text-xs font-medium" fill="currentColor">
        Operational Continuity Baseline
      </text>
    </svg>
  );
};

export default SystemDiagram;