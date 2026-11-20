'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CONTACT_INFO } from '@/constants/contact';
import Instagram from './social-buttons/Instagram';

export default function AboutModalTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  // ESC tuşuna basıldığında popup'ı kapatma
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Arka plan kaydırmasını kilitle
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <p
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-base md:text-lg cursor-pointer decoration-blue-500/50 hover:decoration-blue-400 transition group"
      >
        <span className="text-xs bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full group-hover:bg-blue-500/20 transition">
          Tarık Çevran kimdir? → Özgeçmiş & Deneyim
        </span>
      </p>

      <div
        inert={!isOpen ? true : undefined}
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <article
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="tarik-cevran-bio-title"
          className={`bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 max-h-[75vh] flex flex-col ${
            isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
          }`}
        >
          {/* Üst Bar (Kapatma Butonu) */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              1. Sınıf Sanayi/Ticari Dalgıç & Sualtı Operasyon Uzmanı
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Kapat"
              className="text-slate-400 hover:text-white bg-red-900 hover:bg-red-700 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="grid md:grid-cols-12 overflow-y-auto">
            
            {/* Sol Sütun: Fotoğraf */}
            <div className="md:col-span-5 relative min-h-[300px] md:min-h-full bg-slate-950 border-b md:border-b-0 md:border-r border-slate-800">
              <Image
                src="/images/tarik-cevran-profile.jpeg"
                alt="1. Sınıf Sanayi/Ticari Dalgıç Tarık Çevran - Industrial/Commercial Diver"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4">
                <p className="text-white font-bold text-sm">Tarık ÇEVRAN</p>
                <p className="text-slate-300 text-xs">First Class Industrial/Commercial Diver</p>
              </div>
            </div>

            {/* Sağ Sütun: Özgeçmiş ve İş Deneyimi */}
            <div className="md:col-span-7 p-6 md:p-8 space-y-5 text-slate-300">
              <div>
                <h2 id="tarik-cevran-bio-title" className="text-2xl md:text-3xl font-extrabold text-white">
                  Tarık Çevran Kimdir?
                </h2>
                <p className="text-sm text-blue-400 font-medium mt-1">
                  T.C. Ulaştırma ve Altyapı Bakanlığı Yetkili 1. Sınıf Sanayi Dalgıcı
                </p>
              </div>

              <p className="text-sm leading-relaxed text-start">
                Denizcilik ve ağır sanayi sektöründe uzun yıllara dayanan saha tecrübesine sahip olan <strong>Tarık Çevran</strong>, zorlu hava ve dip koşullarında yüksek güvenlik standartlarıyla görev yapan profesyonel <strong>1. Sınıf Sanayi Dalgıcıdır</strong>. <br />2020 yılında <strong>Rize Recep Tayyip Erdoğan Üniversitesi Su Altı Teknolojisi Bölümü'nden</strong> mezun olup aynı yıl itibariyle Türkiye'nin önde gelen tersanelerinde ve liman tesislerinde su altı operasyonlarında aktif olarak görev almıştır. 1997 Balıkesir doğumlu <strong>Tarık Çevran</strong>, halen Balıkesir Edremit'te ikamet etmektedir.
              </p>

              {/* İş Deneyimi */}
              <div className="space-y-3 pt-1">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
                  Saha Tecrübesi
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start text-start gap-2">
                    <span className="text-blue-400 mt-0.5">✔</span>
                    <span>
                      <strong>Tersane & Gemi Operasyonları:</strong> Yalova Tersan ve İzmir Aliağa başta olmak üzere büyük ölçekli tersaneler
                    </span>
                  </li>
                </ul>
              </div>

              {/* Alt İletişim Butonları */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-4 justify-center">
                <a
                  href={`tel:${CONTACT_INFO.phoneNumber}`}
                  className="text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-xl pt-3 text-sm transition"
                >
                  📞
                </a>
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl pt-3 text-sm transition"
                >
                  💬
                </a>
                <Instagram type="personal" />
              </div>
            </div>

          </div>
        </article>
      </div>
    </>
  );
}