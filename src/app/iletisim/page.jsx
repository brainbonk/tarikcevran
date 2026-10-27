import React from 'react';

export const metadata = {
  title: 'İletişim & Teklif Al | Tarık Çevran - Sanayi Dalgıcı',
  description: 'Tarık Çevran ile iletişime geçin. Sanayi dalgıçlığı projeleriniz için teklif alın veya acil su altı hizmetleri için 7/24 doğrudan ulaşın.',
};

export default function ContactPage() {
  const phoneNumber = "+905418741701"; // Tarık Bey'in telefon numarası
  const whatsappMessage = "Merhaba, su altı hizmetleri hakkında bilgi ve teklif almak istiyorum.";

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      
      {/* Sayfa Üst Başlık */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          7/24 Kesintisiz İletişim
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">
          İletişim & Proje Teklifi
        </h1>
        <p className="text-slate-300 text-base md:text-lg">
          Liman, marina ve sanayi projeleriniz için teklif isteyebilir; denize düşen eşyalarınız veya acil iskele/tekne müdahaleleri için doğrudan ulaşabilirsiniz.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Sol Kolon: Doğrudan İletişim Kartları */}
        <div className="space-y-6 lg:col-span-1">
          
          {/* Telefon Kartı */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="text-blue-400 text-2xl font-bold">📞 Telefon</div>
            <p className="text-xs text-slate-400">7/24 Doğrudan Arama</p>
            <a 
              href={`tel:${phoneNumber}`} 
              className="text-lg font-bold text-white hover:text-blue-400 transition block"
            >
              0(541) 874 1701
            </a>
          </div>

          {/* WhatsApp Kartı */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="text-emerald-400 text-2xl font-bold">💬 WhatsApp & Konum</div>
            <p className="text-xs text-slate-400">Acil durumlarda canlı konum atabilirsiniz.</p>
            <a 
              href={`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-xl text-sm transition"
            >
              WhatsApp Mesajı Gönder
            </a>
          </div>

          {/* Hizmet Bölgeleri */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="text-amber-400 text-2xl font-bold">📍 Çalışma Alanı</div>
            <p className="text-xs text-slate-400">Hizmet Verilen Bölgeler</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Tüm Türkiye genelinde liman/sanayi projeleri ve ege/akdeniz sahil şeridinde yerinde acil su altı müdahale hizmetleri.
            </p>
          </div>

        </div>

        {/* Sağ Kolon: İletişim & Teklif Formu */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-white">Bize Mesaj veya Teklif Talebi Gönderin</h2>
          
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300">Adınız Soyadınız / Firma Adı</label>
                <input 
                  type="text" 
                  placeholder="Örn: Ahmet Yılmaz / X İnşaat"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300">Telefon Numaranız</label>
                <input 
                  type="tel" 
                  placeholder="05XX XXX XX XX"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Hizmet Türü</label>
              <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition">
                <option value="sanayi">Kurumsal & Sanayi Dalışı (Liman, Kaynak, Kesim vb.)</option>
                <option value="acil">Acil Su Altı Eşya / Telefon Kurtarma</option>
                <option value="iskele">İskele Yapımı, Bakım ve Kesim İşleri</option>
                <option value="diger">Diğer Su Altı Hizmetleri</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Mesajınız / Proje Detayları</label>
              <textarea 
                rows="4" 
                placeholder="Yapılacak iş, lokasyon veya acil durum hakkında detay veriniz..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition shadow-lg text-sm"
            >
              Gönder
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}