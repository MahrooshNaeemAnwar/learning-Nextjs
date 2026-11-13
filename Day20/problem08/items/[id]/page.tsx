async function ItemDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const isPreview = id.startsWith('preview-');

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id.replace('preview-', '')}`, {
    cache: isPreview ? 'no-store' : undefined,
    next: isPreview ? undefined : { revalidate: 3600 }
  });
  const item = await res.json();

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold">{item.title}</h2>
      <p className="text-gray-600">{item.body}</p>
      {isPreview && <span className="text-yellow-500 text-sm">Preview Mode</span>}
    </div>
  );
}

export default async function ItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Item {id}</h1>
      <ItemDetails params={params} />
    </div>
  );
}
