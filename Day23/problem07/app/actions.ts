'use server';
import { prisma } from '@/lib/prisma';

export async function deleteUser(id: string) {
  await prisma.user.delete({ where: { id } });
  return { success: true };
}