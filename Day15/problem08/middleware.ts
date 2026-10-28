import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'US';
  
  // Redirect based on country
  if (country === 'PK') {
    request.nextUrl.searchParams.set('lang', 'ur');
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
