import React from 'react';

interface ServiceCardProps {
  id: number;
  title: { readonly first: string; readonly second: string };
  description: string;
  tags: readonly string[];
  bgColor: string;
  textColor: string;
  top: string;
}

/**
 * Service Card: Experimental Obsidian Glass
 * High-depth, sticky card with rim lighting and architectural spacing.
 */
export const ServiceCard = ({ id, title, description, tags, bgColor, textColor, top }: ServiceCardProps) => {
  return (
    <div className={`sticky ${top} h-[70vh] flex flex-col pt-8 pb-8 group`}>
      <div className={`bg-[#121418] ${textColor} h-full w-full rounded-[60px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] px-12 py-16 flex flex-col justify-between border border-white/5 relative overflow-hidden rim-light transition-all duration-700 group-hover:scale-[1.02] group-hover:border-white/20`}>
        
        {/* Animated Background Aura */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-white/[0.05] transition-colors duration-1000" />

        {/* Header Block */}
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-4">
               <span className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-500 font-mono">Archive // 0{id}</span>
               <div className="h-[1px] w-12 bg-white/10" />
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500">
               <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </div>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black tracking-[-0.06em] leading-[0.8]">
            <span className="block mb-2 text-white">{title.first}</span>
            <span className="text-zinc-600 opacity-60 group-hover:text-zinc-400 transition-colors duration-700">{title.second}</span>
          </h2>
        </div>

        {/* Middle Metadata Block */}
        <div className="flex flex-wrap gap-3 relative z-10">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-5 py-2 bg-white/[0.03] border border-white/5 rounded-full text-[9px] uppercase tracking-[0.2em] font-black text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer/Description Block */}
        <div className="max-w-2xl relative z-10">
          <p className="text-xl md:text-2xl font-medium leading-[1.4] text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500">
            {description}
          </p>
        </div>

        {/* Subtle Decorative Grid on hover */}
        <div className="absolute inset-0 brutalist-grid-lines opacity-0 group-hover:opacity-[0.05] transition-opacity duration-1000 pointer-events-none" />
      </div>
    </div>
  );
};
