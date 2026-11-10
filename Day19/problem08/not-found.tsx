"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl mb-4">🔍</div>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl text-gray-600 mb-8">Page Not Found</h2>
        <form
          onSubmit={handleSearch}
          className="flex gap-2 max-w-md mx-auto mb-6"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="flex-1 border rounded-lg px-4 py-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg"
          >
            Search
          </button>
        </form>
        <Link href="/" className="text-blue-500 hover:underline">
          Go Home
        </Link>
      </div>
    </div>
  );
}
