import { Suspense } from 'react';

async function Card({ id }: { id: number }) {
  await new Promise(resolve => setTimeout(resolve, id * 500));
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold">Card {id}</h3>
      <p className="text-gray-600">Content for card {id}</p>
    </div>
  );
}

export default function LoadingCardsPage() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Loading Cards</h1>
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map(id => (
          <Suspense key={id} fallback={<div className="bg-gray-200 h-24 animate-pulse rounded"></div>}>
            <Card id={id} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}
