# Day 12: Practice Problems

## 🎯 Instructions
Metadata aur SEO practices implement karo.

---

## Problem 1: Basic Metadata
**Basic metadata set karo:**

```tsx
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Mahroosh ka portfolio website',
  keywords: ['portfolio', 'developer', 'nextjs'],
  authors: [{ name: 'Mahroosh' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

✅ **Check:** Browser tab mein title dikh raha hai?

---

## Problem 2: Dynamic Metadata
**Dynamic route ke liye metadata:**

```tsx
// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  const titles: Record<string, string> = {
    'hello': 'Hello World Post',
    'nextjs': 'Next.js Tutorial',
  };
  
  return {
    title: titles[slug] || slug,
    description: `Read about ${slug}`,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  return <h1>Blog: {slug}</h1>;
}
```

✅ **Check:** Har blog post ka alag title hai?

---

## Problem 3: Template Metadata
**Title template use karo:**

```tsx
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'My Site',
    template: '%s | My Site',
  },
  description: 'A Next.js website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',  // Becomes "About | My Site"
};

export default function AboutPage() {
  return <h1>About</h1>;
}

// app/contact/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',  // Becomes "Contact | My Site"
};

export default function ContactPage() {
  return <h1>Contact</h1>;
}
```

✅ **Check:** Pages pe "Page Name | My Site" dikh raha hai?

---

## Problem 4: Open Graph Tags
**OG tags set karo:**

```tsx
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Site',
  openGraph: {
    title: 'My Site',
    description: 'Learn Next.js with practical examples',
    url: 'https://mysite.com',
    siteName: 'My Site',
    images: [
      {
        url: 'https://mysite.com/og.png',
        width: 1200,
        height: 630,
        alt: 'My Site',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

✅ **Check:** Social media pe share karne pe image aur description dikh raha hai?

---

## Problem 5: Sitemap
**Sitemap create karo:**

```tsx
// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = [
    { slug: 'hello', date: '2026-01-01' },
    { slug: 'nextjs', date: '2026-01-15' },
    { slug: 'tailwind', date: '2026-02-01' },
  ];
  
  const postUrls = posts.map(post => ({
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
```

✅ **Check:** `/sitemap.xml` pe URLs dikh rahe hain?

---

## Problem 6: Robots.txt
**Robots.txt create karo:**

```tsx
// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/admin/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: 'https://mysite.com/sitemap.xml',
  };
}
```

✅ **Check:** `/robots.txt` pe rules dikh rahe hain?

---

## Problem 7: Page-Specific Metadata
**Har page ka alag metadata:**

```tsx
// app/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to my website',
};

export default function HomePage() {
  return <h1>Home</h1>;
}

// app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about our company',
};

export default function AboutPage() {
  return <h1>About</h1>;
}

// app/services/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Our professional services',
};

export default function ServicesPage() {
  return <h1>Services</h1>;
}
```

✅ **Check:** Har page ka unique title aur description hai?

---

## Problem 8: Dynamic OG Images
**Dynamic OG image URLs:**

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
      images: [
        {
          url: `https://mysite.com/api/og?title=${encodeURIComponent(slug)}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  return <h1>{slug}</h1>;
}
```

✅ **Check:** Har blog post ka unique OG image hai?

---

## Problem 9: Twitter Cards
**Twitter card metadata:**

```tsx
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Site',
  twitter: {
    card: 'summary_large_image',
    title: 'My Site',
    description: 'Learn Next.js with practical examples',
    images: ['https://mysite.com/twitter.png'],
    creator: '@mahroosh',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

✅ **Check:** Twitter pe share karne pe card dikh raha hai?

---

## Problem 10: Complete SEO Setup
**Complete SEO setup karo:**

```tsx
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'My Site - Learn Next.js',
    template: '%s | My Site',
  },
  description: 'Complete Next.js tutorial with practical examples',
  keywords: ['nextjs', 'react', 'tailwind', 'tutorial', 'web development'],
  authors: [{ name: 'Mahroosh' }],
  creator: 'Mahroosh',
  metadataBase: new URL('https://mysite.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mysite.com',
    siteName: 'My Site',
    title: 'My Site',
    description: 'Complete Next.js tutorial',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'My Site',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Site',
    description: 'Complete Next.js tutorial',
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

// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://mysite.com', lastModified: new Date() },
    { url: 'https://mysite.com/about', lastModified: new Date() },
    { url: 'https://mysite.com/blog', lastModified: new Date() },
  ];
}

// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://mysite.com/sitemap.xml',
  };
}
```

✅ **Check:** Complete SEO setup kaam kar raha hai?

---

## ✅ Checklist
- [ ] Problem 1: Basic metadata
- [ ] Problem 2: Dynamic metadata
- [ ] Problem 3: Template metadata
- [ ] Problem 4: Open Graph tags
- [ ] Problem 5: Sitemap
- [ ] Problem 6: Robots.txt
- [ ] Problem 7: Page-specific metadata
- [ ] Problem 8: Dynamic OG images
- [ ] Problem 9: Twitter cards
- [ ] Problem 10: Complete SEO setup
