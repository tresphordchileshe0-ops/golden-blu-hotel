import React from 'react';
import {
  BedDoubleIcon,
  WifiIcon,
  UtensilsIcon,
  CarIcon,
  ShieldCheckIcon,
  ConciergeBellIcon,
  TvIcon,
  ShowerHeadIcon } from
'lucide-react';

const amenities = [
{ icon: BedDoubleIcon, title: 'Serviced rooms', text: 'Daily housekeeping across all twin and double rooms.' },
{ icon: WifiIcon, title: 'Wi-Fi throughout', text: 'Wireless internet in every room and in the lounge.' },
{ icon: UtensilsIcon, title: 'On-site dining', text: 'Hot meals prepared and served on the premises.' },
{ icon: CarIcon, title: "Visitors' parking", text: 'Signposted, gated parking inside the hotel grounds.' },
{ icon: ConciergeBellIcon, title: '24-hour reception', text: 'Front desk staffed for late arrivals and departures.' },
{ icon: ShieldCheckIcon, title: 'Secure premises', text: 'Walled grounds with a controlled entrance.' },
{ icon: TvIcon, title: 'Television', text: 'Flat-screen television fitted in each room.' },
{ icon: ShowerHeadIcon, title: 'En-suite bathrooms', text: 'Private bathroom with hot water in every room.' }];


export function Amenities() {
  return (
    <section id="amenities" className="w-full bg-cream-deep py-28 lg:py-40">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-overline text-gold">Amenities</p>
        <h2 className="mt-7 max-w-xl font-display text-[2.6rem] font-medium leading-[1.06] tracking-[-0.015em] text-ink sm:text-[3.4rem]">
          Everything a working trip needs
        </h2>

        <ul className="mt-20 grid grid-cols-1 gap-x-14 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map(({ icon: Icon, title, text }) =>
          <li key={title} className="border-t border-ink/15 pt-7">
              <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-6 text-[15px] font-semibold tracking-[-0.005em] text-ink">{title}</h3>
              <p className="mt-2.5 text-[14px] font-light leading-[1.8] text-ink-muted">{text}</p>
            </li>
          )}
        </ul>
      </div>
    </section>);

}