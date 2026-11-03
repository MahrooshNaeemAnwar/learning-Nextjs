"use client";
import { useState } from 'react';

export default function CompleteForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  
  async function handleSubmit(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const age = formData.get('age') as string;
    
    const newErrors: Record<string, string> = {};
    
    if (!name || name.length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!email || !email.includes('@')) newErrors.email = 'Invalid email';
    if (!password || password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!age || Number(age) < 18) newErrors.age = 'Must be at least 18';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setSuccess(true);
  }
  
  if (success) {
    return (
      <div className="max-w-md mx-auto p-4 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-3xl font-bold mb-4">Success!</h1>
        <p className="text-gray-600">Form submitted successfully.</p>
      </div>
    );
  }
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Complete Form</h1>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name *</label>
          <input type="text" name="name" className={`w-full border rounded-lg px-4 py-2 ${errors.name ? 'border-red-500' : ''}`} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email *</label>
          <input type="email" name="email" className={`w-full border rounded-lg px-4 py-2 ${errors.email ? 'border-red-500' : ''}`} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password *</label>
          <input type="password" name="password" className={`w-full border rounded-lg px-4 py-2 ${errors.password ? 'border-red-500' : ''}`} />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Age *</label>
          <input type="number" name="age" className={`w-full border rounded-lg px-4 py-2 ${errors.age ? 'border-red-500' : ''}`} />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
}
