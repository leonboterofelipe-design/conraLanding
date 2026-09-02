import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function QuienSoyPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-8 pb-20 px-6 md:pt-16 md:pb-32">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Imagen Superior */}
        <div className="flex justify-center">
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-brand-500 shadow-2xl">
            <Image
              src="/assets/images/DSC01098.JPG"
              alt="Conrado Loaldi"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Encabezado */}
        <div className="text-center space-y-4">
          <span className="text-brand-500 font-semibold tracking-wider uppercase text-sm">
            Sobre Conrado Loaldi
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Trayectoria, experiencia y <span className="text-brand-500">resultados reales</span> en Amazon FBA.
          </h1>
        </div>

        {/* Bloque Principal de Biografía */}
        <div className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-12 rounded-2xl shadow-2xl space-y-6 text-gray-300 leading-relaxed text-lg">
          <p>
            Conrado Loaldi es vendedor de Amazon desde 2020, empresario y fundador de CONRA FBA.
          </p>
          <p>
            Desde 2020 construye y opera su propio negocio dentro de Amazon, alcanzando una facturación de más de siete cifras anuales en ventas.
          </p>
          
          <div className="border-l-4 border-brand-500 pl-4 py-2 italic text-gray-200 bg-black/30 rounded-r-lg">
            &quot;Su experiencia no viene de estudiar el modelo desde afuera. Viene de hacerlo. De analizar productos, invertir capital, trabajar con proveedores, negociar, comprar inventario, cometer errores, tomar decisiones y construir los sistemas necesarios para operar un negocio real dentro de Amazon.&quot;
          </div>

          <p>
            Desde 2024, Conrado comenzó a trasladar esa experiencia a CONRA FBA, ayudando a personas sin experiencia previa a construir sus propios negocios y alcanzar sus primeros resultados dentro de Amazon.
          </p>
        </div>

        {/* Metodología y Acompañamiento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl space-y-4">
            <h3 className="text-2xl font-bold text-white">Metodología Basada en la Práctica</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Lo que enseñamos no es teoría. Es lo que aplicamos todos los días en nuestros propios negocios y lo que implementamos junto a nuestros estudiantes.
            </p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl space-y-4">
            <h3 className="text-2xl font-bold text-white">Diseñado para el Acompañamiento</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Por eso CONRA FBA no fue diseñado simplemente como un curso. Fue diseñado alrededor del acompañamiento.
            </p>
          </div>
        </div>

        {/* Detalle del Proceso y Estudiantes */}
        <div className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-10 rounded-2xl space-y-6 text-gray-300 text-base leading-relaxed">
          <p>
            Cada alumno trabaja junto a un mentor para implementar el sistema en su situación particular, aprender a tomar decisiones y evitar tener que descubrir el negocio completamente por prueba y error.
          </p>
          <p className="font-medium text-white">
            Ese proceso ya ha ayudado a estudiantes a pasar de las dudas, el miedo y no saber por dónde comenzar, a construir sus primeras operaciones y alcanzar hitos como sus primeros $10,000 en ventas dentro de Amazon.
          </p>
        </div>

        {/* Llamado a la Acción (CTA) */}
        <div className="text-center bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 p-10 rounded-2xl space-y-6">
          <h3 className="text-3xl font-bold text-white">¿Listo para construir tu negocio real?</h3>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://go.conrafba.com/calendario"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-500 text-black font-bold py-4 px-8 rounded-md hover:bg-brand-400 transition-colors shadow-lg"
            >
              AGENDA TU LLAMADA
            </a>
            <Link
              href="/"
              className="border-2 border-brand-500 text-brand-500 font-bold py-4 px-8 rounded-md hover:bg-brand-500 hover:text-black transition-colors"
            >
              VOLVER AL INICIO
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}