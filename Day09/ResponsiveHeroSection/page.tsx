export default function RespnsiveHero(){
    return(
        <div className="bg-gradient-to-r from-blue-600 to-green-400 py-12 md:py-20  ">
            <div className="max-w-6xl mx-auto p-4 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
                Hero Title
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white text-center mb-8">
                This is a responsive hero section. The text size and padding adjust based on the screen size.
            </p>
            <button className="bg-white text-blue-500 px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-gray-300">
                Get Started
            </button>
        </div>
    </div>
    );
}