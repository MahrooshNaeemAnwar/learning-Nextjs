# Day 13: Practice Problems

## 🎯 Instructions
Server Actions practice karo. Forms with server-side handling banao.

---

## Problem 1: Contact Form
**Contact form with Server Action:**

```tsx
// app/actions.ts
'use server';

export async function submitContact(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  
  console.log('Contact form:', { name, email, message });
  
  return { success: true };
}

// app/contact/page.tsx
import { submitContact } from '../actions';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form action={submitContact} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input type="text" name="name" className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" name="email" className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea name="message" rows={4} className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
}
```

✅ **Check:** Form submit hone pe console mein data dikh raha hai?

---

## Problem 2: Todo App
**Todo app with add/delete:**

```tsx
// app/actions.ts
'use server';

let todos = [
  { id: 1, text: 'Learn Next.js', completed: false },
  { id: 2, text: 'Build a project', completed: false },
];

export async function addTodo(formData: FormData) {
  const text = formData.get('text') as string;
  if (text) {
    todos.push({ id: Date.now(), text, completed: false });
  }
}

export async function deleteTodo(formData: FormData) {
  const id = Number(formData.get('id'));
  todos = todos.filter(t => t.id !== id);
}

export async function toggleTodo(formData: FormData) {
  const id = Number(formData.get('id'));
  todos = todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
}

// app/todos/page.tsx
import { addTodo, deleteTodo, toggleTodo } from '../actions';

export default async function TodosPage() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Todo App</h1>
      
      <form action={addTodo} className="flex gap-2 mb-6">
        <input type="text" name="text" placeholder="Add todo..." className="flex-1 border rounded-lg px-4 py-2" required />
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">Add</button>
      </form>
      
      <div className="space-y-2">
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center gap-2 bg-white p-4 rounded-lg shadow">
            <form action={toggleTodo}>
              <input type="hidden" name="id" value={todo.id} />
              <button type="submit" className="text-2xl">{todo.completed ? '✅' : '⬜'}</button>
            </form>
            <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>{todo.text}</span>
            <form action={deleteTodo}>
              <input type="hidden" name="id" value={todo.id} />
              <button type="submit" className="text-red-500 hover:text-red-700">🗑️</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
```

✅ **Check:** Add, delete, toggle sab kaam kar raha hai?

---

## Problem 3: Form Validation
**Validated form:**

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
    errors.email = 'Invalid email address';
  }
  if (!password || password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }
  
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  
  return { success: true };
}

// app/register/page.tsx
import { registerUser } from '../actions';

export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <form action={registerUser} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input type="text" name="name" className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" name="email" className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input type="password" name="password" className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">
          Register
        </button>
      </form>
    </div>
  );
}
```

✅ **Check:** Invalid data pe errors dikh rahe hain?

---

## Problem 4: Newsletter Subscription
**Newsletter form:**

```tsx
// app/actions.ts
'use server';

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get('email') as string;
  
  if (!email || !email.includes('@')) {
    return { error: 'Invalid email' };
  }
  
  console.log('New subscriber:', email);
  return { success: true, message: 'Thanks for subscribing!' };
}

// app/newsletter/page.tsx
import { subscribeNewsletter } from '../actions';

export default function NewsletterPage() {
  return (
    <div className="max-w-md mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Newsletter</h1>
      <p className="text-gray-600 mb-6">Subscribe to get updates</p>
      <form action={subscribeNewsletter} className="flex gap-2">
        <input 
          type="email" 
          name="email" 
          placeholder="Enter email"
          className="flex-1 border rounded-lg px-4 py-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">
          Subscribe
        </button>
      </form>
    </div>
  );
}
```

✅ **Check:** Email submit hone pe success message?

---

## Problem 5: Search Form
**Search form with Server Action:**

```tsx
// app/actions.ts
'use server';

export async function searchPosts(formData: FormData) {
  const query = formData.get('query') as string;
  
  const posts = [
    { id: 1, title: 'Next.js Tutorial' },
    { id: 2, title: 'React Guide' },
    { id: 3, title: 'Tailwind CSS' },
  ];
  
  const results = posts.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase())
  );
  
  return { results, query };
}

// app/search/page.tsx
import { searchPosts } from '../actions';

export default function SearchPage() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Search Posts</h1>
      <form action={searchPosts} className="flex gap-2 mb-6">
        <input 
          type="text" 
          name="query"
          placeholder="Search..."
          className="flex-1 border rounded-lg px-4 py-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
}
```

✅ **Check:** Search results dikh rahe hain?

---

## Problem 6: Feedback Form
**Feedback form with rating:**

```tsx
// app/actions.ts
'use server';

export async function submitFeedback(formData: FormData) {
  const rating = formData.get('rating') as string;
  const feedback = formData.get('feedback') as string;
  
  console.log('Feedback:', { rating, feedback });
  return { success: true };
}

// app/feedback/page.tsx
import { submitFeedback } from '../actions';

export default function FeedbackPage() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Feedback</h1>
      <form action={submitFeedback} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <label key={num} className="cursor-pointer">
                <input type="radio" name="rating" value={num} className="hidden" />
                <span className="text-2xl hover:scale-110 transition-transform">⭐</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Feedback</label>
          <textarea name="feedback" rows={4} className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
```

✅ **Check:** Rating aur feedback submit ho raha hai?

---

## Problem 7: Profile Update
**Profile update form:**

```tsx
// app/actions.ts
'use server';

export async function updateProfile(formData: FormData) {
  const name = formData.get('name') as string;
  const bio = formData.get('bio') as string;
  
  console.log('Profile updated:', { name, bio });
  return { success: true };
}

// app/profile/page.tsx
import { updateProfile } from '../actions';

export default function ProfilePage() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>
      <form action={updateProfile} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input type="text" name="name" defaultValue="Mahroosh" className="w-full border rounded-lg px-4 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Bio</label>
          <textarea name="bio" rows={4} className="w-full border rounded-lg px-4 py-2" defaultValue="Web developer" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">
          Save Changes
        </button>
      </form>
    </div>
  );
}
```

✅ **Check:** Profile update hone pe success message?

---

## Problem 8: Multi-Step Form
**Multi-step form:**

```tsx
// app/actions.ts
'use server';

export async function submitStep1(formData: FormData) {
  const name = formData.get('name') as string;
  console.log('Step 1:', { name });
  return { success: true, step: 2 };
}

export async function submitStep2(formData: FormData) {
  const email = formData.get('email') as string;
  console.log('Step 2:', { email });
  return { success: true, step: 3 };
}

// app/multi-step/page.tsx
import { submitStep1, submitStep2 } from '../actions';

export default function MultiStepPage() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Multi-Step Form</h1>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Step 1: Personal Info</h2>
        <form action={submitStep1} className="space-y-4">
          <input type="text" name="name" placeholder="Name" className="w-full border rounded-lg px-4 py-2" required />
          <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">
            Next Step
          </button>
        </form>
      </div>
    </div>
  );
}
```

✅ **Check:** Steps work kar rahe hain?

---

## Problem 9: File Upload Form
**File upload form:**

```tsx
// app/actions.ts
'use server';

export async function uploadFile(formData: FormData) {
  const file = formData.get('file') as File;
  
  console.log('File:', file.name, file.size);
  return { success: true };
}

// app/upload/page.tsx
import { uploadFile } from '../actions';

export default function UploadPage() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Upload File</h1>
      <form action={uploadFile} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Choose File</label>
          <input type="file" name="file" className="w-full border rounded-lg px-4 py-2" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">
          Upload
        </button>
      </form>
    </div>
  );
}
```

✅ **Check:** File upload ho raha hai?

---

## Problem 10: Complete Form App
**Complete forms app:**

```tsx
// app/actions.ts
'use server';

export async function submitContact(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  
  console.log('Contact:', { name, email, message });
  return { success: true };
}

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get('email') as string;
  console.log('Newsletter:', email);
  return { success: true };
}

// app/page.tsx
import { submitContact, subscribeNewsletter } from './actions';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <form action={submitContact} className="space-y-4 max-w-md">
          <input type="text" name="name" placeholder="Name" className="w-full border rounded-lg px-4 py-2" required />
          <input type="email" name="email" placeholder="Email" className="w-full border rounded-lg px-4 py-2" required />
          <textarea name="message" placeholder="Message" rows={4} className="w-full border rounded-lg px-4 py-2" required />
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">Send</button>
        </form>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
        <form action={subscribeNewsletter} className="flex gap-2 max-w-md">
          <input type="email" name="email" placeholder="Email" className="flex-1 border rounded-lg px-4 py-2" required />
          <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-lg">Subscribe</button>
        </form>
      </section>
    </div>
  );
}
```

✅ **Check:** Dono forms kaam kar rahe hain?

---

## ✅ Checklist
- [ ] Problem 1: Contact form
- [ ] Problem 2: Todo app
- [ ] Problem 3: Form validation
- [ ] Problem 4: Newsletter subscription
- [ ] Problem 5: Search form
- [ ] Problem 6: Feedback form
- [ ] Problem 7: Profile update
- [ ] Problem 8: Multi-step form
- [ ] Problem 9: File upload
- [ ] Problem 10: Complete forms app
