import Link from "next/link";

export default function Notfound(){
    return(
        <div className="min-h-screen p-4 justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-500 mb-4">404</h1>
                <p className="text-gray-500 mb-4">Page not found</p>
                <Link href="/" className="text-blue-500 hover:text-blue-700">
                    Go back home
                </Link>
            </div>
        </div>
    );
}