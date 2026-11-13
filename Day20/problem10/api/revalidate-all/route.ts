import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST() {
  revalidateTag('posts');
  return NextResponse.json({ revalidated: true });
}
