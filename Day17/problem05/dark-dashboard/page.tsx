'use client';
import ThemeToggle from '../components/ThemeToggle';

export default function DashboardPage() {
    return(
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <nav className="bg-white dark:bg-gray-800 p-4">
                <div className="flex justify-between items-center ">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white ">Dashboard</h1>
                    <ThemeToggle/>
                </div>
            </nav>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Users</h3>
                    <p className="text-gray-600 dark:text-gray-100">101009</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Posts</h3>
                    <p className="text-gray-600 dark:text-gray-100">150524</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Revenue</h3>
                    <p className="text-gray-600 dark:text-gray-100">11709</p>
                </div>  
            </div>
        </div>
    );
}