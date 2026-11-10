"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[400px] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow p-6">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold">Error Occurred</h2>
        </div>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="text-sm text-gray-600">
            <strong>Message:</strong> {error.message}
          </p>
          {error.digest && (
            <p className="text-sm text-gray-600 mt-2">
              <strong>Digest:</strong> {error.digest}
            </p>
          )}
        </div>
        <button
          onClick={reset}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
