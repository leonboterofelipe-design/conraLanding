import React from 'react';
import Image from 'next/image';

export default function HeroVSL() {
  return (
    <section className="relative h-[90vh] min-h-[480px] max-h-[700px] flex items-center justify-center text-white overflow-hidden px-4 sm:px-6 pt-16">
      
      {/* Imagen de fondo exclusiva para dispositivos móviles */}
      <div className="absolute inset-0 z-0 overflow-hidden block md:hidden">
        <Image
          src="/assets/images/bannerM.png"
          alt="Banner CONRA FBA Movil"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Imagen de fondo exclusiva para computadoras y pantallas grandes */}
      <div className="absolute inset-0 z-0 overflow-hidden hidden md:block">
        <Image
          src="/assets/banner.jpg"
          alt="Banner CONRA FBA Desktop"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Capa de opacidad oscura (overlay) común para máxima legibilidad en ambos dispositivos */}
      <div className="absolute inset-0 z-[1] bg-black/80 backdrop-blur-[2px]" />

      {/* Contenido principal del Hero */}
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4 sm:space-y-6">
        
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
          Construye un negocio <span className="text-[#FF8D0F]">real</span> vendiendo en Amazon.
        </h1>
        
        <p className="text-xs sm:text-sm md:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Aprende a vender productos de marcas reconocidas en Amazon, trabajando
          directamente con marcas y distribuidores, sin crear productos desde
          cero ni depender de intermediarios.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
          <a
            href="https://go.conrafba.com/calendario"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF8D0F] text-zinc-950 font-extrabold py-3.5 px-7 rounded-xl hover:bg-[#e07b0d] transition-all text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
          >
            AGENDA UNA LLAMADA
          </a>
          <a
            href="https://go.conrafba.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#FF8D0F] text-[#FF8D0F] font-extrabold py-3.5 px-7 rounded-xl hover:bg-[#FF8D0F] hover:text-zinc-950 transition-all text-center text-sm sm:text-base"
          >
            VER ENTRENAMIENTO GRATUITO
          </a>
        </div>

      </div>

    </section>
  );
}