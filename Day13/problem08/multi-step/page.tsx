'use client';

import { useState } from 'react';
import { submitStep1, submitStep2 } from '../actions';

export default function MultiStepPage() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  async function handleStep1(formData: FormData) {
    const result = await submitStep1(formData);
    if (result.success) setStep(result.step);
  }

  async function handleStep2(formData: FormData) {
    const result = await submitStep2(formData);
    if (result.success) setDone(true);
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Multi-Step Form</h1>

      {done ? (
        <div className="bg-green-100 text-green-700 p-6 rounded-lg text-center">
          🎉 Registration complete!
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-500 mb-2">Step {step} of 2</p>

          {step === 1 && (
            <>
              <h2 className="text-xl font-bold mb-4">Step 1: Personal Info</h2>
              <form action={handleStep1} className="space-y-4">
                <input type="text" name="name" placeholder="Name" className="w-full border rounded-lg px-4 py-2" required />
                <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">
                  Next Step
                </button>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-xl font-bold mb-4">Step 2: Contact Info</h2>
              <form action={handleStep2} className="space-y-4">
                <input type="email" name="email" placeholder="Email" className="w-full border rounded-lg px-4 py-2" required />
                <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">
                  Finish
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}
