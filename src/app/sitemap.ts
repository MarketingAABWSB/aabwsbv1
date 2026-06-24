import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Use the environment variable for your production domain, or fallback to localhost
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // List all your static routes here
  const routes = [
    '',
    '/about-us',
    '/blog',
    '/bulletin',
    '/car-insurance',
    '/newsletter',
    '/projek',
    '/services',
  ];

  const sitemapEntries = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return sitemapEntries;
}
