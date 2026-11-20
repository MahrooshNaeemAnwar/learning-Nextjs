import { prisma } from '@/lib/prisma';

export default async function PostsPage() {
  const posts = await prisma.post.findMany({
    include: { author: true },
  });

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-600">{post.content}</p>
            {post.author && (
              <p className="text-sm text-gray-500 mt-2">By {post.author.name}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
