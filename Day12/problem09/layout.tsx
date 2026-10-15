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
