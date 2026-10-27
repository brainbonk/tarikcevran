import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Tamamlanan Projeler & Saha Galerisi | Tarık Çevran Sanayi Dalgıcı',
  description: 'Tarık Çevran tarafından gerçekleştirilen liman inşaatları, su altı kaynak-kesim operasyonları, marina bakımları ve arama-kurtarma saha görselleri.',
};

export default function ProjectsPage() {
  // Örnek Proje Veritabanı (İleride fotoğraflar ve gerçek proje detaylarıyla güncellenebilir)
  const projects = [
    {
      id: 1,
      title: 'Liman Çelik Kazık Kesimi ve Demontaj',
      category: 'Kurumsal & Sanayi',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      location: 'Ege Bölgesi Liman Projesi',
      description: '1. sınıf sanayi dalgıcı yetkinliğiyle su altında yüksek basınçlı oksijenli kesim operasyonu ve çelik yapı demontajı başarıyla tamamlandı.',
      imagePlaceholder: '🏗️ [Su Altı Kesim Görseli]'
    },
    {
      id: 2,
      title: 'Marina Tonoz Zincir Bakım ve Kontrolü',
      category: 'Kurumsal & Sanayi',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      location: 'Kuşadası / Bodrum Marinaları',
      description: 'Yat bağlama sistemlerinin güvenliği için tonoz zincirlerinin periyodik su altı sörveyi, aşınma kontrolü ve tutya değişimi gerçekleştirildi.',
      imagePlaceholder: '⚓ [Marina Sörvey Görseli]'
    },
    {
      id: 3,
      title: 'Denize Düşen Akıllı Telefon ve Eşya Kurtarma',
      category: 'Acil & Bireysel',
      badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
      location: 'Özel Sahil / Marina',
      description: 'İskeleden denize düşen son model akıllı telefon, özel su altı tarama ekipmanları kullanılarak kısa süre içerisinde sahiplerine sağ salim teslim edildi.',
      imagePlaceholder: '📱 [Su Altı Arama Görseli]'
    },
    {
      id: 4,
      title: 'Ahşap ve Çelik İskele Ayağı Onarımı',
      category: 'Bireysel & Kurumsal',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      location: 'Sahil Tesisleri',
      description: 'Fırtına nedeniyle hasar gören özel mülk iskelesinin su altı ayaklarının güçlendirilmesi ve kaynaklı onarım çalışmaları tamamlandı.',
      imagePlaceholder: '🪵 [İskele Tamir Görseli]'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      
      {/* Sayfa Üst Başlık */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Saha Deneyimi & Kanıtlar
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">
          Projelerimiz & Saha Galerisi
        </h1>
        <p className="text-slate-300 text-base md:text-lg">
          Büyük liman operasyonlarından acil bireysel müdahalelere kadar sahada gerçekleştirdiğimiz çalışmalardan kareler.
        </p>
      </div>

      {/* Projeler Grid Listesi */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition shadow-xl group"
          >
            {/* Görsel Alanı (Gerçek projede <Image /> veya <img /> etiketi kullanılacak) */}
            <div className="bg-slate-950 h-56 flex items-center justify-center border-b border-slate-800 text-slate-500 font-medium text-sm group-hover:bg-slate-900/80 transition">
              {project.imagePlaceholder}
            </div>

            <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border ${project.badgeColor}`}>
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">📍 {project.location}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Alt Çağrı Kutusu */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-950/40 border border-slate-800 rounded-2xl p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">Benzer Bir Proje veya Acil Müdahaleye mi İhtiyacınız Var?</h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Tarık Çevran ile hemen iletişime geçerek detayları görüşebilir, projenize özel teklif alabilirsiniz.
        </p>
        <div className="pt-2">
          <Link
            href="/iletisim"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition text-sm"
          >
            İletişime Geçin &rarr;
          </Link>
        </div>
      </div>

    </div>
  );
}