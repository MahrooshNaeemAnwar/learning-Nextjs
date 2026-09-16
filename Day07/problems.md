# Day 7: Practice Problems

## 🎯 Instructions
next/image aur next/font practice karo. Images aur fonts optimize karo.

---

## Problem 1: Basic Image
**`public/` folder mein image rakho aur display karo:**

```tsx
// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Image Practice</h1>
      
      {/* Basic Image */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Basic Image</h2>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={200}
          height={100}
          className="border p-4"
        />
      </div>
    </div>
  );
}
```

✅ **Check:** Image dikh rahi hai?

---

## Problem 2: Responsive Image with Fill
**Hero section with background image:**

```tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Responsive Images</h1>
      
      {/* Hero with fill image */}
      <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src="/vercel.svg"
          alt="Hero background"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
```

✅ **Check:** Image responsive hai? (Screen resize karke dekho)

---

## Problem 3: Image Gallery
**Image gallery banao:**

```tsx
import Image from "next/image";

const images = [
  { src: "/next.svg", alt: "Image 1", width: 400, height: 300 },
  { src: "/vercel.svg", alt: "Image 2", width: 400, height: 300 },
  { src: "/file.svg", alt: "Image 3", width: 400, height: 300 },
];

export default function Gallery() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Image Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-4">
              <p className="font-bold">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

✅ **Check:** 3 images grid mein dikh rahi hain?

---

## Problem 4: Product Cards with Images
**Product cards with images banao:**

```tsx
import Image from "next/image";

const products = [
  { id: 1, name: "Laptop", image: "/window.svg", price: 999 },
  { id: 2, name: "Phone", image: "/globe.svg", price: 699 },
  { id: 3, name: "Tablet", image: "/file.svg", price: 499 },
];

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-2xl text-green-600 font-bold">${product.price}</p>
              <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

✅ **Check:** Product cards images ke saath dikh rahe hain?

---

## Problem 5: Google Font Integration
**Inter font use karo:**

```tsx
// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
```

**Page mein use karo:**
```tsx
export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Inter Font</h1>
      <p className="text-lg">
        Ye text Inter font mein hai jo next/font se load hua hai.
      </p>
      <p className="text-lg font-bold">
        Bold text bhi Inter font mein hai.
      </p>
    </div>
  );
}
```

✅ **Check:** Inter font load ho raha hai?

---

## Problem 6: Multiple Fonts
**2 fonts use karo:**

```tsx
// app/layout.tsx
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

**Page mein use karo:**
```tsx
export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
        Playfair Display Heading
      </h1>
      <p className="text-lg font-sans mb-8">
        Inter font paragraph text.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-playfair)]">
            Elegant Heading
          </h2>
          <p className="font-sans text-gray-600">
            Clean body text with Inter font.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-playfair)]">
            Another Heading
          </h2>
          <p className="font-sans text-gray-600">
            Both fonts working together.
          </p>
        </div>
      </div>
    </div>
  );
}
```

✅ **Check:** 2 alag-alag fonts dikh rahe hain?

---

## Problem 7: Image with Priority
**Above the fold image mein priority do:**

```tsx
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero - Priority image (loads immediately) */}
      <div className="relative h-[500px]">
        <Image
          src="/vercel.svg"
          alt="Hero"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold">Welcome!</h1>
        </div>
      </div>
      
      {/* Below fold - Lazy loaded */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative h-48">
              <Image
                src="/next.svg"
                alt={`Image ${i}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

✅ **Check:** Hero image load ho rahi hai priority ke saath?

---

## Problem 8: Blur Placeholder
**Image with blur placeholder:**

```tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Blur Placeholder</h1>
      
      <div className="relative w-full h-64">
        <Image
          src="/next.svg"
          alt="Image with blur"
          fill
          className="object-contain"
          placeholder="blur"
          blurDataURL="/placeholder.png"
        />
      </div>
    </div>
  );
}
```

✅ **Check:** Image load hone pe blur effect dikh raha hai?

---

## Problem 9: Font Sizes with Fonts
**Different font sizes with fonts practice karo:**

```tsx
export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Typography</h1>
      
      <div className="space-y-4">
        <p className="text-xs bg-gray-100 p-2">text-xs - Extra small</p>
        <p className="text-sm bg-gray-200 p-2">text-sm - Small</p>
        <p className="text-base bg-gray-300 p-2">text-base - Normal</p>
        <p className="text-lg bg-gray-400 p-2">text-lg - Large</p>
        <p className="text-xl bg-gray-500 text-white p-2">text-xl - Extra large</p>
        <p className="text-2xl bg-gray-600 text-white p-2">text-2xl - 2X large</p>
        <p className="text-3xl bg-gray-700 text-white p-2">text-3xl - 3X large</p>
        <p className="text-4xl bg-gray-800 text-white p-2">text-4xl - 4X large</p>
        <p className="text-5xl bg-gray-900 text-white p-2">text-5xl - 5X large</p>
      </div>
    </div>
  );
}
```

✅ **Check:** Font sizes gradually badh rahe hain?

---

## Problem 10: Complete Page with Images & Fonts
**Complete page banao with images aur fonts:**

```tsx
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-[400px] bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
              Image & Font Demo
            </h1>
            <p className="text-xl">
              next/image aur next/font use kar rahe hain
            </p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Image Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Image Optimization</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="relative h-48 mb-4">
                <Image
                  src="/next.svg"
                  alt="Next.js"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">Automatic Optimization</h3>
              <p className="text-gray-600">
                Images automatically optimize ho jati hain.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="relative h-48 mb-4">
                <Image
                  src="/vercel.svg"
                  alt="Vercel"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">Lazy Loading</h3>
              <p className="text-gray-600">
                Images sirf tab load hoti hain jab dikhti hain.
              </p>
            </div>
          </div>
        </section>
        
        {/* Font Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Font Optimization</h2>
          <div className="bg-white p-8 rounded-lg shadow">
            <p className="text-xl mb-4 font-sans">
              Inter font - Clean aur modern sans-serif
            </p>
            <p className="text-xl font-[family-name:var(--font-playfair)]">
              Playfair Display - Elegant serif font
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
```

✅ **Check:** Images aur fonts dono optimize ho rahe hain?

---

## ✅ Checklist
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

## 🎯 Challenge Problem
**Portfolio Page Banao:**
- Hero with background image
- About section with profile image
- Skills section with icons
- Projects section with project images
- Contact section
- Custom fonts (heading + body)
- Sab images optimized hain
