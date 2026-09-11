import React from 'react';
import Image from 'next/image';

export default function HeroVSL() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-20">
      
      {/* Imagen de fondo Full Screen con efecto de crecimiento (Grow) y cobertura total */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/assets/banner.jpg"
          alt="Banner CONRA FBA"
          fill
          priority
          className="object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Capa de opacidad oscura (overlay) para asegurar que el texto sea perfectamente legible */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />
      </div>

      {/* Contenido principal del Hero */}
      <div className="max-w-5xl mx-auto text-center relative z-10 px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
          Construye un negocio <span className="text-[#FF8D0F]">real</span> vendiendo en Amazon.
        </h1>
        <p className="text-lg md:text-xl mb-10 text-zinc-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Aprende a vender productos de marcas reconocidas en Amazon, trabajando
          directamente con marcas y distribuidores, sin crear productos desde
          cero ni depender de intermediarios.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://go.conrafba.com/calendario"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF8D0F] text-zinc-950 font-extrabold py-4 px-8 rounded-xl hover:bg-[#e07b0d] transition-all text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            AGENDA UNA LLAMADA
          </a>
          <a
            href="https://go.conrafba.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#FF8D0F] text-[#FF8D0F] font-extrabold py-4 px-8 rounded-xl hover:bg-[#FF8D0F] hover:text-zinc-950 transition-all text-center"
          >
            VER ENTRENAMIENTO GRATUITO
          </a>
        </div>
      </div>

    </section>
  );
}