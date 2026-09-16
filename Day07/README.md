# Day 7: Images & Fonts Optimization

## 📅 Date: _______________

## 🎯 Today's Goals
- [ ] next/image seekha
- [ ] Image optimization features samjhe
- [ ] next/font seekha
- [ ] Google Fonts integrate kiye
- [ ] Custom fonts use kiye

---

## 📚 Kya Seekha Aaj?

### next/image Features:
```
✅ Automatic format (AVIF, WebP)
✅ Lazy loading
✅ Responsive sizes
✅ No layout shift (CLS)
✅ Size optimization
```

### Image Properties:
| Property | Use |
|----------|-----|
| `src` | Image path |
| `alt` | Alternative text |
| `width/height` | Fixed size |
| `fill` | Responsive (container fill) |
| `priority` | Above the fold |
| `sizes` | Responsive breakpoints |

### next/font Benefits:
```
✅ Self-hosted (no external CDN)
✅ Zero layout shift
✅ Fast loading
✅ CSS variables for Tailwind
```

### Font Pattern:
```tsx
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Layout mein
<body className={inter.variable}>

// Page mein
<p className="font-sans">Text</p>
```

---

## ✅ Problems Completed

- [ ] Problem 1: Basic image
- [ ] Problem 2: Responsive image with fill
- [ ] Problem 3: Image gallery
- [ ] Problem 4: Product cards with images
- [ ] Problem 5: Google font integration
- [ ] Problem 6: Multiple fonts
- [ ] Problem 7: Image with priority
- [ ] Problem 8: Blur placeholder
- [ ] Problem 9: Font sizes
- [ ] Problem 10: Complete page

---

## 📸 Screenshots

### Image Optimization:
<!-- Yahan image optimization ka screenshot paste karo -->

### Font Showcase:
<!-- Yahan fonts ka screenshot paste karo -->

---

## 💡 Key Learnings

### Image Rules:
```
1. width/height zaroori hai (without fill)
2. fill use karte waqt container relative hona chahiye
3. priority sirf above the fold images pe lagao
4. alt text accessibility ke liye zaroori hai
```

### Font Rules:
```
1. variable CSS variable name define karo
2. Layout mein variable class lagao
3. Tailwind mein font-sans ya variable use karo
```

### Performance Impact:
```
next/image = Automatic optimization + lazy loading
next/font = Self-hosted + zero layout shift
```

---

## 🔗 Resources Used
- [next/image Docs](https://nextjs.org/docs/app/api-reference/components/image)
- [next/font Docs](https://nextjs.org/docs/app/api-reference/functions/font)

---

## 📝 Notes / Doubts

### Jo seekha:
1. next/image se automatic optimization hota hai
2. fill property se responsive images bante hain
3. priority se above the fold images load hoti hain
4. next/font se fonts self-hosted hote hain
5. CSS variables se Tailwind mein fonts use hote hain

### Doubts:
<!-- Yahan apne doubts likho -->

### Kal kya karna hai:
- Flexbox & Grid seekhna hai
- Layouts banana seekhne hain

---

## ⏱️ Time Spent: _____ hours

---

## 🎯 Self Rating (1-5): _____ ⭐

---

## 🎉 Phase 1 Complete!

Congratulations! Tumne **Phase 1: Next.js Foundation** complete kar liya!

### Kya seekha Phase 1 mein:
1. ✅ Next.js setup with create-next-app
2. ✅ App Router basics (routing)
3. ✅ Tailwind CSS fundamentals
4. ✅ Layouts & Navigation
5. ✅ Dynamic routes ([slug])
6. ✅ Server vs Client Components
7. ✅ Images & Fonts optimization

### Next Phase:
**Phase 2: Core Concepts (Days 8-14)**
- Flexbox & Grid
- Responsive Design
- Data Fetching
- Special Files
- Metadata & SEO
- Server Actions
- API Routes

Ready ho? Chalo aage badhte hain! 🚀
