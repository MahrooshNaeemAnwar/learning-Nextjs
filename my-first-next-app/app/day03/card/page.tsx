export default function BordersShadows() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Borders & Shadows</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Border Card */}
        <div className="border border-gray-300 p-6 rounded">
          <h3 className="font-bold mb-2">Simple Border</h3>
          <p className="text-gray-600 text-sm">border border-gray-300</p>
        </div>
        
        {/* Thick Border Card */}
        <div className="border-4 border-blue-500 p-6 rounded">
          <h3 className="font-bold mb-2">Thick Border</h3>
          <p className="text-gray-600 text-sm">border-4 border-blue-500</p>
        </div>
        
        {/* Shadow Card */}
        <div className="shadow-lg p-6 rounded-lg bg-white">
          <h3 className="font-bold mb-2">Shadow</h3>
          <p className="text-gray-600 text-sm">shadow-lg</p>
        </div>
        
        {/* Border + Shadow Card */}
        <div className="border-2 border-green-500 shadow-xl p-6 rounded-lg">
          <h3 className="font-bold mb-2">Border + Shadow</h3>
          <p className="text-gray-600 text-sm">border-2 + shadow-xl</p>
        </div>
      </div>
    </div>
  );
}
