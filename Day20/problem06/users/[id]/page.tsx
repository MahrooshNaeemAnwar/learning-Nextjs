async function UserProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: { revalidate: 3600 }
  });
  const user = await res.json();

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-500">{user.phone}</p>
    </div>
  );
}

export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">User {id} (ISR: 1h)</h1>
      <UserProfile params={params} />
    </div>
  );
}
