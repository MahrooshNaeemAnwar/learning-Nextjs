'use server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function updateUser(id: string, formData: FormData) {
  const name = formData.get('name') as string;
  
  await prisma.user.update({ where: { id }, data: { name } });
  revalidatePath('/users');
  return { success: true };
}
