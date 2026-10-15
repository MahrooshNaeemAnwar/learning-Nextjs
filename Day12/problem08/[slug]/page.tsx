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
