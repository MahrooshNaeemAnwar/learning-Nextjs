import { prisma } from '@/lib/prisma';
import { createItem, deleteItem } from '../actions';

export default async function ItemsPage() {
  const items = await prisma.item.findMany();

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Items</h1>

      <form action={createItem} className="bg-white p-6 rounded shadow mb-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="text" name="name" placeholder="Name" className="border rounded px-4 py-2" required />
          <input type="text" name="description" placeholder="Description" className="border rounded px-4 py-2" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Add Item</button>
      </form>

      <div className="space-y-2">
        {items.map(item => (
          <div key={item.id} className="bg-white p-4 rounded shadow flex justify-between">
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
            <form action={deleteItem.bind(null, item.id)}>
              <button type="submit" className="text-red-500">Delete</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
