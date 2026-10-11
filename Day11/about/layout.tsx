import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-8">
      <aside className="w-64 bg-white p-4 rounded-lg shadow h-fit">
        <h3 className="font-bold mb-4">About Menu</h3>
        <nav className="space-y-2">
          <Link
            href="/about"
            className="block py-2 px-4 hover:bg-gray-100 rounded"
          >
            Overview
          </Link>
          <Link
            href="/about/team"
            className="block py-2 px-4 hover:bg-gray-100 rounded"
          >
            Team
          </Link>
          <Link
            href="/about/history"
            className="block py-2 px-4 hover:bg-gray-100 rounded"
          >
            History
          </Link>
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
