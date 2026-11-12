async function BlogList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 },
  });
  const posts = await res.json();

  return (
    <div className="space-y-4">
      {posts.slice(0, 5).map((post: any) => (
        <div className="bg-white p-4 rounded shadow" key={post.id}>
          <h2 className="font-bold">{post.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default function BlogPage() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Blog (ISR: 3600s)</h1>
      <BlogList />
    </div>
  );
}