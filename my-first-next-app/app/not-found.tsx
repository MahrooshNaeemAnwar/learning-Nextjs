import Link from "next/link";
export default function Notfound(){
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold  text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-4">Page not found</p>
                <Link href="/" className="bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600">
                 Go back Home</Link>
            </div>
        </div>
    );
}