'use client';
import ThemeToggle from './components/ThemeToggle';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <nav className="bg-gray-100 dark:bg-gray-800 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">MyApp</h1>
          <ThemeToggle />
        </div>
      </nav>
      <main className="max-w-6xl mx-auto p-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Welcome!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Card {i}</h3>
              <p className="text-gray-600 dark:text-gray-400">Description</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
