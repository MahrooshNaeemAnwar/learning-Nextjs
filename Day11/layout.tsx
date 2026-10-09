import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Site",
  description: "A Next.js website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <nav className="bg-white shadow p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="font-bold text-xl">
              MyApp
            </Link>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-500">
                About
              </Link>
              <Link href="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; 2026 MyApp</p>
        </footer>
      </body>
    </html>
  );
}
