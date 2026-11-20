import { prisma } from '@/lib/prisma';
import { createUser, deleteUser } from '../actions';

export default async function UsersPage() {
  const users = await prisma.user.findMany();

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Users CRUD</h1>

      <form action={createUser} className="bg-white p-6 rounded shadow mb-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="text" name="name" placeholder="Name" className="border rounded px-4 py-2" required />
          <input type="email" name="email" placeholder="Email" className="border rounded px-4 py-2" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Add User</button>
      </form>

      <div className="space-y-2">
        {users.map(user => (
          <div key={user.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <h3 className="font-bold">{user.name}</h3>
              <p className="text-gray-600 text-sm">{user.email}</p>
            </div>
            <form action={deleteUser.bind(null, user.id)}>
              <button type="submit" className="text-red-500 hover:text-red-700">Delete</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
