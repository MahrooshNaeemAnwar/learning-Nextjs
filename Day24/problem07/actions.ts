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
