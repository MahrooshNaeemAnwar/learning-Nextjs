"use client";
import { useState } from 'react';
import { createUser } from '../actions';

export default function CreateUserPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  async function handleSubmit(formData: FormData) {
    const result = await createUser(formData);
    if (result?.errors) {
      setErrors(result.errors);
    } else {
      setErrors({});
      alert('User created!');
    }
  }
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create User</h1>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input type="text" name="name" className={`w-full border rounded-lg px-4 py-2 ${errors.name ? 'border-red-500' : ''}`} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" name="email" className={`w-full border rounded-lg px-4 py-2 ${errors.email ? 'border-red-500' : ''}`} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Create</button>
      </form>
    </div>
  );
}
