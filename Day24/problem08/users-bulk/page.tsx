"use client";
import { useState } from 'react';
import { deleteUsers } from '../actions';

const users = [
  { id: '1', name: 'User 1' },
  { id: '2', name: 'User 2' },
  { id: '3', name: 'User 3' },
];

export default function BulkDeletePage() {
  const [selected, setSelected] = useState<string[]>([]);

  const handleDelete = async () => {
    if (confirm(`Delete ${selected.length} users?`)) {
      await deleteUsers(selected);
      setSelected([]);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Bulk Delete</h1>
      <button onClick={handleDelete} disabled={selected.length === 0} className="bg-red-500 text-white px-4 py-2 rounded mb-4 disabled:opacity-50">
        Delete Selected ({selected.length})
      </button>
      <div className="space-y-2">
        {users.map(user => (
          <div key={user.id} className="flex items-center gap-2 bg-white p-4 rounded shadow">
            <input
              type="checkbox"
              checked={selected.includes(user.id)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelected([...selected, user.id]);
                } else {
                  setSelected(selected.filter(id => id !== user.id));
                }
              }}
            />
            <span>{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
