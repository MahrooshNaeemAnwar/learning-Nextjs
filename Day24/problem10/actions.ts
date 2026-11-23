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
