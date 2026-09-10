import React from 'react';
import { ShoppingCart, UserCheck, BarChart3, Layers } from 'lucide-react';

export default function ProgramDetails() {
  const benefits = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-[#FF8D0F]" />,
      title: 'Trato Directo con Marcas',
      description:
        'Sin intermediarios ni complicaciones. Te enseñamos a abrir cuentas y comprar directamente a marcas y distribuidores oficiales a precios de mayorista.',
    },
    {
      icon: <UserCheck className="w-8 h-8 text-[#FF8D0F]" />,
      title: 'Acompañamiento 1:1 de 12 Semanas',
      description:
        'No te dejamos solo con una biblioteca de videos. Un mentor trabaja de la mano contigo semana a semana para guiar tus decisiones, revisar tus números y evitar errores costosos.',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#FF8D0F]" />,
      title: 'Criterio y Decisiones de Negocio',
      description:
        'No formamos simples operadores, sino empresarios. Aprende a analizar demanda, márgenes, ROI, competencia y la Buy Box con números reales antes de invertir tu capital.',
    },
    {
      icon: <Layers className="w-8 h-8 text-[#FF8D0F]" />,
      title: 'Ecosistema de Soporte Integral',
      description:
        'Accede a nuestra biblioteca paso a paso, clases grupales semanales con coaches expertos, comunidad privada de alumnos y nuestro GPT de Inteligencia Artificial exclusivo.',
    },
  ];

  return (
    <section id="mentoria" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#FF8D0F] font-bold tracking-wider uppercase text-xs px-3.5 py-1.5 bg-[#FF8D0F]/10 rounded-full border border-[#FF8D0F]/20">
            El Sistema CONRA FBA
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            Por qué <span className="text-[#FF8D0F]">CONRA FBA</span> es diferente a todo lo demás
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Construye y opera un negocio real de Amazon Wholesale con un método estructurado, basado en números y respaldado por mentoría personalizada.
          </p>
        </div>

        {/* Tarjetas de pilares */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-[#FF8D0F]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="bg-[#FF8D0F]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF8D0F] transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300 text-[#FF8D0F]">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}