import React from 'react';
import { motion } from 'framer-motion';
import { rooms } from '../data/hotel';

export function Rooms() {
  return (
    <section id="rooms" className="w-full bg-ink py-28 text-cream lg:py-40">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-overline text-gold-light">
              The rooms
            </p>

            <h2 className="mt-7 max-w-lg font-display text-[2.6rem] font-medium leading-[1.06] tracking-[-0.015em] sm:text-[3.4rem]">
              Bright, quiet and kept simple
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="max-w-sm text-[15px] font-light leading-[1.85] text-cream/70"
          >
            Every room is serviced daily and includes en-suite facilities.
            Rates and availability are confirmed directly with the front desk.
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-14 gap-y-20 md:grid-cols-2">
          {rooms.map((room, index) => (
            <motion.article
              key={room.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="group flex flex-col"
            >
              <div className="overflow-hidden rounded-[20px] bg-ink-soft shadow-[0_24px_60px_-30px_rgba(0,0,0,0.75)]">
                <img
                  src={room.image}
                  alt={room.alt}
                  className="h-auto w-full transition-transform duration-500 ease-refined group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <h3 className="mt-8 font-display text-[2rem] font-medium leading-tight tracking-[-0.01em]">
                {room.name}
              </h3>

              <p className="mt-4 text-[15px] font-light leading-[1.85] text-cream/70">
                {room.description}
              </p>

              <ul className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-7">
                {room.details.map((detail) => (
                  <li
                    key={detail}
                    className="text-[12px] uppercase tracking-[0.12em] text-gold-light"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
