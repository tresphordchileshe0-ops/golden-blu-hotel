import React from 'react';
import { motion } from 'framer-motion';
import { hotel, images } from '../data/hotel';

const whatsappLink =
  'https://wa.me/260978534205?text=Hello%20Golden%20Blu%20Hotel%2C%20I%20would%20like%20to%20ask%20about%20availability.';

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92vh] w-full items-end overflow-hidden bg-ink"
    >
      <img
        src={images.facade}
        alt="Golden Blu Hotel, a modern three-storey building with blue glazing, on Broadway in Ndola"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-ink/65" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 pb-20 pt-32 lg:px-10 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-overline text-gold-light">
            Broadway &middot; Ndola
          </p>

          <h1 className="mt-7 font-display text-[3.5rem] font-medium leading-[0.98] tracking-[-0.02em] text-cream sm:text-7xl lg:text-[6rem]">
            {hotel.name}
          </h1>

          <p className="mt-7 max-w-xl text-base font-light leading-[1.8] text-cream/80 sm:text-lg">
            {hotel.tagline}
          </p>

          <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gold px-10 py-4 text-[11px] font-semibold uppercase tracking-overline text-ink transition-colors duration-200 ease-refined hover:bg-gold-light"
            >
              WhatsApp us
            </a>

            <a
              href="#visitor-info"
              className="inline-flex items-center justify-center rounded-full border border-cream/40 px-10 py-4 text-[11px] font-semibold uppercase tracking-overline text-cream transition-colors duration-200 ease-refined hover:border-gold-light hover:text-gold-light"
            >
              Visitor information
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
