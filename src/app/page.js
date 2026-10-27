import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  const phoneNumber = "+905000000000"; // Tarık Bey'in telefon numarası

  return (
    <div className="space-y-16 pb-16 w-full overflow-x-hidden">
      
      {/* 1. HERO SECTION (Karşılama Alanı) */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 py-16 md:py-24 px-4 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Profesyonel Su Altı Çözümleri & Acil Müdahale
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            TARIK ÇEVRAN <span className="text-blue-500 block text-xl sm:text-3xl md:text-4xl mt-3 font-semibold">1. Sınıf Sanayi Dalgıcı</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Liman inşaatlarından marinalara, ağır sanayi su altı kesim-kaynak işlerinden sahilde kaybedilen değerli eşyaların ve telefonların kurtarılmasına kadar kesintisiz profesyonel hizmet.
          </p>

          {/* Aksiyon Butonları (Mobilde alt alta, büyük ekranda yan yana) */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 w-full max-w-md mx-auto sm:max-w-none">
            <a
              href={`tel:${phoneNumber}`}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 sm:px-8 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-base w-full sm:w-auto"
            >
              <span>🚨 Acil Dalgıç Çağır (7/24)</span>
            </a>
            <Link
              href="/iletisim"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 sm:px-8 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-base w-full sm:w-auto"
            >
              <span>📋 Kurumsal Teklif Al</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ÇİFT KANALLI YÖNLENDİRME (Dual-Funnel Grid - Mobil Uyumlu) */}
      <section className="max-w-6xl mx-auto px-4 w-full">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Hizmet Alanlarımız</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            İhtiyacınıza en uygun kategoriyi seçerek detaylı bilgi alabilir veya hemen iletişime geçebilirsiniz.
          </p>
        </div>

        {/* Mobilde alt alta (grid-cols-1), büyük ekranda yan yana (md:grid-cols-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          {/* Bireysel & Acil Hizmetler Kartı (Öncelikli olarak mobilde üstte yer alır) */}
          <div className="bg-slate-900 border-2 border-red-500/20 rounded-2xl p-6 sm:p-8 hover:border-red-500/50 transition-all flex flex-col justify-between shadow-xl group w-full">
            <div>
              <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">
                🛟
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Acil & Bireysel Hizmetler</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Denize düşen telefon, anahtar veya değerli eşyalarınızın kurtarılması, iskele bacağı onarımı, tekne pervanesine halat dolanması ve acil müdahale gerektiren bireysel durumlar.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-400 mb-8">
                <li className="flex items-center gap-2">✓ Su altı eşya / telefon arama ve çıkarma</li>
                <li className="flex items-center gap-2">✓ Tekne ve yat su altı destek hizmetleri</li>
                <li className="flex items-center gap-2">✓ İskele bacağı yapımı, kesimi ve tamiri</li>
              </ul>
            </div>
            <Link
              href="/acil-hizmetler"
              className="block bg-slate-800 hover:bg-red-600 hover:text-white text-slate-200 text-center font-semibold py-3 rounded-xl transition text-sm"
            >
              Acil Destek Alın &rarr;
            </Link>
          </div>

          {/* Kurumsal Sanayi Hizmetleri Kartı */}
          <div className="bg-slate-900 border-2 border-blue-500/20 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 transition-all flex flex-col justify-between shadow-xl group w-full">
            <div>
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">
                🏗️
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Kurumsal & Sanayi Dalışı</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Liman inşaatları, marina bakımları, su altı ağır kaynak ve kesim operasyonları, batık çıkarma ve denetim (sörvey) projeleriniz için 1. sınıf profesyonel dalgıçlık hizmeti.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-400 mb-8">
                <li className="flex items-center gap-2">✓ Su altı kaynak, kesim ve demontaj</li>
                <li className="flex items-center gap-2">✓ Liman, marina ve boru hattı projeleri</li>
                <li className="flex items-center gap-2">✓ Sörvey, video kayıt ve teknik raporlama</li>
              </ul>
            </div>
            <Link
              href="/hizmetler"
              className="block bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-200 text-center font-semibold py-3 rounded-xl transition text-sm"
            >
              Kurumsal Hizmetleri İncele &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* 3. GÜVEN & TECRÜBE BÖLÜMÜ */}
      <section className="bg-slate-900/50 border-y border-slate-800 py-12 md:py-16 px-4 w-full">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-400">1. Sınıf</div>
            <div className="text-xs sm:text-sm text-slate-400">Sanayi Dalgıcı Belgesi</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-400">7/24</div>
            <div className="text-xs sm:text-sm text-slate-400">Acil Müdahale İmkanı</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-400">Profesyonel</div>
            <div className="text-xs sm:text-sm text-slate-400">Saha Ekipmanları</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-400">%100</div>
            <div className="text-xs sm:text-sm text-slate-400">Güven & Gizlilik</div>
          </div>
        </div>
      </section>

    </div>
  );
}