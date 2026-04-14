import { IMAGES, SIZES } from '@config/constants';
import { Layers, Database, Cloud } from 'lucide-react';

const ServiceCard = ({ id, title, description, icon: Icon, image, bgColor, top }: any) => (
  <div className={`sticky ${top} h-screen flex flex-col`}>
    <div className={`${bgColor} h-full w-full rounded-t-[48px] shadow-2xl px-8 md:px-24 py-20 flex flex-col justify-between border-t border-black/5`}>
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-3xl">
          <span className="text-sm uppercase tracking-widest text-zinc-500 mb-6 block font-semibold">Service {id}</span>
          <h2 className="text-6xl md:text-9xl font-extrabold tracking-monolith text-primary mb-8 leading-none">{title}</h2>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-xl">{description}</p>
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

export const ServiceStack = () => {
  const services = [
    { id: "01", title: "Frontend Design", description: "Crafting immersive interfaces where every pixel serves a structural purpose. High-precision typography meets fluid motion.", icon: Layers, image: IMAGES.FRONTEND, bgColor: "bg-white", top: "top-24" },
    { id: "02", title: "Backend Logic", description: "The foundation of every digital monument. We architect scalable, resilient systems that handle complexity with grace.", icon: Database, image: IMAGES.BACKEND, bgColor: "bg-zinc-100", top: "top-32" },
    { id: "03", title: "Cloud Systems", description: "Decentralized power at global scale. Automated deployment pipelines and immutable serverless environments.", icon: Cloud, image: IMAGES.CLOUD, bgColor: "bg-white", top: "top-40" }
  ];
  return <section className="mt-32">{services.map(s => <ServiceCard key={s.id} {...s} />)}</section>;
}
