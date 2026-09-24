import React, { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { hotel, images } from '../data/hotel';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate flex min-h-[92vh] w-full items-end overflow-hidden bg-ink"
    >
      <motion.img
        src={images.facade}
        alt="Golden Blu Hotel, a modern three-storey building with blue glazing, on Broadway in Ndola"
        style={
          shouldReduceMotion
            ? undefined
            : {
                y: imageY,
                scale: imageScale,
              }
        }
        className="absolute inset-0 h-[118%] w-full object-cover object-center"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/25"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-ink/20" aria-hidden="true" />

      <motion.div
        style={
          shouldReduceMotion
            ? undefined
            : {
                y: contentY,
                opacity: contentOpacity,
              }
        }
        className="relative mx-auto w-full max-w-[1240px] px-6 pb-20 pt-32 lg:px-10 lg:pb-28"
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="text-[11px] font-semibold uppercase tracking-overline text-gold-light"
          >
            Broadway &middot; Ndola
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="mt-7 font-display text-[3.5rem] font-medium leading-[0.98] tracking-[-0.02em] text-cream sm:text-7xl lg:text-[6rem]"
          >
            {hotel.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="mt-7 max-w-xl text-base font-light leading-[1.8] text-cream/80 sm:text-lg"
          >
            {hotel.tagline}
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: [0.23, 1, 0.32, 1],
            }}
            href="#visitor-info"
            className="mt-11 inline-flex items-center rounded-full bg-gold px-10 py-4 text-[11px] font-semibold uppercase tracking-overline text-ink transition-all duration-300 ease-refined hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_12px_30px_-12px_rgba(210,170,90,0.8)]"
          >
            Explore
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 right-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-cream/50 sm:flex lg:right-10"
        aria-hidden="true"
      >
        <span>Scroll to explore</span>
        <span className="h-px w-10 bg-gold-light/60" />
      </motion.div>
    </section>
  );
}
