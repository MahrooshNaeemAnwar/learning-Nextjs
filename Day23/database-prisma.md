# Day 23: Database with Prisma

## 📚 Aaj Kya Seekhoge?
- Prisma ORM
- Schema design
- CRUD operations
- Database migrations

---

## 🗄️ Prisma Setup

```bash
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
```

---

## 📝 Schema Design

```tsx
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  name      String?
  email     String   @unique
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User?    @relation(fields: [authorId], references: [id])
  authorId  String?
  createdAt DateTime @default(now())
}
```

---

## 🔄 CRUD Operations

```tsx
// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Create
const user = await prisma.user.create({
  data: { name: 'Mahroosh', email: 'mahroosh@example.com' },
});

// Read
const users = await prisma.user.findMany();
const user = await prisma.user.findUnique({ where: { email: '...' } });

// Update
const updated = await prisma.user.update({
  where: { id: '...' },
  data: { name: 'New Name' },
});

// Delete
await prisma.user.delete({ where: { id: '...' } });
```

---

## 🎯 Aaj Ka Summary

| Concept | Code | Use Case |
|---------|------|----------|
| Schema | `schema.prisma` | Data model |
| Create | `prisma.model.create()` | Add data |
| Read | `prisma.model.findMany()` | Get data |
| Update | `prisma.model.update()` | Modify data |
| Delete | `prisma.model.delete()` | Remove data |

---

## ✅ Next Steps
- Kal hum **Forms & Validation with Prisma** seekhenge
- Aaj ke practice problems solve karo
