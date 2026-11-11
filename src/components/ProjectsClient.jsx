'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CONTACT_INFO } from '@/constants/contact';

export default function ProjectsClient() {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [activeVideoTitle, setActiveVideoTitle] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Su Altı NDT & Yapısal Sörvey',
      category: 'Sanayi & Kurumsal',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      location: 'Tersan Shipyard / Yalova',
      description: 'Tersane operasyonları kapsamında gerçekleştirilen bu projede; gemi saclarının korozyon durumları, çürümeler ve kritik yapısal kalınlık kayıpları su altı NDT ekipmanlarıyla yerinde tespit edilerek klas kuruluşlarının onayına sunulmuştur.',
      imagePlaceholder: '/images/yalova-ndt-kalinlik olcumleri-yapisal sorvey.jpeg',
      youtubeId: 'null' //YOUTUBE_VIDEO_ID
    },
    {
      id: 2,
      title: 'Gemi Altyapısı Su Altı Kaynak Operasyonu',
      category: 'Sanayi & Kurumsal',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      location: 'Aliağa / İzmir',
      description: 'İzmir Aliağa tersane bölgesinde yürütülen bu operasyonda; deniz tabanındaki veya gemi altyapısındaki hatlar için sızdırmaz ve yüksek mukavemetli su altı kaynağı kusursuz bir şekilde tamamlanmıştır.',
      imagePlaceholder: '/images/izmir-sualti-kaynak.jpeg',
      youtubeId: 'Kp07VOmXRaI'
    },
    {
      id: 3,
      title: 'İskele Konstrüksiyon ve Montaj Operasyonu',
      category: 'Acil & Bireysel',
      badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
      location: 'Güre Sahil Tesisleri / Balıkesir',
      description: 'Kıyı şeridindeki altyapı çalışmaları kapsamında gerçekleştirilen bu projede; dalga direncine uygun ağır hizmet tipi çelik iskele profillerinin su üstü/kenarı kesim, kaynak ve sabitleme süreçleri güvenle icra edilmiştir.',
      imagePlaceholder: '/images/gure-iskele-kesim-kaynak.jpeg',
      youtubeId: 'null'
    },
    {
      id: 4,
      title: 'Su Altı Boru Hattı Kaynak ve Onarım Çalışması',
      category: 'Acil & Kurumsal',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      location: 'Ortakent / Bodrum',
      description: 'Endüstriyel su altı mühendisliği standartlarına uygun olarak gerçekleştirilen bu projede; akış hatlarının su altı kaynak entegrasyonu, sızdırmazlık testleri ve güvenli montaj süreçleri profesyonel ekipmanlarla sahada başarıyla icra edilmiştir.',
      imagePlaceholder: '/images/bodrum-otel-boru-hatti-onarimi.jpeg',
      youtubeId: 'Kp07VOmXRaI'
    },
    {
      id: 5,
      title: 'Ayvalık Batık Tekne Kurtarma ve Çekimi',
      category: 'Acil & Kurumsal',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      location: 'Sahil Tesisleri / Ayvalık',
      description: 'Balıkesir Ayvalık\'ta fırtına nedeniyle hasar gören ve batık durumdaki teknenin su altı kurtarma ve çekim çalışmaları tamamlandı.',
      imagePlaceholder: '/images/ayvalik-batik-tekne.jpeg',
      youtubeId: 'Kp07VOmXRaI'
    },
    {
      id: 6,
      title: 'Acil Yelkenli Tekne Su altı Çapa ve Zincir Kurtarma Operasyonu',
      category: 'Acil & Bireysel',
      badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
      location: 'Setur Marina / Kuşadası',
      description: 'Kuşadası Setur Marina içerisinde demirleme veya zincir sıkışması yaşayan yelkenli tekneye ivedilikle müdahale edilerek; su altı operasyonuyla çapa ve takılan donanım güvenli bir şekilde kurtarılmış, tekne yeniden seyre hazır hale getirilmiştir.',
      imagePlaceholder: '/images/kusadasi-acil-yelkenli-capa-kurtarma.jpeg',
      youtubeId: 'null'
    },
    {
      id: 7,
      title: 'Pervane Kontrolü ve Yüksek Hassasiyetli Polisaj',
      category: 'Sanayi & Kurumsal',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      location: 'Tersan Shipyard / Yalova',
      description: 'Yalova Tersan bölgesinde gerçekleştirilen bu operasyonda; gemi pervanesinin kavitasyon, aşınma ve deformasyon kontrolleri titizlikle yapılmış, yakıt verimliliğini ve hidrodinamik performansı artırmak amacıyla su altı polisaj (parlatma) işlemi başarıyla tamamlanmıştır.',
      imagePlaceholder: '/images/yalova-pervane-kontrol-polish.jpeg',
      youtubeId: 'Kp07VOmXRaI'
    },
    {
      id: 8,
      title: 'Onarım ve Yapısal Konstrüksiyon Kaynak Operasyonu',
      category: 'Acil & Kurumsal',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      location: 'Tersan Shipyard / Yalova',
      description: 'Ağır gemi inşası ve bakım süreçlerinin bir parçası olarak yürütülen bu çalışmada; uluslararası denizcilik ve sınıflandırma kurallarına uygun yapısal sac onarımı, güçlendirme ve sızdırmazlık kaynak işlemleri güvenle icra edilmiştir.',
      imagePlaceholder: '/images/yalova-tersane-bakim-onarim.jpeg',
      youtubeId: 'Kp07VOmXRaI'
    },
    {
      id: 9,
      title: 'Bağlantı Donanımları ve Metal Konstrüksiyon Su Altı Kaynağı',
      category: 'Sanayi & Kurumsal',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      location: 'Ortakent / Bodrum',
      description: 'Denizcilik altyapısı ve bağlama sistemlerinin bakımı kapsamında yürütülen bu çalışmada; yıpranan veya sabitlenmesi gereken metal parçalar, kancalar ve zincir hatları yerinde su altı kaynak teknikleriyle güvenle sağlamlaştırılmıştır.',
      imagePlaceholder: '/images/bodrum-su-alti-kaynak.jpeg',
      youtubeId: 'Kp07VOmXRaI'
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
          Büyük liman operasyonlarından acil bireysel müdahalelere kadar sahada gerçekleştirdiğimiz çalışmalardan kareler. Videoları izlemek için kartlara tıklayabilirsiniz.
        </p>
      </div>

      {/* Projeler Grid Listesi */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            onClick={project.youtubeId !== 'null' ? () => {setActiveVideoId(project.youtubeId); setActiveVideoTitle(`${project.title} 📍${project.location}`);} : undefined}
            title={project.youtubeId !== 'null' ? project.title + " videosunu izlemek için tıklayın" : project.title}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition shadow-xl group cursor-pointer relative"
            style={project.youtubeId !== 'null' ? { cursor: 'pointer' } : { cursor: 'default' }}
          >
            {/* Oynat (Play) İkonu Overlay Efekti */}
            {project.youtubeId !== 'null' && (
            <div className="absolute top-4 right-4 z-10 bg-slate-950/80 backdrop-blur-sm text-white p-2 rounded-full border border-slate-700 opacity-60 group-hover:opacity-100 transition shadow-lg flex items-center gap-1.5 px-3 text-xs font-semibold">
              <span>▶ Videoyu İzle</span>
            </div>)}

            {/* Görsel Alanı */}
            <div className="bg-slate-950 h-56 flex items-center justify-center border-b border-slate-800 text-slate-500 font-medium text-sm overflow-hidden relative">
              <Image 
                src={project.imagePlaceholder}
                width={400}
                height={224}
                alt={project.title}
                priority
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
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

      {/* YOUTUBE VIDEO POPUP (MODAL) */}
      {activeVideoId && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl relative flex flex-col">
            
            {/* Modal Üst Kısım / Kapatma Butonu */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
              <span className="text-white font-semibold text-sm">{activeVideoTitle} - Tarık ÇEVRAN</span>
              <button 
                onClick={() => {setActiveVideoId(null); setActiveVideoTitle(null);}}
                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg text-sm font-bold transition cursor-pointer"
              >
                ✕ Kapat
              </button>
            </div>

            {/* YouTube Embed Video Alanı */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&mute=1`}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </div>
      )}

      {/* Alt Çağrı Kutusu */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-950/40 border border-slate-800 rounded-2xl p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">Benzer Bir Proje veya Acil Müdahaleye mi İhtiyacınız Var?</h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Tarık Çevran ile hemen iletişime geçerek detayları görüşebilir, projenize özel teklif alabilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <a
            href={`tel:${CONTACT_INFO.phoneNumber}`}
            title={`Tarık ÇEVRAN ${CONTACT_INFO.maskedNumber}`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition"
          >
            📞 Hemen Ara
          </a>
          <a
            href={CONTACT_INFO.whatsappLink}
            title={`Tarık ÇEVRAN WhatsApp ${CONTACT_INFO.maskedNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-base"
          >
            <span>💬 WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}