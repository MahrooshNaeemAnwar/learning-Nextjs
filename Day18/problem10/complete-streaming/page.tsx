import { Suspense } from 'react';

function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      <div className="bg-gray-200 h-8 w-1/4 animate-pulse rounded"></div>
      <div className="bg-gray-200 h-64 animate-pulse rounded"></div>
    </div>
  );
}

async function Content() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Complete Streaming App</h1>
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Item {i}</h3>
            <p className="text-gray-600">Description</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CompleteStreamingPage() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <Suspense fallback={<LoadingSkeleton />}>
        <Content />
      </Suspense>
    </div>
  );
}
