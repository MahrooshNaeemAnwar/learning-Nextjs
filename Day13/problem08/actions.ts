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
