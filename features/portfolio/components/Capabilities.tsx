export const Capabilities = () => (
  <section className="py-48 px-8 md:px-24 bg-white z-40 relative">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-24">
      <div className="md:w-1/3">
        <h3 className="text-4xl font-extrabold tracking-monolith text-black mb-6">Capabilities</h3>
        <p className="text-zinc-500 leading-relaxed">Our stack is curated for extreme performance and long-term sustainability. No trends, just tools that work.</p>
      </div>
      <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {[
          ["Core", "React / Next.js"],
          ["Infrastructure", "Docker / Kubernetes"],
          ["Data", "GraphQL / REST API"],
          ["Systems", "Node.js / Go"]
        ].map(([l, v]) => (
          <div key={l} className="group border-b border-black/5 pb-4 hover:border-black transition-colors duration-500">
            <span className="text-xs uppercase tracking-widest text-zinc-500 mb-2 block font-semibold">{l}</span>
            <div className="text-2xl font-bold">{v}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
