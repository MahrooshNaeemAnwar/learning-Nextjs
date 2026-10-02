# Day 12: Metadata & SEO

## 📚 Aaj Kya Seekhoge?
- Metadata API
- Dynamic metadata
- Open Graph tags
- Sitemap & Robots.txt

---

## 🏷️ Static Metadata

```tsx
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Site',
  description: 'A Next.js website',
  keywords: ['nextjs', 'react', 'tutorial'],
  authors: [{ name: 'Mahroosh' }],
  openGraph: {
    title: 'My Site',
    description: 'A Next.js website',
    url: 'https://mysite.com',
    siteName: 'My Site',
    images: [
      {
        url: 'https://mysite.com/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};
```

---

## 🔄 Dynamic Metadata

```tsx
// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  return {
    title: `Blog: ${slug}`,
    description: `Read about ${slug}`,
    openGraph: {
      title: `Blog: ${slug}`,
      description: `Read about ${slug}`,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  return <h1>Blog: {slug}</h1>;
}
```

---

## 📍 Sitemap

```tsx
// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
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
    {
      url: 'https://mysite.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];
}
```

---

## 🤖 Robots.txt

```tsx
// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://mysite.com/sitemap.xml',
  };
}
```

---

## 📝 Complete SEO Example

```tsx
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'My Site - Home',
    template: '%s | My Site',
  },
  description: 'Learn Next.js with practical examples',
  keywords: ['nextjs', 'react', 'tailwind', 'tutorial'],
  authors: [{ name: 'Mahroosh' }],
  creator: 'Mahroosh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mysite.com',
    title: 'My Site',
    description: 'Learn Next.js with practical examples',
    siteName: 'My Site',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Site',
    description: 'Learn Next.js with practical examples',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// app/page.tsx
export default function HomePage() {
  return <h1>Home</h1>;
}

// app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About our company',
};

export default function AboutPage() {
  return <h1>About</h1>;
}
```

---

## 🎯 Aaj Ka Summary

| Concept | File/Code | Use Case |
|---------|-----------|----------|
| Static | `export const metadata` | Fixed metadata |
| Dynamic | `generateMetadata()` | Route-based |
| Sitemap | `app/sitemap.ts` | SEO |
| Robots | `app/robots.ts` | Crawl rules |

---

## ✅ Next Steps
- Kal hum **Server Actions** seekhenge
- Aaj ke practice problems solve karo
