'use server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const authorId = formData.get('authorId') as string;
  
  const errors: Record<string, string> = {};
  if (!title || title.length < 3) errors.title = 'Title must be at least 3 characters';
  if (!authorId) errors.authorId = 'Select an author';
  
  if (Object.keys(errors).length > 0) return { errors };
  
  await prisma.post.create({ data: { title, content, authorId } });
  revalidatePath('/posts');
  return { success: true };
}
