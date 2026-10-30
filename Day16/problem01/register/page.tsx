"use client";
import { useState } from 'react';

export default function RegisterForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  async function handleSubmit(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    const newErrors: Record<string, string> = {};
    if (!name || name.length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!email || !email.includes('@')) newErrors.email = 'Invalid email';
    if (!password || password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit
    setErrors({});
    alert('Registration successful!');
  }
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
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
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input type="password" name="password" className={`w-full border rounded-lg px-4 py-2 ${errors.password ? 'border-red-500' : ''}`} />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Register</button>
      </form>
    </div>
  );
}