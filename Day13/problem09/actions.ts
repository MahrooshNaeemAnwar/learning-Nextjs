'use server';

export async function uploadFile(formData: FormData) {
  const file = formData.get('file') as File;

  console.log('File:', file.name, file.size);
  return { success: true };
}
