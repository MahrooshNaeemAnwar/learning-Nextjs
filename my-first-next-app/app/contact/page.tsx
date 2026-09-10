export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="text-2xl">📍</div>
              <div>
                <div className="font-bold">Address</div>
                <div className="text-gray-600">Karachi, Pakistan</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-2xl">📧</div>
              <div>
                <div className="font-bold">Email</div>
                <div className="text-gray-600">info@mysite.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-2xl">📞</div>
              <div>
                <div className="font-bold">Phone</div>
                <div className="text-gray-600">+92 300 1234567</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                className="w-full px-4 py-2 border text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows={4}
                placeholder="Your message"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
