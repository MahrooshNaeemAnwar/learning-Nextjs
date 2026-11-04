// app/navbar/page.tsx
"use client";
import ThemeToggle from '../components/ThemeToggle';

export default function NavbarPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <nav className="bg-gray-100 dark:bg-gray-800 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">MyApp</h1>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Home</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About</a>
            <ThemeToggle />
          </div>
        </div>
      </nav>
      <main className="p-4">
        <p className="text-gray-600 dark:text-gray-400">Page content</p>
      </main>
    </div>
  );
}
