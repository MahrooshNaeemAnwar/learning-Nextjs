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