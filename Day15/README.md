# Day 15: Middleware

## 📅 Date: _______________

## 🎯 Today's Goals
- [ ] Middleware samjha
- [ ] Basic middleware banaya
- [ ] Auth middleware implement ki
- [ ] Redirects use kiye
- [ ] Matcher config samjha

---

## 📚 Kya Seekha Aaj?

### Middleware File:
```
middleware.ts → Root level pe (NOT in app/)
```

### Basic Syntax:
```tsx
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};
```

### Common Uses:
```
✅ Authentication check
✅ URL redirects
✅ Header addition
✅ Rate limiting
✅ CORS
```

---

## ✅ Problems Completed

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

---

## ⏱️ Time Spent: _____ hours

## 🎯 Self Rating (1-5): _____ ⭐
