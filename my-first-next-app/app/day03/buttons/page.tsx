export default function Buttons(){
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-700 mb-6">Hover buttons</h1>
            <div className="flex flex-wrap gap-4">
                {/*basic hover*/}
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium transition-colors">hover dark</button>
                {/*hover scale */}
                <button className="bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded font-medium hover:scale-105 transition-all"> hover scale</button>
                {/*shadow hover */}
                <button className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-3 rounded font-medium hover:shadow-lg transition-all"> hover shadow</button>
                {/* border hover */}
                <button className="bg-white text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white px-6 
                py-3 rounded font-medium transition-all">hover border</button>
            </div>
        </div>
    );
}