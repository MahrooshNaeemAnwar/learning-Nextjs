# Day 15: Practice Problems

## 🎯 Instructions
Middleware practice karo. Auth, redirects, aur conditional logic implement karo.

---

## Problem 1: Basic Middleware
**Basic middleware jo har request log kare:**

```tsx
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log(`[${new Date().toISOString()}] ${request.method} ${request.nextUrl.pathname}`);
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
```

✅ **Check:** Console mein requests log ho rahi hain?

---

## Problem 2: Auth Middleware
**Protected routes with token check:**

```tsx
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const isProtected = request.nextUrl.pathname.startsWith('/dashboard');
  
  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
```

✅ **Check:** Bina token ke /dashboard pe redirect ho raha hai?

---

## Problem 3: Role-Based Access
**Different roles ke liye different access:**

```tsx
// middleware.ts
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
```

✅ **Check:** Admin routes pe sirf admin access kar sakta hai?

---

## Problem 4: URL Rewriting
**URLs ko rewrite karo:**

```tsx
// middleware.ts
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
```

✅ **Check:** `/blog/hello` actually `/posts/hello` serve kar raha hai?

---

## Problem 5: Rate Limiting (Basic)
**Basic rate limiting:**

```tsx
// middleware.ts
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
```

✅ **Check:** 10 requests ke baad 429 error aa raha hai?

---

## Problem 6: CORS Middleware
**CORS headers set karo:**

```tsx
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  
  return response;
}

export const config = {
  matcher: '/api/:path*',
};
```

✅ **Check:** API pe CORS headers dikh rahe hain?

---

## Problem 7: Maintenance Mode
**Maintenance mode middleware:**

```tsx
// middleware.ts
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
```

✅ **Check:** Maintenance mode pe sab pages redirect ho rahe hain?

---

## Problem 8: Geolocation
**Location-based routing:**

```tsx
// middleware.ts
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
```

✅ **Check:** Location ke hisab se language change ho rahi hai?

---

## Problem 9: Header Addition
**Headers add karo:**

```tsx
// middleware.ts
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
```

✅ **Check:** Response headers mein custom headers dikh rahe hain?

---

## Problem 10: Complete Middleware
**Complete middleware with multiple features:**

```tsx
// middleware.ts
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
```

✅ **Check:** Sab middleware features kaam kar rahe hain?

---

## ✅ Checklist
- [ ] Problem 1: Basic middleware
- [ ] Problem 2: Auth middleware
- [ ] Problem 3: Role-based access
- [ ] Problem 4: URL rewriting
- [ ] Problem 5: Rate limiting
- [ ] Problem 6: CORS
- [ ] Problem 7: Maintenance mode
- [ ] Problem 8: Geolocation
- [ ] Problem 9: Header addition
- [ ] Problem 10: Complete middleware
