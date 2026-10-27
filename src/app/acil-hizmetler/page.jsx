import React from 'react';

export default function AcilHizmetlerPage() {
  const phoneNumber = "+905418741701"; // Tarık Bey'in numarası
  const whatsappMessage = "Acil su altı müdahale / eşya kurtarma için bilgi almak istiyorum.";

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      
      {/* Üst Bilgi & Acil Uyarı */}
      <div className="bg-red-950/40 border border-red-500/30 rounded-2xl p-6 md:p-10 text-center space-y-4">
        <span className="inline-block bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          7/24 Acil Müdahale Hattı
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">
          Su Altı Acil Arama & Kurtarma
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
          Denize düşen telefon, saat, anahtar, değerli eşyalar veya acil iskele/tekne müdahaleleri için hızlı konum tespiti ve profesyonel dalgıç desteği.
        </p>

        {/* Hızlı Arama Butonları */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a
            href={`tel:${phoneNumber}`}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-base"
          >
            <span>📞 Hemen Ara (0500 000 00 00)</span>
          </a>
          <a
            href={`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-base"
          >
            <span>💬 WhatsApp'tan Konum At</span>
          </a>
        </div>
      </div>

      {/* Sık Karşılaşılan Acil Durumlar */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">Hangi Durumlarda Yardım Alabilirsiniz?</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3">
            <div className="text-3xl">📱</div>
            <h3 className="text-xl font-semibold text-white">Telefon ve Eşya Kurtarma</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              İskeleden, tekneden ya da sahilden denize düşen akıllı telefonlar, akıllı saatler, anahtarlar veya değerli takıların su altı özel dedektör ve ekipmanlarla çıkarılması.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3">
            <div className="text-3xl">⚓</div>
            <h3 className="text-xl font-semibold text-white">Pervane & Halat Dolanması</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Seyir halindeyken veya demirliyken tekne pervanesine halat, misina veya yabancı cisim dolanması durumunda yerinde su altı müdahale ve temizliği.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3">
            <div className="text-3xl">🪵</div>
            <h3 className="text-xl font-semibold text-white">İskele Tamiri ve Kesimi</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Özel iskelelerin ayaklarında oluşan hasarlar, çelik/ahşap iskele kesim işleri, duba ve şamandıra bağlantılarının acil onarımı.
            </p>
          </div>

        </div>
      </div>

      {/* Süreç Nasıl İşler? */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">Acil Durum Süreci Nasıl İşler?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="w-10 h-10 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center mx-auto">1</div>
            <h4 className="font-semibold text-white">İletişime Geçin</h4>
            <p className="text-xs text-slate-400">Telefonla arayarak veya WhatsApp'tan olay yerinin konumunu ve durumu bildirin.</p>
          </div>
          <div className="space-y-2">
            <div className="w-10 h-10 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center mx-auto">2</div>
            <h4 className="font-semibold text-white">Hızlı Değerlendirme</h4>
            <p className="text-xs text-slate-400">Derinlik, akıntı ve eşyanın/sorunun niteliğine göre hızlıca hazırlık yapılsın.</p>
          </div>
          <div className="space-y-2">
            <div className="w-10 h-10 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center mx-auto">3</div>
            <h4 className="font-semibold text-white">Müdahale & Çözüm</h4>
            <p className="text-xs text-slate-400">En kısa sürede sahaya intikal edilerek su altı operasyonu gerçekleştirilsin.</p>
          </div>
        </div>
      </div>

    </div>
  );
}