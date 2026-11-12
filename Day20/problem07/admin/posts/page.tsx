"use client";

import { useRouter } from 'next/navigation';

export default function AdminPosts() {
  const router = useRouter();

  const handleRevalidate = async () => {
    await fetch('/api/revalidate', {
      method: 'POST',
      body: JSON.stringify({ tag: 'posts' }),
    });
    router.refresh();
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Posts</h1>
      <button onClick={handleRevalidate} className="bg-blue-500 text-white px-4 py-2 rounded">
        Revalidate Posts
      </button>
    </div>
  );
}
