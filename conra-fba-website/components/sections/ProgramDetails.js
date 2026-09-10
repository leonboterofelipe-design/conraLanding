import React from 'react';
import { ShoppingCart, UserCheck, BarChart3, Layers } from 'lucide-react';

export default function ProgramDetails() {
  const benefits = [
    {
      number: "01",
      icon: <ShoppingCart className="w-5 h-5 text-[#FF8D0F]" />,
      title: 'Trato Directo con Marcas',
      description:
        'Sin intermediarios ni complicaciones. Te enseñamos a abrir cuentas y comprar directamente a marcas y distribuidores oficiales a precios de mayorista.',
    },
    {
      number: "02",
      icon: <UserCheck className="w-5 h-5 text-[#FF8D0F]" />,
      title: 'Acompañamiento 1:1 de 12 Semanas',
      description:
        'No te dejamos solo con una biblioteca de videos. Un mentor trabaja de la mano contigo semana a semana para guiar tus decisiones, revisar tus números y evitar errores costosos.',
    },
    {
      number: "03",
      icon: <BarChart3 className="w-5 h-5 text-[#FF8D0F]" />,
      title: 'Criterio y Decisiones de Negocio',
      description:
        'No formamos simples operadores, sino empresarios. Aprende a analizar demanda, márgenes, ROI, competencia y la Buy Box con números reales antes de invertir tu capital.',
    },
    {
      number: "04",
      icon: <Layers className="w-5 h-5 text-[#FF8D0F]" />,
      title: 'Ecosistema de Soporte Integral',
      description:
        'Accede a nuestra biblioteca paso a paso, clases grupales semanales con coaches expertos, comunidad privada de alumnos y nuestro GPT de Inteligencia Artificial exclusivo.',
    },
  ];

  return (
    <section id="mentoria" className="py-28 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado Centrado */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <span className="inline-block text-xs font-semibold tracking-widest text-[#FF8D0F] uppercase">
            El Sistema CONRA FBA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
            Por qué <span className="text-[#FF8D0F]">CONRA FBA</span> es diferente a todo lo demás.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            Construye y opera un negocio real de Amazon Wholesale con un método estructurado, basado en números y respaldado por mentoría personalizada.
          </p>
        </div>

        {/* Grid de Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-zinc-50/60 hover:bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-zinc-950/[0.03] relative"
            >
              <div>
                {/* Cabecera de la tarjeta: Ícono y Numeración Editorial */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-11 h-11 rounded-xl bg-white border border-zinc-200/80 flex items-center justify-center shadow-xs">
                    {benefit.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold text-zinc-400 tracking-wider">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 mb-3 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>

              {/* Pie de tarjeta sutil */}
              <div className="pt-6 mt-6 border-t border-zinc-200/40 flex items-center justify-between text-xs font-medium text-zinc-400 group-hover:text-zinc-900 transition-colors">
                <span>Pilar fundamental</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8D0F] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}