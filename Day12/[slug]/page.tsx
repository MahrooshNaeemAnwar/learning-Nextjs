import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const titles: Record<string, string> = {
    'hello world': 'hello world post',
    nextjs: 'nextjs tutorial',
  };

  return {
    title: titles[slug] || slug,
    description: `Read about ${slug}`,
  };
}

export async function BlogPost({ params }: Props) {
  const { slug } = await params;
  return <h1>Blog: {slug}</h1>;
}
