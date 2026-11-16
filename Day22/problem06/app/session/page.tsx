import { auth } from '@/auth';

export default async function SessionPage(){
    const session =await auth();

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Session Info</h1>
            <pre classname="bg-gray-100 rounded overflow-auto  p-4  ">
                {JSON.stringify(session,null,2)}
            </pre>
        </div>
    );
}