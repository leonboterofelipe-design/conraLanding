import React from 'react';
import Link from 'next/link';

export default function TerminosDeServicioPage() {
  const lastUpdated = "7 de junio de 2026"; // Fecha de vigencia estándar

  return (
    <main className="min-h-screen bg-black text-gray-300 py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Encabezado */}
        <div className="space-y-4 border-b border-zinc-800 pb-8">
          <span className="text-[#FF8D0F] font-semibold tracking-wider uppercase text-xs">
            Marco Legal — CONRA FBA
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Términos y Condiciones de Servicio
          </h1>
          <p className="text-sm text-gray-400">
            Última actualización: <strong className="text-white">{lastUpdated}</strong>
          </p>
        </div>

        {/* Contenido Legal Estructurado */}
        <div className="space-y-8 leading-relaxed text-base">
          
          {/* Sección 1 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">1. Introducción y Aceptación</h2>
            <p>
              Bienvenido a <strong>CONRA FBA</strong> (operado y mantenido por <strong>DIGITAL BUSINESS COL</strong> en conjunto con <strong>Loaldi Consulting Group LLC</strong>). Al acceder a nuestro sitio web ubicado en <span className="text-white font-mono text-sm">conrafba.com</span>, adquirir nuestros programas de mentoría, participar en nuestras comunidades o consumir nuestros recursos gratuitos, aceptas cumplir y estar sujeto a los presentes Términos de Servicio. Si no estás de acuerdo con alguna parte de estos términos, te solicitamos que no utilices nuestros servicios ni navegues por el sitio web.
            </p>
          </section>

          {/* Sección 2 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">2. Naturaleza del Servicio y Descargo de Responsabilidad Comercial</h2>
            <p>
              CONRA FBA es un programa de educación, capacitación comercial y mentoría privada enfocado en el modelo de comercio electrónico <strong>Amazon Wholesale</strong>. 
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                <strong className="text-white">No somos una oportunidad de enriquecimiento rápido:</strong> Nuestros servicios no constituyen esquemas para &ldquo;hacerse rico rápido&rdquo; ni garantizan ingresos fijos o automáticos.
              </li>
              <li>
                <strong className="text-white">Esfuerzo y Capital Requerido:</strong> Construir un negocio de comercio electrónico requiere capital de inversión inicial, tiempo, disciplina, estudio y ejecución constante por parte del alumno.
              </li>
              <li>
                <strong className="text-white">Independencia de Plataformas:</strong> CONRA FBA es una entidad educativa privada e independiente. No está respaldada, afiliada, patrocinada ni oficialmente asociada por Amazon.com, Inc. o sus subsidiarias.
              </li>
            </ul>
          </section>

          {/* Sección 3 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">3. Resultados y Variabilidad de Ingresos</h2>
            <p>
              Cualquier caso de éxito, testimonio o cifra de facturación mostrada en este sitio web o en nuestras sesiones de entrenamiento (como referencias a más de $10,000 en ventas o facturación de siete cifras) corresponde a experiencias reales de fundadores o alumnos avanzados. Sin embargo, <strong>estos resultados no son típicos ni garantizados</strong>. Los resultados de cada usuario dependen enteramente de su capacidad de ejecución, experiencia previa, capital invertido, dedicación y condiciones cambiantes del mercado en Amazon.
            </p>
          </section>

          {/* Sección 4 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">4. Propiedad Intelectual y Confidencialidad</h2>
            <p>
              Todo el contenido proporcionado a través de CONRA FBA —incluyendo pero no limitado a la biblioteca de implementación, grabaciones de mentorías 1:1, clases grupales, herramientas de Inteligencia Artificial (GPTs exclusivos), guías, estructuras de análisis y manuales— es propiedad exclusiva de Loaldi Consulting Group LLC. 
            </p>
            <p>
              El acceso al programa otorga una licencia de uso personal, intransferible y no comercial. Queda estrictamente prohibida la reproducción, distribución, comercialización o divulgación no autorizada de cualquier material provisto por la marca.
            </p>
          </section>

          {/* Sección 5 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">5. Conducta del Usuario y Comunidad</h2>
            <p>
              Los participantes de las mentorías y comunidades privadas de CONRA FBA deben mantener un comportamiento profesional y respetuoso. Nos reservamos el derecho de revocar el acceso a cualquier usuario que incurra en faltas de respeto, acoso, divulgación de información confidencial de otros alumnos o uso indebido de los canales de comunicación de la academia, sin derecho a reembolso.
            </p>
          </section>

          {/* Sección 6 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">6. Limitación de Responsabilidad</h2>
            <p>
              Loaldi Consulting Group LLC y DIGITAL BUSINESS COL no se hacen responsables por suspensiones de cuentas de vendedor en Amazon, cambios en las políticas de la plataforma de terceros, pérdidas de inventario o fluctuaciones financieras derivadas de las operaciones comerciales que los alumnos realicen de manera independiente. Las decisiones de compra, negociación y gestión empresarial son responsabilidad exclusiva del alumno.
            </p>
          </section>

          {/* Sección 7 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">7. Modificaciones a los Términos</h2>
            <p>
              Nos reservamos el derecho de modificar o actualizar estos Términos de Servicio en cualquier momento. Las modificaciones entrarán en vigencia de forma inmediata tras su publicación en este sitio web. El uso continuado de la plataforma constituirá la aceptación de dichos cambios.
            </p>
          </section>

          {/* Sección 8 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">8. Contacto y Soporte</h2>
            <p>
              Para cualquier duda relacionada con estos términos, contratos o servicios, puedes ponerte en contacto con nuestro equipo a través de los canales oficiales:
            </p>
            <ul className="list-none space-y-1 text-white font-medium">
              <li>Correo electrónico: <a href="mailto:info@conrafba.com" className="text-[#FF8D0F] hover:underline">info@conrafba.com</a></li>
              <li>WhatsApp de Soporte: <a href="https://wa.me/17868981208" target="_blank" rel="noopener noreferrer" className="text-[#FF8D0F] hover:underline">+1 (786) 898-1208</a></li>
            </ul>
          </section>

        </div>

        {/* CTA de Retorno */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link
            href="/"
            className="text-sm font-semibold text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            ← Volver al inicio
          </Link>
          <a
            href="https://go.conrafba.com/calendario"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF8D0F] text-black font-bold py-3 px-6 rounded-md hover:bg-[#e07b0d] transition-colors shadow-lg text-sm"
          >
            Agendar una llamada
          </a>
        </div>

      </div>
    </main>
  );
}