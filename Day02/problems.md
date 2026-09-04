# Day 2: Practice Problems

## 🎯 Instructions
Har problem ko step-by-step solve karo. Pehle folder banao, phir page.tsx file banao, phir content likho.

---

## Problem 1: About Page Banao
**Step-by-step:**

```bash
# Step 1: Folder banao
mkdir app/about

# Step 2: page.tsx banao
# VS Code mein: app/about/page.tsx create karo
```

**Content:**
```tsx
// app/about/page.tsx
export default function About() {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        About Us
      </h1>
      <p className="text-lg text-gray-700">
        Hum ek software company hain jo Next.js mein websites banati hai.
      </p>
      <p className="text-lg text-gray-700 mt-2">
        Humara mission: Fast aur beautiful websites banana.
      </p>
    </div>
  );
}
```

**Test:** Browser mein `http://localhost:3000/about` kholo

✅ **Check:** About page dikh raha hai?

---

## Problem 2: Contact Page Banao
**Folder:** `app/contact/page.tsx`

**Content:**
```tsx
export default function Contact() {
  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Contact Us
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> info@mysite.com
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Phone:</strong> +92 300 1234567
        </p>
        <p className="text-gray-700">
          <strong>Address:</strong> Karachi, Pakistan
        </p>
      </div>
    </div>
  );
}
```

**Test:** Browser mein `http://localhost:3000/contact` kholo

✅ **Check:** Contact page dikh raha hai?

---

## Problem 3: Services Page Banao
**Folder:** `app/services/page.tsx`

**Content:**
```tsx
export default function Services() {
  return (
    <div className="min-h-screen bg-purple-50 p-8">
      <h1 className="text-4xl font-bold text-purple-600 mb-8">
        Our Services
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Service 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-bold mb-2">Web Design</h3>
          <p className="text-gray-600">Beautiful aur responsive websites</p>
        </div>
        
        {/* Service 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-4">💻</div>
          <h3 className="text-xl font-bold mb-2">Development</h3>
          <p className="text-gray-600">Next.js aur React apps</p>
        </div>
        
        {/* Service 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-xl font-bold mb-2">Mobile Apps</h3>
          <p className="text-gray-600">React Native applications</p>
        </div>
      </div>
    </div>
  );
}
```

**Test:** Browser mein `http://localhost:3000/services` kholo

✅ **Check:** Services page pe 3 cards dikh rahe hain?

---

## Problem 4: Home Page with Navigation Links
**`app/page.tsx` update karo:**

```tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Welcome to MySite
      </h1>
      
      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link 
          href="/about" 
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-600"
        >
          About Us
        </Link>
        <Link 
          href="/contact" 
          className="bg-green-500 text-white px-6 py-3 rounded-lg text-center hover:bg-green-600"
        >
          Contact Us
        </Link>
        <Link 
          href="/services" 
          className="bg-purple-500 text-white px-6 py-3 rounded-lg text-center hover:bg-purple-600"
        >
          Our Services
        </Link>
      </div>
    </div>
  );
}
```

✅ **Check:** 3 buttons dikh rahe hain jo different pages pe le jaate hain?

---

## Problem 5: About Page with Back Link
**`app/about/page.tsx` update karo:**

```tsx
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        About Us
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Hum Next.js seekh rahe hain aur websites bana rahe hain.
      </p>
      
      {/* Back to Home Link */}
      <Link 
        href="/" 
        className="text-blue-500 hover:underline text-lg"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
```

✅ **Check:** "Back to Home" link kaam kar raha hai?

---

## Problem 6: Services Page with Individual Service Links
**`app/services/page.tsx` update karo:**

```tsx
import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen bg-purple-50 p-8">
      <h1 className="text-4xl font-bold text-purple-600 mb-8">
        Our Services
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link href="/services/web-design" className="block">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">Web Design</h3>
            <p className="text-gray-600">Beautiful websites</p>
          </div>
        </Link>
        
        <Link href="/services/development" className="block">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-bold mb-2">Development</h3>
            <p className="text-gray-600">Next.js apps</p>
          </div>
        </Link>
        
        <Link href="/services/mobile" className="block">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-2">Mobile Apps</h3>
            <p className="text-gray-600">React Native</p>
          </div>
        </Link>
      </div>
      
      <Link href="/" className="text-purple-500 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}
```

✅ **Check:** Cards pe click karke nested routes pe ja sakte ho?

---

## Problem 7: Navbar Component Banao
**Nayi file banao: `app/components/Navbar.tsx`**

```tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MySite
        </Link>
        
        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
```

**Phir har page mein use karo:**
```tsx
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold">Home Page</h1>
      </div>
    </div>
  );
}
```

✅ **Check:** Navbar har page pe dikh raha hai?

---

## Problem 8: Page with Images
**`app/page.tsx` mein images add karo:**

```tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero with Image */}
      <div className="relative h-96 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to MySite</h1>
            <p className="text-xl">Beautiful websites with Next.js</p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold">Web Design</h3>
            <p className="text-gray-600">Beautiful designs</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold">Development</h3>
            <p className="text-gray-600">Fast apps</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold">SEO</h3>
            <p className="text-gray-600">Google ranking</p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

✅ **Check:** Hero section mein gradient background dikh raha hai?

---

## Problem 9: Multiple Routes Test Karo
**Ye routes sab test karo:**
- `http://localhost:3000` (Home)
- `http://localhost:3000/about`
- `http://localhost:3000/contact`
- `http://localhost:3000/services`

**Har page pe check karo:**
- [ ] Page sahi load ho raha hai
- [ ] Tailwind styling kaam kar rahi hai
- [ ] Navigation links kaam kar rahe hain
- [ ] Back link kaam kar raha hai

✅ **Check:** Sab routes kaam kar rahe hain?

---

## Problem 10: 404 Page Banao
**`app/not-found.tsx` banao:**

```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Page not found
        </p>
        <Link 
          href="/" 
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
```

**Test:** Koi galat URL dalo jaise `http://localhost:3000/xyz`

✅ **Check:** 404 page dikh raha hai?

---

## ✅ Checklist
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

## 🎯 Challenge Problem
**Portfolio Website Banao:**
- Home page with hero
- About page with bio
- Projects page with 3 project cards
- Contact page with form
- Navbar on all pages
- Footer on all pages
- 404 page
