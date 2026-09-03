# Day 1: Practice Problems

## 🎯 Instructions
Step-by-step problems solve karo. Har problem ke baad check karo ki sab sahi kaam kar raha hai.

---

## Problem 1: Project Setup
**Command pe command run karo:**

```bash
# Step 1: Node.js check karo
node --version

# Step 2: npm check karo
npm --version

# Step 3: Project create karo
npx create-next-app@latest my-first-next-app

# Step 4: Options choose karo (sab YES)
# TypeScript → Yes
# ESLint → Yes
# Tailwind CSS → Yes ✅
# src/ directory → Yes
# App Router → Yes ✅
# import alias → Yes

# Step 5: Folder mein jao
cd my-first-next-app

# Step 6: Server start karo
npm run dev

# Step 7: Browser mein khole
# http://localhost:3000
```

✅ **Check:** Browser mein Next.js ka default page dikh raha hai?

---

## Problem 2: Project Structure Dekho
**VS Code mein project kholo aur ye files dhundho:**

```
my-first-next-app/
├── app/
│   ├── page.tsx         ← Home page
│   ├── layout.tsx       ← Root layout
│   └── globals.css      ← Tailwind config
├── public/
│   ├── next.svg
│   └── vercel.svg
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

✅ **Check:** Sab files exist karti hain?

---

## Problem 3: Home Page Edit Karo
**`app/page.tsx` kholo aur ye code likho:**

```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Hello Next.js! 🚀
        </h1>
        <p className="text-2xl">
          Mera pehla page Tailwind CSS ke saath
        </p>
        <p className="text-lg mt-2 opacity-80">
          Main naam: _____________
        </p>
      </div>
    </div>
  );
}
```

✅ **Check:** Browser mein gradient background aur white text dikh raha hai?

---

## Problem 4: Tailwind Classes Practice Karo
**`app/page.tsx` mein ye different styles try karo:**

```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Problem 4a: Colored Box */}
      <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
        Blue Box
      </div>
      
      {/* Problem 4b: Bigger Box */}
      <div className="bg-green-500 text-white p-8 rounded-lg mb-4 text-xl">
        Green Bigger Box
      </div>
      
      {/* Problem 4c: Border wala Box */}
      <div className="bg-white border-2 border-red-500 text-red-500 p-4 rounded-lg mb-4">
        Red Border Box
      </div>
      
      {/* Problem 4d: Shadow wala Box */}
      <div className="bg-white shadow-lg p-4 rounded-lg">
        Box with Shadow
      </div>
    </div>
  );
}
```

✅ **Check:** 4 alag-alag boxes dikh rahe hain?

---

## Problem 5: Heading Styles Try Karo
**Different heading sizes try karo:**

```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">
        Heading 1 (6xl)
      </h1>
      <h2 className="text-5xl font-bold text-green-600 mb-4">
        Heading 2 (5xl)
      </h2>
      <h3 className="text-4xl font-bold text-red-600 mb-4">
        Heading 3 (4xl)
      </h3>
      <h4 className="text-3xl font-bold text-purple-600 mb-4">
        Heading 4 (3xl)
      </h4>
      <p className="text-xl text-gray-700">
        Normal paragraph text (xl)
      </p>
      <p className="text-sm text-gray-500">
        Small text (sm)
      </p>
    </div>
  );
}
```

✅ **Check:** Different sizes ke headings dikh rahe hain?

---

## Problem 6: Layout File Samjho
**`app/layout.tsx` kholo aur dekho:**

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My First Next.js App",
  description: "Created by learning Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

**Questions:**
1. `metadata` object mein kya hai? → Title aur description
2. `{children}` kya karta hai? → Page content yahan aata hai
3. Root layout kahan dikhta hai? → Har page pe

✅ **Check:** Layout samajh aa gaya?

---

## Problem 7: npm Scripts Test Karo
**Terminal mein ye commands run karo:**

```bash
# Dev server restart karo (Ctrl+C se band karo pehle)
npm run dev

# Build check karo
npm run build

# Lint run karo
npm run lint
```

✅ **Check:** Sab commands sahi se run ho rahe hain?

---

## Problem 8: globals.css Samjho
**`app/globals.css` kholo aur dekho:**

Ye file automatically create hoti hai with Tailwind config:

```css
@import "tailwindcss";

@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

**Questions:**
1. `@import "tailwindcss"` kya karta hai? → Tailwind load karta hai
2. `@theme` block kya hai? → Custom CSS variables
3. Dark mode media query kya karti hai? → Dark mode support

✅ **Check:** globals.css samajh aa gaya?

---

## Problem 9: Simple Card Banao
**Home page pe card component banao:**

```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Image Area */}
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-48">
          {/* Image placeholder */}
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">Card Title</h2>
          <p className="text-gray-600 mb-4">
            Ye mera pehla card hai jo Next.js aur Tailwind se bana hai.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
```

✅ **Check:** Card dikh raha hai with gradient header, title, description, button?

---

## Problem 10: Multiple Cards Grid
**3 cards ka grid banao:**

```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Cards</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-bold mb-2">Fast</h3>
          <p className="text-gray-600">Lightning fast performance</p>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-4xl mb-4">🔒</div>
          <h3 className="text-xl font-bold mb-2">Secure</h3>
          <p className="text-gray-600">Enterprise level security</p>
        </div>
        
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-xl font-bold mb-2">Responsive</h3>
          <p className="text-gray-600">Works on all devices</p>
        </div>
      </div>
    </div>
  );
}
```

✅ **Check:** 3 cards grid mein dikh rahe hain? Mobile pe 1 column, desktop pe 3 columns?

---

## 🔧 Troubleshooting

### Problem: Server start nahi ho raha
```bash
# Port already in use hai to
npx kill-port 3000

# Phir dobara run karo
npm run dev
```

### Problem: Tailwind classes kaam nahi kar rahi
```bash
# Dev server restart karo
# Ctrl+C karke phir se
npm run dev
```

### Problem: TypeScript error aa raha hai
```bash
# Lint run karo
npm run lint
```

---

## ✅ Checklist
- [ ] Problem 1: Project setup
- [ ] Problem 2: Project structure dekha
- [ ] Problem 3: Home page edit kiya
- [ ] Problem 4: Tailwind classes practice kiye
- [ ] Problem 5: Heading styles try kiye
- [ ] Problem 6: Layout file samjhi
- [ ] Problem 7: npm scripts test kiye
- [ ] Problem 8: globals.css samjha
- [ ] Problem 9: Simple card banaya
- [ ] Problem 10: Multiple cards grid banaya

---

## 📝 Screenshot Lo
Browser ka screenshot lo aur README.md mein paste karo.

---

## 🎯 Challenge Problem
**Personal Portfolio Page Banao:**
- Name heading mein
- Photo ka placeholder
- About section
- Skills list
- Contact button

Sab Tailwind CSS classes use karo!
