export default function Dashboard(){
    return(
        <div className="flex min-h-screen ">
            {/*sidebar*/}
            <aside className="w-64 bg-gray-800 text-white p-4">
                <div className="text-xl font bold mb-8"></div>
                <nav className="space-y-2">
                    <a href="#" className="block py-2 px-4 bg-gray-700 rounded">Overview</a>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Analytics</a>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Settings</a>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Profile</a> 
                </nav>
            </aside>
            {/*Main content*/}
            <main className="flex-1 bg-gray-100 p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome Back!</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="font-bold text-gray-600">Total users</h3>
                        <p className="text-xl text-blue-600">1,234</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-gray-600 font-bold">Revenue</h3>
                        <p className="text-xl  text-green-600">12,345</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-gray-600 font-bold">Orders</h3>
                        <p className="text-xl text-purple-600">567</p>
                    </div>
                </div>
            </main>
        </div>
    );
}