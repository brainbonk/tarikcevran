export default async function sitemap() {
  const baseUrl = 'https://tarikcevran.com';

  // Dinamik hizmet sayfalarımızın slug listesi
  const services = [
    'su-alti-kaynak-kesim',
    'tersane-ve-gemi-destek',
    'sualti-ndt-ve-survey',
    'liman-ve-iskele-bakimi',
    'su-alti-esya-arama-kurtarma',
  ];

  const serviceUrls = services.map((slug) => ({
    url: `${baseUrl}/hizmetler/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/hizmetler`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hakkimda`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...serviceUrls,
  ];
}