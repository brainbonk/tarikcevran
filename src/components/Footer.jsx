import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_INFO } from '@/constants/contact';

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 text-slate-300 pt-10 pb-10">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-4 border-b border-slate-900">

                {/* 1. Sütun: Kurumsal Kimlik & Logo / Kartvizit (4 Sütun) */}
                <div className="md:col-span-3 space-y-3 items-center flex flex-col">
                    <div className="relative w-80 h-90 md:w-60 md:h-70 rounded-xl overflow-hidden border border-slate-800 shadow-md flex-shrink-0 bg-slate-900">
                        <Image
                            src="/images/corporate/kartvizit-mavi.jpg"
                            alt="Çevran Sualtı Hizmetleri Logo"
                            fill
                            sizes="(max-width: 768px) 100vw, 200px"
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* 2. Sütun: Hızlı Linkler (3 Sütun) */}
                <div className="md:col-span-3 space-y-3">
                    <h3 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-blue-500 pl-3">
                        Hızlı Menü
                    </h3>
                    <ul className="space-y-2 text-xs">
                        <li>
                            <Link href="/" className="hover:text-blue-400 transition">Ana Sayfa</Link>
                        </li>
                        <li>
                            <Link href="/hizmetler" className="hover:text-blue-400 transition">Hizmetlerimiz</Link>
                        </li>
                        <li>
                            <Link href="/projeler" className="hover:text-blue-400 transition">Projelerimiz</Link>
                        </li>
                        <li>
                            <Link href="/acil-hizmetler" className="text-red-400 hover:text-red-800 transition font-semibold">🚨 Acil Müdahale</Link>
                        </li>
                    </ul>
                </div>

                {/* 3. Sütun: Kurumsal / Yasal (Yasal Sayfalar) (2 Sütun) */}
                <div className="md:col-span-3 space-y-3">
                    <h3 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-blue-500 pl-3">
                        Yasal & Bilgi
                    </h3>
                    <ul className="space-y-2 text-xs">
                        <li>
                            <Link href="/gizlilik-politikasi" className="hover:text-blue-400 transition">Gizlilik Politikası</Link>
                        </li>
                        <li>
                            <Link href="/cerez-politikasi" className="hover:text-blue-400 transition">Çerez İzinleri</Link>
                        </li>
                        <li>
                            <Link href="/kullanim-kosullari" className="hover:text-blue-400 transition">Kullanım Koşulları</Link>
                        </li>
                    </ul>
                </div>

                {/* 4. Sütun: İletişim Bilgileri (3 Sütun) */}
                <div className="md:col-span-3 space-y-3">
                    <h3 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-blue-500 pl-3">
                        İletişim
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-400">
                        <li>
                            📞 <a href={`tel:${CONTACT_INFO.phoneNumber}`} className="hover:text-white transition">{CONTACT_INFO.maskedNumber}</a>
                        </li>
                        <li>
                            💬 <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">WhatsApp Destek Hattı</a>
                        </li>
                        <li>
                            📍 <a
                                href="https://maps.app.goo.gl/K3fF6FTYq2fb3vVAA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-300 hover:text-blue-400 transition underline underline-offset-4 decoration-slate-700 hover:decoration-blue-400"
                            ><span className="text-slate-300 hover:text-blue-300 transition">Güre / Balıkesir / Türkiye</span></a>
                            <iframe loading="lazy" className="md:w-60 md:h-44 w-100 h-70 mt-2 border rounded-xl" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12299.39424349994!2d26.8622773!3d39.5855633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0bf0bccaf2333%3A0xf7b7c502b23c26f0!2sG%C3%BCre%20Liman%20Cafe%20%26%20Bistro!5e0!3m2!1str!2str!4v1794784362368!5m2!1str!2str"></iframe>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Alt Telif ve İMZA Alanı */}
            <div className="max-w-6xl mx-auto px-2 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center md:text-left">
                <div>
                    <p>&copy; 2026 Tarık Çevran - 1. Sınıf Sanayi Dalgıcı tüm hakları saklıdır.</p>
                    <p className="text-slate-400 mt-1">Endüstriyel Su Altı Çözümleri & Acil Bireysel Destek Hizmetleri</p>
                </div>
                <div className="text-slate-400 font-medium">
                    Powered by <a href="https://devkemal.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Kemal HELVACI</a>
                </div>
            </div>
        </footer>
    );
}