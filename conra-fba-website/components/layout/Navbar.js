import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';

export default function Navbar() {
  return (
   <nav className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-zinc-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/images/tmpb3mmikwg.webp"
                alt="CONRA FBA Logo"
                width={320}
                height={80}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#mentoria"
              className="text-zinc-300 hover:text-white font-medium transition-colors"
            >
              La Mentoría
            </a>
            <a
              href="#sobre-conrado"
              className="text-zinc-300 hover:text-white font-medium transition-colors"
            >
              Conrado Loaldi
            </a>
            <a
              href="#testimonios"
              className="text-zinc-300 hover:text-white font-medium transition-colors"
            >
              Casos de Éxito
            </a>
            <a
              href="#faq"
              className="text-zinc-300 hover:text-white font-medium transition-colors"
            >
              FAQ
            </a>
            <a href="https://go.conrafba.com/calendario" target="_blank" rel="noopener noreferrer">
              <Button size="sm">Agendar Llamada</Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
