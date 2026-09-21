'use client';

import React, { useState, useCallback } from 'react';
import { Play, X } from 'lucide-react';

// ============================================
// DATA CONFIG — Fácil de actualizar
// ============================================

const testimoniosData = [
  // REVIEWS SIN FILTROS (5)
  {
    id: 'review-1',
    driveId: '1ZXqjPY0P_hzAkZGb8aoF-h5Zl3Qp-43w',
    title: 'Review sin filtros - Estudiante 1',
    badge: 'TESTIMONIO',
    category: 'review',
    name: 'Estudiante',
    stat: null,
  },
  {
    id: 'review-2',
    driveId: '1a7IVRBaVzC1rYtU7CQonSEkHNgHiyA4d',
    title: 'Review sin filtros - Estudiante 2',
    badge: 'TESTIMONIO',
    category: 'review',
    name: 'Estudiante',
    stat: null,
  },
  {
    id: 'review-3',
    driveId: '1fBqKOou-RF6TnApSdMbu8X2kVMNCoaEH',
    title: 'Review sin filtros - Estudiante 3',
    badge: 'TESTIMONIO',
    category: 'review',
    name: 'Estudiante',
    stat: null,
  },
  {
    id: 'review-4',
    driveId: '1DTXyG11OmHcGTzRvlU7ZVS4sjPQxJbrJ',
    title: 'Review sin filtros - Estudiante 4',
    badge: 'TESTIMONIO',
    category: 'review',
    name: 'Estudiante',
    stat: null,
  },
  {
    id: 'review-5',
    driveId: '12yxDwEQux3-o1uBQNWS_7A0i4kcJspX1',
    title: 'Review sin filtros - Estudiante 5',
    badge: 'TESTIMONIO',
    category: 'review',
    name: 'Estudiante',
    stat: null,
  },

  // PODIO CLIPS (9)
  {
    id: 'podio-1',
    driveId: '15SygiYy8uc53ahk9zuweddiT9W_nw05Z',
    title: 'Podio Clip - Primer mes',
    badge: 'RESULTADOS',
    category: 'podio',
    name: 'Estudiante',
    stat: '$10K+',
  },
  {
    id: 'podio-2',
    driveId: '1UcaaJzR74vCBnjiJyWk5hMiZ6lHE4Od_',
    title: 'Podio Clip - Operación',
    badge: 'RESULTADOS',
    category: 'podio',
    name: 'Estudiante',
    stat: null,
  },
  {
    id: 'podio-3',
    driveId: '13noQ3W-rNp-4Rk2PkN8E9XE8u9OD0JBL',
    title: 'Podio Clip - Dashboard',
    badge: 'RESULTADOS',
    category: 'podio',
    name: 'Estudiante',
    stat: null,
  },
  {
    id: 'podio-4',
    driveId: '1o2Grc_fHIoRjxQ7vze3taVkrxi5V7qwf',
    title: 'Podio Clip - Cierre',
    badge: 'RESULTADOS',
    category: 'podio',
    name: 'Estudiante',
    stat: null,
  },
  {
    id: 'podio-5',
    driveId: '1bV9ckscx0dItjCzC9MHxa0K2AhBxGTek',
    title: 'Podio Clip - Análisis',
    badge: 'RESULTADOS',
    category: 'podio',
    name: 'Estudiante',
    stat: null,
  },
  {
    id: 'podio-6',
    driveId: '1WdfDS-p3mkNBoWK2sPqOsKxxznE807iJ',
    title: 'Podio Clip - Métricas',
    badge: 'RESULTADOS',
    category: 'podio',
    name: 'Estudiante',
    stat: null,
  },
  {
    id: 'podio-7',
    driveId: '1veEEjPpCUdzLHAlKMHLSgKPgL67jKYOc',
    title: 'Podio Clip - Estrategia',
    badge: 'RESULTADOS',
    category: 'podio',
    name: 'Estudiante',
    stat: null,
  },
  {
    id: 'podio-8',
    driveId: '1eoQxYrVqf29jwLwoZKZHp-BZQO1QsKOQ',
    title: 'Podio Clip - Evolución',
    badge: 'RESULTADOS',
    category: 'podio',
    name: 'Estudiante',
    stat: null,
  },
  {
    id: 'podio-9',
    driveId: '1F754-VSE6l4EUP2nVXgZVNj_avVFyT7f',
    title: 'Podio Clip - Hito',
    badge: 'RESULTADOS',
    category: 'podio',
    name: 'Estudiante',
    stat: null,
  },

  // LILIAN CLIPS (3)
  {
    id: 'lilian-1',
    driveId: '1Nc-cvHYCtUSGzTqfifJVEEw7H1f8WCEc',
    title: 'Lilian - Primer mes en Amazon',
    badge: 'ESTUDIANTE',
    category: 'clip',
    name: 'Lilian',
    stat: '$18K',
  },
  {
    id: 'lilian-2',
    driveId: '1aaU6nPpgLvGeCFbYcufV0Lfi7qK5P4yp',
    title: 'Lilian - Resultados de operación',
    badge: 'RESULTADOS',
    category: 'clip',
    name: 'Lilian',
    stat: null,
  },
  {
    id: 'lilian-3',
    driveId: '1N8ymCSRm8ZTvzvFSDKu9IKF36U2YsNj8',
    title: 'Lilian - Cierre exitoso',
    badge: 'TESTIMONIO',
    category: 'clip',
    name: 'Lilian',
    stat: null,
  },

  // FELIPE CLIPS (2)
  {
    id: 'felipe-1',
    driveId: '1wTBlIDZiodRRTN0vlipWeWgjCCEYr_Gv',
    title: 'Felipe - Dos marcas y 7 productos',
    badge: 'RESULTADOS',
    category: 'clip',
    name: 'Felipe',
    stat: '7 SKUs',
  },
  {
    id: 'felipe-2',
    driveId: '1WcGvBevemdSrpPOciWrJydUzLUpQFYHV',
    title: 'Felipe - Rompe rutina de 40hs',
    badge: 'TESTIMONIO',
    category: 'clip',
    name: 'Felipe',
    stat: null,
  },

  // OTROS (9)
  {
    id: 'otro-1',
    driveId: '1s4tx-yxba8TsWHqg-KrAxBa7FLAFiJtX',
    title: 'Virginia - Primeros resultados',
    badge: 'ESTUDIANTE',
    category: 'clip',
    name: 'Virginia',
    stat: '$1,500',
  },
  {
    id: 'otro-2',
    driveId: '1nNgfyk1hWc_20f8Ww6_mfJoROQKyywED',
    title: 'Camilo - Dos marcas y 7 productos',
    badge: 'RESULTADOS',
    category: 'clip',
    name: 'Camilo',
    stat: '7 SKUs',
  },
  {
    id: 'otro-3',
    driveId: '1xlCG-zs_Lk-1G7pxBHz4CycOUA28j5EC',
    title: 'Rompe con tu rutina de 40 horas',
    badge: 'TESTIMONIO',
    category: 'clip',
    name: 'Estudiante',
    stat: null,
  },
  {
    id: 'otro-4',
    driveId: '1_syQtToeYaH_Sprs7WnNda5LsuF0C-7u',
    title: 'Carlitza - Sin filtros',
    badge: 'TESTIMONIO',
    category: 'clip',
    name: 'Carlitza',
    stat: null,
  },
  {
    id: 'otro-5',
    driveId: '1MW3JinYkeVqzBGD7XkugKV9mPMIfXXiS',
    title: 'Elizabeth - Resultados verificados',
    badge: 'RESULTADOS',
    category: 'clip',
    name: 'Elizabeth',
    stat: null,
  },
  {
    id: 'otro-6',
    driveId: '1JfnDd99rhxrnIUlnp_FVc9E5SuNG5Vo2',
    title: 'Onell - 5K en un día',
    badge: 'RESULTADOS',
    category: 'clip',
    name: 'Onell',
    stat: '$5K',
  },
  {
    id: 'otro-7',
    driveId: '1UzqeaWPCcfMiGhKZgV4H4o6mN8XKHruM',
    title: 'Onell - 26K facturados',
    badge: 'RESULTADOS',
    category: 'clip',
    name: 'Onell',
    stat: '$26K',
  },
  {
    id: 'otro-8',
    driveId: '1cDGOuoJYjGQrCNBWmGf998q2RHwDvzM3',
    title: 'Onell - Review sin filtros',
    badge: 'TESTIMONIO',
    category: 'clip',
    name: 'Onell',
    stat: null,
  },
  {
    id: 'otro-9',
    driveId: '146H3HX4e4nl-MkFoseaDlr5vGxjJWE81',
    title: 'Raul - Resultados crudos',
    badge: 'RESULTADOS',
    category: 'clip',
    name: 'Raul',
    stat: null,
  },
  {
    id: 'otro-10',
    driveId: '1_BZI5yILfFP2_x0dnmFvv99-bGniGCk_',
    title: 'Zadiel - Primeras ventas',
    badge: 'ESTUDIANTE',
    category: 'clip',
    name: 'Zadiel',
    stat: null,
  },
];

// ============================================
// HELPER: Google Drive thumbnail URL (CORREGIDO)
// ============================================
const getDriveThumbnail = (driveId) => {
  return `https://drive.google.com/thumbnail?id=${driveId}&sz=w1000`;
};

const getGoogleDriveEmbedUrl = (driveId) => {
  return `https://drive.google.com/file/d/${driveId}/preview`;
};

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
export default function TestimoniosGrid() {
  const [playingId, setPlayingId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  const handlePlay = useCallback((id) => {
    setPlayingId(id);
    setExpandedId(id);
  }, []);

  const handleClose = useCallback(() => {
    setPlayingId(null);
    setExpandedId(null);
  }, []);

  return (
    <section className="w-full bg-black text-white py-12 md:py-20 px-3 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        
        {/* ========== HEADER ========== */}
        <div className="text-center space-y-4 max-w-3xl mx-auto px-2">
          <span className="inline-block text-[#FF8D0F] font-semibold tracking-widest uppercase text-[10px] md:text-xs px-3 py-1.5 md:px-4 md:py-2 bg-[#FF8D0F]/10 rounded-full border border-[#FF8D0F]/30">
            Muro de Resultados — CONRA FBA
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Lo que pasa cuando dejas de adivinar y ejecutas un sistema
          </h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Testimonios reales, resultados verificados y historias de alumnos construyendo sus negocios de Amazon Wholesale.
          </p>
        </div>

        {/* ========== GRID TESTIMONIOS ========== */}
        {/* CAMBIO AQUÍ: grid-cols-2 (por defecto/móvil) y gap-3 para móvil, gap-6 para desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 auto-rows-max">
          {testimoniosData.map((item) => (
            <div
              key={item.id}
              className="group relative bg-zinc-900/40 border border-zinc-800 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl hover:border-[#FF8D0F]/50 transition-all duration-300 cursor-pointer flex flex-col"
              onClick={() => handlePlay(item.id)}
            >
              
              {/* VIDEO / THUMBNAIL CONTAINER */}
              <div className="relative w-full aspect-[9/16] bg-black overflow-hidden flex items-center justify-center">
                
                {/* Imagen de portada (thumbnail) */}
                <img
                  src={getDriveThumbnail(item.driveId)}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600"%3E%3Crect fill="%23111" width="400" height="600"/%3E%3C/svg%3E';
                  }}
                />

                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />

                {/* Play Button - Adaptado el tamaño para móvil */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#FF8D0F] flex items-center justify-center shadow-xl text-black font-bold group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-4 h-4 md:w-6 md:h-6 ml-0.5 md:ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Badge superior - Textos más pequeños en móvil */}
                <div className="absolute top-2 left-2 right-2 md:top-3 md:left-3 md:right-3 flex flex-wrap justify-between items-start gap-1 md:gap-2">
                  <div className="bg-black/80 backdrop-blur-sm border border-[#FF8D0F]/40 px-2 py-1 md:px-3 md:py-1.5 rounded-md md:rounded-lg">
                    <span className="text-[8px] md:text-xs uppercase font-bold text-[#FF8D0F] tracking-wide block">
                      {item.badge}
                    </span>
                  </div>
                  {item.stat && (
                    <div className="bg-[#FF8D0F]/90 text-black px-1.5 py-0.5 md:px-2 md:py-1 rounded-md md:rounded-lg text-[8px] md:text-[10px] font-bold uppercase tracking-wide">
                      {item.stat}
                    </div>
                  )}
                </div>
              </div>

              {/* FOOTER CARD */}
              <div className="p-2 md:p-4 bg-black border-t border-zinc-800/50 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-[11px] md:text-sm text-gray-300 font-medium leading-snug line-clamp-2">
                    {item.title}
                  </p>
                </div>
                <p className="text-[9px] md:text-[10px] text-gray-500 mt-1 md:mt-2">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ========== MODAL VIDEO EXPANDIDO ========== */}
        {expandedId && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl bg-black rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
              
              {/* IFRAME GOOGLE DRIVE */}
              <div className="relative w-full aspect-video">
                <iframe
                  src={getGoogleDriveEmbedUrl(
                    testimoniosData.find((t) => t.id === expandedId)?.driveId
                  )}
                  title="Video testimonio"
                  allow="autoplay"
                  className="w-full h-full absolute inset-0"
                  style={{ border: 'none' }}
                />
              </div>

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 md:top-4 md:right-4 z-10 bg-black/80 hover:bg-[#FF8D0F] text-white rounded-full p-2 transition-colors"
              >
                <X size={20} className="md:w-6 md:h-6" />
              </button>

              {/* Info footer */}
              <div className="bg-black/50 backdrop-blur p-4 border-t border-zinc-800 hidden md:block">
                <h3 className="text-lg font-bold text-white">
                  {testimoniosData.find((t) => t.id === expandedId)?.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {testimoniosData.find((t) => t.id === expandedId)?.name}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========== CTA SECTION ========== */}
        <div className="text-center space-y-6 pt-8 border-t border-zinc-800">
          <div className="space-y-3">
            <p className="text-gray-400 text-sm md:text-lg">¿Quieres resultados como estos?</p>
            <h3 className="text-2xl md:text-4xl font-bold text-white px-2">
              Comienza tu negocio de Amazon Wholesale hoy
            </h3>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 px-4">
            <a
              href="https://go.conrafba.com/calendario"
              className="px-8 py-3 bg-[#FF8D0F] text-black font-bold rounded-lg hover:bg-[#FF8D0F]/90 transition-colors"
            >
              Agendar Llamada Gratis
            </a>
            <a
              href="https://go.conrafba.com"
              className="px-8 py-3 border border-[#FF8D0F] text-[#FF8D0F] font-bold rounded-lg hover:bg-[#FF8D0F]/10 transition-colors"
            >
              Ver Entrenamiento Gratuito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}