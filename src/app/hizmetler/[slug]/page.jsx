import React from 'react';
import Link from 'next/link';

// Tüm hizmetlerin detaylı veritabanı
const servicesData = {
  'su-alti-kaynak-kesim': {
    title: 'Su Altı Kaynak, Kesim ve Demontaj',
    category: 'Kurumsal & Sanayi',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    description: '1. sınıf sanayi dalgıcı yetkinliği ile limanlarda, gemilerde ve su altı yapılarında yüksek basınçlı kaynak ve oksijenli kesim operasyonları.',
    details: [
      'Su altı elektrik ark kaynağı ve oksijenli kesim operasyonları',
      'Liman iskelelerinin çelik kazık ve profil kesimleri',
      'Batık ve demirbaş yapıların su altında parçalanarak demontajı',
      'Tahribatsız muayene hazırlığı ve teknik raporlama'
    ],
    features: ['1. Sınıf Dalgıç Sertifikası', 'Endüstriyel Ekipman', 'Güvenli Operasyon']
  },
  'tersane-ve-gemi-destek': {
    title: 'Tersane Hizmetleri, Pervane Polish ve Karina',
    category: 'Tersane & Gemi',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    description: 'Gemi havuzlama desteği, su altında pervane kontrolü, hidrolik parlatma (polish), karina temizliği ve Speedlog/Echosounder montajı.',
    details: [
      'Gemi su altı gövdesi (karina) temizlik ve denetimi',
      'Pervane kanatlarının su altında hidrolik parlatılması (Polish)',
      'Speedlog ve Echosounder sensörlerinin montaj, bakım ve değişimi',
      'Tersane havuzlama öncesi ve sonrası su altı sörveyi'
    ],
    features: ['Yakıt Tasarrufu Sağlar', 'Tersane Standartları', 'Hızlı Müdahale']
  },
  'sualti-ndt-ve-survey': {
    title: 'Sualtı NDT Kalınlık Ölçümü ve Sörvey',
    category: 'Mühendislik & Raporlama',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    description: 'Klas kuruluşları standartlarında ultrasonik su altı sac kalınlık ölçümü (NDT), HD video ve fotoğraf destekli teknik sörvey raporlaması.',
    details: [
      'Ultrasonik cihazlar ile su altı metal kalınlık ölçümü (NDT)',
      'Gemi ve liman kazıklarının yapısal korozyon denetimi',
      'HD çözünürlüklü su altı video kayıt ve detaylı mühendislik raporu',
      'Sigorta ve klas onaylı su altı denetim hizmetleri'
    ],
    features: ['Hassas Ölçüm', 'Video Raporlama', 'Klas Standartları']
  },
  'liman-ve-iskele-bakimi': {
    title: 'Liman, Marina ve İskele Bakım Onarımı',
    category: 'Kurumsal & Sanayi',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    description: 'Marina havzaları, rıhtımlar, deniz deşarj boru hatları bakımı, katodik koruma tutya değişimi ve su altı karot kesme operasyonları.',
    details: [
      'Deniz deşarj boru hattı kontrolleri, boru kelepçeleme ve tamir',
      'Marina tonoz zincir kontrolü, bakımı ve değişimi',
      'Sualtı beton karot delme ve çelik kesim işleri',
      'Katodik koruma (tutya) montajı ve korozyon önleme'
    ],
    features: ['Uzun Ömürlü Çözüm', 'Endüstriyel Ekipman', 'Yerinde İnceleme']
  },
  'su-alti-esya-arama-kurtarma': {
    title: 'Acil Su Altı Eşya, Telefon ve Batık Kurtarma',
    category: 'Acil & Bireysel',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    description: 'Denize düşürülen akıllı telefon, saat, anahtar ve değerli eşyaların profesyonel su altı dedektörleri ile kurtarılması ve acil tekne müdahaleleri.',
    details: [
      'Denize düşen akıllı telefon, tablet ve saat arama-çıkarma',
      'Yat / tekne anahtarları ve değerli eşya tespiti',
      'Pervaneye dolanan halat/ağların acil su altı kesimi',
      'Küçük tekne ve batık çıkarma operasyonları'
    ],
    features: ['7/24 Acil Müdahale', 'Su Altı Dedektörü', 'Hızlı Konum Desteği']
  }
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];
  
  if (!service) {
    return { title: 'Hizmet Bulunamadı | Tarık Çevran' };
  }

  return {
    title: `${service.title} | Tarık Çevran Sualtı Hizmetleri`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];
  const phoneNumber = "+905000000000";

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-6">
        <h1 className="text-3xl font-bold text-white">Aradığınız hizmet bulunamadı.</h1>
        <p className="text-slate-400">Lütfen hizmetler kataloğumuza göz atın.</p>
        <Link href="/hizmetler" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">
          Tüm Hizmetler &rarr;
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
      <div className="space-y-4">
        <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border ${service.badgeColor}`}>
          {service.category}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          {service.title}
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {service.features.map((feature, index) => (
          <div key={index} className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center text-slate-200 font-semibold text-sm">
            ✓ {feature}
          </div>
        ))}
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">Hizmet Kapsamı ve Detaylar</h2>
        <ul className="space-y-4">
          {service.details.map((detail, index) => (
            <li key={index} className="flex items-start gap-3 text-slate-300">
              <span className="text-blue-500 font-bold mt-1">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gradient-to-r from-blue-900/40 to-slate-900 border border-blue-500/30 rounded-2xl p-8 text-center space-y-6">
        <h3 className="text-2xl font-bold text-white">Bu Hizmet İçin Profesyonel Desteğe mi İhtiyacınız Var?</h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Tarık Çevran ile doğrudan iletişime geçerek detaylı bilgi alabilir, proje teklifi isteyebilir veya acil durumlar için konum paylaşabilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`tel:${phoneNumber}`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition"
          >
            📞 Hemen Ara
          </a>
          <a
            href="/iletisim"
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition"
          >
            📋 İletişim / Teklif Formu
          </a>
        </div>
      </div>
    </div>
  );
}