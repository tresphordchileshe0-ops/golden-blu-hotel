import React from 'react';
import { FacebookIcon, InstagramIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { hotel } from '../data/hotel';

const social = [
{ label: 'Facebook', icon: FacebookIcon },
{ label: 'Instagram', icon: InstagramIcon }];


export function Footer() {
  return (
    <footer className="w-full bg-ink text-cream">
      <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl">Golden</span>
              <span className="font-display text-2xl italic text-gold-light">Blu</span>
            </div>
            <p className="mt-4 max-w-[16rem] text-[14px] font-light leading-relaxed text-cream/60">
              {hotel.tagline}
            </p>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-overline text-gold-light">Contact</h2>
            <ul className="mt-6 space-y-4 text-[14px] font-light text-cream/70">
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" strokeWidth={1.5} aria-hidden="true" />
                <a
                  href={`tel:${hotel.phone.replace(/\s/g, '')}`}
                  className="transition-colors duration-200 ease-refined hover:text-gold-light">
                  
                  {hotel.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" strokeWidth={1.5} aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  {hotel.street}, {hotel.country}
                  <br />
                  {hotel.neighborhood} &middot; {hotel.plusCode}
                </address>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-overline text-gold-light">Explore</h2>
            <ul className="mt-6 space-y-3 text-[14px] font-light text-cream/70">
              {[
              { label: 'About', href: '#about' },
              { label: 'Rooms', href: '#rooms' },
              { label: 'Amenities', href: '#amenities' },
              { label: 'Gallery', href: '#gallery' },
              { label: 'Visitor information', href: '#visitor-info' }].
              map((link) =>
              <li key={link.href}>
                  <a
                  href={link.href}
                  className="transition-colors duration-200 ease-refined hover:text-gold-light">
                  
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-overline text-gold-light">Follow</h2>
            <ul className="mt-6 flex gap-3">
              {social.map(({ label, icon: Icon }) =>
              <li key={label}>
                  <a
                  href="#top"
                  aria-label={`${label} — page coming soon`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-colors duration-200 ease-refined hover:border-gold-light hover:text-gold-light">
                  
                    <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </a>
                </li>
              )}
            </ul>
            <p className="mt-4 text-[12px] font-light text-cream/40">Social profiles coming soon.</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-[12px] font-light text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {hotel.name}. All rights reserved.</p>
          <p>
            Rated {hotel.rating} from {hotel.reviewCount} guest reviews.
          </p>
        </div>
      </div>
    </footer>);

}