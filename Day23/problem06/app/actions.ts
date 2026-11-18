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