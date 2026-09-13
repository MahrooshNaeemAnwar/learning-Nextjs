
import Link from "next/link";
export default function Home() {
  return (
    <div>
      

      {/* Hero section*/}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
           <h1 className="text-5xl font-bold mb-4">Welcome to MySite</h1>
             <p className="text-xl mb-8">Learning Next.js with Tailwind CSS</p>
             <Link href="/about" className="bg-white text-blue-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
            About Us
            </Link>
          </div>
        </div>
      {/*features*/}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl text-center font-bold mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Fast</h3>
            <p className="text-gray-600">Lightning Fast Performance</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-700 mb-4">Secure</h3>
              <p className="text-gray-600">Enterprise level security</p>
            </div>
            <div className="text-center bg-white p-6 rounded=lg shadow-md">
              <h3 className="text-xl font-bold text-gray-700 mb-4">Responsive</h3>
              <p className="text-gray-600">Works on all devices</p>
            </div>
        </div>
      </div>
     </div>
    
  );
}
