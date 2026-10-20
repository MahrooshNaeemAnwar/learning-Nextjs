'use client';

import { useActionState } from 'react';
import { searchPosts, type SearchState } from '../actions';

const initialState: SearchState = { results: [], query: '' };

export default function SearchPage() {
  const [state, formAction, pending] = useActionState(searchPosts, initialState);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Search Posts</h1>
      <form action={formAction} className="flex gap-2 mb-6">
        <input
          type="text"
          name="query"
          placeholder="Search..."
          className="flex-1 border rounded-lg px-4 py-2"
          required
        />
        <button
          type="submit"
          disabled={pending}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg disabled:opacity-50"
        >
          {pending ? 'Searching...' : 'Search'}
        </button>
      </form>

      {state.query && (
        <div className="space-y-2">
          <p className="text-gray-600">
            {state.results.length} result(s) for &quot;{state.query}&quot;
          </p>
          {state.results.map(post => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow">
              {post.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
