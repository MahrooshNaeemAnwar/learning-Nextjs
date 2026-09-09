import Link from "next/link";

export default function WebDesign() {
    return (
        <div className="min-h-screen bg-purple-50 p-8">
            <h1 className="text-4xl font-bold text-purple-600 mb-4">Web Design</h1>
            <p className="text-gray-600 mb-6">We create beautiful and functional websites that help your business stand out.</p>
            <Link href="/services" className="text-purple-600 underline">Back to Services</Link>
        </div>
    );
}
