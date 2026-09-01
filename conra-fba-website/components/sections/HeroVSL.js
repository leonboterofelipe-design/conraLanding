import React from 'react';

export default function HeroVSL() {
  return (
    <section className="bg-dark text-light py-20 px-6 md:py-32 mt-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Construye un negocio <span className="text-brand-500">real</span> vendiendo en Amazon.
        </h1>
        <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
          Aprende a vender productos de marcas reconocidas en Amazon, trabajando
          directamente con marcas y distribuidores, sin crear productos desde
          cero ni depender de intermediarios.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://go.conrafba.com/calendario"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-500 text-dark font-bold py-4 px-8 rounded-md hover:bg-brand-400 transition-colors text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            AGENDA UNA LLAMADA
          </a>
          <a
            href="https://go.conrafba.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-brand-500 text-brand-500 font-bold py-4 px-8 rounded-md hover:bg-brand-500 hover:text-dark transition-colors text-center"
          >
            VER ENTRENAMIENTO GRATUITO
          </a>
        </div>
      </div>
    </section>
  );
}
