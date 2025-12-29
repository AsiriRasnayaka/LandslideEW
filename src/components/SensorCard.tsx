import React from 'react';
interface SensorCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
}
export function SensorCard({
  title,
  icon,
  children,
  className = '',
  subtitle
}: SensorCardProps) {
  return <article className={`bg-[#252936] rounded-2xl p-6 shadow-lg border border-gray-800 flex flex-col h-full ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#1a1d2e] text-blue-500">
            {icon}
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-100">{title}</h2>
            {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center w-full">
        {children}
      </div>
    </article>;
}