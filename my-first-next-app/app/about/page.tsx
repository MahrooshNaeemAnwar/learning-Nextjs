import Link from "next/link";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar />
      <div className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        About Us
      </h1>
      <p className="text-lg text-gray-700">
        Hum ek software company hain jo Next.js mein websites banati hai.
      </p>
      <p className="text-lg text-gray-700 mt-2">
        Hamara mission: Fast aur beautiful wesites banana.
      </p>
      <Link href="/"
      className="text-blue-500 hover:underline text-lg">
        Back to Home
      </Link>
      </div>
    </div>
  );
}
