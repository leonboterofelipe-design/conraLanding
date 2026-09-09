import React from 'react';
import Link from 'next/link';

export default function PoliticaDePrivacidadPage() {
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
            Política de Privacidad
          </h1>
          <p className="text-sm text-gray-400">
            Última actualización: <strong className="text-white">{lastUpdated}</strong>
          </p>
        </div>

        {/* Contenido Legal Estructurado */}
        <div className="space-y-8 leading-relaxed text-base">
          
          {/* Sección 1 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">1. Responsable del Tratamiento de Datos</h2>
            <p>
              En <strong>CONRA FBA</strong>, operado por <strong>LOALDI CONSULTING LLC</strong> a través del dominio <span className="text-white font-mono text-sm">conrafba.com</span>, valoramos y respetamos tu privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos la información personal que nos proporcionas al visitar nuestro sitio web, registrarte en nuestros entrenamientos gratuitos, agendar llamadas o adquirir nuestros programas de mentoría en Amazon Wholesale.
            </p>
            <p>
              Al utilizar nuestro sitio web y nuestros servicios, aceptas las prácticas descritas en este documento. Si no estás de acuerdo con esta política, te pedimos que no utilices nuestros servicios ni nos proporciones tus datos personales.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 pt-2">
              <li><strong className="text-white">Entidad responsable:</strong> LOALDI CONSULTING LLC</li>
              <li><strong className="text-white">Sitio web oficial:</strong> conrafba.com</li>
              <li><strong className="text-white">Nombre comercial:</strong> CONRA FBA</li>
              <li><strong className="text-white">Correo electrónico:</strong> info@conrafba.com / manager@conrafba.com</li>
              <li><strong className="text-white">Contacto de WhatsApp:</strong> +1 (786) 898-1208</li>
            </ul>
          </section>

          {/* Sección 2 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">2. Información que Recopilamos</h2>
            <p>
              Recopilamos información personal que tú nos proporcionas de forma voluntaria cuando interactúas con nuestro sitio web, tales como:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                <strong className="text-white">Datos de identificación y contacto:</strong> Nombre y apellido, dirección de correo electrónico y número de teléfono / WhatsApp.
              </li>
              <li>
                <strong className="text-white">Datos de interacción y agenda:</strong> Información proporcionada al agendar una llamada de asesoría (a través de sistemas como Calendly) o al completar formularios en nuestras páginas de captura y entrenamiento gratuito.
              </li>
              <li>
                <strong className="text-white">Datos técnicos y de navegación:</strong> Dirección IP, tipo de navegador, dispositivo utilizado, páginas visitadas dentro de nuestro sitio web y datos recopilados a través de cookies o tecnologías similares de análisis y publicidad.
              </li>
            </ul>
          </section>

          {/* Sección 3 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">3. Finalidad del Uso de la Información</h2>
            <p>
              Los datos personales que recopilamos son utilizados estrictamente para los siguientes propósitos:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                <strong className="text-white">Prestación de servicios y programas:</strong> Gestionar el acceso a los entrenamientos gratuitos, coordinar las sesiones de mentoría 1:1 y administrar la relación con los alumnos del programa CONRA FBA.
              </li>
              <li>
                <strong className="text-white">Comunicación y soporte:</strong> Responder a tus consultas, enviarte recordatorios de citas o llamadas agendadas, y brindarte asistencia técnica o comercial.
              </li>
              <li>
                <strong className="text-white">Marketing y contenidos educativos:</strong> Enviarte correos electrónicos con información de valor, invitaciones a clases en vivo, actualizaciones sobre nuestros programas y ofertas comerciales relacionadas con el modelo de Amazon Wholesale. (Puedes darte de baja en cualquier momento utilizando el enlace incluido en nuestros correos).
              </li>
              <li>
                <strong className="text-white">Mejora del sitio web:</strong> Analizar el comportamiento de los usuarios para optimizar la experiencia de navegación, la seguridad y el rendimiento técnico de nuestra plataforma.
              </li>
            </ul>
          </section>

          {/* Sección 4 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">4. Con Quién Compartimos tu Información</h2>
            <p>
              No vendemos, comercializamos ni alquilamos tus datos personales a terceros. Compartimos información únicamente con proveedores de servicios tecnológicos de confianza que nos ayudan a operar nuestro negocio y sitio web, bajo estrictas obligaciones de confidencialidad:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                <strong className="text-white">Proveedores de infraestructura y hosting:</strong> (Ej. Namecheap) para el alojamiento del sitio web.
              </li>
              <li>
                <strong className="text-white">Plataformas de automatización y correo electrónico:</strong> Para el envío de comunicaciones y campañas de marketing.
              </li>
              <li>
                <strong className="text-white">Sistemas de gestión de citas y calendarios:</strong> (Ej. Calendly) para la coordinación de llamadas estratégicas.
              </li>
              <li>
                <strong className="text-white">Herramientas de análisis y publicidad:</strong> Para la medición de campañas de marketing digital.
              </li>
            </ul>
          </section>

          {/* Sección 5 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">5. Seguridad de los Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas, administrativas y físicas razonables para proteger tu información personal contra accesos no autorizados, alteraciones, divulgación o destrucción. Sin embargo, debes recordar que ningún sistema de transmisión por Internet o almacenamiento electrónico es 100% seguro, por lo que no podemos garantizar una seguridad absoluta.
            </p>
          </section>

          {/* Sección 6 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">6. Tus Derechos (Derechos ARCO)</h2>
            <p>
              Tienes el control sobre tu información personal. Como usuario, tienes derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong className="text-white">Acceso:</strong> Conocer qué datos personales tenemos sobre ti y cómo los utilizamos.</li>
              <li><strong className="text-white">Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
              <li><strong className="text-white">Cancelación / Supresión:</strong> Solicitar la eliminación de tus datos cuando ya no sean necesarios para los fines que fueron recopilados.</li>
              <li><strong className="text-white">Oposición:</strong> Oponerte al procesamiento de tus datos para fines de marketing directo en cualquier momento.</li>
            </ul>
            <p className="pt-2">
              Para ejercer cualquiera de estos derechos, puedes enviar una solicitud formal a nuestro correo electrónico: <a href="mailto:info@conrafba.com" className="text-[#FF8D0F] hover:underline">info@conrafba.com</a>.
            </p>
          </section>

          {/* Sección 7 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">7. Enlaces a Sitios de Terceros</h2>
            <p>
              Nuestro sitio web puede contener enlaces a páginas web de terceros (como redes sociales o pasarelas de pago externas). No somos responsables de las prácticas de privacidad ni del contenido de dichos sitios externos, por lo que te recomendamos leer las políticas de privacidad de cada sitio que visites.
            </p>
          </section>

          {/* Sección 8 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">8. Cambios en la Política de Privacidad</h2>
            <p>
              Nos reservamos el derecho de actualizar o modificar esta Política de Privacidad en cualquier momento. Cualquier cambio significativo será publicado en esta misma página con su respectiva fecha de actualización. Te recomendamos revisar esta sección periódicamente.
            </p>
          </section>

          {/* Sección 9 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">9. Contacto y Soporte</h2>
            <p>
              Si tienes dudas, preguntas o inquietudes acerca de esta Política de Privacidad o sobre el tratamiento de tus datos personales, puedes contactarnos directamente a través de los canales oficiales:
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