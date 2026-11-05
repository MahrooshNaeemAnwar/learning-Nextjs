'use client';
import ThemeToggle from '../components/ThemeToggle';

const items = ['Learn Next.js', 'Build a project', 'Deploy to Vercel'];

export default function DarkListPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Tasks</h1>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-gray-900 dark:text-white">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
