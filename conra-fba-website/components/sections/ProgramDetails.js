import React from 'react';
import { Users, ShoppingCart, Target, TrendingUp } from 'lucide-react';

export default function ProgramDetails() {
  const benefits = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-brand-600" />,
      title: 'No es Arbitraje al Detal',
      description:
        'Dejamos de buscar ofertas en tiendas minoristas. Te enseñamos a comprar directamente a marcas y distribuidores oficiales a precios de mayorista.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-600" />,
      title: 'Modelo Escalable',
      description:
        'El modelo Wholesale te permite reabastecer inventario con un clic. Construye un negocio predecible y con mayor capacidad de crecimiento.',
    },
    {
      icon: <Users className="w-8 h-8 text-brand-600" />,
      title: 'Cuentas Mayoristas Reales',
      description:
        'Aprende el guion exacto y los requisitos legales para abrir cuentas con distribuidores autorizados en Estados Unidos, incluso si eres extranjero.',
    },
    {
      icon: <Target className="w-8 h-8 text-brand-600" />,
      title: 'Mentoría de 12 Semanas',
      description:
        'Acompañamiento 1:1 intensivo. No te dejamos solo con videos grabados; trabajamos de la mano en tu negocio semana a semana.',
    },
  ];

  return (
    <section id="mentoria" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-dark mb-4">
            La Mentoría de <span className="text-brand-600">Amazon Wholesale</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Un programa intensivo diseñado para transformar tu forma de vender,
            enfocándonos en estrategias de marcas reconocidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="bg-brand-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}