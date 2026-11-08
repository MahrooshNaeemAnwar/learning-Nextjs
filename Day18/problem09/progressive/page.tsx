import { Suspense } from 'react';

async function Header() {
  await new Promise(resolve => setTimeout(resolve, 500));
  return <h2 className="text-2xl font-bold mb-4">Header Content</h2>;
}

async function Main() {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return <div className="bg-blue-100 p-4 rounded mb-4">Main Content</div>;
}

async function Sidebar() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return <div className="bg-green-100 p-4 rounded">Sidebar Content</div>;
}

export default function ProgressivePage() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <Suspense fallback={<div className="bg-gray-200 h-12 animate-pulse rounded mb-4"></div>}>
        <Header />
      </Suspense>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Suspense fallback={<div className="bg-gray-200 h-32 animate-pulse rounded"></div>}>
            <Main />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<div className="bg-gray-200 h-32 animate-pulse rounded"></div>}>
            <Sidebar />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
