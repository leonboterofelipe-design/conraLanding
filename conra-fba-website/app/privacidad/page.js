import React from 'react';
import Link from 'next/link';

export default function PoliticaDePrivacidadPage() {
  const lastUpdated = "27 de julio de 2024";

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

        {/* Introducción */}
        <div className="space-y-4 text-base leading-relaxed">
          <p className="text-gray-300">
            Gracias por visitar esta página. Entendemos la importancia de la protección de tus datos personales y por eso queremos informarte de forma clara y transparente sobre cómo los tratamos, quién los gestiona y para qué fines.
          </p>
          <p className="text-gray-300">
            Esta Política de Privacidad aplica exclusivamente a los datos personales recabados a través del sitio web www.conrafba.com, y no a los recabados por terceros incluso si están enlazados desde este sitio.
          </p>
        </div>

        {/* Datos del Responsable */}
        <div className="space-y-3 bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white">Datos del Responsable</h2>
          <ul className="list-none space-y-2 text-gray-300">
            <li><strong className="text-white">Denominación social:</strong> Loaldi Consulting Group LLC.</li>
            <li><strong className="text-white">NIF/EIN:</strong> 41-4647064</li>
            <li><strong className="text-white">Domicilio:</strong> 4751 nw 97 ct . Doral . Florida . 33178</li>
            <li><strong className="text-white">Email de contacto:</strong> <a href="mailto:info@conrafba.com" className="text-[#FF8D0F] hover:underline">info@conrafba.com</a></li>
            <li><strong className="text-white">Actividad:</strong> Educación Empresarial</li>
          </ul>
          <p className="pt-3 text-sm text-gray-400">
            Loaldi Consulting Group LLC. garantiza el cumplimiento del Reglamento General de Protección de Datos (UE) 2016/679 (RGPD) y las demás normativas aplicables.
          </p>
        </div>

        {/* Contenido Legal Estructurado */}
        <div className="space-y-8 leading-relaxed text-base">
          
          {/* Sección 1 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">1. Principios aplicados al tratamiento de tus datos</h2>
            <p className="text-gray-300">Aplicamos los principios exigidos por el RGPD:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong className="text-white">Licitud, lealtad y transparencia:</strong> Siempre solicitamos tu consentimiento informado y claro.</li>
              <li><strong className="text-white">Minimización:</strong> Solo solicitamos los datos estrictamente necesarios.</li>
              <li><strong className="text-white">Limitación del plazo de conservación:</strong> Conservamos los datos solo durante el tiempo necesario.</li>
              <li><strong className="text-white">Integridad y confidencialidad:</strong> Garantizamos medidas adecuadas para proteger tus datos.</li>
            </ul>
          </section>

          {/* Sección 2 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">2. Finalidad, legitimación y tratamiento de datos</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2.1 Finalidad del tratamiento</h3>
                <p className="text-gray-300 mb-2">Los datos recabados se utilizan con los siguientes fines:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>Venta de formación sobre negocios online.</li>
                  <li>Venta de ebooks.</li>
                  <li>Gestión de suscriptores y usuarios registrados.</li>
                  <li>Envío de boletines, comunicaciones y actualizaciones.</li>
                  <li>Administración de programas de afiliados.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2.2 Consentimiento</h3>
                <p className="text-gray-300">La base legal para el tratamiento de tus datos es tu consentimiento, otorgado mediante doble opt-in. Puedes revocar tu consentimiento en cualquier momento.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2.3 Menores de edad</h3>
                <p className="text-gray-300">Si eres menor de 14 años, necesitarás autorización de tus padres o tutores para registrarte. En caso contrario, no almacenaremos tus datos.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2.4 Categoría de datos</h3>
                <p className="text-gray-300">Solo se tratan datos identificativos (nombre, email, dirección IP, etc.). No recabamos datos especialmente protegidos.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2.5 Plazo de conservación</h3>
                <p className="text-gray-300">Los datos se conservarán hasta que solicites su eliminación o durante el plazo legal correspondiente.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2.6 Veracidad de los datos</h3>
                <p className="text-gray-300">Eres responsable de la veracidad de los datos que proporciones. Loaldi Consulting Group LLC no se hace responsable por errores o datos falsos proporcionados por el usuario.</p>
              </div>
            </div>
          </section>

          {/* Sección 3 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">3. Cumplimiento normativo</h2>
            <p className="text-gray-300">Tus datos podrán almacenarse en sistemas de Loaldi Consulting Group LLC y utilizarse para gestionar solicitudes o el envío de información comercial relacionada. Puedes oponerte al tratamiento para fines publicitarios escribiendo a <a href="mailto:info@conrafba.com" className="text-[#FF8D0F] hover:underline">info@conrafba.com</a>.</p>
          </section>

          {/* Sección 4 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">4. Medidas de seguridad</h2>
            <p className="text-gray-300">Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos personales frente a accesos no autorizados, pérdidas, usos indebidos o alteraciones. Nuestro sitio cuenta con cifrado SSL.</p>
          </section>

          {/* Sección 5 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">5. Derechos del usuario</h2>
            <p className="text-gray-300">Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación y oposición enviando un email a <a href="mailto:info@conrafba.com" className="text-[#FF8D0F] hover:underline">info@conrafba.com</a>.</p>
          </section>

          {/* Sección 6 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">6. Enlaces a terceros</h2>
            <p className="text-gray-300">Este sitio puede contener enlaces a sitios de terceros. No somos responsables de sus políticas de privacidad ni de sus contenidos.</p>
          </section>

          {/* Sección 7 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">7. Cambios en esta política</h2>
            <p className="text-gray-300">Nos reservamos el derecho a modificar esta Política de Privacidad, informando con al menos 10 días de antelación antes de su aplicación.</p>
          </section>

          {/* Sección 8 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">8. Encargados del tratamiento</h2>
            <p className="text-gray-300 mb-3">Los servicios necesarios para operar este sitio pueden implicar el uso de herramientas de terceros como:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong className="text-white">Hosting y plataforma web:</strong> Wix.</li>
              <li><strong className="text-white">Envío de emails:</strong> GetResponse, ActiveCampaign, Mailchimp, ClickFunnels.</li>
              <li><strong className="text-white">Pasarelas de pago:</strong> Stripe, PayPal, Ebanx.</li>
              <li><strong className="text-white">Analítica y publicidad:</strong> Google Analytics, Facebook Pixel.</li>
              <li><strong className="text-white">LMS:</strong> Thinkific, Skool.</li>
            </ul>
            <p className="pt-3 text-gray-300 text-sm">Estos proveedores pueden tener servidores ubicados fuera de la UE. Se adoptan las medidas necesarias para garantizar un nivel adecuado de protección de datos.</p>
          </section>

          {/* Sección 9 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">9. Sistemas de captación</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Formularios de suscripción.</li>
              <li>Cookies (consulta la Política de Cookies para más información).</li>
              <li>Compra de productos.</li>
              <li>Análisis de patrones de navegación para publicidad personalizada.</li>
            </ul>
          </section>

          {/* Sección 10 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">10. Propiedad intelectual e industrial</h2>
            <p className="text-gray-300">Todos los contenidos del sitio web www.conrafba.com son propiedad de Loaldi Consulting Group LLC o de sus licenciantes, incluyendo textos, imágenes, marcas, logotipos, diseños y software. Se prohíbe la reproducción, distribución o comunicación pública sin autorización previa, salvo para uso personal y no comercial.</p>
          </section>

          {/* Sección 11 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">11. Revocación del consentimiento</h2>
            <p className="text-gray-300">Puedes revocar tu consentimiento escribiendo a <a href="mailto:info@conrafba.com" className="text-[#FF8D0F] hover:underline">info@conrafba.com</a> o utilizando los enlaces disponibles en nuestros correos. Esta revocación no tendrá efecto retroactivo.</p>
          </section>

        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-zinc-800 text-center text-sm text-gray-400">
          <p>Para más información sobre nuestra Política de Cookies o términos de uso, contáctanos en <a href="mailto:info@conrafba.com" className="text-[#FF8D0F] hover:underline">info@conrafba.com</a>.</p>
        </div>

        {/* CTA de Retorno */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
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