import React from 'react';
import Image from 'next/image';

export default function HeroVSL() {
  return (
    <section className="relative min-h-[600px] md:min-h-screen flex items-center justify-center text-white overflow-hidden py-24 md:py-32 px-4 sm:px-6">
      
      {/* Imagen de fondo con cobertura total y sin restricciones forzadas */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/assets/banner.jpg"
          alt="Banner CONRA FBA"
          fill
          priority
          className="object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Capa de opacidad oscura (overlay) más profunda para máxima legibilidad */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
      </div>

      {/* Contenido principal del Hero con espaciado natural y limpio */}
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-tight">
          Construye un negocio <span className="text-[#FF8D0F]">real</span> vendiendo en Amazon.
        </h1>
        
        <p className="text-sm sm:text-base md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Aprende a vender productos de marcas reconocidas en Amazon, trabajando
          directamente con marcas y distribuidores, sin crear productos desde
          cero ni depender de intermediarios.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a
            href="https://go.conrafba.com/calendario"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF8D0F] text-zinc-950 font-extrabold py-4 px-8 rounded-xl hover:bg-[#e07b0d] transition-all text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
          >
            AGENDA UNA LLAMADA
          </a>
          <a
            href="https://go.conrafba.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#FF8D0F] text-[#FF8D0F] font-extrabold py-4 px-8 rounded-xl hover:bg-[#FF8D0F] hover:text-zinc-950 transition-all text-center text-sm sm:text-base"
          >
            VER ENTRENAMIENTO GRATUITO
          </a>
        </div>

      </div>

    </section>
  );
}