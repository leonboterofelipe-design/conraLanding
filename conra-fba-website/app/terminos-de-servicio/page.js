import React from 'react';
import Link from 'next/link';

export default function AvisoLegalPage() {
  const lastUpdated = "23 de julio de 2024";

  return (
    <main className="min-h-screen bg-black text-gray-300 py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Encabezado */}
        <div className="space-y-4 border-b border-zinc-800 pb-8">
          <span className="text-[#FF8D0F] font-semibold tracking-wider uppercase text-xs">
            Marco Legal — CONRA FBA
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Aviso Legal y Términos de Uso
          </h1>
          <p className="text-sm text-gray-400">
            Última actualización: <strong className="text-white">{lastUpdated}</strong>
          </p>
        </div>

        {/* Introducción */}
        <div className="space-y-4 text-base leading-relaxed">
          <p className="text-gray-300">
            Este documento establece los Términos de uso del Sitio y las Condiciones de contratación de Productos o Servicios. Loaldi Consulting Group LLC es denominado en este documento como el <strong className="text-white">PROVEEDOR</strong> y usted como el <strong className="text-white">CLIENTE</strong>, quien recibe nuestros productos o servicios, sean gratuitos o de pago.
          </p>
        </div>

        {/* Datos del Responsable (Sección 1.1) */}
        <div className="space-y-3 bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white">1.1 Datos identificativos del responsable</h2>
          <ul className="list-none space-y-2 text-gray-300">
            <li><strong className="text-white">Denominación social:</strong> Loaldi Consulting Group LLC</li>
            <li><strong className="text-white">Domicilio social:</strong> 4751 nw 97 ct . Doral . Florida . 33178</li>
            <li><strong className="text-white">Email:</strong> <a href="mailto:info@conrafba.com" className="text-[#FF8D0F] hover:underline">info@conrafba.com</a></li>
            <li><strong className="text-white">Actividad:</strong> Educación Empresarial</li>
          </ul>
        </div>

        {/* Contenido Legal Estructurado */}
        <div className="space-y-8 leading-relaxed text-base">
          
          {/* Sección 1 Continuación */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white">1. Aviso legal y términos de uso</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">1.2 Finalidad del sitio web</h3>
                <p className="text-gray-300 mb-2">Los servicios prestados por el PROVEEDOR son:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>Venta de formación y servicios sobre negocios online.</li>
                  <li>Venta de ebooks.</li>
                  <li>Gestión de suscriptores y usuarios de la web.</li>
                  <li>Suministro de contenidos en el blog.</li>
                  <li>Gestión de afiliados y pagos relacionados.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">1.3 Usuarios</h3>
                <p className="text-gray-300">El acceso o uso de este sitio web atribuye la condición de USUARIO, aceptando desde dicho momento estos términos de uso. El simple uso del sitio web no implica relación laboral o comercial alguna.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">1.4 Uso del sitio web y captura de información</h3>
                
                <h4 className="text-base font-semibold text-white mt-4 mb-2">1.4.1 Uso del sitio web</h4>
                <p className="text-gray-300 mb-2">La web Conrafba.com ("LA WEB") proporciona acceso a contenidos propiedad de Loaldi Consulting Group LLC. El USUARIO asume la responsabilidad del uso adecuado y se compromete a no utilizar el sitio para:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-300 mb-2">
                  <li>Actividades ilegales o contrarias al orden público.</li>
                  <li>Difusión de contenidos discriminatorios o violentos.</li>
                  <li>Deteriorar los sistemas físicos/lógicos de la web o terceros.</li>
                  <li>Acceder sin autorización a cuentas de otros usuarios.</li>
                </ul>
                <p className="text-gray-300">Loaldi Consulting Group LLC se reserva el derecho de eliminar comentarios o aportaciones que vulneren estos principios.</p>

                <h4 className="text-base font-semibold text-white mt-4 mb-2">1.4.2 Captura de información</h4>
                <p className="text-gray-300 mb-2">Se realiza mediante:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-300 mb-2">
                  <li>Formularios de contacto y suscripción.</li>
                  <li>Formularios de venta.</li>
                  <li>Cookies de rastreo.</li>
                </ul>
                <p className="text-gray-300 mb-2">El USUARIO consiente el tratamiento de datos según la infraestructura de Wix, ClickFunnels, Go High Level u otras, conforme a sus políticas de privacidad. Al suscribirse o contratar, acepta el almacenamiento de sus datos en ficheros "USUARIOS DE LA WEB Y SUSCRIPTORES" o "CLIENTES Y/O PROVEEDORES".</p>
                <p className="text-gray-300">El PROVEEDOR podrá utilizar testimonios del CLIENTE con fines promocionales, incluyendo su nombre, imagen o voz, sin compensación monetaria alguna.</p>
              </div>
            </div>
          </section>

          {/* Sección 2 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">2. Propiedad intelectual e industrial</h2>
            <p className="text-gray-300">Loaldi Consulting Group LLC es titular de todos los derechos de propiedad intelectual del sitio web y sus elementos. Cualquier uso no autorizado constituirá una infracción grave.</p>
            <p className="text-gray-300">Queda prohibida la reproducción o distribución total o parcial de cualquier contenido sin autorización. El USUARIO se compromete a respetar estos derechos.</p>
            <p className="text-gray-300">La licencia de uso es personal e intransferible. Compartir acceso o licencia será motivo de acciones legales.</p>
          </section>

          {/* Sección 3 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">3. Exclusión de garantías y responsabilidad</h2>
            <p className="text-gray-300 mb-2">Loaldi Consulting Group LLC no se hace responsable por:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300 mb-2">
              <li>Errores u omisiones en los contenidos.</li>
              <li>Interrupciones del servicio.</li>
              <li>Presencia de virus a pesar de las medidas tecnológicas adoptadas.</li>
            </ul>
            <p className="text-gray-300">Los resultados dependen del esfuerzo del CLIENTE. No se ofrecen garantías explícitas o implícitas de resultados. El CLIENTE reconoce asumir todos los riesgos y libera de responsabilidad al PROVEEDOR.</p>
          </section>

          {/* Sección 4 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">4. Modificaciones</h2>
            <p className="text-gray-300">Loaldi Consulting Group LLC podrá modificar sin previo aviso los contenidos, servicios o configuración del sitio.</p>
          </section>

          {/* Sección 5 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">5. Política de enlaces</h2>
            <p className="text-gray-300 mb-2">Los enlaces desde otros portales a este sitio estarán sujetos a:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300 mb-2">
              <li>No reproducir servicios o contenidos sin autorización.</li>
              <li>No usar frames, enlaces IMG ni deep-links sin permiso.</li>
              <li>No difundir información falsa sobre el sitio.</li>
            </ul>
            <p className="text-gray-300">El establecimiento del hipervínculo no implica relación alguna ni responsabilidad sobre los contenidos enlazados. Loaldi Consulting Group LLC no es responsable de sitios de terceros accesibles desde su web.</p>
          </section>

          {/* Sección 6 & 7 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">6. Derecho de exclusión y 7. Generalidades</h2>
            <p className="text-gray-300">El PROVEEDOR se reserva el derecho a denegar el acceso a quienes incumplan estos términos. Asimismo, el PROVEEDOR ejercerá acciones legales contra quienes hagan uso indebido de la web.</p>
          </section>

          {/* Sección 8 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">8. Modificación de las condiciones</h2>
            <p className="text-gray-300">Estas condiciones pueden ser modificadas y estarán vigentes hasta su sustitución por otras debidamente publicadas.</p>
          </section>

          {/* Sección 9 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">9. Reclamaciones y dudas</h2>
            <p className="text-gray-300">Para reclamaciones, escribir a <a href="mailto:info@conrafba.com" className="text-[#FF8D0F] hover:underline">info@conrafba.com</a> indicando nombre, producto adquirido y motivo de la reclamación.</p>
          </section>

          {/* Sección 10 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">10. Condiciones de venta</h2>
            <p className="text-gray-300 mb-2">Estas condiciones regulan la contratación de cursos online. El acceso posterior al sitio implica su aceptación. Medios de pago disponibles:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300">
              <li>Tarjetas (Visa, Mastercard, American Express).</li>
              <li>Pasarelas: Stripe, PayPal.</li>
            </ul>
          </section>

          {/* Sección 11 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">11. Ley aplicable y jurisdicción</h2>
            <p className="text-gray-300">Las relaciones entre el CLIENTE y el PROVEEDOR se rigen por la ley del estado de New Mexico, Estados Unidos. Las disputas se resolverán ante sus tribunales.</p>
          </section>

          {/* Sección 12 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">12. Causas de disolución del contrato</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-2">
              <li>Cancelación en los primeros 3 días desde el primer pago.</li>
              <li>El PROVEEDOR podrá pausar o cancelar servicios tras notificación al CLIENTE.</li>
              <li>Incumplimientos como falsedad de datos, abuso de soporte, críticas infundadas o violación de derechos.</li>
            </ul>
            <p className="text-gray-300">El contrato quedará disuelto y cesará el uso del servicio en caso de incurrir en estas causales.</p>
          </section>

        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-zinc-800 text-center text-sm text-gray-400">
          <p>Para más información sobre nuestras políticas, contáctanos en <a href="mailto:info@conrafba.com" className="text-[#FF8D0F] hover:underline">info@conrafba.com</a>.</p>
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