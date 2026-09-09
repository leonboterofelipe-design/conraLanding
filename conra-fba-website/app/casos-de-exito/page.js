import React from 'react';
import Link from 'next/link';

export default function EnConstruccionPage() {
  return (
    <main className="min-h-screen bg-black text-gray-300 flex items-center justify-center py-20 px-6 md:px-12">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        
        {/* Badge superior */}
        <div className="inline-block">
          <span className="text-[#FF8D0F] font-semibold tracking-wider uppercase text-xs px-3.5 py-1.5 bg-[#FF8D0F]/10 rounded-full border border-[#FF8D0F]/20">
            CONRA FBA — Próximamente
          </span>
        </div>

        {/* Encabezado */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Estamos construyendo algo grande para vos.
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-lg mx-auto leading-relaxed">
            Esta sección se encuentra en desarrollo y estará disponible muy pronto. Estamos preparando contenido de alto nivel para tu proceso en Amazon Wholesale.
          </p>
        </div>

        {/* Tarjeta central informativa */}
        <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-xl bg-[#FF8D0F]/10 border border-[#FF8D0F]/30 flex items-center justify-center mx-auto text-[#FF8D0F]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white">Muy pronto disponible</h2>
          <p className="text-sm text-gray-400">
            Mientras tanto, puedes conocer cómo funciona nuestra mentoría 1:1 o dar el primer paso agendando una llamada con nuestro equipo.
          </p>
        </div>

        {/* Botones de acción */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="text-sm font-semibold text-gray-400 hover:text-white transition-colors flex items-center gap-2 px-6 py-3"
          >
            ← Volver al inicio
          </Link>
          <a
            href="https://go.conrafba.com/calendario"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF8D0F] text-black font-bold py-3 px-8 rounded-md hover:bg-[#e07b0d] transition-colors shadow-lg text-sm"
          >
            Agendar una llamada
          </a>
        </div>

      </div>
    </main>
  );
}