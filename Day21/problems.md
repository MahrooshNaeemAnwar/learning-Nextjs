# Day 21: Practice Problems

## 🎯 Instructions
Phase 3 ke sab concepts revise karo. Mini project banao.

---

## Problem 1: Task Manager with All Features
**Complete task manager banao:**

```tsx
// app/actions.ts
'use server';

let tasks = [
  { id: 1, text: 'Learn Middleware', completed: false },
  { id: 2, text: 'Practice Forms', completed: true },
];

export async function addTask(formData: FormData) {
  const text = formData.get('text') as string;
  if (text) {
    tasks.push({ id: Date.now(), text, completed: false });
  }
}

export async function deleteTask(formData: FormData) {
  const id = Number(formData.get('id'));
  tasks = tasks.filter(t => t.id !== id);
}

export async function toggleTask(formData: FormData) {
  const id = Number(formData.get('id'));
  tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
}

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
import { Suspense } from 'react';
import ThemeToggle from './components/ThemeToggle';
import { addTask, deleteTask, toggleTask } from './actions';

async function TaskList() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center gap-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <form action={toggleTask}>
            <input type="hidden" name="id" value={task.id} />
            <button type="submit" className="text-xl">
              {task.completed ? '✅' : '⬜'}
            </button>
          </form>
          <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}>
            {task.text}
          </span>
          <form action={deleteTask}>
            <input type="hidden" name="id" value={task.id} />
            <button type="submit" className="text-red-500">🗑️</button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Task Manager</h1>
          <ThemeToggle />
        </div>
        
        <form action={addTask} className="flex gap-2 mb-6">
          <input type="text" name="text" placeholder="Add task..." className="flex-1 border rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" required />
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">Add</button>
        </form>
        
        <Suspense fallback={<div className="animate-pulse text-gray-500">Loading tasks...</div>}>
          <TaskList />
        </Suspense>
      </div>
    </div>
  );
}

// app/not-found.tsx
import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <Link href="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg">Home</Link>
      </div>
    </div>
  );
}

// app/dashboard/error.tsx
"use client";
export default function DashboardError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Error!</h2>
      <p className="mb-4">{error.message}</p>
      <button onClick={reset} className="bg-blue-500 text-white px-6 py-2 rounded">Retry</button>
    </div>
  );
}
```

✅ **Check:** Task manager mein sab features kaam kar rahe hain?

---

## Problem 2: Validate Complete App
**App ko thoroughly test karo:**

```
✅ Form validation
✅ Dark mode toggle
✅ Loading states
✅ Error pages
✅ Task CRUD
✅ Streaming
```

✅ **Check:** Sab features test ho gaye?

---

## Problem 3: Add New Feature
**App mein naya feature add karo:**

1. Task priority (low, medium, high)
2. Task due date
3. Task categories
4. Search functionality

✅ **Check:** Naya feature kaam kar raha hai?

---

## Problem 4: Debug Common Issues
**Common issues fix karo:**

1. Dark mode flicker
2. Form not resetting
3. Loading state not showing
4. Error not displaying

✅ **Check:** Sab bugs fix ho gaye?

---

## Problem 5: Performance Check
**Performance check karo:**

1. Lighthouse score
2. Loading times
3. Bundle size
4. Console errors

✅ **Check:** Performance acceptable hai?

---

## Problem 6: Code Quality
**Code quality check karo:**

1. No console.logs
2. Proper error handling
3. Clean imports
4. Consistent style

✅ **Check:** Code clean hai?

---

## Problem 7: Responsive Design
**Responsive design check karo:**

1. Mobile view
2. Tablet view
3. Desktop view
4. Touch targets

✅ **Check:** Sab screens pe sahi dikh raha hai?

---

## Problem 8: Accessibility
**Accessibility check karo:**

1. Keyboard navigation
2. Screen reader
3. Color contrast
4. Focus states

✅ **Check:** Accessibility maintained hai?

---

## Problem 9: Documentation
**App document karo:**

1. README.md with features
2. Setup instructions
3. Tech stack
4. Screenshots

✅ **Check:** Documentation complete hai?

---

## Problem 10: Deploy Ready
**App deploy ke liye ready karo:**

1. Environment variables
2. Build command
3. Start command
4. No errors in build

✅ **Check:** App deploy ho sakta hai?

---

## ✅ Checklist
- [ ] Problem 1: Complete task manager
- [ ] Problem 2: Validate complete app
- [ ] Problem 3: Add new feature
- [ ] Problem 4: Debug common issues
- [ ] Problem 5: Performance check
- [ ] Problem 6: Code quality
- [ ] Problem 7: Responsive design
- [ ] Problem 8: Accessibility
- [ ] Problem 9: Documentation
- [ ] Problem 10: Deploy ready
