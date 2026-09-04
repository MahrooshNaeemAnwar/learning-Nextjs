# Day 2: App Router Basics

## 📅 Date: _______________

## 🎯 Today's Goals
- [ ] File-based routing samjha
- [ ] Multiple pages banaye
- [ ] Navigation seekhi (Link, useRouter)
- [ ] 404 page banaya

---

## 📚 Kya Seekha Aaj?

### File-Based Routing:
```
app/page.tsx        →  /
app/about/page.tsx  →  /about
app/contact/page.tsx →  /contact
app/services/page.tsx →  /services
```

### Key Concepts:
1. **Folder = Route** - Har folder ek route banata hai
2. **page.tsx** - Ye file route ko public karti hai
3. **Link Component** - Client-side navigation (recommended)
4. **useRouter** - Programmatic navigation (button click pe)
5. **not-found.tsx** - Custom 404 page

### Navigation Methods:
```tsx
// Method 1: Link (Recommended)
import Link from "next/link";
<Link href="/about">About</Link>

// Method 2: useRouter (Programmatic)
"use client";
import { useRouter } from "next/navigation";
const router = useRouter();
<button onClick={() => router.push("/about")}>
  Go to About
</button>
```

---

## ✅ Problems Completed

- [ ] Problem 1: About page banao
- [ ] Problem 2: Contact page banao
- [ ] Problem 3: Services page banao
- [ ] Problem 4: Home page with navigation links
- [ ] Problem 5: About page with back link
- [ ] Problem 6: Services page with nested routes
- [ ] Problem 7: Navbar component banao
- [ ] Problem 8: Page with images
- [ ] Problem 9: Multiple routes test karo
- [ ] Problem 10: 404 page banao

---

## 📸 Screenshots

### Home Page:
<!-- Yahan home page ka screenshot paste karo -->

### About Page:
<!-- Yahan about page ka screenshot paste karo -->

### Navigation Working:
<!-- Yahan navigation ka screenshot paste karo -->

---

## 💡 Key Learnings

### Routing Rules:
```
✅ app/page.tsx → /
✅ app/about/page.tsx → /about
✅ app/blog/first-post/page.tsx → /blog/first-post
❌ app/about.tsx (galat - page.tsx chahiye)
❌ app/about.ts (galat - .tsx chahiye)
```

### Link vs useRouter:
```
Link = Pages pe navigate karne ke liye (recommended)
useRouter = Actions ke baad navigate karne ke liye
```

### Component Naming:
```
✅ export default function About() {} (PascalCase)
❌ export default function about() {} (camelCase - galat)
```

---

## 🔗 Resources Used
- [App Router Docs](https://nextjs.org/docs/app/building-your-application/routing)
- [Link Component](https://nextjs.org/docs/app/api-reference/components/link)
- [useRouter](https://nextjs.org/docs/app/api-reference/functions/use-router)

---

## 📝 Notes / Doubts

### Jo seekha:
1. Folder structure se routes bante hain
2. Har folder mein page.tsx hona zaroori hai
3. Link component se navigation hoti hai
4. useRouter se programmatic navigation hoti hai
5. not-found.tsx se custom 404 page banta hai

### Doubts:
<!-- Yahan apne doubts likho -->

### Kal kya karna hai:
- Layouts seekhne hain
- Root layout samajhna hai
- Nested layouts banana hai
- Navbar aur Footer kaise reuse karte hain

---

## ⏱️ Time Spent: _____ hours

---

## 🎯 Self Rating (1-5): _____ ⭐
