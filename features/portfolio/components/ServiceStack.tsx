import { SERVICES, TYPOGRAPHY, STYLES, SIZES } from '@config/constants';
import { Layers, Database, Cloud } from 'lucide-react';

const ICON_MAP = {
  Layers,
  Database,
  Cloud
};

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof ICON_MAP;
  image: string;
  bgColor: string;
  top: string;
}

const ServiceCard = ({ id, title, description, icon, image, bgColor, top }: ServiceCardProps) => {
  const Icon = ICON_MAP[icon];
  return (
    <div className={`sticky ${top} h-screen flex flex-col`}>
      <div className={`${bgColor} h-full w-full rounded-t-[48px] shadow-2xl px-8 md:px-24 py-20 flex flex-col justify-between border-t border-black/5`}>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-3xl">
            <span className={STYLES.LABEL}>Service {id}</span>
            <h2 className={`${TYPOGRAPHY.SERVICE_TITLE} text-primary mb-8`}>{title}</h2>
            <p className={`${STYLES.SECONDARY_TEXT} max-w-xl ${TYPOGRAPHY.LEADING.BODY}`}>{description}</p>
          </div>
          <Icon size={SIZES.ICON_LARGE} className="text-black/10" />
        </div>
        <div className="flex justify-between items-end">
          <div className="text-sm uppercase tracking-tighter border-b-2 border-primary pb-2 font-bold cursor-pointer hover:opacity-70">Explore Architecture</div>
          <img src={image} alt={title} className="w-32 h-32 object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export const ServiceStack = () => {
  return <section className="mt-32">{SERVICES.map(s => <ServiceCard key={s.id} {...s} />)}</section>;
}
