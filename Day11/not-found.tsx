import Link from "next/link";
export default function Notfound(){
    return (
        <div className="text-center py-8">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-xl text-gray-600 mb-4">Page not found</h2>
            <p className="text-gray-500">
                The page you are looking for does not exist.
            </p>
            <Link href="/" className="bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600">
                Go back Home
            </Link>
        </div>
    );
}