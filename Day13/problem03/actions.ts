'use server';

export type RegisterState = {
  errors?: Record<string, string>;
  success?: boolean;
  message?: string;
};

export async function userRegister(prevState: RegisterState, formData: FormData): Promise<RegisterState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const errors: Record<string, string> = {};

  if (!name || name.length < 2) {
    errors.name = 'Name must contain at least 2 characters';
  }
  if (!email || !email.includes('@')) {
    errors.email = 'Invalid email';
  }
  if (!password || password.length < 6) {
    errors.password = 'Password must be at least of 6 characters';
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  return { success: true, message: 'Registration successful!' };
}
