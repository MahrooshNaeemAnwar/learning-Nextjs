"use client";
import { useState } from 'react';
import { createPost } from '../actions';

export default function CreatePostForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(formData: FormData) {
    setStatus('loading');
    const result = await createPost(formData);
    setStatus(result?.success ? 'success' : 'error');
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create Post</h1>
      {status === 'success' && <div className="bg-green-100 text-green-700 p-4 rounded mb-4">Post created!</div>}
      {status === 'error' && <div className="bg-red-100 text-red-700 p-4 rounded mb-4">Error creating post</div>}
      <form action={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" className="w-full border rounded-lg px-4 py-2" required />
        <textarea name="content" placeholder="Content" rows={4} className="w-full border rounded-lg px-4 py-2" />
        <button type="submit" disabled={status === 'loading'} className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg disabled:opacity-50">
          {status === 'loading' ? 'Creating...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
}
