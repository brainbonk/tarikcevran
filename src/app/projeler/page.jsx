import React from 'react';
import ProjectsClient from '@/components/ProjectsClient';

export const metadata = {
  title: 'Projeler | Tarık Çevran - Su altı Kesim, Kaynak, Tersane ve Liman Çözümleri ve Su Altı Hizmetleri Projeleri',
  description: 'Tarık Çevran tarafından gerçekleştirilen liman inşaatları, su altı kaynak-kesim operasyonları, marina bakımları ve arama-kurtarma saha görselleri.',
  keywords: 'su altı projeleri, tersane operasyonları, aliağa su altı kaynağı, yalova ndt ölçümü, bodrum su altı boru hattı, kuşadası acil çapa kurtarma, ayvalık batık tekne çıkarma, güre iskele montajı, gemi pervane polisajı, sanayi dalgıcı saha çalışmaları, su altı kaynak fotoğrafları, deniz altı bakım onarım referansları',
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}