interface OperationalContinuityFlowDiagramProps {
  className?: string;
}

const OperationalContinuityFlowDiagram = ({ className = '' }: OperationalContinuityFlowDiagramProps) => {
  return (
    <svg
      viewBox="0 0 1000 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Normal Operations */}
      <rect x="50" y="100" width="140" height="80" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="120" y="135" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Normal
      </text>
      <text x="120" y="150" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Operations
      </text>

      {/* Arrow 1 */}
      <line x1="190" y1="140" x2="230" y2="140" stroke="currentColor" strokeWidth="2" />
      <polygon points="230,140 220,135 220,145" fill="currentColor" />

      {/* Disruption Event */}
      <rect x="230" y="100" width="140" height="80" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="300" y="125" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Disruption Event
      </text>
      <text x="300" y="145" textAnchor="middle" dominantBaseline="middle" className="text-sm" fill="currentColor">
        Technical, geopolitical,
      </text>
      <text x="300" y="160" textAnchor="middle" dominantBaseline="middle" className="text-sm" fill="currentColor">
        or environmental
      </text>

      {/* Arrow 2 */}
      <line x1="370" y1="140" x2="410" y2="140" stroke="currentColor" strokeWidth="2" />
      <polygon points="410,140 400,135 400,145" fill="currentColor" />

      {/* Continuity Protocols Activated */}
      <rect x="410" y="100" width="140" height="80" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="480" y="130" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Continuity
      </text>
      <text x="480" y="145" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Protocols
      </text>
      <text x="480" y="160" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Activated
      </text>

      {/* Arrow 3 */}
      <line x1="550" y1="140" x2="590" y2="140" stroke="currentColor" strokeWidth="2" />
      <polygon points="590,140 580,135 580,145" fill="currentColor" />

      {/* Fallback and Failover */}
      <rect x="590" y="100" width="140" height="80" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="660" y="130" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Fallback and
      </text>
      <text x="660" y="145" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Failover
      </text>
      <text x="660" y="160" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Coordination
      </text>

      {/* Arrow 4 */}
      <line x1="730" y1="140" x2="770" y2="140" stroke="currentColor" strokeWidth="2" />
      <polygon points="770,140 760,135 760,145" fill="currentColor" />

      {/* Service Restoration */}
      <rect x="770" y="100" width="140" height="80" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="840" y="130" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Service
      </text>
      <text x="840" y="145" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Restoration and
      </text>
      <text x="840" y="160" textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium" fill="currentColor">
        Audit Review
      </text>

      {/* Supporting annotation */}
      <rect x="200" y="220" width="600" height="50" rx="3" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" />
      <text x="500" y="245" textAnchor="middle" dominantBaseline="middle" className="text-sm italic" fill="currentColor">
        EFOS supports continuity planning by aligning governance, architecture,
      </text>
      <text x="500" y="260" textAnchor="middle" dominantBaseline="middle" className="text-sm italic" fill="currentColor">
        and operational responsibilities before disruption occurs
      </text>
    </svg>
  );
};

export default OperationalContinuityFlowDiagram;