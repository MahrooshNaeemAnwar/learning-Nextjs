import {auth} from '@/auth';
import {redirect} from 'next/navigation';

export default async function profilePage(){
    const session=await auth();

 if (!session){
    redirect('/api/auth/signin');
 }
 return (
    <div className="max-w-full p-4 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
       <div className="bg-white p-4 rounded-lg shaodw text-center">
        {session.user?.image && (
        <image src={session.user.image} alt='Avatar' className="w-24 h-42 mb-4 shadow-lg"/>
        )} 
         <h2 className="text-3xl font-bold">{session.user?.name}</h2>
         <p className="text-gray-300">{session.user?.email}</p>
       </div>
    </div>
     );
   }