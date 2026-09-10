'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

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
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollManual = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'next' ? 450 : -450;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Encabezado */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-900 pb-6">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#FF8D0F] uppercase block mb-1">
              Muro de Resultados — CONRA FBA
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Lo que pasa cuando aplicas un sistema
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollManual('prev')}
                className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5 text-[#FF8D0F]" />
              </button>
              <button
                onClick={() => scrollManual('next')}
                className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5 text-[#FF8D0F]" />
              </button>
            </div>

            <Link
              href="/conra-fba/rese"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#FF8D0F] transition-colors group shrink-0"
            >
              <span>Ver más casos de éxito</span>
              <ArrowRight className="w-4 h-4 text-[#FF8D0F] transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>

        {/* Carrusel con tarjetas más altas modificando el contenedor a h-72 o aspect-[4/3] */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimoniosData.map((item) => (
            <div 
              key={item.id}
              className="w-[320px] sm:w-[400px] lg:w-[calc(33.333%-16px)] shrink-0 flex flex-col group cursor-pointer snap-start"
            >
              {/* Aquí cambiamos aspect-video por h-72 para hacerlas notablemente más altas */}
              <div className="relative w-full h-72 sm:h-80 bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-[#FF8D0F]/50 transition-all shadow-xl">
                {item.type === "wistia" ? (
                  item.wistiaId.startsWith("PON_AQUI") ? (
                    <a
                      href={item.targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full h-full block group/vid"
                    >
                      <img
                        src={item.posterUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover/vid:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover/vid:bg-black/10 transition-colors">
                        <div className="w-14 h-14 rounded-full bg-[#FF8D0F] flex items-center justify-center shadow-lg text-black font-extrabold pl-0.5 transform group-hover/vid:scale-110 transition-transform text-base">
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
                          className="w-full h-full absolute inset-0 object-cover"
                        />
                      </div>
                    ) : (
                      <div 
                        className="relative w-full h-full bg-black group/vid"
                        onClick={() => setPlayingId(item.id)}
                      >
                        <img
                          src={item.posterUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover/vid:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover/vid:bg-black/10 transition-colors">
                          <div className="w-14 h-14 rounded-full bg-[#FF8D0F] flex items-center justify-center shadow-lg text-black font-extrabold pl-0.5 transform group-hover/vid:scale-110 transition-transform text-base">
                            ▶
                          </div>
                        </div>
                      </div>
                    )
                  )
                ) : (
                  <div className="w-full h-full bg-zinc-950 flex items-center justify-center p-2">
                    <img
                      src={item.mediaUrl}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>

              <div className="mt-4">
                <p className="text-sm sm:text-base text-zinc-200 font-semibold leading-snug group-hover:text-white transition-colors">
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