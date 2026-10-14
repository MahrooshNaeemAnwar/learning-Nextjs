import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = [
    { slug: 'hello', date: '2026-01-01' },
    { slug: 'nextjs', date: '2026-01-15' },
    { slug: 'tailwind', date: '2026-02-01' },
  ];

  const postUrls = posts.map((post) => ({
    url: `https://mysite.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: 'https://mysite.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://mysite.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...postUrls,
  ];
}
