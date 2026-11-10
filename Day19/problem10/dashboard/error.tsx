"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Error!</h2>
      <p className="mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        Retry
      </button>
    </div>
  );
}
