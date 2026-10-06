export default function Footer(){
    return (
        <footer className="bg-gray-800 text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-4">About</h3>
                    <p className="text-gray-400">About our company</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                       <li><a href="#" className="hover:text-white">About</a></li>  
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Contact</h3>
                    <p className="text-gray-400">gmail@example.com</p>
                </div>
            </div>
        </footer>
     );
}