import React from 'react';
import { Bell, Menu, Wifi } from 'lucide-react';
export function Header() {
  return <header className="h-[70px] bg-[#1a1d2e] border-b border-gray-800 flex items-center justify-between px-8 sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-400 hover:text-white lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-lg font-semibold text-white flex items-center gap-2">
            Dashboard
            <Wifi className="w-4 h-4 text-emerald-500" />
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-800">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#1a1d2e]"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border-2 border-gray-700" />
      </div>
    </header>;
}