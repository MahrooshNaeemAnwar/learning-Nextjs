import {auth} from '@/auth';
import {redirect} from 'next/navigation';

export default async function DashboardPage(){
    const session=await auth();

 if (!session){
    redirect('/api/auth/signin');
 }
 return (
    <div className="max-w-full p-4 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
       <div className="bg-white p-4 rounded-lg shaodw text-center">
         <p className="text-3xl font-bold">Welcome,<strong>{session.user?.name}</strong>!</p>
         <p className="text-gray-300">{session.user?.email}</p>
       </div>
    </div>
     );
   }