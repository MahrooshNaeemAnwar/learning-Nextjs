import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function UsersPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const pageSize = 5;

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
    }),
    prisma.user.count(),
  ]);

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Users (Page {currentPage}/{totalPages})</h1>
      <div className="space-y-2 mb-6">
        {users.map(user => (
          <div key={user.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{user.name}</h3>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {currentPage > 1 && (
          <Link href={`/users?page=${currentPage - 1}`} className="bg-gray-200 px-4 py-2 rounded">Previous</Link>
        )}
        {currentPage < totalPages && (
          <Link href={`/users?page=${currentPage + 1}`} className="bg-gray-200 px-4 py-2 rounded">Next</Link>
        )}
      </div>
    </div>
  );
}
