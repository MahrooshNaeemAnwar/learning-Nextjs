import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Rewrite /blog/:slug to /posts/:slug
  if (pathname.startsWith('/blog/')) {
    const slug = pathname.split('/blog/')[1];
    return NextResponse.rewrite(new URL(`/posts/${slug}`, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/blog/:path*',
};