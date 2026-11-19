# Day 24: Forms & Validation with Prisma

## 📚 Aaj Kya Seekhoge?
- Forms with Prisma
- Server-side validation
- Database operations
- Error handling

---

## 📝 Form with Prisma

```tsx
// app/actions.ts
'use server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  
  // Validation
  const errors: Record<string, string> = {};
  if (!name || name.length < 2) errors.name = 'Name must be at least 2 characters';
  if (!email || !email.includes('@')) errors.email = 'Invalid email';
  
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  
  // Check duplicate
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return { errors: { email: 'Email already exists' } };
  }
  
  // Create
  await prisma.user.create({ data: { name, email } });
  revalidatePath('/users');
  return { success: true };
}
```

---

## 🎯 Aaj Ka Summary

| Concept | Code | Use Case |
|---------|------|----------|
| Validation | Manual checks | Form validation |
| Duplicate | `findUnique` | Email check |
| Revalidate | `revalidatePath` | Cache update |

---

## ✅ Next Steps
- Kal hum **Testing** seekhenge
- Aaj ke practice problems solve karo
