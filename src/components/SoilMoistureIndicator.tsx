import React from 'react';
interface SoilMoistureIndicatorProps {
  percentage: number; // 0-100
}
export function SoilMoistureIndicator({
  percentage
}: SoilMoistureIndicatorProps) {
  // Determine color based on percentage
  let colorClass = 'text-blue-500';
  let barColor = 'bg-blue-500';
  if (percentage < 30) {
    colorClass = 'text-rose-500';
    barColor = 'bg-rose-500';
  } else if (percentage > 80) {
    colorClass = 'text-blue-400';
    barColor = 'bg-blue-400';
  }
  return <div className="w-full flex flex-col justify-between h-full" aria-label={`Soil moisture is ${percentage}%`}>
      <div className="flex items-end justify-between mb-2">
        <span className={`text-4xl font-bold tracking-tight ${colorClass}`}>
          {percentage}%
        </span>
        <div className="text-right">
          <p className="text-xs text-gray-400 uppercase tracking-wider">
            Status
          </p>
          <p className="text-sm font-medium text-gray-300">
            {percentage < 30 ? 'Dry' : percentage > 80 ? 'Saturated' : 'Optimal'}
          </p>
        </div>
      </div>

      <div className="relative w-full h-3 bg-gray-700 rounded-full overflow-hidden">
        <div className={`absolute top-0 left-0 h-full ${barColor} transition-all duration-500 ease-out rounded-full`} style={{
        width: `${percentage}%`
      }} />
      </div>

      <div className="flex justify-between mt-2 text-xs text-gray-500 font-mono">
        <span>Dry (0%)</span>
        <span className="text-amber-500">Threshold (60%)</span>
        <span>Sat (100%)</span>
      </div>
    </div>;
}