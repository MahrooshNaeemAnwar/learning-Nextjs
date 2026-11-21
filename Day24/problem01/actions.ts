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
