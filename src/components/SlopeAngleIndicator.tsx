import React from 'react';
interface SlopeAngleIndicatorProps {
  angle: number; // 0-45 degrees
}
export function SlopeAngleIndicator({
  angle
}: SlopeAngleIndicatorProps) {
  // Color logic
  let colorClass = 'text-emerald-400';
  let statusText = 'Stable';
  let statusBg = 'bg-emerald-500/10';
  if (angle > 30) {
    colorClass = 'text-rose-400';
    statusText = 'Danger';
    statusBg = 'bg-rose-500/10';
  } else if (angle > 15) {
    colorClass = 'text-amber-400';
    statusText = 'Warning';
    statusBg = 'bg-amber-500/10';
  }
  return <div className="flex flex-col h-full justify-between">
      <div className="flex items-center justify-between">
        <div>
          <span className={`text-3xl font-bold block ${colorClass}`}>
            {angle}°
          </span>
          <span className="text-sm text-gray-400">Current Angle</span>
        </div>
        <div className={`px-2 py-1 rounded text-xs font-medium ${statusBg} ${colorClass}`}>
          {statusText}
        </div>
      </div>

      <div className="mt-4 relative h-16 w-full overflow-hidden bg-gray-800/50 rounded-lg border border-gray-700/50">
        {/* Visual representation of slope */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-600 origin-left transition-transform duration-500" style={{
        transform: `rotate(-${angle}deg)`
      }} />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-700/20 to-transparent origin-left transition-transform duration-500" style={{
        transform: `rotate(-${angle}deg) translateY(100%)`
      }} />

        {/* Reference line for max safe angle */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-rose-500/30 origin-left dashed border-t border-dashed border-rose-500/50" style={{
        transform: 'rotate(-30deg)'
      }} />
      </div>
    </div>;
}