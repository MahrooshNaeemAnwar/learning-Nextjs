export default function Card() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Complete Card</h1>
      
      <div className="max-w-sm bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Image */}
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        
        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl text-gray-600 font-bold mb-2">Card Title</h2>
          <p className="text-gray-600 mb-4">
            Ye ek complete card hai jo sab Tailwind properties use karta hai.
          </p>
          
          <div className="flex gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              Tailwind
            </span>
            <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
              React
            </span>
          </div>
          
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-medium transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
