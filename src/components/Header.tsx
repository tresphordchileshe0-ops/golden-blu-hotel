import React, { useEffect, useState } from 'react';
import { hotel } from '../data/hotel';

const links = [
{ label: 'About', href: '#about' },
{ label: 'Rooms', href: '#rooms' },
{ label: 'Amenities', href: '#amenities' },
{ label: 'Gallery', href: '#gallery' },
{ label: 'Location', href: '#location' }];


export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-refined ${
      scrolled ? 'bg-ink/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'}`
      }>
      
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-baseline gap-2 whitespace-nowrap">
          <span className="font-display text-xl text-cream sm:text-2xl">Golden</span>
          <span className="font-display text-xl italic text-gold-light sm:text-2xl">Blu</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {links.map((link) =>
            <li key={link.href}>
                <a
                href={link.href}
                className="text-[13px] font-medium tracking-wide text-cream/75 transition-colors duration-200 ease-refined hover:text-gold-light">
                
                  {link.label}
                </a>
              </li>
            )}
          </ul>
        </nav>

        <a
          href="#visitor-info"
          className="whitespace-nowrap rounded-full border border-gold-light/70 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-overline text-gold-light transition-colors duration-200 ease-refined hover:bg-gold-light hover:text-ink">
          
          Check Availability
        </a>
      </div>
      <span className="sr-only">{hotel.name}</span>
    </header>);

}