'use client';
import ThemeProvider from '../components/ThemeProvider';

export default function cardPage(){
 return(
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
        <div className="flex justify-end mb-4">
            </ThemeToggle>
        </div>
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Card Title</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-4">This card component supports dark theme.</p>
        </div>
    </div>
 );
}