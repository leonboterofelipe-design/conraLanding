'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HistoriaPage() {
  const [activeSection, setActiveSection] = useState('inicio');

  const sections = [
    { id: 'inicio', label: 'El problema', title: 'Cuando empieza la fantasía' },
    { id: 'conrado', label: 'Conrado Loaldi', title: 'La historia: 2020' },
    { id: 'quiebre', label: 'El quiebre', title: 'Números, no adivinanza' },
    { id: 'conra', label: 'CONRA FBA', title: 'El nacimiento: 2024' },
    { id: 'atajos', label: 'Sin atajos', title: 'Construimos empresas' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < 200) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 py-16 px-6 md:py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-gray-500 mb-3 uppercase">
            Conra FBA
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-4">
            Nuestra historia
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Cómo un sistema real en Amazon nació de equivocarse, aprender y decir &quot;esto debe hacerse diferente&quot;.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <div className="sticky top-8 space-y-1">
            <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-6">
              En esta página
            </p>
            <nav className="space-y-0">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left text-sm py-3 px-4 rounded transition-all duration-200 ${
                    activeSection === section.id
                      ? 'font-semibold text-gray-900 bg-gray-100 border-l-2'
                      : 'font-normal text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  style={
                    activeSection === section.id
                      ? { borderLeftColor: '#FF8D0F' }
                      : {}
                  }
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="md:col-span-3 space-y-16">

          {/* Section 1: Inicio */}
          <section id="inicio" className="scroll-mt-8 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Cuando empieza la fantasía
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-base">
              <p>
                Cuando la gente empieza a interesarse por Amazon, el mercado suele venderles una fantasía. Te dicen que para ganar dinero tienes que crear un producto revolucionario. Que debes gastar una fortuna fabricando en China. Que necesitas un packaging brillante. Y luego solo cruzar los dedos esperando que la suerte te acompañe.
              </p>
              
              <p>
                La realidad es diferente. Empezar así es caminar a ciegas. Es competir contra gigantes sin sistemas. Es depender de la adivinanza. Y la adivinanza es cara.
              </p>
            </div>
          </section>

          {/* Section 2: Conrado */}
          <section id="conrado" className="scroll-mt-8 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Conrado Loaldi: 2020
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-base">
              <p>
                Conrado pasó por ese mismo lugar. En 2020, decidió entrar a Amazon a operar su propio negocio. Y no te vamos a mentir: se chocó contra la pared.
              </p>

              <div className="bg-gray-50 border-l-4 pl-6 py-6 space-y-4" style={{ borderColor: '#FF8D0F' }}>
                <p className="font-semibold text-gray-900">
                  Lo que pasó:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3 leading-relaxed">
                    <span className="text-lg font-bold flex-shrink-0" style={{ color: '#FF8D0F' }}>•</span>
                    <span>Invirtió capital en productos equivocados</span>
                  </li>
                  <li className="flex gap-3 leading-relaxed">
                    <span className="text-lg font-bold flex-shrink-0" style={{ color: '#FF8D0F' }}>•</span>
                    <span>Probó estrategias que simplemente no funcionaban</span>
                  </li>
                  <li className="flex gap-3 leading-relaxed">
                    <span className="text-lg font-bold flex-shrink-0" style={{ color: '#FF8D0F' }}>•</span>
                    <span>Cometió errores costosos negociando con proveedores</span>
                  </li>
                  <li className="flex gap-3 leading-relaxed">
                    <span className="text-lg font-bold flex-shrink-0" style={{ color: '#FF8D0F' }}>•</span>
                    <span>Entendió qué se siente estar solo frente a una pantalla</span>
                  </li>
                </ul>
              </div>

              <p>
                Pero de esa fricción, de equivocarse y volver a empezar, nació algo valioso: un sistema real.
              </p>
            </div>
          </section>

          {/* Section 3: El quiebre */}
          <section id="quiebre" className="scroll-mt-8 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              El quiebre: números, no adivinanza
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-base">
              <p>
                El quiebre llegó cuando Conrado dejó de buscar &quot;el producto milagroso&quot; y empezó a mirar el negocio como lo que realmente es: una empresa basada en procesos, datos y relaciones comerciales estables.
              </p>

              <p>
                Adoptó el modelo <strong className="font-semibold text-gray-900">Amazon Wholesale</strong>. Eso significa vender productos de marcas reconocidas que la gente ya conoce y ya está comprando en Amazon. Sin inventar nada. Sin intermediarios. Sin adivinanza.
              </p>

              <p>
                Escaló su operación a más de siete cifras anuales en ventas.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 py-10 border-t border-b border-gray-200">
              <div className="space-y-2">
                <div className="text-5xl font-bold leading-none" style={{ color: '#FF8D0F' }}>
                  7+
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Cifras anuales en ventas
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold leading-none" style={{ color: '#FF8D0F' }}>
                  2020
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Año en que comenzó
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold leading-none" style={{ color: '#FF8D0F' }}>
                  1
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Sistema probado y real
                </p>
              </div>
            </div>

            {/* Insight */}
            <div className="space-y-6 text-gray-700 leading-relaxed text-base">
              <p className="font-semibold text-gray-900">
                Pero notó un patrón al hablar con otros vendedores:
              </p>
              
              <p>
                La gente no fracasaba en Amazon porque el modelo no funcionara. Fracasaban porque estaban solos.
              </p>

              <p>
                Compraban cursos llenos de videos grabados que acumulaban polvo digital. Aplicaban a medias. Terminaban perdiendo capital por falta de guía en decisiones críticas.
              </p>
            </div>
          </section>

          {/* Section 4: CONRA FBA */}
          <section id="conra" className="scroll-mt-8 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              2024: El nacimiento de CONRA FBA
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-base">
              <p>
                En 2024, Conrado decidió que las cosas debían hacerse de otra manera.
              </p>

              {/* Key Statement */}
              <div className="bg-gray-900 text-white p-8 md:p-10 space-y-4">
                <p className="text-2xl md:text-3xl font-bold leading-tight">
                  Un negocio real no se construye viendo tutoriales pasivos. Se construye con acompañamiento.
                </p>
              </div>

              <p>
                No creamos otra academia masiva y fría. Diseñamos un espacio donde cada alumno trabaja mano a mano, 1:1, con un mentor durante 12 semanas.
              </p>
            </div>

            {/* Four Pillars */}
            <div className="space-y-8 pt-4">
              <div className="space-y-3">
                <div className="flex gap-4 items-start">
                  <div className="text-3xl font-black flex-shrink-0" style={{ color: '#FF8D0F' }}>
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Análisis de oportunidades con números reales
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Margen, volumen, competencia, riesgo. Todo basado en datos, no en intuición.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex gap-4 items-start">
                  <div className="text-3xl font-black flex-shrink-0" style={{ color: '#FF8D0F' }}>
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Negociación con marcas y distribuidores
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Acompañamiento real en contacto con proveedores. Sin miedo. Con criterio empresarial.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex gap-4 items-start">
                  <div className="text-3xl font-black flex-shrink-0" style={{ color: '#FF8D0F' }}>
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Estructura de empresa
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      No un side hustle. Una empresa real, organizada y sostenible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex gap-4 items-start">
                  <div className="text-3xl font-black flex-shrink-0" style={{ color: '#FF8D0F' }}>
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Mentoría 1:1 de 12 semanas
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Sesiones semanales. Decisiones guiadas. Evitas errores que otros cometieron.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gray-50 p-8 md:p-10 mt-8 space-y-8">
              <h3 className="text-lg font-semibold text-gray-900">
                Resultados hasta hoy
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#FF8D0F' }}>
                    300+
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Estudiantes acompañados
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#FF8D0F' }}>
                    $10k+
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Primeras ventas promedio
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#FF8D0F' }}>
                    95%+
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Completaron el programa
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Sin atajos */}
          <section id="atajos" className="scroll-mt-8 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              No buscamos atajos. Construimos empresas.
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-base">
              <p className="font-semibold text-gray-900 text-lg">
                Si estás buscando una fórmula mágica para hacerte rico sin trabajar, este lugar no es para ti.
              </p>

              <p>
                Pero si querés dejar de improvisar, si querés aprender de quienes ya recorrieron el camino, si querés construir un negocio de Amazon Wholesale profesional, organizado y sostenible...
              </p>

              <p className="text-lg font-semibold" style={{ color: '#FF8D0F' }}>
                Estás en el lugar indicado.
              </p>
            </div>
          </section>

        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-white border-t border-gray-200 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            ¿Listo para construir tu negocio real?
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Mentoría personalizada de 12 semanas. Plazas limitadas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a
              href="https://go.conrafba.com/calendario"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold py-4 px-8 rounded text-black transition-opacity hover:opacity-90 duration-200"
              style={{ backgroundColor: '#FF8D0F' }}
            >
              Agenda una llamada
            </a>
            <Link
              href="/"
              className="font-semibold py-4 px-8 rounded border-2 border-gray-300 text-gray-900 hover:bg-gray-50 transition-colors duration-200"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}