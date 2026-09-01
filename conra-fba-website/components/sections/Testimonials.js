import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Uribe',
      text: 'Desde que entré a la mentoría, pasé de hacer arbitraje online a trabajar Wholesale. El crecimiento ha sido exponencial. Conrado no solo enseña teoría, abre las puertas de su negocio.',
    },
    {
      name: 'Carolina Mesa',
      text: 'Entrar a esta academia fue la mejor decisión. El acompañamiento y apoyo ha sido esencial. Creo que todas las personas que quieren emprender en Amazon deberían empezar por acá.',
    },
    {
      name: 'Nelson Yevara',
      text: 'Excelente mentoría, super completa. Todo está explicado con detalle. El material vale muchísimo, además del equipo de soporte. Te acompañan en las 12 semanas paso a paso.',
    },
  ];

  return (
    <section id="testimonios" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Casos de <span className="text-brand-500">Éxito Reales</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Resultados de estudiantes que tomaron acción y siguieron la
            metodología Wholesale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic">"{test.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center font-bold text-xl">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{test.name}</h4>
                  <p className="text-sm text-brand-400">Estudiante de Mentoría</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
