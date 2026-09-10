'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  const [activeTab, setActiveTab] = useState(0);

  const optionsData = [
    {
      id: 0,
      label: "Es mi primera vez vendiendo en Amazon",
      title: "Construye tu primer negocio de Amazon Wholesale desde cero",
      description: "CONRA FBA está diseñado para que puedas comenzar sin experiencia previa. Te guiamos paso a paso con acompañamiento 1:1 durante 12 semanas para que aprendas a tomar decisiones de negocio seguras."
    },
    {
      id: 1,
      label: "Quiero hacer Amazon Wholesale",
      title: "Vende productos de marcas reconocidas sin crear productos propios",
      description: "Olvídate de inventar o fabricar productos desde cero. Aprende a trabajar directamente con marcas, distribuidores oficiales y proveedores legítimos analizando la demanda con números reales."
    },
    {
      id: 2,
      label: "Ya vendo y busco escalar",
      title: "Estructura y haz crecer tu operación actual con un método profesional",
      description: "Ideal si ya vendes en Amazon pero dependes de ofertas, liquidaciones o intermediarios. Te ayudamos a consolidar relaciones estables con proveedores y construir un negocio organizado y basado en números."
    }
  ];

  const currentContent = optionsData[activeTab];

  return (
    <section id="agenda" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 relative overflow-hidden">
      
      {/* Detalle visual elegante con sutil iluminación en tonos corporativos */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-[#FF8D0F]/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Banner Superior Estilo Amazon adaptado a CONRA FBA */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm border-l-4 border-l-[#FF8D0F] relative overflow-hidden">
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#FF8D0F] uppercase">
              Mentoría Oficial CONRA FBA
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              ¿Listo para construir un negocio real de Amazon Wholesale acompañado por expertos?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Conocé cómo funciona CONRA FBA y descubrí si el programa tiene sentido para vos agendando una llamada directa con nuestro equipo.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center">
            <a 
              href="https://go.conrafba.com/calendario"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#FF8D0F] hover:text-orange-600 transition-colors group"
            >
              <span>Agendar llamada directa de evaluación</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Selector Interactivo (Pills / Radio con identidad propia de CONRA FBA) */}
        <div className="space-y-4 text-center">
          <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-widest">
            Elige la opción que mejor se adapte a tu momento actual:
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

        {/* Tarjeta Central con Fondo Blanco, limpia y profesional */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-950/[0.04] border border-slate-200/80 text-center max-w-3xl mx-auto space-y-6 transition-all duration-300">
          
          <div className="space-y-3">
            <span className="inline-block text-[11px] font-mono font-bold tracking-widest text-[#FF8D0F] uppercase bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
              CONRA FBA — Wholesale & Mentoría 1:1
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
              <span>AGENDA UNA LLAMADA</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <p className="text-xs text-slate-400 font-medium">
              * No hay compromiso de compra durante la llamada. Descubrí si el programa tiene sentido para vos.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}