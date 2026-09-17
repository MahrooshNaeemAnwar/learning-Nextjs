"use client";

import { useState } from "react";

export default function AllClientPage() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">All Client Page</h1>
      <p className="text-gray-600 mb-8">
        Ye page pura client component hai. Sab kuch browser mein render ho raha hai.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Counter</h2>
          <p className="text-4xl font-bold text-center mb-4">{count}</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setCount(count - 1)}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
            >
              -1
            </button>
            <button
              onClick={() => setCount(0)}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded"
            >
              Reset
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
            >
              +1
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Text Input</h2>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
            className="w-full px-4 py-2 border rounded-lg mb-4"
          />
          <p className="text-gray-700">
            {text ? `You typed: ${text}` : "Start typing..."}
          </p>
        </div>
      </div>
    </div>
  );
}
