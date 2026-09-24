import React from 'react';
import { motion } from 'framer-motion';
import { LandmarkIcon, TreePalmIcon, RouteIcon } from 'lucide-react';
import { images } from '../data/hotel';

const highlights = [
  {
    icon: LandmarkIcon,
    title: 'Sightseeing',
    text: 'Kanini sits close to the landmarks visitors come to Ndola for.',
  },
  {
    icon: TreePalmIcon,
    title: 'Recreation',
    text: 'Parks, sport and places to eat are all within a short drive.',
  },
  {
    icon: RouteIcon,
    title: 'Getting around',
    text: 'Broadway keeps the city centre and main routes easy to reach.',
  },
];

export function Location() {
  return (
    <section id="location" className="w-full bg-ink py-28 text-cream lg:py-40">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-overline text-gold-light">
            Location
          </p>

          <h2 className="mt-7 font-display text-[2.6rem] font-medium leading-[1.06] tracking-[-0.015em] sm:text-[3.4rem]">
            Kanini, and everything within reach
          </h2>

          <p className="mt-7 max-w-md text-[15px] font-light leading-[1.85] text-cream/70">
            The neighbourhood scores 4.3 with visitors for sightseeing,
            recreation and ease of getting around &mdash; which makes Broadway
            a practical base whether you are here for two nights or two weeks.
          </p>

          <ul className="mt-14 space-y-9">
            {highlights.map(({ icon: Icon, title, text }, index) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="flex gap-5 border-t border-white/10 pt-7"
              >
                <Icon
                  className="mt-0.5 h-5 w-5 shrink-0 text-gold-light"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <div>
                  <h3 className="text-[15px] font-semibold">{title}</h3>
                  <p className="mt-1.5 text-[14px] font-light leading-relaxed text-cream/65">
                    {text}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.23, 1, 0.32, 1],
          }}
        >
          <img
            src={images.terrace}
            alt="Terrace and lawn outside the Golden Blu Hotel entrance on Broadway"
            className="h-auto w-full rounded-[20px] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.75)]"
            loading="lazy"
          />

          <figcaption className="mt-5 text-[12px] font-light italic text-cream/50">
            The entrance terrace on Broadway.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
