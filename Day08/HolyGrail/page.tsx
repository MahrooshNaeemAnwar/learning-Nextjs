export default function HolyGrail() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-gray-800 text-white p-4">
                <div className="max-w-6xl justify-between flex items-center">
                    <h1 className="text-2xl font-bold">My Site</h1>
                    <nav className="flex gap-4">
                        <a href="#" className="hover:bg-gray-600 p-2 rounded">Home</a>
                        <a href="#" className="hover:bg-gray-600 p-2 rounded">About</a>
                        <a href="#" className="hover:bg-gray-600 p-2 rounded">Contact</a>
                    </nav>
                 </div>
            </header>

            {/* Main Content */}
            <main className="flex flex-1">
                <aside className="bg-gray-200 w-64 p-4">
                    <h2 className="text-xl font-semibold mb-2">Sidebar</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Link 1</a></li>
                        <li><a href="#" className="hover:underline">Link 2</a></li>
                        <li><a href="#" className="hover:underline">Link 3</a></li>
                    </ul>
                </aside>

                <div className="flex-1 p-4">
                    <h2 className="text-xl font-semibold mb-2">Content Area</h2>
                    <p className="text-gray-600">
                        This is the main content area with Holy Grail layout.
                    </p>
                </div>
            </main>
                

            {/* Footer */}
            <footer className="bg-gray-800 text-white p-4">
                <p>&copy; 2023 My App. All rights reserved.</p>
            </footer>
        </div> 
        ); 
    } 