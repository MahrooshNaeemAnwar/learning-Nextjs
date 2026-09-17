"use client";

import { useState } from "react";

export default function ToggleSection() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="w-full text-left font-bold text-lg flex justify-between items-center"
      >
        <span>Click to Toggle Content</span>
        <span>{isVisible ? "▲" : "▼"}</span>
      </button>

      {isVisible && (
        <div className="mt-4 p-4 bg-gray-50 rounded">
          <p className="text-gray-700">
            Ye hidden content hai jo ab dikh raha hai!
            Toggle button click karke hide kar sakte ho.
          </p>
        </div>
      )}
    </div>
  );
}
