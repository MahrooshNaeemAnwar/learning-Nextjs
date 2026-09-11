# Day 5: Dynamic Routes

## 📅 Date: _______________

## 🎯 Today's Goals
- [ ] Dynamic routes samjhe ([slug] pattern)
- [ ] params object use kiya
- [ ] Blog posts banaye
- [ ] Product pages banaye
- [ ] generateStaticParams seekha

---

## 📚 Kya Seekha Aaj?

### Dynamic Route Pattern:
```
app/blog/[slug]/page.tsx
    ↓
/blog/hello    → slug = "hello"
/blog/world    → slug = "world"
```

### Key Concepts:
1. **[slug]** - Square brackets mein variable name
2. **params** - URL ki value milta hai
3. **generateStaticParams** - Build time pe pages banao
4. **find()** - Data se item dhundho
5. **404 handling** - Item na mile to error dikhao

### Code Pattern:
```tsx
// Dynamic page
export default async function Page({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  // slug use karo
}
```

---

## ✅ Problems Completed

- [ ] Problem 1: Blog folder structure
- [ ] Problem 2: Blog data
- [ ] Problem 3: Blog post page
- [ ] Problem 4: Blog listing page
- [ ] Problem 5: Product folder structure
- [ ] Problem 6: Product page
- [ ] Problem 7: Products listing
- [ ] Problem 8: Navigation update
- [ ] Problem 9: All routes test
- [ ] Problem 10: 404 pages test

---

## 📸 Screenshots

### Blog Listing:
<!-- Yahan blog listing ka screenshot paste karo -->

### Blog Post:
<!-- Yahan blog post ka screenshot paste karo -->

### Product Page:
<!-- Yahan product page ka screenshot paste karo -->

---

## 💡 Key Learnings

### Dynamic Route Rules:
```
✅ app/blog/[slug]/page.tsx
✅ app/products/[id]/page.tsx
✅ app/users/[username]/page.tsx
❌ app/blog/[slug].tsx (galat)
```

### params Pattern:
```tsx
// Next.js 15+ (async)
const { slug } = await params;

// Older versions (sync)
const { slug } = params;
```

### generateStaticParams:
```tsx
// Build time pe pages banao
export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}
```

---

## 🔗 Resources Used
- [Dynamic Routes Docs](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)

---

## 📝 Notes / Doubts

### Jo seekha:
1. [slug] se dynamic routes bante hain
2. params object mein URL ki value hoti hai
3. generateStaticParams se build time pe pages bante hain
4. find() se data se item dhundhte hain
5. 404 handling zaroori hai

### Doubts:
<!-- Yahan apne doubts likho -->

### Kal kya karna hai:
- Server vs Client Components seekhne hain
- 'use client' directive seekhni hai

---

## ⏱️ Time Spent: _____ hours

---

## 🎯 Self Rating (1-5): _____ ⭐
