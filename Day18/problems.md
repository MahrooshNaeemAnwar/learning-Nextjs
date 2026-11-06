# Day 18: Practice Problems

## 🎯 Instructions
Streaming aur Suspense practice karo. Loading states aur parallel data fetching implement karo.

---

## Problem 1: Basic Suspense
**Basic suspense boundary:**

```tsx
// app/dashboard/page.tsx
import { Suspense } from 'react';

async function SlowData() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return <div className="text-green-600">Data loaded!</div>;
}

export default function DashboardPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <Suspense fallback={<div className="animate-pulse text-gray-500">Loading...</div>}>
        <SlowData />
      </Suspense>
    </div>
  );
}
```

✅ **Check:** 2 seconds baad data dikh raha hai?

---

## Problem 2: Multiple Suspense
**Multiple suspense boundaries:**

```tsx
// app/multi-suspense/page.tsx
import { Suspense } from 'react';

async function Component1() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return <div className="bg-blue-100 p-4 rounded">Component 1 loaded</div>;
}

async function Component2() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return <div className="bg-green-100 p-4 rounded">Component 2 loaded</div>;
}

async function Component3() {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return <div className="bg-purple-100 p-4 rounded">Component 3 loaded</div>;
}

export default function MultiSuspensePage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">Multiple Suspense</h1>
      <Suspense fallback={<div className="h-16 bg-gray-200 animate-pulse rounded"></div>}>
        <Component1 />
      </Suspense>
      <Suspense fallback={<div className="h-16 bg-gray-200 animate-pulse rounded"></div>}>
        <Component2 />
      </Suspense>
      <Suspense fallback={<div className="h-16 bg-gray-200 animate-pulse rounded"></div>}>
        <Component3 />
      </Suspense>
    </div>
  );
}
```

✅ **Check:** Components alag alag time pe load ho rahe hain?

---

## Problem 3: Skeleton Loading
**Skeleton loading pattern:**

```tsx
// app/skeleton/page.tsx
import { Suspense } from 'react';

function Skeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-gray-200 h-24 animate-pulse rounded"></div>
      ))}
    </div>
  );
}

async function Content() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return (
    <div className="space-y-4">
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">Item {i}</h3>
          <p className="text-gray-600">Description here</p>
        </div>
      ))}
    </div>
  );
}

export default function SkeletonPage() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Skeleton Loading</h1>
      <Suspense fallback={<Skeleton />}>
        <Content />
      </Suspense>
    </div>
  );
}
```

✅ **Check:** Skeleton dikh raha hai data load hone tak?

---

## Problem 4: Parallel Fetching
**Parallel data fetching:**

```tsx
// app/parallel/page.tsx
import { Suspense } from 'react';

async function Users() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const users = [{ id: 1, name: 'Mahroosh' }, { id: 2, name: 'Ali' }];
  return (
    <div className="bg-blue-100 p-4 rounded">
      <h3 className="font-bold mb-2">Users</h3>
      {users.map(u => <p key={u.id}>{u.name}</p>)}
    </div>
  );
}

async function Posts() {
  await new Promise(resolve => setTimeout(resolve, 1500));
  const posts = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];
  return (
    <div className="bg-green-100 p-4 rounded">
      <h3 className="font-bold mb-2">Posts</h3>
      {posts.map(p => <p key={p.id}>{p.title}</p>)}
    </div>
  );
}

export default function ParallelPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Parallel Fetching</h1>
      <div className="grid grid-cols-2 gap-4">
        <Suspense fallback={<div className="bg-gray-200 h-32 animate-pulse rounded"></div>}>
          <Users />
        </Suspense>
        <Suspense fallback={<div className="bg-gray-200 h-32 animate-pulse rounded"></div>}>
          <Posts />
        </Suspense>
      </div>
    </div>
  );
}
```

✅ **Check:** Dono components parallel mein load ho rahe hain?

---

## Problem 5: Dashboard with Streaming
**Dashboard with streaming:**

```tsx
// app/streaming-dashboard/page.tsx
import { Suspense } from 'react';

async function Stats() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded shadow">
        <h4 className="text-gray-500">Users</h4>
        <p className="text-2xl font-bold">1,234</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h4 className="text-gray-500">Posts</h4>
        <p className="text-2xl font-bold">567</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h4 className="text-gray-500">Revenue</h4>
        <p className="text-2xl font-bold">$12k</p>
      </div>
    </div>
  );
}

async function RecentActivity() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold mb-2">Recent Activity</h3>
      <p className="text-gray-600">Activity loaded!</p>
    </div>
  );
}

export default function StreamingDashboardPage() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Streaming Dashboard</h1>
      <Suspense fallback={<div className="grid grid-cols-3 gap-4 mb-6">
        {[1, 2, 3].map(i => <div key={i} className="bg-gray-200 h-20 animate-pulse rounded"></div>)}
      </div>}>
        <Stats />
      </Suspense>
      <Suspense fallback={<div className="bg-gray-200 h-32 animate-pulse rounded"></div>}>
        <RecentActivity />
      </Suspense>
    </div>
  );
}
```

✅ **Check:** Stats pehle load ho rahe hain, activity baad mein?

---

## Problem 6: Nested Suspense
**Nested suspense boundaries:**

```tsx
// app/nested-suspense/page.tsx
import { Suspense } from 'react';

async function OuterContent() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return (
    <div className="bg-blue-100 p-4 rounded">
      <h3>Outer Content</h3>
      <Suspense fallback={<div className="bg-blue-200 p-2 animate-pulse rounded mt-2">Loading inner...</div>}>
        <InnerContent />
      </Suspense>
    </div>
  );
}

async function InnerContent() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return <div className="bg-blue-300 p-2 rounded mt-2">Inner Content Loaded!</div>;
}

export default function NestedSuspensePage() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Nested Suspense</h1>
      <Suspense fallback={<div className="bg-gray-200 h-32 animate-pulse rounded"></div>}>
        <OuterContent />
      </Suspense>
    </div>
  );
}
```

✅ **Check:** Outer aur inner content alag alag time pe load ho rahe hain?

---

## Problem 7: Loading Cards
**Cards with individual loading:**

```tsx
// app/loading-cards/page.tsx
import { Suspense } from 'react';

async function Card({ id }: { id: number }) {
  await new Promise(resolve => setTimeout(resolve, id * 500));
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold">Card {id}</h3>
      <p className="text-gray-600">Content for card {id}</p>
    </div>
  );
}

export default function LoadingCardsPage() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Loading Cards</h1>
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map(id => (
          <Suspense key={id} fallback={<div className="bg-gray-200 h-24 animate-pulse rounded"></div>}>
            <Card id={id} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}
```

✅ **Check:** Cards alag alag time pe load ho rahe hain?

---

## Problem 8: Streaming Table
**Table with streaming rows:**

```tsx
// app/streaming-table/page.tsx
import { Suspense } from 'react';

async function TableRow({ id }: { id: number }) {
  await new Promise(resolve => setTimeout(resolve, id * 300));
  return (
    <tr className="border-b">
      <td className="p-2">User {id}</td>
      <td className="p-2">user{id}@example.com</td>
      <td className="p-2 text-green-600">Active</td>
    </tr>
  );
}

async function TableBody() {
  return (
    <tbody>
      {[1, 2, 3, 4, 5].map(id => (
        <Suspense key={id} fallback={<tr><td colSpan={3} className="p-2 bg-gray-100 animate-pulse">Loading...</td></tr>}>
          <TableRow id={id} />
        </Suspense>
      ))}
    </tbody>
  );
}

export default function StreamingTablePage() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Streaming Table</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <TableBody />
      </table>
    </div>
  );
}
```

✅ **Check:** Table rows alag alag time pe load ho rahe hain?

---

## Problem 9: Progressive Loading
**Progressive content loading:**

```tsx
// app/progressive/page.tsx
import { Suspense } from 'react';

async function Header() {
  await new Promise(resolve => setTimeout(resolve, 500));
  return <h2 className="text-2xl font-bold mb-4">Header Content</h2>;
}

async function Main() {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return <div className="bg-blue-100 p-4 rounded mb-4">Main Content</div>;
}

async function Sidebar() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return <div className="bg-green-100 p-4 rounded">Sidebar Content</div>;
}

export default function ProgressivePage() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <Suspense fallback={<div className="bg-gray-200 h-12 animate-pulse rounded mb-4"></div>}>
        <Header />
      </Suspense>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Suspense fallback={<div className="bg-gray-200 h-32 animate-pulse rounded"></div>}>
            <Main />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<div className="bg-gray-200 h-32 animate-pulse rounded"></div>}>
            <Sidebar />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
```

✅ **Check:** Content progressively load ho raha hai?

---

## Problem 10: Complete Streaming App
**Complete streaming app:**

```tsx
// app/complete-streaming/page.tsx
import { Suspense } from 'react';

function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      <div className="bg-gray-200 h-8 w-1/4 animate-pulse rounded"></div>
      <div className="bg-gray-200 h-64 animate-pulse rounded"></div>
    </div>
  );
}

async function Content() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Complete Streaming App</h1>
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Item {i}</h3>
            <p className="text-gray-600">Description</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CompleteStreamingPage() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <Suspense fallback={<LoadingSkeleton />}>
        <Content />
      </Suspense>
    </div>
  );
}
```

✅ **Check:** Complete streaming app kaam kar raha hai?

---

## ✅ Checklist
- [ ] Problem 1: Basic suspense
- [ ] Problem 2: Multiple suspense
- [ ] Problem 3: Skeleton loading
- [ ] Problem 4: Parallel fetching
- [ ] Problem 5: Streaming dashboard
- [ ] Problem 6: Nested suspense
- [ ] Problem 7: Loading cards
- [ ] Problem 8: Streaming table
- [ ] Problem 9: Progressive loading
- [ ] Problem 10: Complete streaming app
