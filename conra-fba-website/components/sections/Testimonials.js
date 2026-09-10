'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Amanda Milian",
      role: "Estudiante de Mentoría",
      text: "Llevaba 3 meses en una academia donde, sinceramente, no veía avances. Me sentía estancada... Gracias a la guía de Conrado, que explica TODO paso a paso y con claridad, pude destrabarme de algo que llevaba semanas frenándome.",
      highlight: "Facturó $7,892.08 en sus primeras 3 semanas"
    },
    {
      name: "Camilo Valencia",
      role: "Estudiante de Mentoría",
      text: "Empecé mi mentoría en Abril, en Junio cerré mis dos primeras marcas, despaché mi primera pallet y el día de ayer empezaron mis ventas, es poco pero es el Primer escalón al éxito!",
      highlight: "Cerró 2 marcas y despachó su primer pallet"
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
      highlight: "Rumbo al objetivo en 22 días"
    },
    {
      name: "Yasmin Rodriguez",
      role: "Estudiante de Mentoría",
      text: "Se los reconozco este hombre es un ser muy lindo yo quedé contenta haber hablado con él me explico todo y tiene paciencia que eso es muy importante, Gracias Conra eres el mejor.",
      highlight: "Acompañamiento y claridad directa"
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

  // Obtener 3 testimonios visibles en formato carrusel circular
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section id="testimonios" className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#FF8D0F] font-semibold tracking-wider uppercase text-xs px-3.5 py-1.5 bg-[#FF8D0F]/10 rounded-full border border-[#FF8D0F]/20">
            Comunidad CONRA FBA
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Casos de <span className="text-[#FF8D0F]">Éxito Reales</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Mensajes directos y resultados reales compartidos por nuestros estudiantes en la comunidad privada.
          </p>
        </div>

        {/* Grid de 3 Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visibleTestimonials.map((test, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-[#FF8D0F]/40 transition-all duration-300"
            >
              <div className="absolute top-4 right-6 text-[#FF8D0F]/10 pointer-events-none">
                <Quote className="w-16 h-16" />
              </div>

              <div>
                {/* Estrellas y Logro Destacado */}
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 text-[#FF8D0F] fill-[#FF8D0F]"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF8D0F] bg-[#FF8D0F]/10 px-3 py-1 rounded-full border border-[#FF8D0F]/20 w-fit">
                    {test.highlight}
                  </span>
                </div>

                {/* Texto del Testimonio */}
                <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed font-medium">
                  &ldquo;{test.text}&rdquo;
                </p>
              </div>

              {/* Autor */}
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FF8D0F] to-amber-600 rounded-full flex items-center justify-center font-black text-base text-black shadow-lg">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{test.name}</h4>
                  <p className="text-xs text-[#FF8D0F] font-semibold">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controles de Navegación del Slider */}
        <div className="flex items-center justify-between max-w-md mx-auto mb-12">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-zinc-900 hover:bg-[#FF8D0F] hover:text-black text-white border border-zinc-800 transition-colors shadow-md"
            aria-label="Testimonios anteriores"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-[#FF8D0F]' : 'w-2 bg-zinc-800 hover:bg-zinc-700'
                }`}
                aria-label={`Ir al testimonio ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-zinc-900 hover:bg-[#FF8D0F] hover:text-black text-white border border-zinc-800 transition-colors shadow-md"
            aria-label="Siguientes testimonios"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Botón Ver Más */}
        <div className="text-center">
          <Link
            href="/conra-fba/rese"
            className="inline-flex items-center gap-2 bg-[#FF8D0F] hover:bg-[#e07b0d] text-black font-extrabold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-[#FF8D0F]/20 transform hover:-translate-y-0.5"
          >
            Ver más casos de éxito
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}