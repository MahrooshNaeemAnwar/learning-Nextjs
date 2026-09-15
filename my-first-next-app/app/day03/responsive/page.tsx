export default function Responsive() {
    return (
        <div className="bg-gray-50 p-8 space-y-4">
            <h1 className="text-3xl font-bold text-center text-gray-800">Responsive Design Practice</h1>
            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                <div className="bg-blue-500 text-white p-6 rounded text-center">Box 1</div>
                <div className="bg-green-500 text-white p-6 rounded text-center">Box 2</div>
                <div className="bg-red-500 text-white p-6 rounded text-center">Box 3</div>
                <div className="bg-purple-500 text-white p-6 rounded text-center">Box 4</div>
                <div className="bg-yellow-500 text-white p-6 rounded text-center">Box 5</div>
                <div className="bg-pink-500 text-white p-6 rounded text-center">Box 6</div>
                <div className="bg-indigo-500 text-white p-6 rounded text-center">Box 7</div>
                <div className="bg-teal-500 text-white p-6 rounded text-center">Box 8</div>
            </div>
            {/* Responsive Text */}
            <div className="mt-8">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
                    This text changes size based on screen width!
                </p>
            </div>
        </div>
    );
}
