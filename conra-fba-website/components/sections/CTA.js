import React from 'react';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section id="agenda" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
          ¿Listo para Escalar tu Negocio en Amazon?
        </h2>
        <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
          Agenda una llamada gratuita con nuestro equipo. Evaluaremos tu
          situación y veremos si eres el candidato ideal para nuestra Mentoría
          de 12 Semanas en Wholesale.
        </p>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl mx-auto text-dark">
          <h3 className="text-2xl font-bold mb-4">Agenda tu Llamada de Evaluación</h3>
          <p className="text-slate-500 mb-8">Selecciona la fecha y hora que mejor se adapte a ti.</p>

          <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 bg-slate-50 mb-6">
            <span className="text-slate-400 font-medium">
              https://go.conrafba.com/calendario
            </span>
          </div>

          <a
            href="https://go.conrafba.com/calendario"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button size="lg" fullWidth>
              SOLICITAR ACCESO AHORA
            </Button>
          </a>
          <p className="text-xs text-slate-400 mt-4">
            *No hay compromiso de compra durante la llamada.
          </p>
        </div>
      </div>
    </section>
  );
}
