'use server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function deleteUsers(ids: string[]) {
  await prisma.user.deleteMany({ where: { id: { in: ids } } });
  revalidatePath('/users');
  return { success: true };
}
