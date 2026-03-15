import React from 'react';
import { TerminalIcon } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-gray-200 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
        {/* <a href="#" className="flex items-center gap-2 group"> */}
          {/* <TerminalIcon className="w-5 h-5 text-primary group-hover:text-primaryHover transition-colors" /> */}
          {/* <span className="font-mono font-bold text-base tracking-tight text-gray-900"> */}
            {/* J.Anderson<span className="text-primary">()</span> */}
          {/* </span> */}
        {/* </a> */}
        <p className="font-mono text-sm text-gray-400">
          Designed & Built by Ankita Singh &copy; {currentYear}
        </p>
      </div>
    </footer>);

}