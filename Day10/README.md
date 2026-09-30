# Day 10: Data Fetching

## 📅 Date: _______________

## 🎯 Today's Goals
- [ ] Basic fetch in Server Component
- [ ] Loading states with Suspense
- [ ] Error handling with error.tsx
- [ ] Multiple data sources
- [ ] Conditional rendering

---

## 📚 Kya Seekha Aaj?

### Basic Fetch:
```tsx
// Server Component
export default async function Page() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return <div>{data.name}</div>;
}
```

### Loading State:
```tsx
// app/loading.tsx
export default function Loading() {
  return <div className="animate-pulse">Loading...</div>;
}
```

### Error Handling:
```tsx
// app/error.tsx
"use client";
export default function Error({ error, reset }) {
  return <button onClick={reset}>Try again</button>;
}
```

### Revalidation:
```tsx
// ISR - Revalidate every hour
const res = await fetch(url, { next: { revalidate: 3600 } });

// Always fresh
const res = await fetch(url, { cache: 'no-store' });
```

---

## ✅ Problems Completed

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

---

## 💡 Key Learnings

### Data Fetching Rules:
```
✅ Server Components: Direct fetch allowed
❌ Client Components: Use useEffect or SWR
✅ Loading: loading.tsx file
✅ Error: error.tsx file (must be client component)
```

---

## ⏱️ Time Spent: _____ hours

## 🎯 Self Rating (1-5): _____ ⭐
