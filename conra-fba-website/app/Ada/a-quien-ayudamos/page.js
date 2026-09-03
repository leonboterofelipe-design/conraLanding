'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function AQuienAyudamosPage() {
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
      
      {/* Header Estilo Consola / Documentación Corporativa */}
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

      {/* Main Layout Grid (Diseño Modular Estilo AWS/Seller Central) */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        
        {/* Sidebar de Navegación Estricta (Scroll-Spy) */}
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

        {/* Contenido Técnico Principal */}
        <div className="md:col-span-3 space-y-12">

          {/* Sección 1: Principiantes / Desde Cero */}
          <section id="principiantes" className="bg-white border border-gray-300 rounded-md p-8 shadow-sm space-y-6 scroll-mt-28">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-gray-900">01. Emprendedores Iniciando Desde Cero</h2>
              <span className="text-xs font-mono px-2.5 py-1 bg-gray-100 text-gray-700 rounded border border-gray-200">Segmento A</span>
            </div>
            
            <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                Dirigido a personas que desean estructurar su primer negocio digital formal en Estados Unidos y el mundo, evitando los errores costosos del novato.
              </p>
              
              <div className="bg-gray-50 border-l-2 border-gray-900 p-5 space-y-3 font-mono text-xs">
                <p className="font-bold text-gray-900 uppercase tracking-wider">Características clave de este perfil:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-[#FF8D0F] font-bold">▪</span>
                    <span>Buscan un modelo donde no sea necesario inventar ni fabricar productos propios desde cero en Asia.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF8D0F] font-bold">▪</span>
                    <span>Prefieren comercializar productos que ya cuentan con demanda orgánica comprobada y transacciones masivas.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF8D0F] font-bold">▪</span>
                    <span>Requieren un mapa de ruta claro para interactuar con distribuidores y marcas legítimas sin temor.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 2: Vendedores Actuales / Estancados */}
          <section id="estancados" className="bg-white border border-gray-300 rounded-md p-8 shadow-sm space-y-6 scroll-mt-28">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-gray-900">02. Vendedores Actuales con Operaciones Estancadas</h2>
              <span className="text-xs font-mono px-2.5 py-1 bg-gray-100 text-gray-700 rounded border border-gray-200">Segmento B</span>
            </div>
            
            <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                Pensado para operadores que ya poseen cuentas activas en Amazon pero enfrentan cuellos de botella críticos en su rentabilidad o crecimiento.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="border border-gray-200 p-5 rounded bg-gray-50/30 space-y-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-gray-200 text-gray-800 rounded">SÍNTOMA #01</span>
                  <h3 className="font-bold text-gray-900 text-sm">Dependencia de intermediarios</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Vendedores atrapados en cadenas de suministro informales que erosionan sus márgenes netos y ponen en riesgo la salud de su cuenta.
                  </p>
                </div>

                <div className="border border-gray-200 p-5 rounded bg-gray-50/30 space-y-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-gray-200 text-gray-800 rounded">SÍNTOMA #02</span>
                  <h3 className="font-bold text-gray-900 text-sm">Fatiga de cursos pasivos</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Participantes de academias tradicionales que acumularon videos grabados sin soporte técnico real para tomar decisiones financieras críticas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 3: Enfoque Analítico */}
          <section id="criterio" className="bg-white border border-gray-300 rounded-md p-8 shadow-sm space-y-6 scroll-mt-28">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-gray-900">03. Perfiles con Enfoque Empresarial y Analítico</h2>
              <span className="text-xs font-mono px-2.5 py-1 bg-gray-100 text-gray-700 rounded border border-gray-200">Data & Process</span>
            </div>
            
            <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                El programa se alinea con profesionales y perfiles metódicos que entienden el e-commerce como una compañía basada en flujos de caja, rotación de inventarios y cumplimiento normativo.
              </p>
              
              <div className="bg-gray-900 text-white p-6 rounded space-y-2 font-mono text-xs">
                <p className="text-[#FF8D0F] font-bold">ESTÁNDAR OPERATIVO:</p>
                <p className="text-sm font-sans text-gray-100">
                  Construcción de un negocio serio, organizado y escalable respaldado por datos financieros duros, no por especulaciones de marketing.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 4: Filtro de Perfiles / No Aptos */}
          <section id="perfiles" className="bg-white border border-gray-300 rounded-md p-8 shadow-sm space-y-6 scroll-mt-28">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-gray-900">04. Filtro de Expectativas: A Quién NO Ayudamos</h2>
              <span className="text-xs font-mono px-2.5 py-1 bg-red-50 text-red-700 rounded border border-red-200">Exclusion Criteria</span>
            </div>
            
            <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                Para mantener la calidad y el nivel de atención directa en nuestra mentoría 1:1, filtramos estrictamente los perfiles que no se alinean con nuestra metodología:
              </p>

              <div className="border border-red-200 bg-red-50/40 p-5 rounded space-y-3 font-mono text-xs text-red-900">
                <p className="font-bold uppercase tracking-wider">Perfiles no admitidos:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span>✕</span>
                    <span>Personas buscando fórmulas mágicas de enriquecimiento rápido sin esfuerzo operativo.</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✕</span>
                    <span>Operadores reacios a cumplir procesos de control financiero y documentación corporativa.</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✕</span>
                    <span>Quienes buscan delegar el 100% de la responsabilidad comercial sin involucrarse en la gestión de su empresa.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* CTA Enterprise Block */}
      <section className="bg-white border-t border-gray-300 py-16 px-6 mt-12">
        <div className="max-w-3xl mx-auto text-center space-y-6 bg-gray-50 border border-gray-300 p-10 rounded-md shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            ¿Te identificas con el perfil del operador CONRA FBA?
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            Verifica tu elegibilidad en una llamada de diagnóstico con nuestro equipo técnico.
          </p>
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