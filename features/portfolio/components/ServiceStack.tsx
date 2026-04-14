import { SERVICES, TYPOGRAPHY, STYLES, SIZES } from '@config/constants';
import { Layers, Database, Cloud, Sparkles } from 'lucide-react';

const ICON_MAP = {
  Layers,
  Database,
  Cloud
};

interface ServiceCardProps {
  id: string;
  title: { first: string; second: string };
  description: string;
  tags: string[];
  bgColor: string;
  textColor: string;
  top: string;
}

const ServiceCard = ({ id, title, description, tags, bgColor, textColor, top }: ServiceCardProps) => {
  return (
    <div className={`sticky ${top} h-[65vh] flex flex-col pt-4 pb-4`}>
      <div className={`${bgColor} ${textColor} h-full w-full rounded-[40px] shadow-xl px-12 py-12 flex flex-col justify-between border border-white/10 relative overflow-hidden`}>
        
        {/* Header Block */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold font-mono">Archive No. 0{id}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95]">
            <span className="block mb-1">{title.first}</span>
            <span className="text-zinc-500">{title.second}</span>
          </h2>
        </div>

        {/* Categories Block */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-4 py-1 bg-white/5 border border-white/5 rounded-md text-[10px] uppercase tracking-wider font-bold"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer/Description Block */}
        <div className="max-w-xl">
          <p className="text-lg md:text-xl font-medium leading-normal text-zinc-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const ServiceStack = () => {
  return (
    <section className="mt-32 pb-[30vh] px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto space-y-12">
        {SERVICES.map(s => (
          <ServiceCard 
            key={s.id} 
            {...s}
            tags={s.tags as unknown as string[]}
          />
        ))}
      </div>
    </section>
  );
}
