'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LoQueHacemosPage() {
  const [activeSection, setActiveSection] = useState('modelo');

  const sections = [
    { id: 'modelo', label: '01. Modelo Wholesale', title: 'Infraestructura del Negocio' },
    { id: 'analisis', label: '02. Analítica de Datos', title: 'Criterios de Viabilidad' },
    { id: 'proveedores', label: '03. Suministro Directo', title: 'Relaciones Comerciales' },
    { id: 'logistica', label: '04. Operación FBA / FBM', title: 'Gestión Logística' },
    { id: 'mentoria', label: '05. Acompañamiento 1:1', title: 'Mentoría Operativa' },
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
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

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
            <span className="text-gray-900 font-semibold">Arquitectura Metodológica</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            Lo que hacemos: Sistema Operativo Wholesale
          </h1>
          <p className="text-base text-gray-600 max-w-3xl leading-relaxed">
            Eliminamos la especulación del e-commerce mediante un protocolo basado en analítica de datos, relaciones de suministro directo y ejecución estricta de procesos corporativos en Amazon.
          </p>
        </div>
      </header>

      {/* Main Layout Grid (Diseño Modular Estilo AWS/Seller Central) */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        
        {/* Sidebar de Navegación Estricta (Scroll-Spy) */}
        <aside className="md:col-span-1 md:sticky md:top-24">
          <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm space-y-1">
            <p className="text-[11px] font-bold text-gray-400 tracking-widest uppercase px-3 pb-2 border-b border-gray-100">
              Índice Operativo
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

          {/* Sección 1 */}
          <section id="modelo" className="bg-white border border-gray-300 rounded-md p-8 shadow-sm space-y-6 scroll-mt-28">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-gray-900">01. Arquitectura del Modelo Wholesale</h2>
              <span className="text-xs font-mono px-2.5 py-1 bg-gray-100 text-gray-700 rounded border border-gray-200">Core System</span>
            </div>
            <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                El error crítico del novato en Amazon es intentar competir mediante <span className="font-semibold text-gray-900">Private Label</span>: fabricar productos genéricos en China, asumir costos logísticos masivos, gastar capital en publicidad especulativa y cruzar los dedos.
              </p>
              <p>
                En <strong className="text-gray-900">CONRA FBA</strong> operamos exclusivamente bajo el modelo <span className="underline decoration-[#FF8D0F] decoration-2 underline-offset-2">Amazon Wholesale</span>. Comercializamos marcas y productos que ya cuentan con demanda orgánica comprobada y transacciones diarias masivas dentro de la plataforma.
              </p>
              <div className="bg-gray-50 border-l-2 border-gray-900 p-4 text-xs font-mono text-gray-600 space-y-1">
                <p className="font-bold text-gray-900">Parámetro de ejecución:</p>
                <p>• Cero desarrollo de marca desde cero.</p>
                <p>• Cero dependencia de campañas publicitarias de lanzamiento (PPC agresivo).</p>
                <p>• Activos comerciales validados por el mercado global.</p>
              </div>
            </div>
          </section>

          {/* Sección 2 */}
          <section id="analisis" className="bg-white border border-gray-300 rounded-md p-8 shadow-sm space-y-6 scroll-mt-28">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-gray-900">02. Analítica de Datos y Viabilidad</h2>
              <span className="text-xs font-mono px-2.5 py-1 bg-gray-100 text-gray-700 rounded border border-gray-200">Data-Driven</span>
            </div>
            <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                Ninguna decisión de aprovisionamiento se toma bajo intuición o recomendaciones subjetivas. Cada oportunidad de inventario pasa por un filtro algorítmico y financiero estricto:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="border border-gray-200 p-4 rounded bg-gray-50/50 space-y-1">
                  <p className="text-xs font-bold font-mono text-[#FF8D0F]">MÉTRICA 01</p>
                  <h3 className="font-bold text-gray-900 text-sm">ROI y Márgenes Netos</h3>
                  <p className="text-xs text-gray-600">Cálculo exacto de tarifas FBA, costos de almacenamiento, impuestos y retorno sobre el capital invertido.</p>
                </div>
                <div className="border border-gray-200 p-4 rounded bg-gray-50/50 space-y-1">
                  <p className="text-xs font-bold font-mono text-[#FF8D0F]">MÉTRICA 02</p>
                  <h3 className="font-bold text-gray-900 text-sm">BSR (Best Sellers Rank)</h3>
                  <p className="text-xs text-gray-600">Evaluación de la velocidad histórica de rotación y volumen de ventas mensual garantizado.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 3 */}
          <section id="proveedores" className="bg-white border border-gray-300 rounded-md p-8 shadow-sm space-y-6 scroll-mt-28">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-gray-900">03. Suministro Directo y Relaciones Comerciales</h2>
              <span className="text-xs font-mono px-2.5 py-1 bg-gray-100 text-gray-700 rounded border border-gray-200">B2B Compliance</span>
            </div>
            <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                Te capacitamos para establecer contacto directo, formal y profesional con marcas y distribuidores mayoristas autorizados en Estados Unidos.
              </p>
              <ul className="space-y-2 border-l-2 pl-4 text-sm" style={{ borderColor: '#FF8D0F' }}>
                <li><strong>Cuentas de distribución legítimas:</strong> Acceso a facturas comerciales directas aceptadas por Amazon.</li>
                <li><strong>Blindaje de cuenta:</strong> Mitigación total de riesgos por falsas autenticidades o restricciones de categoría.</li>
                <li><strong>Negociación sin intermediarios:</strong> Obtención de mejores condiciones de pago y descuentos por volumen.</li>
              </ul>
            </div>
          </section>

          {/* Sección 4 */}
          <section id="logistica" className="bg-white border border-gray-300 rounded-md p-8 shadow-sm space-y-6 scroll-mt-28">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-gray-900">04. Gestión Logística (FBA & FBM)</h2>
              <span className="text-xs font-mono px-2.5 py-1 bg-gray-100 text-gray-700 rounded border border-gray-200">Supply Chain</span>
            </div>
            <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                Estructuramos la cadena de suministro desde el proveedor hasta los centros de cumplimiento de Amazon (FBA) o la gestión propia (FBM) mediante protocolos estandarizados.
              </p>
              <div className="bg-gray-900 text-white p-6 rounded space-y-2 font-mono text-xs">
                <p className="text-[#FF8D0F] font-bold">PROTOCOLO DE OPERACIÓN:</p>
                <p>1. Recepción y preparación de inventario en centros logísticos autorizados.</p>
                <p>2. Etiquetado bajo estándares normativos de Amazon (FNSKU).</p>
                <p>3. Control financiero de flujos de caja y reposición automática de stock.</p>
              </div>
            </div>
          </section>

          {/* Sección 5 */}
          <section id="mentoria" className="bg-white border border-gray-300 rounded-md p-8 shadow-sm space-y-6 scroll-mt-28">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-gray-900">05. Acompañamiento 1:1 (Programa de 12 Semanas)</h2>
              <span className="text-xs font-mono px-2.5 py-1 bg-gray-100 text-gray-700 rounded border border-gray-200">Direct Mentorship</span>
            </div>
            <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                No vendemos un curso pasivo con videos pregrabados que acumulan polvo digital. CONRA FBA opera bajo un modelo de <span className="font-semibold text-gray-900">consultoría y mentoría operativa directa</span>.
              </p>
              <p>
                Trabajas de la mano con mentores que operan activamente negocios de más de 7 cifras anuales, validando cada paso operativo para evitar errores financieros costosos.
              </p>
            </div>
          </section>

        </div>
      </div>

      {/* CTA Enterprise Block */}
      <section className="bg-white border-t border-gray-300 py-16 px-6 mt-12">
        <div className="max-w-3xl mx-auto text-center space-y-6 bg-gray-50 border border-gray-300 p-10 rounded-md shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            ¿Listo para estructurar una operación real en Amazon?
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            Agenda una sesión diagnóstica con nuestro equipo técnico para evaluar la viabilidad de tu capital y tus objetivos comerciales.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://go.conrafba.com/calendario"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF8D0F] hover:bg-[#e07b0a] text-black font-bold text-xs tracking-wider uppercase py-3.5 px-6 rounded transition-colors duration-150 shadow-sm"
            >
              Agendar llamada de diagnóstico
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