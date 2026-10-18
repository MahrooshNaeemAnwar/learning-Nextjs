'use client';

import { useActionState } from 'react';
import { userRegister, type RegisterState } from '../actions';

const initialState: RegisterState = {};

export default function Register() {
  const [state, formAction, pending] = useActionState(userRegister, initialState);

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-3xl text-center font-bold mb-6">REGISTER</h1>
      <form action={formAction} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input type="text" name="name" className="w-full border rounded-lg px-4 py-2" required />
          {state.errors?.name && (
            <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" name="email" className="w-full border rounded-lg px-4 py-2" />
          {state.errors?.email && (
            <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input type="password" name="password" className="w-full border rounded-lg px-4 py-2" />
          {state.errors?.password && (
            <p className="text-red-500 text-sm mt-1">{state.errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={pending}
          className="w-full text-white bg-blue-500 hover:bg-blue-600 disabled:opacity-50 px-4 py-2 rounded-lg"
        >
          {pending ? 'Submitting...' : 'Register'}
        </button>
        {state.success && (
          <p className="text-green-500 text-center">{state.message}</p>
        )}
      </form>
    </div>
  );
}
