import HeroVSL from '@/components/sections/HeroVSL';
import ProgramDetails from '@/components/sections/ProgramDetails';
import AboutConrado from '@/components/sections/AboutConrado';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <main>
      {/* 1. Hero: Oscuro para captar atención visual inmediata */}
      <section className="section-dark">
        <HeroVSL />
      </section>

      {/* 2. Detalles del Programa: Blanco para lectura limpia */}
      <section className="section-light">
        <ProgramDetails />
      </section>

      {/* 3. Sobre Conrado: Oscuro para dar peso a la autoridad */}
      <section className="section-dark">
        <AboutConrado />
      </section>

      {/* 4. Testimonios: Blanco para prueba social clara */}
      <section className="section-light">
        <Testimonials />
      </section>

      {/* 5. FAQ: Oscuro */}
      <section className="section-dark">
        <FAQ />
      </section>

      {/* 6. CTA Final: Blanco (o puedes usar un gradiente con naranja) */}
      <section className="section-light">
        <CTA />
      </section>
    </main>
  );
}