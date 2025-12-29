import React from 'react';
import { LayoutGrid, Radio, History, Settings } from 'lucide-react';
interface SidebarProps {
  className?: string;
}
export function Sidebar({
  className = ''
}: SidebarProps) {
  const navItems = [{
    name: 'Dashboard',
    icon: <LayoutGrid className="w-5 h-5" />,
    active: true
  }, {
    name: 'Sensors',
    icon: <Radio className="w-5 h-5" />,
    active: false
  }, {
    name: 'History',
    icon: <History className="w-5 h-5" />,
    active: false
  }, {
    name: 'Settings',
    icon: <Settings className="w-5 h-5" />,
    active: false
  }];
  return <aside className={`w-64 bg-[#1a1d2e] border-r border-gray-800 flex flex-col h-full ${className}`}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-lg font-bold text-white tracking-tight">
            LandslideEW
          </span>
        </div>

        <nav className="space-y-1">
          {navItems.map(item => <button key={item.name} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${item.active ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`}>
              {item.icon}
              {item.name}
            </button>)}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-gray-800">
        <div className="bg-gray-800/50 rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-2">System Status</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-emerald-400">
              All Systems Normal
            </span>
          </div>
        </div>
      </div>
    </aside>;
}