import { CTA_DATA, TYPOGRAPHY } from '@config/constants';
import React from 'react';

/**
 * CTA Section: Monumental Conclusion
 * Features oversized typography and a high-contrast interaction area.
 */
export const CTA = () => (
  <section id="contact" className="py-64 px-8 md:px-24 bg-obsidian text-white border-t border-white/5 relative overflow-hidden">
    
    {/* Background Decorative Type */}
    <div className="absolute bottom-0 right-0 pointer-events-none opacity-[0.03] translate-y-1/2 translate-x-1/4">
      <span className="text-[30vw] font-black tracking-tighter leading-none uppercase">CONTACT</span>
    </div>

    <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-start">
      <h2 className={`${TYPOGRAPHY.HERO_HEADING} text-7xl md:text-9xl lg:text-[12rem] mb-20 leading-[0.85]`}>
        {CTA_DATA.HEADING}
      </h2>
      
      <div className="flex flex-col md:flex-row items-center gap-12 w-full">
        <button className="w-full md:w-auto px-16 py-8 bg-white text-black font-black text-xl uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05] active:scale-95">
          {CTA_DATA.PRIMARY_BTN}
        </button>
        <button className="text-zinc-500 hover:text-white transition-all font-black text-sm uppercase tracking-[0.4em] border-b border-white/10 pb-2">
          {CTA_DATA.SECONDARY_BTN}
        </button>
      </div>
    </div>
  </section>
);
