import React from 'react';
import Link from 'next/link';

export default function AvisoLegalPage() {
  const lastUpdated = "9 de septiembre de 2026";

  return (
    <main className="min-h-screen bg-black text-gray-300 py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Encabezado */}
        <div className="space-y-4 border-b border-zinc-800 pb-8">
          <span className="text-[#FF8D0F] font-semibold tracking-wider uppercase text-xs">
            Marco Legal — CONRA FBA
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Aviso Legal
          </h1>
          <p className="text-sm text-gray-400">
            Última actualización: <strong className="text-white">{lastUpdated}</strong>
          </p>
        </div>

        {/* Contenido Legal Estructurado */}
        <div className="space-y-8 leading-relaxed text-base">
          
          {/* Sección 1 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">1. Datos Identificativos y Titularidad</h2>
            <p>
              En cumplimiento con los deberes de información y transparencia legal, se detallan a continuación los datos identificativos del responsable y titular del sitio web <span className="text-white font-mono text-sm">conrafba.com</span>:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 pt-2">
              <li><strong className="text-white">Titular y entidad responsable:</strong> LOALDI CONSULTING LLC</li>
              <li><strong className="text-white">Nombre comercial:</strong> CONRA FBA</li>
              <li><strong className="text-white">Sitio web oficial:</strong> https://conrafba.com</li>
              <li><strong className="text-white">Correo electrónico de contacto:</strong> info@conrafba.com / manager@conrafba.com</li>
              <li><strong className="text-white">WhatsApp de soporte:</strong> +1 (786) 898-1208</li>
            </ul>
          </section>

          {/* Sección 2 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">2. Objeto del Sitio Web</h2>
            <p>
              El presente sitio web tiene por objeto principal proporcionar información detallada sobre los programas de mentoría, capacitación comercial, recursos formativos y entrenamientos orientados al desarrollo de negocios de comercio electrónico bajo el modelo <strong>Amazon Wholesale</strong>, dirigidos y operados por el mentor <strong>Conrado Loaldi</strong>.
            </p>
          </section>

          {/* Sección 3 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">3. Propiedad Intelectual e Industrial</h2>
            <p>
              Todos los contenidos albergados en este sitio web —incluyendo, a título enunciativo pero no limitativo, los textos, diseño gráfico, logotipos, iconos, imágenes, archivos de audio o vídeo, software, biblioteca de implementación, estructuras de análisis y herramientas de Inteligencia Artificial exclusivas— son propiedad exclusiva de <strong>LOALDI CONSULTING LLC</strong> o cuentan con las autorizaciones pertinentes para su uso.
            </p>
            <p>
              Queda expresamente prohibida la reproducción, distribución, comercialización o transformación no autorizada de cualquiera de estos elementos, constituyendo una infracción de los derechos de propiedad intelectual protegidos por la ley.
            </p>
          </section>

          {/* Sección 4 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">4. Exclusión de Garantías y Responsabilidad</h2>
            <p>
              El titular del sitio web no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal, o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>
            <p>
              Asimismo, la información contenida en la web tiene carácter orientativo sobre el modelo de negocio. CONRA FBA es una entidad educativa privada e independiente y no está respaldada, afiliada ni patrocinada por Amazon.com, Inc. Los resultados económicos específicos no están garantizados, ya que el éxito comercial depende de la ejecución, capacidad, dedicación y capital de cada usuario individual.
            </p>
          </section>

          {/* Sección 5 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">5. Política de Enlaces (Links)</h2>
            <p>
              En el caso de que en <span className="text-white font-mono text-sm">conrafba.com</span> se dispusiesen enlaces o hipervínculos hacia otros sitios de Internet, el titular no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud y constitucionalidad de cualquier material o información contenida en dichos hipervínculos.
            </p>
          </section>

          {/* Sección 6 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">6. Modificaciones del Aviso Legal</h2>
            <p>
              El titular se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través del mismo como la forma en la que estos aparezcan presentados o localizados.
            </p>
          </section>

          {/* Sección 7 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">7. Legislación Aplicable y Jurisdicción</h2>
            <p>
              La relación entre LOALDI CONSULTING LLC y los usuarios del sitio web se regirá por la normativa aplicable. Para la resolución de cualquier controversia que pudiera surgir, las partes se someterán a los juzgados y tribunales competentes de acuerdo con la normativa aplicable a cada caso, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
            </p>
          </section>

          {/* Sección 8 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">8. Contacto y Soporte</h2>
            <p>
              Para cualquier consulta, aclaración o notificación relacionada con este Aviso Legal, puedes comunicarte con nuestro equipo a través de los canales oficiales:
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