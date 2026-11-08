import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Tarık Çevran | 1. Sınıf Sanayi Dalgıcı ve Su Altı Hizmetleri',
  description: 'Profesyonel sanayi dalgıçlığı, liman inşaat/bakım, su altı kaynak-kesim ve acil su altı eşya arama-kurtarma hizmetleri.',
  keywords: 'sanayi dalgıcı, 1. sınıf dalgıç, first class diver, su altı kesim kaynak, acil eşya çıkarma, deniz telefon çıkarma, iskele tamiri, Tarık Çevran, ege bölgesi dalgıç, marmara bölgesi dalgıç, akdeniz bölgesi dalgıç, karadeniz bölgesi dagıç',
};

export default function HomePage() {
  const phoneNumber = "+905418741701"; // Tarık Bey'in telefon numarası
  const whatsappMessage = "Merhaba, su altı hizmetleri hakkında bilgi ve teklif almak istiyorum.";

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
              <span>🚨📞 Acil Dalgıç Çağır (7/24)</span>
            </a>
            <a
              href={`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-base"
            >
              <span>💬 WhatsApp İletişim Hattı</span>
            </a>
          </div>
          {/* Sosyal ağlar */}
          <div className="flex flex-row justify-center items-center gap-2 sm:gap-4 pt-4 w-full max-w-md mx-auto">
            <a href="https://www.facebook.com/#" title="Facebook Tarık ÇEVRAN" target="_blank" rel="noopener noreferrer"
            className="bg-gray-400 p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72"
            fill="none">
            <path
              d="M46.4233 38.6403L47.7279 30.3588H39.6917V24.9759C39.6917 22.7114 40.8137 20.4987 44.4013 20.4987H48.1063V13.4465C45.9486 13.1028 43.7685 12.9168 41.5834 12.8901C34.9692 12.8901 30.651 16.8626 30.651 24.0442V30.3588H23.3193V38.6403H30.651V58.671H39.6917V38.6403H46.4233Z"
              fill="#111827" />
            </svg>
            </a>
            <a href="https://www.instagram.com/tarik.cevran" title="Instagram Tarık ÇEVRAN" target="_blank" rel="noopener noreferrer"
            className="bg-gray-400 p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72"
            fill="none">
            <path
              d="M27.3762 35.7808C27.3762 31.1786 31.1083 27.4468 35.7132 27.4468C40.3182 27.4468 44.0522 31.1786 44.0522 35.7808C44.0522 40.383 40.3182 44.1148 35.7132 44.1148C31.1083 44.1148 27.3762 40.383 27.3762 35.7808ZM22.8683 35.7808C22.8683 42.8708 28.619 48.618 35.7132 48.618C42.8075 48.618 48.5581 42.8708 48.5581 35.7808C48.5581 28.6908 42.8075 22.9436 35.7132 22.9436C28.619 22.9436 22.8683 28.6908 22.8683 35.7808ZM46.0648 22.4346C46.0646 23.0279 46.2404 23.608 46.5701 24.1015C46.8997 24.595 47.3684 24.9797 47.9168 25.2069C48.4652 25.4342 49.0688 25.4939 49.6511 25.3784C50.2334 25.2628 50.7684 24.9773 51.1884 24.5579C51.6084 24.1385 51.8945 23.6041 52.0105 23.0222C52.1266 22.4403 52.0674 21.8371 51.8404 21.2888C51.6134 20.7406 51.2289 20.2719 50.7354 19.942C50.2418 19.6122 49.6615 19.436 49.0679 19.4358H49.0667C48.2708 19.4361 47.5077 19.7522 46.9449 20.3144C46.3821 20.8767 46.0655 21.6392 46.0648 22.4346ZM25.6072 56.1302C23.1683 56.0192 21.8427 55.6132 20.9618 55.2702C19.7939 54.8158 18.9606 54.2746 18.0845 53.4002C17.2083 52.5258 16.666 51.6938 16.2133 50.5266C15.8699 49.6466 15.4637 48.3214 15.3528 45.884C15.2316 43.2488 15.2073 42.4572 15.2073 35.781C15.2073 29.1048 15.2336 28.3154 15.3528 25.678C15.4639 23.2406 15.8731 21.918 16.2133 21.0354C16.668 19.8682 17.2095 19.0354 18.0845 18.1598C18.9594 17.2842 19.7919 16.7422 20.9618 16.2898C21.8423 15.9466 23.1683 15.5406 25.6072 15.4298C28.244 15.3086 29.036 15.2844 35.7132 15.2844C42.3904 15.2844 43.1833 15.3106 45.8223 15.4298C48.2612 15.5408 49.5846 15.9498 50.4677 16.2898C51.6356 16.7422 52.4689 17.2854 53.345 18.1598C54.2211 19.0342 54.7615 19.8682 55.2161 21.0354C55.5595 21.9154 55.9658 23.2406 56.0767 25.678C56.1979 28.3154 56.2221 29.1048 56.2221 35.781C56.2221 42.4572 56.1979 43.2466 56.0767 45.884C55.9656 48.3214 55.5573 49.6462 55.2161 50.5266C54.7615 51.6938 54.2199 52.5266 53.345 53.4002C52.4701 54.2738 51.6356 54.8158 50.4677 55.2702C49.5872 55.6134 48.2612 56.0194 45.8223 56.1302C43.1855 56.2514 42.3934 56.2756 35.7132 56.2756C29.033 56.2756 28.2432 56.2514 25.6072 56.1302ZM25.4001 10.9322C22.7371 11.0534 20.9174 11.4754 19.3282 12.0934C17.6824 12.7316 16.2892 13.5878 14.897 14.977C13.5047 16.3662 12.6502 17.7608 12.0116 19.4056C11.3933 20.9948 10.971 22.8124 10.8497 25.4738C10.7265 28.1394 10.6982 28.9916 10.6982 35.7808C10.6982 42.57 10.7265 43.4222 10.8497 46.0878C10.971 48.7494 11.3933 50.5668 12.0116 52.156C12.6502 53.7998 13.5049 55.196 14.897 56.5846C16.289 57.9732 17.6824 58.8282 19.3282 59.4682C20.9204 60.0862 22.7371 60.5082 25.4001 60.6294C28.0687 60.7506 28.92 60.7808 35.7132 60.7808C42.5065 60.7808 43.3592 60.7526 46.0264 60.6294C48.6896 60.5082 50.5081 60.0862 52.0983 59.4682C53.7431 58.8282 55.1373 57.9738 56.5295 56.5846C57.9218 55.1954 58.7745 53.7998 59.4149 52.156C60.0332 50.5668 60.4575 48.7492 60.5768 46.0878C60.698 43.4202 60.7262 42.57 60.7262 35.7808C60.7262 28.9916 60.698 28.1394 60.5768 25.4738C60.4555 22.8122 60.0332 20.9938 59.4149 19.4056C58.7745 17.7618 57.9196 16.3684 56.5295 14.977C55.1395 13.5856 53.7431 12.7316 52.1003 12.0934C50.5081 11.4754 48.6894 11.0514 46.0284 10.9322C43.3612 10.811 42.5085 10.7808 35.7152 10.7808C28.922 10.7808 28.0687 10.809 25.4001 10.9322Z"
              fill="#111827" />
            </svg></a>
            <a href="https://www.yotube.com/#" title="YouTube Tarık ÇEVRAN" target="_blank" rel="noopener noreferrer"
            className="bg-gray-400 p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 71"
            fill="none">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M56.5615 18.2428C58.8115 18.8504 60.58 20.6234 61.1778 22.8708C62.2654 26.9495 62.2654 35.4647 62.2654 35.4647C62.2654 35.4647 62.2654 43.98 61.1778 48.0586C60.5717 50.3144 58.8032 52.0873 56.5615 52.6866C52.4932 53.7771 36.1703 53.7771 36.1703 53.7771C36.1703 53.7771 19.8557 53.7771 15.7791 52.6866C13.5291 52.079 11.7606 50.306 11.1628 48.0586C10.0752 43.98 10.0752 35.4647 10.0752 35.4647C10.0752 35.4647 10.0752 26.9495 11.1628 22.8708C11.7689 20.615 13.5374 18.8421 15.7791 18.2428C19.8557 17.1523 36.1703 17.1523 36.1703 17.1523C36.1703 17.1523 52.4932 17.1523 56.5615 18.2428ZM44.5142 35.4647L30.9561 43.314V27.6154L44.5142 35.4647Z"
              fill="#111827" />
            </svg></a>
            <a href="https://www.linkedin.com/in/#" title="LinkedIn Tarık ÇEVRAN" target="_blank" rel="noopener noreferrer"
            className="bg-gray-400 p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72"
            fill="none">
            <path
              d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
              fill="#111827" />
            </svg></a>
            <a href="#" title="Gmail Tarık ÇEVRAN" target="_blank" rel="noopener noreferrer"
            className="bg-gray-400 p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72"
            fill="none">
            <path
              d="M11.9362 56.1235H20.4189V35.5227L8.30078 26.434V52.4881C8.30078 54.4997 9.93067 56.1235 11.9362 56.1235Z"
              fill="#111827" />
            <path
              d="M49.5025 56.1235H57.9853C59.9969 56.1235 61.6207 54.4936 61.6207 52.4881V26.434L49.5025 35.5227"
              fill="#111827" />
            <path
              d="M49.5025 19.7693V35.5227L61.6207 26.434V21.587C61.6207 17.0912 56.4887 14.5282 52.8956 17.2245"
              fill="#111827" />
            <path d="M20.4189 35.5227V19.769L34.9607 30.6754L49.5025 19.7693V35.5227L34.9607 46.429"
              fill="#111827" />
            <path
              d="M8.30078 21.587V26.434L20.4189 35.5227V19.769L17.0259 17.2245C13.4268 14.5282 8.30078 17.0912 8.30078 21.587Z"
              fill="#111827" />
            </svg></a>
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