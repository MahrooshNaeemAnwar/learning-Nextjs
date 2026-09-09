import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Services(){
    return (
        <div className="min-h-screen bg-purple-50">
            <Navbar />
            <div className="p-8">
            <h1 className="text-4xl font-bold text-purple-600 mb-4">
                Our Services
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/services/web-design" className="Block">
                <div className="text-3xl font-bold mb-4 text-gray-800">Service 1
                <h3 className="text-xl font-bold  text-gray-700 mb-2">Web Design</h3>
                <p className="text-gray-600">We create beautiful and functional websites that help your business stand out.</p>
                </div>
                </Link>

                <Link href="/services/development" className="Block">
                <div className="text-3xl  font-bold mb-4 text-gray-800">Service 2
                <h3 className="text-xl font-bold  text-gray-700 mb-2">Development</h3>
                <p className="text-gray-600">Next.js and React apps</p>
                </div>
                </Link>

                <Link href="/services/mobile-apps" className="Block">
                <div className="text-3xl font-bold mb-4 text-gray-800">Service 3
                <h3 className="text-xl font-bold text-gray-700 mb-2">Mobile Apps</h3>
                <p className="text-gray-600">React Native Applications</p>
                </div>
                </Link>
                
                <Link href="/" 
                className="text-purple-500 hover:underline text-lg">
                    Back to Home
                </Link>
            </div>
            </div>
        </div>
    );
}