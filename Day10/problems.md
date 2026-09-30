# Day 10: Practice Problems

## 🎯 Instructions
Data fetching in Next.js practice karo. Server Components mein async functions use karo.

---

## Problem 1: Basic Fetch
**Posts fetch karo aur dikhao:**

```tsx
// app/posts/page.tsx
export default async function PostsPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="space-y-4">
        {posts.slice(0, 5).map((post: any) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

✅ **Check:** 5 posts dikh rahe hain?

---

## Problem 2: Loading State
**Loading animation banao:**

```tsx
// app/users/loading.tsx
export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-200 h-32 rounded-lg animate-pulse"></div>
        ))}
      </div>
    </div>
  );
}
```

✅ **Check:** Data load hone tak animation dikh rahi hai?

---

## Problem 3: Error Handling
**Error boundary banao:**

```tsx
// app/posts/error.tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-4xl mx-auto p-4 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        ❌ Error Loading Posts
      </h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button 
        onClick={reset}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Try Again
      </button>
    </div>
  );
}
```

✅ **Check:** Error aane pe error message dikh raha hai?

---

## Problem 4: Users List
**Users fetch karo aur cards mein dikhao:**

```tsx
// app/users/page.tsx
import { Suspense } from 'react';

async function UserList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user: any) => (
        <div key={user.id} className="bg-white p-6 rounded-lg shadow">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
            {user.name.charAt(0)}
          </div>
          <h3 className="text-xl font-bold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-500 text-sm mt-2">{user.company.name}</p>
        </div>
      ))}
    </div>
  );
}

export default function UsersPage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <Suspense fallback={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-200 h-32 rounded-lg animate-pulse"></div>
          ))}
        </div>
      }>
        <UserList />
      </Suspense>
    </div>
  );
}
```

✅ **Check:** 10 users cards mein dikh rahe hain?

---

## Problem 5: Photos Grid
**Photos fetch karo aur grid mein dikhao:**

```tsx
// app/photos/page.tsx
import { Suspense } from 'react';

async function PhotoGrid() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const photos = await res.json();
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {photos.slice(0, 12).map((photo: any) => (
        <div key={photo.id} className="bg-white rounded-lg shadow overflow-hidden">
          <img 
            src={photo.thumbnailUrl} 
            alt={photo.title}
            className="w-full h-32 object-cover"
          />
          <div className="p-2">
            <p className="text-xs text-gray-600 truncate">{photo.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PhotosPage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Photos</h1>
      <Suspense fallback={
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-200 h-48 rounded-lg animate-pulse"></div>
          ))}
        </div>
      }>
        <PhotoGrid />
      </Suspense>
    </div>
  );
}
```

✅ **Check:** 12 photos grid mein dikh rahe hain?

---

## Problem 6: Conditional Rendering
**Data ke hisab se UI change karo:**

```tsx
// app/products/page.tsx
async function ProductList() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {products.slice(0, 8).map((product: any) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow">
          <img 
            src={product.image} 
            alt={product.title}
            className="h-48 object-contain mb-4"
          />
          <h3 className="font-bold text-sm mb-2 line-clamp-2">{product.title}</h3>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-green-600">${product.price}</span>
            <span className="text-sm text-yellow-500">⭐ {product.rating.rate}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <Suspense fallback={
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-200 h-64 rounded-lg animate-pulse"></div>
          ))}
        </div>
      }>
        <ProductList />
      </Suspense>
    </div>
  );
}
```

✅ **Check:** Products images, price, rating ke saath dikh rahe hain?

---

## Problem 7: Comments Section
**Comments fetch karo aur list karo:**

```tsx
// app/comments/page.tsx
import { Suspense } from 'react';

async function CommentList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const comments = await res.json();
  
  return (
    <div className="space-y-4">
      {comments.slice(0, 10).map((comment: any) => (
        <div key={comment.id} className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              {comment.email.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-bold">{comment.name}</p>
              <p className="text-sm text-gray-500">{comment.email}</p>
            </div>
          </div>
          <p className="text-gray-700">{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function CommentsPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Comments</h1>
      <Suspense fallback={
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-200 h-32 rounded-lg animate-pulse"></div>
          ))}
        </div>
      }>
        <CommentList />
      </Suspense>
    </div>
  );
}
```

✅ **Check:** 10 comments emails ke saath dikh rahe hain?

---

## Problem 8: Todos List
**Todos fetch karo aur checkboxes ke saath dikhao:**

```tsx
// app/todos/page.tsx
import { Suspense } from 'react';

async function TodoList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();
  
  return (
    <div className="max-w-2xl mx-auto space-y-2">
      {todos.slice(0, 15).map((todo: any) => (
        <div key={todo.id} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow">
          <input 
            type="checkbox" 
            checked={todo.completed}
            readOnly
            className="w-5 h-5"
          />
          <span className={todo.completed ? "line-through text-gray-500" : ""}>
            {todo.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function TodosPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Todos</h1>
      <Suspense fallback={
        <div className="max-w-2xl mx-auto space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-200 h-16 rounded-lg animate-pulse"></div>
          ))}
        </div>
      }>
        <TodoList />
      </Suspense>
    </div>
  );
}
```

✅ **Check:** Completed todos strike-through dikh rahe hain?

---

## Problem 9: Albums Grid
**Albums fetch karo aur grid mein dikhao:**

```tsx
// app/albums/page.tsx
import { Suspense } from 'react';

async function AlbumGrid() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  const albums = await res.json();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {albums.slice(0, 12).map((album: any) => (
        <div key={album.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded mb-3 flex items-center justify-center text-white">
            📷
          </div>
          <h3 className="font-bold text-sm">{album.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default function AlbumsPage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Albums</h1>
      <Suspense fallback={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-200 h-48 rounded-lg animate-pulse"></div>
          ))}
        </div>
      }>
        <AlbumGrid />
      </Suspense>
    </div>
  );
}
```

✅ **Check:** Albums cards mein dikh rahe hain?

---

## Problem 10: Complete Data Fetching Page
**Full page with multiple data sources:**

```tsx
// app/dashboard/page.tsx
import { Suspense } from 'react';

async function Stats() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500">Total Users</h3>
        <p className="text-3xl font-bold">{users.length}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500">Active Users</h3>
        <p className="text-3xl font-bold text-green-600">{Math.floor(users.length * 0.7)}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500">New Users</h3>
        <p className="text-3xl font-bold text-blue-600">{Math.floor(users.length * 0.3)}</p>
      </div>
    </div>
  );
}

async function RecentActivity() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="font-bold text-lg mb-4">Recent Posts</h3>
      <div className="space-y-3">
        {posts.slice(0, 5).map((post: any) => (
          <div key={post.id} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className="text-gray-700">{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <Suspense fallback={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-200 h-24 rounded-lg animate-pulse"></div>
          ))}
        </div>
      }>
        <Stats />
      </Suspense>
      <Suspense fallback={
        <div className="bg-gray-200 h-64 rounded-lg animate-pulse"></div>
      }>
        <RecentActivity />
      </Suspense>
    </div>
  );
}
```

✅ **Check:** Stats aur recent activity dono dikh rahe hain?

---

## ✅ Checklist
- [ ] Problem 1: Basic fetch
- [ ] Problem 2: Loading state
- [ ] Problem 3: Error handling
- [ ] Problem 4: Users list
- [ ] Problem 5: Photos grid
- [ ] Problem 6: Conditional rendering
- [ ] Problem 7: Comments section
- [ ] Problem 8: Todos list
- [ ] Problem 9: Albums grid
- [ ] Problem 10: Complete data fetching page
