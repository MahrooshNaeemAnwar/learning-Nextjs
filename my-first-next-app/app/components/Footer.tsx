import Link from "next/link";
export default function Footer(){
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div >
                        <h3 className="text-xl font-bold mb-4">About</h3>
                        <p className="text-gray-500">Hum websites banate hn </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="/" className="hover:text-white">Home</Link></li>
                            <li><Link href="/about" className="hover:text-white">About</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                            <li><Link href="/services" className="hover:text-white">Services</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <p className="text-gray-500">info@mySite</p>
                    </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-800">
                        <p>&copy ; 2026 MySite</p>
                    </div>
                </div>
            </footer>
    );
}