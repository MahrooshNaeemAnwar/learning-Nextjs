export default function ResponsiveGridSpanPage(){
    return(
        <div className="max-w-4xl mx-auto p-4 md:p-8">
            <h1 className="text-2xl font-bold mb-6">Responsive Grid Span </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2 bg-blue-500 p-4 rounded text-white">
                    Span 2 Columns
                </div>
                <div className="bg-green-500 p-4 rounded text-white">1</div>
                <div className="bg-yellow-500 p-4 rounded text-white">2</div>
                <div className="bg-purple-500 p-4 rounded text-white">3</div>
                <div className="bg-orange-500 p-4 rounded text-white">4</div>
                <div className="md:col-span-2 bg-red-500 p-4 rounded text-white">
                    Span 2 Columns
                </div>
                <div className="bg-pink-500 p-4 rounded text-white">5</div>
            </div>
        </div>
    );
}