# Day 12: Metadata & SEO

## 📅 Date: _______________

## 🎯 Today's Goals
- [ ] Static metadata set kiya
- [ ] Dynamic metadata use kiya
- [ ] Title template samjha
- [ ] Open Graph tags add kiye
- [ ] Sitemap create kiya
- [ ] Robots.txt banaya

---

## 📚 Kya Seekha Aaj?

### Static Metadata:
```tsx
export const metadata: Metadata = {
  title: 'My Site',
  description: 'Description here',
};
```

### Dynamic Metadata:
```tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  return { title: `Page: ${params.id}` };
}
```

### Title Template:
```tsx
title: {
  default: 'My Site',
  template: '%s | My Site',  // "About | My Site"
}
```

### Files to Create:
```
app/sitemap.ts   → SEO sitemap
app/robots.ts    → Crawl rules
```

---

## ✅ Problems Completed

- [ ] Problem 1: Basic metadata
- [ ] Problem 2: Dynamic metadata
- [ ] Problem 3: Template metadata
- [ ] Problem 4: Open Graph tags
- [ ] Problem 5: Sitemap
- [ ] Problem 6: Robots.txt
- [ ] Problem 7: Page-specific metadata
- [ ] Problem 8: Dynamic OG images
- [ ] Problem 9: Twitter cards
- [ ] Problem 10: Complete SEO setup

---

## 💡 Key Learnings

### SEO Checklist:
```
✅ Title (50-60 chars)
✅ Description (150-160 chars)
✅ Open Graph image (1200x630)
✅ Sitemap.xml
✅ Robots.txt
✅ Semantic HTML
```

---

## ⏱️ Time Spent: _____ hours

## 🎯 Self Rating (1-5): _____ ⭐
