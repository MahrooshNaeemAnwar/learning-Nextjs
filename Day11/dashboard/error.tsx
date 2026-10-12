"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="text-center">
        <div className="mb-4 text-6xl">⚠️</div>
        <h2 className="mb-2 text-2xl font-bold">Oops!</h2>
        <p className="mb-6 text-gray-600">{error.message}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={reset}
            className="rounded bg-blue-500 px-6 py-2 text-white"
          >
            Try Again
          </button>
          <a
            href="/"
            className="rounded bg-gray-200 px-6 py-2 text-gray-800"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
