# Day 9: Practice Problems

## 🎯 Instructions
Responsive design practice karo. Har problem mobile + desktop dono pe test karo.

---

## Problem 1: Responsive Text
**Heading banao jo screen size ke hisab se badle:**

```tsx
export default function Home() {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center">
        Responsive Heading
      </h1>
      <p className="text-sm md:text-base lg:text-lg text-gray-600 text-center mt-4">
        This text changes size based on screen width.
      </p>
    </div>
  );
}
```

✅ **Check:** Mobile pe chhota, desktop pe bada text?

---

## Problem 2: Responsive Grid
**Cards ka responsive grid:**

```tsx
export default function ResponsiveGrid() {
  const cards = [1, 2, 3, 4, 5, 6];
  
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Responsive Grid</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div key={card} className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold">Card {card}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
```

✅ **Check:** 1 col → 2 cols → 3 cols?

---

## Problem 3: Responsive Navbar
**Navbar jo mobile pe toggle ho:**

```tsx
"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Logo</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a href="#" className="block py-2 hover:text-gray-300">Home</a>
          <a href="#" className="block py-2 hover:text-gray-300">About</a>
          <a href="#" className="block py-2 hover:text-gray-300">Contact</a>
        </div>
      )}
    </nav>
  );
}
```

✅ **Check:** Desktop pe links, mobile pe hamburger menu?

---

## Problem 4: Responsive Sidebar
**Sidebar layout jo responsive ho:**

```tsx
export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-800 text-white p-4">
        <h2 className="font-bold mb-4">Menu</h2>
        <nav className="space-y-2">
          <a href="#" className="block py-2 px-4 bg-gray-700 rounded">Dashboard</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Settings</a>
        </nav>
      </aside>
      
      {/* Content */}
      <main className="flex-1 bg-gray-100 p-4 md:p-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </main>
    </div>
  );
}
```

✅ **Check:** Mobile pe sidebar upar, desktop pe left side?

---

## Problem 5: Responsive Hero
**Hero section jo responsive ho:**

```tsx
export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hero Title
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-6">
          Responsive hero section with different text sizes
        </p>
        <button className="bg-white text-blue-500 px-4 py-2 md:px-8 md:py-3 rounded font-bold">
          Get Started
        </button>
      </div>
    </div>
  );
}
```

✅ **Check:** Text aur buttons screen size ke hisab se badal rahe hain?

---

## Problem 6: Hide/Show Elements
**Different elements mobile/desktop pe dikhao:**

```tsx
export default function HideShow() {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Hide/Show Elements</h1>
      
      {/* Mobile only */}
      <div className="block md:hidden bg-blue-500 text-white p-4 rounded mb-4">
        📱 This is mobile only content
      </div>
      
      {/* Desktop only */}
      <div className="hidden md:block bg-green-500 text-white p-4 rounded mb-4">
        🖥️ This is desktop only content
      </div>
      
      {/* Always visible */}
      <div className="bg-gray-500 text-white p-4 rounded">
        ✅ This is always visible
      </div>
    </div>
  );
}
```

✅ **Check:** Mobile pe sirf mobile content, desktop pe sirf desktop content?

---

## Problem 7: Responsive Footer
**Footer jo responsive ho:**

```tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-4">About</h3>
          <p className="text-gray-400">About our company</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          <p className="text-gray-400">email@example.com</p>
        </div>
      </div>
    </footer>
  );
}
```

✅ **Check:** Mobile pe 1 column, desktop pe 3 columns?

---

## Problem 8: Responsive Card with Image
**Card jo responsive ho:**

```tsx
export default function ResponsiveCard() {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">Responsive Card</h1>
      
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow overflow-hidden">
        {/* Image */}
        <div className="w-full md:w-1/2 bg-gradient-to-r from-blue-400 to-purple-500 h-48 md:h-auto">
        </div>
        
        {/* Content */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-xl font-bold mb-2">Card Title</h2>
          <p className="text-gray-600 mb-4">
            This card changes layout based on screen size.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
```

✅ **Check:** Mobile pe stack, desktop pe side by side?

---

## Problem 9: Responsive Grid with Span
**Grid layout jo responsive ho:**

```tsx
export default function ResponsiveGridSpan() {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">Responsive Grid with Span</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 bg-blue-500 text-white p-6 rounded">
          Spans 2 columns on desktop
        </div>
        <div className="bg-green-500 text-white p-6 rounded">1</div>
        <div className="bg-yellow-500 text-white p-6 rounded">1</div>
        
        <div className="bg-purple-500 text-white p-6 rounded">1</div>
        <div className="md:col-span-2 bg-red-500 text-white p-6 rounded">
          Spans 2 columns on desktop
        </div>
        <div className="bg-pink-500 text-white p-6 rounded">1</div>
      </div>
    </div>
  );
}
```

✅ **Check:** Mobile pe sab 1 column, desktop pe spanning?

---

## Problem 10: Complete Responsive Page
**Puri responsive page banao:**

```tsx
export default function CompletePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">MySite</div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </nav>
          <button className="md:hidden">☰</button>
        </div>
      </header>
      
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome</h1>
          <p className="text-base md:text-lg mb-6">Responsive website</p>
          <button className="bg-white text-blue-500 px-6 py-3 rounded font-bold">
            Learn More
          </button>
        </div>
      </div>
      
      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Feature {i}</h3>
              <p className="text-gray-600">Description here</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-auto">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2026 MySite</p>
        </div>
      </footer>
    </div>
  );
}
```

✅ **Check:** Complete page responsive hai?

---

## ✅ Checklist
- [ ] Problem 1: Responsive text
- [ ] Problem 2: Responsive grid
- [ ] Problem 3: Responsive navbar
- [ ] Problem 4: Responsive sidebar
- [ ] Problem 5: Responsive hero
- [ ] Problem 6: Hide/Show elements
- [ ] Problem 7: Responsive footer
- [ ] Problem 8: Responsive card
- [ ] Problem 9: Responsive grid with span
- [ ] Problem 10: Complete responsive page
