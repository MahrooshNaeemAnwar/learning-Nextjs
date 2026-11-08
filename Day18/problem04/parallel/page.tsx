import { Suspense } from 'react';

async function Users() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const users = [{ id: 1, name: 'Mahroosh' }, { id: 2, name: 'Ali' }];
  return (
    <div className="bg-blue-100 p-4 rounded">
      <h3 className="font-bold mb-2">Users</h3>
      {users.map(u => <p key={u.id}>{u.name}</p>)}
    </div>
  );
}

async function Posts() {
  await new Promise(resolve => setTimeout(resolve, 1500));
  const posts = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];
  return (
    <div className="bg-green-100 p-4 rounded">
      <h3 className="font-bold mb-2">Posts</h3>
      {posts.map(p => <p key={p.id}>{p.title}</p>)}
    </div>
  );
}

export default function ParallelPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Parallel Fetching</h1>
      <div className="grid grid-cols-2 gap-4">
        <Suspense fallback={<div className="bg-gray-200 h-32 animate-pulse rounded"></div>}>
          <Users />
        </Suspense>
        <Suspense fallback={<div className="bg-gray-200 h-32 animate-pulse rounded"></div>}>
          <Posts />
        </Suspense>
      </div>
    </div>
  );
}
