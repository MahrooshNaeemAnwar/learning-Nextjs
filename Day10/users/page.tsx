import { Suspense } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
  company: { name: string };
};

async function UserList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <div key={user.id} className="bg-white p-6 rounded-lg shadow">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
            {user.name.charAt(0)}
          </div>
          <h3 className="text-xl font-bold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-500 text-sm mt-2">{user.company.name}</p>
        </div>
      ))}
    </div>
  );
}

export default function UsersPage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-200 h-32 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
        }
      >
        <UserList />
      </Suspense>
    </div>
  );
}
