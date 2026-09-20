
import Image from "next/image";
const products = [
  { id: "1", name: "Laptop", price: 999, image:"/window.svg" },
  { id: "2", name: "Phone", price: 699, image: "/globe.svg" },
  { id: "3", name: "Tablet", price: 499, image:"/file.svg" },
];

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id}
            className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative h-64 bg-gray-700">
              <Image
              src={product.image}
              alt ={product.name}
              fill 
              className="object-contain"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4">{product.name}</h2>
              <p className="text-2xl text-green-600 font-bold ">${product.price}</p>
              <button className="w-full mt-4 bg-blue-500 py-2 text-white hover:bg-blue-600">
                Add to Cart</button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}
