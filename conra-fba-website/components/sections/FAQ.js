'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: '¿Me quedaré solo después de ingresar?',
      a: 'No. Es una mentoría de 12 semanas. Además del contenido paso a paso, tendrás sesiones de acompañamiento 1:1, espacios para resolver dudas y soporte de nuestro equipo.',
    },
    {
      q: '¿Necesito vivir en Estados Unidos para vender en Amazon?',
      a: 'No necesariamente. Te enseñamos cómo crear tu estructura (LLC), abrir cuentas bancarias en USA y utilizar centros de preparación (Prep Centers) para operar desde tu país.',
    },
    {
      q: '¿Necesito comenzar con una gran cantidad de dinero?',
      a: 'Para Wholesale se requiere un capital de inversión inicial mayor que en arbitraje (recomendamos al menos $2,000 - $3,000 USD exclusivos para inventario), ya que compramos directo a distribuidores y hay mínimos de orden.',
    },
    {
      q: '¿Qué diferencia a CONRA FBA de otras academias?',
      a: 'Que Conrado Loaldi opera un negocio real de Amazon Wholesale todos los días. No somos solo "vendedores de cursos". Te mostramos estrategias reales, actualizadas y con acompañamiento personalizado.',
    },
  ];

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-dark mb-4">
            Preguntas <span className="text-brand-600">Frecuentes</span>
          </h2>
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
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-dark">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-500 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
          {answer}
        </div>
      )}
    </div>
  );
}
