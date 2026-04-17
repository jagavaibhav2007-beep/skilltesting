'use client';

import { SKILLS_DATA, TYPOGRAPHY } from '@config/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import React from 'react';

/**
 * Skills Section: Architectural Bento Grid
 * FIXED: Removed hard opacity-0 to ensure visibility even if scroll observer latency occurs.
 * Improved Ref assignment for React 19 compatibility.
 */
export const Skills = () => {
  const { isVisible, elementRef } = useScrollReveal(0.05);

  return (
    <section 
      ref={elementRef as any}
      id="expertise" 
      className="py-64 px-4 md:px-12 lg:px-24 bg-obsidian text-white relative overflow-hidden brutalist-grid-lines min-h-screen"
    >
      {/* Structural Crosshair Overlays */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.03] pointer-events-none" />
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white/[0.03] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-full h-[1px] bg-white/[0.03] pointer-events-none" />

      {/* Background Monumental Type */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.015] select-none rotate-90 xl:rotate-0">
        <span className="text-[40vw] font-black tracking-tighter leading-none shrink-0 whitespace-nowrap uppercase">STRUCTURE</span>
      </div>
      
      {/* Ambient Depth Nodes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-white/[0.05] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-white/[0.08] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-32 max-w-2xl">
           <h3 className="text-[10px] uppercase font-black tracking-[0.6em] text-zinc-600 mb-6 font-mono">Capabilities // Layer 02</h3>
           <h2 className={`${TYPOGRAPHY.HERO_HEADING} text-7xl md:text-8xl lg:text-9xl leading-[0.85] mb-8 animate-reveal`}>
             {SKILLS_DATA.TITLE}
           </h2>
           <p className="text-xl text-zinc-500 font-medium leading-relaxed">
             {SKILLS_DATA.DESCRIPTION}
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Anchor Card */}
          <div 
            className={`lg:col-span-12 xl:col-span-5 p-16 rounded-[40px] dark-glass card-3d-depth hover-glow border-white/5 rim-light group transition-all duration-1000 ease-out
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-40'}`}
          >
             <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-12 shadow-[0_0_40px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
             </div>
             <h4 className="text-4xl font-black tracking-tight mb-6 uppercase leading-none">Omnichannel<br/>Engineering</h4>
             <p className="text-zinc-500 text-lg font-medium leading-relaxed group-hover:text-zinc-300 transition-colors">
                Redefining the boundaries of digital interaction through high-fidelity system design.
             </p>
          </div>

          {/* Connected Grid Items */}
          <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10">
            {SKILLS_DATA.ITEMS.map((item, idx) => (
              <div 
                key={item.label} 
                className={`p-10 rounded-[40px] dark-glass card-3d-depth hover-glow border-white/5 rim-light group relative transition-all duration-1000 ease-out
                  ${isVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-24 scale-95 opacity-30'}`}
                style={{ transitionDelay: isVisible ? `${idx * 100}ms` : '0ms' }}
              >
                {/* ID Tag */}
                <div className="absolute top-8 right-8 text-[9px] font-mono tracking-[0.3em] font-black text-zinc-600 group-hover:text-white transition-colors">
                  0x0{idx + 1}
                </div>
                
                <div className="mt-12">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-4 block font-black font-mono group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                  <div className="text-4xl font-black tracking-[-0.03em] text-white leading-tight uppercase">
                    {item.value}
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute bottom-6 right-6 w-2 h-2 border-r border-b border-white/20 group-hover:border-white transition-colors" />
              </div>
            ))}
          </div>
        </div>
        
        {/* System Diagnostics Footer */}
        <div className={`mt-48 flex flex-col md:flex-row items-center justify-between py-12 border-t border-white/5 transition-all duration-1000 delay-500
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-40'}`}>
           <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                 <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-zinc-600">CORE_LINK: STABLE</span>
              </div>
              <div className="h-4 w-[1px] bg-white/5" />
              <div className="text-[9px] font-mono uppercase tracking-[0.4em] text-zinc-600">vLATENCY: 1.2ms</div>
           </div>
           <div className="text-[9px] font-mono tracking-[0.2em] uppercase text-zinc-700 mt-8 md:mt-0">
              [ 0010101001111000 — G_DSTRC ]
           </div>
        </div>
      </div>
    </section>
  );
};
