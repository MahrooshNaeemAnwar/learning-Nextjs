import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const role = request.cookies.get('role')?.value;
  const pathname = request.nextUrl.pathname;
  
  // Admin only routes
  if (pathname.startsWith('/admin') && role !== 'admin') {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }
  
  // User routes
  if (pathname.startsWith('/user') && !role) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
  }

export const config = {
  matcher: ['/admin/:path*', '/user/:path*'],
};