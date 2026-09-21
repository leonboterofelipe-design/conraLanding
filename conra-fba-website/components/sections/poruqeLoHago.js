import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PorQueLoHagoPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 pt-8 pb-20 px-6 md:pt-16 md:pb-32">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex justify-center pt-4">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-200/50 bg-zinc-100 group">
            <Image
              src="/assets/images/imgLoque.jpg"
              alt="Por qué lo hago"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5 z-10 pointer-events-none" />
          </div>
        </div>

        <div className="text-center space-y-4">
          <span className="text-[#FF8D0F] font-bold tracking-wider uppercase text-sm">
            Nuestro Propósito
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-950">
            Por qué hacemos lo que hacemos en <span className="text-[#FF8D0F]">ADA</span>.
          </h1>
        </div>

        <div className="bg-zinc-50 border border-zinc-200 p-8 md:p-12 rounded-2xl shadow-xl space-y-6 text-zinc-700 leading-relaxed text-lg">
          <p>
            En 2024 identificamos una realidad que estaba afectando a muchas personas que querían empezar a vender en Amazon: había mucha información disponible, pero muy poca orientación realmente práctica y personalizada.
          </p>
          <p>
            Yo mismo viví esa experiencia. En mi búsqueda por aprender y construir mi negocio, encontré programas que entregaban información, pero que muchas veces dejaban al estudiante solo al momento de llevarla a la práctica, teniendo que buscar respuestas por su cuenta o incluso enviar correos directamente a Amazon para intentar resolver cada nueva duda que aparecía en el camino.
          </p>

          <div className="border-l-4 border-[#FF8D0F] pl-4 py-3 italic text-zinc-800 bg-zinc-100 rounded-r-lg">
            &quot;Esa experiencia fue una de las principales razones por las que decidí crear esta empresa: construir el tipo de formación que me hubiera gustado encontrar cuando estaba comenzando.&quot;
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-2xl space-y-4 shadow-md">
            <h3 className="text-2xl font-black text-zinc-950">Más que un curso</h3>
            <p className="text-zinc-700 text-base leading-relaxed">
              Un modelo que no se limite a vender teoría, sino que combine conocimiento, metodología, acompañamiento y soporte real.
            </p>
          </div>
          <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-2xl space-y-4 shadow-md">
            <h3 className="text-2xl font-black text-zinc-950">Claridad y Respuestas</h3>
            <p className="text-zinc-700 text-base leading-relaxed">
              Diseñado para que un alumno pueda encontrar respuestas, orientación y claridad sin sentirse solo cada vez que aparece un problema.
            </p>
          </div>
        </div>

        <div className="bg-zinc-50 border border-zinc-200 p-8 md:p-10 rounded-2xl space-y-6 text-zinc-700 text-base leading-relaxed shadow-md">
          <p className="font-medium text-zinc-900 text-lg">
            Queríamos crear un lugar donde aprender a vender en Amazon significara también tener a quién acudir durante el proceso, con personas que conozcan el negocio y puedan ayudar a entender qué hacer en cada etapa.
          </p>
        </div>

        <section className="bg-zinc-950 text-white rounded-3xl shadow-2xl overflow-hidden border border-zinc-800">
          <div className="px-6 py-8 md:px-10 md:py-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <span className="text-[#FF8D0F] text-xs font-bold uppercase tracking-[0.2em]">
                  Resultados reales
                </span>
                <h3 className="mt-2 text-3xl md:text-4xl font-black tracking-tight text-white">
                  Lo que está construyendo esta comunidad
                </h3>
              </div>
              <p className="max-w-xl text-sm md:text-base text-zinc-300">
                No se trata solo de aprender teoría: hablamos de ejecución, claridad y acompañamiento para convertir dudas en ventas reales.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {[
                { value: '4.9/5', label: 'Satisfacción promedio de estudiantes' },
                { value: '+150', label: 'Personas acompañadas en su proceso' },
                { value: '100%', label: 'Enfoque en acompañamiento real y práctico' },
              ].map((stat) => (
                <div key={stat.label} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 md:p-6">
                  <div className="text-3xl md:text-4xl font-black text-[#FF8D0F]">{stat.value}</div>
                  <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[#FF8D0F] text-xs font-bold uppercase tracking-[0.2em]">Testimonios</span>
              <h3 className="mt-2 text-2xl md:text-3xl font-black text-zinc-950">Estudiantes que encontraron dirección real</h3>
            </div>
            <Link href="/casos-de-exito" className="hidden sm:inline-flex items-center text-sm font-bold text-zinc-900 hover:text-[#FF8D0F] transition-colors">
              Ver más casos de éxito →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              '“No solo aprendí la teoría, sino que entendí cómo aplicarla y cómo actuar cuando aparecían problemas reales.”',
              '“Por fin había alguien que respondía preguntas concretas y me ayudaba a tomar decisiones con más confianza.”',
            ].map((quote, idx) => (
              <blockquote key={quote} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 text-zinc-700 leading-relaxed">
                <p className="text-lg">{quote}</p>
                <footer className="mt-4 text-sm font-bold text-zinc-900">
                  Estudiante {idx + 1} de ADA
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <div className="text-center bg-white border border-zinc-200 p-10 rounded-2xl space-y-6 shadow-lg">
          <h3 className="text-3xl font-black text-zinc-950">¿Listo para el siguiente paso?</h3>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://go.conrafba.com/calendario"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF8D0F] text-zinc-950 font-extrabold py-3.5 px-8 rounded-xl hover:bg-[#e07b0d] transition-all text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              AGENDA UNA LLAMADA
            </a>
            <Link
              href="/"
              className="border-2 border-[#FF8D0F] text-[#FF8D0F] font-extrabold py-3.5 px-8 rounded-xl hover:bg-[#FF8D0F] hover:text-zinc-950 transition-all text-center text-sm sm:text-base"
            >
              VOLVER AL INICIO
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
{/* cambio3  mejorar */}