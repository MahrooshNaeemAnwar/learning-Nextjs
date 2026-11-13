async function CachedData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 }
  });
  const posts = await res.json();

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="font-bold mb-4">Cached Posts</h2>
      <p className="text-sm text-gray-500 mb-4">Last updated: {new Date().toLocaleTimeString()}</p>
      <p className="text-sm text-gray-500">Revalidates: Every 60 seconds</p>
      <ul className="mt-4 space-y-2">
        {posts.slice(0, 5).map((post: any) => (
          <li key={post.id} className="text-sm border-b pb-2">{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default function CachedDataPage() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Cache Demo</h1>
      <CachedData />
    </div>
  );
}
