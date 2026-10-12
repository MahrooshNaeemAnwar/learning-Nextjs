import { Suspense } from "react";

async function Stats() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="rounded-lg bg-white p-6 shadow">
        <h3 className="text-gray-500">Users</h3>
        <p className="text-3xl font-bold">1,234</p>
      </div>
      <div className="rounded-lg bg-white p-6 shadow">
        <h3 className="text-gray-500">Posts</h3>
        <p className="text-3xl font-bold">567</p>
      </div>
      <div className="rounded-lg bg-white p-6 shadow">
        <h3 className="text-gray-500">Comments</h3>
        <p className="text-3xl font-bold">8,901</p>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
      <Suspense
        fallback={
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-24 animate-pulse rounded bg-gray-200"
              ></div>
            ))}
          </div>
        }
      >
        <Stats />
      </Suspense>
    </div>
  );
}
