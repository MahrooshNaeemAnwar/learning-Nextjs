import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Contact(){
    return (
        <div className="min-h-screen bg-green-50">
            <Navbar />
            <div className="p-8">
            <h1 className="text-4xl font-bold text-green-600 mb-4">
                Contact Us
            </h1>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
                <p className="text-gray-700 mb-2">
                    <strong>Email:</strong>info@mysite.com
                </p>
                <p className="text-gray-700 mb-2">
                    <strong> Phone :</strong> +92 123-456-7890
                </p>
                <p className="text-gray-700">
                    <strong>Address:</strong>Karachi,Pakistan 
                </p>
                <Link href="/"
                className="text-green-500 hover:underline text-lg">
                    Back to Home
                    </Link>
            </div>
            </div>
        </div>
    );
}