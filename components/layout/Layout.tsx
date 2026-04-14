import { Button } from '@/components/ui/Button';
import { CONTACT } from '@config/constants';
import React from 'react';

export const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-black/5">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
      <div className="text-xl font-extrabold tracking-tighter text-black">DEV.HUB</div>
      <div className="hidden md:flex items-center gap-8 font-bold text-sm">
        {['Home', 'Work', 'Services', 'Expertise'].map((link, i) => (
          <a key={link} className={i === 0 ? "text-black border-b-2 border-black" : "text-zinc-500 hover:text-black transition-colors"} href="#">{link}</a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Button className="hidden md:block">Hire Me</Button>
        <button className="font-bold text-sm">Menu</button>
      </div>
    </div>
  </nav>
);

export const Footer = () => (
  <footer className="py-12 px-8 border-t border-black/5 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-zinc-800">
        © 2024 DEV.HUB — Architecting Digital Reality
      </p>
      <div className="flex gap-12 text-sm font-semibold uppercase tracking-wide text-zinc-500">
        <a className="hover:text-black transition-colors" href={CONTACT.GITHUB}>GitHub</a>
        <a className="hover:text-black transition-colors" href={CONTACT.TWITTER}>Twitter</a>
        <a className="hover:text-black transition-colors" href="#">LinkedIn</a>
      </div>
    </div>
  </footer>
);
