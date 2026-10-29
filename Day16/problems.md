# Day 16: Practice Problems

## 🎯 Instructions
Forms with validation practice karo. Client aur server dono taraf validation karo.

---

## Problem 1: Registration Form
**Registration form with validation:**

```tsx
// app/register/page.tsx
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
```

✅ **Check:** Validation errors dikh rahe hain?

---

## Problem 2: Login Form
**Login form with validation:**

```tsx
// app/login/page.tsx
"use client";
import { useState } from 'react';

export default function LoginForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  async function handleSubmit(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    const newErrors: Record<string, string> = {};
    
    if (!email || !email.includes('@')) newErrors.email = 'Invalid email';
    if (!password) newErrors.password = 'Password is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    alert('Login successful!');
  }
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form action={handleSubmit} className="space-y-4">
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
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Login</button>
      </form>
    </div>
  );
}
```

✅ **Check:** Login form validate ho raha hai?

---

## Problem 3: Form with Loading State
**Loading state ke saath form:**

```tsx
// app/submit/page.tsx
"use client";
import { useState } from 'react';

export default function SubmitForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  async function handleSubmit(formData: FormData) {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    setSuccess(true);
  }
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Submit Form</h1>
      {success ? (
        <div className="bg-green-100 text-green-700 p-4 rounded">Submitted successfully!</div>
      ) : (
        <form action={handleSubmit} className="space-y-4">
          <input type="text" name="data" placeholder="Enter data" className="w-full border rounded-lg px-4 py-2" required />
          <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg disabled:opacity-50">
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  );
}
```

✅ **Check:** Loading state dikh raha hai?

---

## Problem 4: Multi-Field Validation
**Complex validation rules:**

```tsx
// app/form/page.tsx
"use client";
import { useState } from 'react';

export default function ComplexForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  async function handleSubmit(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const age = formData.get('age') as string;
    const website = formData.get('website') as string;
    
    const newErrors: Record<string, string> = {};
    
    if (!name || name.length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!email || !email.includes('@')) newErrors.email = 'Invalid email';
    if (!age || Number(age) < 18) newErrors.age = 'Must be at least 18';
    if (website && !website.startsWith('http')) newErrors.website = 'Must start with http';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    alert('Form submitted!');
  }
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Complex Form</h1>
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
          <label className="block text-sm font-medium mb-1">Age *</label>
          <input type="number" name="age" className={`w-full border rounded-lg px-4 py-2 ${errors.age ? 'border-red-500' : ''}`} />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Website (optional)</label>
          <input type="url" name="website" className={`w-full border rounded-lg px-4 py-2 ${errors.website ? 'border-red-500' : ''}`} />
          {errors.website && <p className="text-red-500 text-sm">{errors.website}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
}
```

✅ **Check:** Sab fields validate ho rahe hain?

---

## Problem 5: Form with Character Count
**Character count ke saath textarea:**

```tsx
// app/feedback/page.tsx
"use client";
import { useState } from 'react';

export default function FeedbackForm() {
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  async function handleSubmit(formData: FormData) {
    const feedback = formData.get('feedback') as string;
    
    if (feedback.length < 20) {
      setErrors({ feedback: 'Feedback must be at least 20 characters' });
      return;
    }
    
    setErrors({});
    alert('Feedback submitted!');
  }
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Feedback</h1>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Feedback</label>
          <textarea 
            name="feedback"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full border rounded-lg px-4 py-2 ${errors.feedback ? 'border-red-500' : ''}`}
          />
          <div className="flex justify-between mt-1">
            {errors.feedback && <p className="text-red-500 text-sm">{errors.feedback}</p>}
            <p className="text-sm text-gray-500 ml-auto">{message.length}/500</p>
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
}
```

✅ **Check:** Character count update ho raha hai?

---

## Problem 6: Password Strength Indicator
**Password strength indicator:**

```tsx
// app/register-strength/page.tsx
"use client";
import { useState } from 'react';

export default function RegisterWithStrength() {
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const getStrength = () => {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };
  
  const strength = getStrength();
  const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-lime-500', 'bg-green-500'];
  const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];
  
  async function handleSubmit(formData: FormData) {
    const pwd = formData.get('password') as string;
    
    if (pwd.length < 6) {
      setErrors({ password: 'Password must be at least 6 characters' });
      return;
    }
    
    setErrors({});
    alert('Registered!');
  }
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input 
            type="password" 
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full border rounded-lg px-4 py-2 ${errors.password ? 'border-red-500' : ''}`}
          />
          {password && (
            <div className="mt-2">
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`h-2 flex-1 rounded ${i <= strength ? strengthColors[strength - 1] : 'bg-gray-200'}`} />
                ))}
              </div>
              <p className="text-sm text-gray-600">{strengthLabels[strength - 1] || 'Too weak'}</p>
            </div>
          )}
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Register</button>
      </form>
    </div>
  );
}
```

✅ **Check:** Password strength indicator kaam kar raha hai?

---

## Problem 7: Form with Select & Radio
**Different input types:**

```tsx
// app/survey/page.tsx
"use client";
import { useState } from 'react';

export default function SurveyForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  async function handleSubmit(formData: FormData) {
    const name = formData.get('name') as string;
    const experience = formData.get('experience') as string;
    const rating = formData.get('rating') as string;
    
    const newErrors: Record<string, string> = {};
    
    if (!name) newErrors.name = 'Name is required';
    if (!experience) newErrors.experience = 'Select experience';
    if (!rating) newErrors.rating = 'Select rating';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    alert('Survey submitted!');
  }
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Survey</h1>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input type="text" name="name" className={`w-full border rounded-lg px-4 py-2 ${errors.name ? 'border-red-500' : ''}`} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Experience</label>
          <select name="experience" className={`w-full border rounded-lg px-4 py-2 ${errors.experience ? 'border-red-500' : ''}`}>
            <option value="">Select...</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Rating</label>
          <div className="flex gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <label key={num} className="flex items-center gap-1">
                <input type="radio" name="rating" value={num} />
                <span>{num}</span>
              </label>
            ))}
          </div>
          {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
}
```

✅ **Check:** Select aur radio validation kaam kar rahi hai?

---

## Problem 8: Dynamic Form Fields
**Dynamic fields add/remove:**

```tsx
// app/dynamic-form/page.tsx
"use client";
import { useState } from 'react';

export default function DynamicForm() {
  const [skills, setSkills] = useState(['']);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const addSkill = () => setSkills([...skills, '']);
  const removeSkill = (index: number) => setSkills(skills.filter((_, i) => i !== index));
  const updateSkill = (index: number, value: string) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };
  
  async function handleSubmit(formData: FormData) {
    const validSkills = skills.filter(s => s.trim());
    
    if (validSkills.length === 0) {
      setErrors({ skills: 'Add at least one skill' });
      return;
    }
    
    setErrors({});
    alert('Skills: ' + validSkills.join(', '));
  }
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Skills Form</h1>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Skills</label>
          {skills.map((skill, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input 
                type="text" 
                value={skill}
                onChange={(e) => updateSkill(index, e.target.value)}
                placeholder="Skill"
                className="flex-1 border rounded-lg px-4 py-2"
              />
              {skills.length > 1 && (
                <button type="button" onClick={() => removeSkill(index)} className="text-red-500">✕</button>
              )}
            </div>
          ))}
          <button type="button" onClick={addSkill} className="text-blue-500 text-sm">+ Add Skill</button>
          {errors.skills && <p className="text-red-500 text-sm">{errors.skills}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
}
```

✅ **Check:** Dynamic fields kaam kar rahe hain?

---

## Problem 9: Checkbox Validation
**Checkbox validation:**

```tsx
// app/terms/page.tsx
"use client";
import { useState } from 'react';

export default function TermsForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  async function handleSubmit(formData: FormData) {
    const terms = formData.get('terms') as string;
    const newsletter = formData.get('newsletter') as string;
    
    const newErrors: Record<string, string> = {};
    
    if (!terms) newErrors.terms = 'You must accept terms';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    alert('Form submitted! Newsletter: ' + (newsletter ? 'Yes' : 'No'));
  }
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Terms</h1>
      <form action={handleSubmit} className="space-y-4">
        <div className="flex items-center gap-2">
          <input type="checkbox" name="terms" id="terms" value="accepted" />
          <label htmlFor="terms">I accept the terms *</label>
        </div>
        {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
        
        <div className="flex items-center gap-2">
          <input type="checkbox" name="newsletter" id="newsletter" value="yes" />
          <label htmlFor="newsletter">Subscribe to newsletter</label>
        </div>
        
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
}
```

✅ **Check:** Terms checkbox required hai?

---

## Problem 10: Complete Form App
**Complete form app with all validations:**

```tsx
// app/complete-form/page.tsx
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
```

✅ **Check:** Complete form validation kaam kar rahi hai?

---

## ✅ Checklist
- [ ] Problem 1: Registration form
- [ ] Problem 2: Login form
- [ ] Problem 3: Form with loading state
- [ ] Problem 4: Multi-field validation
- [ ] Problem 5: Character count
- [ ] Problem 6: Password strength
- [ ] Problem 7: Select & radio
- [ ] Problem 8: Dynamic fields
- [ ] Problem 9: Checkbox validation
- [ ] Problem 10: Complete form app
