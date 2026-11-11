'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/BrandLogo';
import FloatingCallButton from '@/components/FloatingCallButton';
import { CONTACT_INFO } from '@/constants/contact';
import './globals.css';

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="tr">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col pb-20 md:pb-0 overflow-x-hidden">
        {/* Navbar */}
        <header className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            
            <Link href="/" title='Tarık ÇEVRAN Anasayfa' onClick={() => setIsMenuOpen(false)}>
              <BrandLogo />
            </Link>
            
            <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-300 items-center">
              <Link href="/acil-hizmetler" className="hover:text-red-400 transition">🚨 Acil Arama Kurtarma</Link>
              <Link href="/hizmetler" className="hover:text-blue-400 transition">Hizmetler</Link>
              <Link href="/projeler" className="hover:text-blue-400 transition">Projeler</Link>
            </nav>

            <div className="hidden md:block">
              <a 
                href={`tel:${CONTACT_INFO.phoneNumber}`}
                title={`Tarık ÇEVRAN ${CONTACT_INFO.maskedNumber}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition shadow-md"
              >
                📞 Hemen Ara {CONTACT_INFO.maskedNumber}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Menüyü Aç/Kapat"
            >
              {isMenuOpen ? (
                /* close icon */
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* sandwich icon */
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
              <Link 
                href="/acil-hizmetler" 
                onClick={() => setIsMenuOpen(false)} 
                className="block py-2.5 px-3 rounded-lg text-base font-medium text-red-400 hover:bg-red-950/40 transition"
              >
                🚨 Acil Arama Kurtarma
              </Link>
              <Link 
                href="/hizmetler" 
                onClick={() => setIsMenuOpen(false)} 
                className="block py-2.5 px-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-blue-400 transition"
              >
                Hizmetler
              </Link>
              <Link 
                href="/projeler" 
                onClick={() => setIsMenuOpen(false)} 
                className="block py-2.5 px-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-blue-400 transition"
              >
                Projeler
              </Link>
            </div>
          )}
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-800 py-8 text-center text-sm text-slate-400 mt-auto">
          <div className="max-w-7xl mx-auto px-4 space-y-2">
            <p>&copy; 2026 Tarık Çevran - 1. Sınıf Sanayi Dalgıcı Tüm hakları saklıdır.</p>
            <p className="text-xs text-slate-500">Endüstriyel Su Altı Çözümleri & Acil Bireysel Destek Hizmetleri</p>
            <p className="text-xs text-slate-500">
              Powered by&nbsp;
              <a href="https://github.com/brainbonk" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                <b>Mr. Bonk</b>
              </a>
            </p>
          </div>
        </footer>

        <FloatingCallButton />
      </body>
    </html>
  );
}