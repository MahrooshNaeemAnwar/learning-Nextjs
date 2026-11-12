import { Suspense } from 'react';

async function StaticContent() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post = await res.json();
  return <div className="bg-green-100 p-4 rounded"><strong>Static:</strong> {post.title}</div>;
}

async function IsrContent() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/2', {
    next: { revalidate: 60 }
  });
  const post = await res.json();
  return <div className="bg-blue-100 p-4 rounded"><strong>ISR (60s):</strong> {post.title}</div>;
}

async function DynamicContent() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/3', {
    cache: 'no-store'
  });
  const post = await res.json();
  return <div className="bg-yellow-100 p-4 rounded"><strong>Dynamic:</strong> {post.title} - {new Date().toLocaleTimeString()}</div>;
}

export default function MixedPage() {
  return (
    <div className="p-4 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold mb-6">Mixed Caching</h1>
      <Suspense fallback={<div className="bg-gray-200 h-16 animate-pulse rounded"></div>}>
        <StaticContent />
      </Suspense>
      <Suspense fallback={<div className="bg-gray-200 h-16 animate-pulse rounded"></div>}>
        <IsrContent />
      </Suspense>
      <Suspense fallback={<div className="bg-gray-200 h-16 animate-pulse rounded"></div>}>
        <DynamicContent />
      </Suspense>
    </div>
  );
}
