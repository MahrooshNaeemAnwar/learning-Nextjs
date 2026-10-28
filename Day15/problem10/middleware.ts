import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get('token')?.value;
  
  // 1. Auth check
  if (pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // 2. Admin check
  if (pathname.startsWith('/admin')) {
    const role = request.cookies.get('role')?.value;
    if (role !== 'admin') {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }
  
  // 3. Add headers
  const response = NextResponse.next();
  response.headers.set('X-Pathname', pathname);
  
  return response;
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
};
