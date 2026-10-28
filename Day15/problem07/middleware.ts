import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const maintenance = process.env.MAINTENANCE_MODE === 'true';
  const isAdmin = request.nextUrl.pathname.startsWith('/admin');
  
  if (maintenance && !isAdmin) {
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!admin|api).*)'],
};
