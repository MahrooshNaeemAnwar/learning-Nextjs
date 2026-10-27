import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const requests = new Map<string, number[]>();

export function middleware(request: NextRequest) {
  const ip = request.ip || 'unknown';
  const now = Date.now();
  const windowMs = 60000; // 1 minute
  const maxRequests = 10;
  
  const timestamps = requests.get(ip) || [];
  const filtered = timestamps.filter(t => now - t < windowMs);
  
  if (filtered.length >= maxRequests) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }
  
  filtered.push(now);
  requests.set(ip, filtered);
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};