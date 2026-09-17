"use client";

import { useState } from "react";

const tabs = [
  { id: "home", label: "Home", content: "Welcome to home page!" },
  { id: "about", label: "About", content: "About us page content." },
  { id: "contact", label: "Contact", content: "Contact information here." },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("home");

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 px-4 font-medium ${
              activeTab === tab.id
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6">
        <p className="text-gray-700">{activeContent}</p>
      </div>
    </div>
  );
}
