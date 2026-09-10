'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  const [activeTab, setActiveTab] = useState(0);

  const optionsData = [
    {
      id: 0,
      label: "Es mi primera vez vendiendo en Amazon",
      title: "Construye tu primer negocio desde cero con acompañamiento 1:1",
      description: "Evaluaremos tu situación actual y veremos si eres el candidato ideal para nuestra Mentoría de 12 Semanas en Wholesale, asegurando que evites errores costosos en tus primeros pasos sin necesidad de experiencia previa."
    },
    {
      id: 1,
      label: "Quiero hacer Amazon Wholesale",
      title: "Domina el modelo Wholesale trabajando con marcas oficiales",
      description: "Deja atrás las complicaciones de fabricar productos propios o depender de arbitrajes inestables. Te mostramos cómo conectar directamente con distribuidores y marcas consolidadas."
    },
    {
      id: 2,
      label: "Ya vendo y busco escalar",
      title: "Lleva tu operación actual al siguiente nivel con un método basado en números",
      description: "Especial para quienes ya operan pero necesitan estructurar un negocio profesional, optimizar su capital de inventario y asegurar relaciones comerciales estables a largo plazo."
    }
  ];

  const currentContent = optionsData[activeTab];

  return (
    <section id="agenda" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 relative overflow-hidden">
      
      {/* Elemento decorativo sutil de fondo para profundidad */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Banner Superior Estilo Amazon (inspirado en la referencia visual) */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm border-l-4 border-l-[#FF8D0F] relative overflow-hidden">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              ¿Listo para escalar tu negocio en Amazon con un método probado?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Agenda una llamada gratuita con nuestro equipo. Evaluaremos tu situación real y definiremos el mejor camino para tu operación.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center">
            <a 
              href="https://go.conrafba.com/calendario"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#FF8D0F] hover:text-orange-600 transition-colors group"
            >
              <span>Explorar fechas disponibles en el calendario</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Selector de Opciones Interactivo (Pills / Radio estético) */}
        <div className="space-y-4 text-center">
          <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-widest">
            Elige la opción que mejor se adapte a tu negocio:
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {optionsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border flex items-center gap-2.5 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-[1.02]'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/60'
                }`}
              >
                <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                  activeTab === tab.id ? 'border-[#FF8D0F] bg-[#FF8D0F]' : 'border-slate-400 bg-transparent'
                }`}>
                  {activeTab === tab.id && <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                </span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tarjeta Editorial Central con Fondo Blanco */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-950/[0.04] border border-slate-200/80 text-center max-w-3xl mx-auto space-y-6 transition-all duration-300">
          
          <div className="space-y-3">
            <span className="inline-block text-[11px] font-mono font-bold tracking-widest text-[#FF8D0F] uppercase bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
              Mentoría de 12 Semanas en Wholesale
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {currentContent.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              {currentContent.description}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-4">
            <a
              href="https://go.conrafba.com/calendario"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#FF8D0F] hover:bg-[#e07b0d] text-slate-950 font-extrabold px-10 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5 text-sm sm:text-base"
            >
              <span>SOLICITAR ACCESO AHORA</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <p className="text-xs text-slate-400 font-medium">
              * No hay compromiso de compra durante la llamada de evaluación.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}