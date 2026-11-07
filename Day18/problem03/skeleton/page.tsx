import { Suspense } from 'react';

function Skeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-gray-200 h-24 animate-pulse rounded"></div>
      ))}
    </div>
  );
}

async function Content() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return (
    <div className="space-y-4">
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">Item {i}</h3>
          <p className="text-gray-600">Description here</p>
        </div>
      ))}
    </div>
  );
}

export default function SkeletonPage() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Skeleton Loading</h1>
      <Suspense fallback={<Skeleton />}>
        <Content />
      </Suspense>
    </div>
  );
}
