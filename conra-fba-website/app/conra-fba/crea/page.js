import React from 'react';
import Link from 'next/link';

export default function ConstruccionPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#FF8D0F]">
          <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Casos de Éxito en Desarrollo</h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          Esta sección se está creando. Muy pronto contarás con una experiencia optimizada para conocer los resultados de nuestros estudiantes.
        </p>
        <div>
          <Link
            href="/"
            className="inline-block bg-[#FF8D0F] text-black font-bold py-3 px-6 rounded-md hover:opacity-90 transition-opacity"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}