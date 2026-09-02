import React from 'react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800 text-xs leading-relaxed">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8 text-sm">
        <div className="col-span-2">
          <a
            href="https://go.conrafba.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4 w-fit"
          >
            <Image
              src="/assets/images/logo1.jpg"
              alt="Amazon Direct Academy"
              width={220}
              height={124}
              className="h-auto w-[220px]"
            />
          </a>
          <p className="text-gray-400">
            Mentoría especializada en Amazon Wholesale sin intermediarios. Desarrollado por Loaldi Consulting Group LLC.
          </p>
        </div>
        <div>
          <h4 className="text-light font-bold mb-4">Navegación</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#mentoria"
                className="hover:text-brand-500 transition-colors"
              >
                Entrenamiento
              </a>
            </li>
            <li>
              <a
                href="#sobre-conrado"
                className="hover:text-brand-500 transition-colors"
              >
                Instructor
              </a>
            </li>
            <li>
              <a
                href="#testimonios"
                className="hover:text-brand-500 transition-colors"
              >
                Casos de Éxito
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-light font-bold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://go.conrafba.com/terminos"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-500 transition-colors"
              >
                Términos de Servicio
              </a>
            </li>
            <li>
              <a
                href="https://go.conrafba.com/privacidad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-500 transition-colors"
              >
                Política de Privacidad
              </a>
            </li>
            <li>
              <a
                href="https://go.conrafba.com/legal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-500 transition-colors"
              >
                Aviso Legal
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Aviso legal corporativo obligatorio */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-6 text-gray-500 space-y-3">
        <p>
          Esta página web es operada y mantenida por{' '}
          <strong>LOALDI CONSULTING GROUP LLC</strong>. El uso del sitio web se
          rige por sus Términos de Servicio y Política de Privacidad. LOALDI
          CONSULTING GROUP LLC es una empresa de educación y capacitación en
          ventas y marketing. No vendemos una oportunidad de negocio, ni
          programas para &ldquo;hacerse rico rápido&rdquo; o un sistema para ganar dinero.
        </p>
        <p>
          Los resultados varían, no son típicos y dependen del esfuerzo, el
          tiempo y la habilidad individuales. Este sitio NO está respaldado por
          Facebook de ninguna manera. FACEBOOK es una marca registrada de
          FACEBOOK, Inc.
        </p>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-gray-800/50 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>&copy; {currentYear} LOALDI CONSULTING GROUP LLC - Todos los derechos reservados.</p>
        <p className="mt-2 md:mt-0">
          Desarrollado por{' '}
          <a
            href="https://floweb.com.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-500 font-medium hover:text-brand-400 transition-colors"
          >
            Floweb 
          </a>
        </p>
      </div>
    </footer>
  );
}