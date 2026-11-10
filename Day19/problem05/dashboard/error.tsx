'use client';
import {useRouter} from 'next/navigation';

export default function Error({error,reset}:{error:Error; reset:() => void}) {
  const router = useRouter();

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md text-center">
                <h1 className="text-3xl font-bold mb-4">An Error Occurred</h1>
                <p className="text-red-500 mb-4">{error.message}</p>
                <div className="flex justify-center space-x-4">
                    <button 
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        onClick={reset}
                    >
                        Retry
                    </button>
                    <button onClick={() =>router.refresh()} 
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
                        Refresh
                    </button>
                    <button 
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                        onClick={() => router.push('/')}
                    >
                        Go Home
                    </button>
                </div>
            </div>
        </div>
    );
}