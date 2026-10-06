export default function ResponsiveCard(){
    return (
        <div className="max-w-4xl mx-auto bg-white p-4 md:p-8">
            <h1 className="text-2xl text-gray-800 text-center font-bold mb-6">Responsive Card</h1>
            <div className="flex flex-col md:flex-row gap-4 rounded-lg shadow overflow-hidden">
                {/*Image */}
                <div className="w-full md:w-1/2 bg-blue-300 h-48 md:h-auto">
                    <img src="/Screenshot From 2026-09-04 18-33-29.png"  />
                </div>
                <div className="w-full md:w-1/2 bg-blue-300 p-4">
                    <h2 className="text-xl font-bold mb-2">Card Title</h2>
                    <p className="text-gray-700 mb-4">This is a responsive card component. It adjusts its layout based on the screen size.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Learn More</button>
                </div>
            </div>
      </div>
    );
} 