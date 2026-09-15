import Link from "next/link";

const posts = [
  {
    slug: "hello-world",
    title: "Hello World",
    content: "Ye mera pehla blog post hai.",
    author: "Mahroosh",
    date: "2026-01-15",
  },
  {
    slug: "tailwind-css-tips",
    title: "Tailwind CSS Tips",
    content: "Tailwind CSS use karne ke tips aur tricks.",
    author: "Mahroosh",
    date: "2026-01-20",
  },
  {
    slug: "nextjs-basics",
    title: "Next.js Basics",
    content: "Next.js seekhne ki shuruaat.",
    author: "Mahroosh",
    date: "2026-01-25",
  },
];

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">404 - Post Not Found</h1>
        <Link href="/blog" className="text-blue-500 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link
        href="/blog"
        className="text-blue-500 hover:underline mb-8 block"
      >
        ← Back to Blog
      </Link>

      <article>
        <h1 className="text-4xl text-gray-600 font-bold mb-4">{post.title}</h1>
        <div className="flex gap-4 text-gray-600 mb-8">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">{post.content}</p>
      </article>
    </div>
  );
}
