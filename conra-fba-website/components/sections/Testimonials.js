'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Amanda Milian",
      role: "Estudiante de Mentoría",
      text: "Llevaba 3 meses en una academia donde, sinceramente, no veía avances. Me sentía estancada... Gracias a la guía de Conrado, que explica TODO paso a paso y con claridad, pude destrabarme de algo que llevaba semanas frenándome.",
      highlight: "Facturó $7,892.08 en 3 semanas"
    },
    {
      name: "Camilo Valencia",
      role: "Estudiante de Mentoría",
      text: "Empecé mi mentoría en Abril, en Junio cerré mis dos primeras marcas, despaché mi primera pallet y el día de ayer empezaron mis ventas, es poco pero es el Primer escalón al éxito!",
      highlight: "2 marcas cerradas + primer pallet"
    },
    {
      name: "Martina Buonocore",
      role: "Estudiante de Mentoría",
      text: "Quiet growth, loud results. Nuevo producto para mi tienda lanzado el viernes. 11 ventas en 48h... Ahora imaginate en 30 días.",
      highlight: "11 ventas en sus primeras 48h"
    },
    {
      name: "Ricardo Padilla",
      role: "Estudiante de Mentoría",
      text: "Buen día family dejando por aquí resultados de 22 días vamos rumbo a los 10k ya casi tengo que comprar nuevas unidades.",
      highlight: "Rumbo a los $10k en 22 días"
    },
    {
      name: "Yasmin Rodriguez",
      role: "Estudiante de Mentoría",
      text: "Se los reconozco este hombre es un ser muy lindo yo quedé contenta haber hablado con él me explico todo y tiene paciencia que eso es muy importante, Gracias Conra eres el mejor.",
      highlight: "Acompañamiento directo"
    },
    {
      name: "Paulina Rave",
      role: "Estudiante de Mentoría",
      text: "Estoy en el principio de tu mentoría y ya me ahorré tiempo y dinero porque estuve 4 meses sin saber que hacer!!! Gracias Conra!!!!",
      highlight: "Ahorro de meses de estancamiento"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Mostrar 3 elementos en desktop
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section id="testimonios" className="py-28 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-white relative overflow-hidden">
      
      {/* Fondo sutil de iluminación ambiental (sin recargarlo) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF8D0F]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Encabezado Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-[#FF8D0F] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FF8D0F]" />
              Comunidad CONRA FBA
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Resultados reales de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                estudiantes activos.
              </span>
            </h2>
          </div>

          {/* Controles de Navegación Superior */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800/80 transition-all duration-200"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800/80 transition-all duration-200"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {visibleTestimonials.map((test, idx) => (
            <div
              key={idx}
              className="group bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/70 rounded-2xl p-8 flex flex-col justify-between hover:border-zinc-700/80 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40"
            >
              <div>
                {/* Metadatos superiores */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-3.5 h-3.5 text-[#FF8D0F] fill-[#FF8D0F]"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium tracking-wide text-zinc-400 bg-zinc-800/60 px-2.5 py-1 rounded-md border border-zinc-700/50">
                    Verificado
                  </span>
                </div>

                {/* Logro Destacado */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF8D0F]">
                    <CheckCircle2 className="w-4 h-4" />
                    {test.highlight}
                  </span>
                </div>

                {/* Texto */}
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8 font-normal">
                  &ldquo;{test.text}&rdquo;
                </p>
              </div>

              {/* Autor */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-zinc-800/60">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-sm text-zinc-200 border border-zinc-700/50">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-100 text-sm">{test.name}</h4>
                  <p className="text-xs text-zinc-400">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores de Paginación y CTA inferior */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-zinc-900">
          <div className="flex gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-6 bg-[#FF8D0F]' : 'w-1.5 bg-zinc-800 hover:bg-zinc-700'
                }`}
                aria-label={`Ir al testimonio ${idx + 1}`}
              />
            ))}
          </div>

          <Link
            href="/conra-fba/rese"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white transition-colors group"
          >
            Ver todos los casos de éxito en la comunidad
            <ArrowRight className="w-4 h-4 text-[#FF8D0F] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}