"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Critical Error</h2>
            <button
              onClick={reset}
              className="bg-red-500 text-white px-6 py-2 rounded"
            >
              Restart
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
