import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from 'lucide-react';
import { hotel, images } from '../data/hotel';

export function About() {
  return (
    <section id="about" className="w-full bg-cream py-28 lg:py-40">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="lg:col-span-7"
        >
          <p className="text-[11px] font-semibold uppercase tracking-overline text-gold">
            About the hotel
          </p>

          <h2 className="mt-7 max-w-xl font-display text-[2.6rem] font-medium leading-[1.06] tracking-[-0.015em] text-ink sm:text-[3.4rem]">
            A dependable address in Ndola&rsquo;s Kanini quarter
          </h2>

          <div className="mt-9 max-w-xl space-y-5 text-[15px] font-light leading-[1.85] text-ink-muted">
            <p>
              Golden Blu Hotel sits on Broadway, a short walk from the everyday
              rhythm of Kanini. Guests arrive for work, for family visits, and
              for time in the Copperbelt &mdash; and stay for rooms that are
              quiet, clean and unfussy, with staff who know the city.
            </p>

            <p>
              The building is new, the interiors are bright, and the details
              that matter on a working trip &mdash; secure parking, reliable
              internet, a proper meal at the end of the day &mdash; are all on
              site.
            </p>
          </div>

          <motion.dl
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="mt-12 grid max-w-xl grid-cols-2 gap-x-8 gap-y-10 border-t border-ink/10 pt-10 sm:grid-cols-3"
          >
            <div>
              <dt className="sr-only">Guest rating</dt>
              <dd className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-light text-ink">
                  {hotel.rating}
                </span>

                <StarIcon
                  className="h-4 w-4 shrink-0 fill-gold text-gold"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </dd>

              <p className="mt-2 text-[12px] uppercase tracking-[0.12em] text-ink-muted">
                From {hotel.reviewCount} reviews
              </p>
            </div>

            <div>
              <dt className="sr-only">Neighbourhood score</dt>
              <dd className="font-display text-4xl font-light text-ink">
                4.3
              </dd>

              <p className="mt-2 text-[12px] uppercase tracking-[0.12em] text-ink-muted">
                Kanini area rating
              </p>
            </div>

            <div>
              <dt className="sr-only">Reception hours</dt>
              <dd className="font-display text-4xl font-light text-ink">
                24/7
              </dd>

              <p className="mt-2 text-[12px] uppercase tracking-[0.12em] text-ink-muted">
                Front desk
              </p>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="lg:col-span-5"
        >
          <figure className="lg:sticky lg:top-28">
            <img
              src={images.lobby}
              alt="The Golden Blu Hotel lobby, with a blue resin floor and seating beside full-height windows"
              className="h-auto w-full rounded-[20px] shadow-[0_18px_50px_-24px_rgba(14,28,43,0.45)]"
              loading="lazy"
            />

            <figcaption className="mt-5 text-[12px] font-light italic text-ink-muted">
              The ground-floor lobby and lounge.
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
