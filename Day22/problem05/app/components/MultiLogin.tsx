"use client";
import { signIn } from '@/auth';

export default function MultiLogin(){
    return (
        <div className="space-y-2">
            <button OnClick={()=> signIn('github')}  className="w-full bg-gray-800 px-4 py-2 text-white">
                Sign in with GitHub
            </button>
            <button OnClick={()=> signIn('google')} className="w-full bg-red-500 px-4 py-2 text-white">
                Sign in with Google
            </button>
        </div>
    );
}