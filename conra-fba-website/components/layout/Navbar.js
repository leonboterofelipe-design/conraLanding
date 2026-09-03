'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import Button from '../ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileConraOpen, setMobileConraOpen] = useState(false);
  const [mobileAdaOpen, setMobileAdaOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-zinc-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Brand Header */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/images/logo1.jpg"
                alt="CONRA FBA Logo"
                width={320}
                height={80}
                className="h-20 w-auto object-contain border-t-[15px] border-b-[5px] border-black"
                priority


                
              />
            </Link>
          </div>

          {/* Desktop Navigation with Dropdowns */}
          <div className="hidden md:flex space-x-8 items-center">
            {/* Menu 1: ConraFBA */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-zinc-300 hover:text-white font-medium transition-colors py-2 focus:outline-none">
                ConraFBA
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute left-0 top-full w-48 bg-zinc-950 border border-zinc-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 py-2">
                <Link
                  href="/conraFBA/quien-soy"
                  className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                >
                  Quién soy
                </Link>
                <Link
                  href="/conraFBA/historia"
                  className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                >
                  Historia
                </Link>
                <Link
                  href="/conraFBA/logros"
                  className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                >
                  Logros
                </Link>
              </div>
            </div>

            {/* Menu 2: ADA */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-zinc-300 hover:text-white font-medium transition-colors py-2 focus:outline-none">
                ADA
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute left-0 top-full w-52 bg-zinc-950 border border-zinc-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 py-2">
                <Link
                  href="/Ada/lo-que-hacemos"
                  className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                >
                  Lo que hacemos
                </Link>
                <Link
                  href="/Ada/a-quien-ayudamos"
                  className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                >
                  A quien ayudamos
                </Link>
              </div>
            </div>


             {/* Menu 3: Aprende aquí */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-zinc-300 hover:text-white font-medium transition-colors py-2 focus:outline-none">
                Aprende aquí
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute left-0 top-full w-52 bg-zinc-950 border border-zinc-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 py-2">
                <Link
                  href="/Aprende aquía/Skool"
                  className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                >
                  Skool
                </Link>
                             </div>
            </div>

          {/* Menu 4: Estrategia $10k */}
<div className="relative group">
  <button className="flex items-center gap-1 text-zinc-300 hover:text-white font-medium transition-colors py-2 focus:outline-none">
    Estrategia $10k
    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
  </button>
  
  <div className="absolute left-0 top-full w-52 bg-zinc-950 border border-zinc-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 py-2 z-50">
    <a
      href="https://go.conrafba.com"
      target="_blank"
      rel="noopener noreferrer"
      className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
    >
      VSL
    </a>
  </div>
</div>

            {/* Action Call */}
            <a href="https://go.conrafba.com/calendario" target="_blank" rel="noopener noreferrer">
              <Button size="sm">Agendar Llamada</Button>
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-white focus:outline-none p-2"
              aria-label="Abrir menú de navegación"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Accordion Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-2 pb-6 space-y-3">
          <div>
            <button
              onClick={() => setMobileConraOpen(!mobileConraOpen)}
              className="flex items-center justify-between w-full text-zinc-300 py-2 font-medium"
            >
              ConraFBA
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileConraOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileConraOpen && (
              <div className="pl-4 space-y-2 mt-1 border-l border-zinc-800">
                <Link
                  href="/conraFBA/quien-soy"
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-zinc-400 hover:text-white py-1"
                >
                  Quién soy
                </Link>
                <Link
                  href="/conraFBA/historia"
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-zinc-400 hover:text-white py-1"
                >
                  Historia
                </Link>
                <Link
                  href="/conraFBA/logros"
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-zinc-400 hover:text-white py-1"
                >
                  Logros
                </Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setMobileAdaOpen(!mobileAdaOpen)}
              className="flex items-center justify-between w-full text-zinc-300 py-2 font-medium"
            >
              ADA
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileAdaOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileAdaOpen && (
              <div className="pl-4 space-y-2 mt-1 border-l border-zinc-800">
                <Link
                  href="/Ada/lo-que-hacemos"
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-zinc-400 hover:text-white py-1"
                >
                  Lo que hacemos
                </Link>
                <Link
                  href="/Ada/a-quien-ayudamos"
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-zinc-400 hover:text-white py-1"
                >
                  A quien ayudamos
                </Link>
              </div>
            )}
          </div>

          <div className="pt-2">
            <a href="https://go.conrafba.com/calendario" target="_blank" rel="noopener noreferrer" className="block w-full text-center">
              <Button size="sm" className="w-full">Agendar Llamada</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}