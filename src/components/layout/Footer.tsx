import { CONTACT, COPYRIGHT_TEXT } from '@config/constants';
import React from 'react';

export const Footer = () => (
  <footer className="py-12 px-8 border-t border-black/5 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-zinc-800">
        {COPYRIGHT_TEXT}
      </p>
      <div className="flex gap-12 text-sm font-semibold uppercase tracking-wide text-zinc-500">
        <a className="hover:text-black transition-colors" href={CONTACT.GITHUB}>GitHub</a>
        <a className="hover:text-black transition-colors" href={CONTACT.TWITTER}>Twitter</a>
        <a className="hover:text-black transition-colors" href={CONTACT.LINKEDIN}>LinkedIn</a>
      </div>
    </div>
  </footer>
);
