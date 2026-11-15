import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Kullanım Koşulları | Tarık Çevran - 1. Sınıf Sanayi Dalgıcı',
  description: 'Tarık Çevran Sualtı Hizmetleri web sitesi yasal kullanım koşulları ve sorumluluk sınırlamaları.',
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8 bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-2xl shadow-xl">
        
        <div className="space-y-3 border-b border-slate-800 pb-6">
          <Link href="/" className="text-xs text-blue-400 hover:underline">← Ana Sayfaya Dön</Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Kullanım Koşulları</h1>
          <p className="text-xs text-slate-400">Son Güncelleme Tarihi: 2026</p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">1. Genel Hükümler</h2>
            <p>
              Bu web sitesini (tarikcevran.com) ziyaret ederek veya kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. Bu koşulları kabul etmiyorsanız lütfen siteyi kullanmayınız.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">2. Hizmet Kapsamı ve Fikri Mülkiyet</h2>
            <p>
              Web sitesinde yer alan tüm metinler, görseller, logolar, saha fotoğrafları, videolar ve tasarım öğeleri Tarık Çevran&apos;a aittir ve telif hakları ile korunmaktadır. İzinsiz kopyalanamaz, çoğaltılamaz veya başka mecralarda kullanılamaz.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">3. Sorumluluk Sınırlaması</h2>
            <p>
              Web sitemizde sunulan hizmet detayları, projeler ve iletişim bilgileri bilgilendirme amaçlıdır. Endüstriyel su altı hizmetleri, tersane operasyonları ve acil müdahaleler resmi sözleşmeler ve teknik şartnameler çerçevesinde yürütülür. Site içeriğinde oluşabilecek geçici aksaklıklardan şirketimiz sorumlu tutulamaz.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">4. Değişiklik Hakkı</h2>
            <p>
              Tarık Çevran Sualtı Hizmetleri, işbu kullanım koşullarında ve web sitesi içeriğinde dilediği zaman önceden bildirimde bulunmaksızın değişiklik yapma hakkını saklı tutar.
            </p>
          </section>
        </div>

      </div>
    </main>
  );
}