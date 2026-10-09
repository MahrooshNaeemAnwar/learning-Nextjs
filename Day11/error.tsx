"use client";
export default function DashboardError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="text-center py-10">
            <h2>Something went wrong!</h2>
            <p className="text-gray-500">{error.message}</p>
            <button
                onClick={reset}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Try again
            </button>
        </div>
    );
}
