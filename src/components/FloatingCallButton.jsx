import React from 'react';

export default function FloatingCallButton() {
  // Tarık Bey'in telefon numarasını buraya yazabilirsin (Örn: "+905... ")
  const phoneNumber = "+905418741701"; 
  const whatsappMessage = "Merhaba, su altı arama / dalgıçlık hizmeti için acil bilgi almak istiyorum.";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-3 flex items-center justify-between gap-3 md:hidden shadow-2xl">
      <a
        href={`tel:${phoneNumber}`}
        className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
      >
        <span>📞 Acil Dalgıç Ara</span>
      </a>
      <a
        href={`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
      >
        <span>💬 WhatsApp</span>
      </a>
    </div>
  );
}