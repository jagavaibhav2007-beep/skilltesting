import React from 'react';
import { HERO_DATA, TYPOGRAPHY, WINDOW_CONTROL_OPACITIES } from '@config/constants';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';

export const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden px-8">
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <span className="text-[25vw] font-extrabold text-black opacity-[0.05] tracking-monolith uppercase">{HERO_DATA.BG_TEXT}</span>
    </div>
    <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">
      <div className="liquid-glass animate-float p-8 md:p-12 rounded-2xl mb-16 w-full text-left">
        <div className="flex gap-2 mb-6 opacity-40">
          {WINDOW_CONTROL_OPACITIES.map(op => <div key={op} className={`w-3 h-3 rounded-full bg-black/${op}`} />)}
        </div>
        <code className="block text-black font-mono text-lg md:text-xl leading-relaxed">
          <span className="opacity-40">const</span> {HERO_DATA.CODE.VAR} = <span className="opacity-40">new</span> {HERO_DATA.CODE.CLASS}({`{`}<br />
          {HERO_DATA.CODE.PROPS.map((prop, i) => (
            <React.Fragment key={prop.key}>
              &nbsp;&nbsp;{prop.key}: <b>{prop.value}</b>{i < HERO_DATA.CODE.PROPS.length - 1 ? ',' : ''}<br />
            </React.Fragment>
          ))}
          {`}`});
        </code>
      </div>
      <h1 className={`${TYPOGRAPHY.HERO_HEADING} typo-dual-tone mb-8`}>
        {HERO_DATA.HEADING_MAIN} <span>{HERO_DATA.HEADING_SPAN}</span> {HERO_DATA.HEADING_SUB}
      </h1>
      <p className={`text-zinc-500 max-w-2xl mx-auto ${TYPOGRAPHY.LEADING.BODY}`}>{HERO_DATA.DESCRIPTION}</p>
      <ScrollIndicator />
    </div>
  </section>
);
