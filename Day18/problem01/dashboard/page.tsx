import { Suspense } from 'react';

async function SlowData() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return <div className="text-green-600">Data loaded!</div>;
}

export default function DashboardPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <Suspense fallback={<div className="animate-pulse text-gray-500">Loading...</div>}>
        <SlowData />
      </Suspense>
    </div>
  );
}
