import { Suspense } from 'react';

async function Stats() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded shadow">
        <h4 className="text-gray-500">Users</h4>
        <p className="text-2xl font-bold">1,234</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h4 className="text-gray-500">Posts</h4>
        <p className="text-2xl font-bold">567</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h4 className="text-gray-500">Revenue</h4>
        <p className="text-2xl font-bold">$12k</p>
      </div>
    </div>
  );
}

async function RecentActivity() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold mb-2">Recent Activity</h3>
      <p className="text-gray-600">Activity loaded!</p>
    </div>
  );
}

export default function StreamingDashboardPage() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Streaming Dashboard</h1>
      <Suspense fallback={<div className="grid grid-cols-3 gap-4 mb-6">
        {[1, 2, 3].map(i => <div key={i} className="bg-gray-200 h-20 animate-pulse rounded"></div>)}
      </div>}>
        <Stats />
      </Suspense>
      <Suspense fallback={<div className="bg-gray-200 h-32 animate-pulse rounded"></div>}>
        <RecentActivity />
      </Suspense>
    </div>
  );
}
