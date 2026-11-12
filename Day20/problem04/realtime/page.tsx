async function RealtimeData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    cache: 'no-store'
  });
  const post = await res.json();

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600">{post.body}</p>
      <p className="text-sm text-gray-400 mt-4">
        Fetched at: {new Date().toISOString()}
      </p>
    </div>
  );
}

export default function RealtimePage() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Realtime (No Cache)</h1>
      <RealtimeData />
    </div>
  );
}
