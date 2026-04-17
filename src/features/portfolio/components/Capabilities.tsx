import { CAPABILITIES_DATA, STYLES, TYPOGRAPHY } from '@config/constants';

export const Capabilities = () => (
  <section className="py-48 px-8 md:px-24 bg-white z-40 relative">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-24">
      <div className="md:w-1/3">
        <h3 className={`${TYPOGRAPHY.SUB_HEADING_SMALL} mb-6`}>{CAPABILITIES_DATA.TITLE}</h3>
        <p className={`${STYLES.SECONDARY_TEXT} leading-relaxed`}>{CAPABILITIES_DATA.DESCRIPTION}</p>
      </div>
      <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {CAPABILITIES_DATA.ITEMS.map((item) => (
          <div key={item.label} className="group border-b border-black/5 pb-4 hover:border-black transition-colors duration-500">
            <span className={STYLES.LABEL}>{item.label}</span>
            <div className="text-2xl font-bold">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
