'use client';
import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';

export default function DarkModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Modal Demo</h1>
        <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white px-6 py-2 rounded-lg">
          Open Modal
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Modal Title</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">This modal supports dark mode.</p>
              <button onClick={() => setIsOpen(false)} className="bg-blue-500 text-white px-4 py-2 rounded">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
