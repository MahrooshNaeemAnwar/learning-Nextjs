export default function SpaceBetween(){
    return(
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Space Between</h1>
            <div className="flex justify-between items-center p-4 rounded-lg mb-4">
                <div className="font-bold">Logo</div>
                   <div className="flex gap-4">
                    <a href="#" className="hover:bg-gray-300">Home</a>
                    <a href="#" className="hover:bg-gray-300">About</a>
                    </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Cart (3)</button>
            </div> 
                <div className="flex justify-between items-center p-4 rounded-lg shadow">
                    <span className="font-bold">Product Name</span>
                    <span className="text-green-500 font-bold">$99</span>
                </div>
                <button className="bg-blue-500 text-center text-white px-4 py-2 rounded">Add to Cart</button>
        </div>
    );
}