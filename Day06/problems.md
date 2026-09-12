# Day 6: Practice Problems

## 🎯 Instructions
Server aur Client Components practice karo. Har component decide karo kaunsa hai.

---

## Problem 1: Static Content Page
**Page banao jo sirf static content dikhaye (Server Component):**

```tsx
// app/about/page.tsx
export default function About() {
  // Ye Server Component hai - koi interactivity nahi
  const skills = ["React", "Next.js", "Tailwind CSS", "TypeScript"];
  
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-600 mb-6">
        Main ek web developer hoon jo Next.js seekh raha hai.
      </p>
      
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-700">{skill}</li>
        ))}
      </ul>
    </div>
  );
}
```

✅ **Check:** Ye Server Component hai? (koi "use client" nahi hai)

---

## Problem 2: Interactive Counter
**Counter component banao (Client Component):**

```tsx
// app/components/Counter.tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
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
  );
}
```

**Page mein use karo:**
```tsx
// app/page.tsx
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Home Page</h1>
      <Counter />
    </div>
  );
}
```

✅ **Check:** Counter kaam kar raha hai? (+/- buttons work kar rahe hain?)

---

## Problem 3: Form Component
**Form banao (Client Component):**

```tsx
// app/components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };
  
  if (submitted) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
        <p className="font-bold">Thank you!</p>
        <p>Your message has been sent.</p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Message</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
      >
        Send Message
      </button>
    </form>
  );
}
```

✅ **Check:** Form submit hone pe thank you message dikh raha hai?

---

## Problem 4: Toggle Component
**Show/Hide toggle banao:**

```tsx
// app/components/ToggleSection.tsx
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
```

✅ **Check:** Button click karke content show/hide ho raha hai?

---

## Problem 5: Search Filter
**Search with filter banao:**

```tsx
// app/components/SearchFilter.tsx
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
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg mb-4"
      />
      
      {/* Category Filter */}
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
      
      {/* Results */}
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
```

✅ **Check:** Search aur filter kaam kar rahe hain?

---

## Problem 6: Tabs Component
**Tabs banao:**

```tsx
// app/components/Tabs.tsx
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
      {/* Tab Headers */}
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
      
      {/* Tab Content */}
      <div className="p-6">
        <p className="text-gray-700">{activeContent}</p>
      </div>
    </div>
  );
}
```

✅ **Check:** Tabs switch ho rahe hain?

---

## Problem 7: Mixed Server + Client
**Page banao jismein dono components hon:**

```tsx
// app/page.tsx
import Counter from "./components/Counter";
import ContactForm from "./components/ContactForm";

// Server Component - data fetch
export default function Home() {
  const features = [
    { title: "Fast", icon: "🚀", description: "Lightning fast performance" },
    { title: "Secure", icon: "🔒", description: "Enterprise level security" },
    { title: "Easy", icon: "✨", description: "Simple to use" },
  ];
  
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Server + Client Components
      </h1>
      
      {/* Server-rendered features */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Features (Server)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Client components */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Interactive (Client)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Counter />
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Contact Form</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
```

✅ **Check:** Server content aur client interactivity dono kaam kar rahe hain?

---

## Problem 8: Decide Component Type
**Har component ke liye decide karo Server ya Client:**

| Component | Type | Reason |
|-----------|------|--------|
| Navbar | ? | Static links, no interactivity |
| Counter | ? | useState needed |
| Blog Post | ? | Static content |
| Search Input | ? | onChange handler |
| Footer | ? | Static content |
| Modal | ? | useState + onClick |
| Product Listing | ? | Data fetch |
| Dark Mode Toggle | ? | useState needed |

**Answers:**
- Navbar → Server (unless active link highlighting)
- Counter → Client
- Blog Post → Server
- Search Input → Client
- Footer → Server
- Modal → Client
- Product Listing → Server
- Dark Mode Toggle → Client

✅ **Check:** Sab sahi hai?

---

## Problem 9: Performance Comparison
**Dono types ke pages banao aur compare karo:**

1. **All Server Page** - Sirf static content
2. **All Client Page** - "use client" with useState
3. **Mixed Page** - Server content + Client interactivity

Browser mein Network tab dekho - kitna JS load ho raha hai?

✅ **Check:** Server components ka JS bundle chhota hai?

---

## Problem 10: Complete Website
**Complete website banao with mixed components:**

- Home page (Server + Client)
- About page (Server)
- Contact page (Server + Client form)
- Blog page (Server)
- Blog post page (Server)

Sab pages pe Navbar aur Footer (Server).

✅ **Check:** Website kaam kar rahi hai?

---

## ✅ Checklist
- [ ] Problem 1: Static content page
- [ ] Problem 2: Interactive counter
- [ ] Problem 3: Form component
- [ ] Problem 4: Toggle component
- [ ] Problem 5: Search filter
- [ ] Problem 6: Tabs component
- [ ] Problem 7: Mixed server + client
- [ ] Problem 8: Component type decision
- [ ] Problem 9: Performance comparison
- [ ] Problem 10: Complete website
