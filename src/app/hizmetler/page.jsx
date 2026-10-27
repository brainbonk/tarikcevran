import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Hizmetlerimiz | Tarık Çevran - Sualtı Kesim, Kaynak ve Tersane Çözümleri',
  description: 'Sanayi dalgıçlığı, su altı kaynak-kesim, tersane hizmetleri, pervane polish, NDT kalınlık ölçümü ve acil arama-kurtarma hizmetlerimiz.',
};

export default function ServicesPage() {
  const services = [
    {
      slug: 'su-alti-kaynak-kesim',
      title: 'Su Altı Kaynak, Kesim ve Demontaj',
      category: 'Kurumsal & Sanayi',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      description: 'Limanlarda, gemilerde ve su altı yapılarında 1. sınıf yetkinlikle yüksek basınçlı kaynak ve oksijenli kesim operasyonları.',
    },
    {
      slug: 'tersane-ve-gemi-destek',
      title: 'Tersane Hizmetleri, Pervane Polish ve Karina',
      category: 'Tersane & Gemi',
      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      description: 'Gemi havuzlama desteği, pervane kontrol ve polish (parlatma), karina kontrol ve temizliği, speedlog & echosounder montajı.',
    },
    {
      slug: 'sualti-ndt-ve-survey',
      title: 'Sualtı NDT Kalınlık Ölçümü ve Sörvey',
      category: 'Mühendislik & Raporlama',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      description: 'Klas kuruluşları standartlarında sualtı NDT kalınlık ölçümleri, detaylı yapısal sörvey, video kayıt ve teknik raporlama.',
    },
    {
      slug: 'liman-ve-iskele-bakimi',
      title: 'Liman, Marina ve İskele Bakım Onarımı',
      category: 'Kurumsal & Sanayi',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      description: 'Deniz deşarj hatları, kazık koruma işlemleri, tonoz zincir bakımları, sualtı karot kesme ve delme operasyonları.',
    },
    {
      slug: 'su-alti-esya-arama-kurtarma',
      title: 'Acil Su Altı Eşya, Telefon ve Batık Kurtarma',
      category: 'Acil & Bireysel',
      badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
      description: 'Denize düşürülen telefon/değerli eşyaların kurtarılması, tekne pervanesine halat dolanması müdahaleleri ve batık çıkarma.',
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Kesim | Kaynak | Bakım | Onarım
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">
          Profesyonel Hizmetlerimiz
        </h1>
        <p className="text-slate-300 text-base md:text-lg">
          Tersane operasyonlarından büyük liman projelerine ve acil bireysel ihtiyaçlara kadar eksiksiz su altı çözümleri.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div 
            key={service.slug} 
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-blue-500/50 transition shadow-xl group"
          >
            <div className="space-y-4">
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border ${service.badgeColor}`}>
                {service.category}
              </span>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">
                {service.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
            
            <div className="pt-6 mt-6 border-t border-slate-800">
              <Link
                href={`/hizmetler/${service.slug}`}
                className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm hover:text-blue-300 transition"
              >
                <span>Hizmet Detaylarını İncele</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}