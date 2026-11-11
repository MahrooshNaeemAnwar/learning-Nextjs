# Day 20: Practice Problems

## 🎯 Instructions
Caching strategies practice karo. ISR, tags, aur on-demand revalidation implement karo.

---

## Problem 1: Basic ISR
**Basic ISR setup:**

```tsx
// app/products/page.tsx
async function ProductList() {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 60 }
  });
  const products = await res.json();
  
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product: any) => (
        <div key={product.id} className="bg-white p-4 rounded shadow">
          <img src={product.image} alt={product.title} className="h-32 object-contain mb-2" />
          <h3 className="font-bold text-sm">{product.title}</h3>
          <p className="text-green-600">${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Products (ISR: 60s)</h1>
      <ProductList />
    </div>
  );
}
```

✅ **Check:** Products cached hain aur 60s baad revalidate ho rahe hain?

---

## Problem 2: Tag-Based Revalidation
**Tag-based caching:**

```tsx
// app/posts/page.tsx
async function PostList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { tags: ['posts'] }
  });
  const posts = await res.json();
  
  return (
    <div className="space-y-4">
      {posts.slice(0, 5).map((post: any) => (
        <div key={post.id} className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">{post.title}</h2>
          <p className="text-gray-600 text-sm">{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function PostsPage() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Posts (Tag-Based)</h1>
      <PostList />
    </div>
  );
}

// app/api/revalidate/route.ts
import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST() {
  revalidateTag('posts');
  return NextResponse.json({ revalidated: true });
}
```

✅ **Check:** API call ke baad posts revalidate ho rahe hain?

---

## Problem 3: Path-Based Revalidation
**Path-based caching:**

```tsx
// app/blog/page.tsx
async function BlogList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 }
  });
  const posts = await res.json();
  
  return (
    <div className="space-y-4">
      {posts.slice(0, 5).map((post: any) => (
        <div key={post.id} className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">{post.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default function BlogPage() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog (ISR: 1h)</h1>
      <BlogList />
    </div>
  );
}

// app/api/revalidate-path/route.ts
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST() {
  revalidatePath('/blog');
  return NextResponse.json({ revalidated: true });
}
```

✅ **Check:** Path revalidation kaam kar raha hai?

---

## Problem 4: No Cache
**Always fresh data:**

```tsx
// app/realtime/page.tsx
async function RealtimeData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    cache: 'no-store'
  });
  const post = await res.json();
  
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600">{post.body}</p>
      <p className="text-sm text-gray-400 mt-4">
        Fetched at: {new Date().toISOString()}
      </p>
    </div>
  );
}

export default function RealtimePage() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Realtime (No Cache)</h1>
      <RealtimeData />
    </div>
  );
}
```

✅ **Check:** Har refresh pe naya data aur timestamp aa raha hai?

---

## Problem 5: Mixed Caching
**Different pages, different strategies:**

```tsx
// app/mixed/page.tsx
import { Suspense } from 'react';

async function StaticContent() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post = await res.json();
  return <div className="bg-green-100 p-4 rounded"><strong>Static:</strong> {post.title}</div>;
}

async function IsrContent() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/2', {
    next: { revalidate: 60 }
  });
  const post = await res.json();
  return <div className="bg-blue-100 p-4 rounded"><strong>ISR (60s):</strong> {post.title}</div>;
}

async function DynamicContent() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/3', {
    cache: 'no-store'
  });
  const post = await res.json();
  return <div className="bg-yellow-100 p-4 rounded"><strong>Dynamic:</strong> {post.title} - {new Date().toLocaleTimeString()}</div>;
}

export default function MixedPage() {
  return (
    <div className="p-4 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold mb-6">Mixed Caching</h1>
      <Suspense fallback={<div className="bg-gray-200 h-16 animate-pulse rounded"></div>}>
        <StaticContent />
      </Suspense>
      <Suspense fallback={<div className="bg-gray-200 h-16 animate-pulse rounded"></div>}>
        <IsrContent />
      </Suspense>
      <Suspense fallback={<div className="bg-gray-200 h-16 animate-pulse rounded"></div>}>
        <DynamicContent />
      </Suspense>
    </div>
  );
}
```

✅ **Check:** Different strategies alag se kaam kar rahe hain?

---

## Problem 6: Cache with Params
**Dynamic params with caching:**

```tsx
// app/users/[id]/page.tsx
async function UserProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: { revalidate: 3600 }
  });
  const user = await res.json();
  
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-500">{user.phone}</p>
    </div>
  );
}

export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">User {id} (ISR: 1h)</h1>
      <UserProfile params={params} />
    </div>
  );
}
```

✅ **Check:** Har user cached hai aur 1h baad revalidate ho raha hai?

---

## Problem 7: Revalidation Button
**Manual revalidation button:**

```tsx
// app/admin/posts/page.tsx
"use client";

import { useRouter } from 'next/navigation';

export default function AdminPosts() {
  const router = useRouter();
  
  const handleRevalidate = async () => {
    await fetch('/api/revalidate', {
      method: 'POST',
      body: JSON.stringify({ tag: 'posts' }),
    });
    router.refresh();
  };
  
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Posts</h1>
      <button onClick={handleRevalidate} className="bg-blue-500 text-white px-4 py-2 rounded">
        Revalidate Posts
      </button>
    </div>
  );
}
```

✅ **Check:** Button click ke baad data refresh ho raha hai?

---

## Problem 8: Conditional Caching
**Conditional caching based on params:**

```tsx
// app/items/[id]/page.tsx
async function ItemDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const isPreview = id.startsWith('preview-');
  
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id.replace('preview-', '')}`, {
    cache: isPreview ? 'no-store' : undefined,
    next: isPreview ? undefined : { revalidate: 3600 }
  });
  const item = await res.json();
  
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold">{item.title}</h2>
      <p className="text-gray-600">{item.body}</p>
      {isPreview && <span className="text-yellow-500 text-sm">Preview Mode</span>}
    </div>
  );
}

export default async function ItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Item {id}</h1>
      <ItemDetails params={params} />
    </div>
  );
}
```

✅ **Check:** Preview mode pe no-cache, normal pe cached?

---

## Problem 9: Cache Statistics
**Display cache info:**

```tsx
// app/cached-data/page.tsx
async function CachedData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 }
  });
  const posts = await res.json();
  
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="font-bold mb-4">Cached Posts</h2>
      <p className="text-sm text-gray-500 mb-4">Last updated: {new Date().toLocaleTimeString()}</p>
      <p className="text-sm text-gray-500">Revalidates: Every 60 seconds</p>
    </div>
  );
}

export default function CachedDataPage() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Cache Demo</h1>
      <CachedData />
    </div>
  );
}
```

✅ **Check:** Cache info dikh raha hai?

---

## Problem 10: Complete Caching Setup
**Complete caching setup:**

```tsx
// app/cached-posts/page.tsx
async function PostList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60, tags: ['posts'] }
  });
  const posts = await res.json();
  
  return (
    <div className="space-y-4">
      {posts.slice(0, 5).map((post: any) => (
        <div key={post.id} className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">{post.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default function CachedPostsPage() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Cached Posts (60s + Tag)</h1>
      <PostList />
    </div>
  );
}

// app/api/revalidate-all/route.ts
import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST() {
  revalidateTag('posts');
  return NextResponse.json({ revalidated: true });
}
```

✅ **Check:** ISR aur tags dono kaam kar rahe hain?

---

## ✅ Checklist
- [ ] Problem 1: Basic ISR
- [ ] Problem 2: Tag-based revalidation
- [ ] Problem 3: Path-based revalidation
- [ ] Problem 4: No cache
- [ ] Problem 5: Mixed caching
- [ ] Problem 6: Cache with params
- [ ] Problem 7: Revalidation button
- [ ] Problem 8: Conditional caching
- [ ] Problem 9: Cache statistics
- [ ] Problem 10: Complete caching setup
