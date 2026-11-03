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
