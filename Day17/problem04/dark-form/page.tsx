'use client';
import ThemeToggle from '../components/ThemeToggle';

export default function DarkFormPage() {
return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4">
        <div className="flex justify-end mb-4">
            <ThemeToggle />
        </div>
        <div className="max-w-md mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Dark Form</h1>
            <form>
                <input type="text" placeholder="Name" className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2" />
                <input type="email" placeholder="Email" className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 mt-4" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">Send</button>
            </form>
        </div>
    </div>
 );
}