import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function BrandLogo() {
  return (
    <div className="flex items-center gap-3.5 group cursor-pointer py-1">
      {/* Orijinal Görsel Dosyası */}
      <div className="w-16 h-13 flex-shrink-0 relative flex items-center justify-center bg-slate-900 rounded-2xl border border-blue-500/30 overflow-hidden shadow-lg">
        <Image 
          src="/logo2.png" 
          alt="Tarık Çevran Sualtı Logo" 
          fill 
          className="object-cover group-hover:scale-103 transition-transform duration-100"
        />
      </div>

      {/* Marka Metinleri */}
      <div className="flex flex-col">
        <span className="font-extrabold text-xl tracking-wider text-white group-hover:text-blue-400 transition-colors leading-none uppercase">
          ÇEVRAN
        </span>
        <span className="text-[11px] tracking-[0.2em] text-blue-400 font-bold uppercase mt-1.5 leading-none">
          SUALTI HİZMETİ
        </span>
      </div>
    </div>
  );
}