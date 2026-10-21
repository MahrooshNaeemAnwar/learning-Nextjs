# Day 14: Practice Problems

## 🎯 Instructions
API Routes practice karo. CRUD operations implement karo.

---

## Problem 1: Hello API
**Basic GET endpoint:**

```tsx
// app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello from API!' });
}
```

✅ **Check:** `/api/hello` pe JSON response aa raha hai?

---

## Problem 2: Users API
**Users CRUD:**

```tsx
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';

let users = [
  { id: 1, name: 'Mahroosh', email: 'mahroosh@example.com' },
  { id: 2, name: 'Ali', email: 'ali@example.com' },
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newUser = { id: Date.now(), ...body };
  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}
```

✅ **Check:** GET aur POST dono kaam kar rahe hain?

---

## Problem 3: Dynamic Route
**User by ID:**

```tsx
// app/api/users/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  const user = { id, name: 'User', email: 'user@example.com' };
  
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  
  return NextResponse.json({ id, ...body });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return NextResponse.json({ message: `User ${id} deleted` });
}
```

✅ **Check:** `/api/users/1` pe specific user aa raha hai?

---

## Problem 4: Query Parameters
**Search endpoint:**

```tsx
// app/api/search/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q') || '';
  const page = parseInt(searchParams.get('page') || '1');
  
  const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Tablet' },
  ];
  
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase())
  );
  
  return NextResponse.json({
    results: filtered,
    page,
    total: filtered.length,
  });
}

// Usage: /api/search?q=laptop&page=1
```

✅ **Check:** `/api/search?q=laptop` pe filtered results aa rahe hain?

---

## Problem 5: Todos API
**Complete todos API:**

```tsx
// app/api/todos/route.ts
import { NextRequest, NextResponse } from 'next/server';

let todos = [
  { id: 1, text: 'Learn Next.js', completed: false },
  { id: 2, text: 'Build a project', completed: true },
];

export async function GET() {
  return NextResponse.json(todos);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newTodo = { id: Date.now(), text: body.text, completed: false };
  todos.push(newTodo);
  return NextResponse.json(newTodo, { status: 201 });
}

// app/api/todos/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  
  todos = todos.map(todo => 
    todo.id === Number(id) ? { ...todo, ...body } : todo
  );
  
  return NextResponse.json({ message: 'Updated' });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  todos = todos.filter(todo => todo.id !== Number(id));
  return NextResponse.json({ message: 'Deleted' });
}
```

✅ **Check:** CRUD operations sab kaam kar rahe hain?

---

## Problem 6: Posts API
**Posts API with comments:**

```tsx
// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';

let posts = [
  { id: 1, title: 'First Post', content: 'Hello World', comments: [] },
];

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newPost = { id: Date.now(), ...body, comments: [] };
  posts.push(newPost);
  return NextResponse.json(newPost, { status: 201 });
}

// app/api/posts/[id]/comments/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  
  const post = posts.find(p => p.id === Number(id));
  if (post) {
    post.comments.push({ id: Date.now(), ...body });
  }
  
  return NextResponse.json({ message: 'Comment added' });
}
```

✅ **Check:** Posts aur comments dono kaam kar rahe hain?

---

## Problem 7: Products API
**Products with filtering:**

```tsx
// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';

const products = [
  { id: 1, name: 'Laptop', price: 999, category: 'electronics' },
  { id: 2, name: 'Phone', price: 699, category: 'electronics' },
  { id: 3, name: 'Shirt', price: 49, category: 'clothing' },
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');
  const maxPrice = searchParams.get('maxPrice');
  
  let filtered = products;
  
  if (category) {
    filtered = filtered.filter(p => p.category === category);
  }
  if (maxPrice) {
    filtered = filtered.filter(p => p.price <= Number(maxPrice));
  }
  
  return NextResponse.json(filtered);
}

// Usage: /api/products?category=electronics&maxPrice=800
```

✅ **Check:** Filtering kaam kar rahi hai?

---

## Problem 8: Auth API (Basic)
**Basic auth endpoint:**

```tsx
// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;
  
  if (email === 'admin@example.com' && password === 'password') {
    return NextResponse.json({ 
      success: true, 
      token: 'dummy-token-123',
      user: { email, name: 'Admin' }
    });
  }
  
  return NextResponse.json({ 
    success: false, 
    message: 'Invalid credentials' 
  }, { status: 401 });
}
```

✅ **Check:** Login success/failure dono cases kaam kar rahe hain?

---

## Problem 9: Upload API
**File upload endpoint:**

```tsx
// app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  
  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }
  
  return NextResponse.json({ 
    message: 'File uploaded',
    name: file.name,
    size: file.size,
    type: file.type,
  });
}
```

✅ **Check:** File upload ho raha hai?

---

## Problem 10: Complete API
**Complete API with all methods:**

```tsx
// app/api/items/route.ts
import { NextRequest, NextResponse } from 'next/server';

let items = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 20 },
];

export async function GET() {
  return NextResponse.json(items);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newItem = { id: Date.now(), ...body };
  items.push(newItem);
  return NextResponse.json(newItem, { status: 201 });
}

// app/api/items/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const item = items.find(i => i.id === Number(id));
  
  if (!item) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  
  return NextResponse.json(item);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  
  items = items.map(item => 
    item.id === Number(id) ? { ...item, ...body } : item
  );
  
  return NextResponse.json({ message: 'Updated' });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  items = items.filter(item => item.id !== Number(id));
  return NextResponse.json({ message: 'Deleted' });
}
```

✅ **Check:** GET, POST, PUT, DELETE sab kaam kar rahe hain?

---

## ✅ Checklist
- [ ] Problem 1: Hello API
- [ ] Problem 2: Users API
- [ ] Problem 3: Dynamic route
- [ ] Problem 4: Query parameters
- [ ] Problem 5: Todos API
- [ ] Problem 6: Posts API
- [ ] Problem 7: Products API
- [ ] Problem 8: Auth API
- [ ] Problem 9: Upload API
- [ ] Problem 10: Complete API
