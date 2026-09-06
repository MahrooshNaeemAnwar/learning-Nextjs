# Day 4: Practice Problems

## 🎯 Instructions
Layouts aur navigation practice karo. Pehle components banao, phir layout mein use karo.

---

## Problem 1: Navbar Component Banao
**`app/components/Navbar.tsx` banao:**

```tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            MySite
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
```

✅ **Check:** Navbar dikh raha hai?

---

## Problem 2: Footer Component Banao
**`app/components/Footer.tsx` banao:**

```tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-400">Hum websites banate hain.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">info@mysite.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 MySite</p>
        </div>
      </div>
    </footer>
  );
}
```

✅ **Check:** Footer dikh raha hai with 3 columns?

---

## Problem 3: Root Layout Update Karo
**`app/layout.tsx` update karo:**

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Learning Next.js with Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
```

✅ **Check:** Navbar aur Footer sab pages pe dikh rahe hain?

---

## Problem 4: Home Page with Hero
**`app/page.tsx` update karo:**

```tsx
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to MySite</h1>
          <p className="text-xl mb-8">Next.js aur Tailwind CSS seekh rahe hain</p>
          <Link 
            href="/about" 
            className="bg-white text-blue-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100"
          >
            About Us
          </Link>
        </div>
      </div>
      
      {/* Features */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Fast</h3>
            <p className="text-gray-600">Lightning fast performance</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-2">Secure</h3>
            <p className="text-gray-600">Enterprise level security</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-2">Responsive</h3>
            <p className="text-gray-600">Works on all devices</p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

✅ **Check:** Hero section aur features cards dikh rahe hain?

---

## Problem 5: About Page with Content
**`app/about/page.tsx` banao:**

```tsx
export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Humara Mission</h2>
          <p className="text-gray-600 mb-4">
            Hum modern web technologies use karke fast aur beautiful websites banate hain.
          </p>
          <p className="text-gray-600 mb-4">
            Humara goal hai har client ko best quality dena.
          </p>
          <div className="flex gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">30+</div>
              <div className="text-gray-600">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">5+</div>
              <div className="text-gray-600">Years</div>
            </div>
          </div>
        </div>
        
        {/* Right - Image Placeholder */}
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg h-64 md:h-auto">
          {/* Image placeholder */}
        </div>
      </div>
    </div>
  );
}
```

✅ **Check:** About page pe content aur stats dikh rahe hain?

---

## Problem 6: Contact Page with Form
**`app/contact/page.tsx` banao:**

```tsx
export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="text-2xl">📍</div>
              <div>
                <div className="font-bold">Address</div>
                <div className="text-gray-600">Karachi, Pakistan</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-2xl">📧</div>
              <div>
                <div className="font-bold">Email</div>
                <div className="text-gray-600">info@mysite.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-2xl">📞</div>
              <div>
                <div className="font-bold">Phone</div>
                <div className="text-gray-600">+92 300 1234567</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows={4}
                placeholder="Your message"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
```

✅ **Check:** Contact page pe info aur form dikh raha hai?

---

## Problem 7: Active Link Highlight
**Navbar mein active link highlight karo:**

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">MySite</Link>
          <div className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-gray-300 ${
                  pathname === link.href ? "text-blue-400 font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
```

✅ **Check:** Current page ka link highlight ho raha hai?

---

## Problem 8: Mobile Responsive Navbar
**Mobile pe hamburger menu banao:**

```tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">MySite</Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-gray-300">Home</Link>
            <Link href="/about" className="block py-2 hover:text-gray-300">About</Link>
            <Link href="/contact" className="block py-2 hover:text-gray-300">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
```

✅ **Check:** Mobile pe hamburger menu kaam kar raha hai?

---

## Problem 9: All Pages Test Karo
**Sab pages test karo:**
- [ ] Home page - Hero + Features
- [ ] About page - Content + Stats
- [ ] Contact page - Info + Form
- [ ] Navbar visible hai sab pe
- [ ] Footer visible hai sab pe
- [ ] Navigation links kaam kar rahe hain

---

## Problem 10: Layout with Sidebar
**Dashboard layout banao:**

```tsx
// app/dashboard/layout.tsx
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-200px)]">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4">
        <h2 className="font-bold mb-4">Dashboard</h2>
        <nav className="space-y-2">
          <Link href="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-200">
            Overview
          </Link>
          <Link href="/dashboard/settings" className="block py-2 px-4 rounded hover:bg-gray-200">
            Settings
          </Link>
        </nav>
      </aside>
      
      {/* Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
```

✅ **Check:** Dashboard mein sidebar layout kaam kar raha hai?

---

## ✅ Checklist
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
