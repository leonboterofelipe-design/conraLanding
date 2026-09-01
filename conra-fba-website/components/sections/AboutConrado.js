import React from "react";
import Image from "next/image";

export default function AboutConrado() {
  return (
    <section id="sobre-conrado" className="py-20 bg-dark text-light px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden relative">
            <Image
              src="/assets/images/DSC01098.JPG"
              alt="Conrado Loaldi - CEO & Founder de Conra FBA"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Conoce a Conrado Loaldi
          </h2>
          <p className="text-gray-300 mb-4 text-lg">
            Vendedor de Amazon desde 2020, empresario y fundador de CONRA FBA.
          </p>
          <p className="text-gray-400 mb-4">
            Su experiencia no viene de estudiar el modelo desde afuera. Viene de
            hacerlo. De alcanzar una facturación de más de siete cifras anuales
            en ventas. De analizar productos, invertir capital, cometer errores
            y construir los sistemas necesarios para operar un negocio real
            dentro de Amazon.
          </p>
          <p className="text-gray-400 mb-6">
            Desde 2024, Conrado ha ayudado a más de 300 estudiantes a pasar de
            las dudas y no saber por dónde comenzar, a construir sus primeras
            operaciones y alcanzar hitos como sus primeros $10,000 en ventas.
          </p>
          <div className="grid grid-cols-2 gap-4 border-t border-gray-700 pt-6">
            <div>
              <h4 className="text-brand-500 font-bold text-2xl">+300</h4>
              <p className="text-sm text-gray-400">Estudiantes ayudados</p>
            </div>
            <div>
              <h4 className="text-brand-500 font-bold text-2xl">+7 Cifras</h4>
              <p className="text-sm text-gray-400">Facturación anual en Amazon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}