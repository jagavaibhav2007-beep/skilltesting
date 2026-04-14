import { Button } from '@/components/ui/Button';

export const CTA = () => (
  <section className="py-32 px-8 md:px-24 bg-zinc-100 text-center">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-5xl md:text-7xl font-extrabold tracking-monolith mb-12">Ready to architect your reality?</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <Button className="px-12 py-5 text-lg">Start a Project</Button>
        <button className="text-black text-lg font-bold border-b-2 border-black pb-1 hover:opacity-70 transition-opacity">View Case Studies</button>
      </div>
    </div>
  </section>
);
