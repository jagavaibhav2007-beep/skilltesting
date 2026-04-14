import { Button } from '@/components/ui/Button';
import { CTA_DATA, TYPOGRAPHY, STYLES } from '@config/constants';

export const CTA = () => (
  <section className="py-32 px-8 md:px-24 bg-zinc-100 text-center">
    <div className="max-w-5xl mx-auto">
      <h2 className={`${TYPOGRAPHY.SUB_HEADING} mb-12`}>{CTA_DATA.HEADING}</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <Button className="px-12 py-5 text-lg">{CTA_DATA.PRIMARY_BTN}</Button>
        <button className={`${STYLES.SECONDARY_TEXT} border-b-2 border-black pb-1 hover:opacity-70 transition-opacity font-bold ${TYPOGRAPHY.TRACKING.CTA} uppercase text-sm`}>
          {CTA_DATA.SECONDARY_BTN}
        </button>
      </div>
    </div>
  </section>
);
