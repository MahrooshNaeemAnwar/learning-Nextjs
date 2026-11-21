import { prisma } from '@/lib/prisma';
import { updateUser } from '../../../actions';

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await prisma.user.findUnique({ where: { id } });
  
  if (!user) return <div>User not found</div>;
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Edit User</h1>
      <form action={updateUser.bind(null, id)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input type="text" name="name" defaultValue={user.name} className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Update</button>
      </form>
    </div>
  );
}
