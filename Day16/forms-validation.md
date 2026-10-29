# Day 16: Forms & Validation

## 📚 Aaj Kya Seekhoge?
- Advanced form handling
- Client-side validation
- Server-side validation
- Error display patterns

---

## 📝 Form with Client Validation

```tsx
// app/contact/page.tsx
"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  
  async function handleSubmit(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    const newErrors: Record<string, string> = {};
    
    if (!name || name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    if (!email || !email.includes('@')) {
      newErrors.email = 'Invalid email address';
    }
    if (!message || message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit to API
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    });
    
    if (res.ok) {
      setSuccess(true);
      setErrors({});
    }
  }
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      {success && (
        <div className="bg-green-100 text-green-700 p-4 rounded mb-4">
          Message sent successfully!
        </div>
      )}
      
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input 
            type="text" 
            name="name"
            className={`w-full border rounded-lg px-4 py-2 ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input 
            type="email" 
            name="email"
            className={`w-full border rounded-lg px-4 py-2 ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea 
            name="message"
            rows={4}
            className={`w-full border rounded-lg px-4 py-2 ${errors.message ? 'border-red-500' : ''}`}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
}
```

---

## ✅ Server-Side Validation

```tsx
// app/actions.ts
'use server';

export async function registerUser(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  
  const errors: Record<string, string> = {};
  
  if (!name || name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  if (!email || !email.includes('@')) {
    errors.email = 'Invalid email';
  }
  
  if (!password || password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }
  
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  
  return { success: true };
}
```

---

## 🎯 Aaj Ka Summary

| Concept | Use Case |
|---------|----------|
| Client Validation | Instant feedback |
| Server Validation | Security |
| Error Display | User guidance |
| Success Messages | Confirmation |

---

## ✅ Next Steps
- Kal hum **Dark Mode** seekhenge
- Aaj ke practice problems solve karo
