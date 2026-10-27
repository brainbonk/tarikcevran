'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './globals.css';
import FloatingCallButton from '@/components/FloatingCallButton';
import { BrandLogo } from '@/components/BrandLogo';

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "+905418741701";

  return (
    <html lang="tr">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col pb-20 md:pb-0 overflow-x-hidden">
        
        {/* Üst Menü (Navbar) */}
        <header className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            
            {/* Marka / Logo */}
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <BrandLogo />
            </Link>
            
            {/* Masaüstü Menü (Large Screens) */}
            <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-300 items-center">
              <Link href="/" className="hover:text-blue-400 transition">Ana Sayfa</Link>
              <Link href="/hizmetler" className="hover:text-blue-400 transition">Hizmetler</Link>
              <Link href="/acil-hizmetler" className="hover:text-red-400 transition">Acil Arama Kurtarma</Link>
              <Link href="/projeler" className="hover:text-blue-400 transition">Projeler</Link>
              <Link href="/iletisim" className="hover:text-blue-400 transition">İletişim</Link>
            </nav>

            <div className="hidden md:block">
              <a 
                href={`tel:${phoneNumber}`} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition shadow-md"
              >
                Hemen Ara
              </a>
            </div>

            {/* Mobil Sandviç (Hamburger) Menü Butonu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Menüyü Aç/Kapat"
            >
              {isMenuOpen ? (
                /* Çarpı (Kapat) İkonu */
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Sandviç (Hamburger) İkonu */
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

          </div>

          {/* Mobilde Açılan Menü Paneli */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)} 
                className="block py-2.5 px-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-blue-400 transition"
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/hizmetler" 
                onClick={() => setIsMenuOpen(false)} 
                className="block py-2.5 px-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-blue-400 transition"
              >
                Hizmetler Kataloğu
              </Link>
              <Link 
                href="/acil-hizmetler" 
                onClick={() => setIsMenuOpen(false)} 
                className="block py-2.5 px-3 rounded-lg text-base font-medium text-red-400 hover:bg-red-950/40 transition"
              >
                🚨 Acil Arama Kurtarma
              </Link>
              <Link 
                href="/projeler" 
                onClick={() => setIsMenuOpen(false)} 
                className="block py-2.5 px-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-blue-400 transition"
              >
                Projeler & Galeri
              </Link>
              <Link 
                href="/iletisim" 
                onClick={() => setIsMenuOpen(false)} 
                className="block py-2.5 px-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-blue-400 transition"
              >
                İletişim & Teklif
              </Link>
            </div>
          )}
        </header>

        {/* Dinamik Sayfa İçerikleri */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Alt Bilgi (Footer) */}
        <footer className="bg-slate-900 border-t border-slate-800 py-8 text-center text-sm text-slate-400 mt-auto">
          <div className="max-w-7xl mx-auto px-4 space-y-2">
            <p>&copy; 2026 Tarık Çevran - 1. Sınıf Sanayi Dalgıcı. Tüm hakları saklıdır.</p>
            <p className="text-xs text-slate-500">Endüstriyel Su Altı Çözümleri & Acil Bireysel Destek Hizmetleri</p>
            <p className="text-xs text-slate-500">
              Powered by&nbsp;
              <a href="https://github.com/brainbonk" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                <b>Mr. Bonk</b>
              </a>
              &nbsp;| AI Support by&nbsp;
              <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                <b>gemini</b>
              </a>
            </p>
          </div>
        </footer>

        {/* Mobilde Ekranın Altında Sabit Kalan Arama Çubuğu */}
        <FloatingCallButton />

      </body>
    </html>
  );
}