'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AQuienAyudamosPage() {
  const [activeSection, setActiveSection] = useState('principiantes');

  const sections = [
    { id: 'principiantes', label: '01. Desde Cero', title: 'Nuevos Emprendedores' },
    { id: 'estancados', label: '02. Vendedores Actuales', title: 'Superación de Estancamiento' },
    { id: 'criterio', label: '03. Enfoque Analítico', title: 'Negocios Basados en Datos' },
    { id: 'perfiles', label: '04. Filtro de Perfiles', title: 'Requisitos y No Aptos' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#111111] font-sans antialiased">
      <header className="bg-white border-b border-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-wider">
            <span>CONRA FBA</span>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Segmentación de Audiencia y Perfiles</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            A quién ayudamos: Perfil del Operador
          </h1>
          <p className="text-base text-gray-600 max-w-3xl leading-relaxed">
            CONRA FBA está diseñado específicamente para emprendedores y operadores que buscan construir una empresa real en Amazon mediante procesos validados, sin caer en la especulación.
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        <aside className="md:col-span-1 md:sticky md:top-24">
          <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm space-y-1">
            <p className="text-[11px] font-bold text-gray-400 tracking-widest uppercase px-3 pb-2 border-b border-gray-100">
              Índice de Perfiles
            </p>
            <nav className="space-y-1 pt-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left text-xs font-medium py-2.5 px-3 rounded transition-colors duration-150 flex items-center justify-between ${
                    activeSection === section.id
                      ? 'bg-gray-900 text-white font-semibold'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span>{section.label}</span>
                  {activeSection === section.id && (
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#FF8D0F' }} />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <div className="md:col-span-3 space-y-12">
          <section id="principiantes" className="bg-white border border-gray-300 rounded-md p-8 shadow-sm space-y-6 scroll-mt-28">
            <h2 className="text-xl font-bold text-gray-900">01. Emprendedores Iniciando Desde Cero</h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Dirigido a personas que desean estructurar su primer negocio digital formal en Estados Unidos y el mundo, evitando errores costosos.
            </p>
          </section>

          <section id="estancados" className="bg-white border border-gray-300 rounded-md p-8 shadow-sm space-y-6 scroll-mt-28">
            <h2 className="text-xl font-bold text-gray-900">02. Vendedores Actuales con Operaciones Estancadas</h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Pensado para operadores que ya poseen cuentas activas en Amazon pero enfrentan cuellos de botella en su rentabilidad.
            </p>
          </section>

          <section id="criterio" className="bg-white border border-gray-300 rounded-md p-8 shadow-sm space-y-6 scroll-mt-28">
            <h2 className="text-xl font-bold text-gray-900">03. Perfiles con Enfoque Empresarial y Analítico</h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              El programa se alinea con profesionales que entienden el e-commerce como una compañía basada en flujos de caja y datos.
            </p>
          </section>

          <section id="perfiles" className="bg-white border border-gray-300 rounded-md p-8 shadow-sm space-y-6 scroll-mt-28">
            <h2 className="text-xl font-bold text-gray-900">04. Filtro de Expectativas: A Quién NO Ayudamos</h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Personas que buscan fórmulas mágicas de enriquecimiento rápido sin esfuerzo operativo no son admitidas.
            </p>
          </section>
        </div>
      </div>

      <section className="bg-white border-t border-gray-300 py-16 px-6 mt-12">
        <div className="max-w-3xl mx-auto text-center space-y-6 bg-gray-50 border border-gray-300 p-10 rounded-md shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            ¿Te identificas con el perfil del operador CONRA FBA?
          </h2>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://go.conrafba.com/calendario"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF8D0F] hover:bg-[#e07b0a] text-black font-bold text-xs tracking-wider uppercase py-3.5 px-6 rounded transition-colors duration-150 shadow-sm"
            >
              Agenda tu llamada de diagnóstico
            </a>
            <Link
              href="/"
              className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-900 font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded transition-colors duration-150"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}