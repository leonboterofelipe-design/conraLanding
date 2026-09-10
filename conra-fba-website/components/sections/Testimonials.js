'use client';

import React, { useState, useEffect } from 'react';

const testimoniosData = [
  {
    id: 1,
    type: "wistia",
    wistiaId: "zca9l26jg4",
    posterUrl: "https://embed-ssl.wistia.com/deliveries/d2906312519742a9329454782304e55013e6b9f4.webp",
    title: "Testimonio estudiante exitoso - Primer mes en Amazon",
  },
  {
    id: 2,
    type: "wistia",
    wistiaId: "tdm64uc39c",
    posterUrl: "https://embed-ssl.wistia.com/deliveries/85c60e39a4bd68136885eba0d68e23a602fcdeaa.webp",
    title: "Resultados de operación - Amazon Wholesale",
  },
  {
    id: 3,
    type: "wistia",
    wistiaId: "PON_AQUI_EL_ID_3",
    targetUrl: "https://go.conrafba.com/reviews-conrafba",
    posterUrl: "https://embed-ssl.wistia.com/deliveries/71658028676c2faa7adec5533c396b06a4493ef0.webp",
    title: "Cierre exitoso de marcas y proveedores",
  },
  {
    id: 4,
    type: "wistia",
    wistiaId: "PON_AQUI_EL_ID_4",
    targetUrl: "https://go.conrafba.com/reviews-conrafba",
    posterUrl: "https://embed-ssl.wistia.com/deliveries/4c7c2ee36254797d874ff19f79d830cce88d503a.webp",
    title: "Dashboard de ventas y métricas en vivo",
  },
  {
    id: 5,
    type: "wistia",
    wistiaId: "PON_AQUI_EL_ID_5",
    targetUrl: "https://go.conrafba.com/reviews-conrafba",
    posterUrl: "https://embed-ssl.wistia.com/deliveries/119d55ac5fa89a014acecaf04ace172e286f03ec.webp",
    title: "Mentoría personalizada y acompañamiento",
  },
  {
    id: 6,
    type: "wistia",
    wistiaId: "PON_AQUI_EL_ID_6",
    targetUrl: "https://go.conrafba.com/reviews-conrafba",
    posterUrl: "https://embed-ssl.wistia.com/deliveries/672259b3d4252bf26304c34a2399bf4d745a5d4f.webp",
    title: "Caso de éxito verificado en la comunidad",
  },
  {
    id: 7,
    type: "image",
    mediaUrl: "https://assets.cdn.filesafe.space/SG0TKpTDkPoBscNii52K/media/6a0df80507a34aa07f808352.jpeg",
    title: "Mensaje de bienvenida CONRA FBA",
  },
  {
    id: 8,
    type: "image",
    mediaUrl: "https://assets.cdn.filesafe.space/SG0TKpTDkPoBscNii52K/media/6a178ff8c460f23b3af61ff9.jpg",
    title: "Métricas y capturas reales de operaciones en Amazon Wholesale",
  },
  {
    id: 9,
    type: "image",
    mediaUrl: "https://assets.cdn.filesafe.space/SG0TKpTDkPoBscNii52K/media/6a720b28670a4ee78332fa14.png",
    title: "Primer mes de operación - Resultados verificados",
  },
  {
    id: 10,
    type: "image",
    mediaUrl: "https://assets.cdn.filesafe.space/SG0TKpTDkPoBscNii52K/media/6a71f49ba86d6ec90cbdc9b9.jpg",
    title: "Cierre de operaciones - Testimonio de estudiante",
  },
  {
    id: 11,
    type: "image",
    mediaUrl: "https://assets.cdn.filesafe.space/SG0TKpTDkPoBscNii52K/media/6a71f862df32aa3e16cdb7da.jpg",
    title: "Dashboard de ventas - Seguimiento en tiempo real",
  },
  {
    id: 12,
    type: "image",
    mediaUrl: "https://assets.cdn.filesafe.space/SG0TKpTDkPoBscNii52K/media/6a720b4bdf32aa3e160052b5.png",
    title: "Mentor verificando progreso con estudiante",
  },
  {
    id: 13,
    type: "image",
    mediaUrl: "https://assets.cdn.filesafe.space/SG0TKpTDkPoBscNii52K/media/6a720c87df422bfa870fab0c.jpeg",
    title: "Estudiantes exitosos del programa CONRA FBA",
  },
];

export default function TestimoniosGrid() {
  const [playingId, setPlayingId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimoniosData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(testimoniosData[(currentIndex + i) % testimoniosData.length]);
    }
    return items;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimoniosData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimoniosData.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-gray-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest text-[#FF8D0F] uppercase">
            Muro de Resultados — CONRA FBA
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Lo que pasa cuando dejas de adivinar y aplicas un sistema
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Videos de alumnos, capturas de chats y resultados reales de quienes ya están operando en Amazon Wholesale.
          </p>
        </div>

        {/* Controles de Navegación del Carrusel */}
        <div className="flex justify-end max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800/80 transition-all duration-200"
              aria-label="Anterior"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800/80 transition-all duration-200"
              aria-label="Siguiente"
            >
              ▶
            </button>
          </div>
        </div>

        {/* Grilla / Carrusel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getVisibleItems().map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`}
              className="bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-[#FF8D0F]/50 transition-all group"
            >
              
              {/* Contenedor Multimedia (Formato vertical 9:16) sin badges */}
              <div className="relative w-full aspect-[9/16] bg-black overflow-hidden flex items-center justify-center">
                
                {item.type === "wistia" ? (
                  item.wistiaId.startsWith("PON_AQUI") ? (
                    <a
                      href={item.targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full h-full bg-black block group/vid cursor-pointer"
                    >
                      <img
                        src={item.posterUrl}
                        alt={item.title}
                        className="w-full h-full object-contain group-hover/vid:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover/vid:bg-black/10 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-[#FF8D0F] flex items-center justify-center shadow-xl text-black font-extrabold pl-1 transform group-hover/vid:scale-110 transition-transform">
                          ▶
                        </div>
                      </div>
                    </a>
                  ) : (
                    playingId === item.id ? (
                      <div className="w-full h-full relative bg-black">
                        <iframe
                          src={`https://fast.wistia.com/embed/iframe/${item.wistiaId}?seo=false&videoFoam=true&autoPlay=true`}
                          title={item.title}
                          allow="autoplay; fullscreen"
                          frameBorder="0"
                          className="w-full h-full absolute inset-0 object-contain"
                          allowTransparency="true"
                        />
                      </div>
                    ) : (
                      <div 
                        className="relative w-full h-full bg-black cursor-pointer group/vid"
                        onClick={() => setPlayingId(item.id)}
                      >
                        <img
                          src={item.posterUrl}
                          alt={item.title}
                          className="w-full h-full object-contain group-hover/vid:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover/vid:bg-black/10 transition-colors">
                          <div className="w-16 h-16 rounded-full bg-[#FF8D0F] flex items-center justify-center shadow-xl text-black font-extrabold pl-1 transform group-hover/vid:scale-110 transition-transform">
                            ▶
                          </div>
                        </div>
                      </div>
                    )
                  )
                ) : (
                  <div className="w-full h-full bg-zinc-950 flex items-center justify-center p-4">
                    <img
                      src={item.mediaUrl}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}

              </div>

              {/* Pie de tarjeta con texto descriptivo */}
              <div className="p-4 bg-zinc-950 border-t border-zinc-800/80">
                <p className="text-xs md:text-sm text-gray-300 font-medium leading-snug">
                  {item.title}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}