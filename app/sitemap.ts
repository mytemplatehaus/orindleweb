import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://orindle.com';

  const routes = [
    '',
    '/services/social-media-management',
    '/services/website-design-development',
    '/services/digital-marketing',
    '/services/video-editing-content-production',
    '/services/ai-automation-chatbot-setup',
    '/privacy-policy',
    '/terms-of-service'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
