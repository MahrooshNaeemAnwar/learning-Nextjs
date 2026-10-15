import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://mysite.com', lastModified: new Date() },
    { url: 'https://mysite.com/about', lastModified: new Date() },
    { url: 'https://mysite.com/blog', lastModified: new Date() },
  ];
}
