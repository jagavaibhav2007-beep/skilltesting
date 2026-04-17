import { NAV_LINKS, TYPOGRAPHY } from '@config/constants';
import React from 'react';

/**
 * Premium Floating Navbar
 * Features a segmented Neo-Brutalist design with high-blur glass and micro-borders.
 */
export const Navbar = () => (
  <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-auto">
    <div className="dark-glass rounded-full px-8 py-4 flex items-center gap-10 border border-white/5 rim-light shadow-2xl">
      <div className="flex items-center gap-8">
        {NAV_LINKS.map((link, i) => (
          <a 
            key={link.label} 
            className={`text-[10px] uppercase font-bold tracking-[0.25em] transition-all duration-300 hover:text-white 
              ${i === 0 ? "text-white" : "text-zinc-500"}`} 
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="h-4 w-[1px] bg-white/10" />
      <button className="text-[10px] uppercase font-black tracking-[0.2em] bg-white text-black px-4 py-1 rounded-full hover:bg-zinc-200 transition-colors">
        Connect
      </button>
    </div>
  </nav>
);
