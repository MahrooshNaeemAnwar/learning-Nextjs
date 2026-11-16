import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import SignOutButton from '../components/SignOutButton';

export default async function ProtectedPage() {
  const session = await auth();
  if (!session) redirect('/login');
  
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Protected Content</h1>
      <p>Welcome, {session.user?.name}!</p>
      <SignOutButton />
    </div>
  );
}