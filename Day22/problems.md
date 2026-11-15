# Day 22: Practice Problems

## 🎯 Instructions
Authentication setup karo. Social login aur session management implement karo.

---

## Problem 1: Auth Setup
**Auth.js setup karo:**

```tsx
// auth.ts
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
})

// app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/auth"
export const { GET, POST } = handlers
```

✅ **Check:** Auth endpoint kaam kar raha hai?

---

## Problem 2: Sign In Button
**Sign in button banao:**

```tsx
// app/components/LoginButton.tsx
"use client";
import { signIn, signOut } from "@/auth";
import { useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  
  if (session) {
    return (
      <div className="flex items-center gap-4">
        <span>{session.user?.name}</span>
        <button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 rounded">
          Sign Out
        </button>
      </div>
    );
  }
  
  return (
    <button onClick={() => signIn()} className="bg-blue-500 text-white px-4 py-2 rounded">
      Sign In
    </button>
  );
}
```

✅ **Check:** Sign in/out kaam kar raha hai?

---

## Problem 3: Protected Dashboard
**Protected dashboard page:**

```tsx
// app/dashboard/page.tsx
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await auth();
  
  if (!session) {
    redirect('/api/auth/signin');
  }
  
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-lg">Welcome, <strong>{session.user?.name}</strong>!</p>
        <p className="text-gray-600">{session.user?.email}</p>
      </div>
    </div>
  );
}
```

✅ **Check:** Bina login ke dashboard pe redirect ho raha hai?

---

## Problem 4: User Profile
**User profile page:**

```tsx
// app/profile/page.tsx
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = await auth();
  
  if (!session) {
    redirect('/api/auth/signin');
  }
  
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow text-center">
        {session.user?.image && (
          <img src={session.user.image} alt="Avatar" className="w-24 h-24 rounded-full mx-auto mb-4" />
        )}
        <h2 className="text-xl font-bold">{session.user?.name}</h2>
        <p className="text-gray-600">{session.user?.email}</p>
      </div>
    </div>
  );
}
```

✅ **Check:** Profile page pe user info dikh rahi hai?

---

## Problem 5: Multiple Providers
**Multiple auth providers:**

```tsx
// auth.ts
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
})

// app/components/MultiLogin.tsx
"use client";
import { signIn } from "@/auth";

export default function MultiLogin() {
  return (
    <div className="space-y-2">
      <button onClick={() => signIn("github")} className="w-full bg-gray-800 text-white px-4 py-2 rounded">
        Sign in with GitHub
      </button>
      <button onClick={() => signIn("google")} className="w-full bg-red-500 text-white px-4 py-2 rounded">
        Sign in with Google
      </button>
    </div>
  );
}
```

✅ **Check:** Dono providers kaam kar rahe hain?

---

## Problem 6: Session Display
**Session info display karo:**

```tsx
// app/session/page.tsx
import { auth } from '@/auth';

export default async function SessionPage() {
  const session = await auth();
  
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Session Info</h1>
      <pre className="bg-gray-100 p-4 rounded overflow-auto">
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
}
```

✅ **Check:** Session data dikh raha hai?

---

## Problem 7: Auth Middleware
**Auth middleware with protected routes:**

```tsx
// middleware.ts
import { auth } from "@/auth";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname.startsWith("/dashboard")) {
    return Response.redirect(new URL("/api/auth/signin", req.nextUrl));
  }
});

export const config = {
  matcher: ["/dashboard/:path*"],
}
```

✅ **Check:** Dashboard routes protected hain?

---

## Problem 8: Sign Out Button
**Sign out with redirect:**

```tsx
// app/components/SignOutButton.tsx
"use client";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button 
      onClick={() => signOut({ callbackUrl: "/" })}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Sign Out
    </button>
  );
}
```

✅ **Check:** Sign out ke baad home pe redirect ho raha hai?

---

## Problem 9: Auth Layout
**Auth pages ke liye layout:**

```tsx
// app/(auth)/layout.tsx
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6">
        {children}
      </div>
    </div>
  );
}

// app/(auth)/login/page.tsx
import MultiLogin from "../../components/MultiLogin";

export default function LoginPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Sign In</h1>
      <MultiLogin />
    </div>
  );
}
```

✅ **Check:** Auth pages ka alag layout hai?

---

## Problem 10: Complete Auth Setup
**Complete auth setup:**

```tsx
// auth.ts
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
  pages: {
    signIn: "/login",
  },
})

// middleware.ts
import { auth } from "@/auth";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname.startsWith("/protected")) {
    return Response.redirect(new URL("/login", req.nextUrl));
  }
});

export const config = {
  matcher: ["/protected/:path*"]
}

// app/protected/page.tsx
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import SignOutButton from '../components/SignOutButton';

export default async function ProtectedPage() {
  const session = await auth();
  if (!session) redirect('/login');
  
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Protected Content</h1>
      <p>Welcome, {session.user?.name}!</p>
      <SignOutButton />
    </div>
  );
}
```

✅ **Check:** Complete auth flow kaam kar raha hai?

---

## ✅ Checklist
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
