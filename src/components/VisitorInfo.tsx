import React from 'react';
import { PhoneIcon, MapPinIcon, ClockIcon, CarIcon } from 'lucide-react';
import { hotel, images } from '../data/hotel';

export function VisitorInfo() {
  return (
    <section id="visitor-info" className="w-full bg-cream py-28 lg:py-40">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-overline text-gold">Visitor information</p>
            <h2 className="mt-7 font-display text-[2.6rem] font-medium leading-[1.06] tracking-[-0.015em] text-ink sm:text-[3.4rem]">
              Reserve a room
            </h2>
            <p className="mt-7 max-w-md text-[15px] font-light leading-[1.85] text-ink-muted">
              Rooms are booked directly with the front desk. Call to confirm rates, availability and arrival times.
            </p>

            <dl className="mt-12 space-y-8">
              <div className="flex gap-5 border-t border-ink/10 pt-6">
                <PhoneIcon className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.12em] text-ink-muted">Reservations</dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${hotel.phone.replace(/\s/g, '')}`}
                      className="font-display text-3xl font-light text-ink transition-colors duration-200 ease-refined hover:text-gold">
                      
                      {hotel.phone}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-5 border-t border-ink/10 pt-6">
                <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.12em] text-ink-muted">Address</dt>
                  <dd className="mt-2 text-[15px] font-light leading-relaxed text-ink">
                    {hotel.street}, {hotel.country}
                    <br />
                    <span className="text-ink-muted">Plus code {hotel.plusCode}</span>
                  </dd>
                </div>
              </div>

              <div className="flex gap-5 border-t border-ink/10 pt-6">
                <ClockIcon className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.12em] text-ink-muted">Reception</dt>
                  <dd className="mt-2 text-[15px] font-light leading-relaxed text-ink">
                    Open 24 hours, every day
                  </dd>
                </div>
              </div>

              <div className="flex gap-5 border-t border-ink/10 pt-6">
                <CarIcon className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.12em] text-ink-muted">Arriving by car</dt>
                  <dd className="mt-2 text-[15px] font-light leading-relaxed text-ink">
                    Visitors&rsquo; car park on site, inside the gate
                  </dd>
                </div>
              </div>
            </dl>

            <a
              href={`tel:${hotel.phone.replace(/\s/g, '')}`}
              className="mt-14 inline-flex items-center rounded-full bg-ink px-10 py-4 text-[11px] font-semibold uppercase tracking-overline text-cream transition-colors duration-200 ease-refined hover:bg-gold hover:text-ink">
              
              Call the front desk
            </a>
          </div>

          <div className="lg:col-span-6">
            <figure>
              <img
                src={images.parking}
                alt="The signposted visitors' car park within the walled grounds of Golden Blu Hotel"
                className="h-auto w-full rounded-[20px] shadow-[0_18px_50px_-28px_rgba(14,28,43,0.5)]"
                loading="lazy" />
              
              <figcaption className="mt-5 text-[12px] font-light italic text-ink-muted">
                Guest parking, off Broadway.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>);

}