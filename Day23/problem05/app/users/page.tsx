import  {prisma} from '@/lib/prisma';

export default async function UsersPage(){
    const users=await prisma.user.findMany();
  return (
    <div className="p-4">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        <div className="space-y-2">
            {users.map(user=>(
                <div  key={user.id} className="bg-white p-4 rounded shadow">
                 <h3 className="font-bold">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
          </div>
            ))}
        </div>
    </div>
  );
} 