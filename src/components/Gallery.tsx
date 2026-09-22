import React from 'react';
import { gallery } from '../data/hotel';

export function Gallery() {
  return (
    <section id="gallery" className="w-full bg-cream py-28 lg:py-40">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-overline text-gold">Gallery</p>
            <h2 className="mt-7 font-display text-[2.6rem] font-medium leading-[1.06] tracking-[-0.015em] text-ink sm:text-[3.4rem]">
              Around the property
            </h2>
          </div>
          <p className="max-w-xs text-[14px] font-light leading-[1.85] text-ink-muted">
            Photographs taken at Golden Blu Hotel, Broadway.
          </p>
        </div>

        <div className="mt-16 columns-1 gap-7 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {gallery.map((photo) =>
          <figure
            key={photo.src}
            className="mb-7 break-inside-avoid overflow-hidden rounded-[20px] bg-cream-deep shadow-[0_18px_50px_-30px_rgba(14,28,43,0.5)]">
            
              <img
              src={photo.src}
              alt={photo.alt}
              className="h-auto w-full transition-transform duration-500 ease-refined hover:scale-[1.04]"
              loading="lazy" />
            
            </figure>
          )}
        </div>
      </div>
    </section>);

}