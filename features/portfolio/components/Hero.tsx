import { Button } from '@/components/ui/Button';
import { ArrowDown } from 'lucide-react';

export const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden px-8">
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <span className="text-[25vw] font-extrabold text-black opacity-[0.05] tracking-monolith uppercase">Fullstack</span>
    </div>
    <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">
      <div className="glass-card p-8 md:p-12 rounded-xl mb-16 border border-white/10 w-full shadow-2xl text-left">
        <div className="flex gap-2 mb-6 opacity-40">
          {[100, 40, 10].map(op => <div key={op} className={`w-3 h-3 rounded-full bg-black/${op}`} />)}
        </div>
        <code className="block text-black font-mono text-lg md:text-xl leading-relaxed">
          <span className="opacity-40">const</span> reality = <span className="opacity-40">new</span> DigitalSystem({`{`}<br />
          &nbsp;&nbsp;architecture: <b>&apos;Monolithic&apos;</b>,<br />
          &nbsp;&nbsp;performance: <b>Infinity</b>,<br />
          &nbsp;&nbsp;aesthetic: <b>&apos;Brutalist&apos;</b><br />
          {`}`});
        </code>
      </div>
      <h1 className="text-5xl md:text-8xl font-extrabold tracking-monolith text-black mb-8 leading-tight">Engineering Digital Reality</h1>
      <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">Synthesizing complex engineering with architectural discipline. We build high-performance digital ecosystems for the next generation of the web.</p>
      <div className="mt-12"><ArrowDown className="w-10 h-10 animate-bounce text-black" /></div>
    </div>
  </section>
);
