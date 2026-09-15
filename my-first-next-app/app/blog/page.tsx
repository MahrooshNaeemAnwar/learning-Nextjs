import Link from "next/link";

const posts = [
  {
    slug: "hello-world",
    title: "Hello World",
    excerpt: "Ye mera pehla blog post hai.",
    date: "2026-01-15",
  },
  {
    slug: "tailwind-css-tips",
    title: "Tailwind CSS Tips",
    excerpt: "Tailwind CSS use karne ke tips.",
    date: "2026-01-20",
  },
  {
    slug: "nextjs-basics",
    title: "Next.js Basics",
    excerpt: "Next.js seekhne ki shuruaat.",
    date: "2026-01-25",
  },
];

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl  text-gray-800 font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-2">{post.excerpt}</p>
            <span className="text-sm text-gray-500">{post.date}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
