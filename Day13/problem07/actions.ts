'use server';

export type ProfileState = {
  success?: boolean;
  message?: string;
};

export async function updateProfile(prevState: ProfileState, formData: FormData): Promise<ProfileState> {
  const name = formData.get('name') as string;
  const bio = formData.get('bio') as string;

  console.log('Profile updated:', { name, bio });
  return { success: true, message: 'Profile updated successfully!' };
}
