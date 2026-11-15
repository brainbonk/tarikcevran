import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Çerez Politikası | Tarık Çevran - 1. Sınıf Sanayi Dalgıcı',
  description: 'Tarık Çevran Sualtı Hizmetleri web sitesi çerez (cookie) kullanımı ve tercih yönetimi hakkında bilgilendirme.',
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8 bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-2xl shadow-xl">
        
        <div className="space-y-3 border-b border-slate-800 pb-6">
          <Link href="/" className="text-xs text-blue-400 hover:underline">← Ana Sayfaya Dön</Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Çerez Politikası</h1>
          <p className="text-xs text-slate-400">Son Güncelleme Tarihi: 2026</p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">1. Çerez Nedir?</h2>
            <p>
              Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcınız aracılığıyla cihazınıza veya ağ sunucusuna depolanan küçük metin dosyalarıdır. Web sitemizin düzgün çalışmasını sağlamak ve kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanılmaktadır.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">2. Kullanılan Çerez Türleri</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>
                <strong>Zorunlu Çerezler:</strong> Web sitesinin düzgün çalışması, güvenliğin sağlanması ve sayfalar arası gezinmenin yapılabilmesi için gerekli olan teknik çerezlerdir.
              </li>
              <li>
                <strong>Performans ve Analitik Çerezler:</strong> Ziyaretçilerin web sitemizi nasıl kullandığını analiz etmemize, site performansını ölçmemize ve iyileştirmeler yapmamıza yardımcı olur.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">3. Çerez Tercihlerinin Yönetimi</h2>
            <p>
              Tarayıcınızın ayarlarını değiştirerek çerezleri kabul edebilir, reddedebilir veya silebilirsiniz. Çoğu web tarayıcısı çerezleri otomatik olarak kabul eder; ancak tarayıcı ayarlarından bunları dilediğiniz gibi engelleyebilirsiniz. Zorunlu çerezlerin engellenmesi durumunda web sitesinin bazı özellikleri çalışmayabilir.
            </p>
          </section>
        </div>

      </div>
    </main>
  );
}