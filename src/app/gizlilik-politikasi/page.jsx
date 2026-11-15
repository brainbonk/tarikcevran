import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Gizlilik Politikası | Tarık Çevran - 1. Sınıf Sanayi Dalgıcı',
  description: 'Tarık Çevran Sualtı Hizmetleri web sitesi gizlilik politikası ve kişisel verilerin korunması hakkında bilgilendirme.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8 bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-2xl shadow-xl">
        
        <div className="space-y-3 border-b border-slate-800 pb-6">
          <Link href="/" className="text-xs text-blue-400 hover:underline">← Ana Sayfaya Dön</Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Gizlilik Politikası</h1>
          <p className="text-xs text-slate-400">Son Güncelleme Tarihi: 2026</p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">1. Giriş</h2>
            <p>
              Tarık Çevran Sanayi Dalgıçlığı olarak (bundan böyle &quot;Şirket&quot; veya &quot;Biz&quot; olarak anılacaktır), web sitemizi ziyaret eden kullanıcılarımızın gizliliğini korumaya taahhüt ediyoruz. İşbu Gizlilik Politikası, web sitemiz üzerinden toplanan kişisel verilerin türünü, nasıl kullanıldığını ve korunduğunu açıklar.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">2. Toplanan Bilgiler</h2>
            <p>
              Web sitemizi ziyaret ettiğinizde veya iletişim kanalları (telefon, WhatsApp, e-posta) üzerinden bizimle iletişime geçtiğinizde şu bilgiler toplanabilir:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>Ad, soyad ve unvan bilgileri (kurumsal taleplerde),</li>
              <li>İletişim bilgileri (telefon numarası, e-posta adresi),</li>
              <li>Hizmet talep edilen lokasyon ve operasyon detayları,</li>
              <li>Teknik veriler (IP adresi, tarayıcı türü, çerez verileri).</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">3. Bilgilerin Kullanım Amacı</h2>
            <p>
              Toplanan kişisel verileriniz şu amaçlarla işlenmektedir:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>Su altı kaynak, kesim, NDT ölçümü ve acil müdahale taleplerinizin yanıtlanması,</li>
              <li>Teklif hazırlama ve operasyonel koordinasyonun sağlanması,</li>
              <li>Müşteri memnuniyeti ve hizmet kalitesinin artırılması,</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">4. Veri Güvenliği</h2>
            <p>
              Kişisel verilerinizin güvenliğini sağlamak amacıyla güncel teknolojik altyapı ve güvenlik önlemleri uygulanmaktadır. Bilgileriniz üçüncü şahıslarla ticari amaçla kesinlikle paylaşılmaz; yalnızca yasal zorunluluklar çerçevesinde yetkili mercilerle paylaşılabilir.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">5. İletişim</h2>
            <p>
              Gizlilik politikamızla ilgili her türlü soru ve talebiniz için web sitemizde yer alan iletişim kanalları üzerinden bizimle irtibata geçebilirsiniz.
            </p>
          </section>
        </div>

      </div>
    </main>
  );
}