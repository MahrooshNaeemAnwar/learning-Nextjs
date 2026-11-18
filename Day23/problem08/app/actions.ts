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