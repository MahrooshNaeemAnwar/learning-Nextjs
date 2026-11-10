'use client';

export default function DashboardError({error,reset}:{error:Error; reset:() => void}) {
    return(
        <div className="p-4 text-center">
            <h1 className="text-3xl font-bold underline">Dashboard Error</h1>
            <p className="text-red-500">{error.message}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={reset}>Retry</button>
        </div>
    );
}