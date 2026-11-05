'use client';
import ThemeToggle from '../components/ThemeToggle';

const users = [
  { id: 1, name: 'Mahroosh', email: 'mahroosh@example.com' },
  { id: 2, name: 'Rimsha', email: 'rimsha@example.com' },
  { id: 3, name: 'Laiba', email: 'laiba@example.com' },
];

export default function DarkTablePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Users</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border p-3 text-left text-gray-900 dark:text-white">Name</th>
              <th className="border p-3 text-left text-gray-900 dark:text-white">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b dark:border-gray-700">
                <td className="border p-3 text-gray-900 dark:text-white">{user.name}</td>
                <td className="border p-3 text-gray-600 dark:text-gray-400">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
