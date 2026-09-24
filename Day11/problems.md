# Day 11: Practice Problems

## 🎯 Instructions
Special files create karo aur samjho kab kaunsa use hota hai.

---

## Problem 1: Root Layout
**Root layout banao with navigation:**

```tsx
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Site',
  description: 'A Next.js website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <nav className="bg-white shadow p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <a href="/" className="font-bold text-xl">MyApp</a>
            <div className="flex gap-6">
              <a href="/" className="hover:text-blue-500">Home</a>
              <a href="/about" className="hover:text-blue-500">About</a>
              <a href="/contact" className="hover:text-blue-500">Contact</a>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; 2026 MyApp</p>
        </footer>
      </body>
    </html>
  );
}
```

✅ **Check:** Navigation aur footer har page pe dikh raha hai?

---

## Problem 2: Loading State
**Dashboard ke liye loading banao:**

```tsx
// app/dashboard/loading.tsx
export default function DashboardLoading() {
  return (
    <div className="space-y-4">
      <div className="h-8 bg-gray-200 rounded w-1/4 animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 bg-gray-200 rounded animate-pulse"></div>
        ))}
      </div>
      <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
    </div>
  );
}
```

✅ **Check:** Dashboard load hone tak skeleton dikh raha hai?

---

## Problem 3: Error Boundary
**Error page banao:**

```tsx
// app/dashboard/error.tsx
"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="text-center py-10">
      <div className="text-6xl mb-4">💥</div>
      <h2 className="text-2xl font-bold text-red-600 mb-2">
        Dashboard Error
      </h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button 
        onClick={reset}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  );
}
```

✅ **Check:** Error aane pe error page dikh raha hai?

---

## Problem 4: 404 Page
**Custom 404 page banao:**

```tsx
// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <div className="text-8xl mb-4">🔍</div>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl text-gray-600 mb-8">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link 
        href="/"
        className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600"
      >
        Go Home
      </Link>
    </div>
  );
}
```

✅ **Check:** Invalid URL pe 404 page dikh raha hai?

---

## Problem 5: Nested Layout
**About section ke liye nested layout:**

```tsx
// app/about/layout.tsx
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-8">
      <aside className="w-64 bg-white p-4 rounded-lg shadow h-fit">
        <h3 className="font-bold mb-4">About Menu</h3>
        <nav className="space-y-2">
          <a href="/about" className="block py-2 px-4 hover:bg-gray-100 rounded">
            Overview
          </a>
          <a href="/about/team" className="block py-2 px-4 hover:bg-gray-100 rounded">
            Team
          </a>
          <a href="/about/history" className="block py-2 px-4 hover:bg-gray-100 rounded">
            History
          </a>
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}

// app/about/page.tsx
export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-600">This is the about page.</p>
    </div>
  );
}
```

✅ **Check:** About pages pe sidebar dikh raha hai?

---

## Problem 6: Programmatic 404
**Dynamic route mein 404 handle karo:**

```tsx
// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';

const posts = [
  { slug: 'hello', title: 'Hello World' },
  { slug: 'nextjs', title: 'Next.js Guide' },
];

export default async function BlogPost({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div>
      <h1 className="text-3xl font-bold">{post.title}</h1>
    </div>
  );
}
```

✅ **Check:** Invalid slug pe 404 dikh raha hai?

---

## Problem 7: Metadata in Layout
**Layout mein metadata set karo:**

```tsx
// app/blog/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | My Blog',
    default: 'My Blog',
  },
  description: 'Blog posts and articles',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      {children}
    </div>
  );
}

// app/blog/page.tsx
export default function BlogPage() {
  return <div>Blog posts list</div>;
}
```

✅ **Check:** Blog pages pe "My Blog" title dikh raha hai?

---

## Problem 8: Loading with Suspense
**Specific section ke liye loading:**

```tsx
// app/dashboard/page.tsx
import { Suspense } from 'react';

async function Stats() {
  // Simulate slow fetch
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500">Users</h3>
        <p className="text-3xl font-bold">1,234</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500">Posts</h3>
        <p className="text-3xl font-bold">567</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500">Comments</h3>
        <p className="text-3xl font-bold">8,901</p>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <Suspense fallback={
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-gray-200 h-24 rounded animate-pulse"></div>
          ))}
        </div>
      }>
        <Stats />
      </Suspense>
    </div>
  );
}
```

✅ **Check:** Stats load hone tak skeleton dikh raha hai?

---

## Problem 9: Error Recovery
**Error ke baad recovery:**

```tsx
// app/dashboard/error.tsx
"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold mb-2">Oops!</h2>
        <p className="text-gray-600 mb-6">{error.message}</p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={reset}
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            Try Again
          </button>
          <a 
            href="/"
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
```

✅ **Check:** Try Again button kaam kar raha hai?

---

## Problem 10: Complete Special Files Setup
**Complete app with all special files:**

```tsx
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Special Files Demo',
  description: 'Complete example with all special files',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <nav className="bg-white shadow p-4">
          <div className="max-w-6xl mx-auto flex gap-6">
            <a href="/" className="font-bold">Home</a>
            <a href="/dashboard" className="hover:text-blue-500">Dashboard</a>
            <a href="/about" className="hover:text-blue-500">About</a>
          </div>
        </nav>
        <main className="flex-1 max-w-6xl mx-auto p-4 w-full">{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>© 2026</p>
        </footer>
      </body>
    </html>
  );
}

// app/page.tsx
export default function Home() {
  return <h1 className="text-4xl font-bold">Home Page</h1>;
}

// app/dashboard/loading.tsx
export default function Loading() {
  return <div className="animate-pulse text-xl">Loading Dashboard...</div>;
}

// app/dashboard/error.tsx
"use client";
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="text-center py-10">
      <p className="text-red-600 mb-4">{error.message}</p>
      <button onClick={reset} className="bg-blue-500 text-white px-4 py-2 rounded">
        Retry
      </button>
    </div>
  );
}

// app/not-found.tsx
import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold">404</h1>
      <Link href="/" className="inline-block mt-4 text-blue-500">Go Home</Link>
    </div>
  );
}
```

✅ **Check:** Sab special files kaam kar rahe hain?

---

## ✅ Checklist
- [ ] Problem 1: Root layout
- [ ] Problem 2: Loading state
- [ ] Problem 3: Error boundary
- [ ] Problem 4: 404 page
- [ ] Problem 5: Nested layout
- [ ] Problem 6: Programmatic 404
- [ ] Problem 7: Metadata in layout
- [ ] Problem 8: Loading with Suspense
- [ ] Problem 9: Error recovery
- [ ] Problem 10: Complete special files setup
