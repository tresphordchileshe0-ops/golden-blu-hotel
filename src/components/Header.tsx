import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { hotel } from '../data/hotel';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        backgroundColor: scrolled
          ? 'rgba(14, 28, 43, 0.95)'
          : 'rgba(14, 28, 43, 0)',
        boxShadow: scrolled
          ? '0 12px 32px rgba(0, 0, 0, 0.16)'
          : '0 0 0 rgba(0, 0, 0, 0)',
      }}
      transition={{
        y: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
        opacity: { duration: 0.6 },
        backgroundColor: { duration: 0.35 },
        boxShadow: { duration: 0.35 },
      }}
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-[border-color] duration-300 ${
        scrolled ? 'border-white/10' : 'border-transparent'
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 transition-[padding] duration-300 lg:px-10 ${
          scrolled ? 'py-3' : 'py-4'
        }`}
      >
        <motion.a
          href="#top"
          whileHover={{ y: -1 }}
          transition={{ duration: 0.2 }}
          className="flex items-baseline gap-2 whitespace-nowrap"
          aria-label="The Golden Blu Hotel home"
        >
          <span className="font-display text-xl text-cream/75 sm:text-2xl">
            The
          </span>

          <span className="font-display text-xl text-cream sm:text-2xl">
            Golden
          </span>

          <span className="font-display text-xl italic text-gold-light sm:text-2xl">
            Blu
          </span>
        </motion.a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-[13px] font-medium tracking-wide text-cream/75 transition-colors duration-200 ease-refined hover:text-gold-light"
                >
                  {link.label}

                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-gold-light transition-[width] duration-300 ease-refined group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          href="#visitor-info"
          className="whitespace-nowrap rounded-full border border-gold-light/70 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-overline text-gold-light transition-[background-color,color,box-shadow] duration-300 ease-refined hover:bg-gold-light hover:text-ink hover:shadow-[0_8px_24px_-12px_rgba(210,170,90,0.85)]"
        >
          Check Availability
        </motion.a>
      </div>

      <span className="sr-only">{hotel.name}</span>
    </motion.header>
  );
}
