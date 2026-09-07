export default function Colors(){
    return (
        <div className="bg-blue-50 p-8 space-y-4">
            <h1 className="text-3xl font-bold text-center text-gray-800">Colors Practice</h1>
            {/* Text Colors */}
            <div className="space-y-2">
                <p className="text-green-400 text-xl">Green Text</p>
                <p className="text-blue-400 text-xl">Blue Text</p>
                <p className="text-red-400 text-xl">Red Text</p>
                <p className="text-purple-400 text-xl">Purple Text</p>
                <p className="text-yellow-400 text-xl">Yellow Text</p>
            </div>
            {/* Background Colors */}
            <div className="flex flex-wrap gap-4 mt-8">
                <p className="bg-green-500 text-white p-6 rounded">Green background</p>
                <p className="bg-blue-500 text-white p-6 rounded">Blue background</p>
                <p className="bg-red-500 text-white p-6 rounded">Red background</p>
                <p className="bg-purple-500 text-white p-6 rounded">Purple background</p>
                <p className="bg-yellow-500 text-white p-6 rounded">Yellow background</p>
            </div>
        </div>
    );
}