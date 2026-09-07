export default function BordersShadows() {
    return (
        <div className="bg-gray-50 p-8 space-y-4">
            <h1 className="text-3xl font-bold text-center text-gray-800">Borders & Shadows Practice</h1>
            {/* Borders */}
            <div className="space-y-2">
                <p className="border-2 border-blue-500 p-4 rounded">Border Blue</p>
                <p className="border-4 border-dashed border-red-500 p-4 rounded">Dashed Border Red</p>
                <p className="border-2 border-dotted border-green-500 p-4 rounded">Dotted Border Green</p>
                <p className="border-2 border-purple-500 rounded-full p-4">Rounded Border Purple</p>
            </div>
            {/* Shadows */}
            <div className="flex flex-wrap gap-4 mt-8">
                <p className="bg-white p-6 rounded shadow-sm">Shadow SM</p>
                <p className="bg-white p-6 rounded shadow-md">Shadow MD</p>
                <p className="bg-white p-6 rounded shadow-lg">Shadow LG</p>
                <p className="bg-white p-6 rounded shadow-xl">Shadow XL</p>
                <p className="bg-white p-6 rounded shadow-2xl">Shadow 2XL</p>
            </div>
        </div>
    );
}
