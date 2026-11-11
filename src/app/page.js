import React from 'react';
import Link from 'next/link';
import { CONTACT_INFO } from '@/constants/contact';
import Facebook from '@/components/social-buttons/Facebook';
import Instagram from '@/components/social-buttons/Instagram';
import Youtube from '@/components/social-buttons/Youtube';
import LinkedIn from '@/components/social-buttons/LinkedIn';
import Gmail from '@/components/social-buttons/Gmail';

export const metadata = {
  title: 'Tarık Çevran | 1. Sınıf Sanayi Dalgıcı ve Su Altı Hizmetleri',
  description: 'Profesyonel sanayi dalgıçlığı, liman inşaat/bakım, su altı kaynak-kesim ve acil su altı eşya arama-kurtarma hizmetleri.',
  keywords: 'sanayi dalgıcı, 1. sınıf dalgıç, first class diver, su altı kesim kaynak, acil eşya çıkarma, deniz telefon çıkarma, iskele tamiri, Tarık Çevran, ege bölgesi dalgıç, marmara bölgesi dalgıç, akdeniz bölgesi dalgıç, karadeniz bölgesi dagıç',
};

export default function HomePage() {
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
              href={`tel:${CONTACT_INFO.phoneNumber}`}
              title={`Tarık ÇEVRAN ${CONTACT_INFO.maskedNumber}`}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 sm:px-8 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-base w-full sm:w-auto"
            >
              <span>🚨📞 Acil Dalgıç Çağır (7/24)</span>
            </a>
            <a
              href={CONTACT_INFO.whatsappLink}
              title= {`Tarık ÇEVRAN WhatsApp ${CONTACT_INFO.maskedNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-base"
            >
              <span>💬 WhatsApp İletişim Hattı</span>
            </a>
          </div>

          {/* Sosyal ağlar */}
          <div className="flex flex-row justify-center items-center gap-2 sm:gap-4 pt-4 w-full max-w-md mx-auto">
            <Facebook />
            <Instagram />
            <Youtube />
            <LinkedIn />
            <Gmail />
          </div>
        </div>
      </section>

      {/* 2. ÇİFT KANALLI YÖNLENDİRME (Dual-Funnel Grid - Mobil Uyumlu) */}
      <section className="max-w-6xl mx-auto px-4 w-full pb-16 md:pb-24 border-b border-slate-800">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white">🛥️ Çalışma Alanlarımız</h2>
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

      <section className="max-w-6xl mx-auto px-4 w-full">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white">📍Hizmet Bölgelerimiz</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            Üç tarafı denizlerle çevrili ülkemizde; Ege, Marmara, Akdeniz ve Karadeniz sahil şeridinde profesyonel su altı hizmetleri sunuyoruz.
          </p>
        </div>

        {/* Mobilde alt alta (grid-cols-1), büyük ekranda yan yana (md:grid-cols-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          {/* EGE */}
          <div className="bg-slate-900 border-2 border-blue-500/20 rounded-2xl p-6 sm:p-8 hover:border-gray-500/50 transition-all flex flex-col justify-between shadow-xl group w-full">
            <div>
              <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">
                🌊
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Ege Sahil Bölgeleri</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                ☆ ☆ ☆ Aynı gün içinde en hızlı müdahale bölgesidir.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-400 mb-2">
                <li>
                  <b className='text-white text-sm'>✓ Balıkesir:</b> Güre, Akçay, Altınoluk, Ayvalık, Cunda (Alibey Adası), Sarımsaklı, Burhaniye, Ören, Edremit, Gömeç, Erdek, Bandırma, Gönen, Marmara Adası, Avşa Adası
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Çanakkale:</b> Bozcaada, Gökçeada, Assos (Behramkale), Küçükkuyu, Gelibolu, Eceabat, Lapseki, Ayvacık, Biga, Ezine, Dardanos
                </li>
                <li>
                  <b className='text-white text-sm'>✓ İzmir:</b> Dikili, Bademli, Aliağa, Foça, Menemen, Çiğli, Karşıyaka, Bayraklı, Konak, Balçova, Narlıdere, Güzelbahçe, Urla, Karaburun, Mordoğan, Çeşme, Alaçatı, Seferihisar, Sığacık, Menderes, Özdere, Gümüldür, Selçuk, Pamucak
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Aydın:</b> Kuşadası, Davutlar, Güzelçamlı, Söke, Didim, Akbük, Altınkum
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Muğla:</b> Bodrum (Gümbet, Bitez, Yalıkavak, Turgutreis, Göltürkbükü, Torba), Milas (Güllük, Ören), Datça (Palamutbükü), Marmaris (İçmeler, Turunç, Selimiye, Bozburun), Ula (Akyaka), Köyceğiz, Ortaca (Dalyan, Sarıgerme), Dalaman, Fethiye (Ölüdeniz, Göcek, Kabak Koyu, Kelebekler Vadisi), Seydikemer
                </li>
              </ul>
            </div>
          </div>

          {/* MARMARA */}
          <div className="bg-slate-900 border-2 border-blue-500/20 rounded-2xl p-6 sm:p-8 hover:border-gray-500/50 transition-all flex flex-col justify-between shadow-xl group w-full">
            <div>
              <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">
                🌊
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Marmara Sahil Bölgeleri</h3>
              <ul className="space-y-2.5 text-sm text-slate-400 mb-2">
                <li>
                  <b className='text-white text-sm'>✓ İstanbul:</b> Şile, Ağva, Kilyos (Kumköy), Sarıyer, Beykoz, Kadıköy, Maltepe, Kartal, Pendik, Tuzla, Bakırköy, Zeytinburnu, Florya, Yeşilköy, Büyükçekmece, Küçükçekmece, Silivri, Kumburgaz, Çatalca (Yalıköy, Ormanlı), Adalar (Büyükada, Heybeliada, Burgazada, Kınalıada)
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Kocaeli:</b> Kandra (Kerpe, Kefken, Cebeci, Bağırganlı), İzmit, Körfez, Derince, Gölcük, Karamürsel, Başiskele
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Sakarya:</b> Karasu, Kocaali, Kaynarca
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Yalova:</b> Merkez, Çınarcık, Esenköy, Armutlu, Fıstıklı, Altınova, Subaşı, Kaytazdere, Çiftlikköy
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Bursa:</b> Gemlik, Mudanya, Tirilye, Karacabey (Yeniköy, Malkara), İznik
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Balıkesir (Marmara Kıyısı):</b> Bandırma, Erdek, Ocaklar, Narlı, Tatlısu, Gönen (Denizkent), Marmara Adası, Avşa Adası, Paşalimanı Adası
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Tekirdağ:</b> Süleymanpaşa, Marmaraereğlisi, Yeniçiftlik, Şarköy, Mürefte, Kumbağ, Barbaros, Saray (Kastro / Çamlıköy)
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Kırklareli:</b> İğneada, Kıyıköy, Demirköy, Vize
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Çanakkale (Marmara Kıyısı):</b> Gelibolu, Eceabat, Lapseki, Biga (Karabiga), Çardak
                </li>
              </ul>
            </div>
          </div>

          {/* AKDENİZ */}
          <div className="bg-slate-900 border-2 border-blue-500/20 rounded-2xl p-6 sm:p-8 hover:border-gray-500/50 transition-all flex flex-col justify-between shadow-xl group w-full">
            <div>
              <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">
                🌊
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Akdeniz Sahil Bölgeleri</h3>
              <ul className="space-y-2.5 text-sm text-slate-400 mb-2">
                <li>
                  <b className='text-white text-sm'>✓ Antalya:</b> Kaş (Kalkan, Patara), Kumluca (Adrasan, Çıralı, Olimpos), Kemer (Tekirova, Çamyuva, Göynük), Muratpaşa (Lara), Konyaaltı, Aksu, Serik (Belek), Manavgat (Side, Titreyengöl), Alanya, Gazipaşa
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Mersin:</b> Anamur, Bozyazı, Aydıncık, Silifke (Taşucu, Narlıkuyu, Yapraklı Koy, Kızkalesi), Erdemli (Ayaş, Kargıpınarı, Tömük), Mezitli, Yenişehir, Akdeniz
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Adana:</b> Karataş, Yumurtalık
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Hatay:</b> Dörtyol, Erzin, İskenderun, Arsuz, Samandağ, Çevlik
                </li>
              </ul>
            </div>
          </div>

          {/* KARADENİZ */}
          <div className="bg-slate-900 border-2 border-blue-500/20 rounded-2xl p-6 sm:p-8 hover:border-gray-500/50 transition-all flex flex-col justify-between shadow-xl group w-full">
            <div>
              <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">
                🌊
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Karadeniz Sahil Bölgeleri</h3>
              <ul className="space-y-2.5 text-sm text-slate-400 mb-2">
                <li>
                  <b className='text-white text-sm'>✓ Düzce:</b> Akçakoca
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Zonguldak:</b> Ereğli (Kdz. Ereğli), Merkez, Filyos (Çaycuma), Alaplı
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Bartın:</b> Amasra, Kurucaşile, İnkumu
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Kastamonu:</b> Cide, İnebolu, Abana, Bozkurt, Doğanyurt
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Sinop:</b> Merkez (Akliman, Sarıkum), Ayancık, Türkeli, Gerze
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Samsun:</b> 19 Mayıs, Bafra, Alaçam, Ondokuzmayıs, Atakum, İlkadım, Tekkeköy, Terme
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Ordu:</b> Ünye, Fatsa, Altınordu, Perşembe, Gülyalı
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Giresun:</b> Merkez, Tirebolu, Espiye, Bulancak, Görele, Eynesil
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Trabzon:</b> Akçaabat, Çarşıbaşı, Yomra, Arsin, Araklı, Sürmene, Of, Ortahisar
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Rize:</b> Çayeli, Pazar, Ardeşen, Fındıklı, Merkez
                </li>
                <li>
                  <b className='text-white text-sm'>✓ Artvin:</b> Hopa, Arhavi, Borçka
                </li>
              </ul>
            </div>
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