import React from 'react';

/**
 * Custom Scroll Indicator
 * Replaces lucide-react dependency with a native SVG to minimize bundle size.
 */
export const ScrollIndicator = () => (
  <div className="mt-24 flex justify-center animate-pulse">
    <div className="flex flex-col items-center gap-4">
      <span className="text-[9px] font-mono tracking-[0.4em] text-zinc-600 uppercase">Scroll_to_View</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-500 animate-bounce">
        <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </div>
);
