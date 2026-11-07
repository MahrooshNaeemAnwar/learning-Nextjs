import { Suspense } from 'react';

async function Component1() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return <div className="bg-blue-100 p-4 rounded">Component 1 loaded</div>;
}

async function Component2() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return <div className="bg-green-100 p-4 rounded">Component 2 loaded</div>;
}

async function Component3() {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return <div className="bg-purple-100 p-4 rounded">Component 3 loaded</div>;
}

export default function MultiSuspensePage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">Multiple Suspense</h1>
      <Suspense fallback={<div className="h-16 bg-gray-200 animate-pulse rounded"></div>}>
        <Component1 />
      </Suspense>
      <Suspense fallback={<div className="h-16 bg-gray-200 animate-pulse rounded"></div>}>
        <Component2 />
      </Suspense>
      <Suspense fallback={<div className="h-16 bg-gray-200 animate-pulse rounded"></div>}>
        <Component3 />
      </Suspense>
    </div>
  );
}
