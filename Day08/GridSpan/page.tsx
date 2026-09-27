export default function GridSpan(){
    return(
        <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Grid with Span</h1>
            <div className="grid grid-cols-4 gap-4">
            <div className="col-span-2 bg-blue-500 text-white rounded p-6">Spans 2 columns</div>
            <div className="bg-green-500 text-white p-6 rounded">1</div>
            <div className="bg-yellow-500 text-white p-6 rounded">1</div>
            <div className="bg-purple-500 text-white rounded p-6">1</div>
            <div className="col-span-2 bg-red-500 text-white p-6 rounded">Spans 2 columns</div>
            <div className="bg-pink-500 text-white p-6 rounded">1</div>
            <div className="col-span-4 bg-gray-800 text-white p-6 rounded text-center">Full Width -spans 4 columns</div>
        </div>
        </div>
    );
}