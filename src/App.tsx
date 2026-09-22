import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Amenities } from './components/Amenities';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { VisitorInfo } from './components/VisitorInfo';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="w-full bg-cream font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <Location />
        <VisitorInfo />
      </main>
      <Footer />
    </div>);

}