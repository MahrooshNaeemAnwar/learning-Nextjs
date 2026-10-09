import { Suspense } from 'react';

type User = { id: number };
type Post = { id: number; title: string };

async function Stats() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500">Total Users</h3>
        <p className="text-3xl font-bold">{users.length}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500">Active Users</h3>
        <p className="text-3xl font-bold text-green-600">
          {Math.floor(users.length * 0.7)}
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500">New Users</h3>
        <p className="text-3xl font-bold text-blue-600">
          {Math.floor(users.length * 0.3)}
        </p>
      </div>
    </div>
  );
}

async function RecentActivity() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="font-bold text-lg mb-4">Recent Posts</h3>
      <div className="space-y-3">
        {posts.slice(0, 5).map((post) => (
          <div key={post.id} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className="text-gray-700">{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-200 h-24 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
        }
      >
        <Stats />
      </Suspense>
      <Suspense
        fallback={
          <div className="bg-gray-200 h-64 rounded-lg animate-pulse"></div>
        }
      >
        <RecentActivity />
      </Suspense>
    </div>
  );
}
