export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Humara Mission</h2>
          <p className="text-gray-600 mb-4">
            Hum modern web technologies use karke fast aur beautiful websites banate hain.
          </p>
          <p className="text-gray-600 mb-4">
            Humara goal hai har client ko best quality dena.
          </p>
          <div className="flex gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">30+</div>
              <div className="text-gray-600">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">5+</div>
              <div className="text-gray-600">Years</div>
            </div>
          </div>
        </div>
        
        {/* Right - Image Placeholder */}
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg h-64 md:h-auto">
          {/* Image placeholder */}
        </div>
      </div>
    </div>
  );
}
