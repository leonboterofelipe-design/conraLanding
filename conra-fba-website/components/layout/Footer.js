import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800 text-xs leading-relaxed">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8 text-sm">
       
        {/* Columna de Marca */}
        <div className="col-span-2">
          <a
            href="https://go.conrafba.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4 w-fit"
            aria-label="Ir al sitio principal de Conra FBA"
          >
            <Image
              src="/assets/images/logo1.jpg"
              alt="Amazon Direct Academy"
              width={220}
              height={110}
              className="h-auto w-[130px]"
            />
          </a>
          <p className="text-gray-400">
            Mentoría especializada en Amazon Wholesale sin intermediarios. Desarrollado por Loaldi Consulting Group LLC.
          </p>

          <a
            href="https://www.instagram.com/amazondirectacademy/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar Amazon Direct Academy en Instagram"
            title="Instagram"
            className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-brand-500 hover:text-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-dark"
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>

        {/* Columna de Navegación */}
        <div>
          <h4 className="text-light font-bold mb-4">Navegación</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/conra-fba/historia"
                className="hover:text-brand-500 transition-colors"
              >
                Historia
              </Link>
            </li>
            <li>
              <Link
                href="https://www.skool.com/conrafba/about"
                className="hover:text-brand-500 transition-colors"
              >
                Skool
              </Link>
            </li>
            <li>
              <Link
                href="/conrafba/rese"
                className="hover:text-brand-500 transition-colors"
              >
                Casos de éxito
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna Legal */}
        <div>
          <h4 className="text-light font-bold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/terminos-de-servicio"
                className="hover:text-brand-500 transition-colors"
              >
                Aviso Legal
              </Link>
            </li>
            <li>
              <Link
                href="/privacidad"
                className="hover:text-brand-500 transition-colors"
              >
                Política de Privacidad
              </Link>
            </li>
          </ul>
        </div>
      </div>
          
      {/* Aviso legal corporativo obligatorio */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-6 text-gray-500 text-sm space-y-4">
        <p>
          Esta página web es operada y mantenida por <strong>LOALDI CONSULTING GROUP LLC</strong>. 
          El uso del sitio web se rige por sus Términos de Servicio y Política de Privacidad. 
          LOALDI CONSULTING GROUP LLC es una empresa de educación y capacitación en ventas y marketing. 
          No vendemos una oportunidad de negocio, ni programas para &ldquo;hacerse rico rápido&rdquo; o un 
          sistema para ganar dinero. Creemos que, con educación, las personas pueden estar mejor preparadas 
          para tomar decisiones de inversión, pero no garantizamos el éxito en nuestra capacitación. No hacemos 
          afirmaciones sobre ganancias, esfuerzos o afirmaciones de que nuestra capacitación le hará ganar dinero. 
          Todo el material es propiedad intelectual y está protegido por derechos de autor. Cualquier duplicación, 
          reproducción o distribución está estrictamente prohibida. Consulte nuestra Divulgación completa para 
          obtener detalles importantes.
        </p>
        
        <p>
          Las declaraciones y representaciones son opiniones, hallazgos o experiencias de personas que 
          generalmente han comprado educación y capacitación. Los resultados varían, no son típicos y dependen 
          del esfuerzo, el tiempo y la habilidad individuales, así como de condiciones desconocidas y otros factores. 
          No medimos ganancias ni rendimiento financiero. En cambio, rastreamos transacciones completadas y 
          satisfacción de los servicios mediante encuestas voluntarias. Los resultados muestran que la mayoría 
          de los clientes de Capacitación Avanzada que aplican la capacitación. Sin embargo, no debe equiparar las 
          transacciones de cierre de ventas completadas con transacciones exitosas. Además, muchos clientes no 
          continúan con el programa, no aplican lo que aprenden o intentan aplicar lo que aprenden pero aún así 
          tienen dificultades para lograr que las ventas sean exitosas para ellos.
        </p>

        <p>
          Usamos cookies para ayudar a mejorar, promover y proteger nuestros servicios. Al continuar usando este 
          sitio, acepta nuestra política de privacidad, aviso legal y términos de uso.
        </p>

        <p>
          Este sitio no es parte del sitio web de Facebook ni de Facebook, Inc. Este sitio NO está respaldado por 
          Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc. <strong>Aviso Legal Agencias.</strong>
        </p>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-gray-800/50 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>&copy; {currentYear} Loaldi Consulting Group LLC - Todos los derechos reservados.</p>
      </div>
      
      {/*
      Desarrollado por{' '}
      <a
        href="https://floweb.com.co/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-500 font-medium hover:text-brand-400 transition-colors"
      >
        Floweb
      </a>
      */}
    </footer>
  );
}