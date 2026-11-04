# Day 17: Practice Problems

## 🎯 Instructions
Dark mode implement karo. Theme toggle aur persistence karo.

---

## Problem 1: Basic Theme Toggle
**Basic theme toggle banao:**

```tsx
// app/components/ThemeProvider.tsx
"use client";
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext<{
  theme: string;
  toggle: () => void;
}>({ theme: 'light', toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) setTheme(saved);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, toggle: () => setTheme(t => t === 'light' ? 'dark' : 'light') }}>
      {children}
    </ThemeContext.Provider>
  );
}

// app/components/ThemeToggle.tsx
"use client";
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button onClick={toggle} className="p-2 rounded bg-gray-200 dark:bg-gray-700">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
```

✅ **Check:** Toggle kaam kar raha hai aur localStorage mein save ho raha hai?

---

## Problem 2: Dark Mode Card
**Card with dark mode:**

```tsx
// app/card/page.tsx
"use client";
import ThemeToggle from '../components/ThemeToggle';

export default function CardPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <div className="max-w-md mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Card Title</h2>
        <p className="text-gray-600 dark:text-gray-400">This card supports dark mode.</p>
      </div>
    </div>
  );
}
```

✅ **Check:** Card dark mode mein dikh raha hai?

---

## Problem 3: Navigation with Dark Mode
**Navbar with dark mode:**

```tsx
// app/navbar/page.tsx
"use client";
import ThemeToggle from '../components/ThemeToggle';

export default function NavbarPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <nav className="bg-gray-100 dark:bg-gray-800 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">MyApp</h1>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Home</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About</a>
            <ThemeToggle />
          </div>
        </div>
      </nav>
      <main className="p-4">
        <p className="text-gray-600 dark:text-gray-400">Page content</p>
      </main>
    </div>
  );
}
```

✅ **Check:** Navbar dark mode mein dikh rahi hai?

---

## Problem 4: Dark Mode Form
**Form with dark mode:**

```tsx
// app/dark-form/page.tsx
"use client";
import ThemeToggle from '../components/ThemeToggle';

export default function DarkFormPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full border rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600" />
          <input type="email" placeholder="Email" className="w-full border rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600" />
          <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Send</button>
        </form>
      </div>
    </div>
  );
}
```

✅ **Check:** Form dark mode mein dikh raha hai?

---

## Problem 5: Dark Mode Dashboard
**Dashboard with dark mode:**

```tsx
// app/dark-dashboard/page.tsx
"use client";
import ThemeToggle from '../components/ThemeToggle';

export default function DarkDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <ThemeToggle />
        </div>
      </nav>
      <main className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-gray-500 dark:text-gray-400">Users</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">1,234</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-gray-500 dark:text-gray-400">Posts</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">567</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-gray-500 dark:text-gray-400">Revenue</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">$12,345</p>
          </div>
        </div>
      </main>
    </div>
  );
}
```

✅ **Check:** Dashboard cards dark mode mein dikh rahe hain?

---

## Problem 6: System Preference Detection
**System preference ke hisab se theme:**

```tsx
// app/components/ThemeProvider.tsx
"use client";
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext<{
  theme: string;
  toggle: () => void;
}>({ theme: 'light', toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, toggle: () => setTheme(t => t === 'light' ? 'dark' : 'light') }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

✅ **Check:** System dark mode pe automatically dark ho raha hai?

---

## Problem 7: Dark Mode Table
**Table with dark mode:**

```tsx
// app/dark-table/page.tsx
"use client";
import ThemeToggle from '../components/ThemeToggle';

const users = [
  { id: 1, name: 'Mahroosh', email: 'mahroosh@example.com' },
  { id: 2, name: 'Ali', email: 'ali@example.com' },
  { id: 3, name: 'Sara', email: 'sara@example.com' },
];

export default function DarkTablePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Users</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border p-3 text-left text-gray-900 dark:text-white">Name</th>
              <th className="border p-3 text-left text-gray-900 dark:text-white">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b dark:border-gray-700">
                <td className="border p-3 text-gray-900 dark:text-white">{user.name}</td>
                <td className="border p-3 text-gray-600 dark:text-gray-400">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
```

✅ **Check:** Table dark mode mein dikh raha hai?

---

## Problem 8: Dark Mode List
**List with dark mode:**

```tsx
// app/dark-list/page.tsx
"use client";
import ThemeToggle from '../components/ThemeToggle';

const items = ['Learn Next.js', 'Build a project', 'Deploy to Vercel'];

export default function DarkListPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Tasks</h1>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-gray-900 dark:text-white">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```

✅ **Check:** List dark mode mein dikh rahi hai?

---

## Problem 9: Dark Mode Modal
**Modal with dark mode:**

```tsx
// app/dark-modal/page.tsx
"use client";
import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';

export default function DarkModalPage() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Modal Demo</h1>
        <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white px-6 py-2 rounded-lg">
          Open Modal
        </button>
        
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Modal Title</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">This modal supports dark mode.</p>
              <button onClick={() => setIsOpen(false)} className="bg-blue-500 text-white px-4 py-2 rounded">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
```

✅ **Check:** Modal dark mode mein dikh raha hai?

---

## Problem 10: Complete Dark Mode App
**Complete app with dark mode:**

```tsx
// app/layout.tsx
import { ThemeProvider } from './components/ThemeProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

// app/page.tsx
"use client";
import ThemeToggle from './components/ThemeToggle';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <nav className="bg-gray-100 dark:bg-gray-800 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">MyApp</h1>
          <ThemeToggle />
        </div>
      </nav>
      <main className="max-w-6xl mx-auto p-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Welcome!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Card {i}</h3>
              <p className="text-gray-600 dark:text-gray-400">Description</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
```

✅ **Check:** Complete app dark mode support kar raha hai?

---

## ✅ Checklist
- [ ] Problem 1: Basic theme toggle
- [ ] Problem 2: Dark mode card
- [ ] Problem 3: Navigation with dark mode
- [ ] Problem 4: Dark mode form
- [ ] Problem 5: Dark mode dashboard
- [ ] Problem 6: System preference detection
- [ ] Problem 7: Dark mode table
- [ ] Problem 8: Dark mode list
- [ ] Problem 9: Dark mode modal
- [ ] Problem 10: Complete dark mode app
