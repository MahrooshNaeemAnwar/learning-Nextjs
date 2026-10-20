'use client';

import { useActionState } from 'react';
import { updateProfile, type ProfileState } from '../actions';

const initialState: ProfileState = {};

export default function ProfilePage() {
  const [state, formAction, pending] = useActionState(updateProfile, initialState);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>
      <form action={formAction} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input type="text" name="name" defaultValue="Mahroosh" className="w-full border rounded-lg px-4 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Bio</label>
          <textarea name="bio" rows={4} className="w-full border rounded-lg px-4 py-2" defaultValue="Web developer" />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg disabled:opacity-50"
        >
          {pending ? 'Saving...' : 'Save Changes'}
        </button>
        {state.success && <p className="text-green-500 text-center">{state.message}</p>}
      </form>
    </div>
  );
}
