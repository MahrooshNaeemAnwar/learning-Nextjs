import { Suspense } from 'react';

async function TableRow({ id }: { id: number }) {
  await new Promise(resolve => setTimeout(resolve, id * 300));
  return (
    <tr className="border-b">
      <td className="p-2">User {id}</td>
      <td className="p-2">user{id}@example.com</td>
      <td className="p-2 text-green-600">Active</td>
    </tr>
  );
}

async function TableBody() {
  return (
    <tbody>
      {[1, 2, 3, 4, 5].map(id => (
        <Suspense key={id} fallback={<tr><td colSpan={3} className="p-2 bg-gray-100 animate-pulse">Loading...</td></tr>}>
          <TableRow id={id} />
        </Suspense>
      ))}
    </tbody>
  );
}

export default function StreamingTablePage() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Streaming Table</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <TableBody />
      </table>
    </div>
  );
}
