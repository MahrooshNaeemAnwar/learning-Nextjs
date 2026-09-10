import Link from "next/link";
export default function Navbar(){
    return(
        <nav className="bg-gray-800 text-white p-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/*Logo*/}
                <Link href="/" className="text-xl font-bold">MySite</Link>
                {/*Navigation Links*/}
                <div className="flex gap-6">
                    <Link href="/" className="hover:text-gray-300">Home</Link>
                    <Link href="/about" className="hover:text-gray-300">About</Link>
                    <Link href="/services" className="hover:text-gray-300">Services</Link>
                    <Link href="/contact" className="hover:text-gray-300">Contact</Link>
                </div>
            </div>
        </nav>
    );
}