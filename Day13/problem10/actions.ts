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
