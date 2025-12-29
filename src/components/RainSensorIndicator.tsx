import React from 'react';
import { Cloud, CloudRain } from 'lucide-react';
interface RainSensorIndicatorProps {
  status: 'High' | 'Low';
  value: number;
}
export function RainSensorIndicator({
  status,
  value
}: RainSensorIndicatorProps) {
  const isRaining = status === 'High' || value > 0;
  return <div className="flex flex-col h-full justify-between">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl ${isRaining ? 'bg-blue-500/10 text-blue-400' : 'bg-gray-700/30 text-gray-400'}`}>
          {isRaining ? <CloudRain className="w-8 h-8 animate-pulse" /> : <Cloud className="w-8 h-8" />}
        </div>
        <div>
          <span className="text-3xl font-bold text-gray-100 block">
            {value}{' '}
            <span className="text-base font-normal text-gray-500">mm</span>
          </span>
          <span className={`text-sm font-medium ${isRaining ? 'text-blue-400' : 'text-gray-400'}`}>
            {isRaining ? 'Light Rain' : 'No Rain'}
          </span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700/50 flex justify-between items-center">
        <span className="text-xs text-gray-500">Last 1h</span>
        <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
          Active
        </span>
      </div>
    </div>;
}