# Day 19: Practice Problems

## 🎯 Instructions
Error handling practice karo. Error boundaries, not found pages, aur recovery implement karo.

---

## Problem 1: Basic Error Page
**Basic error page:**

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
        <h2 className="text-2xl font-bold mb-2">Dashboard Error</h2>
        <p className="text-gray-600 mb-6">{error.message}</p>
        <button onClick={reset} className="bg-blue-500 text-white px-6 py-2 rounded">
          Try again
        </button>
      </div>
    </div>
  );
}
```

✅ **Check:** Error aane pe error page dikh raha hai?

---

## Problem 2: 404 Page
**Custom 404 page:**

```tsx
// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl mb-4">🔍</div>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl text-gray-600 mb-8">Page Not Found</h2>
        <Link href="/" className="bg-blue-500 text-white px-8 py-3 rounded-lg">
          Go Home
        </Link>
      </div>
    </div>
  );
}
```

✅ **Check:** Invalid URL pe 404 page dikh raha hai?

---

## Problem 3: Programmatic Not Found
**Programmatic 404:**

```tsx
// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';

const posts = ['hello', 'nextjs', 'tailwind'];

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  if (!posts.includes(slug)) {
    notFound();
  }
  
  return <h1 className="text-3xl font-bold">Blog: {slug}</h1>;
}
```

✅ **Check:** Invalid slug pe 404 dikh raha hai?

---

## Problem 4: Nested Error Pages
**Different error pages for different routes:**

```tsx
// app/dashboard/error.tsx
"use client";
export default function DashboardError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold text-red-600">Dashboard Error</h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button onClick={reset} className="bg-blue-500 text-white px-4 py-2 rounded">Retry</button>
    </div>
  );
}

// app/settings/error.tsx
"use client";
export default function SettingsError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold text-orange-600">Settings Error</h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button onClick={reset} className="bg-orange-500 text-white px-4 py-2 rounded">Retry</button>
    </div>
  );
}
```

✅ **Check:** Different routes pe different error pages dikh rahe hain?

---

## Problem 5: Error Recovery
**Error recovery with multiple options:**

```tsx
// app/dashboard/error.tsx
"use client";
import { useRouter } from 'next/navigation';

export default function DashboardError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">💥</div>
        <h2 className="text-2xl font-bold mb-2">Oops!</h2>
        <p className="text-gray-600 mb-6">{error.message}</p>
        <div className="flex gap-4 justify-center">
          <button onClick={reset} className="bg-blue-500 text-white px-6 py-2 rounded">Try Again</button>
          <button onClick={() => router.refresh()} className="bg-gray-200 px-6 py-2 rounded">Refresh</button>
          <button onClick={() => router.push('/')} className="bg-gray-200 px-6 py-2 rounded">Go Home</button>
        </div>
      </div>
    </div>
  );
}
```

✅ **Check:** Multiple recovery options kaam kar rahe hain?

---

## Problem 6: Global Error
**Global error page:**

```tsx
// app/global-error.tsx
"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body className="bg-gray-50">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🚨</div>
            <h2 className="text-2xl font-bold mb-2">Application Error</h2>
            <p className="text-gray-600 mb-6">Something went terribly wrong!</p>
            <button onClick={reset} className="bg-red-500 text-white px-6 py-2 rounded">
              Restart Application
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
```

✅ **Check:** Global error pe pura page error dikh raha hai?

---

## Problem 7: Error with Details
**Error page with more details:**

```tsx
// app/dashboard/error.tsx
"use client";

export default function DashboardError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-[400px] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow p-6">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold">Error Occurred</h2>
        </div>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="text-sm text-gray-600"><strong>Message:</strong> {error.message}</p>
          {error.digest && <p className="text-sm text-gray-600 mt-2"><strong>Digest:</strong> {error.digest}</p>}
        </div>
        <button onClick={reset} className="w-full bg-blue-500 text-white py-2 rounded">
          Try Again
        </button>
      </div>
    </div>
  );
}
```

✅ **Check:** Error details dikh rahe hain?

---

## Problem 8: Not Found with Search
**404 page with search:**

```tsx
// app/not-found.tsx
"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };
  
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl mb-4">🔍</div>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl text-gray-600 mb-8">Page Not Found</h2>
        <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto mb-6">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="flex-1 border rounded-lg px-4 py-2"
          />
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">
            Search
          </button>
        </form>
        <Link href="/" className="text-blue-500 hover:underline">Go Home</Link>
      </div>
    </div>
  );
}
```

✅ **Check:** 404 page pe search kaam kar raha hai?

---

## Problem 9: Error Logging
**Error logging in error boundary:**

```tsx
// app/dashboard/error.tsx
"use client";
import { useEffect } from 'react';

export default function DashboardError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log error to service
    console.error('Dashboard error:', error);
  }, [error]);
  
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">🐛</div>
        <h2 className="text-2xl font-bold mb-2">Bug Reported!</h2>
        <p className="text-gray-600 mb-6">We've logged this error.</p>
        <button onClick={reset} className="bg-blue-500 text-white px-6 py-2 rounded">
          Try again
        </button>
      </div>
    </div>
  );
}
```

✅ **Check:** Error console mein log ho raha hai?

---

## Problem 10: Complete Error Handling
**Complete error handling setup:**

```tsx
// app/not-found.tsx
import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-gray-600 mb-8">Page not found</p>
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

// app/global-error.tsx
"use client";
export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html><body>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Critical Error</h2>
          <button onClick={reset} className="bg-red-500 text-white px-6 py-2 rounded">Restart</button>
        </div>
      </div>
    </body></html>
  );
}
```

✅ **Check:** Sab error pages kaam kar rahe hain?

---

## ✅ Checklist
- [ ] Problem 1: Basic error page
- [ ] Problem 2: 404 page
- [ ] Problem 3: Programmatic not found
- [ ] Problem 4: Nested error pages
- [ ] Problem 5: Error recovery
- [ ] Problem 6: Global error
- [ ] Problem 7: Error with details
- [ ] Problem 8: Not found with search
- [ ] Problem 9: Error logging
- [ ] Problem 10: Complete error handling
