import { CONTACT, COPYRIGHT_TEXT } from '@config/constants';
import React from 'react';

/**
 * Footer: Minimalist Architectural Closing
 * High-contrast, dark mode closing section with diagnostic-style meta-info.
 */
export const Footer = () => (
  <footer className="py-24 px-8 md:px-24 bg-obsidian text-zinc-500 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="flex flex-col items-center md:items-start gap-4">
         <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
           {COPYRIGHT_TEXT}
         </p>
         <span className="text-[9px] font-mono tracking-[0.2em] opacity-40">SYSTEM://RE-HUB (BUILD: 2024.4.17)</span>
      </div>
      
      <div className="flex flex-wrap justify-center gap-10 text-[10px] font-black uppercase tracking-[0.4em]">
        <a className="hover:text-white transition-all hover:-translate-y-1" href={CONTACT.GITHUB}>GitHub // 01</a>
        <a className="hover:text-white transition-all hover:-translate-y-1" href={CONTACT.TWITTER}>Twitter // 02</a>
        <a className="hover:text-white transition-all hover:-translate-y-1" href={CONTACT.LINKEDIN}>LinkedIn // 03</a>
      </div>
    </div>
  </footer>
);
