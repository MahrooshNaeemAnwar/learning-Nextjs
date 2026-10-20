'use server';

export async function submitFeedback(formData: FormData) {
  const rating = formData.get('rating') as string;
  const feedback = formData.get('feedback') as string;

  console.log('Feedback:', { rating, feedback });
  return { success: true };
}
