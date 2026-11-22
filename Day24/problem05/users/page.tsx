import { prisma } from '@/lib/prisma';

export default async function UsersPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;

  const users = await prisma.user.findMany({
    where: q ? { name: { contains: q, mode: 'insensitive' } } : {},
  });

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <form className="mb-6">
        <input type="text" name="q" defaultValue={q || ''} placeholder="Search users..." className="border rounded-lg px-4 py-2 w-full" />
      </form>
      <div className="space-y-2">
        {users.map(user => (
          <div key={user.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
