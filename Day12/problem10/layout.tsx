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
