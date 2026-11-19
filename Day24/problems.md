# Day 24: Practice Problems

## 🎯 Instructions
Forms with Prisma practice karo. Validation aur database operations implement karo.

---

## Problem 1: Create User Form
**Create user form with validation:**

```tsx
// app/actions.ts
'use server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  
  const errors: Record<string, string> = {};
  if (!name || name.length < 2) errors.name = 'Name must be at least 2 characters';
  if (!email || !email.includes('@')) errors.email = 'Invalid email';
  
  if (Object.keys(errors).length > 0) return { errors };
  
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return { errors: { email: 'Email already exists' } };
  
  await prisma.user.create({ data: { name, email } });
  revalidatePath('/users');
  return { success: true };
}

// app/create-user/page.tsx
"use client";
import { useState } from 'react';
import { createUser } from '../actions';

export default function CreateUserPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  async function handleSubmit(formData: FormData) {
    const result = await createUser(formData);
    if (result?.errors) {
      setErrors(result.errors);
    } else {
      setErrors({});
      alert('User created!');
    }
  }
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create User</h1>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input type="text" name="name" className={`w-full border rounded-lg px-4 py-2 ${errors.name ? 'border-red-500' : ''}`} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" name="email" className={`w-full border rounded-lg px-4 py-2 ${errors.email ? 'border-red-500' : ''}`} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Create</button>
      </form>
    </div>
  );
}
```

✅ **Check:** Validation errors dikh rahe hain aur user create ho raha hai?

---

## Problem 2: Create Post Form
**Post create form with author selection:**

```tsx
// app/actions.ts
'use server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const authorId = formData.get('authorId') as string;
  
  const errors: Record<string, string> = {};
  if (!title || title.length < 3) errors.title = 'Title must be at least 3 characters';
  if (!authorId) errors.authorId = 'Select an author';
  
  if (Object.keys(errors).length > 0) return { errors };
  
  await prisma.post.create({ data: { title, content, authorId } });
  revalidatePath('/posts');
  return { success: true };
}

// app/create-post/page.tsx
import { prisma } from '@/lib/prisma';
import { createPost } from '../actions';

export default async function CreatePostPage() {
  const users = await prisma.user.findMany();
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create Post</h1>
      <form action={createPost} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input type="text" name="title" className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <textarea name="content" rows={4} className="w-full border rounded-lg px-4 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Author</label>
          <select name="authorId" className="w-full border rounded-lg px-4 py-2" required>
            <option value="">Select author</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Create Post</button>
      </form>
    </div>
  );
}
```

✅ **Check:** Post author ke saath create ho raha hai?

---

## Problem 3: Update User Form
**Update user form:**

```tsx
// app/actions.ts
'use server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function updateUser(id: string, formData: FormData) {
  const name = formData.get('name') as string;
  
  await prisma.user.update({ where: { id }, data: { name } });
  revalidatePath('/users');
  return { success: true };
}

// app/users/[id]/edit/page.tsx
import { prisma } from '@/lib/prisma';
import { updateUser } from '../../../actions';

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await prisma.user.findUnique({ where: { id } });
  
  if (!user) return <div>User not found</div>;
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Edit User</h1>
      <form action={updateUser.bind(null, id)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input type="text" name="name" defaultValue={user.name} className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Update</button>
      </form>
    </div>
  );
}
```

✅ **Check:** User update ho raha hai?

---

## Problem 4: Delete with Confirmation
**Delete with confirmation:**

```tsx
// app/actions.ts
'use server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function deleteUser(id: string) {
  await prisma.user.delete({ where: { id } });
  revalidatePath('/users');
  return { success: true };
}

// app/components/DeleteButton.tsx
"use client";

export default function DeleteButton({ id, onDelete }: { id: string; onDelete: (id: string) => void }) {
  return (
    <button 
      onClick={() => {
        if (confirm('Are you sure you want to delete this user?')) {
          onDelete(id);
        }
      }}
      className="text-red-500 hover:text-red-700"
    >
      Delete
    </button>
  );
}
```

✅ **Check:** Confirmation dialog aa raha hai?

---

## Problem 5: Search Users
**Search users:**

```tsx
// app/users/page.tsx
import { prisma } from '@/lib/prisma';

export default async function UsersPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  
  const users = await prisma.user.findMany({
    where: q ? { name: { contains: q, mode: 'insensitive' } } : {},
  });
  
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <form className="mb-6">
        <input type="text" name="q" defaultValue={q || ''} placeholder="Search users..." className="border rounded-lg px-4 py-2 w-full" />
      </form>
      <div className="space-y-2">
        {users.map(user => (
          <div key={user.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

✅ **Check:** Search kaam kar raha hai?

---

## Problem 6: Pagination
**Users with pagination:**

```tsx
// app/users/page.tsx
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function UsersPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const pageSize = 5;
  
  const [users, total] = await Promise.all([
    prisma.user.findMany({
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
    }),
    prisma.user.count(),
  ]);
  
  const totalPages = Math.ceil(total / pageSize);
  
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Users (Page {currentPage}/{totalPages})</h1>
      <div className="space-y-2 mb-6">
        {users.map(user => (
          <div key={user.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{user.name}</h3>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {currentPage > 1 && (
          <Link href={`/users?page=${currentPage - 1}`} className="bg-gray-200 px-4 py-2 rounded">Previous</Link>
        )}
        {currentPage < totalPages && (
          <Link href={`/users?page=${currentPage + 1}`} className="bg-gray-200 px-4 py-2 rounded">Next</Link>
        )}
      </div>
    </div>
  );
}
```

✅ **Check:** Pagination kaam kar rahi hai?

---

## Problem 7: Form with Error Handling
**Form with comprehensive error handling:**

```tsx
// app/actions.ts
'use server';
import { prisma } from '@/lib/prisma';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  
  try {
    await prisma.post.create({ data: { title, content } });
    return { success: true };
  } catch (error) {
    return { error: 'Failed to create post' };
  }
}

// app/create-post-form/page.tsx
"use client";
import { useState } from 'react';
import { createPost } from '../actions';

export default function CreatePostForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  async function handleSubmit(formData: FormData) {
    setStatus('loading');
    const result = await createPost(formData);
    setStatus(result?.success ? 'success' : 'error');
  }
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create Post</h1>
      {status === 'success' && <div className="bg-green-100 text-green-700 p-4 rounded mb-4">Post created!</div>}
      {status === 'error' && <div className="bg-red-100 text-red-700 p-4 rounded mb-4">Error creating post</div>}
      <form action={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" className="w-full border rounded-lg px-4 py-2" required />
        <textarea name="content" placeholder="Content" rows={4} className="w-full border rounded-lg px-4 py-2" />
        <button type="submit" disabled={status === 'loading'} className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg disabled:opacity-50">
          {status === 'loading' ? 'Creating...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
}
```

✅ **Check:** Error aur success states kaam kar rahe hain?

---

## Problem 8: Bulk Operations
**Bulk delete users:**

```tsx
// app/actions.ts
'use server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function deleteUsers(ids: string[]) {
  await prisma.user.deleteMany({ where: { id: { in: ids } } });
  revalidatePath('/users');
  return { success: true };
}

// app/users-bulk/page.tsx
"use client";
import { useState } from 'react';
import { deleteUsers } from '../actions';

const users = [
  { id: '1', name: 'User 1' },
  { id: '2', name: 'User 2' },
  { id: '3', name: 'User 3' },
];

export default function BulkDeletePage() {
  const [selected, setSelected] = useState<string[]>([]);
  
  const handleDelete = async () => {
    if (confirm(`Delete ${selected.length} users?`)) {
      await deleteUsers(selected);
      setSelected([]);
    }
  };
  
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Bulk Delete</h1>
      <button onClick={handleDelete} disabled={selected.length === 0} className="bg-red-500 text-white px-4 py-2 rounded mb-4 disabled:opacity-50">
        Delete Selected ({selected.length})
      </button>
      <div className="space-y-2">
        {users.map(user => (
          <div key={user.id} className="flex items-center gap-2 bg-white p-4 rounded shadow">
            <input 
              type="checkbox" 
              checked={selected.includes(user.id)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelected([...selected, user.id]);
                } else {
                  setSelected(selected.filter(id => id !== user.id));
                }
              }}
            />
            <span>{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

✅ **Check:** Bulk delete kaam kar raha hai?

---

## Problem 9: Form with Auto-Save
**Auto-save form:**

```tsx
// app/auto-save/page.tsx
"use client";
import { useState, useEffect } from 'react';

export default function AutoSaveForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [saved, setSaved] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (title || content) {
        localStorage.setItem('draft', JSON.stringify({ title, content }));
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [title, content]);
  
  useEffect(() => {
    const draft = localStorage.getItem('draft');
    if (draft) {
      const { title, content } = JSON.parse(draft);
      setTitle(title);
      setContent(content);
    }
  }, []);
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Auto-Save Form</h1>
      {saved && <div className="bg-green-100 text-green-700 p-2 rounded mb-4 text-sm">Draft saved!</div>}
      <div className="space-y-4">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full border rounded-lg px-4 py-2" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" rows={4} className="w-full border rounded-lg px-4 py-2" />
      </div>
    </div>
  );
}
```

✅ **Check:** Auto-save kaam kar raha hai?

---

## Problem 10: Complete Forms App
**Complete forms app with Prisma:**

```tsx
// app/actions.ts
'use server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createItem(formData: FormData) {
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  
  if (!name || name.length < 2) return { errors: { name: 'Name must be at least 2 characters' } };
  
  await prisma.item.create({ data: { name, description } });
  revalidatePath('/items');
  return { success: true };
}

export async function deleteItem(id: string) {
  await prisma.item.delete({ where: { id } });
  revalidatePath('/items');
}

// app/items/page.tsx
import { prisma } from '@/lib/prisma';
import { createItem, deleteItem } from '../actions';

export default async function ItemsPage() {
  const items = await prisma.item.findMany();
  
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Items</h1>
      
      <form action={createItem} className="bg-white p-6 rounded shadow mb-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="text" name="name" placeholder="Name" className="border rounded px-4 py-2" required />
          <input type="text" name="description" placeholder="Description" className="border rounded px-4 py-2" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Add Item</button>
      </form>
      
      <div className="space-y-2">
        {items.map(item => (
          <div key={item.id} className="bg-white p-4 rounded shadow flex justify-between">
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
            <form action={deleteItem.bind(null, item.id)}>
              <button type="submit" className="text-red-500">Delete</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
```

✅ **Check:** Complete forms app kaam kar raha hai?

---

## ✅ Checklist
- [ ] Problem 1: Create user form
- [ ] Problem 2: Create post form
- [ ] Problem 3: Update user form
- [ ] Problem 4: Delete with confirmation
- [ ] Problem 5: Search users
- [ ] Problem 6: Pagination
- [ ] Problem 7: Error handling
- [ ] Problem 8: Bulk operations
- [ ] Problem 9: Auto-save
- [ ] Problem 10: Complete forms app
