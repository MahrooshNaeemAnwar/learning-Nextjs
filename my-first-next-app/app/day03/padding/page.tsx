export default function Padding(){
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-4">Padding Practice</h1>

            <div className="space-y-2">
                <div className="bg-blue-100 p-1">padding 4px</div>
                <div className="bg-blue-200 p-2">padding 8px</div>
                <div className="bg-blue-300 p-3">padding 16px</div>
                <div className="bg-blue-400 text-white p-4">padding 24px</div>
                <div className="bg-blue-500 text-white p-6">padding 32px</div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Individual Padding</h2>
            <div className="flex flex-wrap gap-4">
                <div className="bg-green-200 px-4 py-2">PX-4 PY-2</div>
                <div className="bg-green-300 pt-4 pb-8">pt-4 pb-8</div>
                <div className="bg-green-400 pl-8 pr-4">pl-8 pr-4</div>
            </div>
        </div>
    )
}