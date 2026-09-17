"use client";

import { useState } from "react";

const products = [
  { id: 1, name: "Laptop", category: "electronics" },
  { id: 2, name: "Phone", category: "electronics" },
  { id: 3, name: "Shirt", category: "clothing" },
  { id: 4, name: "Pants", category: "clothing" },
  { id: 5, name: "Book", category: "books" },
];

export default function SearchFilter() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Search Products</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg mb-4"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg mb-4"
      >
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="books">Books</option>
      </select>

      <div className="space-y-2">
        {filteredProducts.map((product) => (
          <div key={product.id} className="p-3 bg-gray-50 rounded flex justify-between">
            <span>{product.name}</span>
            <span className="text-gray-500 text-sm">{product.category}</span>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <p className="text-gray-500 text-center py-4">No products found</p>
        )}
      </div>
    </div>
  );
}
