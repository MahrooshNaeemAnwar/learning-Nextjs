# Day 11: Special Files

## 📅 Date: _______________

## 🎯 Today's Goals
- [ ] page.tsx samjha
- [ ] layout.tsx banaya
- [ ] loading.tsx use kiya
- [ ] error.tsx implement kiya
- [ ] not-found.tsx banaya
- [ ] Nested layouts try kiye

---

## 📚 Kya Seekha Aaj?

### Special Files Rules:
```
page.tsx      → Route ka content (REQUIRED)
layout.tsx    → Shared UI wrapper
loading.tsx   → Loading state (Suspense)
error.tsx     → Error boundary (MUST be "use client")
not-found.tsx → 404 page
```

### File Location:
```
app/
├── layout.tsx      (Root layout)
├── page.tsx        (Home: /)
├── loading.tsx     (Home loading)
├── error.tsx       (Home error)
├── not-found.tsx   (404 page)
├── about/
│   ├── layout.tsx  (About layout)
│   └── page.tsx    (About: /about)
└── dashboard/
    ├── loading.tsx (Dashboard loading)
    ├── error.tsx   (Dashboard error)
    └── page.tsx    (Dashboard: /dashboard)
```

---

## ✅ Problems Completed

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

---

## 💡 Key Learnings

### When to Use What:
```
layout.tsx  → Har page pe same chahiye (nav, footer)
loading.tsx → Jab data fetch ho raha ho
error.tsx   → Jab error handle karna ho
not-found.tsx → Jab 404 dikhana ho
```

---

## ⏱️ Time Spent: _____ hours

## 🎯 Self Rating (1-5): _____ ⭐
