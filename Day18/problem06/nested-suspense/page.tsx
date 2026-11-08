import { Suspense } from 'react';

async function OuterContent() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return (
    <div className="bg-blue-100 p-4 rounded">
      <h3>Outer Content</h3>
      <Suspense fallback={<div className="bg-blue-200 p-2 animate-pulse rounded mt-2">Loading inner...</div>}>
        <InnerContent />
      </Suspense>
    </div>
  );
}

async function InnerContent() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return <div className="bg-blue-300 p-2 rounded mt-2">Inner Content Loaded!</div>;
}

export default function NestedSuspensePage() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Nested Suspense</h1>
      <Suspense fallback={<div className="bg-gray-200 h-32 animate-pulse rounded"></div>}>
        <OuterContent />
      </Suspense>
    </div>
  );
}
