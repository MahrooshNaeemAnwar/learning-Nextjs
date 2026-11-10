"use client";
import { useEffect } from "react";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to service
    console.error("Dashboard error:", error);
  }, [error]);

  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">🐛</div>
        <h2 className="text-2xl font-bold mb-2">Bug Reported!</h2>
        <p className="text-gray-600 mb-6">We&apos;ve logged this error.</p>
        <button
          onClick={reset}
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
