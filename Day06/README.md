# Day 6: Server vs Client Components

## 📅 Date: _______________

## 🎯 Today's Goals
- [ ] Server Components samjhe
- [ ] Client Components samjhe
- [ ] 'use client' directive seekhi
- [ ] Decision making seekhi
- [ ] Interactive components banaye

---

## 📚 Kya Seekha Aaj?

### Server Components (Default):
```
✅ Server pe run hota hai
✅ Database access direct
✅ Zero JS bundle
✅ useState/useEffect NAHI
✅ Event handlers NAHI
```

### Client Components:
```
❌ 'use client' directive chahiye
✅ Browser mein run hota hai
✅ useState/useEffect CHALTA hai
✅ Event handlers CHALTE hain
✅ Browser APIs CHALTE hain
```

### Decision Rule:
```
Kya interactivity chahiye?
├── NAHI → Server Component
└── HAAN → Client Component ("use client")
```

### Common Patterns:
```
Server: Blog posts, Product listings, Static content
Client: Forms, Buttons, Modals, Search, Toggles
```

---

## ✅ Problems Completed

- [ ] Problem 1: Static content page
- [ ] Problem 2: Interactive counter
- [ ] Problem 3: Form component
- [ ] Problem 4: Toggle component
- [ ] Problem 5: Search filter
- [ ] Problem 6: Tabs component
- [ ] Problem 7: Mixed server + client
- [ ] Problem 8: Component type decision
- [ ] Problem 9: Performance comparison
- [ ] Problem 10: Complete website

---

## 📸 Screenshots

### Server Component:
<!-- Yahan server component ka screenshot paste karo -->

### Client Component:
<!-- Yahan client component ka screenshot paste karo -->

### Mixed Page:
<!-- Yahan mixed page ka screenshot paste karo -->

---

## 💡 Key Learnings

### 'use client' Rules:
```
1. File ki SHURUAT mein hona chahiye
2. Import se PEHLE likho
3. Sirf interactive parts pe lagao
4. Page pe mat lagao (poora page client ban jayega)
```

### Performance Impact:
```
Server Component = Zero JS (best performance)
Client Component = JS bundle included
```

### Component Composition:
```
Server Component can import Client Component ✅
Client Component CANNOT import Server Component ❌
```

---

## 🔗 Resources Used
- [Server Components Docs](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Client Components Docs](https://nextjs.org/docs/app/building-your-application/rendering/client-components)

---

## 📝 Notes / Doubts

### Jo seekha:
1. Server Components default hain - "use client" nahi lagana
2. Client Components mein "use client" upar lagana hota hai
3. useState/useEffect sirf Client Components mein chalte hain
4. Database access sirf Server Components mein hota hai
5. Mixed approach best hai - Server for data, Client for interactivity

### Doubts:
<!-- Yahan apne doubts likho -->

### Kal kya karna hai:
- Data Fetching seekhni hai
- Server Components mein fetch() use karna

---

## ⏱️ Time Spent: _____ hours

---

## 🎯 Self Rating (1-5): _____ ⭐
