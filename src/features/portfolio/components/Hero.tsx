import React from 'react';
import { HERO_DATA, TYPOGRAPHY, WINDOW_CONTROL_OPACITIES } from '@config/constants';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';

/**
 * Hero Section: Overlapping Architectural Collage
 * Implements monumental type overlapping with glass-code blocks and kinetic reveals.
 */
export const Hero = () => (
  <section id="home" className="relative min-h-[110vh] flex flex-col items-center justify-center pt-24 overflow-hidden px-8 brutalist-grid-lines">
    
    {/* Massive Cropped Background Type */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <h1 className="text-[35vw] font-black text-white/[0.02] tracking-monolith uppercase leading-none select-none">
        {HERO_DATA.BG_TEXT.split('').map((char, i) => (
          <span key={i} className="inline-block animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
            {char}
          </span>
        ))}
      </h1>
    </div>

    {/* Hero Content Collage */}
    <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <div className="lg:col-span-12 xl:col-span-7 flex flex-col items-start text-left">
        <h1 className={`${TYPOGRAPHY.HERO_HEADING} text-7xl md:text-9xl lg:text-[10rem] mb-6 animate-reveal flex flex-col`}>
          <span className="text-white">{HERO_DATA.HEADING_MAIN}</span>
          <span className="text-zinc-600 -mt-8 md:-mt-12 opacity-50">{HERO_DATA.HEADING_SPAN}</span>
          <span className="text-white -mt-8 md:-mt-12">{HERO_DATA.HEADING_SUB}</span>
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl max-w-xl font-medium leading-relaxed mb-10 opacity-0 animate-reveal" style={{ animationDelay: '0.4s' }}>
          {HERO_DATA.DESCRIPTION}
        </p>
      </div>

      <div className="hidden xl:block xl:col-span-5 relative mt-24">
        <div className="dark-glass animate-float p-10 rounded-[40px] border-white/10 rim-light shadow-2xl relative z-10">
          <div className="flex gap-2 mb-8 opacity-40">
            {WINDOW_CONTROL_OPACITIES.map(op => <div key={op} className={`w-3 h-3 rounded-full bg-white opacity-${op}`} />)}
          </div>
          <code className="block text-zinc-300 font-mono text-sm leading-relaxed">
            <span className="text-blue-400">const</span> {HERO_DATA.CODE.VAR} = <span className="text-purple-400">new</span> {HERO_DATA.CODE.CLASS}({`{`}<br />
            {HERO_DATA.CODE.PROPS.map((prop, i) => (
              <React.Fragment key={prop.key}>
                &nbsp;&nbsp;{prop.key}: <b className="text-white">{prop.value}</b>{i < HERO_DATA.CODE.PROPS.length - 1 ? ',' : ''}<br />
              </React.Fragment>
            ))}
            {`}`});
          </code>
        </div>
        {/* Abstract Architectural Line */}
        <div className="absolute -top-12 -right-12 w-64 h-64 border-r border-t border-white/10 rounded-tr-[100px] pointer-events-none" />
      </div>

    </div>

    {/* Footer Status Indicators */}
    <div className="absolute bottom-12 left-8 right-8 flex justify-between items-center text-[9px] font-mono uppercase tracking-[0.4em] text-zinc-600">
      <div className="flex items-center gap-4">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        NODE_STATUS: OPTIMIZED
      </div>
      <div>EST_REALITY: 100% // G-01</div>
    </div>

    <ScrollIndicator />
  </section>
);
