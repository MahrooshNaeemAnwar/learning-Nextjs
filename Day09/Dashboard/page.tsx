export default function Dashboard(){
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/*Sidebar */}
            <aside className="w-full md:w-64 bg-gray-800 text-white p-4">
                <h2 className="text-xl font-bold mb-4">Menu</h2>
                <nav className="space-y-2">
                    <a className="block py-2 px-4 bg-gray-700 rounded" href="#">Dashboard</a>
                    <a href="#" className="lock py-2 px-4 hover:bg-gray-700 rounded ">Settings</a>
                </nav>
                </aside>
                {/*Content */}
                <main className="flex-1 p-4">
                    <h2 className="text-xl font-bold mb-4">Dashboard</h2>
                </main>
        </div>
    );
}