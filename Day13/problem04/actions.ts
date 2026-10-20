'use server';

export type NewsletterState = {
  error?: string;
  message?: string;
  success?: boolean;
};

export async function subscribeNewsletter(prevState: NewsletterState, formData: FormData): Promise<NewsletterState> {
  const email = formData.get('email') as string;

  if (!email || !email.includes('@')) {
    return { error: 'Invalid email' };
  }

  console.log('New subscriber:', email);
  return { success: true, message: 'Thanks for subscribing!' };
}
