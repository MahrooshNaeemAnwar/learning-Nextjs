import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Add custom headers
  response.headers.set('X-Request-Time', new Date().toISOString());
  response.headers.set('X-Powered-By', 'MyApp');
  
  return response;
}

export const config = {
  matcher: '/:path*',
};
