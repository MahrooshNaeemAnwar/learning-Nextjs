# Day 5: Dynamic Routes

## 📚 Aaj Kya Seekhoge?
- Dynamic routes kya hain ([slug] pattern)
- params object use karna
- Blog posts banana
- Product pages banana
- generateStaticParams

---

## 🤔 Dynamic Routes Kya Hain?

Dynamic routes se tum **variable URLs** bana sakte ho. Jaise `/blog/my-first-post` ya `/products/123`.

```mermaid
graph TD
    A[Dynamic Route Pattern] --> B[app/blog/[slug]/page.tsx]
    
    B --> C[/blog/hello-world]
    B --> D[/blog/my-first-post]
    B --> E[/blog/tailwind-tips]
    
    C --> F[slug = hello-world]
    D --> G[slug = my-first-post]
    E --> H[slug = tailwind-tips]
```

### Simple Example:
```
app/blog/[slug]/page.tsx
    ↓
/blog/hello    → slug = "hello"
/blog/world    → slug = "world"
/blog/123      → slug = "123"
```

---

## 📁 Folder Structure

```mermaid
graph TD
    A[app] --> B[blog/]
    A --> C[products/]
    A --> D[users/]
    
    B --> E[[slug]/]
    E --> F[page.tsx]
    
    C --> G[[id]/]
    G --> H[page.tsx]
    
    D --> I[[username]/]
    I --> J[page.tsx]
```

### Folder Structure:
```
app/
├── blog/
│   └── [slug]/
│       └── page.tsx
├── products/
│   └── [id]/
│       └── page.tsx
└── users/
    └── [username]/
        └── page.tsx
```

---

## 📝 params Object Kya Hai?

Har dynamic page ko **params** milta hai jo URL ki value contain karta hai:

```tsx
// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return <h1>Blog Post: {params.slug}</h1>;
}
```

### Important: Next.js 15 mein params async hai:
```tsx
// Next.js 15+ (async params)
export default async function BlogPost({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  return <h1>Blog Post: {slug}</h1>;
}
```

---

## 🛠️ Blog Post Page Banana

### Step 1: Folder Banao
```bash
mkdir -p app/blog/[slug]
```

### Step 2: page.tsx Banao
```tsx
// app/blog/[slug]/page.tsx

// Blog posts ka data
const posts = [
  {
    slug: "hello-world",
    title: "Hello World",
    content: "Ye mera pehla blog post hai.",
    author: "Mahroosh",
    date: "2026-01-15",
  },
  {
    slug: "tailwind-css-tips",
    title: "Tailwind CSS Tips",
    content: "Tailwind CSS use karne ke tips aur tricks.",
    author: "Mahroosh",
    date: "2026-01-20",
  },
  {
    slug: "nextjs-basics",
    title: "Next.js Basics",
    content: "Next.js seekhne ki shuruaat.",
    author: "Mahroosh",
    date: "2026-01-25",
  },
];

// Static params generate karo (build time pe)
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Page component
export default async function BlogPost({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  // Post find karo
  const post = posts.find((p) => p.slug === slug);
  
  // Post nahi mila to 404
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Post not found</h1>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
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

---

## 📝 Blog Listing Page

```tsx
// app/blog/page.tsx
import Link from "next/link";

const posts = [
  {
    slug: "hello-world",
    title: "Hello World",
    excerpt: "Ye mera pehla blog post hai.",
    date: "2026-01-15",
  },
  {
    slug: "tailwind-css-tips",
    title: "Tailwind CSS Tips",
    excerpt: "Tailwind CSS use karne ke tips.",
    date: "2026-01-20",
  },
  {
    slug: "nextjs-basics",
    title: "Next.js Basics",
    excerpt: "Next.js seekhne ki shuruaat.",
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

---

## 🛠️ Product Page Banana

### Products Data:
```tsx
// app/products/[id]/page.tsx
const products = [
  { id: "1", name: "Laptop", price: 999, description: "Fast laptop" },
  { id: "2", name: "Phone", price: 699, description: "Smart phone" },
  { id: "3", name: "Tablet", price: 499, description: "Portable tablet" },
];

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function Product({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return <div className="p-8">Product not found</div>;
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white p-8 rounded-lg shadow-md">
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

---

## 📝 Complete Example with Navigation

```tsx
// app/blog/[slug]/page.tsx
import Link from "next/link";

const posts = [
  {
    slug: "hello-world",
    title: "Hello World",
    content: "Ye mera pehla blog post hai.",
    author: "Mahroosh",
  },
  {
    slug: "nextjs-tips",
    title: "Next.js Tips",
    content: "Next.js use karne ke tips.",
    author: "Mahroosh",
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
      {/* Back Link */}
      <Link href="/blog" className="text-blue-500 hover:underline mb-8 block">
        ← Back to Blog
      </Link>
      
      {/* Post Content */}
      <article>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex gap-4 text-gray-600 mb-8">
          <span>By {post.author}</span>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          {post.content}
        </p>
      </article>
      
      {/* Navigation */}
      <div className="flex justify-between mt-12 pt-8 border-t">
        <Link href="/blog" className="text-blue-500 hover:underline">
          ← All Posts
        </Link>
      </div>
    </div>
  );
}
```

---

## 🎯 Aaj Ka Summary

| Concept | Kya Seekha |
|---------|------------|
| [slug] | Dynamic route pattern |
| params | URL ki value milta hai |
| generateStaticParams | Build time pe pages banao |
| find() | Data se post dhundho |
| 404 handling | Post na mile to error dikhao |

---

## ✅ Next Steps
- Kal hum **Server vs Client Components** seekhenge
- 'use client' directive seekhenge
- Aaj ke practice problems solve karo
