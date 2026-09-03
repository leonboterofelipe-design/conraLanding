'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LogrosPage() {
  const [activeSection, setActiveSection] = useState('impacto');

  const sections = [
    { id: 'impacto', label: '01. Impacto Global', title: 'Resultados Verificados' },
    { id: 'metricas', label: '02. Estándar Wholesale', title: 'Métricas Clave' },
    { id: 'casos', label: '03. Casos de Éxito', title: 'Empresas Escaladas' },
    { id: 'diferencial', label: '04. El Método', title: 'Tasa de Éxito Operativo' },
    { id: 'vision', label: '05. Manifiesto', title: 'Construcción Empresarial' },
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
            <span className="text-gray-900 font-semibold">Evidencia Operativa y Resultados</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            Logros que validan el sistema
          </h1>
          <p className="text-base text-gray-600 max-w-3xl leading-relaxed">
            Más de 300 estudiantes estructurando operaciones reales en Amazon Wholesale mediante analítica de datos, relaciones de suministro directo y disciplina de procesos.
          </p>
        </div>
      </header>

      {/* Main Layout Grid (Diseño Modular Estilo AWS/Seller Central) */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        
        {/* Sidebar de Navegación Estricta (Scroll-Spy) */}
        <aside className="md:col-span-1 md:sticky md:top-24">
          <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm space-y-1">
            <p className="text-[11px] font-bold text-gray-400 tracking-widest uppercase px-3 pb-2 border-b border-gray-100">
              Índice de Evidencia
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

          {/* Sección 1: Impacto Global */}
          <section id="impacto" className="bg-white border border-gray-300 rounded-md p-8 shadow-sm space-y-6 scroll-mt-28">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-gray-900">01. Resultados Verificados en el Mercado Real</h2>
              <span className="text-xs font-mono px-2.5 py-1 bg-gray-100 text-gray-700 rounded border border-gray-200">Global Metrics</span>
            </div>
            
            <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                En el ecosistema de Amazon, la teoría y los discursos vacíos son irrelevantes si no se traducen en flujo de caja, rotación de inventario saludable y relaciones estables con proveedores corporativos.
              </p>
              <p>
                CONRA FBA opera bajo un modelo de <span className="font-semibold text-gray-900">ingeniería comercial</span> que erradica la especulación. Los datos demuestran que el acompañamiento directo supera con creces a los cursos pasivos tradicionales.
              </p>
            </div>

            {/* Core Metrics Grid (Dashboard Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="border border-gray-200 p-5 rounded bg-gray-50/50 space-y-1">
                <div className="text-3xl font-extrabold font-mono text-[#FF8D0F]">300+</div>
                <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">Estudiantes Activos</p>
                <p className="text-[11px] text-gray-500">Operando dentro y fuera de EE. UU.</p>
              </div>

              <div className="border border-gray-200 p-5 rounded bg-gray-50/50 space-y-1">
                <div className="text-3xl font-extrabold font-mono text-[#FF8D0F]">$10k+</div>
                <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">Ventas Iniciales</p>
                <p className="text-[11px] text-gray-500">Promedio en fases tempranas</p>
              </div>

              <div className="border border-gray-200 p-5 rounded bg-gray-50/50 space-y-1">
                <div className="text-3xl font-extrabold font-mono text-[#FF8D0F]">95%+</div>
                <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">Tasa de Ejecución</p>
                <p className="text-[11px] text-gray-500">Finalización con mentoría 1:1</p>
              </div>
            </div>
          </section>

          {/* Sección 2: Estándar Wholesale */}
          <section id="metricas" className="bg-white border border-gray-300 rounded-md p-8 shadow-sm space-y-6 scroll-mt-28">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-gray-900">02. El Estándar del Sistema Wholesale</h2>
              <span className="text-xs font-mono px-2.5 py-1 bg-gray-100 text-gray-700 rounded border border-gray-200">System Standards</span>
            </div>
            
            <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                A diferencia del modelo de marca propia (<span className="italic">Private Label</span>), donde el riesgo de capital inicial en inventarios sin historial es crítico, nuestro sistema se fundamenta en activos comerciales validados:
              </p>

              <div className="bg-gray-50 border-l-2 border-gray-900 p-5 space-y-3 font-mono text-xs">
                <p className="font-bold text-gray-900 uppercase tracking-wider">Pilares de validación operativa:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-[#FF8D0F] font-bold">▪</span>
                    <span><strong>Cero adivinanzas:</strong> Comercialización exclusiva de marcas con demanda orgánica masiva y comprobada.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF8D0F] font-bold">▪</span>
                    <span><strong>Cuentas blindadas:</strong> Protocolos estrictos de cumplimiento normativo y gestión de facturación autorizada.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF8D0F] font-bold">▪</span>
                    <span><strong>Márgenes predecibles:</strong> Análisis financiero automatizado basado en ROI, tarifas FBA y rotación de stock.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 3: Casos Reales */}
          <section id="casos" className="bg-white border border-gray-300 rounded-md p-8 shadow-sm space-y-6 scroll-mt-28">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-gray-900">03. Empresas Escaladas Desde Cero</h2>
              <span className="text-xs font-mono px-2.5 py-1 bg-gray-100 text-gray-700 rounded border border-gray-200">Case Studies</span>
            </div>
            
            <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                Nuestros participantes provienen de perfiles diversos: desde profesionales independientes sin experiencia previa en e-commerce hasta operadores estancados por dependencias de intermediarios.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="border border-gray-200 p-5 rounded bg-gray-50/30 space-y-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-gray-200 text-gray-800 rounded">CASO #01</span>
                  <h3 className="font-bold text-gray-900 text-sm">Cuentas corporativas estables</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Establecimiento de líneas de suministro directas con distribuidores autorizados en EE. UU., eliminando intermediarios y asegurando stock recurrente.
                  </p>
                </div>

                <div className="border border-gray-200 p-5 rounded bg-gray-50/30 space-y-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-gray-200 text-gray-800 rounded">CASO #02</span>
                  <h3 className="font-bold text-gray-900 text-sm">Reestructuración de cuentas estancadas</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Vendedores con formación pasiva previa que, mediante auditoría de inventario y mentoría 1:1, optimizaron su rentabilidad neta y flujo de caja.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 4: El Diferencial */}
          <section id="diferencial" className="bg-white border border-gray-300 rounded-md p-8 shadow-sm space-y-6 scroll-mt-28">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-gray-900">04. Por qué se Alcanza una Alta Tasa de Éxito</h2>
              <span className="text-xs font-mono px-2.5 py-1 bg-gray-100 text-gray-700 rounded border border-gray-200">Execution Quality</span>
            </div>
            
            <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                La diferencia competitiva no radica en tácticas de marketing efímeras, sino en la calidad de la arquitectura de acompañamiento técnico:
              </p>

              <div className="bg-gray-900 text-white p-6 rounded space-y-2 font-mono text-xs">
                <p className="text-[#FF8D0F] font-bold">DIRECTRIZ DE VALOR:</p>
                <p className="text-sm font-sans font-semibold text-gray-100">
                  &quot;No te dejamos solo frente a las planillas y los proveedores. Trabajamos mano a mano durante 12 semanas.&quot;
                </p>
                <p className="text-gray-400 pt-2 text-[11px]">
                  Cada decisión crítica de aprovisionamiento cuenta con la validación de operadores con trayectoria de siete cifras.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 5: Manifiesto / Sin Atajos */}
          <section id="vision" className="bg-white border border-gray-300 rounded-md p-8 shadow-sm space-y-6 scroll-mt-28">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-gray-900">05. Construimos Empresas, no Ilusiones</h2>
              <span className="text-xs font-mono px-2.5 py-1 bg-gray-100 text-gray-700 rounded border border-gray-200">Core Values</span>
            </div>
            
            <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-900">
                Si buscas enriquecimiento rápido sin disciplina operativa ni rigor financiero, este programa no es para ti.
              </p>
              <p>
                Pero si estás listo para adoptar un protocolo profesional, respaldado por datos reales y ejecutado con estándares corporativos...
              </p>
              <p className="text-sm font-bold text-gray-900 font-mono">
                [STATUS]: Los resultados validan el modelo. Es tu turno de estructurar tu negocio real.
              </p>
            </div>
          </section>

        </div>
      </div>

      {/* CTA Enterprise Block */}
      <section className="bg-white border-t border-gray-300 py-16 px-6 mt-12">
        <div className="max-w-3xl mx-auto text-center space-y-6 bg-gray-50 border border-gray-300 p-10 rounded-md shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            ¿Listo para construir tu negocio real en Amazon?
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            Plazas limitadas por ciclo para garantizar rigor operativo y atención personalizada directa.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://go.conrafba.com/calendario"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF8D0F] hover:bg-[#e07b0a] text-black font-bold text-xs tracking-wider uppercase py-3.5 px-6 rounded transition-colors duration-150 shadow-sm"
            >
              Agenda una llamada de diagnóstico
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