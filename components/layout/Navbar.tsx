import { NAV_ITEMS, TYPOGRAPHY, STYLES } from '@config/constants';
import React from 'react';

export const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-black/5">
    <div className="max-w-7xl mx-auto flex justify-center items-center px-8 py-6">
      <div className="flex items-center gap-12 font-bold text-sm">
        {NAV_ITEMS.map((link, i) => (
          <a 
            key={link} 
            className={`${i === 0 ? "text-black border-b-2 border-black" : STYLES.SECONDARY_TEXT + " hover:text-black transition-colors"} ${TYPOGRAPHY.TRACKING.CTA}`} 
            href="#"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  </nav>
);
