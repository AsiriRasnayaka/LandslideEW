import React from 'react';
import { AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';
export type WarningLevel = 'normal' | 'warning' | 'critical';
interface WarningBadgeProps {
  level: WarningLevel;
  message: string;
}
export function WarningBadge({
  level,
  message
}: WarningBadgeProps) {
  const styles = {
    normal: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    critical: 'bg-rose-500/10 text-rose-400 border-rose-500/20'
  };
  const icons = {
    normal: <CheckCircle className="w-4 h-4 mr-2" />,
    warning: <AlertTriangle className="w-4 h-4 mr-2" />,
    critical: <AlertCircle className="w-4 h-4 mr-2" />
  };
  return <div role="alert" className={`flex items-center px-3 py-1.5 rounded-lg border ${styles[level]} transition-colors duration-300 text-sm font-medium`}>
      {icons[level]}
      <span>{message}</span>
    </div>;
}