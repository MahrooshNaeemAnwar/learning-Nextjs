# Day 22: Authentication

## 📅 Date: _______________

## 🎯 Today's Goals
- [ ] Auth.js setup kiya
- [ ] Social login implement kiya
- [ ] Session management seekha
- [ ] Protected routes banaye

---

## 📚 Kya Seekha Aaj?

### Auth Setup:
```
npm install next-auth@beta
npm install @auth/prisma-adapter
```

### Key Files:
```
auth.ts                 → Auth config
app/api/auth/[...nextauth]/route.ts → API route
middleware.ts           → Route protection
```

### Session Check:
```tsx
const session = await auth();
if (!session) redirect('/login');
```

---

## ✅ Problems Completed

- [ ] Problem 1: Auth setup
- [ ] Problem 2: Sign in button
- [ ] Problem 3: Protected dashboard
- [ ] Problem 4: User profile
- [ ] Problem 5: Multiple providers
- [ ] Problem 6: Session display
- [ ] Problem 7: Auth middleware
- [ ] Problem 8: Sign out button
- [ ] Problem 9: Auth layout
- [ ] Problem 10: Complete auth setup

---

## ⏱️ Time Spent: _____ hours

## 🎯 Self Rating (1-5): _____ ⭐
