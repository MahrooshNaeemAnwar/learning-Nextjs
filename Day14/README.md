# Day 14: API Routes

## 📅 Date: _______________

## 🎯 Today's Goals
- [ ] Route Handlers samjhe
- [ ] GET request implement ki
- [ ] POST request implement ki
- [ ] PUT/DELETE implement kiye
- [ ] Query parameters use kiye
- [ ] Dynamic routes banaye

---

## 📚 Kya Seekha Aaj?

### Route Handler Syntax:
```tsx
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ data: 'value' });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json(body, { status: 201 });
}
```

### Dynamic Route:
```tsx
// app/api/users/[id]/route.ts
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return NextResponse.json({ id });
}
```

### Query Parameters:
```tsx
const searchParams = request.nextUrl.searchParams;
const query = searchParams.get('q');
```

---

## ✅ Problems Completed

- [ ] Problem 1: Hello API
- [ ] Problem 2: Users API
- [ ] Problem 3: Dynamic route
- [ ] Problem 4: Query parameters
- [ ] Problem 5: Todos API
- [ ] Problem 6: Posts API
- [ ] Problem 7: Products API
- [ ] Problem 8: Auth API
- [ ] Problem 9: Upload API
- [ ] Problem 10: Complete API

---

## 💡 Key Learnings

### API Routes vs Server Actions:
```
API Routes → REST endpoints, external clients
Server Actions → Form handling, internal mutations
```

---

## ⏱️ Time Spent: _____ hours

## 🎯 Self Rating (1-5): _____ ⭐
