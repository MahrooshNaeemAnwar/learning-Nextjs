# Day 23: Practice Problems

## 🎯 Instructions
Prisma setup karo aur CRUD operations implement karo.

---

## Problem 1: Prisma Setup
**Prisma initialize karo:**

```bash
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
```

✅ **Check:** prisma folder aur schema.prisma create ho gaya?

---

## Problem 2: User Schema
**User schema design karo:**

```tsx
// prisma/schema.prisma
model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  age       Int?
  createdAt DateTime @default(now())
}
```

✅ **Check:** Schema valid hai?

---

## Problem 3: Post Schema with Relations
**Post schema with user relation:**

```tsx
// prisma/schema.prisma
model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  posts     Post[]
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User?    @relation(fields: [authorId], references: [id])
  authorId  String?
}
```

✅ **Check:** Relations sahi hain?

---

## Problem 4: Create User
**User create karo:**

```tsx
// app/actions.ts
'use server';
import { prisma } from '@/lib/prisma';

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  
  const user = await prisma.user.create({
    data: { name, email },
  });
  
  return { success: true, user };
}
```

✅ **Check:** User database mein create ho raha hai?

---

## Problem 5: Read Users
**Users read karo:**

```tsx
// app/users/page.tsx
import { prisma } from '@/lib/prisma';

export default async function UsersPage() {
  const users = await prisma.user.findMany();
  
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
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

✅ **Check:** Users dikh rahe hain?

---

## Problem 6: Update User
**User update karo:**

```tsx
// app/actions.ts
'use server';
import { prisma } from '@/lib/prisma';

export async function updateUser(id: string, formData: FormData) {
  const name = formData.get('name') as string;
  
  const user = await prisma.user.update({
    where: { id },
    data: { name },
  });
  
  return { success: true, user };
}
```

✅ **Check:** User update ho raha hai?

---

## Problem 7: Delete User
**User delete karo:**

```tsx
// app/actions.ts
'use server';
import { prisma } from '@/lib/prisma';

export async function deleteUser(id: string) {
  await prisma.user.delete({ where: { id } });
  return { success: true };
}
```

✅ **Check:** User delete ho raha hai?

---

## Problem 8: Create Post with User
**Post with user relation create karo:**

```tsx
// app/actions.ts
'use server';
import { prisma } from '@/lib/prisma';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const authorId = formData.get('authorId') as string;
  
  const post = await prisma.post.create({
    data: { title, content, authorId },
  });
  
  return { success: true, post };
}
```

✅ **Check:** Post user ke saath create ho raha hai?

---

## Problem 9: Posts with Author
**Posts with author dikhao:**

```tsx
// app/posts/page.tsx
import { prisma } from '@/lib/prisma';

export default async function PostsPage() {
  const posts = await prisma.post.findMany({
    include: { author: true },
  });
  
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-600">{post.content}</p>
            {post.author && (
              <p className="text-sm text-gray-500 mt-2">By {post.author.name}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
```

✅ **Check:** Posts author info ke saath dikh rahe hain?

---

## Problem 10: Complete CRUD App
**Complete CRUD app:**

```tsx
// app/actions.ts
'use server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  await prisma.user.create({ data: { name, email } });
  revalidatePath('/users');
}

export async function deleteUser(id: string) {
  await prisma.user.delete({ where: { id } });
  revalidatePath('/users');
}

// app/users/page.tsx
import { prisma } from '@/lib/prisma';
import { createUser, deleteUser } from '../actions';

export default async function UsersPage() {
  const users = await prisma.user.findMany();
  
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Users CRUD</h1>
      
      <form action={createUser} className="bg-white p-6 rounded shadow mb-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="text" name="name" placeholder="Name" className="border rounded px-4 py-2" required />
          <input type="email" name="email" placeholder="Email" className="border rounded px-4 py-2" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Add User</button>
      </form>
      
      <div className="space-y-2">
        {users.map(user => (
          <div key={user.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <h3 className="font-bold">{user.name}</h3>
              <p className="text-gray-600 text-sm">{user.email}</p>
            </div>
            <form action={deleteUser.bind(null, user.id)}>
              <button type="submit" className="text-red-500 hover:text-red-700">Delete</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
```

✅ **Check:** Complete CRUD operations kaam kar rahe hain?

---

## ✅ Checklist
- [ ] Problem 1: Prisma setup
- [ ] Problem 2: User schema
- [ ] Problem 3: Post schema
- [ ] Problem 4: Create user
- [ ] Problem 5: Read users
- [ ] Problem 6: Update user
- [ ] Problem 7: Delete user
- [ ] Problem 8: Create post
- [ ] Problem 9: Posts with author
- [ ] Problem 10: Complete CRUD app
