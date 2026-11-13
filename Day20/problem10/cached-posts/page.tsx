async function PostList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60, tags: ['posts'] }
  });
  const posts = await res.json();

  return (
    <div className="space-y-4">
      {posts.slice(0, 5).map((post: any) => (
        <div key={post.id} className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">{post.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default function CachedPostsPage() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Cached Posts (60s + Tag)</h1>
      <PostList />
    </div>
  );
}
