'use client';

export default function DashboardError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-screen bg-white p-4">
            <h1 className="text-2xl font-bold text-gray-700">Dashboard Error</h1>
            <p className="text-gray-500 mb-4">{error.message}</p>
            <button
                onClick={reset}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Try Again
            </button>
        </div>
    );
}