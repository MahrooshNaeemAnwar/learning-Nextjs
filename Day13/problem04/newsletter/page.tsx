'use client';

import { useActionState } from 'react';
import { subscribeNewsletter, type NewsletterState } from '../actions';

const initialState: NewsletterState = {};

export default function NewsletterPage() {
  const [state, formAction, pending] = useActionState(subscribeNewsletter, initialState);

  return (
    <div className="max-w-md mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Newsletter</h1>
      <p className="text-gray-600 mb-6">Subscribe to get updates</p>
      <form action={formAction} className="flex gap-2">
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          className="flex-1 border rounded-lg px-4 py-2"
          required
        />
        <button
          type="submit"
          disabled={pending}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg disabled:opacity-50"
        >
          {pending ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {state.error && <p className="text-red-500 mt-4">{state.error}</p>}
      {state.success && <p className="text-green-500 mt-4">{state.message}</p>}
    </div>
  );
}
