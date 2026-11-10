"use client";

export default function globalError({error,reset}:{error:Error ;reset:() => void}){
    return(
        <html>
            <body className="bg-gray-50">
                <div className="min-h-screen flex justify-center items-center">
                    <div className="text center">
                        <h1 className="text-3xl text-center font-bold mb-4">Application Error</h1>
                        <p className="text-2xl text-center">Something went terribly wrong!</p>
                        <button Onclick={reset} className="px-4 py-2 rounded bg-gray-500 text-white ">
                            Retry Application
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
}