import React from 'react';
import HeroVSL from '@/components/sections/HeroVSL';
import ProgramDetails from '@/components/sections/ProgramDetails';
import AboutConrado from '@/components/sections/AboutConrado';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import QuienSoyPage from './conra-fba/quien-soy/page';

export default function Page() {
  return (
    <>
      <HeroVSL />
      <ProgramDetails />
      <AboutConrado />
      <Testimonials />
      <FAQ />
      <CTA />
      
    </>
  );
}