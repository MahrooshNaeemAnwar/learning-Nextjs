# Day 4: Layouts & Navigation

## 📅 Date: _______________

## 🎯 Today's Goals
- [ ] Root layout samjha
- [ ] Navbar component banaya
- [ ] Footer component banaya
- [ ] Active links seekhe
- [ ] Mobile responsive navigation banaya

---

## 📚 Kya Seekha Aaj?

### Layout System:
```
app/layout.tsx (Root Layout)
├── Navbar (har page pe)
├── {children} (page content)
└── Footer (har page pe)
```

### Key Concepts:
1. **Root Layout** - `<html>` aur `<body>` tags yahan hote hain
2. **{children}** - Page content yahan render hota hai
3. **Reuseable Components** - Navbar/Footer ek baar banao, sab pe use karo
4. **usePathname** - Current path pata karne ke liye
5. **Mobile Responsive** - useState se menu toggle karo

### Component Pattern:
```tsx
// Reuseable Component
export default function Navbar() {
  return <nav>...</nav>;
}

// Layout mein use
import Navbar from "./components/Navbar";
export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
```

---

## ✅ Problems Completed

- [ ] Problem 1: Navbar component banao
- [ ] Problem 2: Footer component banao
- [ ] Problem 3: Root layout update karo
- [ ] Problem 4: Home page with hero
- [ ] Problem 5: About page
- [ ] Problem 6: Contact page with form
- [ ] Problem 7: Active link highlight
- [ ] Problem 8: Mobile responsive navbar
- [ ] Problem 9: All pages test karo
- [ ] Problem 10: Dashboard layout

---

## 📸 Screenshots

### Desktop View:
<!-- Yahan desktop ka screenshot paste karo -->

### Mobile View:
<!-- Yahan mobile ka screenshot paste karo -->

### Active Link:
<!-- Yahan active link ka screenshot paste karo -->

---

## 💡 Key Learnings

### Layout Rules:
```
1. Root layout har page pe apply hota hai
2. {children} zaroori hai - page content wahan aata hai
3. Components ko layout mein import karo
4. "use client" directive client components ke liye
```

### Navigation Pattern:
```
Desktop: Links horizontal mein
Mobile: Hamburger menu + useState toggle
```

### Active Link Pattern:
```tsx
const pathname = usePathname();
className={pathname === link.href ? "active-class" : "normal-class"}
```

---

## 🔗 Resources Used
- [Layouts Docs](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates)
- [Link Component](https://nextjs.org/docs/app/api-reference/components/link)
- [usePathname](https://nextjs.org/docs/app/api-reference/functions/use-pathname)

---

## 📝 Notes / Doubts

### Jo seekha:
1. Root layout sab pages pe apply hota hai
2. Navbar/Footer components bana ke reuse karte hain
3. usePathname se current path pata chalta hai
4. Mobile pe useState se menu toggle karte hain
5. {children} se page content render hota hai

### Doubts:
<!-- Yahan apne doubts likho -->

### Kal kya karna hai:
- Dynamic routes seekhne hain
- [slug] pattern seekhna hai
- Blog posts banana hai

---

## ⏱️ Time Spent: _____ hours

---

## 🎯 Self Rating (1-5): _____ ⭐
