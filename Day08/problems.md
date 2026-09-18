# Day 8: Practice Problems

## 🎯 Instructions
Flexbox aur Grid practice karo. Har problem mein different layout patterns banao.

---

## Problem 1: Flexbox Centering
**Content ko center karo (horizontal + vertical):**

```tsx
export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-blue-500 text-white p-8 rounded-lg text-center">
        <h1 className="text-3xl font-bold">Centered!</h1>
        <p>Flexbox se center kiya</p>
      </div>
    </div>
  );
}
```

✅ **Check:** Content dono directions mein centered hai?

---

## Problem 2: Navbar Layout
**Navbar banao with flexbox:**

```tsx
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white p-4">
      {/* Logo */}
      <div className="text-xl font-bold">MySite</div>
      
      {/* Links */}
      <div className="flex gap-6">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </div>
      
      {/* Button */}
      <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
        Login
      </button>
    </nav>
  );
}
```

✅ **Check:** Logo left, links center, button right?

---

## Problem 3: Card Grid (Responsive)
**Cards ka responsive grid banao:**

```tsx
export default function CardGrid() {
  const cards = [
    { title: "Card 1", content: "Content 1", color: "bg-blue-500" },
    { title: "Card 2", content: "Content 2", color: "bg-green-500" },
    { title: "Card 3", content: "Content 3", color: "bg-purple-500" },
    { title: "Card 4", content: "Content 4", color: "bg-red-500" },
    { title: "Card 5", content: "Content 5", color: "bg-yellow-500" },
    { title: "Card 6", content: "Content 6", color: "bg-pink-500" },
  ];
  
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Card Grid</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className={`${card.color} text-white p-6 rounded-lg shadow-lg`}>
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

✅ **Check:** Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols?

---

## Problem 4: Sidebar Layout
**Sidebar + Main content layout:**

```tsx
export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <div className="text-xl font-bold mb-8">Dashboard</div>
        <nav className="space-y-2">
          <a href="#" className="block py-2 px-4 bg-gray-700 rounded">Overview</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Analytics</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Settings</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Profile</a>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold">Total Users</h3>
            <p className="text-3xl text-blue-600">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold">Revenue</h3>
            <p className="text-3xl text-green-600">$12,345</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold">Orders</h3>
            <p className="text-3xl text-purple-600">567</p>
          </div>
        </div>
      </main>
    </div>
  );
}
```

✅ **Check:** Sidebar fixed width, content flexible?

---

## Problem 5: Flex Wrap Cards
**Cards jo wrap ho jayein:**

```tsx
export default function FlexWrap() {
  const tags = ["React", "Next.js", "Tailwind", "TypeScript", "Node.js", "Prisma", "PostgreSQL"];
  
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Tech Stack</h1>
      <div className="flex flex-wrap gap-4">
        {tags.map((tag, index) => (
          <div key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
```

✅ **Check:** Tags wrap ho rahe hain different lines pe?

---

## Problem 6: Grid with Span
**Grid layout with spanning:**

```tsx
export default function GridSpan() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Grid with Span</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 bg-blue-500 text-white p-6 rounded">Spans 2 columns</div>
        <div className="bg-green-500 text-white p-6 rounded">1</div>
        <div className="bg-yellow-500 text-white p-6 rounded">1</div>
        
        <div className="bg-purple-500 text-white p-6 rounded">1</div>
        <div className="col-span-2 bg-red-500 text-white p-6 rounded">Spans 2 columns</div>
        <div className="bg-pink-500 text-white p-6 rounded">1</div>
        
        <div className="col-span-4 bg-gray-800 text-white p-6 rounded text-center">
          Full Width - Spans 4 columns
        </div>
      </div>
    </div>
  );
}
```

✅ **Check:** Kuch items 2 columns span kar rahe hain?

---

## Problem 7: Flex Space Between
**3 items with space between:**

```tsx
export default function SpaceBetween() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Space Between</h1>
      
      <div className="flex justify-between items-center bg-gray-800 text-white p-4 rounded-lg mb-4">
        <div className="font-bold">Logo</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
        </div>
        <button className="bg-blue-500 px-4 py-2 rounded">Cart (3)</button>
      </div>
      
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
        <span className="font-bold">Product Name</span>
        <span className="text-green-600 font-bold">$99</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>
    </div>
  );
}
```

✅ **Check:** Items properly space between mein hain?

---

## Problem 8: Holy Grail Layout
**Classic holy grail layout:**

```tsx
export default function HolyGrail() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">MySite</h1>
          <nav className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>
          </nav>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-200 p-4">
          <h2 className="font-bold mb-4">Sidebar</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Link 1</a></li>
            <li><a href="#" className="hover:text-blue-600">Link 2</a></li>
            <li><a href="#" className="hover:text-blue-600">Link 3</a></li>
          </ul>
        </aside>
        
        <main className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-4">Main Content</h2>
          <p className="text-gray-600">
            This is the holy grail layout with sidebar, main content, and footer.
          </p>
        </main>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2026 MySite. All rights reserved.</p>
      </footer>
    </div>
  );
}
```

✅ **Check:** Header, sidebar, content, footer sab properly placed hain?

---

## Problem 9: Centered Card
**Card ko page center mein rakho:**

```tsx
export default function CenteredCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl text-white">👤</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">John Doe</h2>
          <p className="text-gray-600 mb-4">Web Developer</p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
              Follow
            </button>
            <button className="border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-50">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

✅ **Check:** Card dono directions mein centered hai?

---

## Problem 10: Complex Dashboard Layout
**Dashboard with header, sidebar, content, stats:**

```tsx
export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span>Welcome, User</span>
            <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white p-4">
          <nav className="space-y-2">
            <a href="#" className="block py-2 px-4 bg-gray-700 rounded">📊 Dashboard</a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">👥 Users</a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">📦 Products</a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">⚙️ Settings</a>
          </nav>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-500">Total Users</p>
              <p className="text-2xl font-bold">1,234</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-500">Revenue</p>
              <p className="text-2xl font-bold">$45,678</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-500">Orders</p>
              <p className="text-2xl font-bold">892</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-500">Conversion</p>
              <p className="text-2xl font-bold">3.2%</p>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b">
                <span>New user registered</span>
                <span className="text-gray-500">2 min ago</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b">
                <span>Order #1234 placed</span>
                <span className="text-gray-500">5 min ago</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Payment received</span>
                <span className="text-gray-500">10 min ago</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
```

✅ **Check:** Complete dashboard layout kaam kar raha hai?

---

## ✅ Checklist
- [ ] Problem 1: Flexbox centering
- [ ] Problem 2: Navbar layout
- [ ] Problem 3: Card grid
- [ ] Problem 4: Sidebar layout
- [ ] Problem 5: Flex wrap
- [ ] Problem 6: Grid with span
- [ ] Problem 7: Space between
- [ ] Problem 8: Holy grail layout
- [ ] Problem 9: Centered card
- [ ] Problem 10: Complex dashboard

---

## 🎯 Challenge Problem
**E-commerce Layout Banao:**
- Header with logo, search, cart
- Sidebar with filters
- Product grid (responsive)
- Footer with links
- Flex aur Grid dono use karo
