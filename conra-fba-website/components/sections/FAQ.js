'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: '¿Qué modelo de negocio enseña CONRA FBA?',
      a: 'CONRA FBA enseña Amazon Wholesale. Aprendés a comprar productos existentes de marcas reconocidas a marcas, distribuidores y proveedores oficiales para posteriormente comercializarlos dentro de Amazon, sin necesidad de inventar un producto o fabricar en China.',
    },
    {
      q: '¿Tengo que crear mi propia marca o producto?',
      a: 'No. La metodología se enfoca completamente en encontrar oportunidades sobre productos de marcas reconocidas que ya se venden y tienen demanda comprobada en Amazon.',
    },
    {
      q: '¿Me ayudan personalmente o solamente recibo videos?',
      a: 'No te dejamos solo con videos. Una de las principales diferencias es el acompañamiento personalizado 1:1 durante 12 semanas con un mentor que guía tus decisiones y revisa tus números. Además, contás con clases grupales semanales, comunidad privada y nuestro GPT de Inteligencia Artificial exclusivo.',
    },
    {
      q: '¿Puedo entrar si nunca vendí en Amazon?',
      a: 'Sí. CONRA FBA está diseñado para poder comenzar desde cero, guiándote paso a paso en todo el proceso de apertura y operación, sin requerir experiencia previa.',
    },
    {
      q: '¿Cuánto dinero necesito para empezar?',
      a: 'Empezar en Amazon Wholesale requiere inversión de tiempo, energía y capital. Nuestra recomendación habitual es contar con alrededor de $2,000 USD para cubrir la formación, inventario inicial, herramientas, software y gastos básicos para poner en marcha el negocio.',
    },
    {
      q: '¿Puedo hacerlo si vivo fuera de Estados Unidos?',
      a: 'Sí. No necesitás vivir físicamente en Estados Unidos para desarrollar una operación de Amazon. Te enseñamos cómo estructurar tu negocio (LLC), abrir cuentas y utilizar centros de preparación (Prep Centers).',
    },
    {
      q: '¿Es un método para hacer dinero rápido?',
      a: 'No. Construir un negocio real requiere capital, tiempo, criterio, disciplina y ejecución. Si buscás resultados mágicos o dinero sin trabajar, este programa no es para vos.',
    },
  ];

  return (
    <section id="faq" className="py-[20px] px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-xs font-semibold tracking-widest text-[#FF8D0F] uppercase">
            Resolvé tus dudas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
            Preguntas <span className="text-[#FF8D0F]">Frecuentes</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            Todo lo que necesitas saber sobre el programa, el modelo de negocio y el acompañamiento.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-zinc-200/80 rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-300 bg-zinc-50/50">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 bg-transparent hover:bg-zinc-100/60 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-zinc-900 text-sm sm:text-base">{question}</span>
        <div className={`w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${
          isOpen ? 'rotate-180 border-[#FF8D0F]/40 text-[#FF8D0F]' : 'text-zinc-500'
        }`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-2 bg-transparent text-zinc-600 text-sm sm:text-base leading-relaxed border-t border-zinc-200/40">
          {answer}
        </div>
      )}
    </div>
  );
}