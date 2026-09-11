# Day 5: Practice Problems

## 🎯 Instructions
Dynamic routes practice karo. Blog posts aur product pages banao.

---

## Problem 1: Blog Folder Structure Banao
**Terminal mein run karo:**

```bash
mkdir -p app/blog/[slug]
```

**Check karo:**
```
app/
├── blog/
│   ├── page.tsx (listing)
│   └── [slug]/
│       └── page.tsx (individual post)
```

✅ **Check:** Folder structure bani?

---

## Problem 2: Blog Data Banao
**`app/blog/[slug]/page.tsx` mein data likho:**

```tsx
const posts = [
  {
    slug: "hello-world",
    title: "Hello World",
    content: "Ye mera pehla blog post hai.",
    author: "Mahroosh",
    date: "2026-01-15",
  },
  {
    slug: "tailwind-tips",
    title: "Tailwind CSS Tips",
    content: "Tailwind use karne ke tips.",
    author: "Mahroosh",
    date: "2026-01-20",
  },
  {
    slug: "nextjs-guide",
    title: "Next.js Guide",
    content: "Next.js seekhne ka guide.",
    author: "Mahroosh",
    date: "2026-01-25",
  },
];
```

✅ **Check:** Data define ho gaya?

---

## Problem 3: Blog Post Page Banao
**`app/blog/[slug]/page.tsx` complete likho:**

```tsx
import Link from "next/link";

const posts = [
  {
    slug: "hello-world",
    title: "Hello World",
    content: "Ye mera pehla blog post hai. Ismein maine Next.js seekhna shuru kiya.",
    author: "Mahroosh",
    date: "2026-01-15",
  },
  {
    slug: "tailwind-tips",
    title: "Tailwind CSS Tips",
    content: "Tailwind CSS use karne ke liye sabse pehle utility classes seekho.",
    author: "Mahroosh",
    date: "2026-01-20",
  },
  {
    slug: "nextjs-guide",
    title: "Next.js Guide",
    content: "Next.js ek powerful React framework hai jo SSR support karta hai.",
    author: "Mahroosh",
    date: "2026-01-25",
  },
];

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">404 - Post Not Found</h1>
        <Link href="/blog" className="text-blue-500 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link href="/blog" className="text-blue-500 hover:underline mb-8 block">
        ← Back to Blog
      </Link>
      
      <article>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex gap-4 text-gray-600 mb-8">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          {post.content}
        </p>
      </article>
    </div>
  );
}
```

**Test karo:**
- `http://localhost:3000/blog/hello-world`
- `http://localhost:3000/blog/tailwind-tips`
- `http://localhost:3000/blog/nextjs-guide`

✅ **Check:** Sab blog posts kaam kar rahe hain?

---

## Problem 4: Blog Listing Page Banao
**`app/blog/page.tsx` banao:**

```tsx
import Link from "next/link";

const posts = [
  {
    slug: "hello-world",
    title: "Hello World",
    excerpt: "Ye mera pehla blog post hai.",
    date: "2026-01-15",
  },
  {
    slug: "tailwind-tips",
    title: "Tailwind CSS Tips",
    excerpt: "Tailwind use karne ke tips.",
    date: "2026-01-20",
  },
  {
    slug: "nextjs-guide",
    title: "Next.js Guide",
    excerpt: "Next.js seekhne ka guide.",
    date: "2026-01-25",
  },
];

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-2">{post.excerpt}</p>
            <span className="text-sm text-gray-500">{post.date}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
```

✅ **Check:** Blog listing pe 3 posts dikh rahe hain?

---

## Problem 5: Product Folder Structure Banao
**Terminal mein run karo:**

```bash
mkdir -p app/products/[id]
```

---

## Problem 6: Product Page Banao
**`app/products/[id]/page.tsx` banao:**

```tsx
import Link from "next/link";

const products = [
  { id: "1", name: "Laptop", price: 999, description: "Fast laptop with 16GB RAM", image: "💻" },
  { id: "2", name: "Phone", price: 699, description: "Smart phone with great camera", image: "📱" },
  { id: "3", name: "Tablet", price: 499, description: "Portable tablet for work", image: "📟" },
];

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function Product({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <Link href="/products" className="text-blue-500 hover:underline">
          ← Back to Products
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link href="/products" className="text-blue-500 hover:underline mb-8 block">
        ← Back to Products
      </Link>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="text-6xl mb-4">{product.image}</div>
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-3xl text-green-600 font-bold mb-4">
          ${product.price}
        </p>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
```

✅ **Check:** Product pages kaam kar rahe hain?

---

## Problem 7: Products Listing Page Banao
**`app/products/page.tsx` banao:**

```tsx
import Link from "next/link";

const products = [
  { id: "1", name: "Laptop", price: 999, image: "💻" },
  { id: "2", name: "Phone", price: 699, image: "📱" },
  { id: "3", name: "Tablet", price: 499, image: "📟" },
];

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-5xl mb-4">{product.image}</div>
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-2xl text-green-600 font-bold">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
```

✅ **Check:** Products listing pe 3 products dikh rahe hain?

---

## Problem 8: Navigation Update Karo
**Navbar mein Blog aur Products links add karo:**

```tsx
// app/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">MySite</Link>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/blog" className="hover:text-gray-300">Blog</Link>
            <Link href="/products" className="hover:text-gray-300">Products</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
```

✅ **Check:** Navbar mein Blog aur Products links dikh rahe hain?

---

## Problem 9: All Routes Test Karo
**Ye sab routes test karo:**
- [ ] `/` - Home
- [ ] `/about` - About
- [ ] `/blog` - Blog listing
- [ ] `/blog/hello-world` - Blog post 1
- [ ] `/blog/tailwind-tips` - Blog post 2
- [ ] `/blog/nextjs-guide` - Blog post 3
- [ ] `/products` - Products listing
- [ ] `/products/1` - Product 1
- [ ] `/products/2` - Product 2
- [ ] `/products/3` - Product 3

✅ **Check:** Sab routes kaam kar rahe hain?

---

## Problem 10: 404 Pages Test Karo
**Galat URLs try karo:**
- `/blog/nonexistent`
- `/products/999`
- `/random-page`

**Check karo:**
- [ ] Custom 404 message dikh raha hai
- [ ] "Back to Blog/Products" link kaam kar raha hai

✅ **Check:** 404 pages kaam kar rahe hain?

---

## ✅ Checklist
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

## 🎯 Challenge Problem
**Recipe Website Banao:**
- `/recipes` - Recipe listing
- `/recipes/[slug]` - Individual recipe
- 5 recipes with different slugs
- Each recipe has: title, image, ingredients, instructions
- Beautiful Tailwind styling
